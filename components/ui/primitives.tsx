"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef, type ReactNode } from "react";
import Image from "next/image";
import { ACTS, type ActId } from "@/content/acts";

/* ── Reveal ──────────────────────────────────────────────
   The universal motion principle from the creative concept:
   nothing snaps into place; everything resolves.            */
export function Reveal({
  children,
  delay = 0,
  y = 22,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-12% 0px -8% 0px" });
  const reduce = useReducedMotion();

  // `initial` must NEVER depend on useReducedMotion(): it resolves differently
  // on the server than on the first client render, which changes the emitted
  // style attribute and produces a hydration mismatch. Reduced motion is
  // honoured by collapsing the transition duration instead.
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y, filter: "blur(6px)" }}
      animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : undefined}
      transition={{
        duration: reduce ? 0 : 0.85,
        delay: reduce ? 0 : delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ── Stagger container ───────────────────────────────── */
export function Stagger({
  children,
  className = "",
  step = 0.07,
}: {
  children: ReactNode;
  className?: string;
  step?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const reduce = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: reduce ? 0 : step } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export const stagChild = {
  hidden: { opacity: 0, y: 18, filter: "blur(4px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export function StaggerItem({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div variants={stagChild} className={className}>
      {children}
    </motion.div>
  );
}

/* ── Section shell ───────────────────────────────────── */
export function Section({
  id,
  num,
  title,
  kicker,
  act,
  watermark,
  children,
  wide = false,
}: {
  id: string;
  num: string;
  title: string;
  kicker?: string;
  /** Accent + atmosphere for the act this chapter sits in */
  act: ActId;
  /** Orientation watermark. Defaults to the act name. */
  watermark?: string;
  children: ReactNode;
  wide?: boolean;
}) {
  const a = ACTS[act];

  return (
    <section
      id={id}
      style={{ ["--accent" as string]: a.accent }}
      className="act-field relative scroll-mt-4 overflow-hidden px-6 py-28 md:px-12 md:py-40"
    >
      <div className="watermark" aria-hidden="true">
        <span>{watermark ?? a.name}</span>
      </div>

      <div className={`relative mx-auto ${wide ? "max-w-[1320px]" : "max-w-sect"}`}>
        <Reveal>
          <div className="mb-16 md:mb-24">
            <div className="flex items-baseline gap-5">
              <span className="font-mono text-xs" style={{ color: a.accent }}>
                {num}
              </span>
              <div className="h-px flex-1 bg-cream-100/10" />
            </div>
            <h2 className="mt-7 font-display text-display-md text-cream-50 text-balance">
              {title}
            </h2>
            {kicker && (
              <p className="mt-7 max-w-prose text-lg leading-[1.75] text-cream-300/75 text-pretty">
                {kicker}
              </p>
            )}
          </div>
        </Reveal>
        {children}
      </div>
    </section>
  );
}

/* ── Cinematic act transition ────────────────────────
   Full-width beat between acts. Two lines, one arrow. */
export function ActTransition({
  lines,
  to,
}: {
  lines: [string, string];
  to: ActId;
}) {
  const a = ACTS[to];
  return (
    <div
      style={{ ["--accent" as string]: a.accent }}
      className="relative overflow-hidden py-28 md:py-40"
    >
      {/* No background word here. This beat announces the *next* act, so its
          watermark rendered a full-height "DO" immediately below the DIVE
          card — reading as DIVE's background and duplicating the accented
          title already in the foreground. The title carries the beat alone. */}
      <Reveal>
        <div className="relative mx-auto max-w-sect px-6 text-center md:px-12">
          <p className="font-display text-2xl leading-[1.35] text-cream-300/70 md:text-3xl">
            {lines[0]}
            <br />
            <span className="text-cream-50">{lines[1]}</span>
          </p>
          <div className="mx-auto mt-10 h-14 w-px bg-gradient-to-b from-transparent via-cream-100/20 to-transparent" />
          <div
            className="mt-2 font-display text-5xl uppercase tracking-tight md:text-7xl"
            style={{ color: a.accent }}
          >
            {a.name}
          </div>
        </div>
      </Reveal>
    </div>
  );
}

/* ── Status pill ─────────────────────────────────────── */
const STATUS_STYLE: Record<string, string> = {
  Confirmed: "border-depth-300/40 bg-depth-500/15 text-depth-100",
  Suggested: "border-signal-500/40 bg-signal-500/10 text-signal-400",
  "To Be Confirmed": "border-cream-100/20 bg-cream-100/[0.04] text-cream-500",
  Inferred: "border-cream-100/15 bg-transparent text-cream-500",
  Critical: "border-signal-600/50 bg-signal-600/15 text-signal-400",
  High: "border-signal-500/30 bg-signal-500/[0.08] text-signal-400/90",
  "Medium-High": "border-cream-100/20 bg-cream-100/[0.04] text-cream-300",
  Medium: "border-cream-100/15 bg-cream-100/[0.03] text-cream-500",
  Highest: "border-signal-600/60 bg-signal-600/20 text-signal-400",
};

export function Pill({ children }: { children: string }) {
  const s = STATUS_STYLE[children] ?? "border-cream-100/15 bg-cream-100/[0.03] text-cream-500";
  return (
    <span className={`inline-block whitespace-nowrap rounded-full border px-2.5 py-1 text-[11px] font-medium tracking-wide ${s}`}>
      {children}
    </span>
  );
}

/* ── Numbered card ───────────────────────────────────── */
export function NumCard({
  n,
  title,
  children,
}: {
  n: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="card card-hover p-6 md:p-7">
      <span className="font-mono text-xs text-signal-500">{n}</span>
      <h3 className="mt-3 font-display text-xl leading-snug text-cream-50">{title}</h3>
      <div className="mt-3 text-sm leading-relaxed text-cream-300/75">{children}</div>
    </div>
  );
}

/* ── Pull quote ──────────────────────────────────────── */
export function Pull({ children }: { children: ReactNode }) {
  return (
    <Reveal>
      <blockquote className="my-20 border-l-2 border-signal-500/50 pl-7 md:my-24 md:pl-10">
        <p className="max-w-3xl font-display text-display-sm leading-[1.2] text-cream-50 text-balance">
          {children}
        </p>
      </blockquote>
    </Reveal>
  );
}

/* ── Photographic plate ──────────────────────────────────
   Project imagery, graded into the navy so photographs read
   as part of the design system rather than pasted onto it. */
export function Plate({
  src,
  alt,
  ratio = "aspect-[16/9]",
  caption,
  className = "",
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
  aspect,
  fit = "cover",
  overlay = "standard",
  quality = 82,
}: {
  src: string;
  alt: string;
  ratio?: string;
  caption?: string;
  className?: string;
  sizes?: string;
  /** Numeric frame ratio (w/h). Overrides `ratio` — used for clamped frames. */
  aspect?: number;
  /** "contain" letterboxes rather than cropping. */
  fit?: "cover" | "contain";
  /** "light" ≈ 15–20% darkening for concept references; "standard" elsewhere. */
  overlay?: "standard" | "light";
  quality?: number;
}) {
  const light = overlay === "light";

  return (
    <figure className={className}>
      <div
        style={aspect ? { aspectRatio: aspect } : undefined}
        className={`relative overflow-hidden border border-cream-100/[0.08] bg-navy-900 ${
          light ? "rounded-2xl" : "rounded-xl"
        } ${aspect ? "" : ratio}`}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          quality={quality}
          className={`${fit === "contain" ? "object-contain" : "object-cover"} ${
            light ? "opacity-100" : "opacity-[0.72]"
          }`}
        />

        {light ? (
          /* ~15% darkening — enough to seat the image in the palette,
             not enough to dull it. */
          <div
            className="pointer-events-none absolute inset-0"
            style={{ background: "#04060F", opacity: 0.15 }}
          />
        ) : (
          <>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-abyss via-abyss/25 to-transparent" />
            <div
              className="pointer-events-none absolute inset-0 mix-blend-color"
              style={{ background: "#0A1024", opacity: 0.32 }}
            />
          </>
        )}
      </div>
      {caption && (
        <figcaption className="mt-3 text-xs leading-relaxed text-cream-500">{caption}</figcaption>
      )}
    </figure>
  );
}
