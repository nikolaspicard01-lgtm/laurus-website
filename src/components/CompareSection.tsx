"use client";

import { motion } from "framer-motion";
import SectionTag from "./SectionTag";
import Button from "./Button";
import Icon from "./Icon";
import {
  Check,
  X,
} from "lucide-react";

const rows = [
  {
    feature: "Activities",
    typical: "2-3 basic options",
    laurus: "7 STAs \u2014 switch every week",
  },
  {
    feature: "Hours",
    typical: "9 AM \u2013 3 PM",
    laurus: "7:30 AM \u2013 5:30 PM",
  },
  {
    feature: "Staff",
    typical: "Teens with basic training",
    laurus: "Certified teachers, CPR/First Aid, background-checked",
  },
  {
    feature: "Language",
    typical: "English only",
    laurus: "Full bilingual + French Immersion Camp",
  },
  {
    feature: "Locations",
    typical: "1-2 options",
    laurus: "17+ across QC & Ontario",
  },
  {
    feature: "Inclusivity",
    typical: "Limited",
    laurus: "Formal NDR partnership, 1:1 support",
  },
  {
    feature: "Discounts",
    typical: "Fixed pricing",
    laurus: "Stackable up to 25% off",
  },
  {
    feature: "Tax Benefits",
    typical: "Rarely",
    laurus: "RL-24 tax receipts",
  },
  {
    feature: "Year-Round",
    typical: "Summer only",
    laurus: "Camps, tutoring, extra-curriculars, events",
  },
];

export default function CompareSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <SectionTag color="blue">How We Compare</SectionTag>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-black text-navy mt-5 mb-4"
          >
            Laurus vs. The Typical Camp
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[16px] text-text-body max-w-[520px] mx-auto"
          >
            See why 2,000+ families choose Laurus every year
          </motion.p>
        </div>

        {/* Desktop Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="hidden md:block rounded-[var(--radius-lg)] border border-[var(--border)] shadow-[var(--shadow-sm)] overflow-hidden"
        >
          {/* Table Header */}
          <div className="grid grid-cols-[1.2fr_1fr_1fr] bg-gray-50 border-b border-[var(--border)]">
            <div className="px-6 py-4 text-[13px] font-bold uppercase tracking-[0.1em] text-text-muted">
              Feature
            </div>
            <div className="px-6 py-4 text-[13px] font-bold uppercase tracking-[0.1em] text-text-muted text-center">
              Typical Camp
            </div>
            <div className="px-6 py-4 text-center relative">
              <div className="absolute inset-0 bg-blue/5" />
              <div className="relative">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue text-white text-[11px] font-extrabold uppercase tracking-[0.1em]">
                  <Icon name="star" size={12} /> Best Choice
                </span>
                <div className="text-[13px] font-bold uppercase tracking-[0.1em] text-navy mt-1">
                  Laurus
                </div>
              </div>
            </div>
          </div>

          {/* Table Rows */}
          {rows.map((row, i) => (
            <div
              key={row.feature}
              className={`grid grid-cols-[1.2fr_1fr_1fr] border-b last:border-b-0 border-[var(--border)] ${
                i % 2 === 0 ? "bg-white" : "bg-gray-50/50"
              }`}
            >
              <div className="px-6 py-4 text-[14px] font-bold text-navy flex items-center">
                {row.feature}
              </div>
              <div className="px-6 py-4 text-[14px] text-gray-400 flex items-center justify-center gap-2">
                <X size={16} className="text-gray-300 shrink-0" />
                <span>{row.typical}</span>
              </div>
              <div className="px-6 py-4 text-[14px] font-semibold text-navy flex items-center justify-center gap-2 relative">
                <div className="absolute inset-0 bg-blue/5" />
                <Check size={16} className="text-mint shrink-0 relative z-10" />
                <span className="relative z-10">{row.laurus}</span>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Mobile Stacked Cards */}
        <div className="md:hidden space-y-3">
          {rows.map((row, i) => (
            <motion.div
              key={row.feature}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="bg-white rounded-[var(--radius-lg)] border border-[var(--border)] shadow-[var(--shadow-sm)] p-4 overflow-hidden"
            >
              <div className="text-[13px] font-extrabold uppercase tracking-[0.1em] text-navy mb-3">
                {row.feature}
              </div>
              <div className="grid grid-cols-2 gap-3">
                {/* Typical */}
                <div className="bg-gray-50 rounded-xl p-3">
                  <div className="text-[11px] font-bold uppercase tracking-[0.08em] text-gray-400 mb-1.5 flex items-center gap-1">
                    <X size={12} className="text-gray-300" />
                    Typical
                  </div>
                  <div className="text-[13px] text-gray-400 leading-snug">
                    {row.typical}
                  </div>
                </div>
                {/* Laurus */}
                <div className="bg-blue/5 rounded-xl p-3 border border-blue/10">
                  <div className="text-[11px] font-bold uppercase tracking-[0.08em] text-blue mb-1.5 flex items-center gap-1">
                    <Check size={12} className="text-mint" />
                    Laurus
                  </div>
                  <div className="text-[13px] font-semibold text-navy leading-snug">
                    {row.laurus}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center mt-10"
        >
          <Button
            href="https://app.amilia.com/store/en/laurus-summer-camp/shop/programs"
            external
            variant="coral"
            size="lg"
            pill
          >
            Join 2,000+ Families
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
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
