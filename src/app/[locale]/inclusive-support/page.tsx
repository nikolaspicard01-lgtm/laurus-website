"use client";

import { motion } from "framer-motion";
import PageWrapper from "@/components/PageWrapper";
import PageHero from "@/components/PageHero";
import SectionTag from "@/components/SectionTag";
import Card from "@/components/Card";
import Button from "@/components/Button";
import FAQ from "@/components/FAQ";
import { useLocale } from "@/lib/LocaleContext";

export default function InclusiveSupportPage() {
  const { locale, dict } = useLocale();
  const t = dict.inclusiveSupport;

  const process = [
    { num: "01", title: t.step1Title, desc: t.step1Desc },
    { num: "02", title: t.step2Title, desc: t.step2Desc },
    { num: "03", title: t.step3Title, desc: t.step3Desc },
    { num: "04", title: t.step4Title, desc: t.step4Desc },
  ];

  const levels = [
    { title: t.independentTitle, desc: t.independentDesc, color: "bg-mint/10 text-mint-dark border-mint/20" },
    { title: t.someSupportTitle, desc: t.someSupportDesc, color: "bg-blue/10 text-blue border-blue/20" },
    { title: t.significantSupportTitle, desc: t.significantSupportDesc, color: "bg-sunshine/10 text-sunshine-dark border-sunshine/20" },
    { title: t.oneToOneTitle, desc: t.oneToOneDesc, color: "bg-coral/10 text-coral border-coral/20" },
  ];

  return (
    <PageWrapper>
      <PageHero
        tag={t.heroTag}
        tagColor="violet"
        title={<>{t.heroTitle} <span className="hl-blue">{t.heroHighlight}</span> {t.heroTitle2}</>}
        subtitle={t.heroSub}
        ctaText={dict.common.contactUs}
        ctaHref={`/${locale}/contact`}
      />

      {/* Process */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[900px] mx-auto px-6">
          <div className="text-center mb-14">
            <SectionTag color="blue">{t.howItWorksTitle}</SectionTag>
            <motion.h2 initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-black text-navy mt-5 mb-4">
              {t.howItWorksTitle}
            </motion.h2>
            <p className="text-[16px] text-text-body max-w-[480px] mx-auto">{t.howItWorksSub}</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {process.map((step, i) => (
              <motion.div key={step.num} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-gray-50 rounded-[var(--radius-lg)] p-6 border border-[var(--border)] flex gap-4">
                <div className="text-[24px] font-black text-violet/30">{step.num}</div>
                <div>
                  <h3 className="text-[16px] font-extrabold text-navy mb-1">{step.title}</h3>
                  <p className="text-[14px] text-text-body">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Levels */}
      <section className="py-20 lg:py-28 bg-cream">
        <div className="max-w-[900px] mx-auto px-6">
          <div className="text-center mb-14">
            <SectionTag color="mint">{t.supportLevelsTitle}</SectionTag>
            <motion.h2 initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-black text-navy mt-5 mb-4">
              {t.supportLevelsSub}
            </motion.h2>
          </div>
          <div className="space-y-4">
            {levels.map((level, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className={`rounded-[var(--radius-md)] p-5 border ${level.color}`}>
                <h3 className="text-[16px] font-extrabold mb-1">{level.title}</h3>
                <p className="text-[14px] opacity-80">{level.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About NDR */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[700px] mx-auto px-6 text-center">
          <Card accent="violet" icon="heart-handshake" className="text-center">
            <h3 className="text-[20px] font-extrabold text-navy mb-3">{t.aboutNdr}</h3>
            <p className="text-[15px] text-text-body leading-relaxed mb-4">{t.aboutNdrDesc}</p>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28 bg-cream">
        <div className="max-w-[1320px] mx-auto px-6">
          <div className="text-center mb-14"><h2 className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-black text-navy">{t.faqTitle}</h2></div>
          <FAQ items={t.faqItems} />
        </div>
      </section>

      <section className="py-20 lg:py-24 gradient-navy text-center">
        <div className="max-w-[700px] mx-auto px-6">
          <h2 className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-black text-white mb-4">{t.ctaTitle}</h2>
          <p className="text-[16px] text-white/60 mb-8">{t.ctaSub}</p>
          <Button href={`/${locale}/contact`} variant="coral" size="lg" pill>{dict.common.getInTouch}</Button>
        </div>
      </section>
    </PageWrapper>
  );
}
