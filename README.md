# Made Visible — ENTLAQ SDR Summit 2026

Interactive executive proposal. Next.js 15 · TypeScript · Tailwind · Framer Motion.

```bash
npm run dev     # http://localhost:3000
npm run build   # production build
npm start       # serve production build
```

## Where to edit

**All copy lives in one file: [`content/proposal.ts`](content/proposal.ts).** Components render, they never author. Change a string there and it appears in the UI — no component edits needed.

Placeholders use `TODO("Label")` and render as an amber dashed chip. Replace with a plain string to fill them in:

```ts
agency: TODO("Agency name"),   // → renders as a placeholder chip
agency: "Paradigm",            // → renders as text
```

Chapter order, titles and the 5-minute reading mode are controlled by [`content/chapters.ts`](content/chapters.ts) — the `brief: true` flag decides what survives in Decider mode.

## Structure

```
app/            layout, page (chapter assembly), globals.css
components/
  chrome/       Rail — nav, progress, reading-mode toggle, PDF export
  ui/           primitives — Reveal, Stagger, Section, Pill, Placeholder
  viz/          DataWall (the signature moment), Charts (map, allocation, peaks, gantt)
  sections/     ActI, ActII, ActIII — one export per chapter
content/        proposal.ts (all copy), chapters.ts (spine)
public/media/   normalised imagery
docs/           the 15 approved strategy documents this is built from
```

## Design system

Defined in [`tailwind.config.ts`](tailwind.config.ts), derived from `docs/11_creative_concept.md`.

| Token | Role |
|---|---|
| `abyss` / `navy` | Foundation — Act I, evening environments |
| `depth-*` | The Depth Gradient — Act II, the descent |
| `signal-*` | **Meaning only.** Never decoration. |
| `cream-*` | Clarity — type, negative space |

Three background utilities carry the three acts: `.depth-field`, `.depth-field-deep`, `.depth-field-warm`. `.lattice` is the ten-column Sector Lattice.

## Behaviour worth knowing

- **`prefers-reduced-motion`** — every animation degrades. The DataWall jumps straight to its resolved state.
- **Print** — there is no export button; the proposal is delivered as a web experience. The print stylesheet is retained so the browser's own Ctrl+P still produces something legible, but it is not the intended deliverable.
- **No external runtime calls** — fonts are self-hosted at build time, imagery is local.

## Outstanding

Content marked `[CLIENT INPUT REQUIRED]` in `docs/` maps to `TODO()` here: agency name, team names, case studies, all budget figures. Everything else is written.
