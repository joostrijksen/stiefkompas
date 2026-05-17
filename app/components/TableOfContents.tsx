"use client";

import { useEffect, useMemo, useState } from "react";

type TocItem = {
  id: string;
  label: string;
  level?: 1 | 2;
};

export function TableOfContents({ items }: { items: TocItem[] }) {
  const ids = useMemo(() => items.map((i) => i.id), [items]);
  const [activeId, setActiveId] = useState<string>(items[0]?.id ?? "");

  useEffect(() => {
    const els = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!els.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];

        if (visible?.target?.id) setActiveId(visible.target.id);
      },
      {
        root: null,
        rootMargin: "-20% 0px -70% 0px",
        threshold: [0.05, 0.1, 0.2, 0.35],
      }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [ids]);

  return (
    <aside className="hidden lg:block">
      <div className="sticky top-24 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          Inhoud
        </div>

        <nav className="mt-4 space-y-1">
          {items.map((item) => {
            const isActive = item.id === activeId;
            const indent = item.level === 2 ? "pl-4" : "pl-0";

            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={[
                  "block rounded-lg px-3 py-2 text-sm transition",
                  indent,
                  isActive
                    ? "bg-slate-100 text-[#0E2A47] font-semibold"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-800",
                ].join(" ")}
              >
                {item.label}
              </a>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}