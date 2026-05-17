"use client";

import { useMemo, useState } from "react";

type PillarId = "posities" | "hechting" | "grenzen" | "communicatie" | "ritme";

type Pillar = {
  id: PillarId;
  title: string;
  subtitle: string;
  description: string;
  angleStart: number;
  angleEnd: number;
  accent: string;
};

function polarToCartesian(cx: number, cy: number, r: number, angleDeg: number) {
  const a = ((angleDeg - 90) * Math.PI) / 180;
  return { x: cx + r * Math.cos(a), y: cy + r * Math.sin(a) };
}

function arcPath(cx: number, cy: number, rOuter: number, rInner: number, start: number, end: number) {
  const p1 = polarToCartesian(cx, cy, rOuter, start);
  const p2 = polarToCartesian(cx, cy, rOuter, end);
  const p3 = polarToCartesian(cx, cy, rInner, end);
  const p4 = polarToCartesian(cx, cy, rInner, start);
  const largeArc = end - start <= 180 ? "0" : "1";
  return [
    `M ${p1.x} ${p1.y}`,
    `A ${rOuter} ${rOuter} 0 ${largeArc} 1 ${p2.x} ${p2.y}`,
    `L ${p3.x} ${p3.y}`,
    `A ${rInner} ${rInner} 0 ${largeArc} 0 ${p4.x} ${p4.y}`,
    "Z",
  ].join(" ");
}

function midAngle(start: number, end: number) {
  return start + (end - start) / 2;
}

