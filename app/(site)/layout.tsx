// app/(site)/layout.tsx
import type { ReactNode } from "react";
import SiteHeader from "@/app/components/site-header";

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="relative">{children}</main>
    </div>
  );
}