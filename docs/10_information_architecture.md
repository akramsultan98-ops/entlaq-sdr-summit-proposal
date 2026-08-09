# Information Architecture — Interactive Executive Proposal

**Role:** Lead Experience Designer & Frontend Architect
**Deliverable:** Blueprint for the ENTLAQ SDR Summit 2026 proposal. **Build specification only — no build in this phase.**

---

# 0. Two findings that shape everything below

## 0.1 The submission deadline is seven days away

The RFP states: *"Proposals should be submitted by the 10th of August 2026."* Today is **3 August 2026**.

This is not a constraint to design around later — it is the primary architectural constraint. Every recommendation below is scoped to what can be built, reviewed and shipped in that window. Where an idea is excellent but not deliverable in seven days, it is marked **Phase 2 / post-submission** rather than dropped.

## 0.2 The approved documents cover roughly one-sixth of what the RFP asks for

The eight approved documents are strong, but they answer the *context* of the brief. The RFP's §5 "What to Include in Your Proposal" asks for six specific things, and most are not yet developed.

| RFP §5 requirement | Covered by approved docs? | Status |
|---|---|---|
| 1. **Creative concept and design direction** | Partially — venue/journey logic exists, no creative concept | **Major gap** |
| 2. **Technical production plan and equipment for each space** | No | **Major gap** |
| 3. **Detailed itemized budget by function, with assumptions and optional add-ons** | No — explicitly excluded from every document so far | **Major gap** |
| 4. **Project team and structure** | No | **Major gap** |
| 5. **Production timeline and critical path from award** | No | **Major gap** |
| 6. **Relevant experience and case studies** | No | **Major gap** |

**What the approved documents actually give us** is the strategic substrate — destination intelligence, venue logic, hospitality strategy, guest journey, movement, access and VIP service. That is genuinely differentiating material that most competitors will not have. But **it is not, by itself, a compliant proposal.**

**Architectural consequence:** the IA below is deliberately structured so that the strong material carries the narrative while the six required elements each have a defined home. Sections marked **[CONTENT REQUIRED]** have no source document and must be written before build.

---

# 1. Reader Analysis

An executive proposal is not read by one person in one way. Three readers will open this, and the architecture must serve all three without compromising for any.

| Reader | Who | Time | What they need | Failure mode if ignored |
|---|---|---|---|---|
| **The Decider** | Entlaq leadership | **5 minutes**, likely on a phone | Do these people understand us? Can they deliver? What is the big idea? | Buries the concept below the fold; they never reach it |
| **The Evaluator** | Procurement | **30 minutes**, methodical | Does this answer every RFP requirement? Is the budget clear? | No compliance mapping; they cannot score it |
| **The Specialist** | Production / technical lead | **60+ minutes**, sceptical | Do they actually know the venues, the constraints, the risks? | Depth hidden behind marketing gloss; they dismiss it |

**Architectural principle:** one proposal, **three reading paths**. The Decider gets a five-minute vertical. The Evaluator gets a compliance spine. The Specialist gets progressive disclosure into depth. None of them should feel they are reading someone else's document.

---

# 2. Creative Platform

## 2.1 The central idea

The RFP describes a summit built on a **live data-wall** that turns a static report into a public, interactive moment. The proposal should do the same thing to the brief.

> **The proposal is a prototype of the proposition.**

If we are asking Entlaq to trust us with an interactive, data-driven reveal, the proposal itself should demonstrate that capability. A PDF cannot do this. An interactive proposal that visibly turns *their* brief into *our* plan is both the argument and the evidence.

## 2.2 The narrative spine

Entlaq's event concept is **Diagnose → Dive → Do**. The proposal deliberately rhymes with it:

| Their act | Our act | What it contains |
|---|---|---|
| **Diagnose** | **DIAGNOSE** — we read the brief | Understanding, destination, venues, constraints, risks |
| **Dive** | **DESIGN** — here is the experience | Creative concept, signature moment, journey, hospitality, movement, access, VIP |
| **Do** | **DELIVER** — here is how it happens | Production, team, timeline, budget, risk, next steps |

