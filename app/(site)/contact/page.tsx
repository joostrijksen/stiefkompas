import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stiefkompas – Contact",
  description:
    "Neem contact op voor vragen over de Stiefkompas-methodiek, licenties, training of professionele samenwerking.",
};

export default function ContactPage() {
  return (
    <div className="space-y-14">
      {/* Intro */}
      <section className="space-y-5 border-b border-slate-200 pb-10 max-w-4xl">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#2C4B9A]">
          Contact
        </p>

        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#0E2A47]">
          Contact over de Stiefkompas-methodiek
        </h1>

        <p className="text-sm md:text-base text-slate-700 leading-relaxed">
          Deze contactpagina is bedoeld voor <strong>professionele vragen</strong> over
          de Stiefkompas-methodiek, implementatie binnen organisaties, training &
          certificering of samenwerking.
        </p>

        <p className="text-sm text-slate-600 leading-relaxed max-w-3xl">
          Voor coaching of individuele hulpvragen verwijzen wij door naar gecertificeerde
          of externe professionals. Via deze website wordt geen begeleiding aangeboden.
        </p>
      </section>

      {/* Contactmogelijkheden */}
      <section className="space-y-6 max-w-3xl">
        <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-[#0E2A47]">
          Contactmogelijkheden
        </h2>

        <p className="text-sm md:text-base text-slate-700 leading-relaxed">
          Je kunt per e-mail contact opnemen voor:
        </p>

        <ul className="list-disc pl-5 text-sm md:text-base text-slate-700 space-y-1">
          <li>vragen over de Stiefkompas-methodiek</li>
          <li>licenties en professioneel gebruik van materialen</li>
          <li>training & certificering</li>
          <li>samenwerking of implementatie binnen organisaties</li>
        </ul>

        <div className="mt-6 rounded-2xl border border-[#17B3B0]/20 bg-white p-6 shadow-sm">
          <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2C4B9A]">
            E-mail
          </h3>
          <p className="text-sm md:text-base text-slate-700 mt-2">
            <a
              href="mailto:info@stiefkompas.nl"
              className="font-medium underline underline-offset-4 decoration-[#17B3B0]/50 hover:decoration-[#17B3B0]"
            >
              info@stiefkompas.nl
            </a>
          </p>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="border-t border-slate-200 pt-10 max-w-3xl space-y-4 pb-4">
        <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-[#0E2A47]">
          Belangrijke opmerkingen
        </h2>

        <ul className="list-disc pl-5 text-sm md:text-base text-slate-700 space-y-1 leading-relaxed">
          <li>
            Dit contactadres is <strong>niet bedoeld voor hulpvragen of crisissituaties</strong>.
          </li>
          <li>
            Via deze website wordt geen individuele begeleiding aangeboden.
          </li>
          <li>
            Stiefkompas is een <strong>professionele methodiek</strong> voor gebruik binnen
            praktijken en organisaties.
          </li>
          <li>
            Voor coaching of begeleiding verwijzen wij naar externe professionals.
          </li>
        </ul>
      </section>
    </div>
  );
}