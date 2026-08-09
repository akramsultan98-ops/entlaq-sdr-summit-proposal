"use client";

import { Section, Reveal, Stagger, StaggerItem, Plate } from "@/components/ui/primitives";
import { Icon } from "@/components/ui/Icon";
import { VenueMap } from "@/components/viz/Charts";
import { DataWall } from "@/components/viz/DataWall";
import {
  venue, experiences, experienceIntro, production, phases,
} from "@/content/proposal";

/* ═══════════════ 03 · SIA, EL GOUNA ═══════════════
   One venue. The production environment for all three days. */
export function VenueChapter() {
  return (
    <Section id="venue" num="03" title="SIA, El Gouna" kicker={venue.lede} act="diagnose">
      <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_1fr]">
        <Reveal><VenueMap /></Reveal>
        <Stagger className="space-y-8">
          {venue.points.map((p) => (
            <StaggerItem key={p.t}>
              <div className="border-l border-depth-300/40 pl-6">
                <h4 className="font-display text-xl text-cream-50">{p.t}</h4>
                <p className="mt-1.5 text-[13.5px] leading-[1.7] text-cream-300/65">{p.d}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>

      <Reveal>
        <div className="eyebrow mb-8 mt-24">What the venue demands</div>
      </Reveal>
      <Stagger className="grid gap-5 sm:grid-cols-2">
        {venue.considerations.map((c) => (
          <StaggerItem key={c.t}>
            <div className="card card-hover h-full p-7">
              <h4 className="font-display text-xl text-cream-50">{c.t}</h4>
              <p className="mt-2.5 text-[13px] leading-[1.7] text-cream-300/65">{c.d}</p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}

/* ═══════════════ 04 · EXPERIENCE DESIGN ═══════════════
   Pre-site-inspection: creative direction, not production drawings.
   Image is the hero; the supporting column simply labels it. */
export interface Shot {
  src: string;
  alt: string;
  width: number;
  height: number;
}

/**
 * Frame ratio for a concept image.
 *
 * Not the image's own ratio — a *clamped* one. Very wide sources would
 * otherwise produce a letterbox-thin card, and very tall ones a runaway
 * column. Clamping to 1.15–1.7 keeps every frame generous and roughly
 * consistent; `object-contain` then shows the whole composition inside it.
 */
function frameRatio({ width, height }: { width: number; height: number }): number {
  const r = height > 0 ? width / height : 1.5;
  return Math.min(1.7, Math.max(1.15, r));
}

export function ExperienceDesign({ shots }: { shots: Record<string, Shot[]> }) {
  return (
    <Section
      id="experience"
      num="04"
      title="Experience Design"
      kicker="Six moments inside SIA — the intended atmosphere, not the final build."
      act="dive"
      wide
    >
      {/* the signature moment leads the chapter */}
      <Reveal>
        <DataWall />
      </Reveal>

      <Reveal>
        <p className="mt-20 max-w-2xl text-[13px] leading-[1.75] text-cream-500">
          {experienceIntro}
        </p>
      </Reveal>

      {/* Generous separation — a concept book, not a continuous gallery. */}
      <div className="mt-20 space-y-36 md:space-y-48">
        {experiences.map((ex, i) => {
          const [hero, ...rest] = shots[ex.t] ?? [];
          if (!hero) return null;

          return (
            <Reveal key={ex.t} delay={i * 0.02}>
              {/* image ~73% of content width, supporting column beside it */}
              <div className="grid gap-10 lg:grid-cols-[2.7fr_1fr] lg:items-start lg:gap-14">
                <div className="space-y-10">
                  <Plate
                    src={hero.src}
                    alt={hero.alt}
                    aspect={frameRatio(hero)}
                    fit="contain"
                    overlay="light"
                    quality={95}
                    sizes="(max-width: 1024px) 100vw, 73vw"
                  />

                  {/* Supporting references stack beneath at the same width —
                      never a thumbnail beside the copy. */}
                  {rest.map((s) => (
                    <Plate
                      key={s.src}
                      src={s.src}
                      alt={s.alt}
                      aspect={frameRatio(s)}
                      fit="contain"
                      overlay="light"
                      quality={95}
                      sizes="(max-width: 1024px) 100vw, 55vw"
                      className="mx-auto lg:w-[78%]"
                    />
                  ))}
                </div>

                {/* supporting column */}
                <div>
                  <h3 className="font-display text-2xl leading-tight text-cream-50">{ex.t}</h3>
                  <p className="mt-3 text-[13.5px] leading-[1.7] text-cream-300/65">{ex.line}</p>

                  <Stagger className="mt-7 space-y-2.5">
                    {ex.highlights.map((h) => (
                      <StaggerItem key={h.t}>
                        <div className="card card-hover flex items-center gap-3 p-4">
                          <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-signal-500/25 bg-signal-500/[0.07] text-signal-400">
                            <Icon name={h.icon} />
                          </span>
                          <span className="text-[13.5px] text-cream-100">{h.t}</span>
                        </div>
                      </StaggerItem>
                    ))}
                  </Stagger>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}

/* ═══════════════ 05 · TECHNICAL PRODUCTION ═══════════════
   Confirmed scope only — the BOQ split the way the quotation costs it:
   physical build under Scenic, everything else under AV. The main stage
   *concept* (render, description, concept note) lives in chapter 08 so the
   proposed and the costed never read as the same statement. */
export function TechnicalProduction() {
  const boq = [production.scenic, production.av];

  return (
    <Section
      id="production"
      num="05"
      title="Technical Production"
      kicker={production.lede}
      act="dive"
      wide
    >
      {/* ── Key elements, classified the way they are costed ── */}
      <Reveal>
        <div className="eyebrow mb-8">Scope of supply</div>
      </Reveal>
      <Stagger className="grid gap-6 lg:grid-cols-2">
        {boq.map((group) => (
          <StaggerItem key={group.heading}>
            <div className="card h-full p-8">
              <div className="flex items-center gap-3.5">
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-depth-300/25 bg-depth-500/[0.12] text-depth-300">
                  <Icon name={group.icon} />
                </span>
                <h4 className="font-display text-xl leading-tight text-cream-50">
                  {group.heading}
                </h4>
              </div>
              <ul className="mt-6 space-y-2.5 border-t border-cream-100/[0.08] pt-6">
                {group.items.map((i) => (
                  <li key={i} className="flex gap-3 text-[13.5px] leading-[1.6] text-cream-300/75">
                    <span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-signal-500/70" />
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          </StaggerItem>
        ))}
      </Stagger>

      {/* ── Delivery ── */}
      <Reveal>
        <div className="eyebrow mb-8 mt-24">Delivery</div>
      </Reveal>
      <Stagger className="grid gap-5 md:grid-cols-3">
        {production.delivery.map((c) => (
          <StaggerItem key={c.t}>
            <div className="card card-hover flex h-full flex-col p-7">
              <div className="flex items-start justify-between gap-4">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-depth-300/25 bg-depth-500/[0.12] text-depth-300">
                  <Icon name={c.icon} />
                </span>
                <span className="font-mono text-[11px] text-signal-500">{c.stat}</span>
              </div>
              <h3 className="mt-5 font-display text-xl leading-tight text-cream-50">{c.t}</h3>
              <p className="mt-2 text-[13px] leading-[1.7] text-cream-300/65">{c.d}</p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}

/* ═══════════════ 06 · TIMELINE ═══════════════ */
export function Timeline() {
  return (
    <Section
      id="timeline"
      num="06"
      title="Timeline"
      kicker="Award to wrap-up. Long-lead items are ordered on day one."
      act="do"
      wide
    >
      <div className="relative">
        <div className="absolute left-0 right-0 top-[38px] hidden h-px bg-gradient-to-r from-depth-500/60 via-depth-300/40 to-signal-500/70 lg:block" />
        <div className="absolute bottom-2 left-[7px] top-2 w-px bg-gradient-to-b from-depth-500/60 via-depth-300/40 to-signal-500/70 lg:hidden" />

        <Stagger className="grid gap-8 lg:grid-cols-5 lg:gap-5">
          {phases.map((p, i) => (
            <StaggerItem key={p.n}>
              <div className="relative pl-9 lg:pl-0">
                <span
                  className={`absolute left-0 top-1.5 h-[15px] w-[15px] rounded-full border-2 bg-abyss lg:relative lg:left-auto lg:top-auto lg:mb-8 lg:block ${
                    i === phases.length - 1 ? "border-signal-500" : "border-depth-300/70"
                  }`}
                />
                <div className="font-mono text-[10px] text-signal-500">{p.n}</div>
                <h3 className="mt-1.5 font-display text-xl text-cream-50">{p.t}</h3>
                <div className="mt-1.5 text-[10px] uppercase tracking-[0.14em] text-cream-500">
                  {p.when}
                </div>
                <p className="mt-2.5 text-[12.5px] leading-[1.65] text-cream-300/65">{p.d}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </Section>
  );
}
