"use client";

import { motion } from "framer-motion";
import PageWrapper from "@/components/PageWrapper";
import PageHero from "@/components/PageHero";
import SectionTag from "@/components/SectionTag";
import Card from "@/components/Card";
import Button from "@/components/Button";

const programs = [
  { icon: "calendar" as const, title: "PED Day Camps", desc: "Full-day activities when schools have pedagogical days. Sports, arts, STEM, and more.", price: "$75–90/day", accent: "blue" as const },
  { icon: "book-marked" as const, title: "Reading Week Programs", desc: "Structured programming during school reading weeks with creative and active themes.", price: "$350–400/week", accent: "coral" as const },
  { icon: "theater" as const, title: "Themed Break Programs", desc: "Exciting themed activities during school breaks — from science weeks to arts festivals.", price: "$300–450/week", accent: "sunshine" as const },
  { icon: "star" as const, title: "After-School Enrichment", desc: "Activities aligned with school curriculum that extend learning beyond the classroom.", price: "$30–45/session", accent: "violet" as const },
];

export default function ExtraCurricularsPage() {
  return (
    <PageWrapper>
      <PageHero
        tag="Year-Round Programs"
        tagColor="violet"
        title={<>Year-Round <span className="hl-blue">Enrichment</span> for Every Child</>}
        subtitle="PED Day Camps, Reading Weeks, Themed Breaks, and After-School programs. Keep your child learning and growing all year long."
        ctaText="Register Now"
        ctaHref="https://app.amilia.com/store/en/laurus-summer-camp/shop/programs"
        ctaExternal
      />

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1320px] mx-auto px-6">
          <div className="text-center mb-14">
            <SectionTag color="violet">Our Programs</SectionTag>
            <motion.h2 initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-black text-navy mt-5 mb-4">
              Something for Every Season
            </motion.h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {programs.map((p, i) => (
              <Card key={p.title} accent={p.accent} icon={p.icon} delay={i * 0.1}>
                <h3 className="text-[18px] font-extrabold text-navy mb-2">{p.title}</h3>
                <p className="text-[14px] text-text-body leading-relaxed mb-3">{p.desc}</p>
                <p className="text-[16px] font-black text-navy">{p.price}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-cream">
        <div className="max-w-[900px] mx-auto px-6">
          <div className="text-center mb-14">
            <SectionTag color="mint">Discounts</SectionTag>
            <motion.h2 initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-black text-navy mt-5 mb-4">
              Savings That Add Up
            </motion.h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: "Sibling Discount", value: "10% off" },
              { label: "Early Bird (6+ wks)", value: "10% off" },
              { label: "Early Bird (3+ wks)", value: "5% off" },
              { label: "Referral Credit", value: "$25 credit" },
            ].map((d, i) => (
              <motion.div key={d.label} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="bg-white rounded-[var(--radius-md)] p-5 text-center border border-[var(--border)] shadow-[var(--shadow-xs)]">
                <div className="text-[14px] font-bold text-navy mb-1">{d.label}</div>
                <div className="text-[16px] font-black text-mint-dark">{d.value}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 gradient-navy text-center">
        <div className="max-w-[700px] mx-auto px-6">
          <h2 className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-black text-white mb-4">Keep Them Growing Year-Round</h2>
          <p className="text-[16px] text-white/60 mb-8">Don&apos;t wait for summer — enroll in our year-round enrichment programs today.</p>
          <Button href="https://app.amilia.com/store/en/laurus-summer-camp/shop/programs" external variant="coral" size="lg" pill>Browse Programs →</Button>
        </div>
      </section>
    </PageWrapper>
  );
}
