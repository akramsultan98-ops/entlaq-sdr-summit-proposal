"use client";

import { useState } from "react";
import { Section, Reveal, Stagger, StaggerItem, Plate } from "@/components/ui/primitives";
import { Lightbox, RefImage, GalleryPending, type Shot } from "@/components/ui/Lightbox";
import { contentsFor } from "@/content/library";
import { mainStage } from "@/content/proposal";
import { useIsPrinting } from "@/lib/usePrint";
import type { RefFile } from "@/lib/reference";

/** Frame ratio clamped so the plate is always generous — see Body.tsx. */
function frameRatio({ width, height }: { width: number; height: number }): number {
  const r = height > 0 ? width / height : 1.5;
  return Math.min(1.7, Math.max(1.15, r));
}

/* ── Participant welcome kit — image-first ── */
function Kits({
  items,
  onOpen,
  eager,
}: {
  items: RefFile[];
  onOpen: (s: Shot) => void;
  eager: boolean;
}) {
  if (items.length === 0) return <GalleryPending />;

  return (
    <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((k) => {
        const contains = contentsFor(k.file);
        return (
          <StaggerItem key={k.file}>
            <RefImage
              src={k.src}
              title={k.title}
              ratio="aspect-[4/5]"
              eager={eager}
              onOpen={() => onOpen({ src: k.src, title: k.title })}
            />
            {contains.length > 0 && (
              <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1">
                {contains.map((c) => (
                  <li key={c} className="text-[11.5px] text-cream-300/50">
                    {c}
                  </li>
                ))}
              </ul>
            )}
          </StaggerItem>
        );
      })}
    </Stagger>
  );
}

/* ═══════════════ 08 · VISUAL CONCEPTS ═══════════════ */
export function CreativeLibrary({
  kits,
  stage,
}: {
  kits: RefFile[];
  stage: { src: string; width: number; height: number } | null;
}) {
  const [shot, setShot] = useState<Shot | null>(null);
  // One listener for the whole chapter: lazy images may not resolve before
  // the browser takes its print snapshot, so force them eager while printing.
  const printing = useIsPrinting();

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
        {/* ── 01 · SIA main production & guest experience ── */}
        <Reveal>
          <div className="eyebrow mb-10">
            01 — SIA Main Production &amp; Guest Experience
          </div>
        </Reveal>

        {/* A · Main production concept */}
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

        {/* No equipment lists here — the costed scope is chapter 05's, once. */}

        {/* B · Proposed participant welcome kit */}
        <Reveal>
          <div className="mt-24 flex flex-wrap items-baseline gap-x-5 gap-y-2">
            <span className="rounded-full border border-cream-100/15 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-cream-500">
              Proposed
            </span>
            <h3 className="font-display text-2xl leading-tight text-cream-50 md:text-3xl">
              Participant Welcome Kit
            </h3>
          </div>
          <p className="mt-3 max-w-2xl text-[13.5px] leading-[1.75] text-cream-300/65">
            Participant welcome items designed to create a thoughtful, premium arrival experience
            and reinforce the SDR Summit identity. Items and finishes are proposed and subject to
            confirmation.
          </p>
        </Reveal>
        <div className="mt-10">
          <Kits items={kits} onOpen={setShot} eager={printing} />
        </div>
      </Section>

      <Lightbox shot={shot} onClose={() => setShot(null)} />
    </>
  );
}
