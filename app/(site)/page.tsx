import Link from "next/link";
import { KompasModel } from "../components/kompas-model";

export default function HomePage() {
  return (
    <div className="relative bg-white">
      {/* HERO SECTION */}
      <section className="relative min-h-[82vh] overflow-hidden bg-gradient-to-br from-slate-50 via-white to-stone-50">
        {/* Organische vormen (zachter, rustiger) */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div
            className="absolute -right-[18%] top-[8%] h-[520px] w-[520px] rounded-[60%_40%_30%_70%/60%_30%_70%_40%] bg-gradient-to-br from-rose-200/40 to-rose-300/25 blur-2xl"
            style={{ transform: "rotate(-12deg)" }}
          />
          <div
            className="absolute -left-[14%] bottom-[0%] h-[620px] w-[620px] rounded-[40%_60%_70%_30%/40%_50%_60%_50%] bg-gradient-to-tr from-teal-200/35 to-teal-300/20 blur-2xl"
            style={{ transform: "rotate(18deg)" }}
          />
        </div>

        {/* Content */}
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-28">
          <div className="max-w-3xl space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur-sm px-4 py-2 shadow-sm border border-slate-200/60">
              <span className="h-2 w-2 rounded-full bg-teal-600" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-700">
                Methodiek voor samengestelde gezinnen
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900 leading-[1.08]">
              Stiefkompas geeft richting in de complexiteit van samengestelde gezinnen
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl">
              Een methodiek die coaches structuur, overzicht en concrete tools biedt om gezinnen
              planmatig te begeleiden — zonder het menselijke uit het oog te verliezen.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-3">
              <Link
                href="/methode"
                className="inline-flex items-center justify-center rounded-full bg-teal-700 px-8 py-4 text-base font-semibold text-white hover:bg-teal-800 transition shadow-md"
              >
                Ontdek de methodiek
              </Link>

              <Link
                href="/training-certificering"
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-base font-semibold text-slate-900 hover:bg-slate-50 transition shadow-sm border border-slate-200"
              >
                Scholing & certificering
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 space-y-28">
        {/* 3 HIGHLIGHT CARDS */}
        <section className="grid gap-8 md:grid-cols-3">
          <Card tone="white" title="Voor coaches" eyebrowClass="text-teal-700" dotClass="bg-teal-100">
            Ontwikkeld voor professionals die werken met samengestelde gezinnen,
            ook als je geen specialistische voorkennis hebt.
          </Card>

          <Card tone="tint-rose" title="Rust & overzicht" eyebrowClass="text-rose-700" dotClass="bg-rose-200/60">
            Je krijgt zicht op onderliggende patronen en weet wat eerst aandacht vraagt.
          </Card>

          <Card tone="white" title="Direct toepasbaar" eyebrowClass="text-slate-700" dotClass="bg-slate-100">
            Concrete tools die je direct inzet in je sessies met gezinnen.
          </Card>
        </section>

        {/* MODEL SECTION */}
        <section className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900">
              Het Kompasmodel: vijf pijlers die richting geven
            </h2>

            <div className="space-y-4 text-base text-slate-600 leading-relaxed">
              <p>
                Centraal binnen Stiefkompas staat het Kompasmodel. Dit model bestaat uit vijf
                samenhangende pijlers die helpen om de dynamiek binnen een samengesteld gezin
                systematisch in kaart te brengen.
              </p>

              <p>
                De pijlers maken zichtbaar waar spanning ontstaat, welke patronen meespelen en
                welke stap op dit moment het meest passend is. In plaats van te blijven hangen
                in losse problemen of incidenten, biedt het Kompasmodel een overkoepelend kader
                voor begeleiding.
              </p>
            </div>

            <Link
              href="/methode"
              className="inline-flex items-center text-base font-semibold text-teal-700 hover:text-teal-900 group"
            >
              Lees meer over de pijlers
              <svg
                className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="relative">
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-teal-50 to-rose-50 rounded-3xl rotate-2" />
            <div className="relative overflow-hidden rounded-3xl bg-white p-8 shadow-md border border-stone-200">
              <div className="w-full max-w-sm mx-auto">
                <KompasModel />
              </div>
            </div>
          </div>
        </section>

        {/* FEATURE CARDS */}
        <section className="grid gap-8 md:grid-cols-3">
          <FeatureCard
            title="Voor wie"
            text="Voor (stief)gezinscoaches, jeugdprofessionals en hulpverleners die werken met samengestelde gezinnen en behoefte hebben aan overzicht en houvast."
            href="/voor-coaches"
            hrefLabel="Voor professionals"
            accent="teal"
          />
          <FeatureCard
            title="Stevig én begrijpelijk"
            text="Gebouwd op inzichten uit systeemdenken, hechting, loyaliteit en stress, maar vertaald naar gewone taal en toepasbaar in de dagelijkse praktijk."
            href="/wetenschappelijke-basis"
            hrefLabel="Wetenschappelijke basis"
            accent="tealSoft"
          />
          <FeatureCard
            title="Praktisch in je sessie"
            text="Met scans, kaarten en werkvormen maak je het gesprek concreet en leg je afspraken en vervolgstappen helder vast in het routeboek."
            href="/materialen-tools"
            hrefLabel="Tools & materialen"
            accent="rose"
          />
        </section>

        {/* FINAL CTA */}
        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 via-slate-800 to-teal-900 p-10 sm:p-14 text-white shadow-xl">
          <div className="pointer-events-none absolute -right-32 -top-32 h-64 w-64 rounded-full bg-teal-500/15 blur-2xl" />
          <div className="pointer-events-none absolute -left-32 -bottom-32 h-64 w-64 rounded-full bg-rose-500/15 blur-2xl" />

          <div className="relative grid gap-8 lg:grid-cols-[1.5fr_1fr] items-center">
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight">
                Klaar om Stiefkompas in te zetten?
              </h3>
              <p className="text-lg text-white/90 leading-relaxed max-w-xl">
                Bekijk de route door de methodiek, ontdek de tools en lees hoe je dit in jouw
                praktijk stap voor stap toepast.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 lg:justify-end">
              <Link
                href="/methode"
                className="inline-flex items-center justify-center rounded-full bg-teal-600 px-8 py-4 text-base font-semibold text-white hover:bg-teal-700 transition shadow-lg"
              >
                Start bij de methode
              </Link>
              <Link
                href="/training-certificering"
                className="inline-flex items-center justify-center rounded-full bg-transparent px-8 py-4 text-base font-semibold text-white hover:bg-white/10 transition border-2 border-white"
              >
                Certificering
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

function Card({
  title,
  children,
  tone,
  eyebrowClass,
  dotClass,
}: {
  title: string;
  children: React.ReactNode;
  tone: "white" | "tint-rose";
  eyebrowClass: string;
  dotClass: string;
}) {
  const toneClass =
    tone === "tint-rose"
      ? "bg-gradient-to-br from-rose-50 to-pink-50 border-rose-100"
      : "bg-white border-stone-200";

  return (
    <div className={`relative overflow-hidden rounded-3xl p-8 shadow-md border ${toneClass}`}>
      <div className={`absolute -right-16 -top-16 h-32 w-32 rounded-full ${dotClass}`} />
      <div className="relative space-y-3">
        <h3 className={`text-sm font-bold uppercase tracking-[0.2em] ${eyebrowClass}`}>
          {title}
        </h3>
        <p className="text-base text-slate-700 leading-relaxed">{children}</p>
      </div>
    </div>
  );
}

function FeatureCard({
  title,
  text,
  href,
  hrefLabel,
  accent,
}: {
  title: string;
  text: string;
  href: string;
  hrefLabel: string;
  accent: "teal" | "tealSoft" | "rose";
}) {
  const accentBg =
    accent === "teal"
      ? "from-teal-100 to-teal-200"
      : accent === "tealSoft"
      ? "from-teal-50 to-teal-100"
      : "from-rose-100 to-rose-200";

  const eyebrow =
    accent === "rose" ? "text-rose-700" : accent === "teal" ? "text-teal-700" : "text-teal-800";

  return (
    <div className="relative overflow-hidden rounded-3xl bg-white p-8 shadow-md border border-stone-200 hover:shadow-lg transition-all">
      <div className={`absolute -right-20 -bottom-20 h-40 w-40 rounded-full bg-gradient-to-br ${accentBg} opacity-50`} />
      <div className="relative space-y-4">
        <h3 className={`text-sm font-bold uppercase tracking-[0.2em] ${eyebrow}`}>{title}</h3>
        <p className="text-base text-slate-700 leading-relaxed">{text}</p>
        <Link href={href} className="inline-flex items-center text-sm font-semibold text-slate-900 hover:text-teal-700 transition-colors group">
          {hrefLabel}
          <svg className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
}