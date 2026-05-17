"use client";

import StudyHelpAccordion from "@/components/learning/StudyHelpAccordion";
import ReflectionArchiveClient from "@/components/learning/ReflectionArchiveClient";
import NotesArchiveClient from "@/components/learning/NotesArchiveClient";
import GlossaryPanel from "@/components/learning/GlossaryPanel";

export default function ProgressSidebar({
  moduleTitle,
  moduleSlug,
}: {
  moduleTitle: string;
  moduleSlug: string;
}) {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-4 space-y-4">
      {/* Header */}
      <div>
        <p className="text-xs text-slate-500">Studiehulp</p>
        <p className="text-sm font-semibold text-slate-900">{moduleTitle}</p>
      </div>

      {/* Voortgang (placeholder) */}
      <div className="space-y-2">
        <p className="text-xs font-medium text-slate-700">Voortgang</p>
        <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
          <div className="h-full w-[0%] bg-slate-900" />
        </div>
        <p className="text-xs text-slate-500">0% (placeholder)</p>
      </div>

      {/* Panels */}
      <StudyHelpAccordion
        items={[
          {
            id: "reflecties",
            title: "Reflecties",
            defaultOpen: true,
            children: (
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
                <div className="max-h-[40vh] overflow-auto pr-1">
                  <ReflectionArchiveClient compact moduleSlug={moduleSlug} />
                </div>
              </div>
            ),
          },
          {
            id: "aantekeningen",
            title: "Aantekeningen",
            defaultOpen: false,
            children: (
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
                <div className="max-h-[40vh] overflow-auto pr-1">
                  <NotesArchiveClient compact moduleSlug={moduleSlug} />
                </div>
              </div>
            ),
          },
          {
            id: "begrippen",
            title: "Begrippen",
            defaultOpen: false,
            children: (
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
                <div className="max-h-[45vh] overflow-auto pr-1">
                  <GlossaryPanel moduleSlug={moduleSlug} />
                </div>
              </div>
            ),
          },
          {
            id: "downloads",
            title: "Downloads",
            defaultOpen: false,
            children: (
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
                <p className="text-xs text-slate-500">Nog geen downloads.</p>
              </div>
            ),
          },
        ]}
      />
    </div>
  );
}