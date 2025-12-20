import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Stiefkompas – Materialen & Tools",
  description:
    "Overzicht van alle officiële materialen en tools binnen de Stiefkompas-methodiek, waaronder de Gezinskompasscan, Rollenkaart, Loyaliteitsdiagram, Grenzenkompas en het Stiefkompas Plan.",
};

export default function MaterialenToolsPage() {
  const tools = [
    {
      title: "Gezinskompas Scan",
      slug: "gezinskompas-scan",
      description:
        "Een diagnostische scan waarmee professionals snel zicht krijgen op de dynamiek, posities, grenzen en communicatiepatronen binnen het stiefgezin. De scan vormt vaak het startpunt van een traject.",
    },
    {
      title: "Rollenkaart",
      slug: "rollenkaart",
      description:
        "Een visuele kaart die de verschillende rollen binnen het samengestelde gezin inzichtelijk maakt. Helpt bij het onderscheiden van ouder-, stiefouder- en partnerrollen.",
    },
    {
      title: "Loyaliteitsdiagram",
      slug: "loyaliteitsdiagram",
      description:
        "Een diagram voor het in kaart brengen van zichtbare en onzichtbare loyaliteiten. Ondersteunt professionals bij het verhelderen van spanningen en klemposities.",
    },
    {
      title: "Grenzenkompas",
      slug: "grenzenkompas",
      description:
        "Een tool om grenzen, verwachtingen en verantwoordelijkheden binnen het stiefgezin te bespreken. Helpt verwarring rond opvoedrollen te voorkomen.",
    },
    {
      title: "Weekstructuurkaart",
      slug: "weekstructuurkaart",
      description:
        "Een overzichtskaart voor het in beeld brengen van woonritmes, wisselweken, routines en voorspelbaarheid. Maakt overgangsmomenten en stresspieken bespreekbaar.",
    },
    {
      title: "Communicatiekompas",
      slug: "communicatiekompas",
      description:
        "Een analysetool om communicatiepatronen, escalatiemomenten en cirkelprocessen te herkennen. Helpt gezinnen inzicht te krijgen in terugkerende cycli.",
    },
    {
      title: "Gezinsrituelenkaart",
      slug: "gezinsrituelenkaart",
      description:
        "Een tool om bestaande en gewenste rituelen te onderzoeken. Ondersteunt het creëren van nieuwe verbindingen zonder oude familiegeschiedenis uit te wissen.",
    },
    {
      title: "Stiefkompas Plan (routeboek)",
      slug: "stiefkompas-plan",
      description:
        "Het officiële werkboek voor het vormgeven van doelen, afspraken, rituelen en rollen. Wordt gebruikt tijdens trajecten en trainingen.",
    },
  ];

  return (
    <div className="relative bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-stone-50">
        {/* Organische vormen in logo-kleuren */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div
            className="absolute -right-[18%] top-[10%] h-[520px] w-[520px]
            rounded-[60%_40%_30%_70%/60%_30%_70%_40%]
            bg-gradient-to-br from-[#17B3B0]/28 to-[#2C4B9A]/14 blur-2xl"
            style={{ transform: "rotate(-14deg)" }}
          />
          <div
            className="absolute -left-[16%] bottom-[2%] h-[520px] w-[520px]
            rounded-[40%_60%_70%_30%/40%_50%_60%_50%]
            bg-gradient-to-tr from-[#2C4B9A]/22 to-[#F02B8A]/10 blur-2xl"
            style={{ transform: "rotate(18deg)" }}
          />
          <div className="absolute left-[30%] top-[-12%] h-[260px] w-[260px] rounded-full bg-[#F02B8A]/10 blur-3xl" />
        </div>

        {/* Intro */}
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-20 pb-14">
          <div className="max-w-3xl space-y-5">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#2C4B9A]">
              Materialen & tools
            </p>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-[#0E2A47] leading-[1.1]">
              Overzicht van de officiële Stiefkompas-materialen
            </h1>

            <p className="text-sm md:text-base text-slate-700 leading-relaxed">
              De Stiefkompas-methodiek bevat een reeks zorgvuldig ontworpen materialen en
              werkvormen die professionals ondersteunen bij het begeleiden van samengestelde
              gezinnen. Elke tool is gekoppeld aan één of meerdere pijlers van het Kompasmodel
              en sluit aan op systemische en evidence-informed principes.
            </p>

            <p className="text-sm text-slate-600 leading-relaxed">
              Op deze pagina vind je per tool een basisuitleg. De uitgebreide pro-variant
              (formats, handleidingen, downloads) is beschikbaar via het Stiefkompas-portaal
              voor gecertificeerde professionals met licentie.
            </p>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-14 space-y-14">
        {/* Tools Grid */}
        <section className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool, i) => {
            const accent =
              i % 3 === 0 ? "teal" : i % 3 === 1 ? "blue" : "magenta";

            const badge =
              accent === "teal"
                ? "bg-[#17B3B0]/10 text-[#0E2A47]"
                : accent === "blue"
                ? "bg-[#2C4B9A]/10 text-[#0E2A47]"
                : "bg-[#F02B8A]/10 text-[#0E2A47]";

            const border =
              accent === "teal"
                ? "hover:border-[#17B3B0]/30"
                : accent === "blue"
                ? "hover:border-[#2C4B9A]/30"
                : "hover:border-[#F02B8A]/30";

            return (
              <div
                key={tool.slug}
                className={`rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col ${border}`}
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h2 className="text-lg font-semibold text-[#0E2A47] tracking-tight">
                    {tool.title}
                  </h2>

                  <span
                    className={`shrink-0 rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] ${badge}`}
                  >
                    Basis
                  </span>
                </div>

                <p className="text-sm text-slate-700 leading-relaxed mb-6 flex-1">
                  {tool.description}
                </p>

                <div className="pt-2 space-y-3">
                  <Link
                    href={`/materialen-tools/${tool.slug}`}
                    className="inline-flex w-full justify-center rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 hover:bg-slate-50 transition"
                  >
                    Bekijk basisuitleg
                  </Link>

                  <p className="text-center text-xs text-slate-500 leading-relaxed">
                    Pro-variant beschikbaar via portaal voor gecertificeerde professionals.
                  </p>
                </div>
              </div>
            );
          })}
        </section>

        {/* CTA */}
        <section className="border-t border-slate-200 pt-10">
          <div className="space-y-4 max-w-3xl">
            <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-[#0E2A47]">
              Toegang tot pro-materialen via certificering & licentie
            </h2>
            <p className="text-sm md:text-base text-slate-700 leading-relaxed">
              De pro-materialen van Stiefkompas zijn bedoeld voor professioneel gebruik.
              Na certificering en licentie krijg je toegang tot het portaal met de volledige
              bibliotheek: downloads, handleidingen, werkkaarten en verdiepende formats.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/training-certificering"
                className="inline-flex rounded-full border border-[#0E2A47] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#0E2A47] hover:bg-[#0E2A47] hover:text-white transition"
              >
                Meer over training & certificering
              </Link>

              <Link
                href="/voor-coaches"
                className="inline-flex rounded-full border border-slate-200 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700 hover:bg-slate-50 transition"
              >
                Voor coaches
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}