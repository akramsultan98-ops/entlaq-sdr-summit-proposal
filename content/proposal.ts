/**
 * PROPOSAL CONTENT — pitch build.
 * ────────────────────────────────────────────────────────────
 * Every editable string lives here. Components render, they do not author.
 * Target: an 8-minute read. Nothing longer than four lines of prose.
 *
 * Source: Entlaq SDR Summit 2026 RFP (July 2026) + docs/02 … docs/16.
 */

/* ─────────────────────────── META ─────────────────────────── */

export const meta = {
  client: "Entlaq Holding",
  event: "Sectoral Diagnostics Report Summit",
  year: "2026",
  location: "El Gouna, Egypt",
  dates: "10 — 12 September 2026",
  submission: "10 August 2026",
  agency: "Paradigm",
  discipline: "Event Production & Experience",
  scope: "SIA, El Gouna · 3 Days · Production & AV",
  standfirst:
    "Three days of production and technical delivery at SIA — turning a landmark report into policy momentum, capital connections and commitments.",
};

export const facts = [
  { value: "500", label: "Senior guests" },
  { value: "3", label: "Days at SIA" },
  { value: "10", label: "Priority sectors" },
  { value: "1", label: "Production venue" },
];

/* ────────────────────── 01 · EXECUTIVE SUMMARY ────────────────────── */

export const summary = {
  lede: "Entlaq is not launching a report. It is making an ecosystem visible.",
  proposition:
    "Paradigm will design, produce and technically deliver the ENTLAQ SDR Summit across three days at SIA — translating Entlaq's Diagnose → Dive → Do framework into a cohesive live event experience.",
  heard: [
    "A three-act journey: Diagnose → Dive → Do.",
    "A signature report-launch moment built on a live data wall.",
    "A premium experience across VVIP, VIP and standard tiers.",
    "Evenings on the main stage, across all three days.",
  ],
  understanding: [
    "One venue, three days — the main stage is built once and serves the whole summit.",
    "SIA is outdoors. Wind loading governs the LED build; the Day 3 midday close needs assessing on site.",
    "Specialist equipment mobilises from Cairo. Lead time sits on the critical path.",
    "The data wall depends on a live feed from the Entlaq app — an integration to open early.",
  ],
  why: [
    { t: "We did the work first", d: "Venue and technical constraints surveyed before appointment." },
    { t: "We found what others missed", d: "SIA is outdoors and the Day 3 close falls at midday." },
    { t: "We build once, use three times", d: "One main-stage build serving all three days." },
    { t: "We say the hard thing early", d: "Three to four weeks from award to first guest. Stated, not hidden." },
  ],
};

/* ────────────────────── 03 · SIA, EL GOUNA ────────────────────── */

export const venue = {
  lede: "One venue, three days. SIA is the production environment for the entire summit.",
  points: [
    { t: "The main stage", d: "Report launch, evening programmes and the Day 3 close all play here." },
    { t: "Outdoor, Red Sea aspect", d: "Darkness favours the data wall. Wind loading governs the build." },
    { t: "Built once, used three times", d: "A single persistent build rather than three installations." },
  ],
  considerations: [
    {
      t: "Day 3 falls at midday",
      d: "The only session outside evening hours. Conditions to be assessed on site before the LED specification is locked.",
    },
    {
      t: "Wind loading governs rigging",
      d: "An outdoor large-format array is the highest-risk structure on the project. Engineering sign-off precedes build.",
    },
    {
      t: "Power assumed absent",
      d: "Generator provision with UPS on show-critical systems until venue supply is verified.",
    },
    {
      t: "Freight from Cairo",
      d: "Specialist equipment mobilises by road. Call-forward sits on the critical path.",
    },
  ],
};

/* ────────────────────── 04 · EXPERIENCE DESIGN ────────────────────── */

export const experienceIntro =
  "The following concepts illustrate the intended guest experience and creative direction for the summit. Final production details, layouts and branding will be refined following the official site inspection.";

/**
 * Concept blocks. `refs` are slugs resolved against /public/reference/experience
 * — extension and casing are irrelevant, nothing is hardcoded. `fallback` is an
 * existing project asset shown until concept references are supplied.
 */
export const experiences = [
  {
    t: "Registration Experience",
    line: "The first impression is not the stage. It is the welcome.",
    refs: ["arrival-registration"],
    fallback: "/media/sia.jpg",
    highlights: [
      { icon: "car", t: "Delegate Arrival" },
      { icon: "badge", t: "Guest Registration" },
      { icon: "grid", t: "Credential Collection" },
      { icon: "flag", t: "Wayfinding" },
    ],
  },
  {
    t: "Executive Discussions",
    line: "Ten sectors, examined one room at a time.",
    refs: ["roundtable-session", "executive-meeting"],
    fallback: "/media/concept-design.jpg",
    highlights: [
      { icon: "grid", t: "Roundtables" },
      { icon: "star", t: "Executive Meetings" },
      { icon: "shield", t: "Private Discussions" },
    ],
  },
  {
    t: "Networking Experience",
    line: "Where the summit's commercial value is actually realised.",
    refs: ["networking-lounge", "coffee-break"],
    fallback: "/media/gala-2.jpg",
    highlights: [
      { icon: "link", t: "Networking Lounge" },
      { icon: "cup", t: "Coffee Break" },
      { icon: "grid", t: "Business Connections" },
    ],
  },
  {
    t: "Evening Experience",
    line: "The human counterpoint to a day of data.",
    refs: ["gala-dinner", "live-saxophone", "live-band", "dj-lounge"],
    fallback: "/media/gala.jpg",
    highlights: [
      { icon: "music", t: "Live Saxophone" },
      { icon: "guitar", t: "Live Band" },
      { icon: "disc", t: "DJ Lounge" },
      { icon: "star", t: "Premium Hospitality" },
    ],
  },

  {
    t: "Closing Experience",
    line: "Concluded, not evicted.",
    refs: ["closing-ceremony", "group-photo"],
    fallback: "/media/gala-2.jpg",
    highlights: [
      { icon: "flag", t: "Farewell" },
      { icon: "camera", t: "Group Photo" },
      { icon: "star", t: "Closing Ceremony" },
    ],
  },
];

