/**
 * Chapter registry — the spine of the proposal.
 *
 * v3: pitch structure. Ten chapters, flat navigation.
 * One idea per chapter. Visual over prose.
 */

import type { ActId } from "./acts";

export interface Chapter {
  id: string;
  num: string;
  title: string;
  /** Drives accent, watermark and atmosphere — the journey, felt not labelled. */
  act: ActId;
  /** Supporting reference, outside the narrative. Badged in the rail. */
  optional?: boolean;
}

export const CHAPTERS: Chapter[] = [
  { id: "cover",      num: "00", title: "Cover",                act: "diagnose" },
  { id: "summary",    num: "01", title: "Executive Summary",    act: "diagnose" },
  { id: "journey",    num: "02", title: "Event Journey",        act: "diagnose" },
  { id: "venue",      num: "03", title: "SIA, El Gouna",        act: "diagnose" },
  { id: "experience", num: "04", title: "Experience Design",    act: "dive" },
  { id: "production", num: "05", title: "Technical Production", act: "dive" },
  { id: "timeline",   num: "06", title: "Timeline",             act: "do" },
  { id: "budget",     num: "07", title: "Commercial Budget",    act: "do" },
  { id: "library",    num: "08", title: "Visual Concepts",      act: "do", optional: true },
  { id: "contact",    num: "09", title: "Contact",              act: "do" },
];
