import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Loyaliteitsdiagram – Stiefkompas",
  description:
    "Basisuitleg van het Loyaliteitsdiagram. De volledige pro-variant is beschikbaar via het Stiefkompas-portaal voor gecertificeerde professionals.",
};

export default function LoyaliteitsdiagramPage() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <section className="space-y-4 border-b border-slate-200 pb-8">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-slate-500">
          Tool – basis
        </p>

        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 max-w-3xl">
          Loyaliteitsdiagram
        </h1>

        <p className="text-sm md:text-base text-slate-700 max-w-3xl leading-relaxed">
          Het Loyaliteitsdiagram helpt om zichtbare en onzichtbare loyaliteiten in kaart te brengen.
          In stiefgezinnen kunnen loyaliteiten naast elkaar bestaan, botsen of “klem” zetten.
          Door dit te herkennen en te erkennen ontstaat ruimte voor veiligheid, ontspanning en betere keuzes.
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
            Waarvoor gebruik je het Loyaliteitsdiagram?
          </h2>

          <p className="text-sm md:text-base text-slate-700 leading-relaxed">
            Loyaliteit is niet “goed” of “fout” — het is een gegeven in familiesystemen.
            In samengestelde gezinnen liggen er meerdere geschiedenissen naast elkaar:
            kinderen, ouders, ex-partners en nieuwe partners. Het Loyaliteitsdiagram helpt om
            spanningslijnen te verhelderen zonder schuldvraag.
          </p>

          <ul className="list-disc pl-5 text-sm md:text-base text-slate-700 leading-relaxed space-y-2">
            <li>Maakt onuitgesproken loyaliteiten bespreekbaar en normaliseert ze.</li>
            <li>Helpt “klem” te herkennen (bij kinderen én volwassenen).</li>
            <li>Ondersteunt het vinden van erkenning vóórdat je naar afspraken of oplossingen gaat.</li>
          </ul>

          <p className="text-sm text-slate-600 leading-relaxed">
            Hieronder vind je een basisuitleg. De pro-variant bevat formats, begeleidervragen
            en interpretatiekaders via het portaal.
          </p>
        </div>

        {/* Sidebar */}
        <aside className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-3 h-fit">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-slate-500">
            Belangrijk
          </p>
          <p className="text-sm text-slate-700 leading-relaxed">
            Loyaliteitswerk vraagt veiligheid. Begin met <strong>erkenning</strong> en <strong>nuance</strong>,
            niet met analyse of “wie heeft gelijk”.
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
          Voorbeeld: loyaliteitsklem herkennen
        </h2>

        <p className="text-sm md:text-base text-slate-700 leading-relaxed">
          Loyaliteitsklem voelt vaak als “het kan nooit goed”. Onderstaande voorbeelden laten zien
          hoe loyaliteit kan meespelen, zonder dat iemand dat bewust zo bedoelt.
        </p>

        <div className="space-y-4">
          <div className="rounded-lg border border-slate-200 bg-white p-4">
            <p className="text-sm font-medium text-slate-800 mb-1">
              Voorbeeld 1 – Kind in het midden
            </p>
            <p className="text-sm text-slate-700">
              “Als ik het leuk heb bij papa, voelt het alsof ik mama verraad.”
            </p>
            <p className="mt-2 text-sm text-slate-600">
              <strong>Focus:</strong> erkenning geven (“je hoeft niet te kiezen”) vóór je gedrag bespreekt.
            </p>
          </div>

          <div className="rounded-lg border border-slate-200 bg-white p-4">
            <p className="text-sm font-medium text-slate-800 mb-1">
              Voorbeeld 2 – Stiefouder onder druk
            </p>
            <p className="text-sm text-slate-700">
              “Ik doe zo mijn best, maar het voelt alsof ik nooit echt erbij hoor.”
            </p>
            <p className="mt-2 text-sm text-slate-600">
              <strong>Focus:</strong> positie en tempo: verbinding groeit vaak trager dan verwachtingen.
            </p>
          </div>

          <div className="rounded-lg border border-slate-200 bg-white p-4">
            <p className="text-sm font-medium text-slate-800 mb-1">
              Voorbeeld 3 – Ex-partner als schaduw
            </p>
            <p className="text-sm text-slate-700">
              “Elke afspraak met de ex voelt als controle over ons leven.”
            </p>
            <p className="mt-2 text-sm text-slate-600">
              <strong>Focus:</strong> scheiden van thema’s: praktische afstemming vs. emotionele lading.
            </p>
          </div>
        </div>

        <p className="text-sm text-slate-600 leading-relaxed">
          Het Loyaliteitsdiagram helpt om betrokkenen en spanningslijnen te ordenen, zodat je zorgvuldig
          kunt werken met erkenning, grenzen en communicatie.
        </p>
      </section>

      {/* Wanneer inzetten */}
      <section className="max-w-3xl space-y-4">
        <h2 className="text-xl font-semibold tracking-tight text-slate-900">
          Wanneer zet je het Loyaliteitsdiagram in?
        </h2>

        <ul className="list-disc pl-5 text-sm md:text-base text-slate-700 leading-relaxed space-y-2">
          <li>Bij terugkerende schuldgevoelens, terugtrekgedrag of “niet mogen genieten”.</li>
          <li>Als kinderen gedrag laten zien rond wissels, feestdagen of contactmomenten.</li>
          <li>Wanneer ex-partners of familie van herkomst veel lading oproepen in gesprekken.</li>
          <li>Als een stiefouder zich buitengesloten voelt of “altijd tweede” ervaart.</li>
        </ul>
      </section>

      {/* Werkwijze */}
      <section className="max-w-3xl space-y-4">
        <h2 className="text-xl font-semibold tracking-tight text-slate-900">
          Werkwijze in het kort
        </h2>

        <ol className="list-decimal pl-5 text-sm md:text-base text-slate-700 leading-relaxed space-y-2">
          <li>Breng betrokkenen in kaart (zonder oordeel): wie hoort bij welk subsysteem?</li>
          <li>Verken waar spanning/klem ontstaat en wat er niet gezegd kan worden.</li>
          <li>Start met erkenning en normalisering vóór je afspraken of grenzen bespreekt.</li>
          <li>Maak één kleine stap die veiligheid vergroot (taal, afspraak, ritueel of grens).</li>
        </ol>
      </section>

      {/* Pro tease */}
      <section className="border-t border-slate-200 pt-10">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-slate-900">
            Pro-variant via het portaal
          </h2>
          <p className="text-sm md:text-base text-slate-700 leading-relaxed">
            De pro-variant bevat formats (print/download), begeleidervragen, klem-signalen,
            veilige formuleringen voor erkenning en interventies om loyaliteitsconflicten te ontlasten.
            Beschikbaar voor gecertificeerde professionals met licentie.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/materialen-tools/loyaliteitsdiagram/pro"
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