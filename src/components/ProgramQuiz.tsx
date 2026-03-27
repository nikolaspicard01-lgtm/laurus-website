"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./Button";
import Icon, { type IconName } from "./Icon";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const ageOptions = [
  { id: "3-4", label: "3-4 years", icon: "baby" as IconName, sub: "Junior Program" },
  { id: "5-11", label: "5-11 years", icon: "sprout" as IconName, sub: "Youth Program" },
  { id: "12-14", label: "12-14 years", icon: "star" as IconName, sub: "Leadership" },
  { id: "15+", label: "15+", icon: "graduation-cap" as IconName, sub: "C.I.T." },
];

const interestOptions = [
  { id: "sports", label: "Sports", icon: "dumbbell" as IconName },
  { id: "technology", label: "Technology", icon: "monitor" as IconName },
  { id: "arts", label: "Arts & Crafts", icon: "palette" as IconName },
  { id: "science", label: "Science", icon: "flask" as IconName },
  { id: "dance", label: "Dance", icon: "music" as IconName },
  { id: "cooking", label: "Cooking", icon: "utensils" as IconName },
  { id: "languages", label: "Languages", icon: "languages" as IconName },
  { id: "leadership", label: "Being a Leader", icon: "target" as IconName },
];

const personalityOptions = [
  {
    id: "social",
    label: "Social butterfly",
    desc: "Loves group activities and making friends",
    icon: "users" as IconName,
  },
  {
    id: "independent",
    label: "Independent explorer",
    desc: "Prefers focused, hands-on activities",
    icon: "search" as IconName,
  },
  {
    id: "leader",
    label: "Natural leader",
    desc: "Takes charge and helps others",
    icon: "star" as IconName,
  },
];

const priorityOptions = [
  {
    id: "coverage",
    label: "Full-day coverage",
    desc: "I need 7:30 AM \u2013 5:30 PM",
    icon: "clock" as IconName,
  },
  {
    id: "bilingual",
    label: "Bilingual development",
    desc: "I want French immersion",
    icon: "globe" as IconName,
  },
  {
    id: "skills",
    label: "Skill building",
    desc: "I want them learning, not just playing",
    icon: "lightbulb" as IconName,
  },
];

const interestToSTA: Record<string, string[]> = {
  sports: ["Multi-Sports", "Swimming"],
  technology: ["Robotics & Coding"],
  arts: ["Visual Arts", "Performing Arts"],
  science: ["STEM Discovery"],
  dance: ["Performing Arts"],
  cooking: ["Culinary Arts"],
  languages: ["Language Immersion"],
  leadership: ["Leadership & Team Building"],
};

const programMap: Record<string, { name: string; icon: IconName; accent: string; href: string; price: string }> = {
  "3-4": {
    name: "Junior Program",
    icon: "baby",
    accent: "coral",
    href: "/summer-camp",
    price: "$249/week",
  },
  "5-11": {
    name: "Youth Program",
    icon: "sprout",
    accent: "blue",
    href: "/summer-camp",
    price: "$279/week",
  },
  "12-14": {
    name: "Leadership Program",
    icon: "star",
    accent: "sunshine",
    href: "/summer-camp",
    price: "$299/week",
  },
  "15+": {
    name: "C.I.T. Program",
    icon: "graduation-cap",
    accent: "mint",
    href: "/summer-camp",
    price: "$199/week",
  },
};

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

type QuizStep = 1 | 2 | 3 | 4 | 5 | 6;

