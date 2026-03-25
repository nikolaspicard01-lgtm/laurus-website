"use client";

import { motion } from "framer-motion";
import PageWrapper from "@/components/PageWrapper";
import PageHero from "@/components/PageHero";
import SectionTag from "@/components/SectionTag";
import Card from "@/components/Card";
import Button from "@/components/Button";
import Icon from "@/components/Icon";
import type { IconName } from "@/components/Icon";

const tiers = [
  { icon: "sprout" as const, title: "Little Explorers", ages: "Ages 3–5", desc: "Introductory exposure through play, songs, and sensory activities.", accent: "mint" as const },
  { icon: "search" as const, title: "Young Discoverers", ages: "Ages 6–9", desc: "Building vocabulary and basic conversation skills through games and crafts.", accent: "blue" as const },
  { icon: "palette" as const, title: "Creators in Action", ages: "Ages 10–11", desc: "Advanced conversation, creative writing, and cultural projects.", accent: "sunshine" as const },
  { icon: "globe" as const, title: "Ambassadors", ages: "Ages 12–15", desc: "Fluency development, cultural leadership, and real-world communication.", accent: "coral" as const },
];

const methods: { icon: IconName; name: string }[] = [
  { icon: "theater", name: "Drama & Role Play" },
  { icon: "gamepad", name: "Language Games" },
  { icon: "book-open", name: "Storytime & Book Clubs" },
  { icon: "message-circle", name: "Conversation Circles" },
  { icon: "brush", name: "Cultural Crafts" },
  { icon: "party-popper", name: "Cultural Celebrations" },
];

const locations = [
  { name: "DDO Campus", venue: "Emmanuel Christian School", dates: "Jun 22 – Aug 14", price: "$375/wk" },
  { name: "Montreal Downtown", venue: "Sacred Heart School", dates: "Jun 22 – Aug 14", price: "$375/wk" },
  { name: "Laval Campus", venue: "John F. Kennedy Elementary", dates: "Jun 29 – Aug 14", price: "$375/wk" },
];

export default function LanguagesPage() {
  return (
    <PageWrapper>
      <PageHero
        tag="ESL & FSL Immersion"
        tagColor="blue"
        title={<>Bilingual <span className="hl-blue">English & French</span> Immersion Camp</>}
        subtitle="The only camp offering full ESL/FSL immersion alongside traditional camp activities. Native speakers, certified instructors, and beginner-friendly programs."
        ctaText="Register Now"
        ctaHref="https://app.amilia.com/store/en/laurus-summer-camp/shop/programs"
        ctaExternal
        gradient="blue"
      />

      {/* Age Tiers */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1320px] mx-auto px-6">
          <div className="text-center mb-14">
            <SectionTag color="blue">Age-Based Tiers</SectionTag>
            <motion.h2 initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-black text-navy mt-5 mb-4">
              Programs for Every Level
            </motion.h2>
            <p className="text-[16px] text-text-body max-w-[480px] mx-auto">No prior language experience required. Children are grouped by age and level.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {tiers.map((t, i) => (
              <Card key={t.title} accent={t.accent} icon={t.icon} delay={i * 0.1}>
                <h3 className="text-[17px] font-extrabold text-navy mb-1">{t.title}</h3>
                <p className="text-[13px] font-bold text-blue mb-2">{t.ages}</p>
                <p className="text-[14px] text-text-body leading-relaxed">{t.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Methods */}
      <section className="py-20 lg:py-28 bg-cream">
        <div className="max-w-[900px] mx-auto px-6">
          <div className="text-center mb-14">
            <SectionTag color="sunshine">How We Teach</SectionTag>
            <motion.h2 initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-black text-navy mt-5 mb-4">
              Learning Through Play & Immersion
            </motion.h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {methods.map((m, i) => (
              <motion.div key={m.name} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                className="bg-white rounded-[var(--radius-lg)] p-5 text-center shadow-[var(--shadow-xs)] border border-[var(--border)] hover:-translate-y-1 hover:shadow-[var(--shadow-md)] transition-all">
                <div className="text-3xl mb-2"><Icon name={m.icon} size={28} /></div>
                <div className="text-[14px] font-bold text-navy">{m.name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[900px] mx-auto px-6">
          <div className="text-center mb-14">
            <SectionTag color="coral">3 Dedicated Locations</SectionTag>
            <motion.h2 initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-black text-navy mt-5 mb-4">
              Locations & Pricing
            </motion.h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {locations.map((loc, i) => (
              <Card key={loc.name} accent="blue" delay={i * 0.1}>
                <h3 className="text-[17px] font-extrabold text-navy mb-1">{loc.name}</h3>
                <p className="text-[13px] text-text-muted mb-1">{loc.venue}</p>
                <p className="text-[13px] text-text-muted mb-3">{loc.dates}</p>
                <p className="text-[22px] font-black text-blue">{loc.price}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 gradient-navy text-center">
        <div className="max-w-[700px] mx-auto px-6">
          <h2 className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-black text-white mb-4">Give Your Child the Gift of Language</h2>
          <p className="text-[16px] text-white/60 mb-8">Watch their confidence and communication skills soar in just one summer.</p>
          <Button href="https://app.amilia.com/store/en/laurus-summer-camp/shop/programs" external variant="coral" size="lg" pill>Register Now →</Button>
        </div>
      </section>
    </PageWrapper>
  );
}
