/**
 * THE THREE ACTS
 * ────────────────────────────────────────────────────────────
 * Diagnose → Dive → Do is ENTLAQ's own framework, stated in the RFP,
 * which also maps it to Days 1–3. We do not claim it.
 *
 * Paradigm's contribution is the translation: the delegate outcomes, the
 * experience mapping, and the atmospheric system below — accent, watermark
 * and motion evolving across the scroll so the proposal *feels* like the
 * journey rather than describing it.
 */

export type ActId = "diagnose" | "dive" | "do";

export interface Act {
  id: ActId;
  name: string;
  day: string;
  /** Verb-led purpose. Never more than four. */
  purpose: string[];
  outcome: string;
  /** Delegate-facing moments, all within SIA */
  experiences: string[];
  /** What Paradigm delivers technically that day */
  production: string[];
  /** Drives accent, watermark and atmosphere. Existing palette only. */
  accent: string;
  mood: string;
}

export const ACTS: Record<ActId, Act> = {
  diagnose: {
    id: "diagnose",
    name: "Diagnose",
    day: "Day One · Thu 10 Sept",
    purpose: [
      "Understand the ecosystem",
      "Discover opportunities",
      "Reveal challenges",
      "Create a common understanding",
    ],
    outcome: "Shared Understanding",
    experiences: [
      "Arrival",
      "Registration",
      "Opening",
      "SDR Report Launch",
      "Live Data Wall",
      "Audience Polling",
      "Panels & Keynotes",
      "Evening Programme",
    ],
    production: [
      "Main stage build",
      "LED & data wall",
      "Audio & lighting",
      "Content playback",
      "Speaker support",
    ],
    accent: "#5FA8B5",
    mood: "Data · Research · Insight",
  },
  dive: {
    id: "dive",
    name: "Dive",
    day: "Day Two · Fri 11 Sept",
    purpose: [
      "Explore and connect",
      "Collaborate across sectors",
      "Build relationships",
      "Create opportunities",
    ],
    outcome: "Meaningful Collaboration",
    experiences: [
      "Deep-Dive Sessions",
      "Fireside Conversations",
      "Interactive Sessions",
      "Roundtable Discussions",
      "Networking Moments",
      "Main-Stage Programme",
    ],
    production: [
      "Stage continuity",
      "Breakout AV",
      "Presentation management",
      "Audio & lighting",
      "Speaker support",
    ],
    accent: "#E9A93C",
    mood: "Connection · Movement · Ideas",
  },
  do: {
    id: "do",
    name: "Do",
    day: "Day Three · Sat 12 Sept",
    purpose: [
      "Transform dialogue into action",
      "Create commitments",
      "Launch initiatives",
      "Leave with momentum",
    ],
    outcome: "Action & Momentum",
    experiences: [
      "Action Sessions",
      "Final Discussions",
      "Startup Charter",
      "Commitments",
      "Closing Sequence",
      "Midday Close",
    ],
    production: [
      "Main stage",
      "Screen system",
      "Audio & lighting",
      "Presentation management",
      "Closing sequence",
    ],
    accent: "#F5C978",
    mood: "Confidence · Resolution · Impact",
  },
};

export const ACT_ORDER: ActId[] = ["diagnose", "dive", "do"];

/** Cinematic beats between acts. Minimal, emotional, no explanation. */
export const TRANSITIONS: { from: ActId; to: ActId; lines: [string, string] }[] = [
  {
    from: "diagnose",
    to: "dive",
    lines: ["We understood the ecosystem.", "Now we explore the opportunities."],
  },
  {
    from: "dive",
    to: "do",
    lines: ["Conversations create ideas.", "Execution creates impact."],
  },
];

/** Attribution — stated once, quietly, so the framework is never over-claimed. */
export const ATTRIBUTION =
  "Diagnose → Dive → Do is Entlaq's design logic. What follows is our translation of it into a delegate journey.";
