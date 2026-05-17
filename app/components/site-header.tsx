"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { ChevronDown, User } from "lucide-react";
import { SearchDialog } from "./search-dialog";

type MenuLink = { label: string; href: string };
type MenuItem = { label: string; items?: MenuLink[]; href?: string };

const MENU: MenuItem[] = [
  {
    label: "Stiefkompas",
    items: [
      { label: "Over Stiefkompas", href: "/" },
      { label: "De methodiek", href: "/methode" },
      { label: "Wetenschappelijke basis", href: "/wetenschappelijke-basis" },
      { label: "Werkwijze", href: "/werkwijze" },
    ],
  },
  {
    label: "Opleiding & certificering",
    items: [
      { label: "Over de opleiding", href: "/training-certificering" },
      { label: "Voor wie", href: "/training-certificering#voor-wie" },
      { label: "Opbouw & modules", href: "/training-certificering#opbouw" },
      { label: "Tarieven", href: "/training-certificering#tarieven" },
      { label: "Inschrijven", href: "/inschrijven" },
    ],
  },
  { label: "Materialen & tools", href: "/materialen-tools" },
  { label: "Publicaties", href: "/publicaties" },
  { label: "Over ons", href: "/ontwikkelaar" },
  { label: "Contact", href: "/contact" },
];

function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

