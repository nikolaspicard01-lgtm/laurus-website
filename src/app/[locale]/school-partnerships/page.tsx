"use client";

import { motion } from "framer-motion";
import PageWrapper from "@/components/PageWrapper";
import PageHero from "@/components/PageHero";
import SectionTag from "@/components/SectionTag";
import Card from "@/components/Card";
import Button from "@/components/Button";
import { useLocale } from "@/lib/LocaleContext";

const serviceKeys = [
  { icon: "sun" as const, titleKey: "summerCamp" as const, descKey: "summerCampDesc" as const, accent: "sunshine" as const },
  { icon: "flower" as const, titleKey: "springBreak" as const, descKey: "springBreakDesc" as const, accent: "coral" as const },
  { icon: "book-open" as const, titleKey: "tutoring" as const, descKey: "tutoringDesc" as const, accent: "blue" as const },
  { icon: "palette" as const, titleKey: "extraCurriculars" as const, descKey: "extraCurricularDesc" as const, accent: "violet" as const },
  { icon: "party-popper" as const, titleKey: "schoolEvents" as const, descKey: null, accent: "mint" as const },
];

export default function SchoolPartnershipsPage() {
  const { locale, dict } = useLocale();
  const sp = dict.schoolPartnerships;

  const services = serviceKeys.map((s) => ({
    icon: s.icon,
    title: (dict.nav as Record<string, string>)[s.titleKey],
    desc: s.descKey ? (dict.programs as Record<string, string>)[s.descKey] : dict.events.heroSub,
    accent: s.accent,
  }));

  const benefits = [
    sp.benefit1, sp.benefit2, sp.benefit3, sp.benefit4,
    sp.benefit5, sp.benefit6, sp.benefit7, sp.benefit8,
  ];

  return (
    <PageWrapper>
      <PageHero
        tag={sp.heroTag}
        tagColor="blue"
        title={<>{sp.heroTitle} <span className="hl-blue">{sp.heroHighlight}</span> {sp.heroTitle2}</>}
        subtitle={sp.heroSub}
        ctaText={dict.common.getInTouch}
        ctaHref={`/${locale}/contact`}
        gradient="blue"
      />

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1320px] mx-auto px-6">
          <div className="text-center mb-14">
            <SectionTag color="blue">{dict.nav.forSchools}</SectionTag>
            <motion.h2 initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-black text-navy mt-5 mb-4">
              {sp.ourServicesTitle}
            </motion.h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <Card key={s.title} accent={s.accent} icon={s.icon} delay={i * 0.1}>
                <h3 className="text-[17px] font-extrabold text-navy mb-2">{s.title}</h3>
                <p className="text-[14px] text-text-body leading-relaxed">{s.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-cream">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="text-center mb-14">
            <SectionTag color="mint">{dict.nav.forSchools}</SectionTag>
            <motion.h2 initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-black text-navy mt-5 mb-4">
              {sp.benefitsTitle}
            </motion.h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            {benefits.map((b, i) => (
              <motion.div key={b} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                className="flex items-start gap-3 bg-white rounded-[var(--radius-md)] p-4 border border-[var(--border)]">
                <span className="w-5 h-5 rounded-full bg-mint/15 flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-mint-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                </span>
                <span className="text-[14px] font-medium text-text-body">{b}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 gradient-navy text-center">
        <div className="max-w-[700px] mx-auto px-6">
          <h2 className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-black text-white mb-3">{sp.ctaTitle}</h2>
          <p className="text-[18px] font-bold text-white/70 mb-2">{sp.ctaSub}</p>
          <p className="text-[15px] text-white/50 mb-8">{sp.ctaSubline}</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button href={`/${locale}/contact`} variant="coral" size="lg" pill>{dict.common.getInTouch}</Button>
            <Button href="tel:+15146000504" variant="outline" size="lg" pill className="!border-white/20 !text-white hover:!bg-white/10">{dict.common.phone} (514) 600-0504</Button>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
