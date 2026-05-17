import Link from "next/link";
import { COURSE_MODULES, type CourseModuleSlug } from "./_content";

export default function LerenSidebar({
  activeModuleSlug,
  displayName,
}: {
  activeModuleSlug?: CourseModuleSlug;
  displayName?: string;
}) {
  return (
    <aside className="sticky top-6 h-fit rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      {/* Welcome */}
      <div className="mb-5 rounded-2xl border border-slate-200 bg-slate-50 p-4">
        <p className="text-[11px] tracking-widest text-slate-500 uppercase">
          Welkom
        </p>
        <p className="mt-1 text-lg font-semibold text-slate-900">
          {displayName ?? "in het portaal"}
        </p>
        <p className="mt-1 text-sm text-slate-600">
          Kies een module om te starten of ga verder waar je was gebleven.
        </p>
      </div>

      {/* Modules label */}
      <div className="px-2 pb-2">
        <p className="text-xs tracking-widest text-slate-500 uppercase">
          Modules
        </p>
      </div>

      {/* Module list */}
      <nav className="space-y-2">
        {COURSE_MODULES.map((m) => {
          const isActive = m.slug === activeModuleSlug;

          const href =
            m.kind === "certificering"
              ? "/portaal/certificering"
              : `/portaal/leren/${m.slug}`;

          const subtitle =
            m.slug === "module-1"
              ? "Fundament & analyse"
              : m.slug === "module-2"
              ? "Toepassing & tools"
              : "Toetsing & status";

          return (
            <Link
              key={m.slug}
              href={href}
              className={[
                "group block rounded-2xl px-3 py-3 transition",
                "border border-transparent",
                isActive
                  ? "bg-violet-50 border-violet-200 shadow-sm"
                  : "hover:bg-slate-50 hover:border-slate-200",
              ].join(" ")}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="text-sm font-semibold text-slate-900 leading-snug">
                    {m.title}
                  </div>
                  <div className="mt-1 text-xs text-slate-500">
                    {subtitle}
                  </div>
                </div>

                <span
                  className={[
                    "mt-0.5 inline-flex items-center rounded-full px-2 py-1",
                    "text-[11px] font-medium",
                    isActive
                      ? "bg-white text-violet-700 border border-violet-200"
                      : "bg-slate-100 text-slate-600 group-hover:bg-white group-hover:border group-hover:border-slate-200",
                  ].join(" ")}
                >
                  Open <span className="ml-1">→</span>
                </span>
              </div>
            </Link>
          );
        })}
      </nav>

      {/* Back link */}
      <div className="mt-5 border-t border-slate-200 pt-4">
        <Link
          href="/portaal/dashboard"
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-900 underline underline-offset-4 hover:text-slate-700"
        >
          Terug naar dashboard <span aria-hidden>→</span>
        </Link>
      </div>
    </aside>
  );
}