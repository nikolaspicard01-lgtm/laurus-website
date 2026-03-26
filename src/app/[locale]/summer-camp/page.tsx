"use client";

import { motion } from "framer-motion";
import Link from "next/link";
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

const activities: { icon: IconName; iconClass: string; name: string; description: string }[] = [
  { icon: "bot", iconClass: "text-blue", name: "Robotics", description: "Learn coding, engineering, and design through hands-on robotics projects and competitions." },
  { icon: "music", iconClass: "text-coral", name: "Dance", description: "Explore hip-hop, contemporary, ballet, and more with professional choreographers." },
  { icon: "dumbbell", iconClass: "text-mint-dark", name: "Multi-Sport", description: "Master fundamentals of soccer, basketball, volleyball, and other sports with certified coaches." },
  { icon: "utensils", iconClass: "text-sunshine-dark", name: "Cooking", description: "Create delicious dishes while learning nutrition, kitchen skills, and cultural cuisines." },
  { icon: "monitor", iconClass: "text-violet", name: "Coding", description: "Build games, apps, and websites using age-appropriate programming languages." },
  { icon: "languages", iconClass: "text-blue", name: "Languages", description: "Learn French or English through immersive games, culture, and conversations." },
  { icon: "flask", iconClass: "text-coral", name: "Science", description: "Conduct experiments and learn about biology, physics, chemistry in interactive sessions." },
  { icon: "palette", iconClass: "text-sunshine-dark", name: "Visual Arts", description: "Paint, sculpt, and create with various mediums under guidance of experienced artists." },
  { icon: "target", iconClass: "text-mint-dark", name: "Soccer", description: "Develop advanced soccer techniques with certified coaches in competitive and recreational settings." },
  { icon: "theater", iconClass: "text-violet", name: "Drama", description: "Perform on stage, develop confidence, and express creativity through theater and improvisation." },
  { icon: "music", iconClass: "text-blue", name: "Music", description: "Learn instruments, singing, music production, and perform in our end-of-summer showcase." },
];

const schedule = [
  { time: "7:30–9:00 AM", activity: "Early Care", subtitle: "Safe arrival and morning activities for early birds", color: "bg-blue/10 text-blue" },
  { time: "9:00–10:15 AM", activity: "Block 1", subtitle: "First activity block - sports, arts, or STEM rotation", color: "bg-mint/10 text-mint-dark" },
  { time: "10:15–10:30 AM", activity: "Snack Time", subtitle: "Healthy snacks and hydration break", color: "bg-sunshine/10 text-sunshine-dark" },
  { time: "10:30–11:45 AM", activity: "STAs", subtitle: "Choose from 11 diverse activity categories", color: "bg-coral/10 text-coral" },
  { time: "11:45 AM–12:45 PM", activity: "Lunch & Social", subtitle: "Lunch provided or bring your own + free play", color: "bg-sunshine/10 text-sunshine-dark" },
  { time: "12:45–2:00 PM", activity: "Block 2", subtitle: "Second activity rotation", color: "bg-violet/10 text-violet" },
  { time: "2:00–3:15 PM", activity: "Block 3", subtitle: "Final activity block with outdoor time", color: "bg-mint/10 text-mint-dark" },
  { time: "3:15–3:30 PM", activity: "Closing Circle", subtitle: "Reflect on the day and celebrate achievements", color: "bg-coral/10 text-coral" },
  { time: "3:30–4:00 PM", activity: "Regular Pick-up", subtitle: "Standard dismissal time", color: "bg-blue/10 text-blue" },
  { time: "4:00–5:30 PM", activity: "Extended Care", subtitle: "Supervised activities for those needing later pick-up", color: "bg-violet/10 text-violet" },
];

