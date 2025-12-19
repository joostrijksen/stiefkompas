import Link from "next/link";

export default function PortaalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link
              href="/portaal/dashboard"
              className="text-sm font-semibold tracking-tight text-slate-900"
            >
              Stiefkompas · Portaal
            </Link>

            <nav className="hidden md:flex items-center gap-4">
              <Link
                href="/portaal/leren"
                className="text-sm text-slate-600 hover:text-slate-900 transition"
              >
                Leeromgeving
              </Link>
              <Link
                href="/portaal/tools"
                className="text-sm text-slate-600 hover:text-slate-900 transition"
              >
                Pro tools
              </Link>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/portaal/profiel"
              className="text-sm text-slate-600 hover:text-slate-900 transition"
            >
              Profiel
            </Link>
            <Link
              href="/"
              className="text-xs uppercase tracking-[0.2em] text-slate-500 hover:text-slate-700 transition"
            >
              Website
            </Link>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-10">{children}</main>
    </div>
  );
}