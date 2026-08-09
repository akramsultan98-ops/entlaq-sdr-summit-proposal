"use client";

/**
 * Fullscreen image preview for Visual Concepts.
 *
 * Reuses the proposal's existing motion language (AnimatePresence + the same
 * keynote easing). No new visual system, no new animation vocabulary.
 *
 * All imagery goes through next/image: responsive srcset, AVIF/WebP
 * conversion, lazy loading, and aspect-ratio reservation via `fill` inside a
 * container that already declares its ratio — so nothing shifts on load.
 */

import { useCallback, useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

export interface Shot {
  src: string;
  title: string;
}

/** Grid tiles: 1 col on mobile, 2 from sm up — larger plates, fewer columns. */
const TILE_SIZES = "(max-width: 640px) 100vw, 50vw";

/* ── Reference image tile ──────────────────────────────
   Only rendered for images the build already found on disk. */
export function RefImage({
  src,
  title,
  ratio = "aspect-[4/3]",
  onOpen,
  eager = false,
}: {
  src: string;
  title: string;
  ratio?: string;
  onOpen?: () => void;
  /** Print path — lazy images may not resolve before the snapshot. */
  eager?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label={`Open ${title}`}
      className={`group relative w-full cursor-zoom-in overflow-hidden rounded-xl border border-cream-100/[0.08] bg-navy-900 ${ratio}`}
    >
      {/* No per-image caption — the gallery title carries the label. The name
          survives in aria-label and in the lightbox. A mood board, not an
          asset browser. */}
      <Image
        src={src}
        alt={title}
        fill
        sizes={TILE_SIZES}
        quality={88}
        loading={eager ? "eager" : "lazy"}
        className="object-cover opacity-90 transition-opacity duration-500 group-hover:opacity-100"
      />
    </button>
  );
}

/* ── Empty gallery ── */
export function GalleryPending() {
  return (
    <div className="rounded-xl border border-cream-100/[0.07] px-8 py-14 text-center">
      <p className="text-[14px] leading-relaxed text-cream-300/60">
        Visual references will be presented during the creative development phase.
      </p>
    </div>
  );
}

/* ── The lightbox itself ── */
export function Lightbox({
  shot,
  onClose,
}: {
  shot: Shot | null;
  onClose: () => void;
}) {
  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (!shot) return;
    document.addEventListener("keydown", handleKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = prev;
    };
  }, [shot, handleKey]);

  return (
    <AnimatePresence>
      {shot && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={shot.title}
          className="no-print fixed inset-0 z-[60] flex cursor-zoom-out items-center justify-center bg-abyss/95 p-6 backdrop-blur-xl md:p-12"
        >
          <motion.div
            initial={{ scale: 0.97, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.98, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex w-full max-w-6xl flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Fixed-ratio box reserves the space; object-contain preserves
                the original framing at any aspect ratio. */}
            <div className="relative h-[78vh] w-full">
              <Image
                src={shot.src}
                alt={shot.title}
                fill
                sizes="(max-width: 1280px) 100vw, 1280px"
                quality={90}
                priority
                className="rounded-lg object-contain"
              />
            </div>
            <div className="mt-4 flex items-center justify-between gap-6">
              <span className="text-sm text-cream-100">{shot.title}</span>
              <button
                onClick={onClose}
                className="rounded-md border border-cream-100/15 px-3 py-1.5 text-[11px] tracking-wide text-cream-500 transition-colors hover:border-cream-100/35 hover:text-cream-100"
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
