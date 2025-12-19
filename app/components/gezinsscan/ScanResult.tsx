interface ResultProps {
  totals: Record<string, number>;
}

type Level = "Aandacht" | "In balans" | "Sterk";

const fallbackQuestions = (pijler: string) => [
  "Wat gaat hier al goed, en wat schuurt?",
  "Wat is een kleine eerste stap die rust of duidelijkheid geeft?",
  "Wie heeft dit het meest nodig, en wat zou helpen?",
];

export default function ScanResult({ totals }: ResultProps) {
  const entries = Object.entries(totals);

  if (entries.length === 0) return null;

  // Sort: laagste score = relatief meer aandacht
  const sorted = [...entries].sort((a, b) => a[1] - b[1]);
  const scores = sorted.map(([, score]) => score);
  const min = Math.min(...scores);
  const max = Math.max(...scores);
  const range = Math.max(1, max - min);

  const getLevel = (score: number): Level => {
    const t = (score - min) / range; // 0..1
    if (t <= 0.33) return "Aandacht";
    if (t <= 0.66) return "In balans";
    return "Sterk";
  };

  const badgeClasses = (level: Level) => {
    switch (level) {
      case "Aandacht":
        return "border-slate-300 bg-slate-100 text-slate-700";
      case "In balans":
        return "border-slate-200 bg-white text-slate-700";
      case "Sterk":
        return "border-slate-200 bg-slate-50 text-slate-800";
    }
  };

  const focus = sorted.slice(0, Math.min(2, sorted.length)).map(([p]) => p);
  const strengths = sorted.slice(Math.max(0, sorted.length - 2)).map(([p]) => p);

  return (
    <div className="rounded-xl border border-slate-300 bg-slate-50 p-6 space-y-6 mt-8">
      <div className="space-y-2">
        <h2 className="text-xl font-semibold text-slate-900">Resultaten (basis)</h2>
        <p className="text-sm text-slate-600 max-w-2xl leading-relaxed">
          Dit is een reflectieprofiel op basis van de ingevulde antwoorden. Het laat zien welke
          pijlers relatief meer aandacht vragen en welke momenteel steviger staan.
        </p>
      </div>

      <div className="rounded-lg border border-slate-200 bg-white p-4 text-sm text-slate-700 leading-relaxed">
        <div className="font-medium text-slate-900 mb-1">Samenvatting</div>
        <div>
          <span className="font-medium">Focus:</span> {focus.join(" • ")}
        </div>
        <div className="mt-1">
          <span className="font-medium">Sterktes:</span> {strengths.join(" • ")}
        </div>
      </div>

      <div className="space-y-4">
        {sorted.map(([pijler, score], idx) => {
          const level = getLevel(score);
          const t = (score - min) / range; // 0..1
          const pct = Math.round(t * 100);

          return (
            <div key={pijler} className="rounded-lg border border-slate-200 bg-white p-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-slate-500">#{idx + 1}</span>
                    <h3 className="font-medium text-slate-900">{pijler}</h3>
                  </div>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Relatieve indicatie binnen deze scan (geen diagnose).
                  </p>
                </div>

                <span
                  className={`shrink-0 rounded-full border px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.18em] ${badgeClasses(
                    level
                  )}`}
                >
                  {level}
                </span>
              </div>

              {/* Dynamische indicator */}
              <div className="mt-3 space-y-2">
                <div className="h-2 w-full rounded-full bg-slate-100 overflow-hidden">
                  <div
                    className="h-2 rounded-full bg-slate-300"
                    style={{ width: `${pct}%` }}
                  />
                </div>
                <p className="text-xs text-slate-500">
                  Indicatie: {pct}% (relatief binnen jouw resultaten)
                </p>
              </div>

              <ul className="mt-3 list-disc pl-5 text-sm text-slate-700 space-y-1">
                {fallbackQuestions(pijler).slice(0, 3).map((q) => (
                  <li key={q}>{q}</li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}