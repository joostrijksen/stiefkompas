import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Communicatiekompas – Stiefkompas",
  description:
    "Basisuitleg van het Communicatiekompas. De volledige pro-variant is beschikbaar via het Stiefkompas-portaal voor gecertificeerde professionals.",
};

export default function CommunicatiekompasPage() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <section className="space-y-4 border-b border-slate-200 pb-8">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-slate-500">
          Tool – basis
        </p>

        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 max-w-3xl">
          Communicatiekompas
        </h1>

        <p className="text-sm md:text-base text-slate-700 max-w-3xl leading-relaxed">
          Het Communicatiekompas helpt om terugkerende communicatiepatronen in stiefgezinnen
          te herkennen en te begrijpen. Niet om schuld aan te wijzen, maar om te zien
          wat er gebeurt wanneer spanning oploopt en gesprekken vastlopen.
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
            Waarvoor gebruik je het Communicatiekompas?
          </h2>

          <p className="text-sm md:text-base text-slate-700 leading-relaxed">
            In stiefgezinnen ontstaan communicatiepatronen vaak sneller en scherper.
            Oude ervaringen, loyaliteiten en rolverwarring kunnen gesprekken laten
            escaleren of juist laten verstommen. Het Communicatiekompas maakt deze
            patronen zichtbaar en bespreekbaar.
          </p>

          <ul className="list-disc pl-5 text-sm md:text-base text-slate-700 leading-relaxed space-y-2">
            <li>Helpt terugkerende escalatie- of vermijdingspatronen herkennen.</li>
            <li>Geeft taal aan wat er gebeurt vóórdat een gesprek vastloopt.</li>
            <li>Ondersteunt bij het vertragen en herformuleren van gesprekken.</li>
          </ul>

          <p className="text-sm text-slate-600 leading-relaxed">
            Hieronder vind je een basisuitleg met voorbeelden. De pro-variant bevat
            verdiepende analyse, interventies en begeleiderskaders via het portaal.
          </p>
        </div>

        {/* Sidebar */}
        <aside className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-3 h-fit">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-slate-500">
            Belangrijk
          </p>
          <p className="text-sm text-slate-700 leading-relaxed">
            Communicatie gaat zelden alleen over woorden. Let ook op tempo,
            toon, timing en wat niet gezegd wordt.
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
          Voorbeeld: terugkerend communicatiepatroon
        </h2>

        <p className="text-sm md:text-base text-slate-700 leading-relaxed">
          Veel gezinnen herkennen vaste patronen. Het Communicatiekompas helpt
          om die patronen te ontrafelen zonder oordeel.
        </p>

        <div className="space-y-4">
          <div className="rounded-lg border border-slate-200 bg-white p-4">
            <p className="text-sm font-medium text-slate-800 mb-1">
              Voorbeeld 1 – Aanval en terugtrekking
            </p>
            <p className="text-sm text-slate-700">
              De ene partner benoemt een probleem, de ander haakt af of wordt stil.
            </p>
            <p className="mt-2 text-sm text-slate-600">
              <strong>Kompasvraag:</strong> wat gebeurt er bij ieder vlak vóórdat het gesprek stopt?
            </p>
          </div>

          <div className="rounded-lg border border-slate-200 bg-white p-4">
            <p className="text-sm font-medium text-slate-800 mb-1">
              Voorbeeld 2 – Escalatie
            </p>
            <p className="text-sm text-slate-700">
              Gesprekken beginnen rustig maar eindigen steeds in verwijten.
            </p>
            <p className="mt-2 text-sm text-slate-600">
              <strong>Kompasvraag:</strong> welk moment markeert de omslag in toon of tempo?
            </p>
          </div>

          <div className="rounded-lg border border-slate-200 bg-white p-4">
            <p className="text-sm font-medium text-slate-800 mb-1">
              Voorbeeld 3 – Vermijding
            </p>
            <p className="text-sm text-slate-700">
              Belangrijke onderwerpen worden uitgesteld om ruzie te voorkomen.
            </p>
            <p className="mt-2 text-sm text-slate-600">
              <strong>Kompasvraag:</strong> wat wordt beschermd door het vermijden van dit gesprek?
            </p>
          </div>
        </div>

        <p className="text-sm text-slate-600 leading-relaxed">
          Door patronen te herkennen, ontstaat ruimte om gesprekken te vertragen
          en nieuwe keuzes te maken in hoe en wanneer je iets bespreekt.
        </p>
      </section>

      {/* Wanneer inzetten */}
      <section className="max-w-3xl space-y-4">
        <h2 className="text-xl font-semibold tracking-tight text-slate-900">
          Wanneer zet je het Communicatiekompas in?
        </h2>

        <ul className="list-disc pl-5 text-sm md:text-base text-slate-700 leading-relaxed space-y-2">
          <li>Bij terugkerende ruzies of vastlopende gesprekken.</li>
          <li>Wanneer gesprekken snel escaleren of juist helemaal stilvallen.</li>
          <li>Als partners elkaar niet meer lijken te bereiken.</li>
          <li>Wanneer onderwerpen steeds terugkomen zonder verandering.</li>
        </ul>
      </section>

      {/* Werkwijze */}
      <section className="max-w-3xl space-y-4">
        <h2 className="text-xl font-semibold tracking-tight text-slate-900">
          Werkwijze in het kort
        </h2>

        <ol className="list-decimal pl-5 text-sm md:text-base text-slate-700 leading-relaxed space-y-2">
          <li>Breng het terugkerende patroon in kaart (wie doet wat, wanneer?).</li>
          <li>Verken wat ieder probeert te beschermen of te bereiken.</li>
          <li>Vertraag het gesprek en benoem het proces in plaats van de inhoud.</li>
          <li>Formuleer één kleine wijziging in timing, toon of volgorde.</li>
        </ol>
      </section>

      {/* Pro tease */}
      <section className="border-t border-slate-200 pt-10">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-slate-900">
            Pro-variant via het portaal
          </h2>
          <p className="text-sm md:text-base text-slate-700 leading-relaxed">
            De pro-variant bevat analysemodellen, begeleiderskaders, interventies
            voor escalatie en herstel, en koppeling naar Rollen, Grenzen en Loyaliteit.
            Beschikbaar voor gecertificeerde professionals met licentie.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/materialen-tools/communicatiekompas/pro"
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