"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ChevronDown, User } from "lucide-react";

type MenuLink = { label: string; href: string };
type MenuItem = { label: string; items?: MenuLink[]; href?: string };

const MENU: MenuItem[] = [
  {
    label: "Over Stiefkompas",
    items: [
      { label: "Introductie", href: "/" },
      { label: "Methode", href: "/methode" },
      { label: "Wetenschappelijke basis", href: "/wetenschappelijke-basis" },
      { label: "Publicaties", href: "/publicaties" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    label: "Voor coaches",
    items: [
      { label: "Voor coaches", href: "/voor-coaches" },
      { label: "Training & certificering", href: "/training-certificering" },
      { label: "Materialen & tools", href: "/materialen-tools" },
      { label: "Ontwikkelaar", href: "/ontwikkelaar" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState<string | null>(null);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  useEffect(() => {
    setOpen(null);
    setMobileOpen(false);
    setMobileSubmenuOpen(null);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto max-w-7xl px-6">
        {/* 1 rij: logo | menu | actions */}
        <div className="flex h-20 items-center justify-between gap-8">
          {/* Logo + losse tagline */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <Image
              src="/logo-stiefkompas.svg" // logo ZONDER slogan
              alt="Stiefkompas"
              width={260}
              height={110}
              className="h-10 sm:h-11 w-auto"
              priority
            />

            {/* Tagline als aparte tekstregel */}
            <div className="hidden lg:block pl-6 border-l border-slate-200">
              <div className="text-xs font-semibold uppercase tracking-[0.22em] text-[#2C4B9A]">
                Samen een richting vinden
              </div>
              <div className="text-xs text-slate-500">
                Methodiek voor samengestelde gezinnen
              </div>
            </div>
          </Link>

          {/* Desktop menu - centered */}
          <nav className="hidden md:flex items-center justify-center gap-1 flex-1">
            {MENU.map((item) =>
              item.items ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setOpen(item.label)}
                  onMouseLeave={() => setOpen(null)}
                >
                  <button
                    type="button"
                    className="inline-flex items-center rounded-full px-5 py-2.5 text-base font-medium text-slate-700 hover:text-[#0E2A47]"
                    aria-haspopup="menu"
                    aria-expanded={open === item.label}
                  >
                    {item.label}
                    <ChevronDown
                      className={`ml-2 h-4 w-4 transition-transform duration-200 ${
                        open === item.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {open === item.label && (
                    <div className="absolute left-0 pt-3 w-80" role="menu">
                      <div className="rounded-2xl border border-slate-200 bg-white p-2 shadow-lg">
                        {item.items.map((sub) => {
                          const isActive = pathname === sub.href;
                          return (
                            <Link
                              key={sub.href}
                              href={sub.href}
                              className={`group flex items-center gap-3 rounded-xl px-4 py-3 text-base transition-all ${
                                isActive
                                  ? "bg-[#17B3B0]/10 text-[#0E2A47] border-l-4 border-[#17B3B0] font-semibold"
                                  : "text-slate-700 hover:bg-slate-50 hover:text-[#0E2A47]"
                              }`}
                              role="menuitem"
                              onMouseEnter={() => setHoveredItem(sub.href)}
                              onMouseLeave={() => setHoveredItem(null)}
                            >
                              <ChevronDown
                                className={`h-4 w-4 shrink-0 -rotate-90 transition-transform duration-200 ${
                                  hoveredItem === sub.href || isActive ? "rotate-0 text-[#17B3B0]" : ""
                                }`}
                              />
                              <span className="flex-1">{sub.label}</span>
                              <span
                                className={`h-2 w-2 rounded-full ${
                                  isActive ? "bg-[#17B3B0]" : "bg-transparent group-hover:bg-[#F02B8A]/30"
                                }`}
                              />
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href!}
                  className="inline-flex items-center rounded-full px-5 py-2.5 text-base font-medium text-slate-700 hover:text-[#0E2A47]"
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* Actions (rechts) */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Desktop login - icon only */}
            <Link
              href="/login"
              className="hidden md:inline-flex items-center justify-center h-11 w-11 rounded-full border border-slate-200 text-slate-700 hover:bg-slate-50 hover:text-[#0E2A47]"
              aria-label="Login"
            >
              <User className="h-5 w-5" />
            </Link>

            {/* Mobile: hamburger */}
            <button
              type="button"
              className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-[#0E2A47]"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Open menu"
            >
              ☰
            </button>
          </div>
        </div>

        {/* Tagline op mobiel/tablet (onder de header-rij) */}
        <div className="lg:hidden pb-3 -mt-2">
          <div className="text-xs font-semibold tracking-[0.18em] uppercase text-[#2C4B9A]">
            Samen een richting vinden
          </div>
        </div>

        {/* Mobile menu panel */}
        {mobileOpen && (
          <div className="md:hidden pb-4">
            <div className="rounded-2xl border border-slate-200 bg-white p-2">
              {MENU.map((item) => (
                <div key={item.label} className="border-b last:border-b-0 border-slate-100 py-2">
                  {item.href ? (
                    <Link
                      href={item.href}
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
                          className={`h-4 w-4 transition-transform duration-200 ${
                            mobileSubmenuOpen === item.label ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {mobileSubmenuOpen === item.label && (
                        <div className="pl-3 mt-1">
                          {item.items?.map((s) => {
                            const isActive = pathname === s.href;
                            return (
                              <Link
                                key={s.href}
                                href={s.href}
                                className={`block rounded-xl px-4 py-3 text-base transition-all ${
                                  isActive
                                    ? "bg-[#17B3B0]/10 text-[#0E2A47] border-l-4 border-[#17B3B0] font-semibold"
                                    : "text-slate-700 hover:bg-slate-50 hover:text-[#0E2A47]"
                                }`}
                              >
                                {s.label}
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </>
                  )}
                </div>
              ))}

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