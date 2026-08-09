# Technical Production Plan

**RFP reference:** §4.2 Stage, set & scenic · §4.3 Technical production — AV, lighting & sound · §4.6 Production management · §5.2 Technical production plan and equipment for each space

---

# 1. Technical Approach

## 1.1 Governing conditions

Four conditions from the approved documents drive every technical decision:

| # | Condition | Technical consequence |
|---|---|---|
| 1 | **SIA is an outdoor venue** *(External Research, [05](05_venue_strategy.md))* | Wind loading governs all rigging and LED; weather contingency required; no permanent infrastructure assumed |
| 2 | **Specialist equipment mobilises from Cairo** *(~450 km, [02](02_destination.md))* | Long-lead ordering; freight scheduling on the critical path; on-site spares rather than resupply |
| 3 | **Eight venue zones** *([05](05_venue_strategy.md))* | Multiple parallel load-ins; distributed crew; no single technical base |
| 4 | **AV required in every breakout room** *(RFP §4.3)* | Room count multiplies technical scope — the largest hidden cost in the brief |

## 1.2 Design principles

1. **Build once, use three times.** The SIA main stage serves Day 1 evening, Day 2 evening and the Day 3 midday close. It is designed as a persistent build, not three installations.
2. **Redundancy on anything that cannot fail.** The data-wall, main-stage audio, show control and the app data feed each carry a backup path.
3. **Graceful degradation.** Every interactive element must have a non-interactive fallback — consistent with [08_registration_strategy.md](08_registration_strategy.md).
4. **Assume nothing on site.** Power, rigging points and network are treated as absent until the site inspection proves otherwise.
5. **Silence the infrastructure.** Generators, distro and crew paths sit outside all guest sightlines and earshot.

---

# 2. Equipment Plan by Space

> All quantities are **indicative and subject to site inspection**. Final specification depends on venue confirmation, measured dimensions and verified power provision.

## 2.1 Main Stage — SIA

**Function:** Day 1 report launch · Day 2 sector evening · Day 3 midday close · ~500 guests

| System | Indicative provision |
|---|---|
| **LED / data-wall** | Primary large-format LED array, high-brightness outdoor-rated. **Nit specification driven by the Day 3 midday session** — see §3.1. Redundant processing, dual media servers in failover |
| **Video** | Media server ×2 (main + backup), presentation switcher, comfort/confidence monitors, PPU and camera package for IMAG and record |
| **Audio** | Line-array L/R with delay positions for outdoor coverage, subs, front-fill for VVIP forward block, digital console + backup, RF package for handhelds/lavaliers with coordinated frequencies, comms |
| **Lighting** | Front wash for camera, key lighting for stage positions, effect/atmospheric fixtures for the Depth Gradient, lighting console + backup, dimming and distro |
| **Rigging / structure** | Ground-support or truss structure engineered for **outdoor wind loading**; LED structural frame; weather protection for control positions |
| **Power** | Generator provision with redundancy; distro across stage, LED, audio, lighting and control; UPS on show-critical systems |
| **Show control** | Show caller position, cue system, timecode where required |
| **Data integration** | Live feed from the Entlaq app into the wall — polling ingest, rendering pipeline, **manual override path** |

## 2.2 Roundtable Venue — campus *(TU Berlin El Gouna or equivalent)*

**Function:** Day 2 morning sector roundtables · up to ten sectors

*Existing provision noted in [05](05_venue_strategy.md): auditorium with projection/audio/video and interpreter system; six halls (AV in five); independent climate control throughout.*

| System | Indicative provision |
|---|---|
| **Per room** | Display or projection, room audio, radio mic ×2, laptop input, presentation control |
| **Recording** | Capture per room where content is to be retained — **[CLIENT INPUT REQUIRED]** |
| **Gap provision** | AV package for the sixth hall and any additional/overflow rooms |
| **Support** | Roaming technician coverage; per-room comms |
| **Interpretation** | Auditorium system exists; **requirement to be confirmed** |

**Critical dependency:** the ten-sectors-against-six-halls question in [05](05_venue_strategy.md) determines room count and therefore total AV scope.

## 2.3 Workshop Rooms *(Day 3)*

Shared room stock with the roundtable venue, reconfigured. Display, audio, mic and presentation control per room, plus materials and flipchart provision for hands-on formats.

## 2.4 Matchmaking Area

Ambient audio and acoustic management between meeting points; power and data per position; discreet lighting; app-linked display for scheduling. **Position count depends on app matchmaking volume — [CLIENT INPUT REQUIRED].**

## 2.5 VIP Lounge & VVIP Concierge Zone

Ambient audio and lighting; a discreet main-stage relay feed so senior guests can follow the programme without being in the room; power and connectivity. **VVIP zone: minimal visible technology by design.**

## 2.6 Registration & Welcome

Power and network for accreditation and app-onboarding stations; badge production on site for exceptions; digital signage; ambient audio and lighting. **Must operate across the full staggered arrival window.**

## 2.7 Gala Dinner *(candidate: Villa Coconut or Megumi)*

| System | Indicative provision |
|---|---|
| **Audio** | Distributed system for a standing/lounge footprint; DJ/live-music provision; speech reinforcement for opening and closing addresses; RF handhelds |
| **Lighting** | Atmospheric lighting design; VVIP-area treatment; staging key light |
| **Staging** | Compact address platform with sightlines across the space |
| **Video** | Screen or LED for content moments — **scope to be confirmed** |
| **Power** | Venue supply assessment; generator support if required |

## 2.8 Marina Dinner

