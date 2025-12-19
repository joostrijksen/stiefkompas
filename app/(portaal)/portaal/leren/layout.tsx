// app/(portaal)/portaal/leren/layout.tsx
import { modules } from "./_content";
import LerenSidebar from "./LerenSidebar";

type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{ moduleSlug?: string; lessonSlug?: string }>;
};

export default async function LerenLayout({ children, params }: LayoutProps) {
  const { moduleSlug, lessonSlug } = await params;

  return (
    <div className="grid gap-8 lg:grid-cols-[320px_1fr]">
      <LerenSidebar
        modules={modules}
        moduleSlug={moduleSlug}
        lessonSlug={lessonSlug}
      />

      <main className="min-w-0">{children}</main>
    </div>
  );
}