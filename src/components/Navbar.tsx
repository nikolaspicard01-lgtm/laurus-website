"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Icon from "@/components/Icon";
import { useLocale } from "@/lib/LocaleContext";
import type { IconName } from "@/components/Icon";

type NavItem = { name: string; href: string; icon: React.ReactNode };

function useNavItems() {
  const { locale, dict } = useLocale();
  const p = (path: string) => `/${locale}${path}`;
  const t = dict.nav;

  const programs: NavItem[] = [
    { name: t.summerCamp, href: p("/summer-camp"), icon: <Icon name="sun" size={18} /> },
    { name: t.springBreak, href: p("/spring-break"), icon: <Icon name="flower" size={18} /> },
    { name: t.tutoring, href: p("/tutoring"), icon: <Icon name="book-open" size={18} /> },
    { name: t.extraCurriculars, href: p("/extra-curriculars"), icon: <Icon name="palette" size={18} /> },
    { name: t.languagesCamp, href: p("/languages"), icon: <Icon name="globe" size={18} /> },
    { name: t.inclusiveSupport, href: p("/inclusive-support"), icon: <Icon name="heart" size={18} /> },
  ];

  const forSchools: NavItem[] = [
    { name: t.schoolEvents, href: p("/events"), icon: <Icon name="party-popper" size={18} /> },
    { name: t.schoolPartnerships, href: p("/school-partnerships"), icon: <Icon name="handshake" size={18} /> },
  ];

  const about: NavItem[] = [
    { name: t.aboutUs, href: p("/about"), icon: <Icon name="info" size={18} /> },
    { name: t.faqs, href: p("/faq"), icon: <Icon name="help-circle" size={18} /> },
    { name: t.blog, href: p("/blog"), icon: <Icon name="pen-line" size={18} /> },
    { name: t.partners, href: p("/partners"), icon: <Icon name="building" size={18} /> },
  ];

  return { programs, forSchools, about, t, locale, p };
}

