import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stiefkompas – Veelgestelde vragen",
  description:
    "Veelgestelde vragen over de Stiefkompas-methodiek, evidence-informed achtergrond, professionele toepassing en certificering.",
};

const faqItems = [
  {
    q: "Is Stiefkompas evidence-based?",
    a: "Stiefkompas is gebaseerd op evidence-informed principes uit systeemtheorie, hechtingsleer, loyaliteitsdynamiek, stressregulatie en communicatiemodellen. De methode maakt gebruik van theoretische inzichten en praktijkervaring, maar is geen op zichzelf staande, wetenschappelijk getoetste interventie.",
  },
  {
    q: "Voor welke professionals is de methodiek bedoeld?",
    a: "Stiefkompas is ontwikkeld voor coaches, maatschappelijk werkers, jeugdhulpverleners, systeemtherapeuten, wijkteamprofessionals en andere hulpverleners die werken met samengestelde gezinnen.",
  },
  {
    q: "Kan Stiefkompas worden gebruikt zonder training?",
    a: "De theoretische informatie is vrij toegankelijk, maar het gebruik van de officiële tools en het Kompasmodel in professionele trajecten vereist certificering. Dit zorgt voor kwaliteit, zorgvuldigheid en een gedeeld begrippenkader.",
  },
  {
    q: "Wat is het verschil tussen de methode en coaching?",
    a: "Stiefkompas is een methodiek — geen coachingsaanbod. Het is een professioneel model dat gebruikt wordt binnen hulpverlening en begeleiding. Coaching is een aparte praktijkvorm die door andere aanbieders uitgevoerd kan worden.",
  },
  {
    q: "Hoe verschilt Stiefkompas van bestaande modellen voor samengestelde gezinnen?",
    a: "Stiefkompas onderscheidt zich door haar systemische invalshoek, de focus op posities en loyaliteiten, en de integratie van vijf pijlers die samen een helder analysekader vormen. Het model biedt zowel theoretische als praktische handvatten.",
  },
  {
    q: "Is er een handboek beschikbaar?",
    a: "Een officieel Stiefkompas-handboek is in ontwikkeling en wordt naar verwachting uitgebracht na de eerste certificeringsrondes. Gecertificeerde professionals krijgen als eerste toegang.",
  },
  {
    q: "Kan de methode worden toegepast in organisaties en teams?",
    a: "Ja. Stiefkompas wordt gebruikt binnen jeugdhulp, wijkteams, gezinshulpverlening en GGZ-organisaties. Er zijn implementatietrajecten en teamtrainingen beschikbaar.",
  },
  {
    q: "Wordt de methode regelmatig geactualiseerd?",
    a: "Ja. De theoretische basis wordt periodiek herzien, en er worden nieuwe tools, publicaties en updates toegevoegd op basis van praktijkervaring en actuele kennis binnen het veld.",
  },
  {
    q: "Is de methodiek geschikt voor eerste gezinnen?",
    a: "De inzichten zijn breder toepasbaar, maar de methode is specifiek ontwikkeld voor samengestelde gezinnen en hun unieke dynamiek. Sommige onderdelen kunnen wel gebruikt worden in bredere systeemcontexten.",
  },
  {
    q: "Hoe kan ik gecertificeerd Stiefkompas-professional worden?",
    a: "Na afronding van de introductie- en verdiepingstraining kun je deelnemen aan het certificeringstraject, dat bestaat uit supervisie, toetsing en casusbesprekingen.",
  },
];

export default function FAQPage() {
  return (
    <div className="space-y-14">
      {/* Intro */}
      <section className="space-y-5 border-b border-slate-200 pb-10">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-slate-500">
          Veelgestelde Vragen
        </p>

        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 max-w-4xl">
          Veelgestelde vragen over de Stiefkompas-methodiek
        </h1>

        <p className="text-sm md:text-base text-slate-700 max-w-3xl leading-relaxed">
          Hieronder vind je antwoord op de meest voorkomende vragen over de 
          methodiek, de wetenschappelijke basis, training en professioneel gebruik van Stiefkompas.
        </p>
      </section>

      {/* FAQ lijst */}
      <section className="space-y-8 max-w-3xl">
        {faqItems.map((item, i) => (
          <div key={i} className="space-y-2">
            <h2 className="text-lg font-semibold text-slate-900 tracking-tight">
              {item.q}
            </h2>
            <p className="text-sm text-slate-700 leading-relaxed">{item.a}</p>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="border-t border-slate-200 pt-10 max-w-3xl space-y-4 pb-4">
        <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-slate-900">
          Staat jouw vraag er niet tussen?
        </h2>
        <p className="text-sm md:text-base text-slate-700 leading-relaxed">
          Neem contact op voor vragen over de methodiek, licenties of implementatie.
        </p>
        <a
          href="/contact"
          className="inline-flex rounded-full border border-slate-900 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-slate-900 hover:bg-slate-900 hover:text-white transition"
        >
          Contact opnemen
        </a>
      </section>
    </div>
  );
}