"use client";

import { useState } from "react";

export default function MobileDrawer({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="rounded-full border border-slate-300 px-4 py-2 text-sm text-slate-800 bg-white hover:bg-slate-100"
      >
        {title}
      </button>
    );
  }

  return (
    <div className="fixed inset-0 z-[999]">
      {/* Backdrop - alleen deze sluit de drawer */}
      <button
        type="button"
        onClick={() => setOpen(false)}
        className="absolute inset-0 bg-black/30 cursor-default"
        aria-label="Sluit"
      />

      {/* Panel - geen onClick hier! */}
      <div className="absolute right-0 top-0 h-full w-[92%] max-w-md bg-slate-50 shadow-2xl">
        <div className="h-full overflow-auto p-4">
          <div className="flex items-center justify-between mb-3">
            <p className="text-sm font-semibold text-slate-900">{title}</p>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="rounded-full border border-slate-300 px-3 py-1 text-sm bg-white hover:bg-slate-100"
            >
              Sluit
            </button>
          </div>

          {/* Children zonder click handlers */}
          {children}
        </div>
      </div>
    </div>
  );
}