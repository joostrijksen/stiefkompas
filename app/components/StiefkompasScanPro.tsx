"use client";

import { useMemo, useState } from "react";

// --------- Types ---------

type PartnerId = "A" | "B";

type Item = {
  id: string;
  text: string;
  reverse?: boolean; // omgekeerd scoren
};

type Subscale = {
  id: string;
  name: string;
  description?: string;
  items: Item[];
};

type Domain = {
  id: string;
  name: string;
  subtitle: string;
  subscales: Subscale[];
};

// --------- Data: Stiefkompas Scan PRO ---------

const DOMAINS: Domain[] = [
  {
    id: "verbinding",
    name: "Verbinding",
    subtitle: "Hechting & relaties",
    subscales: [
      {
        id: "v_emotionele_beschikbaarheid",
        name: "Emotionele beschikbaarheid",
        items: [
          {
            id: "v1",
            text: "We maken bewust tijd voor echte verbinding in het gezin.",
          },
          {
            id: "v2",
            text: "Als iemand zich rot voelt, is er meestal iemand beschikbaar om te luisteren.",
          },
        ],
      },
      {
        id: "v_veiligheid",
        name: "Veiligheid & vertrouwen",
        items: [
          {
            id: "v3",
            text: "Ik durf mijn zorgen en kwetsbaarheden te delen binnen dit gezin.",
          },
          {
            id: "v4",
            text: "Ik ben niet bang dat wat ik deel later tegen me gebruikt wordt.",
          },
        ],
      },
      {
        id: "v_coregulatie",
        name: "Co-regulatie & steun",
        items: [
          {
            id: "v5",
            text: "We helpen elkaar om tot rust te komen na stressvolle gebeurtenissen.",
          },
          {
            id: "v6",
            text: "Na spanning lukt het meestal om elkaar weer te vinden.",
          },
        ],
      },
    ],
  },
  {
    id: "communicatie",
    name: "Communicatie & patronen",
    subtitle: "Circulaire processen",
    subscales: [
      {
        id: "c_conflictregulatie",
        name: "Conflictregulatie",
        items: [
          {
            id: "c1",
            text: "We kunnen van mening verschillen zonder dat het escaleert.",
          },
          {
            id: "c2",
            text: "We blijven meestal respectvol, ook als we boos zijn.",
          },
        ],
      },
      {
        id: "c_escalatie",
        name: "Escalatiepatronen",
        items: [
          {
            id: "c3",
            text: "Ruzies volgen vaak hetzelfde patroon dat moeilijk te doorbreken is.",
            reverse: true,
          },
          {
            id: "c4",
            text: "Bij spanning vallen we snel terug in oude patronen.",
            reverse: true,
          },
        ],
      },
      {
        id: "c_herstel",
        name: "Herstel & reparatie",
        items: [
          {
            id: "c5",
            text: "Na een conflict lukt het ons om weer contact te maken en te herstellen.",
          },
          {
            id: "c6",
            text: "We kunnen sorry zeggen en oprecht verder gaan.",
          },
        ],
      },
      {
        id: "c_metacommunicatie",
        name: "Meta-communicatie",
        items: [
          {
            id: "c7",
            text: "We kunnen praten over hoe we met elkaar praten.",
          },
          {
            id: "c8",
            text: "We kunnen samen stilstaan bij wat er tussen ons gebeurt in moeilijke momenten.",
          },
        ],
      },
    ],
  },
  {
    id: "structuur",
    name: "Structuur & grenzen",
    subtitle: "Ritme, rollen & kaders",
    subscales: [
      {
        id: "s_regels",
        name: "Duidelijkheid van regels",
        items: [
          {
            id: "s1",
            text: "Het is voor iedereen duidelijk wat de regels en afspraken zijn.",
          },
          {
            id: "s2",
            text: "Gevolgen bij het niet nakomen van afspraken zijn voorspelbaar.",
          },
        ],
      },
      {
        id: "s_consistentie",
        name: "Consistentie tussen huizen",
        items: [
          {
            id: "s3",
            text: "Regels verschillen zo sterk tussen huizen dat dit voor onrust zorgt.",
            reverse: true,
          },
          {
            id: "s4",
            text: "Belangrijke opvoedingsregels proberen we af te stemmen.",
          },
        ],
      },
      {
        id: "s_overgangen",
        name: "Overgangen & wisselmomenten",
        items: [
          {
            id: "s5",
            text: "Wisselmomenten tussen huizen verlopen rustig en voorspelbaar.",
          },
          {
            id: "s6",
            text: "Kinderen weten op tijd waar ze wanneer zijn.",
          },
        ],
      },
      {
        id: "s_rolverdeling",
        name: "Rol- en taakverdeling",
        items: [
          {
            id: "s7",
            text: "Het is duidelijk wie waar verantwoordelijk voor is.",
          },
          {
            id: "s8",
            text: "Kinderen worden niet in een partnerrol getrokken.",
          },
        ],
      },
    ],
  },
  {
    id: "posities",
    name: "Posities & loyaliteit",
    subtitle: "Systemische posities",
    subscales: [
      {
        id: "p_rol_stiefouder",
        name: "Rol van de stiefouder",
        items: [
          {
            id: "p1",
            text: "De plek en verantwoordelijkheden van de stiefouder zijn duidelijk.",
          },
          {
            id: "p2",
            text: "De stiefouder voelt zich niet tussen wal en schip.",
          },
        ],
      },
      {
        id: "p_loyaliteit",
        name: "Loyaliteitsdruk",
        items: [
          {
            id: "p3",
            text: "Kinderen voelen dat ze van beide ouders (en stiefouders) mogen houden.",
          },
          {
            id: "p4",
            text: "Kinderen hebben niet het gevoel te moeten kiezen tussen ouders.",
          },
        ],
      },
      {
        id: "p_samenwerking",
        name: "Samenwerking",
        items: [
          {
            id: "p5",
            text: "Biologische ouder en stiefouder treden zo veel mogelijk als team op.",
          },
          {
            id: "p6",
            text: "We ondermijnen elkaars positie niet waar kinderen bij zijn.",
          },
        ],
      },
      {
        id: "p_generatiegrens",
        name: "Grenzen tussen generaties",
        items: [
          {
            id: "p7",
            text: "Kinderen worden niet betrokken in conflicten tussen volwassenen.",
          },
          {
            id: "p8",
            text: "Ouderzaken blijven zoveel mogelijk bij de volwassenen.",
          },
        ],
      },
    ],
  },
  {
    id: "ritme",
    name: "Gezinsritme & rituelen",
    subtitle: "Kernpijler",
    subscales: [
      {
        id: "g_ritme",
        name: "Dagelijks ritme",
        items: [
          {
            id: "g1",
            text: "Er is een herkenbaar dagelijks ritme dat eerder rust dan onrust geeft.",
          },
          {
            id: "g2",
            text: "Overgangen in de dag (opstaan, eten, slapen) zijn voorspelbaar.",
          },
        ],
      },
      {
        id: "g_rituelen",
        name: "Gezinsrituelen",
        items: [
          {
            id: "g3",
            text: "Er zijn momenten die echt ‘van ons gezin’ zijn.",
          },
          {
            id: "g4",
            text: "We hebben manieren om positieve momenten bewust te markeren.",
          },
        ],
      },
      {
        id: "g_balans",
        name: "Balans oud–nieuw",
        items: [
          {
            id: "g5",
            text: "Er is ruimte voor gewoonten uit eerdere gezinnen.",
          },
          {
            id: "g6",
            text: "Nieuwe gezamenlijke gewoonten voelen niet alsof iemand alles moet inleveren.",
          },
        ],
      },
    ],
  },
];

