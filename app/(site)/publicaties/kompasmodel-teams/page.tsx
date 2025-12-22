import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Het Kompasmodel als analysekader voor teams – Stiefkompas",
  description:
    "Professioneel artikel: toepassing van het Stiefkompas Kompasmodel als analysekader binnen jeugdzorg, wijkteams en psychosociaal werk. (Alleen voor professionals)",
};

function SectionHeading({
  id,
  eyebrow,
  title,
}: {
  id: string;
  eyebrow?: string;
  title: string;
}) {
  return (
    <div id={id} className="not-prose scroll-mt-28">
      <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-slate-50 p-6 shadow-sm">
        {eyebrow ? (
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#2C4B9A]">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="mt-2 text-2xl md:text-3xl font-semibold tracking-tight text-[#0E2A47]">
          {title}
        </h2>
      </div>
    </div>
  );
}

function SubHeading({ title }: { title: string }) {
  return (
    <div className="not-prose mt-10">
      <h3 className="inline-flex items-center gap-2 text-lg font-semibold tracking-tight text-[#2C4B9A]">
        <span className="h-2.5 w-2.5 rounded-full bg-[#2C4B9A]" />
        {title}
      </h3>
    </div>
  );
}

export default function KompasmodelTeamsPage() {
  return (
    <article className="mx-auto max-w-4xl space-y-12 pb-28">
      {/* Header */}
      <header className="space-y-5 border-b border-slate-200 pb-10">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#2C4B9A]">
          Professioneel artikel · Alleen voor professionals
        </p>

        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-[#0E2A47]">
          Het Kompasmodel als analysekader voor teams
        </h1>

        <p className="text-sm md:text-base text-slate-700 max-w-3xl leading-relaxed">
          Dit artikel is onderdeel van de professionele verdieping. Het laat zien hoe teams in
          jeugdzorg, wijkteams en psychosociaal werk het Kompasmodel kunnen gebruiken als
          analysekader: om casuïstiek te ordenen, onderstromen te herkennen en interventies
          af te stemmen zonder te vervallen in losse tips of “brandjes blussen”.
        </p>

        <div className="flex flex-wrap gap-2 pt-1">
          <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-700">
            Professioneel
          </span>
          <span className="inline-flex items-center rounded-full bg-[#2C4B9A]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#0E2A47]">
            Leestijd ± 15–18 minuten
          </span>
          <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-700">
            Toepassing: teams & casuïstiek
          </span>
        </div>
      </header>

      {/* Access gate */}
      <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              Toegang vereist
            </p>
            <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-[#0E2A47]">
              Alleen voor gecertificeerde professionals
            </h2>
            <p className="text-sm md:text-base text-slate-700 leading-relaxed max-w-2xl">
              Dit verdiepende document is beschikbaar binnen de training & certificering.
              In de training ontvang je de volledige uitwerking (incl. werkbladen, casusformats,
              overlegstructuren en voorbeeldinterventies).
            </p>
          </div>

          <div className="flex flex-wrap gap-3 pt-1">
            <Link
              href="/training-certificering"
              className="inline-flex rounded-full border border-[#0E2A47] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#0E2A47] hover:bg-[#0E2A47] hover:text-white transition"
            >
              Toegang via training
            </Link>

            <Link
              href="/publicaties"
              className="inline-flex rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700 hover:bg-slate-50 transition"
            >
              Terug naar publicaties
            </Link>
          </div>
        </div>
      </section>

      {/* Preview (public-friendly) */}
      <section className="rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-slate-50 p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
          Publieke preview
        </p>

        <div className="prose prose-slate max-w-none prose-p:leading-relaxed prose-strong:text-slate-900 mt-5">
          <p>
            Teams die werken met samengestelde gezinnen lopen vaak tegen dezelfde uitdaging aan:
            casuïstiek is gelaagd, emoties lopen hoog op, en “wat er speelt” wisselt per gesprek.
            Het Kompasmodel helpt om samen naar hetzelfde te kijken — met een gedeelde taal en
            een vaste volgorde.
          </p>

          <p>
            In de professionele verdieping gebruiken teams het Kompasmodel als{" "}
            <strong>analysekader</strong> (wat zien we?), als{" "}
            <strong>prioriteringskader</strong> (wat eerst?), en als{" "}
            <strong>interventiekader</strong> (wat past hierbij?). Zo voorkom je dat de focus
            telkens verschuift naar symptoombestrijding, terwijl de onderliggende dynamiek blijft.
          </p>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">1. Ordenen</p>
            <p className="mt-3 text-sm leading-relaxed text-slate-700">
              Breng signalen, gebeurtenissen en onderstromen onder in de vijf pijlers, zodat het team
              dezelfde kaart gebruikt.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">2. Prioriteren</p>
            <p className="mt-3 text-sm leading-relaxed text-slate-700">
              Kies één “hefboom”: wat geeft de meeste rust/veiligheid als je daar als eerste op inzet?
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">3. Afstemmen</p>
            <p className="mt-3 text-sm leading-relaxed text-slate-700">
              Stem interventies af op fase, positie, stressniveau en draagkracht van gezin én netwerk.
            </p>
          </div>
        </div>
      </section>

      {/* What pros get */}
      <section className="space-y-6">
        <SectionHeading
          id="wat-krijg-je"
          eyebrow="Voor professionals"
          title="Wat je in de volledige versie ontvangt"
        />

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              Casusformat & overlegstructuur
            </p>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li>• Teamformat om casuïstiek te structureren langs de vijf pijlers</li>
              <li>• “Wat zien we?” vs “Wat betekent het?” vs “Wat doen we?”</li>
              <li>• Snelle triage: wat is eerst nodig (veiligheid/ritme/positie)?</li>
              <li>• Voorbeeldvragen voor intake en evaluatie</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              Interventiebibliotheek
            </p>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li>• Micro-interventies per pijler (laagdrempelig en uitvoerbaar)</li>
              <li>• Red flags en valkuilen (wat werkt vaak averechts?)</li>
              <li>• Praktische afspraken voor wisselmomenten en escalaties</li>
              <li>• Teamtaal: neutraal benoemen zonder moraliserend te worden</li>
            </ul>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            Extra (professionele verdieping)
          </p>
          <p className="mt-3 text-sm leading-relaxed text-slate-700">
            Inclusief: voorbeeldcasussen (geanonimiseerd), een “pijler-scan” voor teams, en
            een korte handleiding om het Kompasmodel in MDO/casuïstiekoverleg te borgen
            (rollen, tijdsloten, verslaglegging).
          </p>
        </div>
      </section>

      {/* Why gated */}
      <section className="space-y-6">
        <SectionHeading
          id="waarom-afgeschermd"
          eyebrow="Toelichting"
          title="Waarom dit artikel is afgeschermd"
        />

        <div className="prose prose-slate max-w-none prose-p:leading-relaxed prose-strong:text-slate-900">
          <p>
            De volledige versie bevat werkvormen, formats en voorbeeldinterventies die bedoeld zijn
            voor professionele contexten. We willen dat teams hiermee werken binnen een gedeelde
            methodiek en met voldoende context (taal, ethiek, grenzen, veiligheid en implementatie),
            zodat het niet los wordt toegepast of verkeerd geïnterpreteerd.
          </p>

          <p>
            Wil je als team met het Kompasmodel werken? Dan is het meest helpend om de training te
            volgen, zodat jullie dezelfde basis, terminologie en werkwijze hebben.
          </p>
        </div>
      </section>

      {/* Lees ook */}
      <section className="not-prose mt-16 border-t border-slate-200 pt-10">
        <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-[#0E2A47]">
          Lees ook
        </h2>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <Link
            href="/publicaties/systemisch-perspectief"
            className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Onderzoeksartikel
            </p>
            <h3 className="mt-2 text-lg font-semibold text-[#0E2A47] group-hover:underline">
              De dynamiek van samengestelde gezinnen in systemisch perspectief
            </h3>
            <p className="mt-2 text-sm text-slate-700 leading-relaxed">
              Subsystemen, grenzen en feedbacklussen — en wat dat betekent voor hulpverlening.
            </p>
          </Link>

          <Link
            href="/publicaties/hechting-wisselritmes"
            className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Whitepaper
            </p>
            <h3 className="mt-2 text-lg font-semibold text-[#0E2A47] group-hover:underline">
              Hechting en stressregulatie bij wisselritmes
            </h3>
            <p className="mt-2 text-sm text-slate-700 leading-relaxed">
              Over stresspieken bij overgangen en hoe ritme/rituelen veiligheid vergroten.
            </p>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-slate-200 pt-10">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            Toegang tot professionals-content
          </p>
          <h2 className="mt-3 text-xl md:text-2xl font-semibold tracking-tight text-[#0E2A47]">
            Werk je in jeugdzorg, wijkteam of psychosociaal werk?
          </h2>
          <p className="mt-3 text-sm md:text-base text-slate-700 leading-relaxed max-w-3xl">
            Via de training krijg je toegang tot het volledige artikel inclusief casusformats,
            overlegstructuren en interventiebibliotheek — en leer je hoe je dit borgt in je team.
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/training-certificering"
              className="inline-flex rounded-full border border-[#0E2A47] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#0E2A47] hover:bg-[#0E2A47] hover:text-white transition"
            >
              Lees meer over de training
            </Link>

            <Link
              href="/publicaties"
              className="inline-flex rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700 hover:bg-slate-50 transition"
            >
              Terug naar publicaties
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}