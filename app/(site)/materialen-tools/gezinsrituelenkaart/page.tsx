import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gezinsrituelenkaart – Stiefkompas",
  description:
    "Basisuitleg van de Gezinsrituelenkaart. De volledige pro-variant is beschikbaar voor gecertificeerde Stiefkompas-professionals.",
};


export default function GezinsrituelenkaartPage() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <section className="space-y-4 border-b border-slate-200 pb-8">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-slate-500">
          Tool – basis
        </p>

        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 max-w-3xl">
          Gezinsrituelenkaart
        </h1>

        <p className="text-sm md:text-base text-slate-700 max-w-3xl leading-relaxed">
          De Gezinsrituelenkaart helpt om zicht te krijgen op bestaande en gewenste rituelen
          binnen het samengestelde gezin. Rituelen geven houvast, betekenis en verbondenheid,
          maar kunnen ook spanning oproepen wanneer oude en nieuwe gezinsvormen samenkomen.
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
            Waarvoor gebruik je de Gezinsrituelenkaart?
          </h2>

          <p className="text-sm md:text-base text-slate-700 leading-relaxed">
            Rituelen zijn meer dan tradities. Ze markeren overgangen, bevestigen
            verbondenheid en geven betekenis aan het dagelijks leven. In stiefgezinnen
            komen verschillende rituelen samen, soms harmonieus, soms botsend.
            De Gezinsrituelenkaart helpt om hier bewust bij stil te staan.
          </p>

          <ul className="list-disc pl-5 text-sm md:text-base text-slate-700 leading-relaxed space-y-2">
            <li>Maakt bestaande en ontbrekende rituelen zichtbaar.</li>
            <li>Geeft ruimte aan zowel oude als nieuwe gezinsgeschiedenissen.</li>
            <li>Ondersteunt bij het creëren van nieuwe, verbindende momenten.</li>
          </ul>

          <p className="text-sm text-slate-600 leading-relaxed">
            Hieronder vind je een basisuitleg met voorbeelden. De pro-variant bevat
            formats, begeleidervragen en verdiepende werkvormen via het portaal.
          </p>
        </div>

        {/* Sidebar */}
        <aside className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-3 h-fit">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-slate-500">
            Belangrijk
          </p>
          <p className="text-sm text-slate-700 leading-relaxed">
            Rituelen vragen respect voor het verleden én ruimte voor iets nieuws.
            Het doel is verbinden, niet vervangen.
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
          Voorbeeld: rituelen in beeld brengen
        </h2>

        <p className="text-sm md:text-base text-slate-700 leading-relaxed">
          Rituelen zijn vaak zo vanzelfsprekend dat ze pas opvallen wanneer
          ze verdwijnen of veranderen. De Gezinsrituelenkaart helpt om die
          momenten bewust te benoemen.
        </p>

        <div className="space-y-4">
          <div className="rounded-lg border border-slate-200 bg-white p-4">
            <p className="text-sm font-medium text-slate-800 mb-1">
              Voorbeeld 1 – Feestdagen
            </p>
            <p className="text-sm text-slate-700">
              Kerst en verjaardagen roepen spanning op door verschillende verwachtingen.
            </p>
            <p className="mt-2 text-sm text-slate-600">
              <strong>Ritueelvraag:</strong> wat willen we behouden, wat mag veranderen?
            </p>
          </div>

          <div className="rounded-lg border border-slate-200 bg-white p-4">
            <p className="text-sm font-medium text-slate-800 mb-1">
              Voorbeeld 2 – Dagelijkse momenten
            </p>
            <p className="text-sm text-slate-700">
              Er is weinig gezamenlijk moment na school of werk.
            </p>
            <p className="mt-2 text-sm text-slate-600">
              <strong>Ritueelvraag:</strong> welk klein moment kan dagelijks verbinden?
            </p>
          </div>

          <div className="rounded-lg border border-slate-200 bg-white p-4">
            <p className="text-sm font-medium text-slate-800 mb-1">
              Voorbeeld 3 – Overgangen
            </p>
            <p className="text-sm text-slate-700">
              Wisselmomenten verlopen rommelig en emotioneel.
            </p>
            <p className="mt-2 text-sm text-slate-600">
              <strong>Ritueelvraag:</strong> welk vast teken of gebaar kan hier helpen?
            </p>
          </div>
        </div>

        <p className="text-sm text-slate-600 leading-relaxed">
          Door rituelen expliciet te maken, ontstaat ruimte voor betekenisvolle
          afspraken die passen bij dit gezin.
        </p>
      </section>

      {/* Wanneer inzetten */}
      <section className="max-w-3xl space-y-4">
        <h2 className="text-xl font-semibold tracking-tight text-slate-900">
          Wanneer zet je de Gezinsrituelenkaart in?
        </h2>

        <ul className="list-disc pl-5 text-sm md:text-base text-slate-700 leading-relaxed space-y-2">
          <li>Bij spanningen rond feestdagen, verjaardagen en bijzondere momenten.</li>
          <li>Wanneer verbinding ontbreekt in het dagelijks ritme.</li>
          <li>Als oude rituelen botsen met nieuwe gezinsvormen.</li>
          <li>Bij wissels, afscheid en opnieuw samenkomen.</li>
        </ul>
      </section>

      {/* Werkwijze */}
      <section className="max-w-3xl space-y-4">
        <h2 className="text-xl font-semibold tracking-tight text-slate-900">
          Werkwijze in het kort
        </h2>

        <ol className="list-decimal pl-5 text-sm md:text-base text-slate-700 leading-relaxed space-y-2">
          <li>Inventariseer bestaande rituelen per gezinslid.</li>
          <li>Onderzoek welke rituelen steun geven en welke spanning oproepen.</li>
          <li>Ontwerp één nieuw of aangepast ritueel dat haalbaar is.</li>
          <li>Probeer het ritueel uit en evalueer na enkele weken.</li>
        </ol>
      </section>

      {/* Pro tease */}
      <section className="border-t border-slate-200 pt-10">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-slate-900">
            Pro-variant via het portaal
          </h2>
          <p className="text-sm md:text-base text-slate-700 leading-relaxed">
            De pro-variant bevat rituelenformats (download), begeleidershandleiding,
            voorbeeldrituelen en koppeling naar Loyaliteit, Structuur en het Stiefkompas Plan.
            Beschikbaar voor gecertificeerde professionals met licentie.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/materialen-tools/gezinsrituelenkaart/pro"
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