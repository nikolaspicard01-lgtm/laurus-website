"use client";

import PageWrapper from "@/components/PageWrapper";
import ProgramQuiz from "@/components/ProgramQuiz";
import { motion } from "framer-motion";

export default function QuizPage() {
  return (
    <PageWrapper>
      <section className="py-16 lg:py-24 bg-cream min-h-[80vh]">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <h1 className="text-[clamp(1.8rem,4vw,2.6rem)] font-black text-navy mb-3">
              Which Program Is Right for Your Child?
            </h1>
            <p className="text-[16px] text-text-body max-w-[500px] mx-auto">
              Answer 4 quick questions and we&apos;ll match your child with the perfect Laurus program.
            </p>
          </motion.div>
          <ProgramQuiz />
        </div>
      </section>
    </PageWrapper>
  );
}