**Why rhyme rather than copy:** using their exact three words for our own structure risks reading as either confusion or flattery. *Diagnose → Design → Deliver* is unmistakably an echo — it signals we internalised their logic and applied it to our own discipline. The connection should be **stated explicitly once**, early, then left to work quietly.

## 2.3 Tone

Confident, evidenced, calm. The strongest differentiator available to us is that **we have done real work before being appointed** — we identified that SÍA is outdoors, that "Migumi" is likely Megumi at Fanadir Marina, that ten sectors do not fit six halls, that ~200 accredited guests are not gala invitees. The design should let those findings land without shouting.

**Design rule: the more valuable the insight, the quieter the presentation.**

---

# 3. Main Sections & Chapter Order

Nineteen sections in three acts, plus prologue and appendix.

### PROLOGUE

| # | Section | Purpose | Source |
|---|---|---|---|
| 00 | **Cover / Hero** | Immediate impact. Establishes tone in one screen. | New |
| 01 | **Executive Summary** | The 5-minute read. Everything a Decider needs. | Synthesis of all |

### ACT I — DIAGNOSE

| # | Section | Purpose | Source |
|---|---|---|---|
| 02 | **What We Heard** | Prove comprehension. Restate the brief in our words. | RFP |
| 03 | **The Destination** | El Gouna as strategic choice — advantages and honest challenges. | [02_destination.md](02_destination.md) |
| 04 | **The Venues** | Venue logic, the two-cluster model, functional space mapping. | [05_venue_strategy.md](05_venue_strategy.md) |
| 05 | **What We Found** | **The differentiator.** Findings a competitor working from the brief alone would not have. | 02, 04, 05 |

### ACT II — DESIGN

| # | Section | Purpose | Source |
|---|---|---|---|
| 06 | **The Creative Concept** | The overarching idea across all touchpoints. **[CONTENT REQUIRED]** | RFP §4.1 |
| 07 | **The Signature Moment** | The report launch. The single most important section in the proposal. **[CONTENT REQUIRED]** | RFP §4.1, §4.2 |
| 08 | **The Guest Journey** | Seven phases, three tiers, six moments that matter. | [07_guest_journey.md](07_guest_journey.md) |
| 09 | **Arrival & Access** | Registration, accreditation, app onboarding. | [08_registration_strategy.md](08_registration_strategy.md) |
| 10 | **Hospitality** | Accommodation strategy and hotel evaluation. | [03](03_accommodation.md), [04](04_hotels.md) |
| 11 | **Movement** | Transport strategy, fleet tiers, peak management. | [06_transportation_strategy.md](06_transportation_strategy.md) |
| 12 | **The Senior Experience** | VVIP dual-track, protocol, concierge, VIP lounge. | [09_vip_experience.md](09_vip_experience.md) |
| 13 | **Evening & Social** | Gala, marina dinner, wellness, activations. **[CONTENT REQUIRED]** | RFP §4.4 |

### ACT III — DELIVER

| # | Section | Purpose | Source |
|---|---|---|---|
| 14 | **Technical Production** | AV, lighting, sound, data-wall, per-space equipment. **[CONTENT REQUIRED]** | RFP §5.2 |
| 15 | **The Team** | Structure, named roles, accountability. **[CONTENT REQUIRED]** | RFP §5.4 |
| 16 | **Timeline & Critical Path** | From award to load-out. **[CONTENT REQUIRED]** | RFP §5.5 |
| 17 | **Risk & Assurance** | How we de-risk a multi-venue destination summit. | All docs |
| 18 | **Experience** | Case studies and relevant work. **[CONTENT REQUIRED]** | RFP §5.6 |
| 19 | **Investment** | Budget summary; links to the itemized document. **[CONTENT REQUIRED]** | RFP §5.3 |

### APPENDIX

