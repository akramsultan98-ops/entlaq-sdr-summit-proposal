"use client";

/**
 * Embedded workbook viewer.
 *
 * Renders the original Excel quotation as closely to its source formatting as
 * the browser allows: merged ranges, column widths, row heights, fills, fonts,
 * alignment and borders are read from the workbook itself.
 *
 * Read-only by design. No editing, no charts, no derived figures — this is a
 * document embedded in the proposal, not a dashboard.
 *
 * exceljs is loaded via dynamic import so it never enters the main bundle.
 */

import { useEffect, useState } from "react";

const SRC = "/commercial/quotation.xlsx";

/* ── ARGB (as stored by Excel) → CSS ── */
function argb(v?: string): string | undefined {
  if (!v) return undefined;
  const hex = v.length === 8 ? v.slice(2) : v;
  if (!/^[0-9A-Fa-f]{6}$/.test(hex)) return undefined;
  return `#${hex}`;
}

interface Cell {
  key: string;
  text: string;
  colSpan: number;
  rowSpan: number;
  style: React.CSSProperties;
}
interface Row {
  key: string;
  height?: number;
  cells: Cell[];
}
interface Sheet {
  name: string;
  cols: (number | undefined)[];
  rows: Row[];
}

type State =
  | { s: "loading" }
  | { s: "missing" }
  | { s: "error"; msg: string }
  | { s: "ready"; sheets: Sheet[] };

