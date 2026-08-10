"use client";

import { useState } from "react";
import { Section, Reveal, Plate } from "@/components/ui/primitives";
import { Lightbox, type Shot } from "@/components/ui/Lightbox";
import { mainStage } from "@/content/proposal";

/** Frame ratio clamped so the plate is always generous — see Body.tsx. */
function frameRatio({ width, height }: { width: number; height: number }): number {
  const r = height > 0 ? width / height : 1.5;
  return Math.min(1.7, Math.max(1.15, r));
}

/* ═══════════════ 08 · VISUAL CONCEPTS ═══════════════
   The participant welcome kit closes chapter 04 as its featured section;
   this chapter carries the main stage concept alone. */
export function CreativeLibrary({
  stage,
}: {
  stage: { src: string; width: number; height: number } | null;
}) {
  const [shot, setShot] = useState<Shot | null>(null);

  return (
    <>
      <Section
        id="library"
        num="08"
        title="Visual Concepts"
        kicker="Supporting creative reference. Not final production drawings."
        act="do"
        watermark="Concepts"
        wide
      >
        {/* ── 01 · SIA main production ── */}
        <Reveal>
          <div className="eyebrow mb-10">01 — SIA Main Production</div>
        </Reveal>

        <Reveal>
          <div className="flex flex-wrap items-baseline gap-x-5 gap-y-2">
            <span className="rounded-full border border-signal-500/45 bg-signal-500/[0.08] px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-signal-400">
              {mainStage.label}
            </span>
            <h3 className="font-display text-2xl leading-tight text-cream-50 md:text-3xl">
              {mainStage.subtitle}
            </h3>
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-8">
            {stage ? (
              <button
                type="button"
                onClick={() => setShot({ src: stage.src, title: mainStage.title })}
                className="block w-full cursor-zoom-in text-left"
                aria-label={`Open ${mainStage.title} concept visual`}
              >
                <Plate
                  src={stage.src}
                  alt={`${mainStage.title} — proposed concept visual`}
                  aspect={frameRatio(stage)}
                  fit="contain"
                  overlay="light"
                  quality={95}
                  sizes="(max-width: 1024px) 100vw, 88vw"
                />
              </button>
            ) : (
              <div className="rounded-2xl border border-cream-100/[0.08] px-8 py-16 text-center">
                <p className="text-[14px] leading-relaxed text-cream-300/60">
                  The main stage concept visual will be presented with this proposal.
                </p>
              </div>
            )}
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-10 grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
            <div className="space-y-5">
              {mainStage.description.map((p) => (
                <p key={p.slice(0, 24)} className="text-[14.5px] leading-[1.8] text-cream-300/75">
                  {p}
                </p>
              ))}
            </div>
            <div className="border-l-2 border-signal-500/40 pl-6">
              <div className="eyebrow mb-3 !text-signal-500">Concept note</div>
              <p className="text-[13px] leading-[1.75] text-cream-300/65">{mainStage.note}</p>
            </div>
          </div>
        </Reveal>
      </Section>

      <Lightbox shot={shot} onClose={() => setShot(null)} />
    </>
  );
}
