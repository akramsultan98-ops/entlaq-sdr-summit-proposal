"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { CHAPTERS } from "@/content/chapters";
import { ACTS } from "@/content/acts";
import { meta } from "@/content/proposal";

/** Paradigm mark + "Prepared for" lockup. Signature, never a billboard. */
function Brandmark({ onHome }: { onHome: () => void }) {
  return (
    <div className="px-1">
      {/* Subtle brand signature — sized to sit under the navigation,
          not compete with it. */}
      <button onClick={onHome} className="block py-1 transition-opacity hover:opacity-75">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/brand/paradigm-white.png"
          alt="Paradigm"
          className="h-auto max-h-[76px] w-[86px] select-none object-contain object-left"
          draggable={false}
        />
      </button>
      <div className="mt-7">
        <div className="text-[9.5px] uppercase tracking-[0.2em] text-cream-500/70">Prepared for</div>
        <div className="mt-1.5 font-display text-[15px] leading-snug text-cream-100">
          {meta.client}
          <br />
          <span className="text-cream-300/80">SDR Summit {meta.year}</span>
        </div>
      </div>
    </div>
  );
}

export function Rail() {
  const [active, setActive] = useState("cover");
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        const vis = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (vis[0]) setActive(vis[0].target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5] }
    );
    CHAPTERS.forEach((c) => {
      const el = document.getElementById(c.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  return (
    <>
      <motion.div
        style={{ scaleX: progress }}
        className="no-print fixed left-0 top-0 z-50 h-[2px] w-full origin-left bg-gradient-to-r from-depth-500 via-depth-300 to-signal-500"
      />

      {/* ── Desktop rail ── */}
      <aside className="no-print fixed left-0 top-0 z-40 hidden h-screen w-[var(--rail)] flex-col border-r border-cream-100/[0.06] bg-abyss/85 px-6 py-9 backdrop-blur-xl xl:flex">
        <Brandmark onHome={() => go("cover")} />

        <div className="my-7 h-px w-full bg-gradient-to-r from-cream-100/20 via-cream-100/8 to-transparent" />

        <nav className="flex-1 overflow-y-auto pr-1">
          <ul className="space-y-0.5">
            {CHAPTERS.map((c) => {
              const on = active === c.id;
              const accent = ACTS[c.act].accent;
              return (
                <li key={c.id}>
                  <button
                    onClick={() => go(c.id)}
                    className={`group relative flex w-full items-center gap-3 rounded-md py-[9px] pl-3 pr-2 text-left transition-colors ${
                      on ? "bg-cream-100/[0.07]" : "hover:bg-cream-100/[0.035]"
                    }`}
                  >
                    {on && (
                      <motion.span
                        layoutId="rail-bar"
                        className="absolute left-0 top-1/2 h-4 w-[2px] -translate-y-1/2 rounded-full"
                        style={{ background: accent }}
                      />
                    )}
                    <span
                      className="font-mono text-[10px] transition-colors"
                      style={{ color: on ? accent : undefined }}
                    >
                      <span className={on ? "" : "text-cream-500/50"}>{c.num}</span>
                    </span>
                    <span
                      className={`flex-1 truncate text-[13px] transition-colors ${
                        on ? "text-cream-50" : "text-cream-300/65 group-hover:text-cream-200"
                      }`}
                    >
                      {c.title}
                    </span>
                    {c.optional && (
                      <span
                        title="Supporting reference"
                        className="shrink-0 text-[8.5px] uppercase tracking-[0.14em] text-cream-500/50"
                      >
                        Ref
                      </span>
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

      </aside>

      {/* ── Mobile bar ── */}
      <div className="no-print fixed inset-x-0 top-0 z-40 flex items-center justify-between border-b border-cream-100/[0.07] bg-abyss/92 px-5 py-3 backdrop-blur-xl xl:hidden">
        <button onClick={() => go("cover")} className="flex items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand/paradigm-white.png" alt="Paradigm" className="h-auto w-[96px]" />
        </button>
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Chapters"
          className="flex items-center gap-2 rounded-md border border-cream-100/12 px-3 py-1.5 text-[11px] tracking-wide text-cream-300"
        >
          <span className="font-mono text-signal-500">
            {CHAPTERS.find((c) => c.id === active)?.num ?? "00"}
          </span>
          Chapters
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="no-print fixed inset-0 z-40 bg-abyss/97 backdrop-blur-xl xl:hidden"
          >
            <div className="h-full overflow-y-auto px-6 pb-10 pt-20">
              <div className="mb-7">
                <div className="text-[9.5px] uppercase tracking-[0.2em] text-cream-500/70">
                  Prepared for
                </div>
                <div className="mt-1.5 font-display text-lg text-cream-100">
                  {meta.client} · SDR Summit {meta.year}
                </div>
              </div>
              {CHAPTERS.map((c) => (
                <button
                  key={c.id}
                  onClick={() => go(c.id)}
                  className="flex w-full items-center gap-3 border-b border-cream-100/[0.05] py-3.5 text-left"
                >
                  <span className="font-mono text-[10px] text-cream-500">{c.num}</span>
                  <span className="text-[15px] text-cream-100">{c.title}</span>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