| # | Section | Purpose |
|---|---|---|
| A1 | **RFP Compliance Matrix** | Every RFP requirement mapped to where it is answered. Built for the Evaluator. |
| A2 | **Open Questions for Entlaq** | Consolidated from all documents — demonstrates rigour, not indecision. |
| A3 | **Assumptions & Verification Status** | What we have assumed, what needs site-inspection confirmation. |

## 3.1 Two placement decisions worth defending

**Why "What We Found" (05) sits at the end of Act I, not buried in an appendix.** This section carries our hardest-won material — SÍA is outdoors and the Day 3 close falls at midday; "Migumi" cannot be found under that spelling; the SDR's ten sectors do not fit the campus's six halls; ~200 accredited guests are not gala invitees. Placing it immediately before the creative work means the reader enters Act II already convinced we know things others do not. **This is the section most likely to win the pitch.**

**Why "The Signature Moment" (07) is separated from the creative concept (06).** The RFP names the report launch as *the* headline moment. Folding it into a general creative section under-weights it. It deserves its own chapter, its own visual treatment, and the proposal's single most ambitious interactive element.

---

# 4. Navigation Structure

## 4.1 Model

**Single-page vertical scroll, chaptered, with persistent navigation.** Not a multi-page site.

Rationale: a scroll narrative preserves momentum and reads well on a phone (the Decider's context). Multi-page fragments the argument and adds load transitions that break pace.

## 4.2 Components

| Component | Behaviour | Serves |
|---|---|---|
| **Persistent chapter rail** | Fixed left (desktop) / collapsed top (mobile). Shows act, current chapter, progress. Click to jump. | All readers |
| **Act markers** | Full-bleed transitions between Acts I / II / III. Give the narrative breathing room and signal structural change. | Decider |
| **Reading-time indicator** | Per section, in the rail. Sets expectations honestly. | Decider |
| **"5-minute read" toggle** | Collapses the proposal to Executive Summary + section headlines + key visuals. **A genuine mode, not a summary page.** | Decider |
| **Progress bar** | Thin, top-edge, continuous. | All |
| **Jump-to-compliance** | Persistent link to the RFP Compliance Matrix from anywhere. | Evaluator |
| **Progressive disclosure** | "Go deeper" expanders on data-heavy sections. Surface stays clean; depth is one click away. | Specialist |
| **Export to PDF** | Persistent. **Non-negotiable — see §10.** | Evaluator |

## 4.3 Navigation principles

1. **The reader always knows where they are and how much remains.** Uncertainty about length is the main cause of abandonment in long-form documents.
2. **No dead ends.** Every section ends by leading into the next.
3. **Depth is opt-in, never mandatory.** The Specialist can open everything; the Decider never has to.
4. **Nothing important is behind an interaction.** Every critical message must survive a reader who does not click, scroll-hijack, or wait for an animation.

---

# 5. Storytelling Flow

The emotional arc across the read, and what each beat must accomplish.

| Beat | Section | Reader should feel | Mechanism |
|---|---|---|---|
| **Arrest** | 00 Hero | "This is a serious agency." | One image, one line, no clutter |
| **Orient** | 01 Exec Summary | "I know what I'm getting." | Scannable; the big idea stated plainly |
| **Recognise** | 02 What We Heard | "They understood us." | Their brief, reflected back with precision |
| **Trust** | 03–04 Destination & Venues | "They know this place." | Specificity and honest limitations |
| **Surprise** | 05 What We Found | **"They know things we don't."** | The findings, quietly presented |
| **Excite** | 06–07 Concept & Signature Moment | "I can see it." | The proposal's visual peak |
| **Reassure** | 08–13 Journey through Social | "Every detail is handled." | Systematic, calm, comprehensive |
| **Convince** | 14–18 Production through Experience | "They can actually deliver." | Evidence, structure, named accountability |
| **Decide** | 19 Investment | "This is coherent and worth it." | Clarity; no surprises |
| **Act** | Appendix + Next Steps | "Let's get them on site." | Clear, low-friction next step |

**The pivot is Section 05.** Everything before it establishes credibility; everything after it spends that credibility on ambition. If Section 05 lands, the creative work in Act II is read generously. If it does not, Act II reads as speculation.

**The proposal's emotional peak is Section 07** and should be its most designed moment — mirroring the report launch's role in the Summit itself.

---

# 6. User Journey Through the Proposal

## Path A — The Decider (5 minutes, mobile)
`Hero → Executive Summary → [5-minute mode] → What We Found → Signature Moment → Investment → Next Steps`

Must work entirely on a phone, in portrait, possibly on hotel wifi. **This path is the one most likely to determine the outcome and the one most likely to be under-tested.**

## Path B — The Evaluator (30 minutes, desktop)
`Hero → Compliance Matrix → jump to each RFP requirement in turn → Investment → Assumptions → PDF export`

Enters through the appendix, not the front door. Reads non-linearly. Needs every RFP requirement locatable in one click and a clean PDF for internal circulation and scoring.

## Path C — The Specialist (60+ minutes, desktop)
`Full linear read → expands every "go deeper" → Venues → Technical Production → Risk → Open Questions`

Reads for weakness. **Rewarded by honesty:** the "To Be Confirmed" markers and the Site Inspection Priority framing will read as competence, not as gaps — provided they are presented as deliberate positions rather than omissions.

---

# 7. Content Mapping

What goes where, and what must not be repeated. The approved documents are strategic; the proposal is persuasive. **Content must be re-authored, not pasted.**

| Section | Include | Deliberately exclude |
|---|---|---|
| **01 Exec Summary** | The big idea; 4–5 headline findings; scale figures; what we're asking for | Any detail; any caveat |
| **02 What We Heard** | Three-act logic, ~500 guests, multi-venue, three days, success criteria | Our opinions — this is their voice |
| **03 Destination** | Why El Gouna works; the September heat reality; access | Full advantage/challenge lists; hotel content |
| **04 Venues** | Two-cluster model; functional space logic; venue decision matrix | Full 18-space inventory (→ progressive disclosure) |
| **05 What We Found** | SÍA is outdoors + Day 3 midday; Megumi identification; ten sectors vs six halls; ~200 non-gala guests; luxury inventory scarcity | Anything not genuinely non-obvious |
| **06 Concept** | The creative platform across all touchpoints | Execution detail |
| **07 Signature Moment** | The data-wall reveal; polling integration; the emotional design | Technical specification (→ §14) |
| **08 Guest Journey** | Seven phases; six moments that matter; tier differentiation | Risk tables |
| **09 Arrival & Access** | Three-stage model; differentiated paths; app onboarding | Data governance detail (→ disclosure) |
| **10 Hospitality** | Tiered strategy; allocation logic; **Preferred/Alternative classification** | Full 13-hotel profiles (→ disclosure) |
| **11 Movement** | Three-tier fleet; the seven peaks; control model | Full risk register |
| **12 Senior Experience** | VVIP dual-track; protocol readiness; lounge as dealmaking room | Full question lists |
| **13 Evening & Social** | Gala, marina, wellness, activations concepts | Venue evaluation (→ §04) |
| **14 Technical Production** | Per-space equipment; data-wall spec; AV/lighting/sound | Creative rationale (→ §06) |
| **15–19** | New content per RFP §5 | — |

**Anti-duplication rule:** each fact appears **once** in the proposal, in the section that owns it. Other sections reference it. This is the same discipline applied across the eight approved documents.

---

# 8. Visual Requirements

Priority: **P1** = required for submission. **P2** = strong value if time allows. **P3** = post-submission.

| # | Visual | Section | Priority | Notes |
|---|---|---|---|---|
| V1 | Hero image — El Gouna / Red Sea at dusk | 00 | **P1** | Must be licensed or owned. Sets entire tone. |
| V2 | Data-wall concept render | 07 | **P1** | **The single most important visual in the proposal.** Must be created. |
| V3 | Venue imagery — SÍA | 04, 07 | **P1** | Available: `assests/venues/sia.jpg.jfif` |
| V4 | Gala venue imagery — Megumi, Villa Coconut | 13 | **P1** | Available: `migumi.jpg.jfif`, `villa-coconut.jpg.jpg` |
| V5 | Gala atmosphere | 13 | **P1** | Available: `activities/gala.jpg.jfif`, `gala-2.jpg.jfif` |
| V6 | Wellness / sunrise yoga | 13 | **P1** | Available: `activities/yoga.jpg.jfif` |
| V7 | Concept design board | 06 | **P1** | Available: `assests/concepts/concept-design.jpg.jfif` |
| V8 | Hotel imagery | 10 | P2 | Available: `assests/hotels/casa-cook.jpg.jfif` — only one hotel covered |
| V9 | Act divider imagery ×3 | Act breaks | **P1** | Full-bleed, atmospheric |
| V10 | Team photography | 15 | P2 | Needed if team section is to carry credibility |
| V11 | Case study imagery | 18 | **P1** | Required — case studies without images will not persuade |
| V12 | Stage / scenic references | 06, 14 | P2 | Mood-board treatment |

**Asset gaps to resolve immediately:** V2 (data-wall render) and V11 (case study imagery) are P1 with no existing source. V10 depends on the team section existing at all.

**Two practical asset notes:** the asset folder is spelled `assests/`, and image files carry double extensions (`.jpg.jfif`, `.jpg.jpg`). Both need normalising during build — `.jfif` requires conversion for reliable web delivery.

---

# 9. Diagram, Map & Animation Requirements

## 9.1 Diagrams

| # | Diagram | Section | Priority | Form |
|---|---|---|---|---|
| D1 | **Diagnose → Design → Deliver** narrative spine | 01 | **P1** | Simple three-beat graphic; anchors the whole proposal |
| D2 | **Two-cluster venue model** | 04 | **P1** | Evening cluster / morning cluster / three social sites |
| D3 | **Three-day programme timeline** | 08 | **P1** | Horizontal, three lanes, venue-coded |
| D4 | **Guest journey arc — seven phases** | 08 | **P1** | Linear with tier variation |
| D5 | **Functional space map** — 18 spaces by cluster | 04 | P2 | Progressive disclosure |
| D6 | **Registration three-stage flow** | 09 | **P1** | Pre-registration → pre-arrival → on-site |
| D7 | **Three-tier fleet diagram** | 11 | **P1** | Cars / vans / coaches with populations |
| D8 | **Movement peak profile** | 11 | **P1** | Seven peaks across three days — chart |
| D9 | **VVIP dual-track model** | 12 | **P1** | Government track vs Capital track |
| D10 | **Room allocation** — 150 rooms by category | 10 | **P1** | Proportional; must read as provisional |
| D11 | **Hotel classification matrix** | 10 | **P1** | Preferred / Alternative / Not Recommended |
| D12 | **Venue decision matrix** | 04 | **P1** | Confirmed / Suggested / TBC / Inferred |
| D13 | **Team structure** | 15 | **P1** | Org chart with named accountability |
| D14 | **Critical path Gantt** | 16 | **P1** | Award → load-out |
| D15 | **Risk matrix** | 17 | P2 | Severity × likelihood |
| D16 | **Data-wall / app data-flow** | 07, 14 | P2 | Polling → app → wall |

**Charting standard:** all data visuals must follow one consistent system — shared palette, type scale and axis treatment. Inconsistent charting is the fastest way to make a proposal look assembled rather than authored. *(Load the `dataviz` skill before building any of these.)*

## 9.2 Maps

| # | Map | Section | Priority | Notes |
|---|---|---|---|---|
| M1 | **Egypt → Red Sea → El Gouna locator** | 03 | **P1** | Establishes place for international readers |
| M2 | **HRG → El Gouna transfer route** | 03, 11 | **P1** | ~30–40 min, single coastal road |
| M3 | **El Gouna town map — venue pins** | 04 | **P1** | **The proposal's most important map** |
| M4 | **Venue cluster overlay** | 04 | **P1** | Evening / morning / social zones |
| M5 | **Hotel distribution** | 10 | P2 | Property positions by tier |
| M6 | **Day-by-day movement map** | 11 | P2 | Animated per day |

> **Critical honesty constraint carried from [05_venue_strategy.md](05_venue_strategy.md): SÍA's exact location is not published.** Every map must use **zone-based positioning with a visible caveat**, not false precision. Plotting a confident pin for SÍA would be a fabrication, and the Specialist reader is exactly the person who would catch it. **Approximate positioning, honestly labelled, reads as rigour. A wrong pin destroys credibility permanently.**

## 9.3 Animations

**Principle: animate the narrative, never the evidence.** Motion carries story; facts are presented still. Every animation must survive `prefers-reduced-motion` and must not gate meaning.

| # | Animation | Section | Priority | Value |
|---|---|---|---|---|
| A1 | **Data-wall reveal simulation** | 07 | **P1** | **The proposal's centrepiece.** Demonstrates the capability we are proposing. Highest value per effort in the entire build. |
| A2 | Map zoom — Egypt → El Gouna | 03 | **P1** | Establishes place with momentum |
| A3 | Act transitions ×3 | Act breaks | **P1** | Structural punctuation; cheap, high impact |
| A4 | Scroll-linked three-day timeline | 08 | P2 | Journey unfolds as the reader scrolls |
| A5 | Venue cluster assembly | 04 | P2 | Spaces group into clusters |
| A6 | Key-figure counters (500 / 150 / 3 / 10) | 01 | P2 | Use sparingly — one instance only |
| A7 | Movement peaks building | 11 | P2 | Chart draws in |
| A8 | Live-polling interaction demo | 07 | **P3** | Genuinely impressive; likely beyond seven days |
| A9 | Critical path progressive reveal | 16 | P3 | Nice, not necessary |

**If only one animation is built, build A1.** It is the proposal arguing for itself.

## 9.4 Deliberately static sections

Stillness is a design decision. These sections should carry **no motion at all**, because calm presentation is what makes them credible:

| Section | Why static |
|---|---|
| **What We Heard (02)** | Their words. Animation would editorialise. |
| **RFP Compliance Matrix (A1)** | Pure reference. The Evaluator wants a table, not an experience. |
| **Investment (19)** | Budget must read as sober and unembellished. Animated money looks like salesmanship. |
| **Risk & Assurance (17)** | Credibility comes from steadiness. |
| **Team (15)** | Faces and names. Motion trivialises accountability. |
| **Assumptions & Verification (A3)** | Honest, plain, unstyled. |
| **Open Questions (A2)** | A working list, presented as one. |

**The contrast is the point.** The signature moment lands harder *because* the budget page is still.

---

# 10. Technical Architecture Principles

| # | Principle | Rationale |
|---|---|---|
| 1 | **Mobile-first, genuinely** | The Decider path is a phone. Design mobile, enhance for desktop. |
| 2 | **PDF export is non-negotiable** | The RFP says submit **by email** with an itemized budget. A link alone does not satisfy it. The interactive proposal is the experience; **the PDF is the submission.** |
| 3 | **Self-contained** | No external dependencies. Must work on airport wifi and behind a corporate firewall. |
| 4 | **Content survives without JavaScript** | If motion fails, the argument still reads. |
| 5 | **Accessible by default** | Senior audience, variable eyesight, variable devices. Contrast, type size and reduced-motion support are requirements. |
| 6 | **Fast on a poor connection** | Optimise every image. A slow hero loses the Decider before the first word. |
| 7 | **One design system** | Shared type scale, palette, spacing and chart language throughout. |
| 8 | **Print stylesheet from day one** | Retrofitting print at the end never works. |

**Deliverable set for 10 August:**
1. Interactive proposal (hosted link)
2. PDF export of the full proposal
3. **Itemized budget as a separate document** — the RFP requests it explicitly and separately

---

## Decision Summary

### Decisions Made

| Decision | Reasoning |
|---|---|
| **Single-page chaptered scroll, not a multi-page site** | Preserves narrative momentum; reads well on the Decider's phone; avoids load transitions that break pace. |
| **Three-act structure: Diagnose → Design → Deliver** | Rhymes with Entlaq's own concept, demonstrating we internalised it, without appropriating their exact language. |
| **Three explicit reading paths for three reader types** | The Decider, Evaluator and Specialist read differently. One compromise path would serve none of them. |
| **"What We Found" placed at the end of Act I** | Our verified findings are the strongest competitive material we hold. Positioned as the pivot from credibility to ambition. |
| **The Signature Moment given its own chapter** | The RFP names the report launch as *the* headline. Folding it into a general creative section would under-weight it. |
| **The data-wall reveal animation (A1) is the single highest-priority build item** | It is the proposal demonstrating the capability it is arguing for. |
| **Maps use zone-based positioning with visible caveats** | SÍA's location is unpublished. False precision would be a fabrication and the Specialist would catch it. |
| **Seven sections designated deliberately static** | Budget, risk, compliance and team gain credibility from stillness. The contrast makes the animated sections land harder. |
| **PDF export treated as the submission, not a convenience** | The RFP requires email submission with an itemized budget. |
| **Content re-authored, not pasted, from the approved documents** | Strategy documents and persuasion documents have different jobs. |

### Decisions Deferred

| Deferred decision | Why |
|---|---|
| **Visual design language — palette, typography, art direction** | Requires the creative concept (§06), which does not yet exist |
| **Whether live-polling demo (A8) is built** | Depends on remaining time after P1 items |
| **Final section count** | May compress if content for the six RFP gaps arrives late |
| **Hosting and delivery mechanism** | Depends on Entlaq's email and firewall constraints |
| **Whether budget appears in-page or by reference only** | Commercial decision, not architectural |
| **Case study selection** | Requires review of available past work |

---

## Dependencies

**Ordered by urgency. Items 1–6 are on the critical path to 10 August.**

| # | Dependency | Owner | Blocks |
|---|---|---|---|
| 1 | **Creative concept and design direction** | Creative lead | §06, §07, and the entire visual language |
| 2 | **Itemized budget** | Commercial | §19 and a required separate deliverable |
| 3 | **Technical production plan and per-space equipment** | Technical lead | §14 |
| 4 | **Project team structure with named roles** | Leadership | §15 |
| 5 | **Production timeline and critical path** | Production lead | §16 |
| 6 | **Case studies with imagery** | Business development | §18 |
| 7 | Data-wall concept render (V2) | Creative | §07 — the proposal's key visual |
| 8 | Confirmed licensing for all imagery | Production | Legal risk on submission |
| 9 | Asset normalisation — `.jfif` conversion, folder naming | Build | All image delivery |
| 10 | Decision on hosting and PDF generation method | Build | Delivery |

---

## Open Client Questions

**Internal — for Entlaq (to be raised alongside the proposal or at site inspection):**

1. **Would Entlaq accept an interactive proposal link alongside the PDF**, or must the submission be entirely self-contained in email attachments?
2. **Is there a page or length expectation** for the proposal?
3. **Will the proposal be circulated to an evaluation panel**, and if so, is a scoring-friendly format preferred?
4. **Is the site inspection scheduled before or after the submission deadline?** This materially changes how much we can confirm versus flag as pending.

**Internal decisions required before build begins:**

5. **Do we submit findings like the Day 3 midday exposure and the ~200 non-gala guests in the proposal**, or hold them for the site inspection? *Recommendation: include them.* They are our strongest evidence of rigour, and framing them as "priorities we have already identified for the site visit" is more compelling than presenting them as problems.
6. **How much of the seven days is available for build** versus content creation for the six gaps?
7. **Who writes the six missing content sections**, and by when must they land to allow build and review?

---

*Blueprint only. No build has begun. Source documents: [02](02_destination.md), [03](03_accommodation.md), [04](04_hotels.md), [05](05_venue_strategy.md), [06](06_transportation_strategy.md), [07](07_guest_journey.md), [08](08_registration_strategy.md), [09](09_vip_experience.md), and the Entlaq SDR Summit 2026 RFP (July 2026).*
