import Link from "next/link";
import { modules } from "./_content";

// TODO: Deze data moet je later ophalen uit je Supabase database
// Voorbeeld query: SELECT * FROM lesson_progress WHERE user_id = $1
const mockProgressData = {
  "module-1": { completed: 3, total: 5 },
  "module-2": { completed: 0, total: 4 },
  "module-3": { completed: 8, total: 8 },
};

// TODO: Ook dit ophalen uit database - laatste bekeken les
const mockLastViewed = {
  moduleSlug: "module-1",
  moduleTitle: "Module 1: Fundament van het Stiefgezin",
  lessonSlug: "les-3",
  lessonTitle: "Les 3: Communicatie Patronen",
  url: "/portaal/leren/module-1/les-3",
};

export default function LerenHomePage() {
  const moduleProgress = mockProgressData;
  const lastViewed = mockLastViewed;

  return (
    <div className="space-y-10">
      {/* Header Section */}
      <section className="space-y-3 border-b border-slate-200 pb-8">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-slate-500">
          Leeromgeving
        </p>
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
          Opleiding Stiefkompas
        </h1>
        <p className="text-sm md:text-base text-slate-700 max-w-3xl leading-relaxed">
          Werk in modules door de theorie en toepassing van de Stiefkompas-methodiek. Je kunt
          altijd terug naar lessen om onderdelen te herhalen.
        </p>
      </section>

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Left Column - Continue + Progress */}
        <aside className="lg:col-span-1 space-y-6">
          {/* Continue Where You Left Off */}
          {lastViewed && (
            <div className="rounded-2xl border border-blue-100 bg-blue-50/50 p-6 hover:border-blue-200 transition-colors">
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-blue-700 mb-4">
                Ga verder waar je was
              </p>
              <div className="space-y-4">
                <div>
                  <p className="font-medium text-slate-900 mb-1">{lastViewed.lessonTitle}</p>
                  <p className="text-sm text-slate-600">{lastViewed.moduleTitle}</p>
                </div>
                <Link
                  href={lastViewed.url}
                  className="inline-flex items-center justify-center w-full rounded-full bg-slate-900 px-5 py-2.5 text-xs font-medium uppercase tracking-[0.2em] text-white hover:bg-slate-800 transition"
                >
                  Hervat les →
                </Link>
              </div>
            </div>
          )}

          {/* Overall Progress Summary */}
          <div className="rounded-2xl border border-slate-200 bg-slate-50/50 p-6">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-slate-500 mb-4">
              Jouw voortgang
            </p>
            <div className="space-y-3">
              <div>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-3xl font-semibold text-slate-900 tabular-nums">
                    {Object.values(moduleProgress).reduce((acc, m) => acc + m.completed, 0)}
                  </span>
                  <span className="text-sm text-slate-600">
                    van {modules.reduce((acc, m) => acc + m.lessons.length, 0)} lessen
                  </span>
                </div>
                <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-slate-900 rounded-full transition-all duration-500"
                    style={{ 
                      width: `${Math.round((Object.values(moduleProgress).reduce((acc, m) => acc + m.completed, 0) / modules.reduce((acc, m) => acc + m.lessons.length, 0)) * 100)}%` 
                    }}
                  />
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Je hebt {Object.values(moduleProgress).filter((m) => m.completed === m.total).length} van de {modules.length} modules voltooid
              </p>
            </div>
          </div>
        </aside>

        {/* Right Column - Modules */}
        <section className="lg:col-span-2 grid gap-6 sm:grid-cols-2">
          {modules.map((m) => {
            const progress = moduleProgress[m.slug];
            const progressPercent = progress 
              ? Math.round((progress.completed / progress.total) * 100)
              : 0;
            const isCompleted = progress?.completed === progress?.total;
            const isStarted = progress && progress.completed > 0 && !isCompleted;

            return (
              <div
                key={m.slug}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-all hover:border-slate-300"
              >
                {/* Header with status badge */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h2 className="text-lg font-semibold text-slate-900 tracking-tight">
                    {m.title}
                  </h2>
                  {isCompleted && (
                    <span className="inline-flex items-center rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700 border border-emerald-100 whitespace-nowrap">
                      ✓ Voltooid
                    </span>
                  )}
                  {isStarted && (
                    <span className="inline-flex items-center rounded-full bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-700 border border-blue-100 whitespace-nowrap">
                      Bezig
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="text-sm text-slate-700 leading-relaxed">
                  {m.description}
                </p>

                {/* Progress Bar */}
                {progress && progress.total > 0 && (
                  <div className="mt-5">
                    <div className="flex items-center justify-between text-xs text-slate-600 mb-2">
                      <span>{progress.completed} van {progress.total} lessen</span>
                      <span className="font-medium tabular-nums">{progressPercent}%</span>
                    </div>
                    <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                      <div 
                        className={`h-full rounded-full transition-all duration-500 ${
                          isCompleted ? 'bg-emerald-500' : 'bg-slate-900'
                        }`}
                        style={{ width: `${progressPercent}%` }}
                      />
                    </div>
                  </div>
                )}

                {/* Footer with lesson count and CTA */}
                <div className="mt-5 pt-5 border-t border-slate-100 flex items-center justify-between">
                  <p className="text-xs text-slate-500 font-medium">
                    {m.lessons.length} {m.lessons.length === 1 ? 'les' : 'lessen'}
                  </p>
                  <Link
                    href={`/portaal/leren/${m.slug}`}
                    className="inline-flex items-center rounded-full border border-slate-900 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-slate-900 hover:bg-slate-900 hover:text-white transition-all"
                  >
                    {isCompleted ? 'Bekijk opnieuw' : isStarted ? 'Ga verder' : 'Start module'}
                  </Link>
                </div>
              </div>
            );
          })}
        </section>
      </div>
    </div>
  );
}