import Link from "next/link";
import { notFound } from "next/navigation";
import { getLearningTreeForModule } from "../_content";

export const dynamic = "force-dynamic";

export default async function ModulePage({
  params,
}: {
  params: Promise<{ moduleSlug: string }>;
}) {
  const { moduleSlug } = await params;

  if (!moduleSlug) return notFound();

  const tree = await getLearningTreeForModule(moduleSlug);
  if (!tree) return notFound();

  return (
    <main className="space-y-6">
      <header className="space-y-2">
        <p className="text-xs text-slate-500">
          <Link href="/portaal/leren" className="hover:text-slate-700">
            Leeromgeving
          </Link>{" "}
          <span className="text-slate-300">›</span>{" "}
          <span className="text-slate-700">{tree.moduleTitle}</span>
        </p>

        <h1 className="text-2xl md:text-3xl font-semibold text-slate-900">
          {tree.moduleTitle}
        </h1>

        <p className="text-sm text-slate-600">
          Kies een hoofdstuk om te starten of verder te gaan.
        </p>
      </header>

      {tree.chapters.length === 0 ? (
        <section className="bg-white border border-slate-200 rounded-2xl p-5">
          <p className="text-sm text-slate-700">
            Er zijn nog geen hoofdstukken beschikbaar in deze module.
          </p>
        </section>
      ) : (
        <section className="grid gap-4">
          {tree.chapters.map((c) => (
            <Link
              key={c.chapterSlug}
              href={`/portaal/leren/${tree.moduleSlug}/${c.chapterSlug}`}
              className="group rounded-2xl border border-slate-200 bg-white p-5 hover:bg-slate-50 transition-colors"
            >
              <div className="flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-slate-900 truncate">
                    {c.title}
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    {c.blocks.length} blok(ken)
                  </p>
                </div>

                <span className="shrink-0 rounded-full border border-slate-300 px-4 py-2 text-sm text-slate-800 group-hover:bg-white">
                  Open →
                </span>
              </div>
            </Link>
          ))}
        </section>
      )}
    </main>
  );
}