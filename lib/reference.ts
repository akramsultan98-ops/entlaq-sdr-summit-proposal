import fs from "node:fs";
import path from "node:path";
import { imageSize } from "image-size";

/**
 * Reads reference imagery straight off disk at build time.
 *
 * WHY NOT A FILENAME LIST: the previous implementation expected specific
 * names (`welcome-kit.jpg` …) and probed for them from the browser. Any real
 * file — "ENTLAQ Welcome Kit.png" — missed on every count: different stem,
 * spaces, different extension. The directory is the source of truth.
 *
 * Server-only. Called from the page (a Server Component), so the gallery is
 * present in the prerendered HTML — which also means it prints.
 */

const EXTENSIONS = new Set([".jpg", ".jpeg", ".jfif", ".png", ".webp"]);

export interface RefFile {
  file: string;
  src: string;
  title: string;
  /** Intrinsic pixels — lets the card take the image's own ratio, never a crop. */
  width: number;
  height: number;
}

/** Fallback used only if a header cannot be parsed. */
const DEFAULT_RATIO = { width: 1600, height: 1000 };

/**
 * Reads intrinsic dimensions at build time so images can be laid out at their
 * true aspect ratio — no fixed card ratio, therefore no cropping, and the
 * space is still reserved so nothing shifts on load.
 */
export function measure(publicPath: string): { width: number; height: number } {
  try {
    const abs = path.join(process.cwd(), "public", decodeURIComponent(publicPath).replace(/^\//, ""));
    const { width, height } = imageSize(fs.readFileSync(abs));
    return width && height ? { width, height } : DEFAULT_RATIO;
  } catch {
    return DEFAULT_RATIO;
  }
}

/** "main-stage.jpg" → "Main Stage"; "ENTLAQ Welcome Kit.png" → unchanged. */
function titleFromFile(file: string): string {
  const base = file
    .replace(/\.[^.]+$/, "")
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  // Title-case slugs only — never restyle a name the user capitalised.
  return base === base.toLowerCase()
    ? base.replace(/\b\w/g, (c) => c.toUpperCase())
    : base;
}

/** Generic words that carry no routing signal. */
const STOPWORDS = new Set([
  "experience", "concept", "concepts", "reference", "inspiration",
  "image", "img", "final", "the", "and", "of", "a", "for", "with",
]);

const tokenise = (s: string) =>
  s
    .toLowerCase()
    .replace(/\.[^.]+$/, "")
    .split(/[^a-z0-9]+/)
    .filter((t) => t.length > 1 && !STOPWORDS.has(t));

/**
 * Routes every image in a folder to the block it belongs to.
 *
 * Filenames are never assumed. Real folders do not match a spec exactly —
 * "roundtable.jfif" is offered for a block whose slug is "roundtable-session",
 * and "delegate-badges.png" matches no slug at all. Strict equality would
 * silently discard those, so scoring is by shared keywords drawn from each
 * block's slugs, title and highlights. Highest score wins; ties break toward
 * the earlier block. An image matching nothing is left out rather than guessed.
 */
export function routeReferences<T extends { key: string; keywords: string[]; slugs: string[] }>(
  folder: string,
  blocks: T[]
): Record<string, RefFile[]> {
  const all = listReference(folder);
  const out: Record<string, RefFile[]> = Object.fromEntries(blocks.map((b) => [b.key, []]));

  const scored = blocks.map((b) => ({
    key: b.key,
    slugs: b.slugs.map((s) => s.toLowerCase().replace(/[^a-z0-9]/g, "")),
    tokens: new Set(b.keywords.flatMap(tokenise)),
  }));

  for (const file of all) {
    const stem = file.file.replace(/\.[^.]+$/, "");
    const flat = stem.toLowerCase().replace(/[^a-z0-9]/g, "");
    const tokens = tokenise(stem);

    let best: { key: string; score: number; slugRank: number } | null = null;

    scored.forEach((b) => {
      // exact / prefix slug agreement is the strongest signal
      const slugRank = b.slugs.findIndex((s) => s === flat || s.startsWith(flat) || flat.startsWith(s));
      const overlap = tokens.filter((t) => b.tokens.has(t)).length;
      const score = (slugRank >= 0 ? 100 - slugRank : 0) + overlap;

      if (score > 0 && (!best || score > best.score)) {
        best = { key: b.key, score, slugRank: slugRank >= 0 ? slugRank : 99 };
      }
    });

    if (best) out[(best as { key: string }).key].push(file);
  }

  // within a block, declared slug order first
  blocks.forEach((b) => {
    const rank = (f: RefFile) => {
      const flat = f.file.replace(/\.[^.]+$/, "").toLowerCase().replace(/[^a-z0-9]/g, "");
      const i = b.slugs.findIndex(
        (s) => s.toLowerCase().replace(/[^a-z0-9]/g, "") === flat
      );
      return i >= 0 ? i : 50;
    };
    out[b.key].sort((x, y) => rank(x) - rank(y) || x.file.localeCompare(y.file));
  });

  return out;
}

/**
 * Finds a file in /public/media by stem, whatever its extension.
 * Lets a render be dropped in as .png, .jpg or .webp without a code change.
 */
export function findMedia(stem: string): RefFile | null {
  const dir = path.join(process.cwd(), "public", "media");
  const want = stem.toLowerCase().replace(/[^a-z0-9]/g, "");

  let names: string[];
  try {
    names = fs.readdirSync(dir);
  } catch {
    return null;
  }

  const file = names.find((n) => {
    if (!EXTENSIONS.has(path.extname(n).toLowerCase())) return false;
    return n.replace(/\.[^.]+$/, "").toLowerCase().replace(/[^a-z0-9]/g, "") === want;
  });
  if (!file) return null;

  const src = `/media/${encodeURIComponent(file)}`;
  return { file, src, title: titleFromFile(file), ...measure(src) };
}

export function listReference(folder: string): RefFile[] {
  const dir = path.join(process.cwd(), "public", "reference", folder);

  let names: string[];
  try {
    names = fs.readdirSync(dir);
  } catch {
    return []; // folder absent — an empty gallery, not an error
  }

  return names
    .filter((n) => EXTENSIONS.has(path.extname(n).toLowerCase()))
    .sort((a, b) => a.localeCompare(b, "en"))
    .map((file) => {
      const src = `/reference/${folder}/${encodeURIComponent(file)}`;
      return { file, src, title: titleFromFile(file), ...measure(src) };
    });
}
