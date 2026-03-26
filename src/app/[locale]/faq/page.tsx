"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import PageWrapper from "@/components/PageWrapper";
import PageHero from "@/components/PageHero";
import FAQ from "@/components/FAQ";
import Icon from "@/components/Icon";
import { useLocale } from "@/lib/LocaleContext";

export default function FAQPage() {
  const { locale, dict } = useLocale();
  const f = dict.faq;
  const categories = f.categories;

  const [activeCategory, setActiveCategory] = useState(categories[0]?.id ?? "summer");
  const active = categories.find((c) => c.id === activeCategory) ?? categories[0];

  return (
    <PageWrapper>
      <PageHero
        tag={f.heroTag}
        tagColor="violet"
        title={<>{f.heroTitle} <span className="hl-blue">{f.heroHighlight}</span></>}
        subtitle={f.heroSub}
      />

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1320px] mx-auto px-6">
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button key={cat.id} onClick={() => setActiveCategory(cat.id)}
                className={`text-[13px] font-bold px-5 py-2.5 rounded-full border transition-all ${
                  activeCategory === cat.id
                    ? "bg-blue text-white border-blue"
                    : "bg-white text-text-body border-[var(--border)] hover:border-blue/30"
                }`}>
                {cat.name}
              </button>
            ))}
          </div>

          <motion.div key={activeCategory} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
            <FAQ items={active.items} />
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-cream text-center">
        <div className="max-w-[600px] mx-auto px-6">
          <h2 className="text-[22px] font-extrabold text-navy mb-3">{dict.common.stillHaveQuestions}</h2>
          <p className="text-[15px] text-text-body mb-6">{dict.common.teamAvailable}</p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="tel:+15146000504" className="inline-flex items-center gap-2 gradient-coral text-white font-bold text-[14px] px-6 py-3 rounded-full shadow-[var(--shadow-coral)] hover:-translate-y-0.5 transition-all">
              <Icon name="phone" size={16} /> (514) 600-0504
            </a>
            <a href="mailto:info@laurussummercamp.com" className="inline-flex items-center gap-2 bg-white text-navy font-bold text-[14px] px-6 py-3 rounded-full border border-[var(--border)] shadow-[var(--shadow-xs)] hover:-translate-y-0.5 transition-all">
              <Icon name="file-text" size={16} /> {dict.common.emailUs}
            </a>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
