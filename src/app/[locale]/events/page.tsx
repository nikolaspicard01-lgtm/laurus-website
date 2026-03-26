"use client";

import { motion } from "framer-motion";
import PageWrapper from "@/components/PageWrapper";
import PageHero from "@/components/PageHero";
import SectionTag from "@/components/SectionTag";
import Card from "@/components/Card";
import Button from "@/components/Button";
import Icon from "@/components/Icon";
import type { IconName } from "@/components/Icon";
import { useLocale } from "@/lib/LocaleContext";

export default function EventsPage() {
  const { locale, dict } = useLocale();
  const t = dict.events;

  const eventTypes: { icon: IconName; title: string; desc: string }[] = [
    { icon: "party-popper", title: t.carnivalDaysTitle, desc: t.carnivalDaysDesc },
    { icon: "award", title: t.fieldDaysTitle, desc: t.fieldDaysDesc },
    { icon: "book-open", title: t.themedLearningTitle, desc: t.themedLearningDesc },
    { icon: "mic", title: t.talentShowsTitle, desc: t.talentShowsDesc },
    { icon: "sparkles", title: t.seasonalFestivalsTitle, desc: t.seasonalFestivalsDesc },
    { icon: "flask", title: t.educationalWorkshopsTitle, desc: t.educationalWorkshopsDesc },
  ];

  const packages = [
    { name: t.bronzeLabel, activities: "2–3 Activities", staff: "2–3 Staff", extras: "Custom Pricing", accent: "blue" as const },
    { name: t.silverLabel, activities: "4–6 Activities", staff: "4–5 Staff", extras: "Entertainment Included", accent: "sunshine" as const, popular: true },
    { name: t.goldLabel, activities: "8+ Activities", staff: "6+ Staff", extras: "Catering Included", accent: "coral" as const },
  ];

  const steps = [
    { num: "01", title: t.step1Title, desc: t.step1Desc },
    { num: "02", title: t.step2Title, desc: t.step2Desc },
    { num: "03", title: t.step3Title, desc: t.step3Desc },
    { num: "04", title: t.step4Title, desc: t.step4Desc },
    { num: "05", title: t.step5Title, desc: t.step5Desc },
    { num: "06", title: t.step6Title, desc: t.step6Desc },
  ];

  return (
    <PageWrapper>
      <PageHero
        tag={t.heroTag}
        tagColor="sunshine"
        title={<>{t.heroTitle} <span className="hl-sunshine">{t.heroHighlight}</span></>}
        subtitle={t.heroSub}
        ctaText={dict.common.contactUs}
        ctaHref={`/${locale}/contact`}
        gradient="sunshine"
      />

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1320px] mx-auto px-6">
          <div className="text-center mb-14">
            <SectionTag color="sunshine">{t.eventTypesTitle}</SectionTag>
            <motion.h2 initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-black text-navy mt-5 mb-4">
              {t.eventTypesTitle}
            </motion.h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {eventTypes.map((e, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="bg-white rounded-[var(--radius-lg)] p-6 shadow-[var(--shadow-sm)] border border-[var(--border)] hover:-translate-y-1 hover:shadow-[var(--shadow-md)] transition-all">
                <div className="mb-3"><Icon name={e.icon} size={28} className="text-navy" /></div>
                <h3 className="text-[16px] font-extrabold text-navy mb-2">{e.title}</h3>
                <p className="text-[14px] text-text-body">{e.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-cream">
        <div className="max-w-[900px] mx-auto px-6">
          <div className="text-center mb-14">
            <SectionTag color="coral">{t.packagesTitle}</SectionTag>
            <motion.h2 initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-black text-navy mt-5 mb-4">
              {t.packagesTitle}
            </motion.h2>
            <p className="text-[16px] text-text-body max-w-[480px] mx-auto">{t.packagesSub}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {packages.map((pkg, i) => (
              <Card key={i} accent={pkg.accent} delay={i * 0.1} className={pkg.popular ? "ring-2 ring-sunshine" : ""}>
                {pkg.popular && <div className="text-[11px] font-bold uppercase tracking-wider text-sunshine-dark bg-sunshine/15 px-3 py-1 rounded-full inline-block mb-3">Most Popular</div>}
                <h3 className="text-[22px] font-extrabold text-navy mb-4">{pkg.name}</h3>
                <ul className="space-y-2 text-[14px] text-text-body">
                  <li className="flex items-center gap-2"><span className="text-mint-dark">{"\u2713"}</span> {pkg.activities}</li>
                  <li className="flex items-center gap-2"><span className="text-mint-dark">{"\u2713"}</span> {pkg.staff}</li>
                  <li className="flex items-center gap-2"><span className="text-mint-dark">{"\u2713"}</span> {pkg.extras}</li>
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[900px] mx-auto px-6">
          <div className="text-center mb-14">
            <SectionTag color="blue">{t.processTitle}</SectionTag>
            <motion.h2 initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-black text-navy mt-5 mb-4">
              {t.processTitle}
            </motion.h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {steps.map((s, i) => (
              <motion.div key={s.num} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="bg-gray-50 rounded-[var(--radius-md)] p-5 border border-[var(--border)]">
                <div className="text-[20px] font-black text-blue/20 mb-2">{s.num}</div>
                <h3 className="text-[15px] font-extrabold text-navy mb-1">{s.title}</h3>
                <p className="text-[13px] text-text-body">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 gradient-navy text-center">
        <div className="max-w-[700px] mx-auto px-6">
          <h2 className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-black text-white mb-4">{t.ctaTitle}</h2>
          <p className="text-[16px] text-white/60 mb-8">{t.ctaSub}</p>
          <Button href={`/${locale}/contact`} variant="coral" size="lg" pill>{dict.common.contactUs}</Button>
        </div>
      </section>
    </PageWrapper>
  );
}
