import Link from "next/link";
import { notFound } from "next/navigation";
import { modules, SECTION_ORDER, SECTION_TITLES } from "../../_content";
import { createClient } from "@/app/lib/supabase/server";
import { getLessonContent } from "@/app/lib/lesson-content";

export default async function LessonOverviewPage({
  params,
}: {
  params: Promise<{ moduleSlug: string; lessonSlug: string }>;
}) {
  const { moduleSlug, lessonSlug } = await params;

  const module = modules.find((m) => m.slug === moduleSlug);
  if (!module) return notFound();

  const idx = module.lessons.findIndex((l) => l.slug === lessonSlug);
  if (idx === -1) return notFound();

  const lesson = module.lessons[idx];
  const totalLessons = module.lessons.length;

  const prev = idx > 0 ? module.lessons[idx - 1] : null;
  const next = idx < totalLessons - 1 ? module.lessons[idx + 1] : null;

  // ✅ Valideer dat content bestaat (en later kun je hier ook section-titles uit content halen)
  await getLessonContent(lesson.contentKey, lesson.title);

  // ✅ Live progress uit Supabase (per gebruiker)
  const supabase = await createClient();
  const { data: auth } = await supabase.auth.getUser();
  const user = auth?.user ?? null;

  let completedIds = new Set<string>();
  if (user) {
    const { data } = await supabase
      .from("lesson_section_progress")
      .select("section_id")
      .eq("module_slug", module.slug)
      .eq("lesson_slug", lesson.slug);

    completedIds = new Set((data ?? []).map((r) => r.section_id));
  }

  const completedCount = completedIds.size;
  const totalSections = SECTION_ORDER.length;
  const percent = Math.round((completedCount / totalSections) * 100);

  const startHref = `/portaal/leren/${module.slug}/${lesson.slug}/intro`;

  return (
    <div className="space-y-10 pb-24">
      {/* Header / breadcrumb */}
      <section className="space-y-4 border-b border-slate-200 pb-8">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-slate-500">
          {module.title}
        </p>

        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-slate-600">
          <Link
            href={`/portaal/leren/${module.slug}`}
            className="hover:text-slate-900 underline underline-offset-4"
          >
            Terug naar module
          </Link>

          <span className="text-slate-300">•</span>

          <span>
            Les {idx + 1} van {totalLessons}
          </span>

          <span className="text-slate-300">•</span>

          <span className="font-medium text-slate-900">{percent}% voltooid</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
          {lesson.title}
        </h1>

        {/* Mini progressbar */}
        <div className="h-2 w-full rounded-full bg-slate-100 overflow-hidden">
          <div
            className="h-full bg-slate-900 transition-all"
            style={{ width: `${percent}%` }}
          />
        </div>

        {/* Start CTA */}
        <div className="pt-4 flex flex-wrap gap-3">
          <Link
            href={startHref}
            className="inline-flex items-center rounded-full border border-slate-900 bg-slate-900 px-5 py-2.5 text-xs font-medium uppercase tracking-[0.2em] text-white hover:bg-white hover:text-slate-900 transition"
          >
            Start les →
          </Link>

          <Link
            href={`/portaal/leren/${module.slug}`}
            className="inline-flex items-center rounded-full border border-slate-200 px-5 py-2.5 text-xs font-medium uppercase tracking-[0.2em] text-slate-700 hover:bg-slate-50 transition"
          >
            Module overzicht
          </Link>
        </div>
      </section>

      {/* Onderdelen + ✅ checkmarks */}
      <section className="space-y-4">
        <h2 className="text-base font-semibold tracking-tight text-slate-900">
          Onderdelen in deze les
        </h2>

        <div className="grid gap-3">
          {SECTION_ORDER.map((sectionId, i) => {
            const done = completedIds.has(sectionId);

            return (
              <Link
                key={sectionId}
                href={`/portaal/leren/${module.slug}/${lesson.slug}/${sectionId}`}
                className="group flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm hover:bg-slate-50 transition"
              >
                <div className="space-y-1">
                  <p className="text-xs font-medium uppercase tracking-[0.22em] text-slate-500">
                    Onderdeel {i + 1} van {totalSections}
                  </p>

                  <div className="flex items-center gap-3">
                    <span
                      className={[
                        "inline-flex h-6 w-6 items-center justify-center rounded-full border text-xs font-semibold",
                        done
                          ? "border-slate-900 bg-slate-900 text-white"
                          : "border-slate-200 bg-white text-slate-500",
                      ].join(" ")}
                      aria-label={done ? "Afgerond" : "Niet afgerond"}
                      title={done ? "Afgerond" : "Nog te doen"}
                    >
                      {done ? "✓" : "○"}
                    </span>

                    <p className="text-base font-semibold text-slate-900">
                      {SECTION_TITLES[sectionId]}
                    </p>
                  </div>
                </div>

                <span className="text-slate-400 group-hover:text-slate-700 transition">
                  →
                </span>
              </Link>
            );
          })}
        </div>

        {!user ? (
          <p className="text-sm text-slate-500">
            Log in om je voortgang (checkmarks en percentages) op te slaan.
          </p>
        ) : null}
      </section>

      {/* Sticky bottom navigation */}
      <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-slate-200 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70">
        <div className="mx-auto max-w-5xl px-4 py-3">
          <div className="flex flex-wrap items-center justify-between gap-3">
            {prev ? (
              <Link
                href={`/portaal/leren/${module.slug}/${prev.slug}`}
                className="inline-flex items-center rounded-full border border-slate-200 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-slate-700 hover:bg-slate-50 transition"
              >
                ← Vorige les
              </Link>
            ) : (
              <span className="inline-flex items-center rounded-full border border-slate-200 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
                ← Vorige les
              </span>
            )}

            {next ? (
              <Link
                href={`/portaal/leren/${module.slug}/${next.slug}`}
                className="inline-flex items-center rounded-full border border-slate-200 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-slate-700 hover:bg-slate-50 transition"
              >
                Volgende les →
              </Link>
            ) : (
              <Link
                href={`/portaal/leren/${module.slug}`}
                className="inline-flex items-center rounded-full border border-slate-200 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-slate-700 hover:bg-slate-50 transition"
              >
                Klaar → module
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}