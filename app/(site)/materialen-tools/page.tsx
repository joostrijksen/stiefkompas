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
    <div className="space-y-14">
      {/* Intro */}
      <section className="space-y-5 border-b border-slate-200 pb-10">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-slate-500">
          Materialen & Tools
        </p>

        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 max-w-3xl">
          Overzicht van de officiële Stiefkompas-materialen
        </h1>

        <p className="text-sm md:text-base text-slate-700 max-w-3xl leading-relaxed">
          De Stiefkompas-methodiek bevat een reeks zorgvuldig ontworpen materialen en
          werkvormen die professionals ondersteunen bij het begeleiden van samengestelde
          gezinnen. Elke tool is gekoppeld aan één of meerdere pijlers van het Kompasmodel
          en sluit aan op systemische en evidence-informed principes.
        </p>

        <p className="text-sm text-slate-600 max-w-3xl leading-relaxed">
          Op deze pagina vind je per tool een basisuitleg. De uitgebreide pro-variant
          (formats, handleidingen, downloads) is beschikbaar via het Stiefkompas-portaal
          voor gecertificeerde professionals met licentie.
        </p>
      </section>

      {/* Tools Grid */}
      <section className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool) => (
          <div
            key={tool.slug}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col"
          >
            <div className="flex items-start justify-between gap-3">
              <h2 className="text-lg font-semibold text-slate-900 tracking-tight mb-2">
                {tool.title}
              </h2>

              <span className="shrink-0 rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-slate-600">
                Basis
              </span>
            </div>

            <p className="text-sm text-slate-700 leading-relaxed mb-6 flex-1">
              {tool.description}
            </p>

            <div className="pt-2 space-y-3">
              <Link
                href={`/materialen-tools/${tool.slug}`}
                className="inline-flex w-full justify-center rounded-full border border-slate-200 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-slate-700 hover:bg-slate-50 transition"
              >
                Bekijk basisuitleg
              </Link>

              <p className="text-center text-xs text-slate-500 leading-relaxed">
                Pro-variant beschikbaar via portaal voor gecertificeerde professionals.
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* CTA for certification */}
      <section className="border-t border-slate-200 pt-10">
        <div className="space-y-4 max-w-3xl">
          <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-slate-900">
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
              className="inline-flex rounded-full border border-slate-900 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-slate-900 hover:bg-slate-900 hover:text-white transition"
            >
              Meer over training & certificering
            </Link>

            <Link
              href="/voor-coaches"
              className="inline-flex rounded-full border border-slate-200 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-slate-700 hover:bg-slate-50 transition"
            >
              Voor coaches
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}