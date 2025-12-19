import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="text-sm text-slate-600">
            <div className="font-semibold text-slate-900">Stiefkompas</div>
            <div>© {new Date().getFullYear()} — Alle rechten voorbehouden</div>
          </div>

          <div className="flex flex-wrap gap-3 text-sm">
            <Link className="text-slate-600 hover:text-slate-900" href="/over">
              Over
            </Link>
            <Link className="text-slate-600 hover:text-slate-900" href="/contact">
              Contact
            </Link>
            <Link className="text-slate-600 hover:text-slate-900" href="/privacy">
              Privacy
            </Link>
            <Link className="text-slate-600 hover:text-slate-900" href="/voorwaarden">
              Voorwaarden
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}