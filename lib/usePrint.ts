"use client";

import { useEffect, useState } from "react";

/**
 * True while the browser is preparing a print/PDF snapshot.
 *
 * Scroll-triggered charts animate from a zero dimension — `width: 0`,
 * `height: 0`, `pathLength: 0` — written INLINE by Framer Motion. A print
 * stylesheet cannot reconstruct those values, so any chart the reader never
 * scrolled past would print empty. Components OR this into their in-view
 * check so they resolve to their final state for the snapshot.
 *
 * Starts `false` on the server and on first client render, so it can never
 * cause a hydration mismatch.
 */
export function useIsPrinting(): boolean {
  const [printing, setPrinting] = useState(false);

  useEffect(() => {
    const on = () => setPrinting(true);
    const off = () => setPrinting(false);

    window.addEventListener("beforeprint", on);
    window.addEventListener("afterprint", off);

    // DevTools print emulation does not fire beforeprint
    const mq = window.matchMedia("print");
    const onChange = (e: MediaQueryListEvent) => setPrinting(e.matches);
    mq.addEventListener?.("change", onChange);

    return () => {
      window.removeEventListener("beforeprint", on);
      window.removeEventListener("afterprint", off);
      mq.removeEventListener?.("change", onChange);
    };
  }, []);

  return printing;
}
