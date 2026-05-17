import Link from "next/link";
import { requireStaff } from "./actions";
import LogoutButton from "./components/LogoutButton";

export default async function DocentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { profile } = await requireStaff();

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="border-b bg-white shadow-sm">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/docent" className="font-semibold text-slate-900">
              Docentomgeving
            </Link>

            <nav className="flex items-center gap-4 text-sm">
              <Link
                href="/docent/inbox"
                className="text-blue-600 underline-offset-4 hover:underline"
              >
                Inbox
              </Link>
              <Link
                href="/portaal"
                className="text-slate-600 underline-offset-4 hover:underline"
              >
                Naar cursistportaal
              </Link>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-sm text-slate-600">
              {profile?.full_name ?? profile?.email ?? "Docent"} •{" "}
              <span className="font-medium text-slate-900">{profile?.role}</span>
            </div>

            <LogoutButton />
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-8">{children}</main>
    </div>
  );
}