/* ────────────────────── 05 · TECHNICAL PRODUCTION ────────────────────── */

/** Main stage concept — proposed direction, not a construction drawing. */
export const mainStage = {
  /** Resolved from /public/media by stem — any extension. */
  imageStem: "main-stage-concept",
  label: "Proposed Concept",
  title: "Main Stage Concept — SIA",
  subtitle: "Proposed Main Stage & Scenic Direction",
  description: [
    "A premium, data-driven main stage designed for the SDR Summit's three-act narrative — Diagnose → Dive → Do. The proposed setup combines a large-format central LED/data wall with branded scenic elements, integrated side LED screens, a branded speaker podium, and flexible stage furniture to support keynote presentations, panel discussions and fireside conversations.",
    "The stage is designed to maintain a clean, premium corporate aesthetic while allowing the visual language, lighting and on-screen content to evolve throughout the three-day summit.",
  ],
  note:
    "The visual shown represents the proposed creative and production direction. Final dimensions, materials, branding application, furniture selection and technical positioning are subject to venue site inspection and final production drawings.",
};

export const production = {
  lede: "What Paradigm delivers at SIA across the three days. Equipment schedules and quantities sit in the commercial quotation.",

  /* BOQ classification — the physical build is never costed as AV. */
  scenic: {
    heading: "Stage / Staging & Scenic",
    icon: "wall",
    items: [
      "14m × 4m stage platform, 60–80cm height",
      "Branded stage face mask with LED strip",
      "2 × branded 3m × 4m side scenic backdrops",
      "Branded speaker podium",
      "VIP / lounge and panel seating",
      "Branded side tables",
      "Flexible furniture for fireside and panel formats",
    ],
  },
  av: {
    heading: "Audio Visual & Technical Production",
    icon: "grid",
    items: [
      "12m × 4m central LED / live data wall",
      "Integrated side LED screens",
      "Video processing and media servers",
      "Presentation and content playback system",
      "Speaker confidence monitors",
      "Audio system, RF and comms",
      "Stage and atmospheric lighting",
      "Intercom and show control",
      "Power distribution and generator provision",
      "Technical crew and show operators",
    ],
  },

  delivery: [
    {
      icon: "star", t: "Speaker Support", stat: "Ready room",
      d: "Briefing, preview and rehearsal so no speaker meets the stage cold.",
    },
    {
      icon: "poll", t: "Live Polling Integration", stat: "App feed",
      d: "Audience responses rendered onto the wall in real time, with a manual override path.",
    },
    {
      icon: "flag", t: "Show Delivery", stat: "Full crew",
      d: "Stage management, show calling, technical rehearsals, load-in and load-out.",
    },
  ],
};

/* ────────────────────── 06 · TIMELINE ────────────────────── */

export const phases = [
  { n: "01", t: "Preparation", when: "Week 1", d: "Long-lead LED and staging ordered on award. Engineering commissioned." },
  { n: "02", t: "Site Visit",  when: "Award +3 days", d: "SIA surveyed — power, rigging, access, Day 3 conditions." },
  { n: "03", t: "Production",  when: "Weeks 2–3", d: "Design locked. Fabrication, freight, content and app integration." },
  { n: "04", t: "Execution",   when: "10–12 Sept", d: "Load-in, technical rehearsal, three days of show." },
  { n: "05", t: "Wrap Up",     when: "Post-event", d: "Load-out, reconciliation, content delivery." },
];

/* ────────────────────── 07 · COMMERCIAL BUDGET ────────────────────── */

export const budget = {
  note: "The complete commercial quotation, itemised by function against every scope section of the brief.",
  detail:
    "Presented here in full and unaltered, as submitted. Assumptions are stated within the workbook, optional add-ons are priced separately, and contingency is shown as a visible line.",
};

/* ────────────────────── 08 · CONTACT ────────────────────── */

export const contact = {
  headline: "Thank you.",
  line: "We have done the work. We would like to finish it.",
  /** Left blank renders nothing — never a placeholder. Fill to display. */
  details: [
    { label: "Name", value: "Mohamed Akram" },
    { label: "Email", value: "mohamed.akram@paradigm-eg.com" },
    { label: "Phone", value: "01147400199 / 01080034172" },
  ],
};
