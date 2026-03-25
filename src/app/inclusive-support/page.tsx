"use client";

import { motion } from "framer-motion";
import PageWrapper from "@/components/PageWrapper";
import PageHero from "@/components/PageHero";
import SectionTag from "@/components/SectionTag";
import Card from "@/components/Card";
import Button from "@/components/Button";
import FAQ from "@/components/FAQ";

const process = [
  { num: "01", title: "Complete Support Form", desc: "Fill out our inclusive support intake form with details about your child's needs." },
  { num: "02", title: "NDR Reviews", desc: "Our partners at Neurodiverse Resource Inc. review the form and assess support levels." },
  { num: "03", title: "Connect With Your Family", desc: "NDR clinicians reach out to discuss your child's specific needs and goals." },
  { num: "04", title: "Custom Support Plan", desc: "Together we create a personalized support plan so your child can fully participate." },
];

const levels = [
  { title: "Independent", desc: "Child can participate fully with standard group supervision.", color: "bg-mint/10 text-mint-dark border-mint/20" },
  { title: "Some Support", desc: "Occasional check-ins and minor accommodations within the group setting.", color: "bg-blue/10 text-blue border-blue/20" },
  { title: "Significant Support", desc: "Regular support with transitions, group activities, and emotional regulation.", color: "bg-sunshine/10 text-sunshine-dark border-sunshine/20" },
  { title: "1:1 Support", desc: "Dedicated aide providing continuous support throughout the day.", color: "bg-coral/10 text-coral border-coral/20" },
];

const faqItems = [
  { question: "Does my child need a formal diagnosis?", answer: "No. We welcome all children and no formal diagnosis is required to access our inclusive support program." },
  { question: "Is there an additional cost?", answer: "Yes, inclusive support services involve additional fees outside of the weekly camp fees. NDR will discuss pricing based on the level of support needed." },
  { question: "Who provides the support?", answer: "Support is provided through our partnership with Neurodiverse Resource Inc. (NDR), a clinician-led organization specializing in neurodivergent support." },
  { question: "What areas are assessed?", answer: "NDR assesses safety & supervision needs, ability to stay with the group, communication, regulation & transitions, and overall participation level." },
];

export default function InclusiveSupportPage() {
  return (
    <PageWrapper>
      <PageHero
        tag="Inclusive Support"
        tagColor="violet"
        title={<>Every Child <span className="hl-blue">Belongs</span> at Laurus</>}
        subtitle="Through our partnership with Neurodiverse Resource Inc. (NDR), we provide clinician-led inclusive support ensuring every child can participate fully and joyfully."
        ctaText="Contact Us"
        ctaHref="/contact"
      />

      {/* Process */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[900px] mx-auto px-6">
          <div className="text-center mb-14">
            <SectionTag color="blue">How It Works</SectionTag>
            <motion.h2 initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-black text-navy mt-5 mb-4">
              Getting Started
            </motion.h2>
            <p className="text-[16px] text-text-body max-w-[480px] mx-auto">A simple, supportive process designed to understand and meet your child&apos;s unique needs.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {process.map((step, i) => (
              <motion.div key={step.num} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-gray-50 rounded-[var(--radius-lg)] p-6 border border-[var(--border)] flex gap-4">
                <div className="text-[24px] font-black text-violet/30">{step.num}</div>
                <div>
                  <h3 className="text-[16px] font-extrabold text-navy mb-1">{step.title}</h3>
                  <p className="text-[14px] text-text-body">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Levels */}
      <section className="py-20 lg:py-28 bg-cream">
        <div className="max-w-[900px] mx-auto px-6">
          <div className="text-center mb-14">
            <SectionTag color="mint">Support Levels</SectionTag>
            <motion.h2 initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-black text-navy mt-5 mb-4">
              Tailored to Your Child&apos;s Needs
            </motion.h2>
          </div>
          <div className="space-y-4">
            {levels.map((level, i) => (
              <motion.div key={level.title} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className={`rounded-[var(--radius-md)] p-5 border ${level.color}`}>
                <h3 className="text-[16px] font-extrabold mb-1">{level.title}</h3>
                <p className="text-[14px] opacity-80">{level.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About NDR */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[700px] mx-auto px-6 text-center">
          <Card accent="violet" icon="heart-handshake" className="text-center">
            <h3 className="text-[20px] font-extrabold text-navy mb-3">About Neurodiverse Resource (NDR)</h3>
            <p className="text-[15px] text-text-body leading-relaxed mb-4">NDR is a clinician-led organization specializing in evidence-based, strengths-based support for neurodivergent individuals. Their team works directly with families and our camp staff to ensure every child has the tools they need to thrive.</p>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28 bg-cream">
        <div className="max-w-[1320px] mx-auto px-6">
          <div className="text-center mb-14"><h2 className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-black text-navy">Inclusive Support FAQ</h2></div>
          <FAQ items={faqItems} />
        </div>
      </section>

      <section className="py-20 lg:py-24 gradient-navy text-center">
        <div className="max-w-[700px] mx-auto px-6">
          <h2 className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-black text-white mb-4">Every Child Deserves an Amazing Summer</h2>
          <p className="text-[16px] text-white/60 mb-8">Reach out to learn how we can support your child&apos;s unique needs.</p>
          <Button href="/contact" variant="coral" size="lg" pill>Get in Touch →</Button>
        </div>
      </section>
    </PageWrapper>
  );
}
