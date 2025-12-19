import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stiefkompas – Contact",
  description:
    "Neem contact op voor vragen over de Stiefkompas-methodiek, licenties, training of samenwerking op professioneel niveau.",
};

export default function ContactPage() {
  return (
    <div className="space-y-14">
      {/* Intro */}
      <section className="space-y-5 border-b border-slate-200 pb-10">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-slate-500">
          Contact
        </p>

        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 max-w-3xl">
          Contact over de Stiefkompas-methodiek
        </h1>

        <p className="text-sm md:text-base text-slate-700 max-w-3xl leading-relaxed">
          Deze contactpagina is uitsluitend bedoeld voor vragen over de methode, 
          implementatie in organisaties, training & certificering of professionele samenwerking.  
          Voor coaching of cliëntvragen verwijzen wij door naar externe professionals.
        </p>
      </section>

      {/* Contactinformatie */}
      <section className="space-y-6 max-w-3xl">
        <h2 className="text-xl md:text-2xl font-semibold text-slate-900 tracking-tight">
          Contactmogelijkheden
        </h2>

        <p className="text-sm md:text-base text-slate-700 leading-relaxed">
          Je kunt contact opnemen via e-mail voor:
        </p>

        <ul className="list-disc pl-5 text-sm md:text-base text-slate-700 space-y-1">
          <li>vragen over de Stiefkompas-methodiek</li>
          <li>informatie over licenties en gebruik van materialen</li>
          <li>aanmelding voor trainingen & certificering</li>
          <li>samenwerking of implementatie binnen organisaties</li>
        </ul>

        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            E-mail
          </h3>
          <p className="text-sm md:text-base text-slate-700 mt-1">
            <a
              href="mailto:info@stiefkompas.nl"
              className="underline underline-offset-4 decoration-slate-400 hover:decoration-slate-600"
            >
              info@stiefkompas.nl
            </a>
          </p>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="border-t border-slate-200 pt-10 max-w-3xl space-y-4 pb-4">
        <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-slate-900">
          Belangrijke opmerkingen
        </h2>

        <ul className="list-disc pl-5 text-sm md:text-base text-slate-700 space-y-1 leading-relaxed">
          <li>Dit contactadres is <strong>niet bedoeld voor hulpvragen of crisissituaties</strong>.</li>
          <li>De methodiek wordt niet gebruikt voor individuele begeleiding via deze website.</li>
          <li>Stiefkompas.nl is uitsluitend gericht op professionals en organisaties.</li>
          <li>Voor coaching of begeleiding verwijzen wij naar externe praktijken.</li>
        </ul>
      </section>
    </div>
  );
}