export default function SiteHeader() {
  const pathname = usePathname();

  const [open, setOpen] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState<string | null>(null);

  useEffect(() => {
    setOpen(null);
    setMobileOpen(false);
    setMobileSubmenuOpen(null);
  }, [pathname]);

  const currentTop = useMemo(() => {
    const hit = MENU.find((m) => (m.href ? isActivePath(pathname, m.href) : false));
    if (hit?.label) return hit.label;

    const dropdownHit = MENU.find((m) => m.items?.some((s) => isActivePath(pathname, s.href)));
    return dropdownHit?.label ?? null;
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto max-w-7xl px-6">
        {/* Bovenste rij: Logo links, Search + Login rechts (aligned met menu) */}
        <div className="flex items-center justify-between gap-4 py-3">
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src="/logo-stiefkompas.svg"
              alt="Stiefkompas"
              width={220}
              height={90}
              className="h-10 sm:h-11 w-auto"
              priority
            />
          </Link>

          {/* Rechts: align met einde van menu */}
          <div className="flex items-center gap-3 shrink-0 pr-4">
            <div className="hidden md:block">
              <SearchDialog />
            </div>

            <Link
              href="/login"
              className="hidden md:inline-flex items-center justify-center h-11 w-11 rounded-full text-[#0E2A47] hover:bg-slate-50"
              style={{ border: '1px solid rgba(14, 42, 71, 0.14)' }}
              aria-label="Login"
            >
              <User className="h-5 w-5" />
            </Link>
          </div>
        </div>

        {/* Onderste rij: Tagline links, Menu rechts */}
        <div className="flex items-center justify-between gap-6 py-3" style={{ borderTop: '1px solid rgba(14, 42, 71, 0.14)' }}>
          {/* Tagline */}
          <div className="min-w-0 shrink-0">
            <div className="text-xs font-semibold uppercase tracking-[0.22em] leading-none" style={{ color: '#0E2A47' }}>
              Samen een richting vinden
            </div>
            <div className="mt-1 text-xs leading-none" style={{ color: 'rgba(14, 42, 71, 0.6)' }}>
              Methodiek voor samengestelde gezinnen
            </div>
          </div>

          {/* Desktop menu */}
          <nav className="hidden md:flex items-center justify-end gap-1 flex-1">
            {MENU.map((item) => {
              const isDropdown = !!item.items?.length;
              const isCurrent =
                item.href
                  ? isActivePath(pathname, item.href)
                  : item.items?.some((s) => isActivePath(pathname, s.href));

              if (isDropdown) {
                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setOpen(item.label)}
                    onMouseLeave={() => setOpen(null)}
                  >
                    <button
                      type="button"
                      className="inline-flex items-center rounded-full px-4 py-2.5 text-base font-medium transition-all"
                      style={{ 
                        color: isCurrent ? '#0E2A47' : 'rgba(14, 42, 71, 0.72)',
                        backgroundColor: open === item.label ? 'rgba(14, 42, 71, 0.08)' : 'transparent'
                      }}
                      onMouseEnter={(e) => {
                        if (open !== item.label) {
                          e.currentTarget.style.backgroundColor = 'rgba(14, 42, 71, 0.08)';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (open !== item.label) {
                          e.currentTarget.style.backgroundColor = 'transparent';
                        }
                      }}
                      aria-haspopup="menu"
                      aria-expanded={open === item.label}
                    >
                      {item.label}
                      <ChevronDown
                        className={[
                          "ml-2 h-4 w-4 transition-transform duration-200",
                          open === item.label ? "rotate-180" : "",
                        ].join(" ")}
                      />
                    </button>

                    {open === item.label && (
                      <div className="absolute left-0 pt-3 w-80" role="menu">
                        <div className="rounded-2xl bg-white p-2 shadow-lg" style={{ border: '1px solid rgba(14, 42, 71, 0.14)' }}>
                          {item.items!.map((sub) => {
                            const active = isActivePath(pathname, sub.href);
                            return (
                              <Link
                                key={sub.href}
                                href={sub.href}
                                className="group flex items-center rounded-xl px-4 py-3 text-base transition-all"
                                style={{
                                  backgroundColor: active ? 'rgba(14, 42, 71, 0.08)' : 'transparent',
                                  color: active ? '#0E2A47' : 'rgba(14, 42, 71, 0.72)',
                                  borderLeft: active ? '4px solid #0E2A47' : '4px solid transparent',
                                  fontWeight: active ? 600 : 400,
                                }}
                                onMouseEnter={(e) => {
                                  if (!active) {
                                    e.currentTarget.style.backgroundColor = 'rgba(14, 42, 71, 0.12)';
                                  }
                                }}
                                onMouseLeave={(e) => {
                                  if (!active) {
                                    e.currentTarget.style.backgroundColor = 'transparent';
                                  }
                                }}
                                role="menuitem"
                              >
                                <span className="flex-1">{sub.label}</span>
                                <span
                                  className="h-2 w-2 rounded-full transition-colors"
                                  style={{ backgroundColor: active ? '#0E2A47' : 'transparent' }}
                                />
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.label}
                  href={item.href!}
                  className="inline-flex items-center rounded-full px-4 py-2.5 text-base font-medium transition-all"
                  style={{ 
                    color: isCurrent ? '#0E2A47' : 'rgba(14, 42, 71, 0.72)',
                    backgroundColor: 'transparent'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(14, 42, 71, 0.08)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }}
                  aria-current={isCurrent ? "page" : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile toggle */}
          <button
            type="button"
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-[#0E2A47]"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Open menu"
          >
            ☰
          </button>
        </div>

        {/* Mobile panel */}
        {mobileOpen && (
          <div className="md:hidden pb-4 pt-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-2">
              <div className="mb-2">
                <SearchDialog />
              </div>

              {MENU.map((item) => {
                const hasSub = !!item.items?.length;

                return (
                  <div key={item.label} className="border-b last:border-b-0 border-slate-100 py-2">
                    {!hasSub ? (
                      <Link
                        href={item.href!}
                        className="block rounded-xl px-4 py-3 text-base font-semibold text-[#0E2A47] hover:bg-slate-50"
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <>
                        <button
                          type="button"
                          onClick={() =>
                            setMobileSubmenuOpen(mobileSubmenuOpen === item.label ? null : item.label)
                          }
                          className="w-full flex items-center justify-between rounded-xl px-4 py-3 text-base font-semibold text-[#0E2A47] hover:bg-slate-50"
                        >
                          {item.label}
                          <ChevronDown
                            className={[
                              "h-4 w-4 transition-transform duration-200",
                              mobileSubmenuOpen === item.label ? "rotate-180" : "",
                            ].join(" ")}
                          />
                        </button>

                        {mobileSubmenuOpen === item.label && (
                          <div className="pl-3 mt-1">
                            {item.items!.map((s) => (
                              <Link
                                key={s.href}
                                href={s.href}
                                className="block rounded-xl px-4 py-3 text-base text-slate-700 hover:bg-slate-50 hover:text-[#0E2A47]"
                              >
                                {s.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </>
                    )}
                  </div>
                );
              })}

              <Link
                href="/login"
                className="mt-2 flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 py-3 text-base font-semibold text-[#0E2A47] hover:bg-slate-50"
              >
                <User className="h-5 w-5" />
                Login
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}