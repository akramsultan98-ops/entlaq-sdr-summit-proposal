# Proposal imagery

Narrative imagery used inside the proposal chapters. (Creative *reference*
imagery lives in [`public/reference/`](../reference/) instead.)

## Main stage concept — action required

Chapter 08 (Visual Concepts) § 02-A presents the main stage concept render —
the only place it appears. Save it here as:

```
public/media/main-stage-concept.png
```

`.jpg`, `.jpeg`, `.webp` and `.jfif` also work — **only the stem is matched**,
so the extension does not matter. No code change is needed; the render appears
on the next build.

Until it is present, the section renders in full with a single muted line where
the visual sits — never a broken image or an empty placeholder.

The render is displayed with `object-fit: contain` inside a clamped frame, so
the complete composition always shows: no cropping, no distortion. It is
labelled **Proposed Concept** and carries the concept note beneath it, so it
never reads as an approved construction drawing.

## Other files

`sia.jpg` · `concept-design.jpg` · `gala.jpg` · `gala-2.jpg` · `yoga.jpg`
· `casa-cook.jpg` · `migumi.jpg` · `villa-coconut.jpg`

Used for the cover background and as fallbacks in Experience Design until
concept references are supplied.
