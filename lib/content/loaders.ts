import path from "path";
import { promises as fs } from "fs";
import { readUtf8, readJson } from "./fs";

export type FsBlockType = "theory" | "video" | "assignment";

export type FsBlock = {
  slug: string;
  title: string;
  order: number;
  type: FsBlockType;
  estimated_minutes?: number | null;
  mdx_path?: string | null;
  video_json_path?: string | null;
  assignment_id?: string | null;
};

export type FsChapter = {
  slug: string;
  title: string;
  order: number;
  blocks: FsBlock[];
};

export type FsModule = {
  slug: string; // "module-1" | "module-2" | "certificering"
  title: string;
  order: number;
  chapters: FsChapter[];
};

const COURSE_VERSION = "v1.1";
const CONTENT_ROOT = path.join(process.cwd(), "content", COURSE_VERSION);

async function exists(p: string) {
  try {
    await fs.access(p);
    return true;
  } catch {
    return false;
  }
}

function titleFromSlug(slug: string) {
  return slug
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

function naturalOrderKey(name: string) {
  // sorteert "1-2-..." netjes voor "10-1-..."
  const m = name.match(/^(\d+)(?:-(\d+))?(?:-(\d+))?/);
  const a = m?.[1] ? parseInt(m[1], 10) : 9999;
  const b = m?.[2] ? parseInt(m[2], 10) : 9999;
  const c = m?.[3] ? parseInt(m[3], 10) : 9999;
  return [a, b, c, name] as const;
}

async function listDirs(dir: string) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  return entries.filter((e) => e.isDirectory()).map((e) => e.name);
}

async function listFiles(dir: string) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  return entries.filter((e) => e.isFile()).map((e) => e.name);
}

async function loadBlockFromFile(
  chapterDirAbs: string,
  mdxFile: string
): Promise<FsBlock> {
  const mdxAbs = path.join(chapterDirAbs, mdxFile);
  const base = mdxFile.replace(/\.mdx$/, "");
  const metaAbs = path.join(chapterDirAbs, `${base}.meta.json`);

  const meta = (await exists(metaAbs)) ? await readJson<any>(metaAbs) : {};
  const title = meta?.title ?? titleFromSlug(base);
  const order = Number.isFinite(meta?.order) ? Number(meta.order) : 9999;

  const type: FsBlockType =
    meta?.type === "video"
      ? "video"
      : meta?.type === "assignment"
      ? "assignment"
      : "theory";

  const estimated_minutes =
    meta?.estimated_minutes != null ? Number(meta.estimated_minutes) : null;

  // Laat meta zowel absolute als project-relative paden toe
  const video_json_path = meta?.video_json_path
    ? path.isAbsolute(String(meta.video_json_path))
      ? String(meta.video_json_path)
      : path.join(process.cwd(), String(meta.video_json_path))
    : null;

  const assignment_id = meta?.assignment_id ? String(meta.assignment_id) : null;

  return {
    slug: base,
    title,
    order,
    type,
    estimated_minutes,
    mdx_path: mdxAbs,
    video_json_path,
    assignment_id,
  };
}

async function loadChapterIndex(
  moduleSlug: string,
  chapterSlug: string
): Promise<FsChapter> {
  const chapterDirAbs = path.join(CONTENT_ROOT, moduleSlug, chapterSlug);

  const chapterMetaAbs = path.join(chapterDirAbs, "chapter.meta.json");
  const chapterMeta = (await exists(chapterMetaAbs))
    ? await readJson<any>(chapterMetaAbs)
    : {};

  const chapterTitle = chapterMeta?.title ?? titleFromSlug(chapterSlug);

  // default order: op basis van naam (bv "hoofdstuk-9-..." -> 9)
  const chapterOrder = Number.isFinite(chapterMeta?.order)
    ? Number(chapterMeta.order)
    : naturalOrderKey(chapterSlug)[0];

  const files = await listFiles(chapterDirAbs);
  const mdxFiles = files.filter((f) => f.endsWith(".mdx"));

  const blocks = await Promise.all(
    mdxFiles.map((f) => loadBlockFromFile(chapterDirAbs, f))
  );

  blocks.sort((a, b) => {
    if (a.order !== b.order) return a.order - b.order;
    const ak = naturalOrderKey(a.slug);
    const bk = naturalOrderKey(b.slug);
    return (
      ak[0] - bk[0] ||
      ak[1] - bk[1] ||
      ak[2] - bk[2] ||
      String(ak[3]).localeCompare(String(bk[3]))
    );
  });

  return { slug: chapterSlug, title: chapterTitle, order: chapterOrder, blocks };
}

async function loadModuleIndex(moduleSlug: string): Promise<FsModule> {
  const moduleDirAbs = path.join(CONTENT_ROOT, moduleSlug);
  if (!(await exists(moduleDirAbs))) {
    throw new Error(`Module folder not found: ${moduleSlug}`);
  }

  const moduleMetaAbs = path.join(moduleDirAbs, "module.meta.json");
  const moduleMeta = (await exists(moduleMetaAbs))
    ? await readJson<any>(moduleMetaAbs)
    : {};

  const moduleTitle =
    moduleMeta?.title ??
    (moduleSlug === "module-1"
      ? "Module 1 — Basis van de methodiek"
      : moduleSlug === "module-2"
      ? "Module 2 — Toepassing in de praktijk"
      : moduleSlug === "certificering"
      ? "Toetsing & certificering"
      : titleFromSlug(moduleSlug));

  const moduleOrder = Number.isFinite(moduleMeta?.order)
    ? Number(moduleMeta.order)
    : moduleSlug === "module-1"
    ? 1
    : moduleSlug === "module-2"
    ? 2
    : 3;

  const chapterDirs = await listDirs(moduleDirAbs);

  chapterDirs.sort((a, b) => {
    const ak = naturalOrderKey(a);
    const bk = naturalOrderKey(b);
    return (
      ak[0] - bk[0] ||
      ak[1] - bk[1] ||
      ak[2] - bk[2] ||
      String(ak[3]).localeCompare(String(bk[3]))
    );
  });

  const chapters = await Promise.all(
    chapterDirs.map((c) => loadChapterIndex(moduleSlug, c))
  );

  chapters.sort((a, b) => a.order - b.order);

  return { slug: moduleSlug, title: moduleTitle, order: moduleOrder, chapters };
}

/* ------------------------------------------------------------------
   Public API (deze namen importeer je in je pages)
------------------------------------------------------------------- */

export async function loadModule(moduleSlug: string) {
  const module = await loadModuleIndex(moduleSlug);
  return { module, chapters: module.chapters };
}

export async function loadChapter(moduleSlug: string, chapterSlug: string) {
  const module = await loadModuleIndex(moduleSlug);
  const chapter = module.chapters.find((c) => c.slug === chapterSlug);
  if (!chapter) throw new Error("Chapter not found");
  return { module, chapter, blocks: chapter.blocks };
}

export async function loadBlock(
  moduleSlug: string,
  chapterSlug: string,
  blockSlug: string
) {
  const { module, chapter, blocks } = await loadChapter(moduleSlug, chapterSlug);
  const block = blocks.find((b) => b.slug === blockSlug);
  if (!block) throw new Error("Block not found");

  const mdx = block.mdx_path ? await readUtf8(block.mdx_path) : null;
  const video = block.video_json_path
    ? await readJson<any>(block.video_json_path)
    : null;

  return { module, chapter, block, mdx, video };
}