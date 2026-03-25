"use client";

import { motion } from "framer-motion";
import PageWrapper from "@/components/PageWrapper";
import PageHero from "@/components/PageHero";
import SectionTag from "@/components/SectionTag";
import Card from "@/components/Card";
import Button from "@/components/Button";
import FAQ from "@/components/FAQ";
import Icon from "@/components/Icon";
import type { IconName } from "@/components/Icon";

const subjects: { icon: IconName; name: string }[] = [
  { icon: "ruler", name: "Math" },
  { icon: "book-open", name: "English" },
  { icon: "languages", name: "French" },
  { icon: "flask", name: "Science" },
  { icon: "clipboard", name: "Homework Help" },
  { icon: "file-text", name: "Test Prep" },
];

const pricing = [
  { title: "Group Sessions", subtitle: "2+ students", price: "$45", unit: "/hour", accent: "blue" as const, icon: "users" as const },
  { title: "1-on-1 Tutoring", subtitle: "Personalized", price: "$55", unit: "/hour", accent: "coral" as const, icon: "target" as const },
  { title: "Virtual Sessions", subtitle: "Online", price: "$40", unit: "/hour", accent: "mint" as const, icon: "monitor" as const },
  { title: "10-Session Bundle", subtitle: "Best value", price: "$500", unit: "+ 1 FREE", accent: "sunshine" as const, icon: "star" as const },
];

const steps = [
  { num: "01", title: "Free Assessment", desc: "Schedule a free evaluation to understand your child's needs and goals." },
  { num: "02", title: "Custom Plan", desc: "We create a tailored learning plan targeting specific areas for improvement." },
  { num: "03", title: "Book Sessions", desc: "Choose group, 1-on-1, or virtual sessions at times that work for you." },
  { num: "04", title: "Track Progress", desc: "Regular progress updates and adjustments to keep your child on track." },
];

const faqItems = [
  { question: "What subjects do you offer?", answer: "Math, English, French, Science, Homework Help, Test Prep, Exam Prep, and custom learning plans." },
  { question: "Are tutors bilingual?", answer: "Yes. All tutors are bilingual (English/French) and qualified in their subject areas." },
  { question: "Is virtual tutoring available?", answer: "Yes, at $40/hour. In-person group sessions are $45/hour and 1-on-1 is $55/hour." },
  { question: "How do we get started?", answer: "Start with a free assessment. We evaluate your child's needs, create a custom plan, and book sessions." },
];

export default function TutoringPage() {
  return (
    <PageWrapper>
      <PageHero
        tag="Ages 5–17"
        tagColor="blue"
        title={<>Bilingual <span className="hl-blue">Tutoring</span> That Gets Results</>}
        subtitle="One-on-one and small-group academic support in Math, English, French & Science. In-person and virtual options available year-round."
        ctaText="Book a Free Assessment"
        ctaHref="/contact"
        gradient="blue"
      />

      {/* Subjects */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1320px] mx-auto px-6">
          <div className="text-center mb-14">
            <SectionTag color="blue">Core Subjects</SectionTag>
            <motion.h2 initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-black text-navy mt-5 mb-4">
              Expert Support Across All Subjects
            </motion.h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {subjects.map((s, i) => (
              <motion.div key={s.name} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                className="bg-white rounded-[var(--radius-lg)] p-6 text-center shadow-[var(--shadow-sm)] border border-[var(--border)] hover:-translate-y-1 hover:shadow-[var(--shadow-md)] transition-all">
                <div className="text-3xl mb-2"><Icon name={s.icon} size={28} /></div>
                <div className="text-[14px] font-bold text-navy">{s.name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 lg:py-28 bg-cream">
        <div className="max-w-[1000px] mx-auto px-6">
          <div className="text-center mb-14">
            <SectionTag color="sunshine">Pricing</SectionTag>
            <motion.h2 initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-black text-navy mt-5 mb-4">
              Flexible Pricing Options
            </motion.h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {pricing.map((p, i) => (
              <Card key={p.title} accent={p.accent} icon={p.icon} delay={i * 0.1}>
                <h3 className="text-[16px] font-extrabold text-navy mb-1">{p.title}</h3>
                <p className="text-[13px] text-text-muted mb-3">{p.subtitle}</p>
                <div className="text-[24px] font-black text-navy">{p.price}<span className="text-[14px] font-semibold text-text-muted">{p.unit}</span></div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[900px] mx-auto px-6">
          <div className="text-center mb-14">
            <SectionTag color="mint">How It Works</SectionTag>
            <motion.h2 initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-black text-navy mt-5 mb-4">
              Getting Started Is Easy
            </motion.h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {steps.map((step, i) => (
              <motion.div key={step.num} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-gray-50 rounded-[var(--radius-lg)] p-6 border border-[var(--border)] flex gap-4">
                <div className="text-[24px] font-black text-blue/20">{step.num}</div>
                <div>
                  <h3 className="text-[16px] font-extrabold text-navy mb-1">{step.title}</h3>
                  <p className="text-[14px] text-text-body">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28 bg-cream">
        <div className="max-w-[1320px] mx-auto px-6">
          <div className="text-center mb-14"><h2 className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-black text-navy">Tutoring FAQ</h2></div>
          <FAQ items={faqItems} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-24 gradient-navy text-center">
        <div className="max-w-[700px] mx-auto px-6">
          <h2 className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-black text-white mb-4">Start With a Free Assessment</h2>
          <p className="text-[16px] text-white/60 mb-8">Let our bilingual tutors create a custom learning plan for your child.</p>
          <Button href="/contact" variant="coral" size="lg" pill>Book Free Assessment →</Button>
        </div>
      </section>
    </PageWrapper>
  );
}
