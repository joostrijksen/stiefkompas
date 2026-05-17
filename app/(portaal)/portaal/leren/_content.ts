// app/(portaal)/portaal/leren/_content.ts

import fs from "fs";
import path from "path";

/* =============================
   Course config
============================= */

export const COURSE_VERSION = "v1.1";

export const COURSE_MODULES = [
  { slug: "module-1", title: "Module 1 — Basis van de methodiek", kind: "module" },
  { slug: "module-2", title: "Module 2 — Toepassing in de praktijk", kind: "module" },
  { slug: "certificering", title: "Toetsing & certificering", kind: "certificering" },
] as const;

export type CourseModuleSlug = (typeof COURSE_MODULES)[number]["slug"];
export type CourseModuleKind = (typeof COURSE_MODULES)[number]["kind"];

export const isCertificationModule = (slug: string) => slug === "certificering";

/* =============================
   Sections (optioneel/legacy)
============================= */

export type LessonSectionKind =
  | "intro"
  | "doelen"
  | "kern"
  | "verdieping"
  | "praktijk"
  | "reflectie"
  | "opdrachten"
  | "lescheck";

export const SECTION_ORDER: LessonSectionKind[] = [
  "intro",
  "doelen",
  "kern",
  "verdieping",
  "praktijk",
  "reflectie",
  "opdrachten",
  "lescheck",
];

export const SECTION_TITLES: Record<LessonSectionKind, string> = {
  intro: "Introvideo",
  doelen: "Wat ga je leren",
  kern: "Kern",
  verdieping: "Verdieping",
  praktijk: "Praktijk & casuïstiek",
  reflectie: "Reflectie",
  opdrachten: "Opdrachten",
  lescheck: "Lescheck",
};

export type Assignment = {
  id: string;
  title: string;
  prompt: string;
  placeholder?: string;
};

export type LessonVideo = {
  provider: "youtube" | "vimeo" | "url";
  src: string;
  title?: string;
};

export type QuizQuestion =
  | {
      id: string;
      type: "mc";
      question: string;
      options: string[];
      correctIndex?: number;
      explanation?: string;
    }
  | {
      id: string;
      type: "open";
      question: string;
      placeholder?: string;
      guidance?: string;
    };

export type LessonQuiz = {
  title?: string;
  passingScore?: number;
  questions: QuizQuestion[];
};

/* =============================
   Types
============================= */

export type BlockStatus = "locked" | "todo" | "done";

export type LearningTree = {
  moduleSlug: string;
  moduleTitle: string;
  chapters: {
    chapterSlug: string;
    title: string;
    order?: number;
    blocks: {
      blockSlug: string;
      title: string;
      order?: number;
      href: string;
      status?: BlockStatus;
    }[];
  }[];
};

export type PrevNext = { href: string; title: string } | null;

export type BlockData = {
  moduleSlug: string;
  moduleTitle: string;
  chapterSlug: string;
  chapterTitle: string;
  blockSlug: string;
  blockTitle: string;
  blockNumber?: number;
  href: string;
  contentMdx: string; // ✅ dit gaan we gebruiken voor <Mdx />
  prev: PrevNext;
  next: PrevNext;
};

/* =============================
   FS helpers
============================= */

const ROOT = path.join(process.cwd(), "content", COURSE_VERSION);

function exists(p: string) {
  try {
    fs.accessSync(p);
    return true;
  } catch {
    return false;
  }
}

function listDirs(p: string) {
  if (!exists(p)) return [];
  return fs
    .readdirSync(p, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name);
}

function listFiles(p: string) {
  if (!exists(p)) return [];
  return fs
    .readdirSync(p, { withFileTypes: true })
    .filter((f) => f.isFile())
    .map((f) => f.name);
}

function humanizeSlug(slug: string) {
  return slug.replace(/-/g, " ").replace(/\b\w/g, (m) => m.toUpperCase());
}

function safeJsonRead<T = any>(absPath: string): T | null {
  try {
    const raw = fs.readFileSync(absPath, "utf8");
    return JSON.parse(raw) as T;
  } catch {
    return null;
  }
}

/**
 * Pak een nummerprefix uit een slug/bestandsnaam:
 *  - "1-1-welkom..." => 1001
 *  - "10-2-..."      => 10002
 *  - "hoofdstuk-12-..." => 12 (via hoofdstuk-<n>-)
 */
