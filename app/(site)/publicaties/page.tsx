import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Stiefkompas – Publicaties & Artikelen",
  description:
    "Wetenschappelijke artikelen, onderzoekssamenvattingen en publicaties over de Stiefkompas-methodiek en dynamiek in samengestelde gezinnen.",
};

export default function PublicatiesPage() {
  const articles = [
    {
      title: "De dynamiek van samengestelde gezinnen in systemisch perspectief",
      type: "Onderzoeksartikel",
      description:
        "Een theoretische verkenning van systeemdynamiek binnen stiefgezinnen en de implicaties voor hulpverlening.",
      status: "Binnenkort beschikbaar",
    },
    {
      title: "Hechting en stressregulatie bij wisselritmes",
      type: "Whitepaper",
      description:
        "Een analyse van stresspieken, overgangsmomenten en hechtingsprocessen binnen co-ouderschapsregelingen.",
      status: "Binnenkort beschikbaar",
    },
    {
      title: "Loyaliteit en positie in stiefsystemen",
      type: "Theoretisch artikel",
      description:
        "Een bespreking van verticale en horizontale loyaliteit, klemposities en impliciete gezinsverwachtingen.",
      status: "Binnenkort beschikbaar",
    },
    {
      title: "Communicatiepatronen in samengestelde gezinnen",
      type: "Casusbespreking",
      description:
        "Herkenning van circulaire patronen, escalaties en de rol van systemische taal in gesprekken.",
      status: "Binnenkort beschikbaar",
    },
    {
      title: "Het Kompasmodel als analysekader voor teams",
      type: "Professioneel artikel",
      description:
        "Toepassing van het Stiefkompas-model binnen jeugdzorg, wijkteams en psychosociaal werk.",
      status: "Binnenkort beschikbaar",
    },
  ];

  return (
    <div className="space-y-14">
      {/* Intro */}
      <section className="space-y-5 border-b border-slate-200 pb-10">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-slate-500">
          Publicaties & Artikelen
        </p>

        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 max-w-4xl">
          Artikelen, whitepapers en theoretische publicaties over de Stiefkompas-methodiek
        </h1>

        <p className="text-sm md:text-base text-slate-700 max-w-3xl leading-relaxed">
          Deze kennisbank bevat artikelen, whitepapers en onderzoekssamenvattingen die 
          de wetenschappelijke en methodische onderbouwing van Stiefkompas verder toelichten. 
          De publicaties richten zich op systeemtheorie, hechting, loyaliteit, communicatie, 
          stressregulatie en andere thema’s die relevant zijn binnen samengestelde gezinnen.
        </p>

        <p className="text-sm text-slate-600 max-w-3xl leading-relaxed">
          De komende periode worden nieuwe artikelen gepubliceerd. Gecertificeerde 
          professionals krijgen daarnaast toegang tot verdiepende documenten, 
          praktijkvoorbeelden en literatuurverwijzingen.
        </p>
      </section>

      {/* Artikelen grid */}
      <section className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((a) => (
          <div
            key={a.title}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <h2 className="text-lg font-semibold text-slate-900 tracking-tight mb-1">
              {a.title}
            </h2>

            <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500 mb-3">
              {a.type}
            </p>

            <p className="text-sm text-slate-700 leading-relaxed mb-4">
              {a.description}
            </p>

            <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
              {a.status}
            </p>
          </div>
        ))}
      </section>

      {/* CTA to training */}
      <section className="border-t border-slate-200 pt-10">
        <div className="space-y-4 max-w-3xl">
          <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-slate-900">
            Verdieping voor professionals
          </h2>
          <p className="text-sm md:text-base text-slate-700 leading-relaxed">
            Tijdens de verdiepingstraining leren deelnemers werken met het Kompasmodel en 
            ontvangen zij aanvullende literatuur en casusmateriaal dat niet publiekelijk 
            beschikbaar is.
          </p>

          <Link
            href="/training-certificering"
            className="inline-flex rounded-full border border-slate-900 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-slate-900 hover:bg-slate-900 hover:text-white transition"
          >
            Lees meer over de training
          </Link>
        </div>
      </section>
    </div>
  );
}