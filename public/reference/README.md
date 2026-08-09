# Reference imagery drop point

Drop images into the folders below. **Filenames are not fixed** — every folder
is read off disk at build time, so any name and any web format works
(`.jpg`, `.jpeg`, `.jfif`, `.png`, `.webp`). Images become clickable into the
fullscreen lightbox automatically.

A folder with no images renders nothing at all — never a broken image and never
an empty placeholder.

---

## `experience/`

Concept references for chapter 04, Experience Design. Each file is routed to a
block by keyword, so a name like `roundtable.jfif` reaches Executive
Discussions without an exact match. Landscape crops sit best.

## `giveaways/`

One hero image per kit — the complete branded mockup, not individual items.
Feeds the Participant Welcome Kit in chapter 08.

---

Kit contents lists are matched by keyword in
[`content/library.ts`](../../content/library.ts).

The main stage concept render is **not** reference imagery — it lives in
[`public/media/`](../media/).
