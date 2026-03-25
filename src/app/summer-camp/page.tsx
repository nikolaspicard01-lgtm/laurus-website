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

const agePrograms = [
  { icon: "baby" as IconName, title: "Junior Camp", ages: "Ages 3–4", description: "Play-based learning, sensory play, music & movement, nature exploration. Low ratios, rest time included. Potty training not required.", accent: "blue" as const, href: "/summer-camp/programs/junior" },
  { icon: "palette" as IconName, title: "Youth Program", ages: "Ages 5–11", description: "Core camp experience with weekly STA rotations — Robotics, Dance, Sports, Visual Arts, and more. Age-based grouping.", accent: "coral" as const, href: "/summer-camp/programs/youth" },
  { icon: "star" as IconName, title: "Leadership Program", ages: "Ages 12–14", description: "Leadership development, team challenges, community service, entrepreneurship workshops, and mentorship.", accent: "sunshine" as const, href: "/summer-camp/programs/leadership" },
  { icon: "graduation-cap" as IconName, title: "C.I.T. Program", ages: "Age 15+", description: "Counselor-in-Training with Shadow → Assist → Lead model. Completion certificate recognized by schools and employers.", accent: "mint" as const, href: "/summer-camp/programs/cit" },
];

const activities: { icon: IconName; iconClass: string; name: string }[] = [
  { icon: "bot", iconClass: "text-blue", name: "Robotics" },
  { icon: "music", iconClass: "text-coral", name: "Dance" },
  { icon: "dumbbell", iconClass: "text-mint-dark", name: "Multi-Sport" },
  { icon: "utensils", iconClass: "text-sunshine-dark", name: "Cooking" },
  { icon: "monitor", iconClass: "text-violet", name: "Coding" },
  { icon: "languages", iconClass: "text-blue", name: "Languages" },
  { icon: "flask", iconClass: "text-coral", name: "Science" },
  { icon: "palette", iconClass: "text-sunshine-dark", name: "Visual Arts" },
  { icon: "target", iconClass: "text-mint-dark", name: "Soccer" },
  { icon: "theater", iconClass: "text-violet", name: "Drama" },
  { icon: "music", iconClass: "text-blue", name: "Music" },
];

const schedule = [
  { time: "7:30 AM", activity: "Early Care / Drop-off", color: "bg-blue/10 text-blue" },
  { time: "9:00 AM", activity: "Morning Assembly & Warm-Up", color: "bg-mint/10 text-mint-dark" },
  { time: "9:30 AM", activity: "STA Block 1", color: "bg-coral/10 text-coral" },
  { time: "10:45 AM", activity: "Snack & Free Play", color: "bg-sunshine/10 text-sunshine-dark" },
  { time: "11:15 AM", activity: "STA Block 2", color: "bg-violet/10 text-violet" },
  { time: "12:15 PM", activity: "Lunch", color: "bg-sunshine/10 text-sunshine-dark" },
  { time: "1:00 PM", activity: "Outdoor Play & Guest Speakers", color: "bg-mint/10 text-mint-dark" },
  { time: "2:00 PM", activity: "STA Block 3", color: "bg-blue/10 text-blue" },
  { time: "3:15 PM", activity: "Creative Projects & Team Challenges", color: "bg-coral/10 text-coral" },
  { time: "4:00 PM", activity: "Regular Pick-Up", color: "bg-sunshine/10 text-sunshine-dark" },
  { time: "4:00–5:30 PM", activity: "Extended Care", color: "bg-blue/10 text-blue" },
];

const locations = {
  "West Island": ["DDO", "Beaconsfield", "Baie d'Urfé", "Île-Bizard", "Ste-Geneviève"],
  "Montreal": ["Downtown", "NDG", "TMR", "Verdun", "Ville Saint-Laurent", "Saint-Léonard", "RDP"],
  "Off Island": ["Laval", "Rosemère", "Brossard", "Vaudreuil"],
  "Ontario": ["Toronto", "Ottawa"],
};

const faqItems = [
  { question: "What ages do you accept?", answer: "Ages 3–15+. Programs are split into Junior (3–4), Youth (5–11), Leadership (12–14), and C.I.T. (15+)." },
  { question: "Can my child switch activities?", answer: "Yes! Children can choose different STAs every week. Robotics one week, Dance the next, Cooking the week after." },
  { question: "What are the camp hours?", answer: "Monday–Friday, 7:30 AM – 5:30 PM. Early care starts at 7:30 AM and extended care goes until 5:30 PM." },
  { question: "Is lunch provided?", answer: "Optional Lunch Program available at $10–12/day, prepared by certified nutritionists through our Les Petits Chefs partnership. Children can also bring their own." },
  { question: "Are camp fees tax deductible?", answer: "Yes. Camp fees are eligible for RL-24 provincial tax receipts." },
  { question: "What discounts are available?", answer: "Monthly, Multi-Week (5–10%), Sibling (15%), and Early Bird discounts — stackable for up to 25% savings." },
  { question: "What if my child is not potty trained?", answer: "No problem! Potty training is not required for our Junior Program (ages 3–4)." },
  { question: "Do you offer inclusive support?", answer: "Yes. Through our partnership with NDR, we offer clinician-led inclusive support with assessment levels from independent participation to 1:1 support." },
];

