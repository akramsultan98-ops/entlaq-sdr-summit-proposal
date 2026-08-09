"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useIsPrinting } from "@/lib/usePrint";

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * El Gouna venue map — ZONE-BASED, honestly caveated.
 * SÍA's exact coordinates are not published; these are indicative zones,
 * never false-precision pins.
 *
 * ORs its in-view check with `useIsPrinting()` because the paths animate from
 * `pathLength: 0` written inline — a print stylesheet cannot reconstruct that.
 */
export function VenueMap() {
  const ref = useRef<SVGSVGElement>(null);
  const seen = useInView(ref, { once: true, margin: "-20%" });
  const printing = useIsPrinting();
  const inView = seen || printing;

  // One zone — SIA is the production environment. Other districts are context,
  // not scope, so they are not plotted.
  const zones = [
    { id: "sia", label: "SÍA", sub: "Production venue · 3 days", x: 292, y: 74, r: 58, tone: "signal" },
  ];

  return (
    <div>
      <svg ref={ref} viewBox="0 0 400 300" className="w-full" role="img" aria-label="El Gouna venue zones">
        <motion.path
          d="M 384 8 C 352 52, 320 76, 286 104 C 250 134, 224 168, 196 206 C 172 240, 140 268, 96 292"
          fill="none"
          stroke="#2E7787"
          strokeWidth="1.25"
          strokeDasharray="3 4"
          initial={{ pathLength: 0 }}
          animate={inView ? { pathLength: 1 } : {}}
          transition={{ duration: 2, ease: EASE }}
        />
        <text x="352" y="26" className="fill-depth-300 text-[8px]" style={{ opacity: 0.7 }}>
          Red Sea
        </text>

        {[
          { x: 150, y: 160, rx: 30, ry: 13, rot: -28 },
          { x: 196, y: 118, rx: 24, ry: 10, rot: -34 },
          { x: 140, y: 228, rx: 22, ry: 9, rot: -20 },
        ].map((l, i) => (
          <motion.ellipse
            key={i}
            cx={l.x} cy={l.y} rx={l.rx} ry={l.ry}
            transform={`rotate(${l.rot} ${l.x} ${l.y})`}
            fill="#1A4A5C"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 0.3 } : {}}
            transition={{ duration: 1.2, delay: 0.5 + i * 0.15 }}
          />
        ))}

        {zones.map((z, i) => {
          const stroke = z.tone === "signal" ? "#E9A93C" : z.tone === "depth" ? "#5FA8B5" : "#9C978A";
          return (
            <motion.g
              key={z.id}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.9, delay: 0.8 + i * 0.13, ease: EASE }}
              style={{ transformOrigin: `${z.x}px ${z.y}px` }}
            >
              <circle cx={z.x} cy={z.y} r={z.r} fill={stroke} opacity={0.07} />
              <circle cx={z.x} cy={z.y} r={z.r} fill="none" stroke={stroke} strokeWidth="0.8"
                      strokeDasharray="2 3" opacity={0.5} />
              <circle cx={z.x} cy={z.y} r="2.5" fill={stroke} />
              <text x={z.x} y={z.y - 9} textAnchor="middle" className="text-[9px] font-medium"
                    fill="#F5F2EA">{z.label}</text>
              <text x={z.x} y={z.y + 16} textAnchor="middle" className="text-[7px]"
                    fill="#9C978A">{z.sub}</text>
            </motion.g>
          );
        })}

        <motion.g
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1.7 }}
        >
          <line x1="60" y1="286" x2="240" y2="120" stroke="#9C978A" strokeWidth="0.7" strokeDasharray="2 3" />
          <text x="16" y="294" className="text-[7.5px]" fill="#9C978A">HRG · ~30–40 min</text>
        </motion.g>
      </svg>

      <p className="mt-3 text-xs leading-relaxed text-cream-500">
        Indicative position. SÍA publishes no address; to be confirmed at site inspection.
      </p>
    </div>
  );
}
