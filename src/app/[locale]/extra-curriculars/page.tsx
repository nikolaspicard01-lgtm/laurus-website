"use client";

import { motion } from "framer-motion";
import PageWrapper from "@/components/PageWrapper";
import PageHero from "@/components/PageHero";
import SectionTag from "@/components/SectionTag";
import Card from "@/components/Card";
import Button from "@/components/Button";
import { useLocale } from "@/lib/LocaleContext";

export default function ExtraCurricularsPage() {
  const { locale, dict } = useLocale();
  const t = dict.extraCurriculars;

  const programs = [
    { icon: "calendar" as const, title: t.pedDayCamps, desc: t.pedDesc, price: t.pedPrice, accent: "blue" as const },
    { icon: "book-marked" as const, title: t.readingWeek, desc: t.readingDesc, price: t.readingPrice, accent: "coral" as const },
    { icon: "theater" as const, title: t.themedBreaks, desc: t.themedDesc, price: t.themedPrice, accent: "sunshine" as const },
    { icon: "star" as const, title: t.afterSchool, desc: t.afterSchoolDesc, price: t.afterSchoolPrice, accent: "violet" as const },
  ];

  return (
    <PageWrapper>
      <PageHero
        tag={t.heroTag}
        tagColor="violet"
        title={<>{t.heroTitle} <span className="hl-blue">{t.heroHighlight}</span> {t.heroTitle2}</>}
        subtitle={t.heroSub}
        ctaText={dict.common.registerNow}
        ctaHref="https://app.amilia.com/store/en/laurus-summer-camp/shop/programs"
        ctaExternal
      />

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1320px] mx-auto px-6">
          <div className="text-center mb-14">
            <SectionTag color="violet">{dict.home.ourPrograms}</SectionTag>
            <motion.h2 initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-black text-navy mt-5 mb-4">
              {dict.home.explorePrograms}
            </motion.h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {programs.map((p, i) => (
              <Card key={i} accent={p.accent} icon={p.icon} delay={i * 0.1}>
                <h3 className="text-[18px] font-extrabold text-navy mb-2">{p.title}</h3>
                <p className="text-[14px] text-text-body leading-relaxed mb-3">{p.desc}</p>
                <p className="text-[16px] font-black text-navy">{p.price}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-cream">
        <div className="max-w-[900px] mx-auto px-6">
          <div className="text-center mb-14">
            <SectionTag color="mint">{dict.summerCamp.pricing}</SectionTag>
            <motion.h2 initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-black text-navy mt-5 mb-4">
              {t.discountsTitle}
            </motion.h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: t.siblingDiscount, value: "10% off" },
              { label: t.earlyBird6, value: "10% off" },
              { label: t.earlyBird3, value: "5% off" },
              { label: t.referralCredit, value: "$25 credit" },
            ].map((d, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="bg-white rounded-[var(--radius-md)] p-5 text-center border border-[var(--border)] shadow-[var(--shadow-xs)]">
                <div className="text-[14px] font-bold text-navy mb-1">{d.label}</div>
                <div className="text-[16px] font-black text-mint-dark">{d.value}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 gradient-navy text-center">
        <div className="max-w-[700px] mx-auto px-6">
          <h2 className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-black text-white mb-4">{t.ctaTitle}</h2>
          <p className="text-[16px] text-white/60 mb-8">{t.ctaSub}</p>
          <Button href="https://app.amilia.com/store/en/laurus-summer-camp/shop/programs" external variant="coral" size="lg" pill>{dict.common.registerNow}</Button>
        </div>
      </section>
    </PageWrapper>
  );
}
