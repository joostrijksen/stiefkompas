import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Stiefkompas – Toepassing in de coachpraktijk",
  description:
    "Hoe (vrijgevestigde) coaches de Stiefkompas-methodiek toepassen in hun praktijk bij het begeleiden van stiefgezinnen.",
};

export default function ImplementatieCoachpraktijkPage() {
  return (
    <div className="space-y-14">
      {/* Intro */}
      <section className="space-y-5 border-b border-slate-200 pb-10">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-slate-500">
          Voor coaches & praktijken
        </p>

        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 max-w-4xl">
          Toepassing van de Stiefkompas-methodiek in de coachpraktijk
        </h1>

        <p className="text-sm md:text-base text-slate-700 max-w-3xl leading-relaxed">
          Stiefkompas is ontwikkeld voor (vrijgevestigde) coaches en begeleiders die
          werken met stiefgezinnen en behoefte hebben aan een helder, verdiepend
          methodisch kader. De methodiek biedt taal, structuur en analysekaders voor
          dynamieken waarin loyaliteit, rollen en gezinsstructuren centraal staan.
        </p>

        <p className="text-sm text-slate-600 max-w-3xl leading-relaxed">
          Je past Stiefkompas toe binnen je eigen praktijk: van intake en analyse tot
          planvorming en begeleiding. De tools ondersteunen dit proces en worden altijd
          ingezet binnen de methodiek — niet als losse interventies.
        </p>
      </section>

      {/* Relevantie */}
      <section className="grid gap-10 md:grid-cols-2 border-b border-slate-200 pb-12">
        <div className="space-y-4">
          <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-slate-900">
            Waarom Stiefkompas voor coaches?
          </h2>

          <p className="text-sm md:text-base text-slate-700 leading-relaxed">
            Werken met stiefgezinnen vraagt om een andere bril dan reguliere
            gezinscoaching. Stiefkompas helpt je om snel én zorgvuldig te duiden wat er
            speelt, zonder te versimpelen of te protocoliseren.
          </p>

          <ul className="list-disc pl-5 text-sm text-slate-700 space-y-1">
            <li>Helder begrippenkader voor stiefgezinsdynamiek</li>
            <li>Methodische structuur van intake tot plan</li>
            <li>Ondersteunt professioneel en contextueel handelen</li>
            <li>Ruimte voor eigen stijl en professionele afweging</li>
            <li>Geschikt voor individuele, ouder- en gezinscoaching</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 mb-2">
            Typische coachvraagstukken
          </h3>
          <ul className="list-disc pl-5 text-sm text-slate-700 space-y-1">
            <li>Loyaliteitsconflicten tussen ouders, stiefouders en kinderen</li>
            <li>Rolverwarring en grensvragen in het nieuwe gezin</li>
            <li>Terugkerende communicatie- en escalatiepatronen</li>
            <li>Spanning rond wisselmomenten en twee huishoudens</li>
            <li>Stiefouderpositie en opvoedverantwoordelijkheid</li>
            <li>Stiefsibling-dynamiek en gezinsstructuur</li>
            <li>Ouderpositionering na scheiding</li>
          </ul>
        </div>
      </section>

      {/* Toepassing in de praktijk */}
      <section className="space-y-6 border-b border-slate-200 pb-12">
        <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-slate-900">
          Hoe je Stiefkompas toepast in je praktijk
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-2">
              Intake & analyse
            </h3>
            <p className="text-sm text-slate-700 leading-relaxed">
              Gebruik het Kompasmodel om gezinsstructuren, posities en onderliggende
              dynamieken inzichtelijk te maken en tot een scherpe hulpvraag te komen.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-2">
              Planvorming & begeleiding
            </h3>
            <p className="text-sm text-slate-700 leading-relaxed">
              Werk methodisch toe naar haalbare doelen, rolverheldering en passende
              interventies die aansluiten bij het tempo en de draagkracht van het gezin.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-2">
              Tools als ondersteuning
            </h3>
            <p className="text-sm text-slate-700 leading-relaxed">
              Zet tools in wanneer ze functioneel zijn: om inzicht te verdiepen,
              perspectieven zichtbaar te maken of structuur aan te brengen binnen het
              traject.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-2">
              Professionele verdieping
            </h3>
            <p className="text-sm text-slate-700 leading-relaxed">
              Verdiep je vakmanschap via de online leeromgeving en (optioneel)
              certificering, zodat je consistent en zorgvuldig kunt werken volgens de
              Stiefkompas-methodiek.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
<section className="max-w-3xl space-y-4">
  <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-slate-900">
    Past Stiefkompas bij jouw praktijk?
  </h2>

  <p className="text-sm md:text-base text-slate-700 leading-relaxed">
    Stiefkompas is bedoeld voor coaches die zelfstandig en methodisch werken en
    zich willen verdiepen in de begeleiding van stiefgezinnen. De opleiding en
    bijbehorende materialen zijn volledig online beschikbaar.
  </p>

  <p className="text-sm md:text-base text-slate-700 leading-relaxed">
    Bekijk de opzet van de online opleiding en bepaal zelf of de Stiefkompas-methodiek
    aansluit bij jouw manier van werken.
  </p>

  <Link
    href="/opleiding"
    className="inline-flex rounded-full border border-slate-900 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-slate-900 hover:bg-slate-900 hover:text-white transition"
  >
    Bekijk de online opleiding
  </Link>
</section>
    </div>
  );
}