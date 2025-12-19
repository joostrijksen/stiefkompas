import Link from "next/link";
import { notFound } from "next/navigation";
import { modules, SECTION_ORDER } from "../_content";

export default async function ModulePage({
  params,
}: {
  params: Promise<{ moduleSlug: string }>;
}) {
  const { moduleSlug } = await params;

  const module = modules.find((m) => m.slug === moduleSlug);
  if (!module) return notFound();

  // Voor nu statisch (later: per user ophalen)
  const totalSections = SECTION_ORDER.length;

  const getPercent = (_lessonSlug: string) => {
    const completedSections = 0; // TODO: later ophalen uit storage/DB
    return Math.round((completedSections / totalSections) * 100);
  };

  return (
    <div className="space-y-8 pb-24">
      <section className="space-y-3 border-b border-slate-200 pb-6">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-slate-500">
          Module
        </p>
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
          {module.title}
        </h1>
        <p className="text-slate-600">{module.description}</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-base font-semibold tracking-tight text-slate-900">
          Lessen
        </h2>

        <div className="grid gap-3">
          {module.lessons.map((lesson, i) => {
            const percent = getPercent(lesson.slug);
            const href = `/portaal/leren/${module.slug}/${lesson.slug}`; // of: `/portaal/leren/${module.slug}/${lesson.slug}/intro`

            return (
              <Link
                key={lesson.slug}
                href={href}
                className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:bg-slate-50 transition"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <p className="text-xs font-medium uppercase tracking-[0.22em] text-slate-500">
                      Les {i + 1} van {module.lessons.length}
                    </p>
                    <p className="text-lg font-semibold text-slate-900">
                      {lesson.title}
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="text-xs font-medium uppercase tracking-[0.22em] text-slate-500">
                      Voortgang
                    </p>
                    <p className="text-sm font-semibold text-slate-900">
                      {percent}%
                    </p>
                  </div>
                </div>

                {/* mini progressbar */}
                <div className="mt-4 h-2 w-full rounded-full bg-slate-100 overflow-hidden">
                  <div
                    className="h-full bg-slate-900 transition-all"
                    style={{ width: `${percent}%` }}
                  />
                </div>

                <div className="mt-4 flex items-center justify-between text-sm text-slate-600">
                  <span>{SECTION_ORDER.length} onderdelen</span>
                  <span className="text-slate-400 group-hover:text-slate-700 transition">
                    →
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <div className="pt-2">
        <Link
          href="/portaal/leren"
          className="inline-flex items-center rounded-full border border-slate-200 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-slate-700 hover:bg-slate-50 transition"
        >
          ← Terug
        </Link>
      </div>
    </div>
  );
}