Distributed ambient audio across a linear open footprint; festoon and feature lighting; power distribution along the promenade; **weather-rated equipment throughout** — wind exposure per [05](05_venue_strategy.md).

## 2.9 Wellness Activation *(sunrise beach)*

Minimal by design. Discreet portable audio, battery-powered (no site power assumed). **Pre-dawn setup in darkness — crew lighting and access required.** Strike immediately after.

## 2.10 Break & Activation Zones

Ambient audio and lighting; power for activations; digital signage. Provision at both the SIA and campus clusters.

## 2.11 Production Compound

Distributed across venue clusters. Equipment staging and secure storage, crew welfare with shade and cooling, site office, power and comms base. **Out of all guest sightlines.**

---

# 3. Critical Technical Risks

## 3.1 Day 3 midday close — LED performance in daylight

The Day 3 close is the only main-stage session outside evening hours. Standard indoor-grade LED will not perform in direct daylight.

**This is the subject of a Site Inspection Priority assessment in [05_venue_strategy.md](05_venue_strategy.md), covering guest comfort, heat exposure, shade availability, LED visibility in daylight, technical production feasibility and audience experience.** Technical planning holds two provisions pending that outcome:

- **Provision A:** high-brightness outdoor-rated LED specified for daylight legibility across all seating
- **Provision B:** shade structure over the audience and screen, changing both the visibility and comfort calculation

**No specification is locked until the assessment is complete.** Both provisions carry cost and lead-time implications and are treated as a decision point on the critical path.

## 3.2 Wind loading

An outdoor large-format LED array is the highest-risk structure on the project. Requires structural engineering sign-off, a defined wind-speed action threshold, and a documented strike procedure.

## 3.3 The app data feed

The signature moment depends on an integration the agency does not control. **Requires early technical liaison with Entlaq, a defined API or data contract, rehearsal against live data, and a manual override path** so the reveal proceeds if the feed fails.

## 3.4 Power

No venue's power provision is verified. Assumption: generator provision at SIA, the marina and the beach until proven otherwise.

---

# 4. Rehearsal & Delivery

| Stage | Requirement |
|---|---|
| **Pre-production** | Technical drawings, load calculations, power plans, rigging plots, signal flow per space |
| **Load-in** | Sequenced by venue cluster; overnight and outside guest windows per [06](06_transportation_strategy.md) |
| **Technical rehearsal** | Full main-stage rehearsal with content and the live app feed |
| **Signature moment rehearsal** | Dedicated — rehearsed against real polling data, not a simulation |
| **Speaker rehearsals** | Per [05](05_venue_strategy.md) speaker ready room provision |
| **Final walkthrough** | All venues, all zones, with Entlaq — RFP §4.6 requirement |
| **Show delivery** | Show caller, per-venue technical leads, roaming support, comms across all zones |
| **Load-out** | Sequenced post-event; crew accommodation extends beyond event dates per [03](03_accommodation.md) |

---

## Decision Summary

**Decisions Made**

| Decision | Reasoning |
|---|---|
| **SIA main stage built once, used three times** | Persistent build serving Days 1, 2 and 3 removes two full installations |
| **Redundancy on data-wall, main audio, show control and app feed** | These four cannot fail; everything else can be recovered |
| **Every interactive element carries a non-interactive fallback** | Protects the signature moment against app or network failure |
| **All venue infrastructure assumed absent until inspection proves otherwise** | Prevents specification built on unverified assumption |
| **Two LED provisions held pending the Day 3 site assessment** | Specification cannot be responsibly locked before the assessment |
| **Wind loading treated as the governing structural constraint** | Outdoor LED is the highest-risk structure on the project |
| **Dedicated rehearsal for the signature moment against live data** | Rehearsing a simulation does not test the integration that matters |

**Decisions Deferred**

| Deferred | Why |
|---|---|
| Final LED specification and nit rating | Depends on the Day 3 site inspection assessment |
| Room count and total breakout AV scope | Depends on the ten-sectors / six-halls resolution |
| Generator sizing per venue | Requires verified venue power provision |
| Gala technical scope | Venue not selected; capacities unverified |
| Recording and content capture scope | **[CLIENT INPUT REQUIRED]** |
| Interpretation requirement | **[CLIENT INPUT REQUIRED]** |

## Dependencies

| # | Required | Blocks |
|---|---|---|
| 1 | Site inspection — all venues, power, rigging, access | Full technical specification |
| 2 | Day 3 midday assessment outcome | LED specification and shade provision |
| 3 | **[CLIENT INPUT REQUIRED]** App data-feed specification and API access | Signature moment integration |
| 4 | Roundtable room count confirmation | Breakout AV scope |
| 5 | Gala venue selection | Gala technical package |
| 6 | **[CLIENT INPUT REQUIRED]** SDR content and data-wall material | Content production |
| 7 | Equipment freight schedule from Cairo | Load-in sequencing |
| 8 | **[CLIENT INPUT REQUIRED]** Recording, streaming and interpretation requirements | Scope and cost |

## Open Client Questions

1. What is the app's data-feed specification, and who is our technical counterpart at Entlaq?
2. Is content recording, streaming or broadcast required — and for which sessions?
3. Is simultaneous interpretation required?
4. Who provides main-stage content — presentation decks, video, SDR data visuals?
5. Are there existing AV supplier relationships in El Gouna that Entlaq expects us to use?
6. What is the expected matchmaking volume, which determines position count and power/data provision?
7. Does Entlaq require content capture for post-event distribution via the app?
