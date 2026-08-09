"use client";

/**
 * THE SIGNATURE MOMENT — five-beat data-wall reveal.
 * The proposal demonstrating the capability it is arguing for.
 *
 * Noise → Question → Resolution → The Gap → Consequence
 *
 * HYDRATION CONTRACT
 * ──────────────────
 * 1. No Math.random(), no Date.now(), no Math.sin-based hashing anywhere.
 * 2. Every generated value is produced ONCE, in a module-scope constant,
 *    by an integer-only PRNG (see lib/random.ts). Nothing is generated
 *    inside JSX and nothing is generated per-render.
 * 3. `initial` props never depend on useReducedMotion(), which returns a
 *    different value on the server than on the first client render.
 *    Reduced motion is honoured via transition duration instead.
 */

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion, AnimatePresence } from "framer-motion";
import { mulberry32, q } from "@/lib/random";

const SECTORS = [
  "Fintech", "Agritech", "Health", "Logistics", "Energy",
  "Edtech", "Manufacturing", "Tourism", "Retail", "Deep Tech",
] as const;

const BEATS = [
  { n: 1, t: "Noise", d: "The wall holds unresolved data. Ambient, wide, unreadable." },
  { n: 2, t: "Question", d: "The room is polled. Responses render live onto the wall." },
  { n: 3, t: "Resolution", d: "Ten sectors resolve in sequence. The lattice locks." },
  { n: 4, t: "The Gap", d: "Room belief is set against report finding." },
  { n: 5, t: "Consequence", d: "Convergence to a single statement." },
] as const;

const BEAT_TIMINGS = [900, 1500, 2100, 2000] as const;

/* ── Dataset built ONCE at module scope ──────────────────────────
   Module evaluation happens once per environment with a fixed seed,
   so the server and the client derive byte-identical values.        */

interface Particle {
  id: string;
  left: number;
  top: number;
  duration: number;
  delay: number;
}

interface Sector {
  name: string;
  report: number;
  belief: number;
  particles: Particle[];
}

const DATASET: Sector[] = (() => {
  const rnd = mulberry32(20260910); // seed: the Summit's opening date
  return SECTORS.map((name, i) => ({
    name,
    report: 26 + Math.round(rnd() * 62),
    belief: 26 + Math.round(rnd() * 62),
    particles: Array.from({ length: 9 }, (_, j) => ({
      id: `${i}-${j}`,
      left: q(5 + i * 9.4 + rnd() * 7),
      top: q(12 + rnd() * 72),
      duration: q(2 + rnd() * 2),
      delay: q(rnd() * 1.5),
    })),
  }));
})();

const PARTICLES: Particle[] = DATASET.flatMap((s) => s.particles);

