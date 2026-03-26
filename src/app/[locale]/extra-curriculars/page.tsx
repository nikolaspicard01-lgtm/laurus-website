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

      {/* Why Year-Round Enrichment */}
      <section className="py-20 lg:py-28 bg-cream">
        <div className="max-w-[1320px] mx-auto px-6">
          <div className="text-center mb-14">
            <SectionTag color="mint">Year-Round Benefits</SectionTag>
            <motion.h2 initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-black text-navy mt-5 mb-4">
              Why Year-Round Enrichment Matters
            </motion.h2>
            <p className="text-[16px] text-text-body max-w-[520px] mx-auto">Keep your child learning, growing, and having fun beyond the regular school day and calendar.</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              { icon: "book-open" as const, title: "Prevent Learning Loss", desc: "Studies show kids can lose up to two months of academic progress during breaks. Our programs keep minds active with engaging, hands-on activities that reinforce core skills while feeling like play.", accent: "blue" as const },
              { icon: "calendar" as const, title: "Build Consistent Habits", desc: "Regular participation in structured enrichment programs helps children develop discipline, time management, and social skills that carry over into the classroom and beyond.", accent: "coral" as const },
              { icon: "sparkles" as const, title: "Explore New Interests", desc: "From STEM challenges to creative arts, our rotating themes give kids the chance to discover hidden talents and passions they might never encounter in a traditional school setting.", accent: "sunshine" as const },
            ].map((card, i) => (
              <Card key={i} accent={card.accent} icon={card.icon} delay={i * 0.1}>
                <h3 className="text-[17px] font-extrabold text-navy mb-2">{card.title}</h3>
                <p className="text-[14px] text-text-body leading-relaxed">{card.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[900px] mx-auto px-6">
          <div className="text-center mb-14">
            <SectionTag color="blue">Easy Registration</SectionTag>
            <motion.h2 initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-black text-navy mt-5 mb-4">
              How to Register
            </motion.h2>
            <p className="text-[16px] text-text-body max-w-[480px] mx-auto">Signing up is simple. Four quick steps and your child is ready for an amazing experience.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { num: "01", title: "Browse Programs", desc: "Explore our full list of PD day camps, reading week programs, themed break camps, and after-school options." },
              { num: "02", title: "Select Dates", desc: "Pick the sessions that fit your family's schedule. Mix and match across different program types." },
              { num: "03", title: "Complete Registration", desc: "Fill out your child's details and complete payment securely through our online portal." },
              { num: "04", title: "Get Confirmation", desc: "Receive an instant confirmation email with all the details you need, including what to bring and drop-off info." },
            ].map((step, i) => (
              <motion.div key={step.num} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="bg-gray-50 rounded-[var(--radius-md)] p-5 border border-[var(--border)] text-center">
                <div className="text-[24px] font-black text-blue/20 mb-2">{step.num}</div>
                <h3 className="text-[15px] font-extrabold text-navy mb-1">{step.title}</h3>
                <p className="text-[13px] text-text-body">{step.desc}</p>
              </motion.div>
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

      {/* Testimonials */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[900px] mx-auto px-6">
          <div className="text-center mb-14">
            <SectionTag color="coral">Parent Testimonials</SectionTag>
            <motion.h2 initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-black text-navy mt-5 mb-4">
              What Parents Are Saying
            </motion.h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { quote: "My daughter looks forward to every PD day now! She used to dread days off school, but Laurus turned them into her favourite days. The themed activities keep her engaged and she always comes home with new stories to tell.", name: "Sarah M.", detail: "Parent, DDO" },
              { quote: "We've been using Laurus for after-school programs and reading week camps for two years. The consistency and quality of the staff is what keeps us coming back. My son has grown so much in confidence and social skills since joining.", name: "David L.", detail: "Parent, Laval" },
            ].map((testimonial, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-cream rounded-[var(--radius-lg)] p-6 border border-[var(--border)]">
                <p className="text-[14px] text-text-body leading-relaxed mb-4 italic">&ldquo;{testimonial.quote}&rdquo;</p>
                <div>
                  <p className="text-[15px] font-bold text-navy">{testimonial.name}</p>
                  <p className="text-[13px] text-text-muted">{testimonial.detail}</p>
                </div>
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