export default function SummerCampPage() {
  return (
    <PageWrapper>
      <PageHero
        tag="June 22 – August 21, 2026"
        tagColor="sunshine"
        title={<>Give Your Child the <span className="hl-sunshine">Best Summer Ever</span></>}
        subtitle="Join thousands of kids for an unforgettable summer with 11+ activities, caring instructors, and friendships that last a lifetime across 17+ locations."
        ctaText="Register Now"
        ctaHref="https://app.amilia.com/store/en/laurus-summer-camp/shop/programs"
        ctaExternal
        secondaryCtaText="Call (514) 600-0504"
        secondaryCtaHref="tel:+15146000504"
      />

      {/* Age Programs */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1320px] mx-auto px-6">
          <div className="text-center mb-14">
            <SectionTag color="blue">Programs for Every Age</SectionTag>
            <motion.h2 initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-black text-navy mt-5 mb-4">
              Find the Perfect Program for Your Child
            </motion.h2>
            <p className="text-[16px] text-text-body max-w-[560px] mx-auto">From toddlers to teens, age-appropriate activities and care designed for every stage.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {agePrograms.map((prog, i) => (
              <Card key={prog.title} accent={prog.accent} icon={prog.icon} delay={i * 0.1}>
                <h3 className="text-[17px] font-extrabold text-navy mb-1">{prog.title}</h3>
                <p className="text-[13px] font-bold text-blue mb-2">{prog.ages}</p>
                <p className="text-[14px] text-text-body leading-relaxed mb-4">{prog.description}</p>
                <Button href={prog.href} variant="outline" size="sm" className="!text-[13px]">Learn More →</Button>
              </Card>
            ))}
          </div>
          {/* Inclusive Support Card */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-8 max-w-[700px] mx-auto">
            <Card accent="violet" icon="heart" className="text-center">
              <h3 className="text-[18px] font-extrabold text-navy mb-2">Inclusive Support & Accessibility</h3>
              <p className="text-[14px] text-text-body leading-relaxed mb-4">We&apos;re committed to providing accessible, inclusive programs for all children through our partnership with Neurodiverse Resource (NDR).</p>
              <Button href="/inclusive-support" variant="outline" size="sm">Learn About Our Support →</Button>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Activities */}
      <section className="py-20 lg:py-28 bg-cream">
        <div className="max-w-[1320px] mx-auto px-6">
          <div className="text-center mb-14">
            <SectionTag color="coral">11 Activity Categories</SectionTag>
            <motion.h2 initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-black text-navy mt-5 mb-4">
              Daily 75-Minute Expert-Led Activities
            </motion.h2>
            <p className="text-[16px] text-text-body max-w-[560px] mx-auto">Kids choose their Specific Training Activities (STAs) weekly — switch it up every week!</p>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4">
            {activities.map((a, i) => (
              <motion.div key={a.name} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                className="bg-white rounded-[var(--radius-lg)] p-5 text-center shadow-[var(--shadow-xs)] border border-[var(--border)] hover:-translate-y-1 hover:shadow-[var(--shadow-md)] transition-all duration-300">
                <div className="mb-2 flex justify-center"><Icon name={a.icon} size={24} className={a.iconClass} /></div>
                <div className="text-[13px] font-bold text-navy">{a.name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Daily Schedule */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="text-center mb-14">
            <SectionTag color="mint">Daily Schedule</SectionTag>
            <motion.h2 initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-black text-navy mt-5 mb-4">
              A Full Day of Fun & Learning
            </motion.h2>
          </div>
          <div className="space-y-3">
            {schedule.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                className="flex items-center gap-4 bg-gray-50 rounded-[var(--radius-md)] p-4 border border-[var(--border)]">
                <span className={`text-[13px] font-bold px-3 py-1 rounded-full shrink-0 ${item.color}`}>{item.time}</span>
                <span className="text-[14px] font-semibold text-navy">{item.activity}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 lg:py-28 gradient-mesh">
        <div className="max-w-[1320px] mx-auto px-6">
          <div className="text-center mb-14">
            <SectionTag color="sunshine">Pricing</SectionTag>
            <motion.h2 initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-black text-navy mt-5 mb-4">
              Flexible Pricing & Stackable Discounts
            </motion.h2>
            <p className="text-[16px] text-text-body max-w-[560px] mx-auto">Save up to 25% with our stackable discount structure. Camp fees are tax deductible (RL-24).</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-[900px] mx-auto">
            <Card accent="blue" delay={0}>
              <div className="text-center">
                <h3 className="text-[15px] font-extrabold text-navy mb-2">West Island & Montreal</h3>
                <div className="text-[clamp(1.8rem,3vw,2.4rem)] font-black text-blue mb-1">$345<span className="text-[16px] text-text-muted font-semibold">/wk</span></div>
                <p className="text-[13px] text-text-muted">Early Bird price</p>
                <p className="text-[13px] text-text-muted line-through mt-1">$375/wk regular</p>
              </div>
            </Card>
            <Card accent="mint" delay={0.1}>
              <div className="text-center">
                <h3 className="text-[15px] font-extrabold text-navy mb-2">Off Island</h3>
                <div className="text-[clamp(1.8rem,3vw,2.4rem)] font-black text-mint-dark mb-1">$325<span className="text-[16px] text-text-muted font-semibold">/wk</span></div>
                <p className="text-[13px] text-text-muted">Early Bird price</p>
                <p className="text-[13px] text-text-muted line-through mt-1">$365/wk regular</p>
              </div>
            </Card>
            <Card accent="coral" delay={0.2}>
              <div className="text-center">
                <h3 className="text-[15px] font-extrabold text-navy mb-2">Ontario</h3>
                <div className="text-[clamp(1.8rem,3vw,2.4rem)] font-black text-coral mb-1">$295<span className="text-[16px] text-text-muted font-semibold">/wk</span></div>
                <p className="text-[13px] text-text-muted">Early Bird price</p>
                <p className="text-[13px] text-text-muted line-through mt-1">$375/wk regular</p>
              </div>
            </Card>
          </div>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-[900px] mx-auto">
            {[
              { label: "Multi-Week (5–7)", discount: "5% off" },
              { label: "Multi-Week (8–9)", discount: "10% off" },
              { label: "Sibling Discount", discount: "15% off" },
              { label: "Referral Program", discount: "$10 credit" },
            ].map((d) => (
              <div key={d.label} className="bg-white rounded-[var(--radius-md)] p-4 text-center border border-[var(--border)]">
                <div className="text-[14px] font-bold text-navy">{d.label}</div>
                <div className="text-[13px] font-bold text-mint-dark">{d.discount}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1320px] mx-auto px-6">
          <div className="text-center mb-14">
            <SectionTag color="blue">17+ Locations</SectionTag>
            <motion.h2 initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-black text-navy mt-5 mb-4">
              Find a Camp Near You
            </motion.h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(locations).map(([region, locs], i) => (
              <motion.div key={region} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-gray-50 rounded-[var(--radius-lg)] p-6 border border-[var(--border)]">
                <h3 className="text-[15px] font-extrabold text-navy mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue" />{region}
                </h3>
                <ul className="space-y-2">
                  {locs.map((loc) => (
                    <li key={loc} className="text-[14px] text-text-body hover:text-blue transition-colors cursor-pointer">{loc}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-20 lg:py-24 bg-cream">
        <div className="max-w-[900px] mx-auto px-6">
          <div className="text-center mb-14">
            <SectionTag color="violet">Add-On Services</SectionTag>
            <motion.h2 initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-black text-navy mt-5 mb-4">
              Everything Your Child Needs
            </motion.h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-5">
            <Card accent="sunshine" icon="utensils" delay={0}>
              <h3 className="text-[16px] font-extrabold text-navy mb-2">Lunch Program</h3>
              <p className="text-[14px] text-text-body mb-2">Fresh meals by Les Petits Chefs. Nut-free, nutritionist-planned.</p>
              <p className="text-[14px] font-bold text-sunshine-dark">$10–12/day</p>
            </Card>
            <Card accent="blue" icon="clock" delay={0.1}>
              <h3 className="text-[16px] font-extrabold text-navy mb-2">Extended Care</h3>
              <p className="text-[14px] text-text-body mb-2">Early drop-off from 7:30 AM and late pick-up until 5:30 PM.</p>
              <p className="text-[14px] font-bold text-blue">Included at most locations</p>
            </Card>
            <Card accent="coral" icon="shirt" delay={0.2}>
              <h3 className="text-[16px] font-extrabold text-navy mb-2">Camp Merch</h3>
              <p className="text-[14px] text-text-body mb-2">Official Laurus t-shirts available for purchase.</p>
              <p className="text-[14px] font-bold text-coral">Available on-site</p>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1320px] mx-auto px-6">
          <div className="text-center mb-14">
            <SectionTag color="violet">FAQ</SectionTag>
            <motion.h2 initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-black text-navy mt-5 mb-4">
              Summer Camp FAQ
            </motion.h2>
          </div>
          <FAQ items={faqItems} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-24 gradient-navy text-center">
        <div className="max-w-[700px] mx-auto px-6">
          <h2 className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-black text-white mb-4">Ready to Register?</h2>
          <p className="text-[16px] text-white/60 mb-8">Spots are filling up fast. Secure your child&apos;s place at the best bilingual summer camp in Montreal.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button href="https://app.amilia.com/store/en/laurus-summer-camp/shop/programs" external variant="coral" size="lg" pill>Register Now →</Button>
            <Button href="/contact" variant="outline" size="lg" pill className="!border-white/20 !text-white hover:!bg-white/10">Contact Us</Button>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
