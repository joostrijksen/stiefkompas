import type { Metadata } from "next";
import Link from "next/link";
import { KompasModel } from "@/app/components/kompasmodel";

export const metadata: Metadata = {
  title: "Stiefkompas – Methodiek voor samengestelde gezinnen",
  description:
    "Een methodiek voor professionals die met samengestelde gezinnen werken. Structuur, overzicht en concrete tools voor planmatige begeleiding.",
};

const INK = "#0E2A47";
const TEXT = "rgba(14, 42, 71, 0.72)";
const BORDER = "rgba(14, 42, 71, 0.14)";

export default function HomePage() {
  return (
    <div className="relative overflow-hidden">
      {/* Achtergrond accentlaag */}
      <div className="pointer-events-none absolute inset-0 z-0">
        {/* Grote zachte cirkel linksboven */}
        <div
          className="absolute -top-[140px] -left-[220px] h-[760px] w-[760px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(44,75,154,0.18) 0%, rgba(44,75,154,0) 68%)",
          }}
        />

        {/* Grote zachte cirkel rechtsboven */}
        <div
          className="absolute top-[120px] -right-[280px] h-[860px] w-[860px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(23,179,176,0.16) 0%, rgba(23,179,176,0) 70%)",
          }}
        />

        {/* Grote zachte cirkel rechtsonder */}
        <div
          className="absolute -bottom-[420px] left-[18%] h-[1100px] w-[1100px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(14,42,71,0.12) 0%, rgba(14,42,71,0) 72%)",
          }}
        />

        {/* Extra zachte gloed in het midden */}
        <div
          className="absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(44,75,154,0.08) 0%, rgba(44,75,154,0) 74%)",
          }}
        />
      </div>

      {/* Content laag */}
      <div className="relative z-10">
        {/* HERO */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          {/* Subtiel kompas grid - iets zichtbaarder */}
          <div className="absolute inset-0 flex items-center justify-center opacity-[0.06] pointer-events-none">
            <div className="relative w-[800px] h-[800px]">
              <div className="absolute left-1/2 top-0 bottom-0 w-px" style={{ background: INK }} />
              <div className="absolute top-1/2 left-0 right-0 h-px" style={{ background: INK }} />
              <div className="absolute inset-0 rotate-45">
                <div className="absolute left-1/2 top-0 bottom-0 w-px" style={{ background: INK }} />
                <div className="absolute top-1/2 left-0 right-0 h-px" style={{ background: INK }} />
              </div>
              <div className="absolute inset-0 border rounded-full" style={{ borderColor: INK }} />
            </div>
          </div>

          <div className="relative mx-auto max-w-5xl px-6">
            <div className="text-center space-y-8">
              <h1
                className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] max-w-4xl mx-auto"
                style={{ color: INK }}
              >
                Stiefkompas geeft richting in de complexiteit van samengestelde gezinnen
              </h1>

              <p className="text-xl leading-relaxed max-w-3xl mx-auto" style={{ color: TEXT }}>
                Een methodiek voor sociaal werkers, coaches, gezinsbegeleiders en andere
                hulpverleners die met samengestelde gezinnen werken. Zij krijgen structuur,
                overzicht en concrete tools om gezinnen planmatig te begeleiden, met blijvende
                aandacht voor relaties en afstemming.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                <Link
                  href="/methode"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold rounded-xl hover:opacity-90 transition-all shadow-lg"
                  style={{
                    background: INK,
                    color: "#FFFFFF",
                  }}
                >
                  Ontdek de methodiek
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>

                <Link
                  href="/training-certificering"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold rounded-xl hover:bg-slate-50 transition-colors"
                  style={{
                    color: INK,
                    border: `2px solid ${INK}`,
                  }}
                >
                  Scholing & certificering
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* WAAROM STIEFKOMPAS */}
        <section className="relative py-24 lg:py-32">
          <div className="mx-auto max-w-4xl px-6">
            <div
              className="space-y-8 text-lg leading-relaxed pl-8"
              style={{
                color: TEXT,
                borderLeft: `2px solid ${BORDER}`,
              }}
            >
              <p>
                Samengestelde gezinnen hebben te maken met meerdere loyaliteiten, verschillen in
                opvoedstijl, verlieservaringen en uiteenlopende tempo&apos;s. Deze samenloop van
                factoren maakt begeleiding gelaagd en complex.
              </p>
              <p>
                Stiefkompas helpt om deze gelaagdheid te ordenen, geeft taal aan wat er speelt,
                en ondersteunt het gezin bij het bepalen van wat op dit moment het meest helpend
                is.
              </p>
            </div>
          </div>
        </section>

        {/* WAT JE KRIJGT MET STIEFKOMPAS */}
        <section className="relative py-16 lg:py-24 bg-slate-50/65 backdrop-blur-[1px]">
          <div className="mx-auto max-w-6xl px-6">
            <div className="text-center space-y-6 max-w-3xl mx-auto mb-16">
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight"
                style={{ color: INK }}
              >
                Wat je krijgt met Stiefkompas
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Een helder en werkbaar analysekader",
                  desc: "Vijf pijlers (het Kompasmodel) om gezinsdynamiek te ordenen en samenhang zichtbaar te maken",
                  icon:
                    "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7",
                },
                {
                  title: "Tools en werkvormen",
                  desc: "Om doelen, acties en vervolgstappen concreet te maken en vast te leggen",
                  icon:
                    "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                },
                {
                  title: "Een methodische route",
                  desc: "Van duiding → naar planvorming → naar passende interventies",
                  icon: "M13 10V3L4 14h7v7l9-11h-7z",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="p-8 rounded-xl bg-white/85 backdrop-blur-[1px]"
                  style={{ border: `1px solid ${BORDER}` }}
                >
                  <div
                    className="flex items-center justify-center h-14 w-14 rounded-xl mb-6"
                    style={{ background: "rgba(14, 42, 71, 0.08)", color: INK }}
                  >
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3" style={{ color: INK }}>
                    {item.title}
                  </h3>
                  <p className="leading-relaxed" style={{ color: TEXT }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ONTWIKKELD VOOR PROFESSIONALS */}
        <section className="relative py-16 lg:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="text-center space-y-6 max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight" style={{ color: INK }}>
                Ontwikkeld voor professionals die gezinnen willen begeleiden vanuit overzicht
                en rust
              </h2>
              <p className="text-lg leading-relaxed" style={{ color: TEXT }}>
                Ook wanneer de situatie complex en emotioneel beladen is.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Voor professionals",
                  desc: "Ontwikkeld voor professionals die werken met samengestelde gezinnen, ook als je geen specialistische voorkennis hebt.",
                  icon:
                    "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
                },
                {
                  title: "Rust & overzicht",
                  desc: "Je krijgt zicht op onderliggende patronen en kunt in afstemming met het gezin bepalen wat prioriteit krijgt.",
                  icon:
                    "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z",
                },
                {
                  title: "Direct toepasbaar",
                  desc: "Concrete tools die je direct inzet in je sessies met gezinnen",
                  icon: "M13 10V3L4 14h7v7l9-11h-7z",
                },
              ].map((item) => (
                <div key={item.title} className="text-center space-y-4">
                  <div
                    className="flex items-center justify-center h-16 w-16 rounded-2xl mx-auto"
                    style={{ background: "rgba(14, 42, 71, 0.08)", color: INK }}
                  >
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold" style={{ color: INK }}>
                    {item.title}
                  </h3>
                  <p className="leading-relaxed" style={{ color: TEXT }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HET KOMPASMODEL */}
        <section className="relative py-16 lg:py-24 bg-slate-50/65 backdrop-blur-[1px]">
          <div className="mx-auto max-w-6xl px-6">
            <div className="text-center space-y-6 max-w-3xl mx-auto mb-16">
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight"
                style={{ color: INK }}
              >
                Het Kompasmodel: vijf pijlers die richting geven
              </h2>
              <p className="text-lg leading-relaxed" style={{ color: TEXT }}>
                Centraal binnen Stiefkompas staat het Kompasmodel. Dit model bestaat uit vijf
                samenhangende pijlers die helpen om de dynamiek binnen een samengesteld gezin
                systematisch in kaart te brengen.
              </p>
              <p className="text-base leading-relaxed" style={{ color: TEXT }}>
                De pijlers maken zichtbaar waar spanning ontstaat, welke patronen meespelen en
                welke stap op dit moment het meest passend is. In plaats van te blijven hangen
                in losse problemen of incidenten, biedt het Kompasmodel een overkoepelend kader
                voor begeleiding.
              </p>
            </div>

            <div className="mb-12">
              <KompasModel />
            </div>
          </div>
        </section>

        {/* VOOR WIE + STEVIG & BEGRIJPELIJK */}
        <section className="relative py-16 lg:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight" style={{ color: INK }}>
                Voor wie
              </h2>
              <p className="mt-5 text-lg leading-relaxed max-w-3xl mx-auto" style={{ color: TEXT }}>
                Voor (stief)gezinscoaches, jeugdprofessionals en hulpverleners die werken met
                samengestelde gezinnen en behoefte hebben aan overzicht en houvast.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight" style={{ color: INK }}>
                  Stevig én begrijpelijk
                </h3>
                <p className="text-lg leading-relaxed" style={{ color: TEXT }}>
                  Gebouwd op inzichten uit systeemdenken, hechting, loyaliteit en
                  stressregulatie, en vertaald naar begrijpelijke taal en toepasbaar in de
                  dagelijkse praktijk.
                </p>
                <Link
                  href="/wetenschappelijke-basis"
                  className="inline-flex items-center gap-2 font-semibold hover:gap-3 transition-all"
                  style={{ color: INK }}
                >
                  Wetenschappelijke basis
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              <div className="space-y-6">
                <h3 className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight" style={{ color: INK }}>
                  Praktisch in je sessie
                </h3>
                <p className="text-lg leading-relaxed" style={{ color: TEXT }}>
                  Met scans, kaarten en werkvormen maak je het gesprek concreet en leg je
                  afspraken en vervolgstappen helder vast in het routeboek.
                </p>
                <Link
                  href="/materialen-tools"
                  className="inline-flex items-center gap-2 font-semibold hover:gap-3 transition-all"
                  style={{ color: INK }}
                >
                  Tools & materialen
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section
          className="relative py-24 lg:py-32"
          style={{ background: `linear-gradient(to bottom right, ${INK}, #1a3a5c, ${INK})` }}
        >
          <div className="mx-auto max-w-4xl px-6 text-center">
            <div className="space-y-10">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
                Word gecertificeerd in de Stiefkompas-methodiek
              </h2>

              <p className="text-xl leading-relaxed max-w-2xl mx-auto" style={{ color: "rgba(255, 255, 255, 0.85)" }}>
                Leer samengestelde gezinnen effectief begeleiden met structuur, taal en
                concrete handvatten.
              </p>

              <div className="pt-4">
                <Link
                  href="/training-certificering"
                  className="inline-flex items-center justify-center gap-3 px-12 py-5 text-xl font-bold rounded-xl bg-white hover:bg-slate-100 transition-all shadow-2xl hover:scale-[1.03]"
                  style={{ color: INK }}
                >
                  Bekijk de opleiding
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>

                <div className="mt-6">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 text-base font-medium transition-colors hover:text-white"
                    style={{ color: "rgba(255, 255, 255, 0.7)" }}
                  >
                    Of neem eerst contact op
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}