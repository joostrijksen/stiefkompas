import Link from "next/link";

type Status = "locked" | "todo" | "done";

export default function StudyTree({
  tree,
  activeHref,
}: {
  tree: {
    moduleTitle: string;
    chapters: {
      title: string;
      chapterSlug: string;
      blocks: { title: string; href: string; status?: Status }[];
    }[];
  };
  activeHref: string;
}) {
  const icon = (s?: Status) => (s === "done" ? "✓" : s === "locked" ? "🔒" : "•");

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-4">
      <p className="text-sm font-semibold text-slate-900">{tree.moduleTitle}</p>

      <div className="mt-4 space-y-4">
        {tree.chapters.map((ch) => (
          <div key={ch.chapterSlug} className="space-y-2">
            <p className="text-xs font-medium text-slate-700">{ch.title}</p>
            <ul className="space-y-1">
              {ch.blocks.map((b) => {
                const isActive = b.href === activeHref;
                const locked = b.status === "locked";

                return (
                  <li key={b.href}>
                    <Link
                      href={b.href}
                      className={[
                        "flex items-center gap-2 rounded-lg px-2 py-1 text-sm",
                        isActive
                          ? "bg-slate-100 text-slate-900 font-semibold"
                          : "text-slate-700 hover:bg-slate-50",
                        locked ? "opacity-60 pointer-events-none" : "",
                      ].join(" ")}
                    >
                      <span className="w-5 text-center text-slate-500">
                        {isActive ? "▶" : icon(b.status)}
                      </span>
                      <span className="truncate">{b.title}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}