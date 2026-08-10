"use client";

import { Section, Reveal, Stagger, StaggerItem, Plate } from "@/components/ui/primitives";
import { Icon } from "@/components/ui/Icon";
import { VenueMap } from "@/components/viz/Charts";
import { DataWall } from "@/components/viz/DataWall";
import {
  venue, experiences, experienceIntro, welcomeKit, production, phases,
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
 * One frame for the whole chapter.
 *
 * Sources range from 500×400 to 4500×3000, so per-image ratios made the
 * spreads stagger. A single 4:3 frame with `object-contain` gives consistent
 * proportions down the page and still never crops a composition.
 */
const EDITORIAL_FRAME = 4 / 3;

/**
 * Editorial spread — image one side, copy vertically centred on the other,
 * sides alternating down the page. Deliberately not a card grid: the only
 * enclosed surfaces are the image plates themselves.
 */
function Spread({
  num,
  title,
  line,
  highlights,
  hero,
  rest,
  flip,
}: {
  num: string;
  title: string;
  line?: string;
  highlights?: { icon: string; t: string }[];
  hero: Shot;
  rest: Shot[];
  flip: boolean;
}) {
  return (
    <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-20">
      {/* Source order stays image-then-copy so mobile always leads with the
          image; only the desktop column order alternates. */}
      <div className={`space-y-8 ${flip ? "lg:order-2" : ""}`}>
        <Plate
          src={hero.src}
          alt={hero.alt}
          aspect={EDITORIAL_FRAME}
          fit="contain"
          overlay="light"
          quality={95}
          sizes="(max-width: 1024px) 100vw, 46vw"
          className="[&>div]:rounded-3xl"
        />
        {rest.map((s) => (
          <Plate
            key={s.src}
            src={s.src}
            alt={s.alt}
            aspect={EDITORIAL_FRAME}
            fit="contain"
            overlay="light"
            quality={95}
            sizes="(max-width: 1024px) 100vw, 36vw"
            className="mx-auto w-[82%] [&>div]:rounded-3xl"
          />
        ))}
      </div>

      <div className={flip ? "lg:order-1" : ""}>
        <div className="flex items-center gap-4">
          <span className="font-mono text-[11px] tracking-[0.2em] text-signal-500">{num}</span>
          <span className="h-px w-14 bg-signal-500/35" />
        </div>

        <h3 className="mt-6 font-display text-3xl leading-[1.15] text-cream-50 text-balance md:text-4xl">
          {title}
        </h3>

        {line && (
          <p className="mt-6 max-w-md text-[15px] leading-[1.8] text-cream-300/70 text-pretty">
            {line}
          </p>
        )}

        {highlights && highlights.length > 0 && (
          <Stagger className="mt-10 max-w-md border-t border-cream-100/[0.08]">
            {highlights.map((h) => (
              <StaggerItem key={h.t}>
                <div className="flex items-center gap-4 border-b border-cream-100/[0.08] py-3.5">
                  <span className="text-signal-500/80">
                    <Icon name={h.icon} />
                  </span>
                  <span className="text-[13.5px] tracking-wide text-cream-200">{h.t}</span>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        )}
      </div>
    </div>
  );
}

export function ExperienceDesign({
  shots,
  kit,
  kitContents,
}: {
  shots: Record<string, Shot[]>;
  kit: Shot | null;
  kitContents: string[];
}) {
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
      <div className="mt-24 space-y-40 md:mt-32 md:space-y-56">
        {experiences.map((ex, i) => {
          const [hero, ...rest] = shots[ex.t] ?? [];
          if (!hero) return null;

          return (
            <Reveal key={ex.t}>
              <Spread
                num={String(i + 1).padStart(2, "0")}
                title={ex.t}
                line={ex.line}
                highlights={ex.highlights}
                hero={hero}
                rest={rest}
                flip={i % 2 === 1}
              />
            </Reveal>
          );
        })}

        {/* 07 · the featured finale — one wide plate, copy centred beneath */}
        {kit && (
          <Reveal>
            <div className="border-t border-cream-100/[0.08] pt-20 md:pt-28">
              <div className="mx-auto max-w-[1000px]">
                <Plate
                  src={kit.src}
                  alt={kit.alt}
                  aspect={16 / 10}
                  fit="contain"
                  overlay="light"
                  quality={95}
                  sizes="(max-width: 1024px) 100vw, 76vw"
                  className="[&>div]:rounded-3xl"
                />

                <div className="mx-auto mt-12 max-w-2xl text-center">
                  <div className="flex items-center justify-center gap-4">
                    <span className="font-mono text-[11px] tracking-[0.2em] text-signal-500">
                      {String(experiences.length + 1).padStart(2, "0")}
                    </span>
                    <span className="h-px w-14 bg-signal-500/35" />
                    <span className="text-[10px] uppercase tracking-[0.18em] text-cream-500">
                      {welcomeKit.label}
                    </span>
                  </div>

                  <h3 className="mt-6 font-display text-3xl leading-[1.15] text-cream-50 text-balance md:text-4xl">
                    {welcomeKit.title}
                  </h3>
                  <p className="mt-6 text-[15px] leading-[1.8] text-cream-300/70 text-pretty">
                    {welcomeKit.line}
                  </p>

                  {kitContents.length > 0 && (
                    <ul className="mt-9 flex flex-wrap justify-center gap-x-7 gap-y-2.5">
                      {kitContents.map((c) => (
                        <li key={c} className="text-[12.5px] tracking-wide text-cream-500">
                          {c}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </Reveal>
        )}
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
