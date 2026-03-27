"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Icon from "@/components/Icon";

const EXIT_INTENT_KEY = "laurus_exit_intent_shown";
const GUIDE_KEY = "laurus_parent_guide_submitted";

const bulletPoints = [
  "Daily schedule & packing checklist",
  "All 7 activities explained",
  "Discount stacking guide — save up to 25%",
];

export default function ExitIntentPopup() {
  const [visible, setVisible] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");

  const closePopup = useCallback(() => {
    setVisible(false);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Don't show if already submitted guide or already shown exit intent this session
    if (localStorage.getItem(GUIDE_KEY) === "true") return;
    if (sessionStorage.getItem(EXIT_INTENT_KEY) === "true") return;

    let timeoutReached = false;
    let triggered = false;

    // Wait 5 seconds before arming the exit intent
    const timer = setTimeout(() => {
      timeoutReached = true;
    }, 5000);

    const handleMouseLeave = (e: MouseEvent) => {
      if (!timeoutReached || triggered) return;
      if (e.clientY < 10) {
        // Re-check localStorage in case they submitted the guide form in the meantime
        if (localStorage.getItem(GUIDE_KEY) === "true") return;
        triggered = true;
        sessionStorage.setItem(EXIT_INTENT_KEY, "true");
        setVisible(true);
      }
    };

    // Listen for guide submission from ParentGuideGate
    const handleGuideSubmitted = () => {
      triggered = true; // prevent future triggers
      setVisible(false);
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("parentGuideSubmitted", handleGuideSubmitted);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("parentGuideSubmitted", handleGuideSubmitted);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    localStorage.setItem(GUIDE_KEY, "true");
    setSubmitted(true);
    // Auto-close after 3 seconds
    setTimeout(() => {
      setVisible(false);
    }, 3000);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
          onClick={closePopup}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-navy/60 backdrop-blur-sm" />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative bg-white rounded-[var(--radius-lg)] p-8 sm:p-10 shadow-[var(--shadow-xl)] max-w-[480px] w-full"
          >
            {/* Close button */}
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
              aria-label="Close"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="1" y1="1" x2="13" y2="13" />
                <line x1="13" y1="1" x2="1" y2="13" />
              </svg>
            </button>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-6"
              >
                <div className="w-14 h-14 rounded-full bg-mint-light flex items-center justify-center mx-auto mb-4">
                  <Icon name="check-circle" size={28} className="text-mint-dark" />
                </div>
                <h3 className="text-[20px] font-black text-navy mb-2">Check your inbox!</h3>
                <p className="text-[14px] text-text-body">Your guide is on its way. Closing automatically...</p>
              </motion.div>
            ) : (
              <>
                {/* Icon */}
                <div className="w-12 h-12 rounded-full bg-coral-light flex items-center justify-center mb-5">
                  <Icon name="file-text" size={24} className="text-coral" />
                </div>

                <h3 className="text-[22px] sm:text-[24px] font-black text-navy leading-tight mb-3">
                  Wait — don&apos;t leave without your Free Parent Guide
                </h3>

                <p className="text-[15px] text-text-body mb-5">
                  Join 2,000+ families who trust Laurus. Get our complete camp planning guide.
                </p>

                {/* Bullet points */}
                <div className="space-y-2.5 mb-6">
                  {bulletPoints.map((item) => (
                    <div key={item} className="flex items-center gap-2.5">
                      <Icon name="check-circle" size={16} className="text-mint shrink-0" />
                      <span className="text-[14px] text-text-body">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-3">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-5 py-3.5 rounded-[var(--radius-sm)] bg-gray-50 border border-gray-200 text-[14px] text-navy placeholder:text-text-muted/50 focus:outline-none focus:border-blue focus:ring-2 focus:ring-blue/20 transition-all"
                  />
                  <button
                    type="submit"
                    className="w-full gradient-coral text-white font-bold text-[15px] px-7 py-3.5 rounded-[var(--radius-sm)] shadow-[var(--shadow-coral)] hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 btn-shine"
                  >
                    Get My Free Guide
                  </button>
                </form>

                {/* Alternative CTA */}
                <div className="mt-4 text-center">
                  <a
                    href="https://app.amilia.com/store/en/laurus-summer-camp/shop/programs"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closePopup}
                    className="text-[13px] text-text-muted hover:text-blue transition-colors"
                  >
                    No thanks, I&apos;ll register now &rarr;
                  </a>
                </div>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
