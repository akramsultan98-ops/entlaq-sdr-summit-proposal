# Experience Concepts — reference imagery

Drop concept references here. **Only the filename stem matters** — extension and
casing are ignored, so `main-stage.jfif`, `Main-Stage.png` and `main_stage.webp`
all resolve to the same block.

Supported: `.jpg` · `.jpeg` · `.jfif` · `.png` · `.webp`

Landscape 16:9 crops sit best — these render as large cinematic plates.

| Block | Slugs |
|---|---|
| Registration Experience | `arrival-registration` |
| Executive Discussions | `roundtable-session`, `executive-meeting` |
| Networking Experience | `networking-lounge`, `coffee-break` |
| Evening Experience | `gala-dinner`, `live-saxophone`, `live-band`, `dj-lounge` |
| Closing Experience | `closing-ceremony`, `group-photo` |

The **first** slug found for a block becomes the large hero plate; any others
render beneath it in a two-column supporting row.

Until a block has at least one reference, it falls back to an existing project
image so the chapter never looks unfinished. Drop a file in and it takes over
automatically — no code change.

To change slugs, titles or highlights, edit the `experiences` array in
[`content/proposal.ts`](../../../content/proposal.ts).
