/**
 * VISUAL CONCEPTS — supporting creative reference.
 *
 * Not part of the proposal narrative. Optional, browsable in under two minutes.
 * Creative references only — never final production drawings.
 */

/* ── Reference folders under /public/reference ──
   Contents are read from disk at build time — filenames are never assumed.
   See lib/reference.ts. */

export const REFERENCE_FOLDERS = {
  kits: "giveaways",
  experience: "experience",
} as const;

/**
 * Kit contents, matched to whatever image is found by a keyword in its
 * filename. "ENTLAQ Welcome Kit.png" → Welcome Kit contents. An image that
 * matches nothing still renders; it simply carries no list.
 */
export const kitContents: { match: RegExp; contains: string[] }[] = [
  {
    match: /wellness/i,
    contains: ["Yoga Mat", "Cooling Towel", "Detox Drink", "Wellness Essentials"],
  },
  {
    match: /\bvip\b/i,
    contains: ["Executive Welcome Collection"],
  },
  {
    match: /welcome/i,
    contains: [
      "Frosted Glass Bottle",
      "Premium Notebook",
      "Premium Metal Pen",
      "Canvas Tote Bag",
      "Thank You Card",
    ],
  },
];

export function contentsFor(filename: string): string[] {
  return kitContents.find((k) => k.match.test(filename))?.contains ?? [];
}
