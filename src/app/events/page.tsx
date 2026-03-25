"use client";

import { motion } from "framer-motion";
import PageWrapper from "@/components/PageWrapper";
import PageHero from "@/components/PageHero";
import SectionTag from "@/components/SectionTag";
import Card from "@/components/Card";
import Button from "@/components/Button";
import Icon from "@/components/Icon";
import type { IconName } from "@/components/Icon";

const eventTypes: { icon: IconName; title: string; desc: string }[] = [
  { icon: "party-popper", title: "Carnival Days", desc: "Fun-filled carnival experiences with games, prizes, and entertainment." },
  { icon: "award", title: "Field Days & Sports Festivals", desc: "Active competitions, relay races, and team sports events." },
  { icon: "book-open", title: "Themed Learning Days", desc: "Educational experiences with hands-on STEM, arts, and cultural activities." },
  { icon: "mic", title: "Talent Shows & Performances", desc: "Stage productions showcasing student creativity and confidence." },
  { icon: "sparkles", title: "Seasonal Festivals", desc: "Holiday parties, cultural celebrations, and seasonal themed events." },
  { icon: "flask", title: "Educational Workshops", desc: "Interactive assemblies and workshops aligned with curriculum goals." },
];

const packages = [
  { name: "Bronze", activities: "2–3 Activities", staff: "2–3 Staff", extras: "Custom Pricing", accent: "blue" as const },
  { name: "Silver", activities: "4–6 Activities", staff: "4–5 Staff", extras: "Entertainment Included", accent: "sunshine" as const, popular: true },
  { name: "Gold", activities: "8+ Activities", staff: "6+ Staff", extras: "Catering Included", accent: "coral" as const },
];

const steps = [
  { num: "01", title: "Consultation", desc: "Tell us about your school and event vision." },
  { num: "02", title: "Needs Assessment", desc: "We evaluate requirements, audience, and logistics." },
  { num: "03", title: "Custom Proposal", desc: "Receive a tailored event plan and quote." },
  { num: "04", title: "Contract & Planning", desc: "Finalize details and plan every element." },
  { num: "05", title: "Event Day", desc: "Our team handles setup, execution, and management." },
  { num: "06", title: "Follow-Up", desc: "Post-event review and feedback collection." },
];

export default function EventsPage() {
  return (
    <PageWrapper>
      <PageHero
        tag="For Schools"
        tagColor="sunshine"
        title={<>Unforgettable <span className="hl-sunshine">School Events</span></>}
        subtitle="From carnival days to talent shows, we plan and execute engaging school events that students and staff love. Fully customizable packages."
        ctaText="Request a Quote"
        ctaHref="/contact"
        gradient="sunshine"
      />

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1320px] mx-auto px-6">
          <div className="text-center mb-14">
            <SectionTag color="sunshine">Event Types</SectionTag>
            <motion.h2 initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-black text-navy mt-5 mb-4">
              Events We Create
            </motion.h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {eventTypes.map((e, i) => (
              <motion.div key={e.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
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
            <SectionTag color="coral">Packages</SectionTag>
            <motion.h2 initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-black text-navy mt-5 mb-4">
              Tiered Event Packages
            </motion.h2>
            <p className="text-[16px] text-text-body max-w-[480px] mx-auto">Multi-event discounts available. Every package is fully customizable.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {packages.map((pkg, i) => (
              <Card key={pkg.name} accent={pkg.accent} delay={i * 0.1} className={pkg.popular ? "ring-2 ring-sunshine" : ""}>
                {pkg.popular && <div className="text-[11px] font-bold uppercase tracking-wider text-sunshine-dark bg-sunshine/15 px-3 py-1 rounded-full inline-block mb-3">Most Popular</div>}
                <h3 className="text-[22px] font-extrabold text-navy mb-4">{pkg.name}</h3>
                <ul className="space-y-2 text-[14px] text-text-body">
                  <li className="flex items-center gap-2"><span className="text-mint-dark">✓</span> {pkg.activities}</li>
                  <li className="flex items-center gap-2"><span className="text-mint-dark">✓</span> {pkg.staff}</li>
                  <li className="flex items-center gap-2"><span className="text-mint-dark">✓</span> {pkg.extras}</li>
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[900px] mx-auto px-6">
          <div className="text-center mb-14">
            <SectionTag color="blue">Our Process</SectionTag>
            <motion.h2 initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-black text-navy mt-5 mb-4">
              From Idea to Execution
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
          <h2 className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-black text-white mb-4">Plan Your Next School Event</h2>
          <p className="text-[16px] text-white/60 mb-8">Let us handle the planning so you can focus on what matters — your students.</p>
          <Button href="/contact" variant="coral" size="lg" pill>Request a Quote →</Button>
        </div>
      </section>
    </PageWrapper>
  );
}
