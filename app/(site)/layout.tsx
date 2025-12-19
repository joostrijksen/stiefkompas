// app/(site)/layout.tsx
import type { ReactNode } from "react";
import SiteHeader from "@/app/components/site-header";
import SiteFooter from "@/app/components/site-footer";

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-dvh flex flex-col bg-white">
      <SiteHeader />

      <main className="flex-1">
        {/* Brede pagina container, zonder 'kaart' eromheen */}
        <div className="mx-auto max-w-7xl px-4 py-10 md:px-8">
          {children}
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}