const locations = {
  "West Island": [
    { name: "DDO", slug: "dollard-des-ormeaux" },
    { name: "Beaconsfield", slug: "beaconsfield" },
    { name: "Baie d'Urfé", slug: "baie-durfe" },
    { name: "Île-Bizard", slug: "ile-bizard" },
    { name: "Ste-Geneviève", slug: "sainte-genevieve" },
  ],
  "Montreal": [
    { name: "Downtown", slug: "montreal-downtown" },
    { name: "NDG", slug: "notre-dame-de-grace" },
    { name: "TMR", slug: "town-of-mount-royal" },
    { name: "Verdun", slug: "verdun" },
    { name: "Ville Saint-Laurent", slug: "ville-saint-laurent" },
    { name: "Saint-Léonard", slug: "saint-leonard" },
    { name: "RDP", slug: "riviere-des-prairies" },
  ],
  "Off Island": [
    { name: "Laval", slug: "laval" },
    { name: "Rosemère", slug: "rosemere" },
    { name: "Brossard", slug: "brossard" },
    { name: "Vaudreuil", slug: "vaudreuil" },
  ],
  "Ontario": [
    { name: "Toronto", slug: "toronto" },
    { name: "Ottawa", slug: "ottawa" },
  ],
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {activities.map((a, i) => (
              <motion.div key={a.name} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                className="bg-white rounded-[var(--radius-lg)] p-6 shadow-[var(--shadow-xs)] border border-[var(--border)] hover:-translate-y-1 hover:shadow-[var(--shadow-md)] transition-all duration-300 flex gap-4 items-start">
                <div className="shrink-0 w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center"><Icon name={a.icon} size={20} className={a.iconClass} /></div>
                <div>
                  <div className="text-[15px] font-bold text-navy mb-1">{a.name}</div>
                  <div className="text-[13px] text-text-body leading-relaxed">{a.description}</div>
                </div>
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
                className="flex items-start gap-4 bg-gray-50 rounded-[var(--radius-md)] p-4 border border-[var(--border)]">
                <span className={`text-[12px] font-bold px-3 py-1 rounded-full shrink-0 whitespace-nowrap ${item.color}`}>{item.time}</span>
                <div>
                  <span className="text-[14px] font-semibold text-navy">{item.activity}</span>
                  <p className="text-[13px] text-text-muted mt-0.5">{item.subtitle}</p>
                </div>
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
          {/* Early Bird Tiers */}
          <div className="mt-12 max-w-[900px] mx-auto">
            <h3 className="text-[20px] font-extrabold text-navy text-center mb-6">Early Bird Discount Tiers</h3>
            <div className="grid sm:grid-cols-3 gap-5">
              <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white rounded-[var(--radius-lg)] p-6 text-center border-2 border-mint shadow-[var(--shadow-md)]">
                <div className="text-[12px] font-bold uppercase tracking-wider text-mint-dark mb-2">Super Early Bird</div>
                <div className="text-[13px] text-text-muted mb-1">January</div>
                <div className="text-[clamp(1.6rem,2.5vw,2rem)] font-black text-mint-dark">25% OFF</div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-white rounded-[var(--radius-lg)] p-6 text-center border-2 border-blue shadow-[var(--shadow-md)]">
                <div className="text-[12px] font-bold uppercase tracking-wider text-blue mb-2">Early Bird</div>
                <div className="text-[13px] text-text-muted mb-1">March</div>
                <div className="text-[clamp(1.6rem,2.5vw,2rem)] font-black text-blue">15% OFF</div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-white rounded-[var(--radius-lg)] p-6 text-center border border-[var(--border)]">
                <div className="text-[12px] font-bold uppercase tracking-wider text-text-muted mb-2">Standard</div>
                <div className="text-[13px] text-text-muted mb-1">April+</div>
                <div className="text-[clamp(1.6rem,2.5vw,2rem)] font-black text-navy">Full Price</div>
              </motion.div>
            </div>
            {/* Urgency Card */}
            <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-6 bg-coral/10 border border-coral/30 rounded-[var(--radius-lg)] p-5 text-center">
              <p className="text-[15px] font-bold text-coral">Only 42 out of 100 discounted spots remaining! March discounts expire soon.</p>
            </motion.div>
          </div>
          {/* Additional Discounts */}
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-[900px] mx-auto">
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

      {/* Referral Program */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="text-center mb-10">
            <SectionTag color="mint">Referral Rewards</SectionTag>
            <motion.h2 initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-black text-navy mt-5 mb-4">
              Laurus Camp Connect — Referral Program
            </motion.h2>
            <p className="text-[16px] text-text-body max-w-[560px] mx-auto">It&apos;s our way of saying thanks for spreading the word!</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            <Card accent="mint" icon="heart" delay={0}>
              <h3 className="text-[16px] font-extrabold text-navy mb-2">You Get</h3>
              <p className="text-[14px] text-text-body leading-relaxed">$10 credit per week for every referred child who registers. The more families you refer, the more you save!</p>
            </Card>
            <Card accent="blue" icon="star" delay={0.1}>
              <h3 className="text-[16px] font-extrabold text-navy mb-2">Your Friends Get</h3>
              <p className="text-[14px] text-text-body leading-relaxed">10% off their first session — a warm welcome to the Laurus summer camp family.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-20 lg:py-28 bg-gray-50">
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
                    <li key={loc.slug}>
                      <Link href={`/summer-camp/locations/${loc.slug}`} className="text-[14px] text-text-body hover:text-blue transition-colors">
                        {loc.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lunch Box Program */}
      <section className="py-20 lg:py-24 bg-cream">
        <div className="max-w-[900px] mx-auto px-6">
          <div className="text-center mb-14">
            <SectionTag color="sunshine">Lunch Box Program</SectionTag>
            <motion.h2 initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-black text-navy mt-5 mb-4">
              Healthy, Delicious Meals — Prepared Daily
            </motion.h2>
            <p className="text-[16px] text-text-body max-w-[560px] mx-auto">Prepared by Les Petits Chefs certified nutritionists. Nut-free facility. Accommodations for dietary restrictions available.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 max-w-[700px] mx-auto">
            <Card accent="sunshine" icon="utensils" delay={0}>
              <h3 className="text-[17px] font-extrabold text-navy mb-2">Small Box</h3>
              <div className="text-[clamp(1.4rem,2vw,1.8rem)] font-black text-sunshine-dark mb-3">$10<span className="text-[14px] text-text-muted font-semibold">/day</span></div>
              <ul className="text-[14px] text-text-body space-y-1.5">
                <li className="flex items-center gap-2"><Icon name="check-circle" size={14} className="text-mint-dark shrink-0" /> Sandwich</li>
                <li className="flex items-center gap-2"><Icon name="check-circle" size={14} className="text-mint-dark shrink-0" /> Fruit</li>
                <li className="flex items-center gap-2"><Icon name="check-circle" size={14} className="text-mint-dark shrink-0" /> Veggie snack</li>
                <li className="flex items-center gap-2"><Icon name="check-circle" size={14} className="text-mint-dark shrink-0" /> Drink</li>
              </ul>
            </Card>
            <Card accent="coral" icon="utensils" delay={0.1}>
              <h3 className="text-[17px] font-extrabold text-navy mb-2">Large Box</h3>
              <div className="text-[clamp(1.4rem,2vw,1.8rem)] font-black text-coral mb-3">$12<span className="text-[14px] text-text-muted font-semibold">/day</span></div>
              <ul className="text-[14px] text-text-body space-y-1.5">
                <li className="flex items-center gap-2"><Icon name="check-circle" size={14} className="text-mint-dark shrink-0" /> Full meal</li>
                <li className="flex items-center gap-2"><Icon name="check-circle" size={14} className="text-mint-dark shrink-0" /> Fruit</li>
                <li className="flex items-center gap-2"><Icon name="check-circle" size={14} className="text-mint-dark shrink-0" /> Veggies</li>
                <li className="flex items-center gap-2"><Icon name="check-circle" size={14} className="text-mint-dark shrink-0" /> Snack + Drink</li>
              </ul>
            </Card>
          </div>
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-6 bg-blue/5 border border-blue/20 rounded-[var(--radius-md)] p-4 text-center max-w-[700px] mx-auto">
            <p className="text-[13px] text-navy font-semibold">Order by Monday 7:00 AM for the week. Dietary restrictions accommodated upon request.</p>
          </motion.div>
        </div>
      </section>

      {/* Additional Add-ons */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-[900px] mx-auto px-6">
          <div className="text-center mb-14">
            <SectionTag color="violet">Add-On Services</SectionTag>
            <motion.h2 initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-black text-navy mt-5 mb-4">
              Everything Your Child Needs
            </motion.h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-5 max-w-[600px] mx-auto">
            <Card accent="blue" icon="clock" delay={0}>
              <h3 className="text-[16px] font-extrabold text-navy mb-2">Extended Care</h3>
              <p className="text-[14px] text-text-body mb-2">Early drop-off from 7:30 AM and late pick-up until 5:30 PM.</p>
              <p className="text-[14px] font-bold text-blue">Included at most locations</p>
            </Card>
            <Card accent="coral" icon="shirt" delay={0.1}>
              <h3 className="text-[16px] font-extrabold text-navy mb-2">Camp Merch</h3>
              <p className="text-[14px] text-text-body mb-2">Official Laurus t-shirts available for purchase.</p>
              <p className="text-[14px] font-bold text-coral">Available on-site</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Registration Process */}
      <section className="py-20 lg:py-28 bg-cream">
        <div className="max-w-[900px] mx-auto px-6">
          <div className="text-center mb-14">
            <SectionTag color="blue">How to Register</SectionTag>
            <motion.h2 initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-black text-navy mt-5 mb-4">
              5 Simple Steps to Get Started
            </motion.h2>
          </div>
          <div className="space-y-4">
            {[
              { step: 1, title: "Portal Sign-up", desc: "Create your account and complete parent information on our registration portal." },
              { step: 2, title: "Info Sessions", desc: "Attend optional information sessions to learn more about programs and locations." },
              { step: 3, title: "Welcome Package", desc: "Receive schedules, activity options, and everything you need to prepare." },
              { step: 4, title: "Flexible Scheduling", desc: "Choose your weeks, preferred locations, and activity selections." },
              { step: 5, title: "Progress Tracking", desc: "Access updates and photos throughout the summer via our parent portal." },
            ].map((s, i) => (
              <motion.div key={s.step} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="flex gap-5 items-start bg-white rounded-[var(--radius-lg)] p-5 border border-[var(--border)]">
                <div className="w-10 h-10 rounded-full bg-blue/10 flex items-center justify-center shrink-0">
                  <span className="text-[15px] font-black text-blue">{s.step}</span>
                </div>
                <div>
                  <h3 className="text-[15px] font-extrabold text-navy mb-1">{s.title}</h3>
                  <p className="text-[14px] text-text-body leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button href="https://app.amilia.com/store/en/laurus-summer-camp/shop/programs" external variant="coral" size="lg" pill>Start Registration →</Button>
          </div>
        </div>
      </section>

      {/* Safety & Staff */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[900px] mx-auto px-6">
          <div className="text-center mb-14">
            <SectionTag color="coral">Safety First</SectionTag>
            <motion.h2 initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-black text-navy mt-5 mb-4">
              Your Child&apos;s Safety Is Our #1 Priority
            </motion.h2>
            <p className="text-[16px] text-text-body max-w-[560px] mx-auto">Every member of our team is trained, certified, and committed to creating a safe environment.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: "shield" as IconName, title: "Background Checked", desc: "All staff undergo comprehensive background checks before joining our team." },
              { icon: "heart" as IconName, title: "CPR/First Aid Certified", desc: "Every counselor holds current CPR and First Aid certification." },
              { icon: "graduation-cap" as IconName, title: "Ongoing Training", desc: "Continuous professional development throughout the summer season." },
              { icon: "clipboard" as IconName, title: "Emergency Protocols", desc: "Detailed emergency procedures established at every location." },
              { icon: "users" as IconName, title: "Safe Ratios", desc: "Age-appropriate staff-to-camper ratios maintained at all times." },
              { icon: "check-circle" as IconName, title: "Daily Health Checks", desc: "Wellness monitoring to ensure every child is happy and healthy." },
            ].map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="bg-gray-50 rounded-[var(--radius-lg)] p-5 border border-[var(--border)]">
                <div className="w-9 h-9 rounded-full bg-coral/10 flex items-center justify-center mb-3">
                  <Icon name={item.icon} size={18} className="text-coral" />
                </div>
                <h3 className="text-[15px] font-extrabold text-navy mb-1">{item.title}</h3>
                <p className="text-[13px] text-text-body leading-relaxed">{item.desc}</p>
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
            <motion.h2 initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-black text-navy mt-5 mb-4">
              Summer Camp FAQ
            </motion.h2>
          </div>
          <FAQ items={faqItems} />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1320px] mx-auto px-6">
          <div className="text-center mb-14">
            <SectionTag color="sunshine">Testimonials</SectionTag>
            <motion.h2 initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-black text-navy mt-5 mb-4">
              What Families Are Saying
            </motion.h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { name: "Sarah Chen", detail: "Parent of 8-year-old", quote: "My son came home transformed! He made friends, tried new activities, and can't wait for next summer." },
              { name: "David Martinez", detail: "Parent of 6-year-old", quote: "The counselors were amazing. My daughter gained so much confidence in just one session!" },
              { name: "Emma Wilson", detail: "Age 11", quote: "Best summer ever! I made lifelong friends and learned skills I'll use forever." },
              { name: "Jennifer Kim", detail: "Parent of 9-year-old", quote: "The variety of activities was perfect. My child tried coding, dance, and sports—found new passions!" },
              { name: "Michael Johnson", detail: "Parent of 7-year-old", quote: "Safe, nurturing, and fun. We trust Laurus completely with our children." },
              { name: "Alex Rodriguez", detail: "Age 13", quote: "The leadership program changed me. I learned so much about myself and helping others." },
              { name: "Lisa Thompson", detail: "Parent of 5-year-old", quote: "Outstanding staff, inclusive environment, and my child grew in confidence every week!" },
              { name: "Robert Chang", detail: "Parent of 10-year-old", quote: "Love the flexible scheduling and the way activities are personalized for each child." },
              { name: "Amanda Foster", detail: "Parent of 7 & 11-year-old", quote: "Excellent instruction across all programs. My kids learned skills AND had incredible fun!" },
            ].map((t, i) => (
              <motion.div key={t.name} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                className="bg-white rounded-[var(--radius-lg)] p-6 border border-[var(--border)] shadow-[var(--shadow-xs)]">
                <div className="text-[14px] text-text-body leading-relaxed mb-4 italic">&ldquo;{t.quote}&rdquo;</div>
                <div className="text-[14px] font-bold text-navy">{t.name}</div>
                <div className="text-[12px] text-text-muted">{t.detail}</div>
              </motion.div>
            ))}
          </div>
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
