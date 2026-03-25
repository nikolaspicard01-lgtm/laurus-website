"use client";

import { motion } from "framer-motion";
import PageWrapper from "./PageWrapper";
import SectionTag from "./SectionTag";
import Card from "./Card";
import Button from "./Button";
import Icon from "@/components/Icon";
import type { Location } from "@/data/locations";

interface Props {
  location: Location;
  type: "summer" | "spring";
}

export default function LocationPageContent({ location, type }: Props) {
  const isSummer = type === "summer";

  return (
    <PageWrapper>
      {/* Hero */}
      <section className={`relative overflow-hidden ${isSummer ? "gradient-hero" : "bg-gradient-to-br from-coral-light to-cream"}`}>
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute w-[350px] h-[350px] rounded-full bg-blue/5 -top-16 -right-16 blur-3xl" />
        </div>
        <div className="relative max-w-[1320px] mx-auto px-6 py-20 lg:py-28 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <SectionTag color={isSummer ? "sunshine" : "coral"} dot>
              {location.dates}
            </SectionTag>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-[clamp(2rem,4.5vw,3.4rem)] font-black text-navy mt-6 mb-3">
            {isSummer ? "Summer Camp" : "Spring Break Camp"} in {location.name}
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
            className="text-[15px] text-text-muted mb-2">{location.region}</motion.p>
          {location.venue && (
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
              className="text-[16px] text-text-body font-semibold mb-1">{location.venue}</motion.p>
          )}
          {location.address && (
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}
              className="text-[14px] text-text-muted mb-6">{location.address}</motion.p>
          )}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3">
            <Button href="https://app.amilia.com/store/en/laurus-summer-camp/shop/programs" external variant="coral" size="lg" pill>
              Register Now →
            </Button>
            <Button href={isSummer ? "/summer-camp" : "/spring-break"} variant="white" size="lg" pill>
              ← All Locations
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Pricing & Details */}
      <section className="py-16 bg-white">
        <div className="max-w-[900px] mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <Card accent="blue" delay={0}>
              <div className="text-center">
                <h3 className="text-[14px] font-bold text-text-muted mb-2">Early Bird Price</h3>
                <div className="text-[28px] font-black text-blue">{location.earlyBirdPrice}</div>
              </div>
            </Card>
            <Card accent="coral" delay={0.1}>
              <div className="text-center">
                <h3 className="text-[14px] font-bold text-text-muted mb-2">Regular Price</h3>
                <div className="text-[28px] font-black text-coral">{location.regularPrice}</div>
              </div>
            </Card>
            <Card accent="mint" delay={0.2}>
              <div className="text-center">
                <h3 className="text-[14px] font-bold text-text-muted mb-2">Camp Hours</h3>
                <div className="text-[18px] font-black text-navy">7:30 AM – 5:30 PM</div>
                <p className="text-[13px] text-text-muted mt-1">Mon–Fri</p>
              </div>
            </Card>
          </div>

          {location.notes && (
            <div className="mt-6 bg-sunshine/10 border border-sunshine/20 rounded-[var(--radius-md)] p-4 text-center">
              <p className="text-[14px] font-bold text-sunshine-dark"><Icon name="map-pin" size={16} className="inline -mt-0.5" /> {location.notes}</p>
            </div>
          )}
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 lg:py-20 bg-cream">
        <div className="max-w-[900px] mx-auto px-6">
          <div className="text-center mb-10">
            <SectionTag color="blue">What&apos;s Included</SectionTag>
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-black text-navy mt-5 mb-4">Everything Your Child Needs</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "11+ activity categories to choose from",
              "Expert-led 75-minute STA sessions",
              "Age-appropriate grouping (3–15+)",
              "Early care from 7:30 AM",
              "Extended care until 5:30 PM",
              "Optional lunch program ($10–12/day)",
              "Certified, background-checked staff",
              "Inclusive support available (via NDR)",
              "Stackable discounts up to 25%",
              "RL-24 tax receipts issued",
            ].map((item, i) => (
              <motion.div key={item} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }}
                className="flex items-start gap-3 bg-white rounded-[var(--radius-sm)] p-3 border border-[var(--border)]">
                <span className="w-5 h-5 rounded-full bg-mint/15 flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-mint-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                </span>
                <span className="text-[14px] text-text-body">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 gradient-navy text-center">
        <div className="max-w-[700px] mx-auto px-6">
          <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-black text-white mb-4">
            Register for {location.name}
          </h2>
          <p className="text-[16px] text-white/60 mb-8">Spots are limited — secure your child&apos;s place today.</p>
          <Button href="https://app.amilia.com/store/en/laurus-summer-camp/shop/programs" external variant="coral" size="lg" pill>Register Now →</Button>
        </div>
      </section>
    </PageWrapper>
  );
}
