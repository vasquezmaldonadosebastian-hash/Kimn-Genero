/*
 * Header — Observatorio de Indicadores de Género
 * Design: Sticky header, 64px height, logo left + nav right
 * Colors: White bg with bottom border, primary purple for active/hover
 */

import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, BarChart3 } from "lucide-react";

const navItems = [
  { label: "Inicio", href: "/" },
  { label: "Indicadores", href: "/indicadores" },
  { label: "Metodología", href: "/metodologia" },
  { label: "Glosario", href: "/glosario" },
  { label: "Contacto", href: "/contacto" },
];

export default function Header() {
  const [location] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[oklch(0.88_0.015_290)] shadow-sm">
      <div className="container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center gap-3 group">
              <div className="w-9 h-9 rounded-lg bg-[#673AB7] flex items-center justify-center shadow-sm group-hover:bg-[#4527A0] transition-colors">
                <BarChart3 className="w-5 h-5 text-white" />
              </div>
              <div className="leading-tight">
                <div className="font-bold text-[#4527A0] text-sm tracking-wide" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  OBSERVATORIO
                </div>
                <div className="text-xs text-[#673AB7] font-medium tracking-wider uppercase" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Indicadores de Género
                </div>
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = location === item.href || (item.href !== "/" && location.startsWith(item.href));
              return (
                <Link key={item.href} href={item.href}>
                  <span
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-150 ${
                      isActive
                        ? "bg-[#EDE7F6] text-[#4527A0] font-semibold"
                        : "text-gray-600 hover:bg-[#F5F4F8] hover:text-[#673AB7]"
                    }`}
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </nav>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden p-2 rounded-md text-gray-600 hover:bg-[#F5F4F8]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menú de navegación"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="md:hidden border-t border-[oklch(0.88_0.015_290)] bg-white animate-fade-in">
          <nav className="container py-3 flex flex-col gap-1">
            {navItems.map((item) => {
              const isActive = location === item.href || (item.href !== "/" && location.startsWith(item.href));
              return (
                <Link key={item.href} href={item.href}>
                  <span
                    className={`block px-4 py-2.5 rounded-md text-sm font-medium transition-all ${
                      isActive
                        ? "bg-[#EDE7F6] text-[#4527A0] font-semibold"
                        : "text-gray-600 hover:bg-[#F5F4F8] hover:text-[#673AB7]"
                    }`}
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
