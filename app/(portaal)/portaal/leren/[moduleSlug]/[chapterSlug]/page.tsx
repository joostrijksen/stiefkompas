import Link from "next/link";
import { notFound } from "next/navigation";
import { getChapterOverview } from "../../_content";
import ChapterIntroVideo from "@/components/learning/ChapterIntroVideo";

export const dynamic = "force-dynamic";

export default async function ChapterPage({
  params,
}: {
  params: Promise<{ moduleSlug: string; chapterSlug: string }>;
}) {
  const { moduleSlug, chapterSlug } = await params;

  if (!moduleSlug || !chapterSlug) return notFound();

  const data = await getChapterOverview(moduleSlug, chapterSlug);
  if (!data) return notFound();

  const chapterVideoUrl: string | null = null;
  const chapterPosterUrl: string | null = null;

  return (
    // ✅ Belangrijk: h-full + min-h-0 + flex-col
    <main className="h-full min-h-0 flex flex-col gap-4">
      {/* Header blijft boven de scroll-regio */}
      <header className="space-y-2 shrink-0">
        <p className="text-xs text-slate-500">
          <Link href="/portaal/leren" className="hover:text-slate-700">
            Leeromgeving
          </Link>{" "}
          <span className="text-slate-300">›</span>{" "}
          <Link href={`/portaal/leren/${moduleSlug}`} className="hover:text-slate-700">
            {data.moduleTitle}
          </Link>{" "}
          <span className="text-slate-300">›</span>{" "}
          <span className="text-slate-700">{data.title}</span>
        </p>

        <h1 className="text-2xl font-semibold text-slate-900">{data.title}</h1>
        <p className="text-sm text-slate-600">
          Kies een blok om te starten of verder te gaan.
        </p>
      </header>

      {/* ✅ Body vult de resterende hoogte; hierin kunnen kolommen scrollen */}
      <div className="flex-1 min-h-0 lg:grid lg:grid-cols-[360px_minmax(0,1fr)] lg:gap-6">
        {/* LEFT (desktop): eigen scroll */}
        <aside className="hidden lg:block min-h-0 overflow-y-auto pr-1">
          <div className="bg-white border border-slate-200 rounded-2xl p-4">
            <p className="text-xs font-medium text-slate-700 mb-3">Inhoud</p>

            {data.blocks.length === 0 ? (
              <p className="text-sm text-slate-600">Geen blokken gevonden.</p>
            ) : (
              <ul className="divide-y divide-slate-100 rounded-xl border border-slate-200 overflow-hidden">
                {data.blocks.map((b) => {
                  const locked = b.status === "locked";
                  const done = b.status === "done";

                  return (
                    <li
                      key={b.blockSlug}
                      className="flex items-center justify-between gap-3 px-4 py-3 bg-white"
                    >
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="text-slate-400 w-5 text-center">
                            {locked ? "🔒" : done ? "✓" : "•"}
                          </span>
                          <p className="text-sm font-medium text-slate-900 truncate">
                            {b.title}
                          </p>
                        </div>

                        <p className="text-xs text-slate-500 mt-1 truncate">
                          {moduleSlug} / {chapterSlug} / {b.blockSlug}
                        </p>
                      </div>

                      {locked ? (
                        <span className="text-xs text-slate-400">Niet beschikbaar</span>
                      ) : (
                        <Link
                          href={b.href}
                          className="shrink-0 rounded-full border border-slate-300 px-4 py-2 text-sm text-slate-800 hover:bg-slate-100"
                        >
                          Open →
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </aside>

        {/* RIGHT: eigen scroll */}
        <section className="min-w-0 min-h-0 overflow-y-auto pr-1">
          <div className="space-y-6 pb-10">
            <ChapterIntroVideo
              title={`Intro – ${data.title}`}
              videoUrl={chapterVideoUrl}
              posterUrl={chapterPosterUrl}
            />

            <div className="bg-white border border-slate-200 rounded-2xl p-5">
              <h2 className="text-base font-semibold text-slate-900">Over dit hoofdstuk</h2>
              <p className="mt-2 text-sm text-slate-700 leading-7">
                In dit hoofdstuk werk je blok voor blok. Gebruik de inhoud links om snel te navigeren.
                Bij ieder blok kun je een reflectie opslaan; die zie je terug in je studiehulp.
              </p>
            </div>

            {/* Mobiel: inhoud onderaan */}
            <div className="lg:hidden bg-white border border-slate-200 rounded-2xl p-5">
              <p className="text-xs font-medium text-slate-700 mb-3">Inhoud</p>

              {data.blocks.length === 0 ? (
                <p className="text-sm text-slate-600">Geen blokken gevonden.</p>
              ) : (
                <ul className="divide-y divide-slate-100 rounded-xl border border-slate-200 overflow-hidden">
                  {data.blocks.map((b) => {
                    const locked = b.status === "locked";
                    const done = b.status === "done";

                    return (
                      <li
                        key={b.blockSlug}
                        className="flex items-center justify-between gap-3 px-4 py-3 bg-white"
                      >
                        <div className="min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="text-slate-400 w-5 text-center">
                              {locked ? "🔒" : done ? "✓" : "•"}
                            </span>
                            <p className="text-sm font-medium text-slate-900 truncate">
                              {b.title}
                            </p>
                          </div>
                          <p className="text-xs text-slate-500 mt-1 truncate">
                            {moduleSlug} / {chapterSlug} / {b.blockSlug}
                          </p>
                        </div>

                        {locked ? (
                          <span className="text-xs text-slate-400">Niet beschikbaar</span>
                        ) : (
                          <Link
                            href={b.href}
                            className="shrink-0 rounded-full border border-slate-300 px-4 py-2 text-sm text-slate-800 hover:bg-slate-100"
                          >
                            Open →
                          </Link>
                        )}
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}