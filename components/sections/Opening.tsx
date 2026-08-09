"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Section, Reveal, Stagger, StaggerItem, ActTransition } from "@/components/ui/primitives";
import { ACTS, ACT_ORDER, TRANSITIONS, ATTRIBUTION } from "@/content/acts";
import { meta, facts, summary } from "@/content/proposal";

/* ═══════════════ 00 · COVER ═══════════════ */
export function Cover() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section
      id="cover"
      ref={ref}
      className="relative flex min-h-[100svh] items-center overflow-hidden px-6 py-28 md:px-12"
    >
      <motion.div style={{ y }} className="absolute inset-0 -z-10">
        {/* Above the fold — eager, and the only image given priority. */}
        <Image
          src="/media/sia.jpg"
          alt=""
          aria-hidden="true"
          fill
          sizes="100vw"
          quality={80}
          priority
          className="object-cover opacity-[0.30]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-abyss/85 via-abyss/70 to-abyss" />
        <div className="absolute inset-0 depth-field opacity-80" />
        <div className="absolute inset-0 lattice opacity-20" />
        <motion.div
          className="absolute left-1/2 top-1/3 h-[70vh] w-[70vh] -translate-x-1/2 -translate-y-1/3 rounded-full"
          style={{ background: "radial-gradient(circle, rgba(46,119,135,0.18) 0%, transparent 65%)" }}
          initial={{ scale: 1, opacity: 0.6 }}
          animate={reduce ? undefined : { scale: [1, 1.12, 1], opacity: [0.6, 0.95, 0.6] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      <motion.div style={{ opacity }} className="mx-auto w-full max-w-sect">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center gap-x-4 gap-y-2"
        >
          <span className="eyebrow">{meta.scope}</span>
          <span className="h-px w-8 bg-cream-100/20" />
          <span className="eyebrow !text-cream-500">{meta.dates}</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 26, filter: "blur(12px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.4, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 font-display text-display-xl text-cream-50"
        >
          ENTLAQ SDR
          <br />
          Summit 2026
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="mt-7 flex items-center gap-5"
        >
          <span className="h-px w-14 bg-signal-500/70" />
          <span className="font-display text-2xl tracking-wide text-signal-500 md:text-3xl">
            Executive Proposal
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 max-w-xl text-lg leading-relaxed text-cream-300/80 text-pretty"
        >
          {meta.standfirst}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-16 flex items-end gap-5 border-t border-cream-100/10 pt-7"
        >
          <div>
            <div className="text-[9.5px] uppercase tracking-[0.2em] text-cream-500/70">
              Prepared by
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/brand/paradigm-white.png"
              alt="Paradigm"
              className="mt-3 h-auto w-[112px] opacity-90"
            />
          </div>
          <div className="ml-auto text-right">
            <div className="text-[9.5px] uppercase tracking-[0.2em] text-cream-500/70">
              Submission
            </div>
            <div className="mt-2 text-sm text-cream-300">{meta.submission}</div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

/* ═══════════════ 01 · EXECUTIVE SUMMARY ═══════════════
   One screen. Three columns: heard · understanding · why us. */
export function ExecutiveSummary() {
  return (
    <Section id="summary" num="01" title="Executive Summary" act="diagnose">
      <Reveal>
        <p className="max-w-3xl font-display text-display-sm leading-[1.15] text-cream-50 text-balance">
          {summary.lede}
        </p>
        <p className="mt-7 max-w-2xl text-[15px] leading-[1.75] text-cream-300/75">
          {summary.proposition}
        </p>
      </Reveal>

      <Stagger className="mt-14 grid gap-6 sm:grid-cols-4">
        {facts.map((f) => (
          <StaggerItem key={f.label}>
            <div className="border-t border-cream-100/12 pt-4">
              <div className="font-display text-4xl text-signal-500">{f.value}</div>
              <div className="mt-1.5 text-[13px] text-cream-300/70">{f.label}</div>
            </div>
          </StaggerItem>
        ))}
      </Stagger>

      <div className="mt-20 grid gap-12 lg:grid-cols-3">
        <Reveal>
          <div className="eyebrow mb-6">What we heard</div>
          <ul className="space-y-3.5">
            {summary.heard.map((h) => (
              <li key={h} className="flex gap-3 text-[14px] leading-[1.6] text-cream-300/80">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-depth-300" />
                {h}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="eyebrow mb-6">Our understanding</div>
          <ul className="space-y-3.5">
            {summary.understanding.map((u) => (
              <li key={u} className="flex gap-3 text-[14px] leading-[1.6] text-cream-300/80">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-depth-300" />
                {u}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.16}>
          <div className="eyebrow mb-6 !text-signal-500">Why Paradigm</div>
          <div className="space-y-5">
            {summary.why.map((w) => (
              <div key={w.t} className="border-l border-signal-500/40 pl-4">
                <div className="text-[14px] font-medium text-cream-50">{w.t}</div>
                <div className="mt-1 text-[13px] leading-[1.6] text-cream-300/65">{w.d}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

/* ═══════════════ 02 · EVENT JOURNEY ═══════════════
   Not three event days — one evolving journey.
   Diagnose → Dive → Do, with the delegate experiences inside each. */
export function EventJourney() {
  return (
    <Section
      id="journey"
      num="02"
      title="Event Journey"
      kicker="One journey in three movements — each ending in an outcome, not an agenda."
      act="diagnose"
      watermark="Journey"
      wide
    >
      <Reveal>
        <p className="-mt-10 mb-16 max-w-xl text-[13px] leading-[1.7] text-cream-500">
          {ATTRIBUTION}
        </p>
      </Reveal>

      <div className="space-y-4">
        {ACT_ORDER.map((id, idx) => {
          const a = ACTS[id];
          return (
            <div key={id}>
              <Reveal>
                <div
                  style={{ ["--accent" as string]: a.accent }}
                  className="relative overflow-hidden rounded-2xl border border-cream-100/[0.07] px-7 py-10 md:px-12 md:py-14"
                >
                  <div className="watermark" aria-hidden="true">
                    <span>{a.name}</span>
                  </div>

                  <div className="relative grid gap-10 lg:grid-cols-[minmax(0,270px)_1fr_minmax(0,210px)] lg:items-start lg:gap-14">
                    {/* the act */}
                    <div>
                      <div
                        className="text-[10px] uppercase tracking-[0.22em]"
                        style={{ color: a.accent }}
                      >
                        {a.day}
                      </div>
                      <h3
                        className="mt-3 font-display text-5xl uppercase leading-none tracking-tight md:text-6xl"
                        style={{ color: a.accent }}
                      >
                        {a.name}
                      </h3>
                      <ul className="mt-6 space-y-1.5">
                        {a.purpose.map((p) => (
                          <li key={p} className="text-[13px] leading-snug text-cream-300/70">
                            {p}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* the experiences */}
                    <div>
                      <div className="eyebrow mb-5 !text-cream-500">Experiences</div>
                      <div className="flex flex-wrap gap-2">
                        {a.experiences.map((e) => (
                          <span
                            key={e}
                            className="rounded-full border px-3.5 py-1.5 text-[12.5px] text-cream-200"
                            style={{
                              borderColor: `${a.accent}44`,
                              background: `${a.accent}0f`,
                            }}
                          >
                            {e}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* what we deliver, and what it produces */}
                    <div className="lg:text-right">
                      <div className="eyebrow mb-3 !text-cream-500">Production</div>
                      <ul className="space-y-1">
                        {a.production.map((p) => (
                          <li key={p} className="text-[12.5px] text-cream-300/70">
                            {p}
                          </li>
                        ))}
                      </ul>
                      <div className="eyebrow mb-3 mt-7 !text-cream-500">Outcome</div>
                      <div
                        className="font-display text-2xl leading-tight"
                        style={{ color: a.accent }}
                      >
                        {a.outcome}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* cinematic beat into the next act */}
              {idx < TRANSITIONS.length && (
                <ActTransition
                  lines={TRANSITIONS[idx].lines}
                  to={TRANSITIONS[idx].to}
                />
              )}
            </div>
          );
        })}
      </div>
    </Section>
  );
}
