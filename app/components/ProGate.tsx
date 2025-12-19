import Link from "next/link";

type ProGateProps = {
  title: string;
  teaser?: string;
};

export default function ProGate({ title, teaser }: ProGateProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <p className="text-xs font-medium uppercase tracking-[0.22em] text-slate-500">
        Alleen voor gecertificeerden
      </p>

      <h2 className="mt-3 text-xl font-semibold tracking-tight text-slate-900">
        {title}
      </h2>

      {teaser ? (
        <p className="mt-3 text-sm text-slate-700 leading-relaxed max-w-2xl">
          {teaser}
        </p>
      ) : null}

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <Link
          href="/training-certificering"
          className="inline-flex rounded-full border border-slate-900 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-slate-900 hover:bg-slate-900 hover:text-white transition"
        >
          Certificering bekijken
        </Link>

        <Link
          href="/contact"
          className="inline-flex rounded-full border border-slate-200 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-slate-700 hover:bg-slate-50 transition"
        >
          Vraag toegang aan
        </Link>
      </div>
    </div>
  );
}