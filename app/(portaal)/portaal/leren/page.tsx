import Link from "next/link";
import { COURSE_MODULES } from "./_content";

export const dynamic = "force-dynamic";

export default function LerenHomePage() {
  return (
    <main className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-2xl md:text-3xl font-semibold text-slate-900">
          Leeromgeving
        </h1>
        <p className="text-sm text-slate-600 max-w-3xl">
          Kies een module en werk stap voor stap door de hoofdstukken en blokken.
        </p>
      </header>

      <section className="grid gap-4 md:grid-cols-2">
        {COURSE_MODULES.map((m) => (
          <Link
            key={m.slug}
            href={`/portaal/leren/${m.slug}`} // ✅ GEEN /module/
            className="group rounded-2xl border border-slate-200 bg-white p-5 hover:bg-slate-50 transition-colors"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="space-y-1">
                <p className="text-xs text-slate-500">
                  {m.kind === "certificering" ? "Toetsing" : "Module"}
                </p>
                <p className="text-base font-semibold text-slate-900">
                  {m.title}
                </p>
                <p className="text-sm text-slate-600">
                  Open de inhoud en ga verder waar je was gebleven.
                </p>
              </div>

              <span className="shrink-0 rounded-full border border-slate-300 px-4 py-2 text-sm text-slate-800 group-hover:bg-white">
                Open →
              </span>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}