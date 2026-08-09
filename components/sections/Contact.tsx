"use client";

import { Reveal } from "@/components/ui/primitives";
import { ACTS } from "@/content/acts";
import { contact, meta } from "@/content/proposal";

/* ═══════════════ 08 · CONTACT ═══════════════ */
export function Contact() {
  // Blank values render nothing — never an empty placeholder.
  const details = contact.details.filter((d) => d.value.trim().length > 0);

  return (
    <section
      id="contact"
      style={{ ["--accent" as string]: ACTS.do.accent }}
      className="act-field relative flex min-h-[85svh] items-center overflow-hidden px-6 py-28 md:px-12"
    >
      <div className="watermark" aria-hidden="true">
        <span>Do</span>
      </div>
      <div className="absolute inset-0 lattice opacity-25" />

      <div className="relative mx-auto w-full max-w-sect">
        <Reveal>
          <h2 className="font-display text-display-lg text-cream-50">{contact.headline}</h2>
          <p className="mt-7 max-w-xl font-display text-display-sm leading-[1.2] text-signal-500 text-balance">
            {contact.line}
          </p>
        </Reveal>

        <Reveal>
          <div className="mt-20 flex flex-wrap items-end justify-between gap-10 border-t border-cream-100/10 pt-9">
            <div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/brand/paradigm-white.png"
                alt="Paradigm"
                className="h-auto w-[136px] opacity-90"
              />
              {details.length > 0 && (
                <div className="mt-6 space-y-1.5">
                  {details.map((d) => (
                    <div key={d.label} className="flex gap-3 text-sm">
                      <span className="w-12 text-[10px] uppercase tracking-[0.18em] text-cream-500/70">
                        {d.label}
                      </span>
                      <span className="text-cream-100">{d.value}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="text-right">
              <div className="text-[9.5px] uppercase tracking-[0.2em] text-cream-500/70">
                Prepared for
              </div>
              <div className="mt-2 text-sm text-cream-100">{meta.client}</div>
              <div className="mt-0.5 text-xs text-cream-500">
                {meta.event} · {meta.dates}
              </div>
              <div className="mt-4 text-[9.5px] uppercase tracking-[0.2em] text-cream-500/70">
                Submission
              </div>
              <div className="mt-2 text-sm text-cream-300">{meta.submission}</div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
