import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Rollenkaart – Stiefkompas",
  description:
    "Basisuitleg van de Rollenkaart. De volledige pro-variant is beschikbaar via het Stiefkompas-portaal voor gecertificeerde professionals.",
};

export default function RollenkaartPage() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <section className="space-y-4 border-b border-slate-200 pb-8">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-slate-500">
          Tool – basis
        </p>

        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 max-w-3xl">
          Rollenkaart
        </h1>

        <p className="text-sm md:text-base text-slate-700 max-w-3xl leading-relaxed">
          De Rollenkaart maakt rollen in het samengestelde gezin helder en bespreekbaar.
          Het doel is onderscheid te creëren tussen partnerrol, ouderrol en stiefouderrol,
          zodat verwachtingen realistischer worden en conflicten minder escaleren.
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
            Waarvoor gebruik je de Rollenkaart?
          </h2>

          <p className="text-sm md:text-base text-slate-700 leading-relaxed">
            In stiefgezinnen lopen rollen sneller door elkaar: partnerschap, ouderschap,
            stiefouderschap en praktische “regelrollen” (planning, financiën, huishouden)
            raken verweven. Dat geeft frictie, zeker als verwachtingen impliciet blijven.
          </p>

          <ul className="list-disc pl-5 text-sm md:text-base text-slate-700 leading-relaxed space-y-2">
            <li>Helpt verwachtingen expliciet te maken (wat hoort bij welke rol?).</li>
            <li>Geeft taal aan terugkerende irritaties en misverstanden.</li>
            <li>Ondersteunt bij het maken van haalbare afspraken die rust geven.</li>
          </ul>

          <p className="text-sm text-slate-600 leading-relaxed">
            Hieronder vind je een basisuitleg. De pro-variant bevat de volledige kaart,
            begeleidervragen en verdiepende formats via het portaal.
          </p>
        </div>

        {/* Sidebar */}
        <aside className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-3 h-fit">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-slate-500">
            Belangrijk
          </p>
          <p className="text-sm text-slate-700 leading-relaxed">
            De Rollenkaart gaat niet over “wie heeft gelijk”, maar over helderheid:
            <strong> wat is ieders positie</strong> en <strong>wat mag je van elkaar verwachten</strong>.
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
    Voorbeeld: rolverwarring zichtbaar maken
  </h2>

  <p className="text-sm md:text-base text-slate-700 leading-relaxed">
    In de praktijk ontstaat spanning vaak niet door onwil, maar door
    onduidelijke rolverwachtingen. Onderstaande voorbeelden laten zien
    hoe rolverwarring kan ontstaan – en hoe de Rollenkaart helpt om dit
    bespreekbaar te maken.
  </p>

  <div className="space-y-4">
    <div className="rounded-lg border border-slate-200 bg-white p-4">
      <p className="text-sm font-medium text-slate-800 mb-1">
        Voorbeeld 1 – Opvoeding
      </p>
      <p className="text-sm text-slate-700">
        “Ik zeg er wel iets van, maar krijg daarna te horen dat het niet mijn kind is.”
      </p>
      <p className="mt-2 text-sm text-slate-600">
        <strong>Rolvraag:</strong> Wat hoort hier bij de ouderrol, en wat bij de stiefouderrol?
      </p>
    </div>

    <div className="rounded-lg border border-slate-200 bg-white p-4">
      <p className="text-sm font-medium text-slate-800 mb-1">
        Voorbeeld 2 – Partnerrelatie
      </p>
      <p className="text-sm text-slate-700">
        “We praten alleen nog over de kinderen, nooit meer over ons.”
      </p>
      <p className="mt-2 text-sm text-slate-600">
        <strong>Rolvraag:</strong> Waar krijgt de partnerrol nog ruimte naast het ouderschap?
      </p>
    </div>

    <div className="rounded-lg border border-slate-200 bg-white p-4">
      <p className="text-sm font-medium text-slate-800 mb-1">
        Voorbeeld 3 – Verantwoordelijkheid
      </p>
      <p className="text-sm text-slate-700">
        “Ik regel alles, maar voel me niet gesteund.”
      </p>
      <p className="mt-2 text-sm text-slate-600">
        <strong>Rolvraag:</strong> Welke verantwoordelijkheden zijn expliciet afgesproken – en welke niet?
      </p>
    </div>
  </div>

  <p className="text-sm text-slate-600 leading-relaxed">
    De Rollenkaart helpt om dit soort situaties te verkennen zonder
    schuldvraag, en om samen te bepalen wat helpend en haalbaar is
    binnen ieders rol.
  </p>
</section>

      {/* Wanneer inzetten */}
      <section className="max-w-3xl space-y-4">
        <h2 className="text-xl font-semibold tracking-tight text-slate-900">
          Wanneer zet je de Rollenkaart in?
        </h2>

        <ul className="list-disc pl-5 text-sm md:text-base text-slate-700 leading-relaxed space-y-2">
          <li>Bij discussies over opvoeding en regels (“wie gaat waarover?”).</li>
          <li>Als partnerrelatie onder druk staat door ouder- en stiefoudertaken.</li>
          <li>Wanneer een stiefouder zich buitenspel gezet voelt of juist overbelast.</li>
          <li>Bij terugkerende spanningen tussen “gezinsregels” en loyaliteiten.</li>
        </ul>
      </section>

      {/* Werkwijze */}
      <section className="max-w-3xl space-y-4">
        <h2 className="text-xl font-semibold tracking-tight text-slate-900">
          Werkwijze in het kort
        </h2>

        <ol className="list-decimal pl-5 text-sm md:text-base text-slate-700 leading-relaxed space-y-2">
          <li>
            Benoem eerst de rollen: partner, ouder(s), stiefouder(s) en waar nodig extra
            “praktische rollen” (planning, financiën, huishouden).
          </li>
          <li>
            Verken verwachtingen per rol: wat verwacht je wél, en wat juist niet?
          </li>
          <li>
            Maak 1–2 concrete afspraken die direct rust geven (klein, haalbaar, toetsbaar).
          </li>
          <li>
            Evalueer na een korte periode: werkt het, wat moet bijgesteld worden?
          </li>
        </ol>
      </section>

      {/* Pro tease */}
      <section className="border-t border-slate-200 pt-10">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-slate-900">
            Pro-variant via het portaal
          </h2>
          <p className="text-sm md:text-base text-slate-700 leading-relaxed">
            De pro-variant bevat de volledige Rollenkaart (print/download), begeleidervragen,
            valkuilen, voorbeeldinterventies en koppeling met het Stiefkompas Plan.
            Beschikbaar voor gecertificeerde professionals met licentie.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/training-certificering"
              className="inline-flex rounded-full border border-slate-900 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-slate-900 hover:bg-slate-900 hover:text-white transition"
            >
              Meer over certificering
            </Link>

            <Link
              href="/voor-coaches"
              className="inline-flex rounded-full border border-slate-200 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-slate-700 hover:bg-slate-50 transition"
            >
              Voor coaches
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}