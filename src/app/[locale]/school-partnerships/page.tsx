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

  const serviceDetails: Record<string, string> = {
    "summerCamp": "Our flagship summer day camp runs 9 weeks across 17+ locations in the Greater Montreal area. We handle staffing, programming, and logistics so your school facility stays active and engaged all summer long. Schools earn facility-use revenue while families in the community get access to high-quality programming.",
    "springBreak": "Week-long themed camps during March break that keep students active and learning. Each day features a unique mix of sports, arts, STEM, and outdoor adventure, all delivered on-site at your school by our trained staff. No planning required from your administration team.",
    "tutoring": "One-on-one and small-group academic support in French, English, and Math for students in grades 1 through 11. Our certified tutors work with teachers to align sessions with curriculum goals, and we provide regular progress reports so everyone stays informed.",
    "extraCurriculars": "After-school enrichment programs including robotics, cooking, art, drama, and sports. We design a custom menu of activities based on student interest surveys and run everything from registration to end-of-term showcases. Programs run in 8-12 week sessions throughout the school year.",
    "schoolEvents": "Full-service event planning and execution for field days, carnivals, cultural celebrations, and more. Our team brings all equipment, supplies, and staff so your teachers can enjoy the event alongside students. We have delivered 200+ school events across the Greater Montreal area.",
  };

  const howItWorks = [
    { num: "01", title: "Initial Consultation", desc: "We meet with your administration team to understand your school's unique needs, culture, and goals. This can be in person or virtual." },
    { num: "02", title: "Needs Assessment", desc: "Our team evaluates your facilities, student demographics, and scheduling requirements to identify the best-fit programs and services." },
    { num: "03", title: "Custom Proposal", desc: "We deliver a tailored proposal with recommended programs, staffing plans, timelines, and transparent pricing. No cookie-cutter packages." },
    { num: "04", title: "Launch Programs", desc: "Once approved, we handle all logistics from hiring and training staff to marketing programs to your school community. You sit back and watch it come together." },
  ];

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
                <p className="text-[14px] text-text-body leading-relaxed mb-2">{s.desc}</p>
                <p className="text-[13px] text-text-muted leading-relaxed">{serviceDetails[serviceKeys[i].titleKey]}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[900px] mx-auto px-6">
          <div className="text-center mb-14">
            <SectionTag color="sunshine">Getting Started</SectionTag>
            <motion.h2 initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-black text-navy mt-5 mb-4">
              How It Works
            </motion.h2>
            <p className="text-[16px] text-text-body max-w-[480px] mx-auto">From first conversation to program launch, we make the partnership process simple and transparent.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {howItWorks.map((step, i) => (
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

      {/* Stats */}
      <section className="py-16 bg-white border-y border-[var(--border)]">
        <div className="max-w-[900px] mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: "50+", label: "Partner Schools" },
              { value: "2,000+", label: "Students Served" },
              { value: "10+", label: "Years of Experience" },
              { value: "95%", label: "Renewal Rate" },
            ].map((stat, i) => (
              <motion.div key={stat.label} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="text-center">
                <div className="text-[clamp(1.6rem,3vw,2.2rem)] font-black text-navy">{stat.value}</div>
                <div className="text-[13px] font-semibold text-text-muted">{stat.label}</div>
              </motion.div>
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
