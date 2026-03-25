"use client";

import { motion } from "framer-motion";
import PageWrapper from "@/components/PageWrapper";
import PageHero from "@/components/PageHero";
import SectionTag from "@/components/SectionTag";
import Card from "@/components/Card";
import Button from "@/components/Button";

const services = [
  { icon: "sun" as const, title: "Summer Camp", desc: "Full summer programming at your school or nearby venues. All ages, all activities.", accent: "sunshine" as const },
  { icon: "flower" as const, title: "Spring Break Camp", desc: "Week-long March Break camps with our proven STA activity model.", accent: "coral" as const },
  { icon: "book-open" as const, title: "Tutoring Services", desc: "Bilingual academic support in Math, English, French, and Science.", accent: "blue" as const },
  { icon: "palette" as const, title: "Extra-Curriculars", desc: "PED Day Camps, After-School Enrichment, Reading Week, and Themed Break programs.", accent: "violet" as const },
  { icon: "party-popper" as const, title: "School Events", desc: "Carnival days, field days, talent shows, seasonal festivals, and workshops.", accent: "mint" as const },
];

const benefits = [
  "Saves administrative time and resources",
  "Enhances student engagement and enrichment",
  "Aligns with curriculum and learning goals",
  "Builds an inclusive culture for all students",
  "Proven track record with 50+ partner schools",
  "Professional, certified staff at every event",
  "Flexible scheduling and customizable programs",
  "Year-round programming beyond summer",
];

export default function SchoolPartnershipsPage() {
  return (
    <PageWrapper>
      <PageHero
        tag="For Schools"
        tagColor="blue"
        title={<>Partner With <span className="hl-blue">Laurus</span> for Your School</>}
        subtitle="Turnkey enrichment programming for schools. From camps to tutoring to events — we handle it all so you can focus on your students. 50+ schools already trust us."
        ctaText="Become a Partner"
        ctaHref="/contact"
        gradient="blue"
      />

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1320px] mx-auto px-6">
          <div className="text-center mb-14">
            <SectionTag color="blue">Our Services</SectionTag>
            <motion.h2 initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-black text-navy mt-5 mb-4">
              Everything Your School Needs
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
            <SectionTag color="mint">Why Partner With Us</SectionTag>
            <motion.h2 initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-black text-navy mt-5 mb-4">
              Benefits for Your School
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
          <h2 className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-black text-white mb-3">Join 50+ Partner Schools</h2>
          <p className="text-[18px] font-bold text-white/70 mb-2">Let&apos;s build something great together.</p>
          <p className="text-[15px] text-white/50 mb-8">Contact us to discuss how Laurus can serve your school community.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button href="/contact" variant="coral" size="lg" pill>Get Started →</Button>
            <Button href="tel:+15146000504" variant="outline" size="lg" pill className="!border-white/20 !text-white hover:!bg-white/10">Call (514) 600-0504</Button>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
