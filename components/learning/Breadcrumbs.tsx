import Link from "next/link";

export default function Breadcrumbs({
  items,
}: {
  items: { label: string; href?: string }[];
}) {
  return (
    <nav className="text-xs text-slate-500">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((it, idx) => (
          <li key={`${it.label}-${idx}`} className="flex items-center gap-2">
            {it.href ? (
              <Link href={it.href} className="hover:text-slate-700">
                {it.label}
              </Link>
            ) : (
              <span className="text-slate-700">{it.label}</span>
            )}
            {idx < items.length - 1 && <span className="text-slate-300">›</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}