// --------- Helpers ---------

const LIKERT_VALUES = [1, 2, 3, 4, 5] as const;

function scoreItem(rawValue: number | undefined, reverse?: boolean): number {
  if (!rawValue) return 0;
  if (!reverse) return rawValue;
  // 1–5 schaal → omgekeerd
  return 6 - rawValue;
}

function interpretDomain(scoreA: number, scoreB: number, maxScore: number): string {
  if (scoreA === 0 && scoreB === 0) return "Nog onvoldoende ingevuld om te interpreteren.";

  const avg = (scoreA + scoreB) / 2;
  const diff = Math.abs(scoreA - scoreB);
  const ratio = avg / maxScore;

  let base: string;
  if (ratio < 0.4) base = "Er lijkt sprake van verhoogde spanning op dit domein.";
  else if (ratio < 0.7) base = "Dit domein laat een gemengd beeld zien.";
  else base = "Dit domein lijkt relatief sterk en steunend.";

  let divergence: string;
  if (diff <= maxScore * 0.15)
    divergence = "Beide partners beleven dit domein vergelijkbaar.";
  else if (diff <= maxScore * 0.3)
    divergence = "De beleving verschilt enigszins tussen partners.";
  else
    divergence =
      "Er is een duidelijke discrepantie tussen partnerperspectieven; dit is vaak een belangrijk gespreksonderwerp.";

  return `${base} ${divergence}`;
}

