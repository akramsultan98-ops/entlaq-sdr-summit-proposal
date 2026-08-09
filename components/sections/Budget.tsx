"use client";

import dynamic from "next/dynamic";
import { Section, Reveal } from "@/components/ui/primitives";
import { budget } from "@/content/proposal";

/** exceljs is heavy — keep it out of the initial bundle entirely. */
const Workbook = dynamic(
  () => import("@/components/viz/Workbook").then((m) => m.Workbook),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-56 items-center justify-center rounded-xl border border-cream-100/[0.07]">
        <span className="text-xs tracking-wide text-cream-500">Loading quotation…</span>
      </div>
    ),
  }
);

export function Budget() {
  return (
    <Section id="budget" num="07" title="Commercial Budget" act="do" wide>
      <Reveal>
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="border-l-2 border-signal-500/50 pl-7 md:pl-9">
            <p className="max-w-2xl font-display text-2xl leading-snug text-cream-50">
              {budget.note}
            </p>
            <p className="mt-4 max-w-2xl text-[14.5px] leading-[1.75] text-cream-300/70">
              {budget.detail}
            </p>
          </div>

          <a
            href="/commercial/quotation.xlsx"
            download
            className="no-print inline-flex shrink-0 items-center gap-3 rounded-md border border-signal-500/45 bg-signal-500/10 px-6 py-3.5 text-[13px] tracking-wide text-signal-400 transition-colors hover:border-signal-500/70 hover:bg-signal-500/15 hover:text-signal-400"
          >
            <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path
                d="M8 1v9m0 0L4.5 6.5M8 10l3.5-3.5M2 13.5h12"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Download Excel
          </a>
        </div>
      </Reveal>

      <Reveal>
        <div className="mt-14">
          <Workbook />
        </div>
      </Reveal>
    </Section>
  );
}
