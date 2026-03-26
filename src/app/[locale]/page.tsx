"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CountdownBar from "@/components/CountdownBar";
import SectionTag from "@/components/SectionTag";
import Card from "@/components/Card";
import Button from "@/components/Button";
import dynamic from "next/dynamic";

const Testimonials = dynamic(() => import("@/components/Testimonials"), {
  loading: () => <div className="h-64" />,
});
const FAQ = dynamic(() => import("@/components/FAQ"), {
  loading: () => <div className="h-64" />,
});
const LocationExplorer = dynamic(() => import("@/components/LocationExplorer"), {
  ssr: false,
  loading: () => <div className="h-96 bg-gray-50 animate-pulse rounded-[var(--radius-lg)]" />,
});
import Icon, { type IconName } from "@/components/Icon";
import { AnimatedCounter } from "@/components/Animate";
import { useLocale } from "@/lib/LocaleContext";
import { summerLocations as summerLocationsData } from "@/data/locations";

const programs = [
  {
    title: "Summer Camp",
    icon: "sun" as IconName,
    description:
      "Full-day camp with arts, sports, academics, and social activities. Ages 3–15.",
    href: "/summer-camp",
    accent: "sunshine" as const,
  },
  {
    title: "Spring Break Camp",
    icon: "flower" as IconName,
    description:
      "Action-packed March Break adventures with creative and active programming.",
    href: "/spring-break",
    accent: "coral" as const,
  },
  {
    title: "Tutoring",
    icon: "book-open" as IconName,
    description:
      "Bilingual 1-on-1 and small-group tutoring in Math, English, French & Science.",
    href: "/tutoring",
    accent: "blue" as const,
  },
  {
    title: "Extra-Curriculars",
    icon: "palette" as IconName,
    description:
      "PED Day Camps, After-School Enrichment, Reading Week & Themed Break Programs.",
    href: "/extra-curriculars",
    accent: "violet" as const,
  },
];


const stats = [
  { value: "2,000+", label: "Kids Annually" },
  { value: "17+", label: "Locations" },
  { value: "95%", label: "Parent Satisfaction" },
  { value: "10+", label: "Years Experience" },
];

const whyChoose = [
  {
    icon: "sprout" as IconName,
    title: "Holistic Development",
    description:
      "Programs designed to nurture the whole child — social, emotional, physical, and intellectual growth.",
    accent: "mint" as const,
  },
  {
    icon: "graduation-cap" as IconName,
    title: "Expert Staff",
    description:
      "Certified teachers, trained counselors, and specialist coaches — all background-checked and CPR/First Aid certified.",
    accent: "blue" as const,
  },
  {
    icon: "shield" as IconName,
    title: "Safe & Supportive",
    description:
      "Rigorous safety protocols, inclusive support programs, and a welcoming environment for every child.",
    accent: "coral" as const,
  },
];

const faqItems = [
  {
    question: "What ages do your programs serve?",
    answer:
      "Our programs are designed for children ages 3–15+. We offer Junior Camp (3–4), Youth Program (5–11), Leadership Program (12–14), and a Counselor-in-Training program for older teens.",
  },
  {
    question: "Is the camp bilingual?",
    answer:
      "Yes! Laurus is one of the only camps offering full bilingual programming in both English and French. We also have dedicated ESL/FSL immersion camps at select locations.",
  },
  {
    question: "What are the camp hours?",
    answer:
      "Regular camp hours are 9:00 AM to 4:00 PM. We also offer Early Care starting at 7:30 AM and Extended Care until 5:30 PM at no extra charge.",
  },
  {
    question: "Are there discounts available?",
    answer:
      "We offer Super Early Bird (Jan), Early Bird (Feb–Mar), Multi-Week, Sibling, and Referral discounts that can stack for up to 25% savings. Contact us for details!",
  },
  {
    question: "Do you offer support for children with special needs?",
    answer:
      "Absolutely. Through our partnership with Neurodiverse Resource (NDR), we provide clinician-led inclusive support for neurodivergent campers. No formal diagnosis is required to access support.",
  },
];