function DropdownMenu({ items, isOpen }: { items: NavItem[]; isOpen: boolean }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 8, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 8, scale: 0.97 }}
          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50"
        >
          <div className="bg-white rounded-[20px] shadow-lg border border-[var(--border)] p-2 min-w-[240px]">
            {items.map((item) => (
              <Link key={item.href} href={item.href}
                className="flex items-center gap-3 px-4 py-3 rounded-[14px] text-[15px] font-medium text-text-body hover:bg-blue-light hover:text-blue-dark transition-colors">
                <span className="text-lg">{item.icon}</span>
                {item.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

const ChevronDown = ({ open }: { open: boolean }) => (
  <svg className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
  </svg>
);

const ArrowRight = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
  </svg>
);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const { programs, forSchools, about, t, locale, p } = useNavItems();
  const pathname = usePathname();

  // Build the alternate locale path
  const otherLocale = locale === "en" ? "fr" : "en";
  const switchPath = pathname.replace(`/${locale}`, `/${otherLocale}`);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleMouseEnter = (menu: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(menu);
  };
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveDropdown(null), 150);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-navy text-white/70 text-[13px] font-medium hidden lg:block">
        <div className="max-w-[1320px] mx-auto px-6 py-2 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="tel:+15146000504" className="flex items-center gap-2 hover:text-white transition-colors">
              <Icon name="phone" size={14} /> (514) 600-0504
            </a>
            <a href="mailto:info@laurussummercamp.com" className="flex items-center gap-2 hover:text-white transition-colors">
              <Icon name="file-text" size={14} /> info@laurussummercamp.com
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-white/50">{t.hours}</span>
            <span className="text-white/30">|</span>
            <Link href={locale === "en" ? pathname : switchPath}
              className={`hover:text-white transition-colors ${locale === "en" ? "text-white" : "text-white/40"}`}>
              {t.english}
            </Link>
            <Link href={locale === "fr" ? pathname : switchPath}
              className={`hover:text-white transition-colors ${locale === "fr" ? "text-white" : "text-white/40"}`}>
              {t.french}
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`sticky top-0 z-[100] transition-all duration-300 ${scrolled ? "bg-white/85 backdrop-blur-xl shadow-md" : "bg-white/60 backdrop-blur-lg"} border-b border-[var(--border)]`}>
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 h-[64px] sm:h-[72px] flex items-center justify-between">
          {/* Logo */}
          <Link href={p("/")} className="flex items-center gap-2 sm:gap-3 shrink-0 min-w-0">
            <div className="w-10 h-10 rounded-[12px] bg-gradient-to-br from-blue to-mint flex items-center justify-center text-white font-[var(--font-nunito)] font-black text-lg shadow-md">L</div>
            <div className="font-[var(--font-nunito)]">
              <div className="text-[17px] font-black tracking-tight text-navy leading-tight">
                <span className="text-blue">L</span><span>A</span><span className="text-sunshine">U</span><span>R</span><span className="text-coral">U</span><span>S</span>
              </div>
              <div className="text-[10px] font-bold tracking-[0.15em] uppercase text-text-muted leading-none">
                {locale === "fr" ? "Camp d'été" : "Summer Camp"}
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {[
              { key: "programs", label: t.programs, items: programs },
              { key: "schools", label: t.forSchools, items: forSchools },
              { key: "about", label: t.about, items: about },
            ].map((menu) => (
              <div key={menu.key} className="relative" onMouseEnter={() => handleMouseEnter(menu.key)} onMouseLeave={handleMouseLeave}>
                <button className="px-4 py-2 text-[15px] font-semibold text-text-body hover:text-blue transition-colors flex items-center gap-1">
                  {menu.label}
                  <ChevronDown open={activeDropdown === menu.key} />
                </button>
                <DropdownMenu items={menu.items} isOpen={activeDropdown === menu.key} />
              </div>
            ))}
            <Link href={p("/contact")} className="px-4 py-2 text-[15px] font-semibold text-text-body hover:text-blue transition-colors">
              {t.contact}
            </Link>
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a href="https://app.amilia.com/store/en/laurus-summer-camp/shop/programs" target="_blank" rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full gradient-coral text-white text-[13px] sm:text-[14px] font-bold shadow-[var(--shadow-coral)] hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 transition-all whitespace-nowrap">
              {t.register} <ArrowRight />
            </a>
            <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden p-2 rounded-xl hover:bg-gray-100 transition-colors" aria-label="Toggle menu">
              <svg className="w-6 h-6 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                {mobileOpen
                  ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  : <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }} className="lg:hidden overflow-hidden border-t border-[var(--border)] bg-white">
              <div className="px-6 py-4 space-y-1">
                {[
                  { label: t.programs, items: programs },
                  { label: t.forSchools, items: forSchools },
                  { label: t.about, items: about },
                ].map((section) => (
                  <div key={section.label}>
                    <div className="text-xs font-bold uppercase tracking-widest text-text-muted px-3 py-2 pt-4">{section.label}</div>
                    {section.items.map((item) => (
                      <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)}
                        className="flex items-center gap-3 px-3 py-3 rounded-xl text-[15px] font-medium text-text-body hover:bg-blue-light transition-colors">
                        <span>{item.icon}</span>{item.name}
                      </Link>
                    ))}
                  </div>
                ))}
                <Link href={p("/contact")} onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-3 px-3 py-3 rounded-xl text-[15px] font-medium text-text-body hover:bg-blue-light transition-colors">
                  <span><Icon name="phone" size={18} /></span>{t.contactUs}
                </Link>
                {/* Language switch in mobile */}
                <div className="pt-2 flex gap-2 px-3">
                  <Link href={switchPath} onClick={() => setMobileOpen(false)}
                    className="text-[13px] font-bold text-blue bg-blue/6 px-4 py-2 rounded-full">
                    {otherLocale === "fr" ? "Français" : "English"}
                  </Link>
                </div>
                <div className="pt-4 pb-2">
                  <a href="https://app.amilia.com/store/en/laurus-summer-camp/shop/programs" target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-full gradient-coral text-white text-[15px] font-bold shadow-[var(--shadow-coral)]">
                    {t.register} <ArrowRight />
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
