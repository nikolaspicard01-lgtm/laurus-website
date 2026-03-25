"use client";

import { motion } from "framer-motion";
import PageWrapper from "@/components/PageWrapper";
import PageHero from "@/components/PageHero";
import SectionTag from "@/components/SectionTag";
import Card from "@/components/Card";
import Button from "@/components/Button";

const values = [
  { icon: "baby" as const, title: "Putting Kids First", desc: "Every decision centers on child safety, well-being, and development.", accent: "coral" as const },
  { icon: "party-popper" as const, title: "Fun & Engagement", desc: "Learning through play, creativity, and hands-on experiences.", accent: "sunshine" as const },
  { icon: "heart" as const, title: "Inclusivity", desc: "Welcoming all children with inclusive support programs.", accent: "blue" as const },
  { icon: "handshake" as const, title: "Community", desc: "Building connections between families, schools, and neighborhoods.", accent: "mint" as const },
  { icon: "graduation-cap" as const, title: "Quality & Expertise", desc: "Certified teachers, expert tutors, trained camp counselors.", accent: "violet" as const },
  { icon: "sprout" as const, title: "Growth Mindset", desc: "Encouraging resilience, curiosity, and lifelong learning.", accent: "mint" as const },
];

const differentiators = [
  { label: "Bilingual", desc: "Full ESL/FSL immersion alongside traditional camp" },
  { label: "11+ Activities", desc: "STA model — kids choose and switch weekly" },
  { label: "17+ Locations", desc: "Largest footprint in Montreal + Ontario expansion" },
  { label: "Year-Round", desc: "Camps, tutoring, extra-curriculars, events" },
  { label: "Inclusive", desc: "Formal NDR partnership for neurodivergent children" },
  { label: "Tax Deductible", desc: "RL-24 provincial tax receipts issued" },
];

const stats = [
  { value: "2,000+", label: "Children Served Annually" },
  { value: "50+", label: "Partner Schools" },
  { value: "95%", label: "Parent Satisfaction" },
  { value: "10+", label: "Years of Operation" },
  { value: "17+", label: "Locations" },
  { value: "11", label: "Activity Categories" },
];

export default function AboutPage() {
  return (
    <PageWrapper>
      <PageHero
        tag="About Us"
        tagColor="blue"
        title={<>About <span className="hl-blue">Laurus Lifestyles</span></>}
        subtitle="Empowering children and families through high-quality, engaging, and accessible educational programs since 2015."
        ctaText="Contact Us"
        ctaHref="/contact"
        secondaryCtaText="Our Programs"
        secondaryCtaHref="/summer-camp"
      />

      {/* Stats */}
      <section className="py-16 bg-white border-b border-[var(--border)]">
        <div className="max-w-[1320px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {stats.map((s, i) => (
              <motion.div key={s.label} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="text-center">
                <div className="text-[clamp(1.6rem,3vw,2.2rem)] font-black text-navy">{s.value}</div>
                <div className="text-[13px] font-semibold text-text-muted">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 lg:py-28 bg-cream">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <SectionTag color="coral">Our Mission</SectionTag>
          <motion.blockquote initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-[clamp(1.4rem,2.5vw,1.8rem)] font-bold text-navy leading-relaxed mt-8 italic">
            &ldquo;To empower children and families through high-quality, engaging, and accessible educational programs that inspire growth, creativity, and confidence.&rdquo;
          </motion.blockquote>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1320px] mx-auto px-6">
          <div className="text-center mb-14">
            <SectionTag color="mint">Our Values</SectionTag>
            <motion.h2 initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-black text-navy mt-5 mb-4">
              What We Stand For
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
            <SectionTag color="sunshine">Why Laurus</SectionTag>
            <motion.h2 initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-black text-navy mt-5 mb-4">
              What Makes Us Different
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
          <SectionTag color="blue">Our Team</SectionTag>
          <motion.h2 initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-black text-navy mt-5 mb-6">
            Meet the Laurus Team
          </motion.h2>
          <p className="text-[16px] text-text-body max-w-[560px] mx-auto mb-8">Our team includes certified teachers, expert tutors, trained camp counselors, and event coordinators — all background-checked and CPR/First Aid certified.</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { role: "Camp Counselors (STAs)", desc: "Frontline team — the face of the Laurus experience" },
              { role: "Certified Teachers", desc: "Lead educational programming and curriculum" },
              { role: "Expert Tutors", desc: "Bilingual academic support specialists" },
              { role: "Event Coordinators", desc: "Plan and execute school/community events" },
            ].map((t, i) => (
              <motion.div key={t.role} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="bg-gray-50 rounded-[var(--radius-md)] p-5 border border-[var(--border)] text-left">
                <h3 className="text-[15px] font-extrabold text-navy mb-1">{t.role}</h3>
                <p className="text-[13px] text-text-body">{t.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 gradient-navy text-center">
        <div className="max-w-[700px] mx-auto px-6">
          <h2 className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-black text-white mb-4">Join the Laurus Family</h2>
          <p className="text-[16px] text-white/60 mb-8">Whether you&apos;re a parent, school, or community partner — we&apos;d love to connect.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button href="https://app.amilia.com/store/en/laurus-summer-camp/shop/programs" external variant="coral" size="lg" pill>Register →</Button>
            <Button href="/contact" variant="outline" size="lg" pill className="!border-white/20 !text-white hover:!bg-white/10">Contact Us</Button>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
