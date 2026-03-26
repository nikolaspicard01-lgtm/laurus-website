"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import PageWrapper from "@/components/PageWrapper";
import PageHero from "@/components/PageHero";
import SectionTag from "@/components/SectionTag";
import Card from "@/components/Card";
import Button from "@/components/Button";
import FAQ from "@/components/FAQ";

const locations = [
  { name: "DDO", slug: "dollard-des-ormeaux", price: "$350/wk", region: "Quebec" },
  { name: "Laval", slug: "laval", price: "$350/wk", region: "Quebec" },
  { name: "NDG", slug: "notre-dame-de-grace", price: "$375/wk", region: "Quebec" },
  { name: "Verdun", slug: "verdun", price: "$350/wk", region: "Quebec" },
  { name: "TMR", slug: "town-of-mount-royal", price: "$375/wk", region: "Quebec" },
  { name: "Westmount", slug: "westmount", price: "$375/wk", region: "Quebec" },
  { name: "Rosemère", slug: "rosemere", price: "$350/wk", region: "Quebec" },
  { name: "Toronto (Richmond Hill)", slug: "toronto", price: "$575/wk", region: "Ontario" },
];

const faqItems = [
  { question: "Can I register for single days?", answer: "Yes. Full week rates apply, but single days are available at $80/day." },
  { question: "What activities are offered during Spring Break?", answer: "Same STA rotation model as summer — Robotics, Dance, Cooking, Sports, Arts & Crafts, and more — condensed into one action-packed week." },
  { question: "Is extended care available?", answer: "Yes, at +$8/hour beyond standard camp hours." },
  { question: "Can you accommodate dietary restrictions?", answer: "Yes. Our Lunch Program accommodates dietary needs. Contact us to discuss specific requirements." },
];