export function DataWall() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-25%" });
  const reduce = useReducedMotion();
  const [beat, setBeat] = useState(0);
  const [playing, setPlaying] = useState(false);
  const timers = useRef<number[]>([]);

  const clearTimers = () => {
    timers.current.forEach(window.clearTimeout);
    timers.current = [];
  };

  const play = () => {
    clearTimers();
    setBeat(0);
    setPlaying(true);
    let elapsed = 0;
    BEAT_TIMINGS.forEach((ms, idx) => {
      elapsed += ms;
      timers.current.push(
        window.setTimeout(() => {
          setBeat(idx + 1);
          if (idx === BEAT_TIMINGS.length - 1) setPlaying(false);
        }, elapsed)
      );
    });
  };

  useEffect(() => {
    if (!inView) return;
    // Reduced motion: land on the resolved state without the sequence.
    if (reduce) {
      setBeat(BEATS.length - 1);
      return;
    }
    const start = window.setTimeout(play, 400);
    timers.current.push(start);
    return clearTimers;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, reduce]);

  /* PRINT: the bars carry an inline `height: 0` until the sequence plays,
     which no stylesheet can reconstruct. Resolve to beat 4 ("The Gap") —
     the frame where both datasets and the legend are visible — before the
     browser takes its print snapshot. Beat 5 is deliberately not used: its
     full-bleed statement would obscure the bars on paper. */
  useEffect(() => {
    const resolveForPrint = () => {
      clearTimers();
      setPlaying(false);
      setBeat(3);
    };
    window.addEventListener("beforeprint", resolveForPrint);

    // Safari/Chrome DevTools "print" emulation does not fire beforeprint
    const mq = window.matchMedia("print");
    const onChange = (e: MediaQueryListEvent) => e.matches && resolveForPrint();
    mq.addEventListener?.("change", onChange);

    return () => {
      window.removeEventListener("beforeprint", resolveForPrint);
      mq.removeEventListener?.("change", onChange);
    };
  }, []);

  useEffect(() => clearTimers, []);

  const dur = (n: number) => (reduce ? 0 : n);

  return (
    <div ref={ref} className="w-full">
      {/* ── The wall ── */}
      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg border border-cream-100/10 bg-abyss">
        {/* ambient field */}
        <div
          className="absolute inset-0 transition-opacity duration-1000"
          style={{
            opacity: beat === 0 ? 1 : 0.25,
            background:
              "radial-gradient(70% 60% at 50% 45%, rgba(46,119,135,0.30) 0%, transparent 70%)",
          }}
        />

        {/* lattice — locks at beat 3 */}
        <motion.div
          className="absolute inset-0 lattice"
          initial={{ opacity: 0.12 }}
          animate={{ opacity: beat >= 2 ? 0.85 : 0.12 }}
          transition={{ duration: dur(1.1), ease: [0.16, 1, 0.3, 1] }}
        />

        {/* BEAT 1 — noise */}
        <AnimatePresence>
          {beat === 0 && (
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, filter: "blur(14px)" }}
              transition={{ duration: dur(0.9) }}
              className="absolute inset-0"
            >
              {PARTICLES.map((p) => (
                <motion.span
                  key={p.id}
                  className="absolute h-[3px] w-[3px] rounded-full bg-depth-300"
                  style={{ left: `${p.left}%`, top: `${p.top}%` }}
                  // explicit `initial` pins the SSR style; without it
                  // framer-motion falls back to `animate`, which branches on `reduce`
                  initial={{ opacity: 0.15 }}
                  animate={reduce ? undefined : { opacity: [0.15, 0.6, 0.15] }}
                  transition={{
                    duration: p.duration,
                    repeat: Infinity,
                    delay: p.delay,
                  }}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* BEATS 2–5 — bars */}
        <div className="absolute inset-x-0 bottom-0 top-0 flex items-end gap-[0.9%] px-[4%] pb-[14%] pt-[12%]">
          {DATASET.map((d, i) => (
            <div key={d.name} className="relative flex flex-1 flex-col justify-end gap-[3px]">
              {/* room belief (beat 2+) */}
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: beat >= 1 ? `${d.belief}%` : 0,
                  opacity: beat >= 1 ? (beat >= 3 ? 0.95 : 0.55) : 0,
                }}
                transition={{
                  duration: dur(1.1),
                  delay: beat === 1 ? dur(i * 0.055) : 0,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="w-full rounded-t-[2px] bg-cream-100/35"
              />
              {/* report finding (beat 3+) */}
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: beat >= 2 ? `${d.report}%` : 0,
                  opacity: beat >= 2 ? 1 : 0,
                }}
                transition={{
                  duration: dur(1),
                  delay: beat === 2 ? dur(i * 0.075) : 0,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="w-full rounded-t-[2px]"
                style={{
                  background:
                    beat >= 3
                      ? "linear-gradient(180deg,#E9A93C 0%,#D18A1E 100%)"
                      : "linear-gradient(180deg,#5FA8B5 0%,#1A4A5C 100%)",
                  transition: "background 900ms ease",
                }}
              />
              {/* sector label */}
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: beat >= 2 ? 0.55 : 0 }}
                transition={{ duration: dur(0.6), delay: beat === 2 ? dur(i * 0.05) : 0 }}
                className="absolute -bottom-[26px] left-0 right-0 truncate text-center text-[8px] tracking-wide text-cream-300 md:text-[9px]"
              >
                {d.name}
              </motion.span>
            </div>
          ))}
        </div>

        {/* BEAT 4 — The Gap callout */}
        <AnimatePresence>
          {beat >= 3 && (
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: dur(0.9), ease: [0.16, 1, 0.3, 1] }}
              className="absolute left-[4%] top-[7%] flex items-center gap-4 text-[10px] md:text-xs"
            >
              <span className="flex items-center gap-1.5 text-cream-300/70">
                <i className="h-2 w-2 rounded-sm bg-cream-100/35" /> What the room believes
              </span>
              <span className="flex items-center gap-1.5 text-signal-400">
                <i className="h-2 w-2 rounded-sm bg-signal-500" /> What the report found
              </span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* BEAT 5 — consequence */}
        <AnimatePresence>
          {beat >= 4 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: dur(1.2) }}
              className="absolute inset-0 flex items-center justify-center bg-abyss/72 backdrop-blur-[3px]"
            >
              <motion.p
                initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: dur(1.1), delay: dur(0.25), ease: [0.16, 1, 0.3, 1] }}
                className="max-w-lg px-8 text-center font-display text-2xl leading-tight text-cream-50 md:text-4xl"
              >
                The gap between what we believed
                <br />
                and what is true.
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* beat marker */}
        <div className="absolute bottom-3 left-[4%] flex items-center gap-1.5">
          {BEATS.map((b, i) => (
            <span
              key={b.n}
              className={`h-[3px] rounded-full transition-all duration-500 ${
                i <= beat ? "w-6 bg-signal-500" : "w-2.5 bg-cream-100/15"
              }`}
            />
          ))}
        </div>

        {!playing && beat >= 4 && (
          <button
            onClick={play}
            className="no-print absolute bottom-3 right-[4%] rounded-md border border-cream-100/15 bg-abyss/60 px-3 py-1 text-[10px] tracking-wide text-cream-300 backdrop-blur transition-colors hover:border-cream-100/35 hover:text-cream-50"
          >
            Replay
          </button>
        )}
      </div>

      {/* ── Beat legend ── */}
      <div className="mt-7 grid gap-px overflow-hidden rounded-lg border border-cream-100/[0.07] bg-cream-100/[0.05] sm:grid-cols-2 lg:grid-cols-5">
        {BEATS.map((b, i) => (
          <div
            key={b.n}
            className={`p-4 transition-colors duration-700 ${i === beat ? "bg-navy-900" : "bg-abyss"}`}
          >
            <div className="flex items-center gap-2">
              <span
                className={`font-mono text-[10px] transition-colors ${
                  i <= beat ? "text-signal-500" : "text-cream-500/50"
                }`}
              >
                0{b.n}
              </span>
              <span
                className={`text-xs font-medium transition-colors ${
                  i <= beat ? "text-cream-50" : "text-cream-500"
                }`}
              >
                {b.t}
              </span>
            </div>
            <p className="mt-2 text-[11.5px] leading-relaxed text-cream-300/60">{b.d}</p>
          </div>
        ))}
      </div>

      <p className="mt-4 text-xs text-cream-500">
        Illustrative simulation. Live implementation renders real SDR findings against live audience
        polling from the Entlaq app.
      </p>
    </div>
  );
}
