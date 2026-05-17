// lib/content/curriculum.ts
import path from "path";
import fs from "fs";

export type LessonStatus = "locked" | "todo" | "active" | "done";

export type Lesson = {
  id: string;            // bv "hoofdstuk-3-begrippenkader-en.../les-2-posities"
  title: string;         // uit frontmatter of bestandsnaam
  href: string;          // route naar les
};

export type Chapter = {
  slug: string;          // mapnaam
  title: string;         // afgeleid
  lessons: Lesson[];
};

export type Module = {
  slug: string;          // "module-1"
  title: string;         // "Module 1 — ..."
  chapters: Chapter[];
};

const CONTENT_ROOT = path.join(process.cwd(), "content", "v1.1");

function humanize(s: string) {
  return s
    .replace(/-/g, " ")
    .replace(/\b\w/g, (m) => m.toUpperCase());
}

function listDirs(p: string) {
  if (!fs.existsSync(p)) return [];
  return fs
    .readdirSync(p, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name)
    .sort();
}

function listFiles(p: string) {
  if (!fs.existsSync(p)) return [];
  return fs
    .readdirSync(p, { withFileTypes: true })
    .filter((f) => f.isFile())
    .map((f) => f.name)
    .sort();
}

/**
 * Assumptie:
 * - In elke hoofdstukmap staan lesbestanden als .md/.mdx (of submappen per les).
 * Pas dit aan als jouw structuur anders is.
 */
export function getCurriculum(): Module[] {
  const moduleSlugs = listDirs(CONTENT_ROOT);

  return moduleSlugs.map((moduleSlug) => {
    const modulePath = path.join(CONTENT_ROOT, moduleSlug);

    const chapterSlugs = listDirs(modulePath).filter((d) =>
      d.startsWith("hoofdstuk-") || d.startsWith("afsluiting-") || d.startsWith("toetsing")
    );

    const chapters: Chapter[] = chapterSlugs.map((chapterSlug) => {
      const chapterPath = path.join(modulePath, chapterSlug);

      // lesbestanden direct in hoofdstukmap:
      const lessonFiles = listFiles(chapterPath).filter((f) =>
        f.endsWith(".md") || f.endsWith(".mdx")
      );

      // fallback: als jij submappen per les gebruikt:
      const lessonDirs = listDirs(chapterPath);

      const lessons: Lesson[] = lessonFiles.length
        ? lessonFiles.map((file) => {
            const base = file.replace(/\.(md|mdx)$/, "");
            const id = `${chapterSlug}/${base}`;
            return {
              id,
              title: humanize(base),
              href: `/portaal/leren/module/${moduleSlug}/les/${chapterSlug}/${base}`,
            };
          })
        : lessonDirs.map((lessonDir) => {
            const id = `${chapterSlug}/${lessonDir}`;
            return {
              id,
              title: humanize(lessonDir),
              href: `/portaal/leren/module/${moduleSlug}/les/${chapterSlug}/${lessonDir}`,
            };
          });

      return {
        slug: chapterSlug,
        title: humanize(chapterSlug),
        lessons,
      };
    });

    return {
      slug: moduleSlug,
      title: humanize(moduleSlug).replace("Module 1", "Module 1 — Basis van de methodiek").replace("Module 2", "Module 2 — Toepassing in de praktijk"),
      chapters,
    };
  });
}

export function getModule(moduleSlug: string) {
  return getCurriculum().find((m) => m.slug === moduleSlug) ?? null;
}

export function findLesson(moduleSlug: string, lessonPathParts: string[]) {
  const mod = getModule(moduleSlug);
  if (!mod) return null;

  const [chapterSlug, lessonSlug] = lessonPathParts;
  const chapter = mod.chapters.find((c) => c.slug === chapterSlug);
  if (!chapter) return null;

  const lesson = chapter.lessons.find((l) => l.id === `${chapterSlug}/${lessonSlug}`);
  if (!lesson) return null;

  // previous/next over alle lessons in module (lineair)
  const flat = mod.chapters.flatMap((c) => c.lessons);
  const idx = flat.findIndex((x) => x.id === lesson.id);

  return {
    module: mod,
    chapter,
    lesson,
    prev: idx > 0 ? flat[idx - 1] : null,
    next: idx >= 0 && idx < flat.length - 1 ? flat[idx + 1] : null,
  };
}