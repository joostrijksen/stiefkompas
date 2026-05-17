import Link from "next/link";

export default function LessonNav({
  prev,
  next,
}: {
  prev: { href: string; title: string } | null;
  next: { href: string; title: string } | null;
}) {
  return (
    <div className="flex items-center justify-between gap-3">
      {prev ? (
        <Link
          href={prev.href}
          className="rounded-full border border-slate-300 px-5 py-2 text-sm text-slate-800 hover:bg-slate-100"
        >
          ← Vorige
        </Link>
      ) : (
        <div />
      )}

      {next ? (
        <Link
          href={next.href}
          className="rounded-full bg-slate-900 text-white px-5 py-2 text-sm hover:bg-slate-800"
        >
          Volgende →
        </Link>
      ) : (
        <span className="text-xs text-slate-500">Einde.</span>
      )}
    </div>
  );
}