function orderFromSlug(slug: string): number | null {
  // hoofdstuk-12-...
  const hm = slug.match(/^hoofdstuk-(\d+)-/i);
  if (hm) return Number(hm[1]);

  // 10-2-... of 1-1-...
  const m = slug.match(/^(\d+)-(\d+)-/);
  if (m) return Number(m[1]) * 1000 + Number(m[2]);

  // c1-... (certificering)
  const cm = slug.match(/^c(\d+)-/i);
  if (cm) return Number(cm[1]);

  return null;
}

/* =============================
   Meta readers
============================= */

type ChapterMeta = {
  title?: string;
  order?: number;
};

type BlockMeta = {
  title?: string;
  order?: number;
};

function getModuleTitle(moduleSlug: string) {
  return (
    COURSE_MODULES.find((m) => m.slug === moduleSlug)?.title ??
    humanizeSlug(moduleSlug)
  );
}

function readChapterMeta(moduleSlug: string, chapterSlug: string): ChapterMeta {
  const p = path.join(ROOT, moduleSlug, chapterSlug, "chapter.meta.json");
  const meta = safeJsonRead<ChapterMeta>(p);
  return {
    title: meta?.title,
    order: typeof meta?.order === "number" ? meta.order : orderFromSlug(chapterSlug) ?? undefined,
  };
}

/**
 * Voor blocks bij jou: <block>.mdx en <block>.meta.json in dezelfde chapter map.
 * (ook support voor content.mdx binnen block directory)
 */
function resolveBlockContentPath(moduleSlug: string, chapterSlug: string, blockSlug: string) {
  const chapterPath = path.join(ROOT, moduleSlug, chapterSlug);

  // 1) file block: <block>.mdx / <block>.md
  for (const ext of ["mdx", "md"] as const) {
    const fp = path.join(chapterPath, `${blockSlug}.${ext}`);
    if (exists(fp)) return fp;
  }

  // 2) dir block: <block>/content.mdx etc
  const blockDir = path.join(chapterPath, blockSlug);
  for (const f of ["content.mdx", "content.md", "index.mdx", "index.md", "page.mdx", "page.md"]) {
    const fp = path.join(blockDir, f);
    if (exists(fp)) return fp;
  }

  return null;
}

function resolveBlockMetaPath(moduleSlug: string, chapterSlug: string, blockSlug: string) {
  const chapterPath = path.join(ROOT, moduleSlug, chapterSlug);

  // 1) file meta: <block>.meta.json
  const metaFile = path.join(chapterPath, `${blockSlug}.meta.json`);
  if (exists(metaFile)) return metaFile;

  // 2) dir meta: <block>/meta.json (fallback)
  const metaDir = path.join(chapterPath, blockSlug, "meta.json");
  if (exists(metaDir)) return metaDir;

  return null;
}

function readBlockMeta(moduleSlug: string, chapterSlug: string, blockSlug: string): BlockMeta {
  const mp = resolveBlockMetaPath(moduleSlug, chapterSlug, blockSlug);
  const meta = mp ? safeJsonRead<BlockMeta>(mp) : null;

  return {
    title: meta?.title,
    order:
      typeof meta?.order === "number"
        ? meta.order
        : orderFromSlug(blockSlug) ?? undefined,
  };
}

/* =============================
   Listing logic (ordered)
============================= */

function getChapterSlugs(moduleSlug: string) {
  const modPath = path.join(ROOT, moduleSlug);
  const dirs = listDirs(modPath);

  // sort op meta.order / slug-prefix
  const withOrder = dirs.map((chapterSlug) => {
    const meta = readChapterMeta(moduleSlug, chapterSlug);
    const order = typeof meta.order === "number" ? meta.order : 999999;
    return { chapterSlug, order, title: meta.title };
  });

  withOrder.sort((a, b) => a.order - b.order || a.chapterSlug.localeCompare(b.chapterSlug));
  return withOrder.map((x) => x.chapterSlug);
}

function getBlocksInChapter(moduleSlug: string, chapterSlug: string) {
  const chapterPath = path.join(ROOT, moduleSlug, chapterSlug);

  const dirBlocks = listDirs(chapterPath);

  const fileBlocks = listFiles(chapterPath)
    .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"))
    .map((f) => f.replace(/\.(mdx|md)$/, ""));

  // unique
  const set = new Set<string>([...dirBlocks, ...fileBlocks]);
  const slugs = Array.from(set);

  const withOrder = slugs.map((blockSlug) => {
    const meta = readBlockMeta(moduleSlug, chapterSlug, blockSlug);
    const order = typeof meta.order === "number" ? meta.order : 999999;
    const title = meta.title ?? humanizeSlug(blockSlug);
    return { blockSlug, order, title };
  });

  withOrder.sort((a, b) => a.order - b.order || a.blockSlug.localeCompare(b.blockSlug));
  return withOrder.map((x) => x.blockSlug);
}

