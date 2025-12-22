"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type Article = {
  title: string;
  type:
    | "Onderzoeksartikel"
    | "Whitepaper"
    | "Theoretisch artikel"
    | "Casusbespreking"
    | "Professioneel artikel";
  description: string;
  status: "Binnenkort beschikbaar" | "Beschikbaar" | "Alleen voor professionals";
  href?: string;
};

type FilterKey = "Alles" | "Theorie" | "Praktijk" | "Whitepapers" | "Professioneel";

const TYPE_TO_CATEGORY: Record<Article["type"], Exclude<FilterKey, "Alles">> = {
  Onderzoeksartikel: "Theorie",
  "Theoretisch artikel": "Theorie",
  Casusbespreking: "Praktijk",
  Whitepaper: "Whitepapers",
  "Professioneel artikel": "Professioneel",
};

export default function PublicatiesClient() {
  const [activeFilter, setActiveFilter] = useState<FilterKey>("Alles");

  const articles: Article[] = [
    {
      title: "De dynamiek van samengestelde gezinnen in systemisch perspectief",
      type: "Onderzoeksartikel",
      description:
        "Een theoretische verkenning van systeemdynamiek binnen stiefgezinnen en de implicaties voor hulpverlening.",
      status: "Beschikbaar",
      href: "/publicaties/systemisch-perspectief",
    },
    {
      title: "Hechting en stressregulatie bij wisselritmes",
      type: "Whitepaper",
      description:
        "Een analyse van stresspieken, overgangsmomenten en hechtingsprocessen binnen co-ouderschapsregelingen.",
      status: "Beschikbaar",
      href: "/publicaties/hechting-wisselritmes",
    },
    {
      title: "Loyaliteit en positie in stiefsystemen",
      type: "Theoretisch artikel",
      description:
        "Een bespreking van verticale en horizontale loyaliteit, klemposities en impliciete gezinsverwachtingen.",
      status: "Beschikbaar",
      href: "/publicaties/loyaliteit-positie",
    },
    {
      title: "Communicatiepatronen in samengestelde gezinnen",
      type: "Casusbespreking",
      description:
        "Herkenning van circulaire patronen, escalaties en de rol van systemische taal in gesprekken.",
      status: "Beschikbaar",
        href: "/publicaties/communicatiepatronen",
    },
    {
      title: "Het Kompasmodel als analysekader voor teams",
      type: "Professioneel artikel",
      description:
        "Toepassing van het Stiefkompas-model binnen jeugdzorg, wijkteams en psychosociaal werk.",
      status: "Alleen voor professionals",
       href: "/publicaties/kompasmodel-teams",
    },
    // Voorbeeld van later:
    // {
    //   title: "Praktijknotitie: de rol van de stiefouder in fase 1",
    //   type: "Professioneel artikel",
    //   description: "Korte handreiking voor coaches: positionering, tempo en grenzen.",
    //   status: "Beschikbaar",
    //   href: "/publicaties/rol-stiefouder-fase-1",
    // },
  ];

  const filters: { key: FilterKey; label: string }[] = [
    { key: "Alles", label: "Alles" },
    { key: "Theorie", label: "Theorie" },
    { key: "Praktijk", label: "Praktijk" },
    { key: "Whitepapers", label: "Whitepapers" },
    { key: "Professioneel", label: "Professioneel" },
  ];

  const filtered = useMemo(() => {
    if (activeFilter === "Alles") return articles;
    return articles.filter((a) => TYPE_TO_CATEGORY[a.type] === activeFilter);
  }, [activeFilter, articles]);

  return (
    <div className="space-y-14">
      {/* Intro */}
      <section className="space-y-5 border-b border-slate-200 pb-10">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#2C4B9A]">
          Publicaties & Artikelen
        </p>

        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#0E2A47] max-w-4xl">
          Artikelen, whitepapers en publicaties over de Stiefkompas-methodiek
        </h1>

        <p className="text-sm md:text-base text-slate-700 max-w-3xl leading-relaxed">
          Deze kennisbank bevat artikelen, whitepapers en onderzoekssamenvattingen die de
          methodische onderbouwing van Stiefkompas toelichten. Thema’s zijn onder andere
          systeemtheorie, hechting, loyaliteit, communicatie en stressregulatie binnen
          samengestelde gezinnen.
        </p>

        <p className="text-sm text-slate-600 max-w-3xl leading-relaxed">
          Nieuwe publicaties verschijnen de komende periode. Gecertificeerde professionals
          krijgen daarnaast toegang tot verdiepende documenten, praktijkvoorbeelden en
          literatuurverwijzingen.
        </p>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 pt-2">
          {filters.map((f) => {
            const isActive = f.key === activeFilter;
            return (
              <button
                key={f.key}
                type="button"
                onClick={() => setActiveFilter(f.key)}
                className={[
                  "inline-flex items-center rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em]",
                  "transition focus:outline-none focus:ring-2 focus:ring-[#0E2A47]/25",
                  isActive
                    ? "bg-[#0E2A47] text-white"
                    : "border border-slate-200 text-slate-700 hover:bg-slate-50",
                ].join(" ")}
                aria-pressed={isActive}
              >
                {f.label}
              </button>
            );
          })}
        </div>

        {/* Result count */}
        <p className="text-xs text-slate-500">
          {filtered.length} publicatie{filtered.length === 1 ? "" : "s"} in{" "}
          {activeFilter.toLowerCase()}
        </p>
      </section>

      {/* Artikelen grid */}
      <section className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((a, idx) => {
          const accent = idx % 3 === 0 ? "teal" : idx % 3 === 1 ? "magenta" : "blue";

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

          const statusColor =
            a.status === "Beschikbaar"
              ? "text-emerald-600"
              : a.status === "Alleen voor professionals"
              ? "text-[#0E2A47]"
              : accent === "teal"
              ? "text-[#17B3B0]"
              : accent === "magenta"
              ? "text-[#F02B8A]"
              : "text-[#2C4B9A]";

          const category = TYPE_TO_CATEGORY[a.type];

          return (
            <div
              key={a.title}
              className={`group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow ${accentRing}`}
            >
              <h2 className="text-lg font-semibold text-[#0E2A47] tracking-tight">
                {a.title}
              </h2>

              <div className="mt-3 flex flex-wrap items-center gap-2">
                <p
                  className={`inline-flex items-center rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] ${badge}`}
                >
                  {a.type}
                </p>
                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                  {category}
                </span>
              </div>

              <p className="mt-3 text-sm text-slate-700 leading-relaxed">
                {a.description}
              </p>

              <p
                className={`mt-4 text-xs font-semibold uppercase tracking-[0.18em] ${statusColor}`}
              >
                {a.status}
              </p>

              <div className="mt-5">
                {a.status === "Beschikbaar" && a.href ? (
                  <Link
                    href={a.href}
                    className="inline-flex rounded-full border border-[#0E2A47] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#0E2A47] hover:bg-[#0E2A47] hover:text-white transition"
                  >
                    Bekijk publicatie
                  </Link>
                ) : a.status === "Alleen voor professionals" ? (
                  <Link
                    href="/training-certificering"
                    className="inline-flex rounded-full border border-slate-200 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700 hover:bg-slate-50 transition"
                  >
                    Toegang via portaal
                  </Link>
                ) : (
                  <span className="inline-flex rounded-full border border-slate-200 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                    Binnenkort
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </section>

      {/* Bronnen / literatuur */}
      <section className="border-t border-slate-200 pt-10">
        <div className="space-y-4 max-w-3xl">
          <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-[#0E2A47]">
            Bronnen & literatuur
          </h2>
          <p className="text-sm md:text-base text-slate-700 leading-relaxed">
            Stiefkompas sluit aan bij inzichten uit systeemtheorie, hechtingsonderzoek en
            literatuur over scheiding en gezinsdynamiek. In verdiepende documenten voor
            professionals werken we met literatuurlijsten en verwijzingen per thema.
          </p>

          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              Binnenkort op deze pagina
            </p>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li>• Literatuurlijst per pijler (Kompasmodel)</li>
              <li>• Korte onderzoekssamenvattingen per thema</li>
              <li>• Praktijknotities en casusreflecties (geanonimiseerd)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-slate-200 pt-10">
        <div className="space-y-4 max-w-3xl">
          <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-[#0E2A47]">
            Verdieping voor professionals
          </h2>
          <p className="text-sm md:text-base text-slate-700 leading-relaxed">
            Tijdens de training leren deelnemers werken met het Kompasmodel en ontvangen zij
            aanvullende literatuur, casusmateriaal en tools die niet publiekelijk beschikbaar zijn.
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