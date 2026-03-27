"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Icon from "@/components/Icon";

const STORAGE_KEY = "laurus_parent_guide_submitted";

const insideList = [
  "Daily schedule breakdown",
  "Packing checklist",
  "Activity descriptions for all 7 STAs",
  "Location map with pricing",
  "How to prepare your child for camp",
  "Discount stacking guide",
];

export default function ParentGuideGate() {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  const [alreadySubmitted, setAlreadySubmitted] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === "true") {
        setAlreadySubmitted(true);
      }
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    localStorage.setItem(STORAGE_KEY, "true");
    setSubmitted(true);
    // Dispatch custom event so ExitIntentPopup knows not to show
    window.dispatchEvent(new Event("parentGuideSubmitted"));
  };

  if (alreadySubmitted) return null;

  return (
    <section className="py-20 lg:py-28" style={{ background: "linear-gradient(135deg, var(--blue-light) 0%, var(--cream) 100%)" }}>
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center"
        >
          {/* Left: Guide Mockup */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Shadow/depth layer */}
              <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-[var(--radius-lg)] bg-blue/10" />
              {/* Main card */}
              <div className="relative bg-white rounded-[var(--radius-lg)] p-8 sm:p-10 shadow-[var(--shadow-xl)] border border-[var(--border)] max-w-[340px]">
                {/* Top accent bar */}
                <div className="h-1.5 w-16 rounded-full gradient-blue mb-6" />

                {/* Laurus branding */}
                <div className="flex items-center gap-2 mb-5">
                  <div className="w-8 h-8 rounded-full gradient-blue flex items-center justify-center">
                    <Icon name="sun" size={16} className="text-white" />
                  </div>
                  <span className="text-[12px] font-extrabold uppercase tracking-[0.12em] text-text-muted">
                    Laurus Camps
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-[20px] font-black text-navy leading-tight mb-2">
                  2026 Summer Camp<br />Parent Guide
                </h3>
                <p className="text-[13px] text-text-muted mb-6">
                  Your complete planning companion
                </p>

                {/* Bullet points */}
                <div className="space-y-2.5">
                  {["Schedule & Activities", "Packing List", "Pricing & Discounts", "Location Map", "Preparation Tips"].map((item) => (
                    <div key={item} className="flex items-center gap-2.5">
                      <Icon name="check-circle" size={15} className="text-mint shrink-0" />
                      <span className="text-[13px] text-text-body font-medium">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Bottom decoration */}
                <div className="mt-6 pt-5 border-t border-[var(--border)]">
                  <div className="flex items-center gap-1.5">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} name="star" size={13} className="text-sunshine fill-sunshine" />
                    ))}
                    <span className="text-[11px] text-text-muted ml-1">Free PDF Guide</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Pitch + Form */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-coral/8 border border-coral/15 text-coral text-[12px] font-extrabold uppercase tracking-[0.15em] mb-5">
              <Icon name="file-text" size={14} />
              Free Download
            </div>

            <h2 className="text-[clamp(1.6rem,3vw,2.4rem)] font-black text-navy mb-4 leading-tight">
              Free 2026 Summer Camp Parent Guide
            </h2>

            <p className="text-[16px] text-text-body leading-relaxed mb-6 max-w-[480px]">
              Everything you need to plan the perfect summer — delivered to your inbox in seconds.
            </p>

            {/* What's inside */}
            <div className="mb-8 space-y-2.5">
              <p className="text-[13px] font-bold uppercase tracking-[0.1em] text-text-muted mb-3">
                What&apos;s Inside:
              </p>
              {insideList.map((item) => (
                <div key={item} className="flex items-start gap-2.5">
                  <Icon name="check-circle" size={16} className="text-mint shrink-0 mt-0.5" />
                  <span className="text-[14px] text-text-body">{item}</span>
                </div>
              ))}
            </div>

            {/* Form or Success */}
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-mint-light border border-mint/20 rounded-[var(--radius-sm)] p-6 max-w-[480px]"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-mint/15 flex items-center justify-center">
                    <Icon name="check-circle" size={22} className="text-mint-dark" />
                  </div>
                  <div>
                    <p className="text-[16px] font-bold text-navy">Check your inbox!</p>
                    <p className="text-[14px] text-text-body">Your guide is on its way.</p>
                  </div>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="max-w-[480px]">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 px-5 py-3.5 rounded-[var(--radius-sm)] bg-white border border-gray-200 text-[14px] text-navy placeholder:text-text-muted/50 focus:outline-none focus:border-blue focus:ring-2 focus:ring-blue/20 transition-all shadow-[var(--shadow-xs)]"
                  />
                  <button
                    type="submit"
                    className="gradient-coral text-white font-bold text-[14px] px-7 py-3.5 rounded-[var(--radius-sm)] shadow-[var(--shadow-coral)] hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 btn-shine whitespace-nowrap"
                  >
                    Send Me the Guide
                  </button>
                </div>
                <p className="text-[12px] text-text-muted mt-3">
                  No spam. Unsubscribe anytime.
                </p>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