export default function SpringBreakPage() {
  return (
    <PageWrapper>
      <PageHero
        tag="March 2–6, 2026"
        tagColor="coral"
        title={<>The Best <span className="hl-coral">March Break</span> Day Camp</>}
        subtitle="Action-packed Spring Break camps across Quebec and Ontario. Same amazing STA activities, condensed into one power-packed week for kids ages 3–15."
        ctaText="Register Now"
        ctaHref="https://app.amilia.com/store/en/laurus-summer-camp/shop/programs"
        ctaExternal
        gradient="coral"
      />

      {/* Locations & Pricing */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1320px] mx-auto px-6">
          <div className="text-center mb-14">
            <SectionTag color="coral">8+ Locations</SectionTag>
            <motion.h2 initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-black text-navy mt-5 mb-4">
              Locations & Pricing
            </motion.h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {locations.map((loc, i) => (
              <Link key={loc.slug} href={`/spring-break/locations/${loc.slug}`}>
                <Card accent={loc.region === "Ontario" ? "sunshine" : "coral"} delay={i * 0.08}>
                  <h3 className="text-[16px] font-extrabold text-navy mb-1">{loc.name}</h3>
                  <p className="text-[12px] font-bold text-text-muted mb-3">{loc.region}</p>
                  <p className="text-[20px] font-black text-coral">{loc.price}</p>
                </Card>
              </Link>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {[{ label: "Single Day Rate", value: "$80/day" }, { label: "Extended Hours", value: "+$8/hour" }, { label: "Lunch Program", value: "$10/day" }].map((item) => (
              <div key={item.label} className="bg-gray-50 rounded-full px-5 py-2.5 border border-[var(--border)]">
                <span className="text-[13px] font-bold text-navy">{item.label}: </span>
                <span className="text-[13px] font-bold text-coral">{item.value}</span>
              </div>
            ))}
          </div>

          {/* Ontario Dates Callout */}
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="mt-10 bg-sunshine/10 border-2 border-sunshine rounded-[var(--radius-lg)] p-6 text-center">
            <p className="text-[18px] font-black text-navy">Ontario Spring Break: March 16–20, 2026</p>
            <p className="text-[14px] text-text-body mt-1">(different week from Quebec: March 2–6)</p>
          </motion.div>
        </div>
      </section>

      {/* Why Parents Love Spring Break */}
      <section className="py-20 lg:py-28 bg-cream">
        <div className="max-w-[1320px] mx-auto px-6">
          <div className="text-center mb-14">
            <SectionTag color="blue">Parent Approved</SectionTag>
            <motion.h2 initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-black text-navy mt-5 mb-4">
              Why Parents Love Spring Break
            </motion.h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card accent="coral" icon="target" delay={0}>
              <h3 className="text-[16px] font-extrabold text-navy mb-2">Keeps Kids Engaged</h3>
              <p className="text-[14px] text-text-body">Active, structured programming means no screen-time overload during the break.</p>
            </Card>
            <Card accent="blue" icon="shield" delay={0.1}>
              <h3 className="text-[16px] font-extrabold text-navy mb-2">Peace of Mind</h3>
              <p className="text-[14px] text-text-body">Background-checked staff, CPR/First Aid certified, full-day coverage 7:30 AM – 5:30 PM.</p>
            </Card>
            <Card accent="sunshine" icon="users" delay={0.2}>
              <h3 className="text-[16px] font-extrabold text-navy mb-2">New Friendships</h3>
              <p className="text-[14px] text-text-body">Kids make lasting connections through team activities, creative projects, and shared adventures.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Flexible Registration Options */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1000px] mx-auto px-6">
          <div className="text-center mb-14">
            <SectionTag color="mint">Registration</SectionTag>
            <motion.h2 initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-black text-navy mt-5 mb-4">
              Flexible Registration Options
            </motion.h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card accent="coral" icon="calendar" delay={0}>
              <h3 className="text-[16px] font-extrabold text-navy mb-1">Full Week</h3>
              <p className="text-[20px] font-black text-coral mb-2">$350–$575</p>
              <p className="text-[14px] text-text-body">depending on location</p>
            </Card>
            <Card accent="blue" icon="clock" delay={0.1}>
              <h3 className="text-[16px] font-extrabold text-navy mb-1">Single Day</h3>
              <p className="text-[20px] font-black text-blue mb-2">$80/day</p>
              <p className="text-[14px] text-text-body">for families needing partial coverage</p>
            </Card>
            <Card accent="sunshine" icon="star" delay={0.2}>
              <h3 className="text-[16px] font-extrabold text-navy mb-1">Extended Hours</h3>
              <p className="text-[20px] font-black text-sunshine mb-2">+$8/hour</p>
              <p className="text-[14px] text-text-body">for early drop-off or late pick-up</p>
            </Card>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20 lg:py-28 bg-cream">
        <div className="max-w-[1320px] mx-auto px-6">
          <div className="text-center mb-14">
            <SectionTag color="sunshine">What to Expect</SectionTag>
            <motion.h2 initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-black text-navy mt-5 mb-4">
              One Amazing Week
            </motion.h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card accent="coral" icon="target" delay={0}><h3 className="text-[16px] font-extrabold text-navy mb-2">Same Great Activities</h3><p className="text-[14px] text-text-body">Robotics, Dance, Sports, Arts, Cooking, and more — choose your favourites for the week.</p></Card>
            <Card accent="blue" icon="users" delay={0.1}><h3 className="text-[16px] font-extrabold text-navy mb-2">All Age Groups</h3><p className="text-[14px] text-text-body">Junior (3–4), Youth (5–11), Leadership (12–14), and C.I.T. (15+) programs available.</p></Card>
            <Card accent="sunshine" icon="clock" delay={0.2}><h3 className="text-[16px] font-extrabold text-navy mb-2">Full-Day Coverage</h3><p className="text-[14px] text-text-body">7:30 AM to 5:30 PM with early care, lunch options, and extended care available.</p></Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1320px] mx-auto px-6">
          <div className="text-center mb-14">
            <SectionTag color="violet">Testimonials</SectionTag>
            <motion.h2 initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-black text-navy mt-5 mb-4">
              What Parents Are Saying
            </motion.h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Marie Dupont", detail: "Parent of 6 & 9 year old", quote: "Spring Break camp was a lifesaver! The kids had an amazing week and I could actually get work done." },
              { name: "Tom Richards", detail: "Parent of 8 year old", quote: "My daughter tried Robotics for the first time during March Break and now she\u2019s obsessed. Thank you Laurus!" },
              { name: "Nadia Boukhari", detail: "Parent of 5 year old", quote: "The staff were so warm and welcoming. My shy son came home beaming every day." },
            ].map((t, i) => (
              <motion.div key={t.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-gray-50 rounded-[var(--radius-lg)] p-6 border border-[var(--border)]">
                <p className="text-[14px] text-text-body italic mb-4">&ldquo;{t.quote}&rdquo;</p>
                <p className="text-[14px] font-extrabold text-navy">{t.name}</p>
                <p className="text-[12px] text-text-muted">{t.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28 bg-cream">
        <div className="max-w-[1320px] mx-auto px-6">
          <div className="text-center mb-14">
            <SectionTag color="violet">FAQ</SectionTag>
            <h2 className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-black text-navy mt-5 mb-4">Spring Break FAQ</h2>
          </div>
          <FAQ items={faqItems} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-24 gradient-navy text-center">
        <div className="max-w-[700px] mx-auto px-6">
          <h2 className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-black text-white mb-4">Book Your Child&apos;s Spring Break</h2>
          <p className="text-[16px] text-white/60 mb-8">Don&apos;t let them miss out on the most fun week of the year!</p>
          <Button href="https://app.amilia.com/store/en/laurus-summer-camp/shop/programs" external variant="coral" size="lg" pill>Register Now →</Button>
        </div>
      </section>
    </PageWrapper>
  );
}
