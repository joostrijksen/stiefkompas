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
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#2C4B9A]">
          Publicaties & Artikelen
        </p>

        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#0E2A47] max-w-4xl">
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
        {articles.map((a, idx) => {
          // subtiele afwisseling: teal / magenta / blue
          const accent =
            idx % 3 === 0 ? "teal" : idx % 3 === 1 ? "magenta" : "blue";

          const accentRing =
            accent === "teal"
              ? "hover:border-[#17B3B0]/35"
              : accent === "magenta"
              ? "hover:border-[#F02B8A]/35"
              : "hover:border-[#2C4B9A]/35";

          const badge =
            accent === "teal"
              ? "bg-[#17B3B0]/12 text-[#0E2A47]"
              : accent === "magenta"
              ? "bg-[#F02B8A]/12 text-[#0E2A47]"
              : "bg-[#2C4B9A]/12 text-[#0E2A47]";

          const status =
            accent === "teal"
              ? "text-[#17B3B0]"
              : accent === "magenta"
              ? "text-[#F02B8A]"
              : "text-[#2C4B9A]";

          return (
            <div
              key={a.title}
              className={`group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow ${accentRing}`}
            >
              <div className="flex items-start justify-between gap-3">
                <h2 className="text-lg font-semibold text-[#0E2A47] tracking-tight mb-1">
                  {a.title}
                </h2>
              </div>

              <p
                className={`inline-flex items-center rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] mb-3 ${badge}`}
              >
                {a.type}
              </p>

              <p className="text-sm text-slate-700 leading-relaxed mb-4">
                {a.description}
              </p>

              <p className={`text-xs font-semibold uppercase tracking-[0.18em] ${status}`}>
                {a.status}
              </p>
            </div>
          );
        })}
      </section>

      {/* CTA to training */}
      <section className="border-t border-slate-200 pt-10">
        <div className="space-y-4 max-w-3xl">
          <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-[#0E2A47]">
            Verdieping voor professionals
          </h2>
          <p className="text-sm md:text-base text-slate-700 leading-relaxed">
            Tijdens de verdiepingstraining leren deelnemers werken met het Kompasmodel en
            ontvangen zij aanvullende literatuur en casusmateriaal dat niet publiekelijk
            beschikbaar is.
          </p>

          <Link
            href="/training-certificering"
            className="inline-flex rounded-full border border-[#0E2A47] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#0E2A47] hover:bg-[#0E2A47] hover:text-white transition"
          >
            Lees meer over de training
          </Link>
        </div>
      </section>
    </div>
  );
}