import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-teal-50 via-white to-rose-50">
      <div className="mx-auto max-w-7xl px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* LINKS: TEKST */}
        <div>
          <p className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm text-slate-600 shadow-sm mb-6">
            <span className="h-2 w-2 rounded-full bg-teal-500" />
            Methodiek voor samengestelde gezinnen
          </p>

          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-slate-900">
            <span className="text-teal-600">Richting</span> in de complexiteit
            <br />
            van samengestelde gezinnen
          </h1>

          <p className="mt-6 max-w-xl text-lg text-slate-600">
            Een methodiek die coaches structuur, overzicht en concrete tools biedt
            om gezinnen planmatig te begeleiden — met oog voor het menselijke.
          </p>

          <div className="mt-8 flex items-center gap-6">
            <a
              href="/methode"
              className="rounded-xl bg-teal-600 px-6 py-3 text-white font-medium shadow hover:bg-teal-700 transition"
            >
              Ontdek de methodiek
            </a>

            <a
              href="/voor-coaches"
              className="text-slate-600 hover:text-slate-900"
            >
              Voor coaches & begeleiders →
            </a>
          </div>
        </div>

        {/* RECHTS: AFBEELDING */}
        <div className="relative">
          <Image
            src="/hero-stiefkompas.png"
            alt="Abstract kompas – richting en overzicht"
            width={700}
            height={700}
            className="w-full h-auto"
            priority
          />
        </div>
      </div>

      {/* afgeronde onderkant (optioneel, maar mooi) */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-white rounded-t-[40px]" />
    </section>
  );
}