export default function HomePage() {
  const { locale } = useLocale();
  return (
    <>
      <CountdownBar />
      <Navbar />

      <main className="flex-1">
        {/* ========== HERO ========== */}
        <section className="relative gradient-hero overflow-hidden">
          {/* Decorative shapes */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute w-[400px] h-[400px] rounded-full bg-blue/5 -top-20 -left-20 blur-3xl animate-[float-slow_8s_ease-in-out_infinite]" />
            <div className="absolute w-[300px] h-[300px] rounded-full bg-sunshine/8 bottom-10 right-10 blur-3xl animate-[float-slow-alt_10s_ease-in-out_infinite]" />
            <div className="absolute w-[200px] h-[200px] rounded-full bg-coral/5 top-1/2 right-1/4 blur-3xl animate-[float-slow_12s_ease-in-out_infinite_reverse]" />
          </div>

          <div className="relative max-w-[1320px] mx-auto px-4 sm:px-6 py-12 sm:py-20 lg:py-28">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left: Content */}
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue/6 border border-blue/15 text-blue text-[12px] font-extrabold uppercase tracking-[0.15em] mb-6">
                    <span className="w-2 h-2 rounded-full bg-mint animate-[pulse-dot_2s_infinite]" />
                    2026 Registration Open
                  </div>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="font-[var(--font-nunito)] text-[clamp(2.4rem,5vw,4rem)] font-black leading-[1.08] tracking-tight text-navy mb-6"
                >
                  Inspire children to{" "}
                  <span className="hl-sunshine">grow</span> through{" "}
                  <span className="hl-blue">fun</span> and{" "}
                  <span className="hl-coral">learning</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-[17px] leading-relaxed text-text-body max-w-[520px] mb-8"
                >
                  We offer carefully designed programs all year long that help
                  children discover new skills, build lasting friendships, and
                  grow into confident, curious learners.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="flex flex-col sm:flex-row flex-wrap gap-3"
                >
                  <Button href="/summer-camp" variant="coral" size="lg" pill>
                    <Icon name="sun" size={18} className="inline -mt-0.5" /> Summer Camp
                  </Button>
                  <Button
                    href="https://app.amilia.com/store/en/laurus-summer-camp/shop/programs"
                    external
                    variant="sunshine"
                    size="lg"
                    pill
                  >
                    Register Now
                  </Button>
                </motion.div>
              </div>

              {/* Right: Program Cards */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {[
                  { icon: <Icon name="tent" size={32} className="text-blue" />, title: "Summer Camp", sub: "Ages 3–15", delay: 0.2 },
                  { icon: <Icon name="flower" size={32} className="text-coral" />, title: "Spring Break", sub: "March 2–6", delay: 0.3 },
                  { icon: <Icon name="book-open" size={32} className="text-sunshine-dark" />, title: "Tutoring", sub: "Year-Round", delay: 0.4 },
                  { icon: <Icon name="globe" size={32} className="text-mint-dark" />, title: "Languages", sub: "ESL / FSL", delay: 0.5 },
                ].map((card) => (
                  <motion.div
                    key={card.title}
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.5, delay: card.delay }}
                    className="bg-white rounded-[var(--radius-lg)] p-4 sm:p-6 shadow-[var(--shadow-md)] border border-[var(--border)] text-center hover:-translate-y-1 hover:shadow-[var(--shadow-lg)] transition-all duration-300"
                  >
                    <div className="flex justify-center mb-3">{card.icon}</div>
                    <h3 className="text-[15px] font-extrabold text-navy mb-1">
                      {card.title}
                    </h3>
                    <p className="text-[13px] text-text-muted">{card.sub}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ========== ACCREDITATIONS BAR ========== */}
        <div className="bg-white border-y border-[var(--border)] py-5">
          <div className="max-w-[1320px] mx-auto px-6">
            <div className="flex flex-wrap items-center justify-center gap-4">
              <span className="text-[12px] font-bold uppercase tracking-[0.12em] text-text-muted">
                Accreditations
              </span>
              {[
                { icon: <Icon name="trophy" size={14} className="inline -mt-0.5" />, label: "Best of Montreal" },
                { icon: <Icon name="check-circle" size={14} className="inline -mt-0.5" />, label: "Camps Certifiés ACQ" },
                { icon: <Icon name="award" size={14} className="inline -mt-0.5" />, label: "OCA Accredited" },
              ].map((badge) => (
                  <span
                    key={badge.label}
                    className="text-[13px] font-bold text-blue bg-blue/6 px-4 py-1.5 rounded-full"
                  >
                    {badge.icon} {badge.label}
                  </span>
                ))}
            </div>
          </div>
        </div>

        {/* ========== STATS BAR ========== */}
        <section className="bg-white py-14">
          <div className="max-w-[1320px] mx-auto px-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center"
                >
                  <div className="text-[clamp(2rem,4vw,3rem)] font-black text-navy font-[var(--font-nunito)]">
                    <AnimatedCounter value={stat.value} />
                  </div>
                  <div className="text-[14px] font-semibold text-text-muted">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ========== PROGRAMS ========== */}
        <section className="py-20 lg:py-28 bg-cream">
          <div className="max-w-[1320px] mx-auto px-6">
            <div className="text-center mb-14">
              <SectionTag color="blue">Our Programs</SectionTag>
              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-black text-navy mt-5 mb-4"
              >
                Explore Programs for Every Season
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-[16px] text-text-body max-w-[560px] mx-auto"
              >
                From summer adventures to year-round enrichment, we have the
                perfect program for your child.
              </motion.p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {programs.map((prog, i) => (
                <Card
                  key={prog.title}
                  accent={prog.accent}
                  icon={prog.icon}
                  delay={i * 0.1}
                >
                  <h3 className="text-[17px] font-extrabold text-navy mb-2">
                    {prog.title}
                  </h3>
                  <p className="text-[14px] text-text-body leading-relaxed mb-4">
                    {prog.description}
                  </p>
                  <Button
                    href={prog.href}
                    variant="outline"
                    size="sm"
                    className="!text-[13px]"
                  >
                    Learn More →
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ========== SUMMER CAMP LOCATIONS ========== */}
        <section className="py-20 lg:py-28 bg-white" id="summer-locations">
          <div className="max-w-[1320px] mx-auto px-4 sm:px-6">
            <div className="text-center mb-14">
              <SectionTag color="sunshine">Locations</SectionTag>
              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-black text-navy mt-5 mb-4"
              >
                Summer Camp Locations
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-[16px] text-text-body max-w-[480px] mx-auto"
              >
                17+ locations across Quebec and Ontario. Use the map to find one near you.
              </motion.p>
            </div>
            <LocationExplorer locations={summerLocationsData} type="summer" locale={locale} />
            <div className="mt-8 text-center">
              <Button href={`/${locale}/summer-camp`} variant="outline" size="md" pill>
                View All Summer Locations →
              </Button>
            </div>
            <div className="mt-6 text-center">
              <Button href={`/${locale}/spring-break`} variant="outline" size="sm" pill className="!border-coral/20 !text-coral hover:!bg-coral/5">
                <Icon name="flower" size={16} className="inline -mt-0.5" /> Spring Break Camps →
              </Button>
            </div>
          </div>
        </section>

        {/* ========== WHY CHOOSE LAURUS ========== */}
        <section className="py-20 lg:py-28 gradient-mesh">
          <div className="max-w-[1320px] mx-auto px-6">
            <div className="text-center mb-14">
              <SectionTag color="mint">Why Laurus</SectionTag>
              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-black text-navy mt-5 mb-4"
              >
                Why Choose Laurus?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-[16px] text-text-body max-w-[500px] mx-auto"
              >
                Leader in childcare activities for over 15 years, trusted by
                2,000+ families annually.
              </motion.p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {whyChoose.map((item, i) => (
                <Card
                  key={item.title}
                  accent={item.accent}
                  icon={item.icon}
                  delay={i * 0.12}
                  className="text-center"
                >
                  <h3 className="text-[18px] font-extrabold text-navy mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[14px] text-text-body leading-relaxed">
                    {item.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ========== PARTNER TRUST BAR ========== */}
        <section className="py-12 bg-white border-y border-[var(--border)]">
          <div className="max-w-[1320px] mx-auto px-6 text-center">
            <p className="text-[12px] font-bold uppercase tracking-[0.15em] text-text-muted mb-6">
              You may have heard about us through
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
              {["Citytv", "THE 1019 REPORT", "Montreal Families", "Our Kids", "camps.ca"].map(
                (logo) => (
                  <span
                    key={logo}
                    className="text-[15px] font-bold text-gray-300 hover:text-text-muted transition-colors"
                  >
                    {logo}
                  </span>
                )
              )}
            </div>
          </div>
        </section>

        {/* ========== TESTIMONIALS ========== */}
        <section className="py-20 lg:py-28 bg-cream">
          <div className="max-w-[1320px] mx-auto px-6">
            <div className="text-center mb-14">
              <SectionTag color="sunshine">Testimonials</SectionTag>
              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-black text-navy mt-5 mb-4"
              >
                Loved by Families Across Montreal
              </motion.h2>
            </div>
            <Testimonials />
          </div>
        </section>

        {/* ========== NEWSLETTER ========== */}
        <section className="py-20 lg:py-24 gradient-navy" id="newsletter">
          <div className="max-w-[700px] mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-black text-white mb-4">
                Join the Laurus Community
              </h2>
              <p className="text-[15px] text-white/60 mb-8">
                Get the latest updates on programs, early bird discounts, and
                parenting tips delivered to your inbox.
              </p>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex flex-col sm:flex-row gap-3 max-w-[480px] mx-auto"
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-5 py-3.5 rounded-full bg-white/10 border border-white/15 text-white placeholder:text-white/40 text-[14px] focus:outline-none focus:border-blue focus:ring-2 focus:ring-blue/20 transition-all"
                />
                <button
                  type="submit"
                  className="gradient-coral text-white font-bold text-[14px] px-7 py-3.5 rounded-full shadow-[var(--shadow-coral)] hover:-translate-y-0.5 hover:shadow-lg transition-all"
                >
                  Subscribe
                </button>
              </form>
            </motion.div>
          </div>
        </section>

        {/* ========== FAQ ========== */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-[1320px] mx-auto px-6">
            <div className="text-center mb-14">
              <SectionTag color="violet">FAQ</SectionTag>
              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-black text-navy mt-5 mb-4"
              >
                Frequently Asked Questions
              </motion.h2>
            </div>
            <FAQ items={faqItems} />
          </div>
        </section>

        {/* ========== FINAL CTA ========== */}
        <section className="py-20 lg:py-24 gradient-hero">
          <div className="max-w-[800px] mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-black text-navy mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-[16px] text-text-body mb-8 max-w-[500px] mx-auto">
                Give your child an unforgettable experience this summer. Join
                2,000+ families who trust Laurus every year.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3">
                <Button
                  href="https://app.amilia.com/store/en/laurus-summer-camp/shop/programs"
                  external
                  variant="coral"
                  size="lg"
                  pill
                >
                  Register For Camp
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </Button>
                <Button href="/contact" variant="white" size="lg" pill>
                  Contact Us
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
