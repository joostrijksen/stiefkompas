import type { Metadata } from "next";
import Link from "next/link";
import ScanForm from "@/app/components/gezinsscan/ScanForm";

export const metadata: Metadata = {
  title: "Gezinskompas Scan – Stiefkompas",
  description:
    "Basisuitleg en vereenvoudigd voorbeeld van de Gezinskompas Scan. De volledige pro-variant is beschikbaar voor gecertificeerde Stiefkompas-professionals.",
};

export default function GezinskompasScanPage() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <section className="space-y-4 border-b border-slate-200 pb-8">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-slate-500">
          Tool – basis
        </p>

        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 max-w-3xl">
          Gezinskompas Scan
        </h1>

        <p className="text-sm md:text-base text-slate-700 max-w-3xl leading-relaxed">
          De Gezinskompas Scan helpt om de dynamiek in een samengesteld gezin gestructureerd
          te verkennen: waar zit rust, waar zit wrijving, en welke pijlers vragen als eerste
          aandacht? De scan is bedoeld als gespreksstarter en routehulp binnen de Stiefkompas-methodiek.
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

      {/* Intro + afbakening */}
      <section className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-slate-900">
            Vereenvoudigd voorbeeld
          </h2>

          <p className="text-sm md:text-base text-slate-700 leading-relaxed">
            Hieronder zie je een <strong>vereenvoudigde voorbeeldscan</strong>. Deze versie laat zien
            hoe Stiefkompas werkt met pijlers en reflectie. De uitkomst is bedoeld om taal te geven
            aan wat vaak impliciet blijft en om gericht een gesprek te voeren.
          </p>

          <p className="text-sm md:text-base text-slate-700 leading-relaxed">
            De volledige Gezinskompas Scan (pro) is aanzienlijk uitgebreider en is ontwikkeld voor
            professioneel gebruik door <strong>gecertificeerde Stiefkompas-professionals</strong>.
          </p>

          <ul className="list-disc pl-5 text-sm md:text-base text-slate-700 leading-relaxed space-y-2">
            <li>
              Meer vragen per pijler en verfijnde weging (betrouwbaarder profiel).
            </li>
            <li>
              Input van <strong>beide partners</strong> (en waar passend ook perspectief van kinderen).
            </li>
            <li>
              Meerlaagse analyse: patronen, posities/rollen, grenzen en communicatiedynamiek.
            </li>
            <li>
              Vertaling naar vervolgstappen binnen het Stiefkompas Plan en bijbehorende werkvormen.
            </li>
            <li>
              Toegang via het portaal (licentie): materialen, handleidingen, downloads en eventueel historie.
            </li>
          </ul>
        </div>

        {/* Sidebar card */}
        <aside className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-3 h-fit">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-slate-500">
            Belangrijk
          </p>
          <p className="text-sm text-slate-700 leading-relaxed">
            Deze voorbeeldscan is <strong>niet</strong> bedoeld als diagnose of oordeel. Gebruik de uitkomst
            als startpunt voor gesprek en reflectie.
          </p>
          <p className="text-sm text-slate-700 leading-relaxed">
            Wil je werken met de volledige scan en interpretatiekaders? Dan hoort dat bij certificering.
          </p>

          <Link
            href="/training-certificering"
            className="inline-flex w-full justify-center rounded-full border border-slate-900 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-slate-900 hover:bg-slate-900 hover:text-white transition"
          >
            Bekijk certificering
          </Link>
        </aside>
      </section>

      {/* Scan zelf (pas hier start de tool) */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold tracking-tight text-slate-900">
          Voorbeeldscan invullen
        </h2>
        <p className="text-sm text-slate-600 max-w-3xl leading-relaxed">
          Vul de vragen in en bekijk het reflectieprofiel. In de pro-variant worden uitkomsten
          verder geduid met interpretatiekaders en vertaald naar concrete vervolgstappen.
        </p>

        <ScanForm />
      </section>
    </div>
  );
}