/* =============================
   Public API
============================= */

export async function getLearningTreeForModule(
  moduleSlug: string
): Promise<LearningTree | null> {
  if (!moduleSlug) return null;

  const modPath = path.join(ROOT, moduleSlug);
  if (!exists(modPath)) return null;

  const moduleTitle = getModuleTitle(moduleSlug);

  const chapters = getChapterSlugs(moduleSlug).map((chapterSlug) => {
    const cMeta = readChapterMeta(moduleSlug, chapterSlug);
    const chapterTitle = cMeta.title ?? humanizeSlug(chapterSlug);

    const blocks = getBlocksInChapter(moduleSlug, chapterSlug).map((blockSlug) => {
      const bMeta = readBlockMeta(moduleSlug, chapterSlug, blockSlug);
      const title = bMeta.title ?? humanizeSlug(blockSlug);

      return {
        blockSlug,
        title,
        order: bMeta.order,
        href: `/portaal/leren/${moduleSlug}/${chapterSlug}/${blockSlug}`,
        status: "todo" as BlockStatus, // later uit DB
      };
    });

    return {
      chapterSlug,
      title: chapterTitle,
      order: cMeta.order,
      blocks,
    };
  });

  return { moduleSlug, moduleTitle, chapters };
}

export async function getModuleOverview(moduleSlug: string) {
  return getLearningTreeForModule(moduleSlug);
}

export async function getChapterOverview(moduleSlug: string, chapterSlug: string) {
  const tree = await getLearningTreeForModule(moduleSlug);
  if (!tree) return null;

  const chapter = tree.chapters.find((c) => c.chapterSlug === chapterSlug);
  if (!chapter) return null;

  return { moduleTitle: tree.moduleTitle, ...chapter };
}

export async function getBlockWithPrevNext(
  moduleSlug: string,
  chapterSlug: string,
  blockSlug: string
): Promise<BlockData | null> {
  if (!moduleSlug || !chapterSlug || !blockSlug) return null;

  const tree = await getLearningTreeForModule(moduleSlug);
  if (!tree) return null;

  const chapter = tree.chapters.find((c) => c.chapterSlug === chapterSlug);
  if (!chapter) return null;

  const block = chapter.blocks.find((b) => b.blockSlug === blockSlug);
  if (!block) return null;

  const flat = tree.chapters.flatMap((c) =>
    c.blocks.map((b) => ({
      chapterSlug: c.chapterSlug,
      chapterTitle: c.title,
      ...b,
    }))
  );

  const idx = flat.findIndex(
    (x) => x.chapterSlug === chapterSlug && x.blockSlug === blockSlug
  );

  const prev = idx > 0 ? flat[idx - 1] : null;
  const next = idx >= 0 && idx < flat.length - 1 ? flat[idx + 1] : null;

  const prevLink: PrevNext = prev ? { href: prev.href, title: prev.title } : null;
  const nextLink: PrevNext = next ? { href: next.href, title: next.title } : null;

  // content ophalen (MDX/MD als string)
  const fp = resolveBlockContentPath(moduleSlug, chapterSlug, blockSlug);

  let contentMdx = "";
  if (fp) {
    contentMdx = fs.readFileSync(fp, "utf8");
  } else {
    contentMdx = `# ${block.title}\n\n(Geen contentbestand gevonden.)`;
  }

  // Optioneel: heel simpele frontmatter-strip (als je ooit --- gebruikt)
  if (contentMdx.trimStart().startsWith("---")) {
    const parts = contentMdx.split("\n---");
    if (parts.length >= 2) contentMdx = parts.slice(1).join("\n---").trim();
  }

  return {
    moduleSlug,
    moduleTitle: tree.moduleTitle,
    chapterSlug,
    chapterTitle: chapter.title,
    blockSlug,
    blockTitle: block.title,
    blockNumber: block.order,
    href: block.href,
    contentMdx, // ✅ HIER
    prev: prevLink,
    next: nextLink,
  };
}