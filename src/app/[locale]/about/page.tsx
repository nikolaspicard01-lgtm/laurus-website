"use client";

import { motion } from "framer-motion";
import PageWrapper from "@/components/PageWrapper";
import PageHero from "@/components/PageHero";
import SectionTag from "@/components/SectionTag";
import Card from "@/components/Card";
import Button from "@/components/Button";
import { useLocale } from "@/lib/LocaleContext";

export default function AboutPage() {
  const { locale, dict } = useLocale();
  const a = dict.about;

  const values = [
    { icon: "baby" as const, title: a.puttingKidsFirstTitle, desc: a.puttingKidsFirstDesc, accent: "coral" as const },
    { icon: "party-popper" as const, title: a.funEngagementTitle, desc: a.funEngagementDesc, accent: "sunshine" as const },
    { icon: "heart" as const, title: a.inclusivityTitle, desc: a.inclusivityDesc, accent: "blue" as const },
    { icon: "handshake" as const, title: a.communityTitle, desc: a.communityDesc, accent: "mint" as const },
    { icon: "graduation-cap" as const, title: a.qualityExpertiseTitle, desc: a.qualityExpertiseDesc, accent: "violet" as const },
    { icon: "sprout" as const, title: a.growthMindsetTitle, desc: a.growthMindsetDesc, accent: "mint" as const },
  ];

  const differentiators = [
    { label: a.bilingualLabel, desc: a.bilingualDesc },
    { label: a.activitiesLabel, desc: a.activitiesDesc },
    { label: a.locationsLabel, desc: a.locationsDesc },
    { label: a.yearRoundLabel, desc: a.yearRoundDesc },
    { label: a.inclusiveLabel, desc: a.inclusiveDesc },
    { label: a.taxDeductibleLabel, desc: a.taxDeductibleDesc },
  ];

  const stats = [
    { value: "2,000+", label: dict.home.kidsAnnually },
    { value: "50+", label: dict.nav.partners },
    { value: "95%", label: dict.home.parentSatisfaction },
    { value: "10+", label: dict.home.yearsExperience },
    { value: "17+", label: dict.home.locations },
    { value: "11", label: dict.home.ourPrograms },
  ];

  const team = [
    { role: a.counselorsRole, desc: a.counselorsDesc },
    { role: a.teachersRole, desc: a.teachersDesc },
    { role: a.tutorsRole, desc: a.tutorsDesc },
    { role: a.coordinatorsRole, desc: a.coordinatorsDesc },
  ];

  return (
    <PageWrapper>
      <PageHero
        tag={a.heroTag}
        tagColor="blue"
        title={<>{a.heroTitle} <span className="hl-blue">{a.heroHighlight}</span></>}
        subtitle={a.heroSub}
        ctaText={dict.common.contactUs}
        ctaHref={`/${locale}/contact`}
        secondaryCtaText={dict.home.ourPrograms}
        secondaryCtaHref={`/${locale}/summer-camp`}
      />

      {/* Stats */}
      <section className="py-16 bg-white border-b border-[var(--border)]">
        <div className="max-w-[1320px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {stats.map((s, i) => (
              <motion.div key={s.label + i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="text-center">
                <div className="text-[clamp(1.6rem,3vw,2.2rem)] font-black text-navy">{s.value}</div>
                <div className="text-[13px] font-semibold text-text-muted">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="text-center mb-10">
            <SectionTag color="sunshine">Our Story</SectionTag>
            <motion.h2 initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-black text-navy mt-5 mb-4">
              How Laurus Began
            </motion.h2>
          </div>
          <div className="space-y-5">
            <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-[16px] text-text-body leading-relaxed">
              Laurus was founded in 2015 with a simple but ambitious idea: every child in Montreal deserves access to enriching, bilingual summer programming that feels less like school and more like the best day ever. What started as a single summer camp location with a small team of passionate counsellors has grown into one of the most trusted names in youth programming across the Greater Montreal area.
            </motion.p>
            <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-[16px] text-text-body leading-relaxed">
              Over the past decade, Laurus has expanded from that single location to 17+ campuses spanning DDO, Laval, the West Island, Montreal Downtown, and the South Shore. Along the way, we added language programs, tutoring services, school partnerships, extra-curricular activities, and full-service school event planning, transforming from a summer camp into a year-round educational enrichment organization.
            </motion.p>
            <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-[16px] text-text-body leading-relaxed">
              Today, Laurus serves over 2,000 children annually and partners with more than 50 schools across the region. Despite our growth, the core mission has never changed: to create safe, inclusive, and joyful experiences where kids can learn, play, and discover who they are. Every program we offer is designed with that founding vision in mind.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 lg:py-28 bg-cream">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <SectionTag color="coral">{a.missionTitle}</SectionTag>
          <motion.blockquote initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-[clamp(1.4rem,2.5vw,1.8rem)] font-bold text-navy leading-relaxed mt-8 italic">
            &ldquo;{a.missionQuote}&rdquo;
          </motion.blockquote>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1320px] mx-auto px-6">
          <div className="text-center mb-14">
            <SectionTag color="mint">{a.valuesTitle}</SectionTag>
            <motion.h2 initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-black text-navy mt-5 mb-4">
              {a.valuesTitle}
            </motion.h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((v, i) => (
              <Card key={v.title} accent={v.accent} icon={v.icon} delay={i * 0.08}>
                <h3 className="text-[17px] font-extrabold text-navy mb-2">{v.title}</h3>
                <p className="text-[14px] text-text-body">{v.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-20 lg:py-28 gradient-mesh">
        <div className="max-w-[900px] mx-auto px-6">
          <div className="text-center mb-14">
            <SectionTag color="sunshine">{dict.home.whyLaurus}</SectionTag>
            <motion.h2 initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-black text-navy mt-5 mb-4">
              {a.differentiatorsTitle}
            </motion.h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {differentiators.map((d, i) => (
              <motion.div key={d.label} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="bg-white rounded-[var(--radius-md)] p-5 border border-[var(--border)] shadow-[var(--shadow-xs)]">
                <h3 className="text-[15px] font-extrabold text-navy mb-1">{d.label}</h3>
                <p className="text-[13px] text-text-body">{d.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <SectionTag color="blue">{a.teamTitle}</SectionTag>
          <motion.h2 initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-black text-navy mt-5 mb-6">
            {a.teamTitle}
          </motion.h2>
          <p className="text-[16px] text-text-body max-w-[560px] mx-auto mb-8">{a.teamSub}</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { role: a.counselorsRole, desc: a.counselorsDesc, detail: "Our camp counsellors are the heart of the Laurus experience. Each one is carefully selected for their energy, creativity, and genuine love of working with children. They undergo extensive pre-season training covering activity facilitation, conflict resolution, inclusion strategies, and emergency protocols." },
              { role: a.teachersRole, desc: a.teachersDesc, detail: "Our language teachers bring the classroom to life with immersive, activity-based instruction. Many hold education degrees or TEFL/DELF certifications, and all are fluent or native speakers. They receive ongoing professional development to stay current with best practices in second-language acquisition." },
              { role: a.tutorsRole, desc: a.tutorsDesc, detail: "Our academic tutors are qualified educators and university students in education programs who specialize in making difficult subjects click. They work closely with parents and school teachers to align tutoring sessions with classroom curriculum and individual learning goals." },
              { role: a.coordinatorsRole, desc: a.coordinatorsDesc, detail: "Site coordinators are experienced leaders who oversee daily operations at each location. They manage staff schedules, handle parent communication, coordinate logistics, and ensure that every program runs smoothly from the first day to the last. Most have 3+ years of experience with Laurus." },
            ].map((t, i) => (
              <motion.div key={t.role} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="bg-gray-50 rounded-[var(--radius-md)] p-5 border border-[var(--border)] text-left">
                <h3 className="text-[15px] font-extrabold text-navy mb-1">{t.role}</h3>
                <p className="text-[13px] text-text-body mb-2">{t.desc}</p>
                <p className="text-[13px] text-text-muted leading-relaxed">{t.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety & Compliance */}
      <section className="py-20 lg:py-28 bg-cream">
        <div className="max-w-[900px] mx-auto px-6">
          <div className="text-center mb-14">
            <SectionTag color="coral">Safety First</SectionTag>
            <motion.h2 initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-black text-navy mt-5 mb-4">
              Safety &amp; Compliance
            </motion.h2>
            <p className="text-[16px] text-text-body max-w-[520px] mx-auto">Your child&apos;s safety is our top priority. Here is how we ensure a secure environment at every location.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { icon: "shield" as const, title: "Background Checks", desc: "Every staff member undergoes a thorough criminal background check and vulnerable sector screening before being hired. We verify references and conduct in-person interviews to ensure the highest standards of character and professionalism." },
              { icon: "heart" as const, title: "CPR & First Aid Certified", desc: "All counsellors, coordinators, and on-site staff hold current CPR and First Aid certifications. We maintain fully stocked first aid kits at every location and have designated first responders on duty at all times during programming." },
              { icon: "clipboard" as const, title: "Emergency Protocols", desc: "We maintain comprehensive emergency action plans for every location covering fire, evacuation, severe weather, medical emergencies, and lockdown procedures. Staff are drilled on these protocols during pre-season training and throughout the year." },
              { icon: "graduation-cap" as const, title: "Ongoing Training", desc: "Safety training does not stop after orientation. Our team participates in regular professional development sessions covering topics like allergy management, mental health awareness, anti-bullying strategies, and inclusive programming practices." },
            ].map((item, i) => (
              <Card key={i} accent="coral" icon={item.icon} delay={i * 0.08}>
                <h3 className="text-[17px] font-extrabold text-navy mb-2">{item.title}</h3>
                <p className="text-[14px] text-text-body leading-relaxed">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 gradient-navy text-center">
        <div className="max-w-[700px] mx-auto px-6">
          <h2 className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-black text-white mb-4">{a.ctaTitle}</h2>
          <p className="text-[16px] text-white/60 mb-8">{a.ctaSub}</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button href="https://app.amilia.com/store/en/laurus-summer-camp/shop/programs" external variant="coral" size="lg" pill>{dict.common.registerNow}</Button>
            <Button href={`/${locale}/contact`} variant="outline" size="lg" pill className="!border-white/20 !text-white hover:!bg-white/10">{dict.common.contactUs}</Button>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
