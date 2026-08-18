"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const nav = [
  ["01", "Brief", "brief"],
  ["02", "Spatial Concept", "space"],
  ["03", "Technical", "technical"],
  ["04", "Interpretation", "interpretation"],
  ["05", "Guest Experience", "experience"],
  ["06", "TOR Coverage", "coverage"],
];

const tables = Array.from({ length: 14 }, (_, i) => i + 1);

function FloorPlan() {
  return (
    <div className="relative aspect-[1.58/1] min-h-[560px] overflow-hidden rounded-[28px] border border-cream-100/10 bg-[#0b1020] shadow-2xl">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(95,168,181,.12),transparent_48%),linear-gradient(180deg,#0d1428,#060912)]" />
      <div className="absolute inset-[3%] rounded-[20px] border border-cream-100/10 bg-[#11182a]">
        <div className="absolute left-[2%] top-[2%] h-[14%] w-[16%] rounded-lg border border-depth-300/40 bg-depth-900/60 p-3 text-[9px] uppercase tracking-[.16em] text-depth-100">
          Interpretation<br />Booth
        </div>
        <div className="absolute left-1/2 top-[2%] h-[14%] w-[27%] -translate-x-1/2 rounded-lg border border-depth-300/40 bg-depth-900/60 p-3 text-center text-[9px] uppercase tracking-[.16em] text-depth-100">
          Control Unit
          <div className="mt-3 flex justify-center gap-1">{Array.from({length:5}).map((_,i)=><span key={i} className="h-3 w-7 rounded-sm bg-cream-100/10" />)}</div>
        </div>
        <div className="absolute right-[2%] top-[2%] text-right font-mono text-[9px] uppercase tracking-[.16em] text-cream-500">Rear Technical Zone</div>

        {[0,1,2,3].map((i)=><div key={`ls${i}`} className="absolute left-[4%] h-12 w-3 rounded-full bg-gradient-to-b from-depth-100/80 to-depth-500/30" style={{top:`${23+i*19}%`}} />)}
        {[0,1,2,3].map((i)=><div key={`rs${i}`} className="absolute right-[4%] h-12 w-3 rounded-full bg-gradient-to-b from-depth-100/80 to-depth-500/30" style={{top:`${23+i*19}%`}} />)}

        <div className="absolute left-[8%] right-[8%] top-[20%] bottom-[31%]">
          <div className="grid grid-cols-5 gap-x-5 gap-y-7">
            {tables.map((n) => (
              <div key={n} className={`relative flex aspect-square items-center justify-center rounded-full border border-cream-100/20 bg-[#171d2d] ${n > 5 && n < 10 ? "translate-x-2" : ""}`}>
                <div className="h-[42%] w-[42%] rounded-full border border-signal-500/35 bg-signal-500/10" />
                <span className="absolute -top-3 text-[7px] font-mono text-cream-500">T{String(n).padStart(2,"0")}</span>
                {Array.from({length:5}).map((_,j)=><span key={j} className="absolute h-3 w-2 rounded-sm bg-cream-100/45" style={{transform:`rotate(${j*72}deg) translateY(-145%)`}} />)}
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-[20%] left-[18%] right-[18%] flex justify-center gap-1.5">
          {Array.from({length:10}).map((_,i)=><div key={i} className="h-10 w-8 rounded-t-[14px] border border-signal-400/30 bg-signal-400/10" />)}
        </div>
        <div className="absolute bottom-[15.5%] left-1/2 -translate-x-1/2 font-mono text-[8px] tracking-[.18em] text-signal-400">10 VIP ARMCHAIRS</div>
        <div className="absolute bottom-[13.5%] left-1/2 h-px w-[40%] -translate-x-1/2 bg-signal-500/30" />
        <div className="absolute bottom-[2.5%] left-[10%] right-[10%] h-[10%] rounded-lg border border-signal-500/40 bg-[#171a26]">
          <div className="absolute inset-x-[10%] top-[18%] h-[55%] rounded border border-signal-400/40 bg-gradient-to-r from-depth-700 via-depth-500 to-depth-700" />
          <div className="absolute inset-x-0 bottom-[10%] text-center font-mono text-[8px] tracking-[.18em] text-signal-400">STAGE 10 × 3 M · LED 8 × 3 M</div>
        </div>
        <div className="absolute bottom-[11%] left-[27%] h-7 w-10 rounded border border-cream-100/20 bg-cream-100/10" />
        <div className="absolute bottom-[11%] right-[27%] h-7 w-10 rounded border border-cream-100/20 bg-cream-100/10" />
        <div className="absolute bottom-[8.5%] left-[21%] text-[7px] uppercase tracking-[.14em] text-cream-500">Monitor L</div>
        <div className="absolute bottom-[8.5%] right-[21%] text-[7px] uppercase tracking-[.14em] text-cream-500">Monitor R</div>
        <div className="absolute bottom-[26%] left-1/2 -translate-x-1/2 text-[8px] font-mono text-cream-500">2.00 M CLEARANCE</div>
      </div>
      <div className="absolute bottom-5 left-6 flex items-center gap-3 text-[8px] uppercase tracking-[.18em] text-cream-500">
        <span className="h-1.5 w-1.5 rounded-full bg-depth-300" /> 8 column speakers · 4 L / 4 R
        <span className="ml-4 h-1.5 w-1.5 rounded-full bg-signal-500" /> 2 stage monitor speakers
      </div>
    </div>
  );
}

function Section({ id, num, title, kicker, children }: {id:string;num:string;title:string;kicker?:string;children:React.ReactNode}) {
  return <section id={id} className="relative border-t border-cream-100/[.07] px-6 py-28 md:px-12 lg:px-20 xl:px-24">
    <div className="mx-auto max-w-sect">
      <div className="mb-14 flex items-start gap-5">
        <span className="font-mono text-[10px] tracking-[.2em] text-signal-500">{num}</span>
        <div><h2 className="font-display text-display-lg text-cream-50">{title}</h2>{kicker&&<p className="mt-4 max-w-xl text-sm leading-7 text-cream-500">{kicker}</p>}</div>
      </div>{children}
    </div>
  </section>
}

export default function Page() {
  const reduce = useReducedMotion();
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({target:heroRef,offset:["start start","end start"]});
  const heroY = useTransform(scrollYProgress,[0,1],["0%","18%"]);
  const heroOpacity = useTransform(scrollYProgress,[0,.8],[1,0]);

  return <main className="min-h-screen bg-abyss text-cream-100">
    <aside className="fixed left-0 top-0 z-50 hidden h-screen w-[232px] flex-col border-r border-cream-100/[.07] bg-abyss/80 px-7 py-8 backdrop-blur-xl xl:flex">
      <div className="text-[9px] uppercase tracking-[.2em] text-cream-500">Paradigm</div>
      <div className="mt-2 font-display text-2xl text-cream-50">Technical<br/>Proposal</div>
      <div className="mt-8 h-px bg-cream-100/10" />
      <nav className="mt-8 space-y-4">{nav.map(([n,l,href])=><a key={href} href={`#${href}`} className="group flex gap-3 text-[11px] text-cream-500 transition hover:text-cream-50"><span className="font-mono text-signal-500/70">{n}</span><span>{l}</span></a>)}</nav>
      <div className="mt-auto border-t border-cream-100/10 pt-5 text-[9px] uppercase tracking-[.15em] leading-5 text-cream-500">TNFD Workshop<br/>08 September 2026<br/>New Cairo · Egypt</div>
    </aside>

    <section id="cover" ref={heroRef} className="relative flex min-h-[100svh] items-center overflow-hidden px-6 py-28 xl:pl-[300px] xl:pr-24">
      <motion.div style={{y:heroY}} className="absolute inset-0 -z-10"><div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_35%,rgba(46,119,135,.22),transparent_40%),linear-gradient(180deg,#070b18,#04060f)]"/><div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(245,242,234,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(245,242,234,.06)_1px,transparent_1px)] [background-size:80px_80px]"/><div className="absolute right-[8%] top-[16%] h-[55vw] w-[55vw] rounded-full border border-depth-300/10"/></motion.div>
      <motion.div style={{opacity:heroOpacity}} className="mx-auto w-full max-w-[1180px]">
        <motion.div initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{duration:1}} className="eyebrow text-depth-300">TNFD WORKSHOP · EVENT PRODUCTION & TECHNICAL DELIVERY</motion.div>
        <motion.h1 initial={{opacity:0,y:30,filter:"blur(12px)"}} animate={{opacity:1,y:0,filter:"blur(0)"}} transition={{duration:1.25,delay:.12}} className="mt-8 max-w-5xl font-display text-display-xl text-cream-50">TNFD<br/><span className="text-depth-100">Workshop</span></motion.h1>
        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.55,duration:1}} className="mt-8 flex items-center gap-4"><span className="h-px w-16 bg-signal-500"/><span className="font-display text-2xl text-signal-500">Technical & Spatial Proposal</span></motion.div>
        <motion.p initial={{opacity:0,y:15}} animate={{opacity:1,y:0}} transition={{delay:.72,duration:1}} className="mt-10 max-w-xl text-[15px] leading-7 text-cream-300/75">A premium workshop environment designed around clear sightlines, balanced technical coverage, executive comfort and a controlled interpretation workflow.</motion.p>
        <div className="mt-16 grid max-w-2xl grid-cols-2 gap-8 border-t border-cream-100/10 pt-7 md:grid-cols-4"><div><div className="font-display text-3xl text-signal-500">75</div><div className="mt-1 text-[10px] uppercase tracking-[.15em] text-cream-500">Participants</div></div><div><div className="font-display text-3xl text-signal-500">14</div><div className="mt-1 text-[10px] uppercase tracking-[.15em] text-cream-500">Round tables</div></div><div><div className="font-display text-3xl text-signal-500">10</div><div className="mt-1 text-[10px] uppercase tracking-[.15em] text-cream-500">VIP armchairs</div></div><div><div className="font-display text-3xl text-signal-500">8</div><div className="mt-1 text-[10px] uppercase tracking-[.15em] text-cream-500">Column speakers</div></div></div>
      </motion.div>
    </section>

    <Section id="brief" num="01" title="The Brief" kicker="The room is treated as one integrated production environment — not a collection of separate rental items.">
      <div className="grid gap-16 lg:grid-cols-[1.15fr_.85fr]"><div><p className="font-display text-display-sm leading-[1.2] text-cream-50">A focused, high-end workshop for 75 participants, running from 08:00 to 18:00 on 08 September 2026 in a 5-star private luxury hotel in New Cairo.</p><p className="mt-8 max-w-2xl text-[14px] leading-7 text-cream-300/70">The technical concept translates the requested stage, LED, professional sound, hybrid meeting, interpretation and VIP requirements into a single spatial language.</p></div><div className="grid gap-4"><div className="card p-6"><div className="eyebrow text-depth-300">Presentation</div><div className="mt-3 text-lg text-cream-50">10 × 3 m stage · 8 × 3 m LED</div></div><div className="card p-6"><div className="eyebrow text-depth-300">Seating</div><div className="mt-3 text-lg text-cream-50">14 round tables · 5 chairs each</div></div><div className="card p-6"><div className="eyebrow text-depth-300">VIP</div><div className="mt-3 text-lg text-cream-50">10 armchairs · 2 m stage clearance</div></div></div></div>
    </Section>

    <Section id="space" num="02" title="Spatial Concept" kicker="A clean conference composition: technical control at the rear, interpretation isolated to the left, delegates centered, VIPs separated from the working tables, and the stage kept visually dominant.">
      <FloorPlan />
      <div className="mt-10 grid gap-5 md:grid-cols-4"><div className="card p-5"><div className="font-mono text-xs text-signal-500">01</div><div className="mt-3 text-sm text-cream-50">5–4–5 table rhythm</div><p className="mt-2 text-xs leading-6 text-cream-500">Fourteen tables distributed in three visual bands.</p></div><div className="card p-5"><div className="font-mono text-xs text-signal-500">02</div><div className="mt-3 text-sm text-cream-50">VIP front row</div><p className="mt-2 text-xs leading-6 text-cream-500">Ten straight-line armchairs, kept clear of the stage.</p></div><div className="card p-5"><div className="font-mono text-xs text-signal-500">03</div><div className="mt-3 text-sm text-cream-50">Balanced audio</div><p className="mt-2 text-xs leading-6 text-cream-500">Eight columns: four left and four right.</p></div><div className="card p-5"><div className="font-mono text-xs text-signal-500">04</div><div className="mt-3 text-sm text-cream-50">Stage monitoring</div><p className="mt-2 text-xs leading-6 text-cream-500">Two monitor speakers directly in front of the VIP line.</p></div></div>
    </Section>

    <Section id="technical" num="03" title="Technical Production" kicker="Every technical element is positioned to preserve sightlines first, then coverage, then visual cleanliness.">
      <div className="grid gap-5 lg:grid-cols-2"><div className="card p-8"><div className="eyebrow text-signal-500">Audio</div><h3 className="mt-4 font-display text-4xl text-cream-50">8 Column Speakers</h3><p className="mt-5 text-sm leading-7 text-cream-300/70">Four columns on the left side and four on the right, distributed along the room to maintain balanced coverage without crowding the stage edge.</p><div className="mt-8 flex gap-2">{["L1","L2","L3","L4","R1","R2","R3","R4"].map(x=><span key={x} className="rounded-full border border-depth-300/30 px-3 py-1 text-[9px] font-mono text-depth-100">{x}</span>)}</div></div><div className="card p-8"><div className="eyebrow text-signal-500">Stage Monitoring</div><h3 className="mt-4 font-display text-4xl text-cream-50">2 Monitor Speakers</h3><p className="mt-5 text-sm leading-7 text-cream-300/70">Two stage monitors positioned directly in front of the VIP armchair line, at the locations marked in the final room concept.</p><div className="mt-8 grid grid-cols-2 gap-3"><div className="rounded-xl border border-cream-100/10 p-4 text-center font-mono text-xs text-cream-300">MONITOR L</div><div className="rounded-xl border border-cream-100/10 p-4 text-center font-mono text-xs text-cream-300">MONITOR R</div></div></div></div>
      <div className="mt-5 grid gap-5 md:grid-cols-3"><div className="card p-6"><div className="eyebrow text-depth-300">AV</div><div className="mt-3 text-xl text-cream-50">6 wireless microphones</div><p className="mt-2 text-xs leading-6 text-cream-500">Workshop-day RF microphone package.</p></div><div className="card p-6"><div className="eyebrow text-depth-300">Hybrid</div><div className="mt-3 text-xl text-cream-50">Zoom-ready system</div><p className="mt-2 text-xs leading-6 text-cream-500">Wires and equipment to accommodate the hybrid meeting.</p></div><div className="card p-6"><div className="eyebrow text-depth-300">Connectivity</div><div className="mt-3 text-xl text-cream-50">90 Mbps</div><p className="mt-2 text-xs leading-6 text-cream-500">High-speed internet connection requested in the TOR.</p></div></div>
    </Section>

    <Section id="interpretation" num="04" title="Interpretation & Control" kicker="The rear of the room becomes the operational brain: interpretation isolated, show control centralized, delegate experience kept clean.">
      <div className="grid gap-5 lg:grid-cols-[.9fr_1.1fr]"><div className="relative min-h-[360px] overflow-hidden rounded-2xl border border-cream-100/10 bg-[#0d1426] p-8"><div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-depth-500/10 blur-2xl"/><div className="eyebrow text-depth-300">Left rear</div><h3 className="mt-5 font-display text-5xl text-cream-50">Interpretation<br/>Booth</h3><p className="mt-6 max-w-sm text-sm leading-7 text-cream-300/70">Dedicated booth location for English ↔ Arabic simultaneous interpretation, visually separated from the participant zone.</p><div className="mt-10 font-mono text-xs tracking-[.15em] text-signal-500">75 WIRELESS HEADPHONES</div></div><div className="relative min-h-[360px] overflow-hidden rounded-2xl border border-cream-100/10 bg-[#0d1426] p-8"><div className="eyebrow text-depth-300">Rear center</div><h3 className="mt-5 font-display text-5xl text-cream-50">Control<br/>Unit</h3><p className="mt-6 max-w-sm text-sm leading-7 text-cream-300/70">Centralized show control for presentation playback, audio routing, stage monitoring and hybrid-meeting coordination.</p><div className="mt-10 flex gap-2">{["AUDIO","VIDEO","RF","ZOOM","SHOW"].map(x=><span key={x} className="rounded border border-cream-100/10 px-3 py-2 font-mono text-[8px] tracking-[.12em] text-cream-500">{x}</span>)}</div></div></div>
    </Section>

    <Section id="experience" num="05" title="Guest Experience" kicker="The technical setup stays invisible wherever possible. What guests feel is clarity: arrival, comfort, sightline, sound and uninterrupted access to the programme.">
      <div className="grid gap-px overflow-hidden rounded-2xl border border-cream-100/10 bg-cream-100/10 md:grid-cols-2"><div className="bg-[#0a1020] p-8 md:p-10"><div className="font-mono text-xs text-signal-500">01 · ARRIVAL</div><h3 className="mt-5 font-display text-4xl text-cream-50">Registration without friction.</h3><p className="mt-4 text-sm leading-7 text-cream-500">Registration table, wireless printer and branded participant materials are positioned outside the main spatial composition.</p></div><div className="bg-[#0a1020] p-8 md:p-10"><div className="font-mono text-xs text-signal-500">02 · VIP</div><h3 className="mt-5 font-display text-4xl text-cream-50">A deliberate front row.</h3><p className="mt-4 text-sm leading-7 text-cream-500">Ten high-quality armchairs form a straight VIP line with a minimum 2 m clearance from the stage.</p></div><div className="bg-[#0a1020] p-8 md:p-10"><div className="font-mono text-xs text-signal-500">03 · HOSPITALITY</div><h3 className="mt-5 font-display text-4xl text-cream-50">Hospitality stays continuous.</h3><p className="mt-4 text-sm leading-7 text-cream-500">Two coffee breaks, buffet lunch and continuous tea, coffee, juice, water and soft drinks are covered in the requested scope.</p></div><div className="bg-[#0a1020] p-8 md:p-10"><div className="font-mono text-xs text-signal-500">04 · BRAND</div><h3 className="mt-5 font-display text-4xl text-cream-50">One visual language.</h3><p className="mt-4 text-sm leading-7 text-cream-500">LED background, bilingual A4 flyers, standing banner and branded participant items are integrated into the experience.</p></div></div>
    </Section>

    <Section id="coverage" num="06" title="TOR Coverage" kicker="A concise compliance view of the requirements represented in this technical concept.">
      <div className="overflow-hidden rounded-2xl border border-cream-100/10"><div className="grid grid-cols-[1fr_auto] border-b border-cream-100/10 bg-cream-100/[.03] px-6 py-4 text-[9px] uppercase tracking-[.18em] text-cream-500"><span>Requirement</span><span>Covered</span></div>{[["Event hall · 75 participants · New Cairo","YES"],["Stage + podium + display + microphone","YES"],["LED presentation screen","YES"],["Professional sound system","YES"],["6 wireless microphones","YES"],["90 Mbps internet","YES"],["Hybrid / Zoom equipment","YES"],["Interpretation EN ↔ AR","YES"],["75 wireless interpretation headphones","YES"],["10 VIP armchairs","YES"],["VIP reception + lunch","YES"],["Two coffee breaks + buffet lunch","YES"],["85 laptop sleeves / notebooks / pens","YES"],["25 security staff lunch boxes","YES"]].map(([a,b])=><div key={a} className="grid grid-cols-[1fr_auto] items-center border-b border-cream-100/[.06] px-6 py-4 last:border-0"><span className="text-sm text-cream-300/80">{a}</span><span className="font-mono text-[9px] tracking-[.15em] text-signal-500">{b}</span></div>)}</div>
      <div className="mt-14 border-t border-cream-100/10 pt-8 text-xs leading-6 text-cream-500">Technical quantities and spatial positions shown above are the proposed event concept developed from the provided TOR and the approved room layout direction. Commercial pricing remains separate.</div>
    </Section>

    <footer className="border-t border-cream-100/10 px-6 py-20 xl:pl-[300px] xl:pr-24"><div className="mx-auto flex max-w-[1180px] flex-col gap-10 md:flex-row md:items-end md:justify-between"><div><div className="eyebrow text-depth-300">Prepared by Paradigm</div><div className="mt-5 font-display text-4xl text-cream-50">TNFD Workshop</div><div className="mt-3 text-sm text-cream-500">08 September 2026 · New Cairo, Egypt</div></div><div className="text-left md:text-right"><div className="text-xs text-cream-500">Mohamed Akram</div><div className="mt-1 text-xs text-cream-500">mohamed.akram@paradigm-eg.com</div><div className="mt-1 text-xs text-cream-500">01147400199 · 01080034172</div></div></div></footer>
  </main>;
}