export function Workbook() {
  const [state, setState] = useState<State>({ s: "loading" });
  const [active, setActive] = useState(0);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      try {
        const res = await fetch(SRC, { cache: "no-store" });
        if (res.status === 404) {
          if (!cancelled) setState({ s: "missing" });
          return;
        }
        if (!res.ok) throw new Error(`HTTP ${res.status}`);

        const buf = await res.arrayBuffer();
        // Guard against a placeholder/HTML response being parsed as xlsx
        if (buf.byteLength < 512) {
          if (!cancelled) setState({ s: "missing" });
          return;
        }

        const ExcelJS = await import("exceljs");
        const wb = new ExcelJS.Workbook();
        await wb.xlsx.load(buf);

        const sheets: Sheet[] = [];

        wb.eachSheet((ws) => {
          // Cells consumed by a merge master
          const covered = new Set<string>();
          const merges: Record<string, { rs: number; cs: number }> = {};

          // exceljs exposes merges on the model
          const ranges: string[] =
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            ((ws as any).model?.merges as string[] | undefined) ?? [];

          ranges.forEach((range) => {
            const [a, b] = range.split(":");
            if (!a || !b) return;
            const p = (ref: string) => {
              const m = /^([A-Z]+)(\d+)$/.exec(ref);
              if (!m) return null;
              let c = 0;
              for (const ch of m[1]) c = c * 26 + (ch.charCodeAt(0) - 64);
              return { r: parseInt(m[2], 10), c };
            };
            const s = p(a);
            const e = p(b);
            if (!s || !e) return;
            merges[`${s.r}:${s.c}`] = { rs: e.r - s.r + 1, cs: e.c - s.c + 1 };
            for (let r = s.r; r <= e.r; r++) {
              for (let c = s.c; c <= e.c; c++) {
                if (!(r === s.r && c === s.c)) covered.add(`${r}:${c}`);
              }
            }
          });

          const colCount = Math.max(ws.columnCount, 1);
          const cols: (number | undefined)[] = [];
          for (let c = 1; c <= colCount; c++) {
            const w = ws.getColumn(c).width;
            cols.push(w ? Math.round(w * 7.5) : undefined);
          }

          const rows: Row[] = [];

          ws.eachRow({ includeEmpty: true }, (row, rowNumber) => {
            const cells: Cell[] = [];

            for (let c = 1; c <= colCount; c++) {
              const id = `${rowNumber}:${c}`;
              if (covered.has(id)) continue;

              const cell = row.getCell(c);
              const m = merges[id];

              const style: React.CSSProperties = {};

              // fill
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              const fill = cell.fill as any;
              if (fill?.type === "pattern" && fill.pattern === "solid") {
                const bg = argb(fill.fgColor?.argb);
                if (bg) style.background = bg;
              }

              // font
              const f = cell.font;
              if (f) {
                if (f.bold) style.fontWeight = 600;
                if (f.italic) style.fontStyle = "italic";
                if (f.size) style.fontSize = `${f.size}px`;
                if (f.underline) style.textDecoration = "underline";
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                const fc = argb((f.color as any)?.argb);
                if (fc) style.color = fc;
              }

              // alignment
              const al = cell.alignment;
              if (al?.horizontal && al.horizontal !== "fill")
                style.textAlign = al.horizontal as React.CSSProperties["textAlign"];
              if (al?.vertical)
                style.verticalAlign = al.vertical === "middle" ? "middle" : al.vertical;
              if (al?.wrapText) style.whiteSpace = "pre-wrap";

              // borders
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              const b = cell.border as any;
              const edge = (e: any) =>
                e ? `1px ${e.style === "double" ? "double" : "solid"} ${argb(e.color?.argb) ?? "#c8c8c8"}` : undefined;
              if (b?.top) style.borderTop = edge(b.top);
              if (b?.bottom) style.borderBottom = edge(b.bottom);
              if (b?.left) style.borderLeft = edge(b.left);
              if (b?.right) style.borderRight = edge(b.right);

              let text = "";
              try {
                text = cell.text ?? "";
              } catch {
                text = cell.value != null ? String(cell.value) : "";
              }

              cells.push({
                key: id,
                text,
                colSpan: m?.cs ?? 1,
                rowSpan: m?.rs ?? 1,
                style,
              });
            }

            rows.push({
              key: `r${rowNumber}`,
              height: row.height ? Math.round(row.height * 1.34) : undefined,
              cells,
            });
          });

          // trim trailing fully-empty rows
          while (rows.length && rows[rows.length - 1].cells.every((c) => !c.text)) rows.pop();

          sheets.push({ name: ws.name, cols, rows });
        });

        if (!cancelled) {
          setState(sheets.length ? { s: "ready", sheets } : { s: "missing" });
        }
      } catch (e) {
        if (!cancelled)
          setState({ s: "error", msg: e instanceof Error ? e.message : "Unreadable workbook" });
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  /* ── states ── */

  if (state.s === "loading") {
    return (
      <div className="flex h-56 items-center justify-center rounded-xl border border-cream-100/[0.07]">
        <span className="text-xs tracking-wide text-cream-500">Loading quotation…</span>
      </div>
    );
  }

  if (state.s === "missing") {
    return (
      <div className="rounded-xl border border-dashed border-cream-100/15 bg-cream-100/[0.02] px-8 py-14 text-center">
        <p className="font-display text-xl text-cream-100">
          The commercial quotation accompanies this proposal.
        </p>
        <p className="mx-auto mt-3 max-w-lg text-[13.5px] leading-[1.75] text-cream-300/65">
          It is submitted alongside this document per RFP&nbsp;§6. Once the workbook is placed at{" "}
          <code className="rounded bg-cream-100/[0.06] px-1.5 py-0.5 font-mono text-[12px] text-signal-400">
            public/commercial/quotation.xlsx
          </code>
          , it appears here in full with its original formatting.
        </p>
      </div>
    );
  }

  if (state.s === "error") {
    return (
      <div className="rounded-xl border border-cream-100/[0.07] px-8 py-12 text-center">
        <p className="text-[14px] text-cream-100">The quotation could not be displayed.</p>
        <p className="mt-2 text-[12.5px] text-cream-500">
          {state.msg} — please use the download above.
        </p>
      </div>
    );
  }

  const sheet = state.sheets[Math.min(active, state.sheets.length - 1)];

  return (
    <div>
      {/* sheet tabs — only when the workbook has more than one */}
      {state.sheets.length > 1 && (
        <div className="mb-4 flex flex-wrap gap-1.5">
          {state.sheets.map((s, i) => (
            <button
              key={s.name}
              onClick={() => setActive(i)}
              className={`rounded-md border px-3.5 py-1.5 text-[12px] tracking-wide transition-colors ${
                i === active
                  ? "border-signal-500/50 bg-signal-500/10 text-signal-400"
                  : "border-cream-100/10 text-cream-500 hover:border-cream-100/25 hover:text-cream-100"
              }`}
            >
              {s.name}
            </button>
          ))}
        </div>
      )}

      {/* the workbook, on paper */}
      <div className="overflow-auto rounded-xl border border-cream-100/[0.09] bg-white shadow-2xl shadow-black/40">
        <div className="max-h-[78vh] min-w-full">
          <table
            className="w-max border-collapse text-[12.5px] text-[#1a1a1a]"
            style={{ fontFamily: "Calibri, Segoe UI, system-ui, sans-serif" }}
          >
            <colgroup>
              {sheet.cols.map((w, i) => (
                <col key={i} style={w ? { width: w } : undefined} />
              ))}
            </colgroup>
            <tbody>
              {sheet.rows.map((r) => (
                <tr key={r.key} style={r.height ? { height: r.height } : undefined}>
                  {r.cells.map((c) => (
                    <td
                      key={c.key}
                      colSpan={c.colSpan > 1 ? c.colSpan : undefined}
                      rowSpan={c.rowSpan > 1 ? c.rowSpan : undefined}
                      style={{ padding: "3px 8px", ...c.style }}
                    >
                      {c.text}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <p className="mt-3 text-xs text-cream-500">
        Displayed read-only, as submitted. Download for the working file.
      </p>
    </div>
  );
}
