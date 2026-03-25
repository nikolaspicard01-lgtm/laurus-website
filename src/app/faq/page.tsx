"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import PageWrapper from "@/components/PageWrapper";
import PageHero from "@/components/PageHero";
import FAQ from "@/components/FAQ";
import Icon from "@/components/Icon";

const categories = [
  {
    name: "Summer Camp", id: "summer",
    items: [
      { question: "What ages do you accept?", answer: "Ages 3–15+. Programs are split into Junior (3–4), Youth (5–11), Leadership (12–14), and C.I.T. (15+)." },
      { question: "How do I register?", answer: "Register online at app.amilia.com. Create an Amilia account, select your location, weeks, and activities." },
      { question: "Can my child switch activities?", answer: "Yes! Children can choose different STAs every week. Robotics one week, Dance the next, Cooking the week after." },
      { question: "What are the camp hours?", answer: "Monday–Friday, 7:30 AM – 5:30 PM. Extended care options available." },
      { question: "Is lunch provided?", answer: "Optional Lunch Program at $10–12/day through Les Petits Chefs. Children can also bring their own." },
      { question: "Are your staff qualified?", answer: "All staff undergo background checks, hold CPR/First Aid certifications, and receive ongoing training." },
      { question: "Do you offer inclusive support?", answer: "Yes. Through our NDR partnership, we offer assessment levels from independent participation to 1:1 support." },
      { question: "Are camp fees tax deductible?", answer: "Yes. RL-24 provincial tax receipts are issued." },
      { question: "What discounts are available?", answer: "Monthly, Multi-Week (5–10%), Sibling (15%), and Early Bird discounts — stackable for up to 25% savings." },
      { question: "What if my child is not potty trained?", answer: "No problem! Potty training is not required for our Junior Program (ages 3–4)." },
    ],
  },
  {
    name: "Spring Break", id: "spring",
    items: [
      { question: "Can I register for single days?", answer: "Yes. Full week rates apply, but single days are available at $80/day." },
      { question: "What activities are offered?", answer: "Same STA rotation as summer — Robotics, Dance, Cooking, Sports, Arts & Crafts, and more." },
      { question: "Is extended care available?", answer: "Yes, at +$8/hour beyond standard camp hours." },
      { question: "Can you accommodate dietary restrictions?", answer: "Yes. Our Lunch Program accommodates dietary needs. Contact us for specifics." },
    ],
  },
  {
    name: "Extra-Curriculars", id: "extra",
    items: [
      { question: "What age range?", answer: "Programs are available for ages 3–15+, depending on the specific activity." },
      { question: "Do you offer PED Day programs?", answer: "Yes, at $75–90/day. Full-day activities on pedagogical days." },
      { question: "What about Reading Week?", answer: "Yes, structured programming at $350–400/week." },
    ],
  },
  {
    name: "Languages Camp", id: "languages",
    items: [
      { question: "Does my child need prior language experience?", answer: "No! Programs are beginner-friendly. Children are grouped by age and level." },
      { question: "How is progress tracked?", answer: "Certified language instructors monitor and communicate progress regularly." },
    ],
  },
  {
    name: "Tutoring", id: "tutoring",
    items: [
      { question: "What subjects do you offer?", answer: "Math, English, French, Science, Homework Help, Test Prep, and custom learning plans." },
      { question: "Are tutors bilingual?", answer: "Yes. All tutors are bilingual (English/French) and qualified in their subject areas." },
      { question: "Is virtual tutoring available?", answer: "Yes, at $40/hour. Group: $45/hour. 1-on-1: $55/hour." },
      { question: "How do we get started?", answer: "Start with a free assessment. We create a custom plan and book sessions." },
    ],
  },
  {
    name: "Events", id: "events",
    items: [
      { question: "How far in advance should we book?", answer: "Contact us as early as possible. Our 6-step process starts with consultation." },
      { question: "Can events be customized?", answer: "Absolutely. Bronze, Silver, and Gold packages, all fully customizable." },
      { question: "Do you offer multi-event discounts?", answer: "Yes. Schools booking multiple events receive discounted rates." },
    ],
  },
];

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState("summer");
  const active = categories.find((c) => c.id === activeCategory)!;

  return (
    <PageWrapper>
      <PageHero
        tag="FAQ"
        tagColor="violet"
        title={<>Frequently Asked <span className="hl-blue">Questions</span></>}
        subtitle="Find answers to common questions about our programs, pricing, registration, and more."
      />

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1320px] mx-auto px-6">
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button key={cat.id} onClick={() => setActiveCategory(cat.id)}
                className={`text-[13px] font-bold px-5 py-2.5 rounded-full border transition-all ${
                  activeCategory === cat.id
                    ? "bg-blue text-white border-blue"
                    : "bg-white text-text-body border-[var(--border)] hover:border-blue/30"
                }`}>
                {cat.name}
              </button>
            ))}
          </div>

          <motion.div key={activeCategory} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
            <FAQ items={active.items} />
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-cream text-center">
        <div className="max-w-[600px] mx-auto px-6">
          <h2 className="text-[22px] font-extrabold text-navy mb-3">Still have questions?</h2>
          <p className="text-[15px] text-text-body mb-6">Our team is available Mon–Sun, 9AM–5PM to help.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="tel:+15146000504" className="inline-flex items-center gap-2 gradient-coral text-white font-bold text-[14px] px-6 py-3 rounded-full shadow-[var(--shadow-coral)] hover:-translate-y-0.5 transition-all">
              <Icon name="phone" size={16} /> (514) 600-0504
            </a>
            <a href="mailto:info@laurussummercamp.com" className="inline-flex items-center gap-2 bg-white text-navy font-bold text-[14px] px-6 py-3 rounded-full border border-[var(--border)] shadow-[var(--shadow-xs)] hover:-translate-y-0.5 transition-all">
              <Icon name="file-text" size={16} /> Email Us
            </a>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
