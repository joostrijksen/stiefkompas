"use client";

import React, { useEffect, useMemo, useState } from "react";

type Item = {
  id: string;
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
};

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function readOpenId(storageKey: string, fallbackId: string | null) {
  try {
    const raw = localStorage.getItem(storageKey);
    if (!raw) return fallbackId;
    const parsed = JSON.parse(raw) as { openId?: string | null };
    return parsed?.openId ?? fallbackId;
  } catch {
    return fallbackId;
  }
}

export default function StudyHelpAccordion({
  storageKey = "stiefkompas_studiehulp_open_v1",
  items,
}: {
  storageKey?: string;
  items: Item[];
}) {
  const defaultOpenId = useMemo(() => {
    const firstDefault = items.find((it) => it.defaultOpen)?.id;
    return firstDefault ?? (items[0]?.id ?? null);
  }, [items]);

  const [openId, setOpenId] = useState<string | null>(defaultOpenId);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setOpenId(readOpenId(storageKey, defaultOpenId));
    setHydrated(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [storageKey]);

  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(storageKey, JSON.stringify({ openId }));
    } catch {
      // ignore
    }
  }, [openId, hydrated, storageKey]);

  return (
    <div className="space-y-2">
      {items.map((it) => {
        const open = openId === it.id;

        return (
          <section
            key={it.id}
            className="rounded-xl border border-slate-200 bg-white overflow-hidden"
          >
            <button
              type="button"
              onClick={() => setOpenId((prev) => (prev === it.id ? null : it.id))}
              className={cx(
                "w-full text-left px-3 py-2",
                "flex items-center justify-between gap-3",
                "hover:bg-slate-50"
              )}
            >
              <span className="text-xs font-medium text-slate-700">
                {it.title}
              </span>
              <span className="text-xs text-slate-400">{open ? "—" : "+"}</span>
            </button>

            {open && <div className="px-3 pb-3">{it.children}</div>}
          </section>
        );
      })}
    </div>
  );
}