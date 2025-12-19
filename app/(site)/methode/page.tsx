import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stiefkompas – De methodiek en het Kompasmodel",
  description:
    "Uitleg van de Stiefkompas-methodiek en het Kompasmodel met vijf pijlers: posities & loyaliteit, hechting & veiligheid, grenzen & structuur, communicatie & patronen, gezinsritme & rituelen.",
};

export default function MethodePage() {
  return (
    <div className="relative bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-stone-50">
        {/* zachte vormen */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div
            className="absolute -right-[18%] top-[10%] h-[440px] w-[440px] rounded-[60%_40%_30%_70%/60%_30%_70%_40%] bg-gradient-to-br from-teal-200/35 to-teal-300/20 blur-2xl"
            style={{ transform: "rotate(-16deg)" }}
          />
          <div
            className="absolute -left-[14%] bottom-[6%] h-[420px] w-[420px] rounded-[40%_60%_70%_30%/40%_50%_60%_50%] bg-gradient-to-tr from-rose-200/35 to-pink-200/20 blur-2xl"
            style={{ transform: "rotate(18deg)" }}
          />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-20 pb-20">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur-sm px-4 py-2 shadow-sm border border-slate-200/60">
              <span className="h-2 w-2 rounded-full bg-teal-700" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-700">
                De Stiefkompas-methodiek
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900 leading-[1.08]">
              Het Kompasmodel – vijf pijlers om dynamiek te duiden
            </h1>

            <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
              <p>
                De Stiefkompas-methodiek is ontwikkeld om de dynamiek van samengestelde gezinnen
                systematisch in kaart te brengen. In plaats van te focussen op individueel gedrag
                richt het model zich op patronen, posities en relaties binnen het gezinssysteem.
              </p>

              <p>
                Praktisch betekent dit: je krijgt sneller zicht op wat er werkelijk speelt, je brengt
                prioriteit aan (wat nu, wat later) en je kunt het gesprek voeren in taal die gezinnen
                begrijpen — zonder te versimpelen of te moraliseren.
              </p>
            </div>

            <div className="inline-flex items-start gap-3 rounded-2xl bg-white/70 backdrop-blur border border-teal-100 px-6 py-4 text-base text-slate-700 shadow-sm">
              <svg
                className="mt-0.5 h-6 w-6 text-teal-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>
                De vijf pijlers gebruik je niet als stappenplan, maar als een kompas: ze bieden richting
                en gezamenlijke taal.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* PIJLERS */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 space-y-16">
        <PijlerBlock
          n="01"
          accent="teal"
          title="Posities & loyaliteit"
          intro="Deze pijler richt zich op de posities van alle betrokkenen in het stiefgezin (ouders, stiefouders, kinderen, ex-partners) en de zichtbare en onzichtbare loyaliteiten daartussen. Het doel is te begrijpen wie aan wie loyaal is, welke verwachtingen er leven en waar mensen mogelijk “klem” komen te zitten."
          signals={[
            "Kinderen voelen zich verantwoordelijk voor het welzijn van een ouder",
            "Stiefouder ervaart “afstand” of afwijzing en raakt sneller gefrustreerd",
            "Er ontstaat spanning zodra grenzen of opvoeding ter sprake komen",
          ]}
          theory="Deze pijler is gebaseerd op systeemtheorie en loyaliteitsleer. Verticale loyaliteit (tussen ouders en kinderen) en horizontale loyaliteit (tussen partners) lopen in stiefsystemen vaak op een andere manier door elkaar."
          tools={[
            "In beeld brengen van gezinsposities",
            "Erkennen van loyaliteiten naar beide ouders",
            "Rollenkaart en Loyaliteitsdiagram",
          ]}
        />

        <PijlerBlock
          n="02"
          accent="rose"
          title="Hechting & veiligheid"
          intro="Hechting en ervaren veiligheid vormen een basis voor hoe kinderen en volwassenen nieuwe relaties in het stiefgezin aangaan. Veranderingen in samenstelling, woonritme en relaties kunnen bestaande hechtingspatronen onder druk zetten."
          signals={[
            "Gedrag piekt rondom wisselmomenten (halen/brengen, wisselweken)",
            "Terugtrekken, claimen of “testen” van nabijheid in relaties",
            "Volwassenen voelen zich snel afgewezen of overvraagd",
          ]}
          theory="Deze pijler leunt op hechtingsleer en stressregulatie. Onvoorspelbaarheid, loyaliteitsconflicten en veranderende woonregelingen kunnen leiden tot verhoogde stress en onveiligheidsgevoelens."
          tools={[
            "Verkennen van basisveiligheid",
            "Bespreken van overgangsmomenten",
            "Gezinskompas Scan en Communicatiekompas",
          ]}
        />

        <PijlerBlock
          n="03"
          accent="slate"
          title="Grenzen & structuur"
          intro="In samengestelde gezinnen bestaan vaak verschillende opvoedstijlen, regels en verwachtingen. Deze pijler helpt om rollen, grenzen en structuur te verduidelijken, zodat iedereen weet waar hij of zij aan toe is."
          signals={[
            "Discussies over regels (“bij mama mag het wel, bij papa niet”)",
            "Stiefouder neemt te snel een ouderrol óf trekt zich volledig terug",
            "Onzekerheid over wie beslist waarover",
          ]}
          theory="Duidelijke subsystemen (ouders, kinderen, ex-systeem) en pedagogische consistentie verminderen rolverwarring. Systemische kaders helpen om af te stemmen wie waar verantwoordelijk voor is."
          tools={[
            "Concretiseren van regels en verwachtingen",
            "Verschil ouder- en stiefouderrol",
            "Grenzenkompas en Weekstructuurkaart",
          ]}
        />

        <PijlerBlock
          n="04"
          accent="teal"
          title="Communicatie & patronen"
          intro="Deze pijler gaat over hoe gezinsleden met elkaar communiceren en welke terugkerende patronen zichtbaar worden. Niet alleen wát er gezegd wordt is relevant, maar vooral hóe reacties op elkaar aansluiten en escaleren."
          signals={[
            "Dezelfde ruzies keren terug, met voorspelbare rollen",
            "Intenties worden gemist: men voelt zich snel aangevallen",
            "Escalatie op momenten van stress of tijdsdruk",
          ]}
          theory="Deze pijler sluit aan bij systeemtheoretische communicatiemodellen en conflictmodellen, waarin circulaire patronen centraal staan in plaats van lineaire oorzaak-gevolgredeneringen."
          tools={[
            "In kaart brengen van spanningsmomenten",
            "Verkennen van intenties versus effecten",
            "Communicatiekompas en casusbesprekingen",
          ]}
        />

        <PijlerBlock
          n="05"
          accent="rose"
          title="Gezinsritme & rituelen"
          intro="In deze pijler staat het gezamenlijke ritme centraal: dagelijkse routines, terugkerende momenten en rituelen. Rituelen kunnen samenhang versterken, zonder eerdere gezinnen of relaties uit te wissen."
          signals={[
            "Spanning rond feestdagen, vakanties en “wie hoort erbij?”",
            "Onrust door wisselende routines tussen twee huizen",
            "Onuitgesproken rouw of vergelijking met “hoe het vroeger was”",
          ]}
          theory="Ritme en rituelen dragen bij aan voorspelbaarheid, herkenning en betekenisgeving. In samengestelde gezinnen vraagt dit bewuste afstemming, omdat meerdere geschiedenissen en tradities samenkomen."
          tools={[
            "Verkennen van bestaande en gewenste rituelen",
            "Exploreren van spanning rond feestdagen",
            "Gezinsrituelenkaart en Stiefkompas Plan",
          ]}
        />

        {/* AFSLUITING */}
        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 via-slate-800 to-teal-900 p-10 sm:p-14 text-white shadow-xl">
          <div className="pointer-events-none absolute -right-32 -top-32 h-64 w-64 rounded-full bg-teal-500/15 blur-2xl" />
          <div className="pointer-events-none absolute -left-32 -bottom-32 h-64 w-64 rounded-full bg-rose-500/15 blur-2xl" />

          <div className="relative space-y-6 max-w-3xl">
            <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight">
              De vijf pijlers vormen samen een geïntegreerd kader
            </h3>

            <div className="space-y-4 text-lg text-white/90 leading-relaxed">
              <p>
                Je gebruikt de pijlers afzonderlijk of in samenhang, afhankelijk van de vraag, context en
                fase van het traject. Het Kompasmodel biedt flexibiliteit zonder vrijblijvendheid.
              </p>
              <p>
                In de Stiefkompas-trainingen leren deelnemers hoe zij het Kompasmodel, de onderliggende
                theorie en de tools zorgvuldig en systemisch inzetten in hun eigen praktijk.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/training-certificering"
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-base font-semibold text-slate-900 hover:bg-slate-50 transition shadow-md"
              >
                Bekijk de training
              </Link>
              <Link
                href="/materialen-tools"
                className="inline-flex items-center justify-center rounded-full bg-white/10 backdrop-blur px-8 py-4 text-base font-semibold text-white hover:bg-white/15 transition border border-white/20"
              >
                Tools & materialen
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

function PijlerBlock({
  n,
  accent,
  title,
  intro,
  signals,
  theory,
  tools,
}: {
  n: string;
  accent: "teal" | "rose" | "slate";
  title: string;
  intro: string;
  signals: string[];
  theory: string;
  tools: string[];
}) {
  const accentStyles =
    accent === "teal"
      ? {
          border: "border-teal-100",
          bg: "from-teal-50 via-white to-white",
          badge: "bg-teal-100 text-teal-800",
          dot: "text-teal-600",
          check: "text-teal-700",
          blob: "from-teal-200/25 to-teal-300/15",
          rail: "bg-teal-700",
          toolsBox: "bg-teal-50 border-teal-100",
        }
      : accent === "rose"
      ? {
          border: "border-rose-100",
          bg: "from-rose-50 via-white to-white",
          badge: "bg-rose-100 text-rose-800",
          dot: "text-rose-600",
          check: "text-rose-700",
          blob: "from-rose-200/25 to-pink-300/15",
          rail: "bg-rose-700",
          toolsBox: "bg-rose-50 border-rose-100",
        }
      : {
          border: "border-slate-200",
          bg: "from-slate-50 via-white to-white",
          badge: "bg-slate-100 text-slate-800",
          dot: "text-slate-500",
          check: "text-slate-700",
          blob: "from-slate-200/25 to-slate-300/15",
          rail: "bg-slate-700",
          toolsBox: "bg-slate-50 border-slate-200",
        };

  return (
    <section className="relative">
      <div className="relative overflow-hidden rounded-3xl border bg-gradient-to-br p-8 lg:p-12 shadow-md"
        className={
          `relative overflow-hidden rounded-3xl border bg-gradient-to-br p-8 lg:p-12 shadow-md ${accentStyles.border} ${accentStyles.bg}`
        }
      >
        {/* accent rail (in de card, strak op mobiel) */}
        <div className={`absolute left-0 top-0 h-full w-2 ${accentStyles.rail}`} />
        <div className={`pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gradient-to-br ${accentStyles.blob}`} />

        <div className="relative space-y-6">
          <div className={`inline-flex items-center gap-3 rounded-full px-4 py-2 ${accentStyles.badge}`}>
            <span className="text-2xl font-semibold">{n}</span>
            <span className="text-xs font-bold uppercase tracking-[0.2em]">Pijler</span>
          </div>

          <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900">
            {title}
          </h2>

          <p className="text-lg text-slate-600 leading-relaxed max-w-3xl">{intro}</p>

          <div className="grid gap-6 lg:grid-cols-3 pt-4">
            <div className="rounded-2xl bg-white border border-stone-200 p-6 shadow-sm">
              <h3 className={`text-sm font-bold uppercase tracking-[0.2em] mb-4 ${accentStyles.dot}`}>
                Signalen in de praktijk
              </h3>
              <ul className="space-y-3 text-sm text-slate-700">
                {signals.map((s) => (
                  <li key={s} className="flex items-start gap-2">
                    <span className={`mt-0.5 ${accentStyles.dot}`}>•</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl bg-white border border-stone-200 p-6 shadow-sm">
              <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-600 mb-4">
                Theoretische basis
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed">{theory}</p>
            </div>

            <div className={`rounded-2xl border p-6 shadow-sm ${accentStyles.toolsBox}`}>
              <h3 className={`text-sm font-bold uppercase tracking-[0.2em] mb-4 ${accentStyles.check}`}>
                Werkzame elementen
              </h3>
              <ul className="space-y-3 text-sm text-slate-700">
                {tools.map((t) => (
                  <li key={t} className="flex items-start gap-2">
                    <span className={`mt-0.5 ${accentStyles.check}`}>✓</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}