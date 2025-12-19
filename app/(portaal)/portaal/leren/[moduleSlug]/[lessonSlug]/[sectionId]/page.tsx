import Link from "next/link";
import { notFound } from "next/navigation";
import { modules, SECTION_ORDER, SECTION_TITLES } from "../../../_content";
import LessonTemplate from "../../../LessonTemplate";

import { createClient } from "@/app/lib/supabase/server";
import { getLessonContent } from "@/app/lib/lesson-content";

import { CompleteSectionButton } from "./CompleteSectionButton";

export default async function LessonSectionPage({
  params,
}: {
  params: Promise<{ moduleSlug: string; lessonSlug: string; sectionId: string }>;
}) {
  const { moduleSlug, lessonSlug, sectionId } = await params;

  /* ---------------------------------------------
     Module / lesson lookup (eerst valideren)
  --------------------------------------------- */
  const module = modules.find((m) => m.slug === moduleSlug);
  if (!module) return notFound();

  const lesson = module.lessons.find((l) => l.slug === lessonSlug);
  if (!lesson) return notFound();

  if (!SECTION_ORDER.includes(sectionId as any)) return notFound();

  const currentIndex = SECTION_ORDER.indexOf(sectionId as any);
  const totalSections = SECTION_ORDER.length;

  const prevSectionId =
    currentIndex > 0 ? SECTION_ORDER[currentIndex - 1] : null;
  const nextSectionId =
    currentIndex < totalSections - 1 ? SECTION_ORDER[currentIndex + 1] : null;

  /* ---------------------------------------------
     Supabase + user (ÉÉN KEER)
  --------------------------------------------- */
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  /* ---------------------------------------------
     Progress: section gestart (juiste mapping!)
     - lesson_slug = lesson.slug (LES)
     - section_id  = sectionId  (SECTIE)
  --------------------------------------------- */
  if (user) {
    await supabase
      .from("user_progress")
      .upsert(
        {
          user_id: user.id,
          module_slug: module.slug,
          lesson_slug: lesson.slug,
          section_id: sectionId,
          status: "started",
          last_accessed_at: new Date().toISOString(),
        },
        { onConflict: "user_id,module_slug,lesson_slug,section_id" }
      );
  }

  /* ---------------------------------------------
     Content ophalen
  --------------------------------------------- */
  const lessonContent = await getLessonContent(lesson.contentKey, lesson.title);
  const section = lessonContent.sections.find((s) => s.id === sectionId);
  if (!section) return notFound();

  /* ---------------------------------------------
     Progress ophalen (voltooide secties)
  --------------------------------------------- */
  let completedIds = new Set<string>();

  if (user) {
    const { data } = await supabase
      .from("user_progress")
      .select("section_id")
      .eq("module_slug", module.slug)
      .eq("lesson_slug", lesson.slug)
      .eq("status", "completed");

    completedIds = new Set((data ?? []).map((r) => r.section_id));
  }

  const completedCount = completedIds.size;
  const percent = Math.round((completedCount / totalSections) * 100);
  const sectionKey = String(sectionId) as keyof typeof SECTION_TITLES;
const sectionLabel = SECTION_TITLES[sectionKey] ?? String(sectionId);

  /* ---------------------------------------------
     Render
  --------------------------------------------- */
  return (
    <div className="space-y-10 pb-24">
      {/* Header */}
      <section className="space-y-3 border-b border-slate-200 pb-8">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-slate-500">
          {module.title} • {lesson.title}
        </p>

        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-slate-600">
          <Link
            href={`/portaal/leren/${module.slug}`}
            className="underline underline-offset-4 hover:text-slate-900"
          >
            Terug naar module
          </Link>

          <span className="text-slate-300">•</span>

          <Link
            href={`/portaal/leren/${module.slug}/${lesson.slug}`}
            className="underline underline-offset-4 hover:text-slate-900"
          >
            Lesoverzicht
          </Link>

          <span className="text-slate-300">•</span>

          <span>
            Onderdeel {currentIndex + 1} van {totalSections}
          </span>

          <span className="text-slate-300">•</span>

          <span className="font-medium text-slate-900">{percent}% voltooid</span>
        </div>

        {/* Progressbar */}
        <div className="space-y-2 pt-2">
          <div className="flex justify-between text-sm text-slate-600">
            <span>Voortgang les</span>
            <span className="font-medium text-slate-900">{percent}%</span>
          </div>
          <div className="h-2 w-full rounded-full bg-slate-100 overflow-hidden">
            <div className="h-full bg-slate-900" style={{ width: `${percent}%` }} />
          </div>
          <p className="text-xs text-slate-500">
            {completedCount} / {totalSections} onderdelen afgerond
          </p>
        </div>

        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
          {section.title || sectionLabel}
        </h1>
      </section>

      {/* Content */}
      <LessonTemplate
        moduleSlug={module.slug}
        lessonSlug={lesson.slug}
        title={lesson.title}
        introVideo={sectionId === "intro" ? lessonContent.introVideo : undefined}
        goals={sectionId === "doelen" ? lessonContent.goals : undefined}
        keyPoints={sectionId === "kern" ? lessonContent.keyPoints : undefined}
        reflection={sectionId === "reflectie" ? lessonContent.reflection : undefined}
        assignments={sectionId === "opdrachten" ? lessonContent.assignments : undefined}
        quiz={sectionId === "lescheck" ? lessonContent.quiz : undefined}
      >
        <p>{section.body}</p>
      </LessonTemplate>

      {/* Navigatie */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        {prevSectionId ? (
          <Link
            href={`/portaal/leren/${module.slug}/${lesson.slug}/${prevSectionId}`}
            className="rounded-full border border-slate-200 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-slate-700 hover:bg-slate-50"
          >
            ← Vorige onderdeel
          </Link>
        ) : (
          <span className="rounded-full border border-slate-200 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
            ← Vorige onderdeel
          </span>
        )}

        {nextSectionId ? (
          <CompleteSectionButton
            moduleSlug={module.slug}
            lessonSlug={lesson.slug}
            sectionId={sectionId}
            nextHref={`/portaal/leren/${module.slug}/${lesson.slug}/${nextSectionId}`}
          />
        ) : (
          <Link
            href={`/portaal/leren/${module.slug}/${lesson.slug}`}
            className="rounded-full border border-slate-900 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-slate-900 hover:bg-slate-900 hover:text-white"
          >
            Klaar → lesoverzicht
          </Link>
        )}
      </div>

      {!user && (
        <p className="text-sm text-slate-500">Log in om je voortgang op te slaan.</p>
      )}
    </div>
  );
}