// --------- UI subcomponent voor één item ---------

interface ItemRowProps {
  item: Item;
  value: number | undefined;
  onChange: (value: number) => void;
}

function ItemRow({ item, value, onChange }: ItemRowProps) {
  return (
    <div className="space-y-2">
      <p className="text-sm text-slate-700">{item.text}</p>
      <div className="flex items-center gap-3">
        <div className="flex gap-1">
          {LIKERT_VALUES.map((n) => (
            <button
              key={n}
              type="button"
              onClick={() => onChange(n)}
              className={[
                "h-7 w-7 rounded-full border text-xs flex items-center justify-center",
                value === n
                  ? "bg-slate-900 text-white border-slate-900"
                  : "bg-white text-slate-600 border-slate-300 hover:bg-slate-100",
              ].join(" ")}
            >
              {n}
            </button>
          ))}
        </div>
        <span className="text-[11px] text-slate-500">
          1 = helemaal niet / 5 = helemaal wel
        </span>
      </div>
    </div>
  );
}

// --------- Hoofdcomponent ---------

export default function StiefkompasScanPro() {
  // scores[partner][itemId] = 1–5
  const [scores, setScores] = useState<Record<PartnerId, Record<string, number>>>({
    A: {},
    B: {},
  });

  const [activePartner, setActivePartner] = useState<PartnerId>("A");
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (partner: PartnerId, itemId: string, value: number) => {
    setScores((prev) => ({
      ...prev,
      [partner]: {
        ...prev[partner],
        [itemId]: value,
      },
    }));
  };

  // Bereken domeinscores
  const domainScores = useMemo(() => {
    const result: Record<
      string,
      {
        maxScore: number;
        partnerA: number;
        partnerB: number;
      }
    > = {};

    for (const d of DOMAINS) {
      const allItems = d.subscales.flatMap((s) => s.items);
      const maxScore = allItems.length * 5;

      const sumForPartner = (partner: PartnerId) =>
        allItems.reduce((sum, item) => {
          const raw = scores[partner][item.id];
          return sum + scoreItem(raw, item.reverse);
        }, 0);

      result[d.id] = {
        maxScore,
        partnerA: sumForPartner("A"),
        partnerB: sumForPartner("B"),
      };
    }

    return result;
  }, [scores]);

  return (
    <div className="space-y-10">
      {/* Intro */}
      <section className="space-y-3">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-slate-500">
          Stiefkompas Scan Pro
        </p>
        <h1 className="text-2xl md:text-3xl font-semibold text-slate-900">
          Gezinskompas Scan – Partnerperspectief
        </h1>
        <p className="text-sm md:text-[15px] leading-relaxed text-slate-700 max-w-3xl">
          Deze scan brengt vijf domeinen van de Stiefkompas-methodiek in kaart. Beide
          partners vullen de vragen in. De uitkomsten laten zowel sterktes als
          spanningsvelden zien, én eventuele verschillen in beleving tussen partners.
        </p>
      </section>

      {/* Partner switch */}
      <section className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
        <div className="space-y-1">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            Perspectief
          </p>
          <p className="text-sm text-slate-700">
            Je vult nu in als{" "}
            <span className="font-semibold">
              {activePartner === "A" ? "Partner A" : "Partner B"}
            </span>
            . Je kunt later schakelen om het andere perspectief in te vullen.
          </p>
        </div>
        <div className="inline-flex rounded-full border border-slate-300 bg-white p-1 text-xs font-medium">
          <button
            type="button"
            onClick={() => setActivePartner("A")}
            className={`px-3 py-1 rounded-full ${
              activePartner === "A"
                ? "bg-slate-900 text-white"
                : "text-slate-700 hover:bg-slate-100"
            }`}
          >
            Partner A
          </button>
          <button
            type="button"
            onClick={() => setActivePartner("B")}
            className={`px-3 py-1 rounded-full ${
              activePartner === "B"
                ? "bg-slate-900 text-white"
                : "text-slate-700 hover:bg-slate-100"
            }`}
          >
            Partner B
          </button>
        </div>
      </section>

      {/* Domeinen */}
      <section className="space-y-8">
        {DOMAINS.map((domain) => (
          <div key={domain.id} className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 md:p-8">
            <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
              <div>
                <h2 className="text-lg md:text-xl font-semibold text-slate-900">
                  {domain.name}
                </h2>
                <p className="text-sm text-slate-500">{domain.subtitle}</p>
              </div>
              <p className="text-xs text-slate-400">
                Items voor {activePartner === "A" ? "Partner A" : "Partner B"}
              </p>
            </div>

            <div className="mt-4 grid gap-6 md:grid-cols-2">
              {domain.subscales.map((sub) => (
                <div key={sub.id} className="space-y-3">
                  <h3 className="text-sm font-semibold text-slate-800">
                    {sub.name}
                  </h3>
                  {sub.description && (
                    <p className="text-xs text-slate-500">{sub.description}</p>
                  )}
                  <div className="space-y-4">
                    {sub.items.map((item) => (
                      <ItemRow
                        key={item.id}
                        item={item}
                        value={scores[activePartner][item.id]}
                        onChange={(v) => handleChange(activePartner, item.id, v)}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Actie & resultaten */}
      <section className="space-y-4">
        <button
          type="button"
          onClick={() => setSubmitted(true)}
          className="rounded-full bg-slate-900 px-6 py-2.5 text-sm font-semibold text-white hover:bg-slate-800"
        >
          Analyseer resultaten
        </button>

        {submitted && (
          <div className="mt-4 space-y-6 rounded-2xl border border-slate-200 bg-slate-50 p-6 md:p-8">
            <h2 className="text-lg md:text-xl font-semibold text-slate-900">
              Overzicht per pijler
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-200 text-xs uppercase tracking-[0.18em] text-slate-500">
                    <th className="py-2 text-left">Pijler</th>
                    <th className="py-2 text-right">Score A</th>
                    <th className="py-2 text-right">Score B</th>
                    <th className="py-2 text-right">Verschil</th>
                    <th className="py-2 text-left">Interpretatie</th>
                  </tr>
                </thead>
                <tbody>
                  {DOMAINS.map((d) => {
                    const s = domainScores[d.id];
                    const diff = Math.abs(s.partnerA - s.partnerB);
                    const text = interpretDomain(
                      s.partnerA,
                      s.partnerB,
                      s.maxScore
                    );
                    return (
                      <tr key={d.id} className="border-b border-slate-100 align-top">
                        <td className="py-2 pr-4 font-medium text-slate-900">
                          {d.name}
                        </td>
                        <td className="py-2 text-right tabular-nums text-slate-800">
                          {s.partnerA} / {s.maxScore}
                        </td>
                        <td className="py-2 text-right tabular-nums text-slate-800">
                          {s.partnerB} / {s.maxScore}
                        </td>
                        <td className="py-2 text-right tabular-nums">
                          <span
                            className={[
                              "inline-flex items-center justify-end rounded-full px-2 py-0.5 text-[11px] font-medium",
                              diff === 0
                                ? "bg-emerald-100 text-emerald-700"
                                : diff <= s.maxScore * 0.2
                                ? "bg-amber-100 text-amber-700"
                                : "bg-rose-100 text-rose-700",
                            ].join(" ")}
                          >
                            {diff}
                          </span>
                        </td>
                        <td className="py-2 pl-4 text-xs text-slate-600 max-w-xs">
                          {text}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <p className="text-xs text-slate-500">
              Deze analyse is bedoeld als gespreksstarter. Gebruik je klinische blik
              en contextkennis om de uitkomsten te duiden binnen het geheel van het
              gezinssysteem.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}