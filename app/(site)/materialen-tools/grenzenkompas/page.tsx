import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Grenzenkompas – Stiefkompas",
  description:
    "Basisuitleg van het Grenzenkompas. De volledige pro-variant is beschikbaar via het Stiefkompas-portaal voor gecertificeerde professionals.",
};

export default function GrenzenkompasPage() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <section className="space-y-4 border-b border-slate-200 pb-8">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-slate-500">
          Tool – basis
        </p>

        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 max-w-3xl">
          Grenzenkompas
        </h1>

        <p className="text-sm md:text-base text-slate-700 max-w-3xl leading-relaxed">
          Het Grenzenkompas helpt om grenzen, verwachtingen en verantwoordelijkheden concreet te maken.
          In stiefgezinnen ontstaan veel spanningen niet door “onwil”, maar door impliciete aannames:
          wie gaat waarover, wat is vanzelfsprekend, en wat moet afgesproken worden?
        </p>

        <div className="pt-2 flex flex-wrap gap-3">
          <Link
            href="/materialen-tools"
            className="inline-flex rounded-full border border-slate-200 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-slate-700 hover:bg-slate-50 transition"
          >
            Terug naar tools
          </Link>

          <Link
            href="/training-certificering"
            className="inline-flex rounded-full border border-slate-900 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-slate-900 hover:bg-slate-900 hover:text-white transition"
          >
            Certificering & licentie
          </Link>
        </div>
      </section>

      {/* Intro / uitleg */}
      <section className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-slate-900">
            Waarvoor gebruik je het Grenzenkompas?
          </h2>

          <p className="text-sm md:text-base text-slate-700 leading-relaxed">
            Grenzen gaan niet alleen over “nee zeggen”. Ze gaan over duidelijkheid:
            welke afspraken horen bij dit huis, welke verantwoordelijkheid ligt bij wie,
            en welke verwachtingen zijn realistisch in ieders rol.
          </p>

          <ul className="list-disc pl-5 text-sm md:text-base text-slate-700 leading-relaxed space-y-2">
            <li>Helpt misverstanden voorkomen door verwachtingen expliciet te maken.</li>
            <li>Geeft taal aan grensconflicten zonder te polariseren.</li>
            <li>Ondersteunt bij haalbare afspraken die rust en voorspelbaarheid brengen.</li>
          </ul>

          <p className="text-sm text-slate-600 leading-relaxed">
            Hieronder vind je een basisuitleg. De pro-variant bevat formats, begeleidervragen
            en voorbeeldafspraken via het portaal.
          </p>
        </div>

        {/* Sidebar */}
        <aside className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-3 h-fit">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-slate-500">
            Belangrijk
          </p>
          <p className="text-sm text-slate-700 leading-relaxed">
            Grenzen werken het best als ze <strong>duidelijk</strong> én <strong>relationeel</strong> zijn:
            stevig waar nodig, maar met behoud van verbinding en respect.
          </p>

          <Link
            href="/training-certificering"
            className="inline-flex w-full justify-center rounded-full border border-slate-900 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-slate-900 hover:bg-slate-900 hover:text-white transition"
          >
            Bekijk certificering
          </Link>
        </aside>
      </section>

      {/* Voorbeeldblok */}
      <section className="max-w-3xl space-y-4">
        <h2 className="text-xl font-semibold tracking-tight text-slate-900">
          Voorbeeld: grensconflict verduidelijken
        </h2>

        <p className="text-sm md:text-base text-slate-700 leading-relaxed">
          Een grensconflict gaat vaak over verschillende definities van “normaal”.
          Het Grenzenkompas helpt om het onderwerp te specificeren: gaat het om huisregels,
          opvoedmandaat, privacy, of respectvolle omgang?
        </p>

        <div className="space-y-4">
          <div className="rounded-lg border border-slate-200 bg-white p-4">
            <p className="text-sm font-medium text-slate-800 mb-1">
              Voorbeeld 1 – Huisregel vs. opvoedmandaat
            </p>
            <p className="text-sm text-slate-700">
              “Ik wil dat hij op tijd naar bed gaat, maar ik mag er niets van zeggen.”
            </p>
            <p className="mt-2 text-sm text-slate-600">
              <strong>Kompasvraag:</strong> Is dit een huisregel (iedereen geldt) of opvoeding (ouderrol)?
            </p>
          </div>

          <div className="rounded-lg border border-slate-200 bg-white p-4">
            <p className="text-sm font-medium text-slate-800 mb-1">
              Voorbeeld 2 – Privacy en ruimte
            </p>
            <p className="text-sm text-slate-700">
              “Ik wil niet dat mijn spullen worden gebruikt, maar dat leidt meteen tot ruzie.”
            </p>
            <p className="mt-2 text-sm text-slate-600">
              <strong>Kompasvraag:</strong> Welke persoonlijke grens is nodig zonder de relatie te beschadigen?
            </p>
          </div>

          <div className="rounded-lg border border-slate-200 bg-white p-4">
            <p className="text-sm font-medium text-slate-800 mb-1">
              Voorbeeld 3 – Respectvolle omgang
            </p>
            <p className="text-sm text-slate-700">
              “De toon thuis is hard. Als ik er iets van zeg, wordt het erger.”
            </p>
            <p className="mt-2 text-sm text-slate-600">
              <strong>Kompasvraag:</strong> Welke afspraak is concreet genoeg om de toon te beschermen?
            </p>
          </div>
        </div>

        <p className="text-sm text-slate-600 leading-relaxed">
          Door het onderwerp scherp te krijgen, kun je grensgesprekken uit de emotie halen
          en naar afspraken brengen die iedereen kan begrijpen en naleven.
        </p>
      </section>

      {/* Wanneer inzetten */}
      <section className="max-w-3xl space-y-4">
        <h2 className="text-xl font-semibold tracking-tight text-slate-900">
          Wanneer zet je het Grenzenkompas in?
        </h2>

        <ul className="list-disc pl-5 text-sm md:text-base text-slate-700 leading-relaxed space-y-2">
          <li>Bij terugkerende discussies over regels, consequenties en “wie bepaalt”.</li>
          <li>Als een stiefouder grenzen aangeeft maar geen duidelijk mandaat ervaart.</li>
          <li>Wanneer regels per huis verschillen en dat onrust of botsingen geeft.</li>
          <li>Bij strijd over privacy, spullen, ruimte, toon of respect.</li>
        </ul>
      </section>

      {/* Werkwijze */}
      <section className="max-w-3xl space-y-4">
        <h2 className="text-xl font-semibold tracking-tight text-slate-900">
          Werkwijze in het kort
        </h2>

        <ol className="list-decimal pl-5 text-sm md:text-base text-slate-700 leading-relaxed space-y-2">
          <li>Maak het onderwerp klein en concreet (waar gaat dit precies over?).</li>
          <li>Verken rol en mandaat: wie draagt verantwoordelijkheid, wie spreekt aan?</li>
          <li>Formuleer 1 afspraak die toetsbaar is (“wat doen we voortaan wél?”).</li>
          <li>Evalueer na 2–3 weken en stuur bij (consistentie &gt; perfectie).</li>
        </ol>
      </section>

      {/* Pro tease */}
      <section className="border-t border-slate-200 pt-10">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-slate-900">
            Pro-variant via het portaal
          </h2>
          <p className="text-sm md:text-base text-slate-700 leading-relaxed">
            De pro-variant bevat het volledige werkblad (print/download), begeleidershandleiding,
            voorbeeldafspraken, interventies voor escalatiepreventie en koppeling naar het Stiefkompas Plan.
            Beschikbaar voor gecertificeerde professionals met licentie.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/materialen-tools/grenzenkompas/pro"
              className="inline-flex rounded-full border border-slate-200 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-slate-700 hover:bg-slate-50 transition"
            >
              Naar pro-pagina
            </Link>

            <Link
              href="/training-certificering"
              className="inline-flex rounded-full border border-slate-900 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-slate-900 hover:bg-slate-900 hover:text-white transition"
            >
              Meer over certificering
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}