"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function StickyMobileCTA() {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Check if already dismissed this session
    if (sessionStorage.getItem("laurus_sticky_cta_dismissed") === "true") {
      setDismissed(true);
      return;
    }

    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDismiss = () => {
    setDismissed(true);
    sessionStorage.setItem("laurus_sticky_cta_dismissed", "true");
  };

  if (dismissed) return null;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-0 left-0 right-0 z-[999] lg:hidden"
        >
          <div
            className="bg-white border-t border-[var(--border)] px-4 py-2.5 flex items-center justify-between gap-3"
            style={{ boxShadow: "0 -4px 20px rgba(15, 29, 53, 0.08)", maxHeight: "60px" }}
          >
            {/* Left: Pricing info */}
            <div className="min-w-0 flex-1">
              <p className="text-[11px] font-bold text-coral leading-tight truncate">
                March pricing ends Mar 31
              </p>
              <p className="text-[14px] font-extrabold text-navy leading-tight">
                From $295/wk
              </p>
            </div>

            {/* Right: CTA + dismiss */}
            <div className="flex items-center gap-2 shrink-0">
              <a
                href="https://app.amilia.com/store/en/laurus-summer-camp/shop/programs"
                target="_blank"
                rel="noopener noreferrer"
                className="gradient-coral text-white font-bold text-[13px] px-5 py-2.5 rounded-[12px] shadow-[var(--shadow-coral)] hover:shadow-lg transition-all btn-shine whitespace-nowrap"
              >
                Register
              </a>
              <button
                onClick={handleDismiss}
                className="w-6 h-6 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors shrink-0"
                aria-label="Dismiss"
              >
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="var(--text-muted)" strokeWidth="1.5" strokeLinecap="round">
                  <line x1="1" y1="1" x2="9" y2="9" />
                  <line x1="9" y1="1" x2="1" y2="9" />
                </svg>
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
