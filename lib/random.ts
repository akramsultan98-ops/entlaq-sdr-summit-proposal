/**
 * Deterministic PRNG — integer operations only.
 *
 * WHY NOT Math.sin: the ECMAScript spec permits implementation-dependent
 * approximations for transcendental functions (sin, cos, exp, pow). Two
 * engines may differ in the final bit. The common `fract(sin(x) * 43758.5453)`
 * hash then amplifies that single-ULP difference into a completely different
 * value — which is exactly how an SSR/hydration mismatch appears.
 *
 * mulberry32 uses only Math.imul, XOR and bit shifts, all of which are
 * exactly specified over int32. Division by 2^32 is exact in float64.
 * Identical output on every engine, every platform, every time.
 */
export function mulberry32(seed: number): () => number {
  let a = seed >>> 0;
  return function next(): number {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** Round to fixed precision so emitted style strings are byte-stable. */
export const q = (n: number, dp = 3): number => Number(n.toFixed(dp));
