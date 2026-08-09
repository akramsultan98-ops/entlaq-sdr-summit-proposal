import { Rail } from "@/components/chrome/Rail";
import { Cover, ExecutiveSummary, EventJourney } from "@/components/sections/Opening";
import {
  VenueChapter, ExperienceDesign, TechnicalProduction, Timeline, type Shot,
} from "@/components/sections/Body";
import { Budget } from "@/components/sections/Budget";
import { CreativeLibrary } from "@/components/sections/Library";
import { Contact } from "@/components/sections/Contact";
import { listReference, routeReferences, measure, findMedia } from "@/lib/reference";
import { REFERENCE_FOLDERS } from "@/content/library";
import { experiences, mainStage } from "@/content/proposal";

export default function Page() {
  // Server Component — reference imagery is read off disk at build time, so
  // filenames are never assumed, intrinsic ratios are known, and the galleries
  // prerender (which also means they print).
  const kits = listReference(REFERENCE_FOLDERS.kits);

  // Every image in /public/reference/experience is routed to a block by
  // keyword — slugs guide it, they do not gate it.
  const routed = routeReferences(
    REFERENCE_FOLDERS.experience,
    experiences.map((e) => ({
      key: e.t,
      slugs: e.refs,
      keywords: [e.t, ...e.refs, ...e.highlights.map((h) => h.t)],
    }))
  );

  // Resolve each block to measured shots; fall back to an existing project
  // asset so a block without a reference still reads as a concept, not a gap.
  const experienceShots: Record<string, Shot[]> = Object.fromEntries(
    experiences.map((e) => {
      const found = routed[e.t] ?? [];
      return [
        e.t,
        found.length
          ? found.map((f) => ({ src: f.src, alt: f.title, width: f.width, height: f.height }))
          : [{ src: e.fallback, alt: e.t, ...measure(e.fallback) }],
      ];
    })
  );

  // Main stage render — resolved by stem, any extension. Presented once only,
  // in chapter 08 (Visual Concepts); chapter 05 carries the costed scope.
  const sr = findMedia(mainStage.imageStem);
  const stage: Shot | null = sr
    ? { src: sr.src, alt: mainStage.title, width: sr.width, height: sr.height }
    : null;

  return (
    <>
      <Rail />

      <main className="pt-14 xl:pl-[var(--rail)] xl:pt-0">
        <Cover />
        <ExecutiveSummary />
        <EventJourney />
        <VenueChapter />
        <ExperienceDesign shots={experienceShots} />
        <TechnicalProduction />
        <Timeline />
        <Budget />
        <CreativeLibrary kits={kits} stage={stage} />
        <Contact />
      </main>
    </>
  );
}
