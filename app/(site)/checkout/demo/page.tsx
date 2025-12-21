// app/(site)/checkout/demo/page.tsx
import Link from "next/link";

export default async function CheckoutDemoPage({
  searchParams,
}: {
  searchParams: Promise<{ product?: string }>;
}) {
  const { product } = await searchParams;

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-semibold tracking-tight text-[#0E2A47]">
        Demo checkout
      </h1>

      <p className="mt-3 text-slate-700">
        Je hebt (demo) gekozen voor:{" "}
        <span className="font-semibold">{product ?? "onbekend"}</span>
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          href="/inschrijven#tarieven"
          className="inline-flex items-center justify-center rounded-full bg-[#17B3B0] px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] !text-white hover:opacity-90 transition"
        >
          Terug naar tarieven
        </Link>

        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700 hover:bg-slate-50 transition"
        >
          Naar home
        </Link>
      </div>
    </div>
  );
}