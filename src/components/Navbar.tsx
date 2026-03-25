"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Icon from "@/components/Icon";

type NavItem = { name: string; href: string; icon: React.ReactNode };

const programs: NavItem[] = [
  { name: "Summer Camp", href: "/summer-camp", icon: <Icon name="sun" size={18} /> },
  { name: "Spring Break Camp", href: "/spring-break", icon: <Icon name="flower" size={18} /> },
  { name: "Tutoring", href: "/tutoring", icon: <Icon name="book-open" size={18} /> },
  { name: "Extra-Curriculars", href: "/extra-curriculars", icon: <Icon name="palette" size={18} /> },
  { name: "Languages Camp", href: "/languages", icon: <Icon name="globe" size={18} /> },
  { name: "Inclusive Support", href: "/inclusive-support", icon: <Icon name="heart" size={18} /> },
];

const forSchools: NavItem[] = [
  { name: "School Events", href: "/events", icon: <Icon name="party-popper" size={18} /> },
  { name: "School Partnerships", href: "/school-partnerships", icon: <Icon name="handshake" size={18} /> },
];

const about: NavItem[] = [
  { name: "About Us", href: "/about", icon: <Icon name="info" size={18} /> },
  { name: "FAQs", href: "/faq", icon: <Icon name="help-circle" size={18} /> },
  { name: "Blog", href: "/blog", icon: <Icon name="pen-line" size={18} /> },
  { name: "Partners", href: "/partners", icon: <Icon name="building" size={18} /> },
];

function DropdownMenu({
  items,
  isOpen,
}: {
  items: NavItem[];
  isOpen: boolean;
}) {
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
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-3 px-4 py-3 rounded-[14px] text-[15px] font-medium text-text-body hover:bg-blue-light hover:text-blue-dark transition-colors"
              >
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

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

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
            <a
              href="tel:+15146000504"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
              (514) 600-0504
            </a>
            <a
              href="mailto:info@laurussummercamp.com"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
              info@laurussummercamp.com
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-white/50">Mon–Sun, 9AM–5PM</span>
            <span className="text-white/30">|</span>
            <button className="hover:text-white transition-colors">
              English
            </button>
            <button className="text-white/40 hover:text-white transition-colors">
              Français
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`sticky top-0 z-[100] transition-all duration-300 ${
          scrolled
            ? "bg-white/85 backdrop-blur-xl shadow-md"
            : "bg-white/60 backdrop-blur-lg"
        } border-b border-[var(--border)]`}
      >
        <div className="max-w-[1320px] mx-auto px-6 h-[72px] flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <div className="w-10 h-10 rounded-[12px] bg-gradient-to-br from-blue to-mint flex items-center justify-center text-white font-[var(--font-nunito)] font-black text-lg shadow-md">
              L
            </div>
            <div className="font-[var(--font-nunito)]">
              <div className="text-[17px] font-black tracking-tight text-navy leading-tight">
                <span className="text-blue">L</span>
                <span>A</span>
                <span className="text-sunshine">U</span>
                <span>R</span>
                <span className="text-coral">U</span>
                <span>S</span>
              </div>
              <div className="text-[10px] font-bold tracking-[0.15em] uppercase text-text-muted leading-none">
                Summer Camp
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("programs")}
              onMouseLeave={handleMouseLeave}
            >
              <button className="px-4 py-2 text-[15px] font-semibold text-text-body hover:text-blue transition-colors flex items-center gap-1">
                Programs
                <svg
                  className={`w-4 h-4 transition-transform ${activeDropdown === "programs" ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </button>
              <DropdownMenu
                items={programs}
                isOpen={activeDropdown === "programs"}
              />
            </div>

            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("schools")}
              onMouseLeave={handleMouseLeave}
            >
              <button className="px-4 py-2 text-[15px] font-semibold text-text-body hover:text-blue transition-colors flex items-center gap-1">
                For Schools
                <svg
                  className={`w-4 h-4 transition-transform ${activeDropdown === "schools" ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </button>
              <DropdownMenu
                items={forSchools}
                isOpen={activeDropdown === "schools"}
              />
            </div>

            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("about")}
              onMouseLeave={handleMouseLeave}
            >
              <button className="px-4 py-2 text-[15px] font-semibold text-text-body hover:text-blue transition-colors flex items-center gap-1">
                About
                <svg
                  className={`w-4 h-4 transition-transform ${activeDropdown === "about" ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </button>
              <DropdownMenu
                items={about}
                isOpen={activeDropdown === "about"}
              />
            </div>

            <Link
              href="/contact"
              className="px-4 py-2 text-[15px] font-semibold text-text-body hover:text-blue transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="https://app.amilia.com/store/en/laurus-summer-camp/shop/programs"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-6 py-3 rounded-full gradient-coral text-white text-[14px] font-bold shadow-[var(--shadow-coral)] hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 transition-all"
            >
              Register For Camp
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </a>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-xl hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6 text-navy"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                {mobileOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="lg:hidden overflow-hidden border-t border-[var(--border)] bg-white"
            >
              <div className="px-6 py-4 space-y-1">
                <div className="text-xs font-bold uppercase tracking-widest text-text-muted px-3 py-2">
                  Programs
                </div>
                {programs.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-3 px-3 py-3 rounded-xl text-[15px] font-medium text-text-body hover:bg-blue-light transition-colors"
                  >
                    <span>{item.icon}</span>
                    {item.name}
                  </Link>
                ))}

                <div className="text-xs font-bold uppercase tracking-widest text-text-muted px-3 py-2 pt-4">
                  For Schools
                </div>
                {forSchools.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-3 px-3 py-3 rounded-xl text-[15px] font-medium text-text-body hover:bg-blue-light transition-colors"
                  >
                    <span>{item.icon}</span>
                    {item.name}
                  </Link>
                ))}

                <div className="text-xs font-bold uppercase tracking-widest text-text-muted px-3 py-2 pt-4">
                  About
                </div>
                {about.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-3 px-3 py-3 rounded-xl text-[15px] font-medium text-text-body hover:bg-blue-light transition-colors"
                  >
                    <span>{item.icon}</span>
                    {item.name}
                  </Link>
                ))}

                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-3 px-3 py-3 rounded-xl text-[15px] font-medium text-text-body hover:bg-blue-light transition-colors"
                >
                  <span><Icon name="phone" size={18} /></span>
                  Contact Us
                </Link>

                <div className="pt-4 pb-2">
                  <a
                    href="https://app.amilia.com/store/en/laurus-summer-camp/shop/programs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-full gradient-coral text-white text-[15px] font-bold shadow-[var(--shadow-coral)]"
                  >
                    Register For Camp
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                      />
                    </svg>
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
