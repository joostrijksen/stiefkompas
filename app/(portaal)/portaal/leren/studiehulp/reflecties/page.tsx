// app/(portaal)/portaal/leren/studiehulp/reflecties/page.tsx
import Link from "next/link";
import Breadcrumbs from "@/components/learning/Breadcrumbs";
import ReflectionArchive from "@/components/learning/ReflectionArchive";

export const dynamic = "force-dynamic";

export default async function ReflectiesPage() {
  return (
    <main className="space-y-6">
      <Breadcrumbs
        items={[
          { label: "Leeromgeving", href: "/portaal/leren" },
          { label: "Studiehulp" },
          { label: "Mijn reflecties" },
        ]}
      />

      <header className="space-y-2">
        <h1 className="text-2xl md:text-3xl font-semibold text-slate-900">
          Mijn reflecties
        </h1>
        <p className="text-sm text-slate-600 max-w-3xl">
          Hier vind je al je reflecties per module, hoofdstuk en blok. Reflecties
          zijn read-only en blijven bewaard als momentopnames. Je kunt altijd een
          nieuwe reflectie toevoegen met een nieuwe datum.
        </p>

        <div className="pt-2">
          <Link
            href="/portaal/leren"
            className="text-sm text-slate-900 underline underline-offset-4 hover:text-slate-700"
          >
            Terug naar leeromgeving
          </Link>
        </div>
      </header>

      <section className="bg-white border border-slate-200 rounded-2xl p-5">
        <ReflectionArchive />
      </section>
    </main>
  );
}