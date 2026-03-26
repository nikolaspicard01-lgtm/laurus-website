"use client";

import { motion } from "framer-motion";
import PageWrapper from "@/components/PageWrapper";
import PageHero from "@/components/PageHero";
import Card from "@/components/Card";
import Button from "@/components/Button";
import { useLocale } from "@/lib/LocaleContext";

const partners = [
  { icon: "calendar" as const, name: "Agendrix", role: "Staff Scheduling & Operations", desc: "Professional staff scheduling platform that ensures our team is organized and every location is properly staffed.", accent: "blue" as const },
  { icon: "heart" as const, name: "Neurodiverse Resource (NDR)", role: "Inclusive Support Partner", desc: "Clinician-led organization providing evidence-based, strengths-based support for neurodivergent campers.", accent: "violet" as const },
  { icon: "monitor" as const, name: "ICTC-CTIC", role: "Digital Skills & Youth Empowerment", desc: "Partnership supporting digital literacy, CyberTitan competitions, and youth technology education.", accent: "mint" as const },
  { icon: "utensils" as const, name: "Les Petits Chefs", role: "Nutrition & Lunch Program", desc: "Certified nutritionists preparing fresh, nut-free meals daily. Healthy, diverse lunch options for every camper.", accent: "sunshine" as const },
];

export default function PartnersPage() {
  const { dict } = useLocale();

  return (
    <PageWrapper>
      <PageHero
        tag={dict.partners.heroTag}
        tagColor="mint"
        title={<>{dict.partners.heroTitle} <span className="hl-blue">{dict.partners.heroHighlight}</span></>}
        subtitle={dict.partners.heroSub}
      />

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[900px] mx-auto px-6">
          <div className="space-y-6">
            {partners.map((p, i) => (
              <motion.div key={p.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <Card accent={p.accent} icon={p.icon}>
                  <h3 className="text-[20px] font-extrabold text-navy mb-1">{p.name}</h3>
                  <p className="text-[13px] font-bold text-blue mb-3">{p.role}</p>
                  <p className="text-[15px] text-text-body leading-relaxed">{p.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 gradient-navy text-center">
        <div className="max-w-[700px] mx-auto px-6">
          <h2 className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-black text-white mb-4">{dict.partners.ctaTitle}</h2>
          <p className="text-[16px] text-white/60 mb-8">{dict.partners.ctaSub}</p>
          <Button href="/contact" variant="coral" size="lg" pill>{dict.common.getInTouch}</Button>
        </div>
      </section>
    </PageWrapper>
  );
}