export function KompasModel() {
  const [active, setActive] = useState<PillarId>("posities");

  const pillars: Pillar[] = useMemo(() => {
    const step = 72;
    const base = -90;
    const INK = "#0E2A47";

    return [
      {
        id: "posities",
        title: "Posities & loyaliteit",
        subtitle: "& Loyaliteit",
        description:
          "Deze pijler richt zich op posities en loyaliteiten binnen het samengestelde gezin. Niet alleen de formele rollen, maar vooral de plek die iemand inneemt en de verwachtingen die daarbij horen. Loyaliteiten kunnen steunend zijn, maar ook spanningen oproepen, vooral wanneer gezinsleden het gevoel hebben te moeten kiezen tussen verschillende loyaliteiten.",
        angleStart: base,
        angleEnd: base + step,
        accent: INK,
      },
      {
        id: "hechting",
        title: "Hechting & veiligheid",
        subtitle: "& Veiligheid",
        description:
          "Deze pijler richt zich op hechting en veiligheid binnen het samengestelde gezin. Hechting beïnvloedt hoe kinderen en volwassenen nieuwe relaties aangaan en wat zij nodig hebben om zich veilig te voelen. Emotionele veiligheid gaat over voorspelbaarheid, gezien en gehoord worden en ruimte voor eigen tempo.",
        angleStart: base + step,
        angleEnd: base + 2 * step,
        accent: INK,
      },
      {
        id: "grenzen",
        title: "Grenzen & structuur",
        subtitle: "& Structuur",
        description:
          "In samengestelde gezinnen bestaan vaak verschillende opvoedstijlen, regels en verwachtingen. Deze pijler helpt om grenzen en structuur te verduidelijken, zodat gezinsleden weten wat zij van elkaar kunnen verwachten. Duidelijke afspraken over verantwoordelijkheden, besluitvorming en opvoeding geven rust en voorspelbaarheid.",
        angleStart: base + 2 * step,
        angleEnd: base + 3 * step,
        accent: INK,
      },
      {
        id: "communicatie",
        title: "Communicatie & patronen",
        subtitle: "& Patronen",
        description:
          "Deze pijler richt zich op hoe gezinsleden met elkaar communiceren en welke vaste patronen daarin telkens terugkeren. Niet de inhoud van losse uitspraken staat centraal, maar de manier waarop reacties elkaar opvolgen en beïnvloeden. Inzicht in deze communicatiepatronen helpt om samen te werken aan helderdere en opener communicatie.",
        angleStart: base + 3 * step,
        angleEnd: base + 4 * step,
        accent: INK,
      },
      {
        id: "ritme",
        title: "Ritme & afstemming",
        subtitle: "& Afstemming",
        description:
          "In deze pijler staat het gezamenlijke gezinsritme centraal. Het gaat om hoe het dagelijks leven is georganiseerd, welke routines terugkeren en welke momenten betekenis krijgen. Rituelen helpen om verbondenheid te ervaren en geven betekenis aan samen zijn, zonder dat eerdere gezinnen of relaties worden uitgewist.",
        angleStart: base + 4 * step,
        angleEnd: base + 5 * step,
        accent: INK,
      },
    ];
  }, []);

  const activePillar = pillars.find((p) => p.id === active)!;

  return (
    <div className="w-full">
      <div className="rounded-2xl bg-white p-8" style={{ border: "1px solid rgba(14, 42, 71, 0.14)" }}>
        <div className="grid lg:grid-cols-[480px_1fr] gap-10 items-start">
          {/* Kompas */}
          <div className="relative mx-auto w-full max-w-[480px]">
            <svg viewBox="0 0 520 520" className="w-full h-auto" aria-label="Kompasmodel">
              <defs>
                <radialGradient id="soft" cx="50%" cy="50%" r="60%">
                  <stop offset="0%" stopColor="#0E2A47" stopOpacity="0.04" />
                  <stop offset="100%" stopColor="#0E2A47" stopOpacity="0" />
                </radialGradient>
                <filter id="lift" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="0" dy="6" stdDeviation="8" floodColor="#0E2A47" floodOpacity="0.1" />
                </filter>
              </defs>

              {/* Zachte achtergrond */}
              <circle cx="260" cy="260" r="235" fill="url(#soft)" />
              <circle cx="260" cy="260" r="220" fill="none" stroke="#0E2A47" strokeOpacity="0.14" strokeWidth="2" />

              {/* Segmenten */}
              {pillars.map((p) => {
                const isActive = p.id === active;
                const d = arcPath(260, 260, 210, 110, p.angleStart, p.angleEnd);
                const a = midAngle(p.angleStart, p.angleEnd);
                const labelPos = polarToCartesian(260, 260, 165, a);

                const fillOpacity = isActive ? 0.14 : 0.03;
                const strokeOpacity = isActive ? 0.45 : 0.12;
                const strokeWidth = isActive ? 2.5 : 1.5;

                return (
                  <g key={p.id}>
                    <path
                      d={d}
                      fill={p.accent}
                      fillOpacity={fillOpacity}
                      stroke={p.accent}
                      strokeOpacity={strokeOpacity}
                      strokeWidth={strokeWidth}
                      className="cursor-pointer transition-all duration-300"
                      filter={isActive ? "url(#lift)" : undefined}
                      onMouseEnter={() => setActive(p.id)}
                      onClick={() => setActive(p.id)}
                    />

                    <g transform={`translate(${labelPos.x} ${labelPos.y})`} className="pointer-events-none">
                      <text textAnchor="middle" fontSize="14" fontWeight="700" fill="#0E2A47">
                        {p.title.split(" & ")[0]}
                      </text>
                      <text textAnchor="middle" y="18" fontSize="14" fontWeight="700" fill="#0E2A47">
                        {p.subtitle}
                      </text>
                    </g>
                  </g>
                );
              })}

              {/* Centrum */}
              <circle cx="260" cy="260" r="78" fill="#fff" stroke="#0E2A47" strokeOpacity="0.14" strokeWidth="2" />
              <circle cx="260" cy="260" r="5" fill="#0E2A47" opacity="0.6" />
              <text x="260" y="252" textAnchor="middle" fontSize="16" fontWeight="800" fill="#0E2A47">
                Het Kompasmodel
              </text>
              <text x="260" y="276" textAnchor="middle" fontSize="12" fontWeight="600" fill="#0E2A47" opacity={0.6}>
                vijf pijlers in samenhang
              </text>

              {/* Subtiele pulse */}
              <circle cx="260" cy="260" r="98" fill="none" stroke="#0E2A47" strokeOpacity="0.18" strokeWidth="2" className="kompasPulse" />
            </svg>

            <p className="mt-4 text-xs text-center text-slate-500">
              Beweeg over een pijler voor toelichting
            </p>
          </div>

          {/* Uitleg */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-[#0E2A47]">
              {activePillar.title}
            </h3>
            <p className="text-lg leading-relaxed text-slate-700">
              {activePillar.description}
            </p>

            <a
              href="/methode"
              className="inline-flex items-center gap-2 font-semibold text-[#0E2A47] hover:gap-3 transition-all"
            >
              Lees meer over deze pijler
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .kompasPulse {
          transform-origin: 260px 260px;
          animation: kompasPulse 2.8s ease-in-out infinite;
        }
        @keyframes kompasPulse {
          0% {
            stroke-opacity: 0.08;
            transform: scale(0.996);
          }
          50% {
            stroke-opacity: 0.22;
            transform: scale(1.008);
          }
          100% {
            stroke-opacity: 0.08;
            transform: scale(0.996);
          }
        }
      `}</style>
    </div>
  );
}