export default function ProgramQuiz() {
  const [step, setStep] = useState<QuizStep>(1);
  const [age, setAge] = useState("");
  const [interests, setInterests] = useState<string[]>([]);
  const [personality, setPersonality] = useState("");
  const [priority, setPriority] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const totalSteps = 4;
  const progressStep = Math.min(step, totalSteps);

  const toggleInterest = (id: string) => {
    setInterests((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const goNext = () => setStep((s) => (s + 1) as QuizStep);
  const goBack = () => setStep((s) => (s - 1) as QuizStep);

  /* Build personalized result */
  const program = programMap[age] || programMap["5-11"];

  const recommendedSTAs = Array.from(
    new Set(interests.flatMap((i) => interestToSTA[i] || []))
  ).slice(0, 4);

  const buildReasonSentences = (): string[] => {
    const sentences: string[] = [];

    if (age === "3-4") {
      sentences.push(
        "Our Junior Program is specially designed for little ones, with gentle activities, nurturing staff, and a safe environment to explore."
      );
    } else if (age === "5-11") {
      sentences.push(
        "The Youth Program offers 7 Specialized Themed Activities that rotate weekly, keeping your child engaged and excited all summer."
      );
    } else if (age === "12-14") {
      sentences.push(
        "Our Leadership Program develops confidence, teamwork, and responsibility through challenging activities and real leadership roles."
      );
    } else {
      sentences.push(
        "The C.I.T. Program gives teens real-world leadership experience while earning volunteer hours and building their resume."
      );
    }

    if (personality === "social") {
      sentences.push(
        "With group projects, team sports, and collaborative challenges, your social butterfly will thrive and make lasting friendships."
      );
    } else if (personality === "independent") {
      sentences.push(
        "We offer focused workshops and hands-on stations where independent explorers can dive deep into their passions."
      );
    } else if (personality === "leader") {
      sentences.push(
        "Natural leaders get opportunities to mentor younger campers and take on special responsibilities throughout the week."
      );
    }

    if (priority === "coverage") {
      sentences.push(
        "Extended hours from 7:30 AM to 5:30 PM are included at no extra charge \u2014 perfect for working parents."
      );
    } else if (priority === "bilingual") {
      sentences.push(
        "Our full bilingual programming and dedicated French Immersion Camp will strengthen your child's language skills all summer."
      );
    } else if (priority === "skills") {
      sentences.push(
        "Every activity is designed to build real skills \u2014 from STEM to arts to leadership \u2014 not just fill time."
      );
    }

    return sentences;
  };

  const slideVariants = {
    enter: { x: 60, opacity: 0 },
    center: { x: 0, opacity: 1 },
    exit: { x: -60, opacity: 0 },
  };

  return (
    <div className="max-w-[720px] mx-auto">
      {/* Progress Bar */}
      {step <= totalSteps && (
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[13px] font-bold text-text-muted">
              Step {progressStep} of {totalSteps}
            </span>
            {step > 1 && (
              <button
                onClick={goBack}
                className="text-[13px] font-bold text-blue hover:text-blue/70 transition-colors flex items-center gap-1"
              >
                <Icon name="arrow-left" size={14} /> Back
              </button>
            )}
          </div>
          <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-blue to-[#6BD5FF] rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${(progressStep / totalSteps) * 100}%` }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
          </div>
        </div>
      )}

      <AnimatePresence mode="wait">
        {/* ========== STEP 1: Age ========== */}
        {step === 1 && (
          <motion.div
            key="step1"
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-[clamp(1.4rem,3vw,1.8rem)] font-black text-navy mb-2 text-center">
              How old is your child?
            </h2>
            <p className="text-[15px] text-text-body text-center mb-8">
              This helps us match the right program
            </p>
            <div className="grid grid-cols-2 gap-4">
              {ageOptions.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => {
                    setAge(opt.id);
                    goNext();
                  }}
                  className={`group bg-white rounded-[var(--radius-lg)] border-2 p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-md)] ${
                    age === opt.id
                      ? "border-blue bg-blue/5 shadow-[var(--shadow-md)]"
                      : "border-[var(--border)] hover:border-blue/30"
                  }`}
                >
                  <div className="w-14 h-14 rounded-2xl bg-blue/8 flex items-center justify-center mx-auto mb-3 group-hover:bg-blue/12 transition-colors">
                    <Icon name={opt.icon} size={28} className="text-blue" />
                  </div>
                  <div className="text-[17px] font-extrabold text-navy mb-1">
                    {opt.label}
                  </div>
                  <div className="text-[13px] text-text-muted">{opt.sub}</div>
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {/* ========== STEP 2: Interests ========== */}
        {step === 2 && (
          <motion.div
            key="step2"
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-[clamp(1.4rem,3vw,1.8rem)] font-black text-navy mb-2 text-center">
              What does your child love?
            </h2>
            <p className="text-[15px] text-text-body text-center mb-8">
              Select all that apply
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {interestOptions.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => toggleInterest(opt.id)}
                  className={`flex flex-col items-center gap-2 rounded-[var(--radius-lg)] border-2 px-4 py-5 transition-all duration-200 ${
                    interests.includes(opt.id)
                      ? "border-blue bg-blue/8 shadow-[var(--shadow-sm)]"
                      : "border-[var(--border)] bg-white hover:border-blue/30 hover:bg-blue/3"
                  }`}
                >
                  <Icon
                    name={opt.icon}
                    size={24}
                    className={
                      interests.includes(opt.id)
                        ? "text-blue"
                        : "text-gray-400"
                    }
                  />
                  <span
                    className={`text-[13px] font-bold ${
                      interests.includes(opt.id)
                        ? "text-navy"
                        : "text-text-muted"
                    }`}
                  >
                    {opt.label}
                  </span>
                </button>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Button
                onClick={goNext}
                variant="blue"
                size="lg"
                pill
              >
                Continue
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
            </div>
          </motion.div>
        )}

        {/* ========== STEP 3: Personality ========== */}
        {step === 3 && (
          <motion.div
            key="step3"
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-[clamp(1.4rem,3vw,1.8rem)] font-black text-navy mb-2 text-center">
              Which describes your child best?
            </h2>
            <p className="text-[15px] text-text-body text-center mb-8">
              Pick the closest match
            </p>
            <div className="grid gap-4">
              {personalityOptions.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => {
                    setPersonality(opt.id);
                    goNext();
                  }}
                  className={`group flex items-center gap-4 bg-white rounded-[var(--radius-lg)] border-2 p-5 text-left transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-md)] ${
                    personality === opt.id
                      ? "border-blue bg-blue/5"
                      : "border-[var(--border)] hover:border-blue/30"
                  }`}
                >
                  <div className="w-12 h-12 rounded-2xl bg-blue/8 flex items-center justify-center shrink-0 group-hover:bg-blue/12 transition-colors">
                    <Icon name={opt.icon} size={24} className="text-blue" />
                  </div>
                  <div>
                    <div className="text-[16px] font-extrabold text-navy mb-0.5">
                      {opt.label}
                    </div>
                    <div className="text-[14px] text-text-muted">
                      {opt.desc}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {/* ========== STEP 4: Priority ========== */}
        {step === 4 && (
          <motion.div
            key="step4"
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-[clamp(1.4rem,3vw,1.8rem)] font-black text-navy mb-2 text-center">
              What matters most to you?
            </h2>
            <p className="text-[15px] text-text-body text-center mb-8">
              As a parent, what&apos;s your top priority?
            </p>
            <div className="grid gap-4">
              {priorityOptions.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => {
                    setPriority(opt.id);
                    setStep(5);
                  }}
                  className={`group flex items-center gap-4 bg-white rounded-[var(--radius-lg)] border-2 p-5 text-left transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-md)] ${
                    priority === opt.id
                      ? "border-blue bg-blue/5"
                      : "border-[var(--border)] hover:border-blue/30"
                  }`}
                >
                  <div className="w-12 h-12 rounded-2xl bg-blue/8 flex items-center justify-center shrink-0 group-hover:bg-blue/12 transition-colors">
                    <Icon name={opt.icon} size={24} className="text-blue" />
                  </div>
                  <div>
                    <div className="text-[16px] font-extrabold text-navy mb-0.5">
                      {opt.label}
                    </div>
                    <div className="text-[14px] text-text-muted">
                      {opt.desc}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {/* ========== STEP 5: Email Gate ========== */}
        {step === 5 && (
          <motion.div
            key="step5"
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3 }}
          >
            <div className="text-center mb-8">
              <div className="w-16 h-16 rounded-2xl bg-coral/10 flex items-center justify-center mx-auto mb-4">
                <Icon name="sparkles" size={32} className="text-coral" />
              </div>
              <h2 className="text-[clamp(1.4rem,3vw,1.8rem)] font-black text-navy mb-2">
                Almost done!
              </h2>
              <p className="text-[15px] text-text-body max-w-[400px] mx-auto">
                Where should we send your personalized recommendation?
              </p>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (email.trim()) setStep(6);
              }}
              className="space-y-4 max-w-[400px] mx-auto"
            >
              <input
                type="text"
                placeholder="Your first name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-5 py-3.5 rounded-[var(--radius-lg)] border border-[var(--border)] text-[14px] text-navy placeholder:text-gray-300 focus:outline-none focus:border-blue focus:ring-2 focus:ring-blue/15 transition-all"
              />
              <input
                type="email"
                placeholder="Your email address"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-5 py-3.5 rounded-[var(--radius-lg)] border border-[var(--border)] text-[14px] text-navy placeholder:text-gray-300 focus:outline-none focus:border-blue focus:ring-2 focus:ring-blue/15 transition-all"
              />
              <button
                type="submit"
                className="w-full gradient-coral text-white font-bold text-[15px] px-7 py-4 rounded-full shadow-[var(--shadow-coral)] hover:-translate-y-0.5 hover:shadow-lg transition-all"
              >
                Show My Results
              </button>
              <p className="text-[12px] text-text-muted text-center">
                We&apos;ll also send you our free Parent Guide
              </p>
            </form>
            <div className="mt-4 text-center">
              <button
                onClick={goBack}
                className="text-[13px] font-bold text-blue hover:text-blue/70 transition-colors"
              >
                <Icon name="arrow-left" size={14} className="inline -mt-0.5" />{" "}
                Back
              </button>
            </div>
          </motion.div>
        )}

        {/* ========== STEP 6: Results ========== */}
        {step === 6 && (
          <motion.div
            key="step6"
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3 }}
          >
            {/* Match Header */}
            <div className="text-center mb-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
                className="w-20 h-20 rounded-2xl bg-blue/10 flex items-center justify-center mx-auto mb-4"
              >
                <Icon name={program.icon} size={40} className="text-blue" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-mint/10 text-mint-dark text-[12px] font-extrabold uppercase tracking-[0.1em] mb-3">
                  <Icon name="check-circle" size={14} /> Perfect Match
                </div>
                <h2 className="text-[clamp(1.6rem,3.5vw,2.2rem)] font-black text-navy">
                  {program.name}
                </h2>
              </motion.div>
            </div>

            {/* Why This Matches */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-blue/5 rounded-[var(--radius-lg)] border border-blue/10 p-5 sm:p-6 mb-6"
            >
              <h3 className="text-[14px] font-extrabold text-navy mb-3">
                Why this is your match
              </h3>
              <div className="space-y-2">
                {buildReasonSentences().map((sentence, i) => (
                  <div key={i} className="flex gap-2.5">
                    <Icon
                      name="check-circle"
                      size={16}
                      className="text-mint shrink-0 mt-0.5"
                    />
                    <p className="text-[14px] text-text-body leading-relaxed">
                      {sentence}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Recommended STAs */}
            {recommendedSTAs.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mb-6"
              >
                <h3 className="text-[14px] font-extrabold text-navy mb-3">
                  Recommended Activities
                </h3>
                <div className="flex flex-wrap gap-2">
                  {recommendedSTAs.map((sta) => (
                    <span
                      key={sta}
                      className="px-4 py-2 bg-blue/8 border border-blue/15 text-blue text-[13px] font-bold rounded-full"
                    >
                      {sta}
                    </span>
                  ))}
                </div>
              </motion.div>
            )}

            {/* French Immersion recommendation */}
            {priority === "bilingual" && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55 }}
                className="bg-sunshine/8 rounded-[var(--radius-lg)] border border-sunshine/20 p-5 mb-6"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-sunshine/20 flex items-center justify-center shrink-0">
                    <Icon name="globe" size={20} className="text-sunshine-dark" />
                  </div>
                  <div>
                    <div className="text-[14px] font-extrabold text-navy">
                      Also Recommended: French Immersion Camp
                    </div>
                    <div className="text-[13px] text-text-muted">
                      Full-day French immersion with native-speaking counselors
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Locations & Pricing */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid sm:grid-cols-2 gap-4 mb-8"
            >
              <div className="bg-white rounded-[var(--radius-lg)] border border-[var(--border)] p-5">
                <div className="flex items-center gap-2 mb-2">
                  <Icon name="map-pin" size={16} className="text-coral" />
                  <span className="text-[13px] font-extrabold text-navy">
                    Locations
                  </span>
                </div>
                <p className="text-[14px] text-text-body">
                  17+ locations across Quebec and Ontario
                </p>
              </div>
              <div className="bg-white rounded-[var(--radius-lg)] border border-[var(--border)] p-5">
                <div className="flex items-center gap-2 mb-2">
                  <Icon name="sparkles" size={16} className="text-sunshine-dark" />
                  <span className="text-[13px] font-extrabold text-navy">
                    Early Bird Pricing
                  </span>
                </div>
                <p className="text-[22px] font-black text-navy">
                  {program.price}
                </p>
                <p className="text-[12px] text-text-muted">
                  Stackable discounts up to 25% off
                </p>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-3 justify-center"
            >
              <Button
                href="https://app.amilia.com/store/en/laurus-summer-camp/shop/programs"
                external
                variant="coral"
                size="lg"
                pill
              >
                Register for {program.name}
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
              <Button href={program.href} variant="outline" size="lg" pill>
                Learn More About {program.name}
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
