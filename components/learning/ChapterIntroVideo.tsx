type Props = {
  title?: string;
  videoUrl?: string | null;
  posterUrl?: string | null;
};

export default function ChapterIntroVideo({
  title = "Hoofdstukintro",
  videoUrl,
  posterUrl,
}: Props) {
  // ✅ ALS ER NOG GEEN VIDEO IS: toon placeholder
  if (!videoUrl) {
    return (
      <section className="bg-white border border-slate-200 rounded-2xl p-5">
        <div className="flex items-center justify-between gap-3 mb-3">
          <p className="text-sm font-semibold text-slate-900">{title}</p>
          <span className="text-xs text-slate-500">video (placeholder)</span>
        </div>

        <div className="relative w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-50 aspect-video">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center px-6">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white">
                ▶
              </div>
              <p className="text-sm font-medium text-slate-900">
                Hoofdstukvideo komt hier
              </p>
              <p className="text-xs text-slate-600 mt-1">
                Straks: Bunny Stream URL koppelen
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // ✅ ALS ER WÉL EEN VIDEO IS: toon player
  return (
    <section className="bg-white border border-slate-200 rounded-2xl p-5">
      <div className="flex items-center justify-between gap-3 mb-3">
        <p className="text-sm font-semibold text-slate-900">{title}</p>
        <span className="text-xs text-slate-500">introvideo</span>
      </div>

      <div className="overflow-hidden rounded-xl border border-slate-200 bg-black aspect-video">
        <video
          className="h-full w-full"
          controls
          preload="metadata"
          poster={posterUrl ?? undefined}
        >
          <source src={videoUrl} />
        </video>
      </div>
    </section>
  );
}