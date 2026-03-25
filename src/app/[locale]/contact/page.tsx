"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import PageWrapper from "@/components/PageWrapper";
import PageHero from "@/components/PageHero";
import SectionTag from "@/components/SectionTag";
import Icon from "@/components/Icon";
import type { IconName } from "@/components/Icon";

const formTypes: { id: string; label: string; icon: IconName }[] = [
  { id: "general", label: "General Inquiry", icon: "message-circle" },
  { id: "cancellation", label: "Cancellation Request", icon: "cross" },
  { id: "exceptionalities", label: "Children With Exceptionalities", icon: "heart" },
  { id: "photo-optout", label: "Photo & Media Opt-Out", icon: "camera" },
  { id: "referral", label: "Referral Form", icon: "handshake" },
];

export default function ContactPage() {
  const [activeForm, setActiveForm] = useState("general");

  return (
    <PageWrapper>
      <PageHero
        tag="Contact Us"
        tagColor="blue"
        title={<>We&apos;re Here to <span className="hl-blue">Help</span></>}
        subtitle="Have questions about programs, registration, or anything else? Reach out — we'd love to hear from you."
      />

      {/* Contact Info */}
      <section className="py-14 bg-white border-b border-[var(--border)]">
        <div className="max-w-[1320px] mx-auto px-6">
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { icon: "phone" as IconName, title: "Phone", value: "(514) 600-0504", href: "tel:+15146000504" },
              { icon: "file-text" as IconName, title: "Email", value: "info@laurussummercamp.com", href: "mailto:info@laurussummercamp.com" },
              { icon: "clock" as IconName, title: "Hours", value: "Mon–Sun, 9AM–5PM", href: null },
            ].map((item) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="text-center bg-gray-50 rounded-[var(--radius-lg)] p-6 border border-[var(--border)]">
                <div className="text-2xl mb-2"><Icon name={item.icon} size={24} /></div>
                <h3 className="text-[14px] font-bold text-text-muted mb-1">{item.title}</h3>
                {item.href ? (
                  <a href={item.href} className="text-[15px] font-bold text-navy hover:text-blue transition-colors">{item.value}</a>
                ) : (
                  <p className="text-[15px] font-bold text-navy">{item.value}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Forms */}
      <section className="py-20 lg:py-28 bg-cream">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="text-center mb-10">
            <SectionTag color="coral">Get In Touch</SectionTag>
            <motion.h2 initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-black text-navy mt-5 mb-4">Send Us a Message</motion.h2>
          </div>

          {/* Form Type Selector */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {formTypes.map((f) => (
              <button key={f.id} onClick={() => setActiveForm(f.id)}
                className={`text-[13px] font-bold px-4 py-2 rounded-full border transition-all ${
                  activeForm === f.id
                    ? "bg-blue text-white border-blue shadow-[var(--shadow-blue)]"
                    : "bg-white text-text-body border-[var(--border)] hover:border-blue/30"
                }`}>
                <span className="mr-1.5 inline-flex"><Icon name={f.icon} size={14} /></span>{f.label}
              </button>
            ))}
          </div>

          {/* Contact Form */}
          <motion.form key={activeForm} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            onSubmit={(e) => e.preventDefault()}
            className="bg-white rounded-[var(--radius-lg)] p-8 shadow-[var(--shadow-md)] border border-[var(--border)] space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-[13px] font-bold text-navy mb-2">First Name *</label>
                <input type="text" required className="w-full px-4 py-3 rounded-[var(--radius-sm)] border border-gray-200 text-[14px] focus:outline-none focus:border-blue focus:ring-2 focus:ring-blue/10 transition-all" />
              </div>
              <div>
                <label className="block text-[13px] font-bold text-navy mb-2">Last Name *</label>
                <input type="text" required className="w-full px-4 py-3 rounded-[var(--radius-sm)] border border-gray-200 text-[14px] focus:outline-none focus:border-blue focus:ring-2 focus:ring-blue/10 transition-all" />
              </div>
            </div>
            <div>
              <label className="block text-[13px] font-bold text-navy mb-2">Email *</label>
              <input type="email" required className="w-full px-4 py-3 rounded-[var(--radius-sm)] border border-gray-200 text-[14px] focus:outline-none focus:border-blue focus:ring-2 focus:ring-blue/10 transition-all" />
            </div>
            <div>
              <label className="block text-[13px] font-bold text-navy mb-2">Phone</label>
              <input type="tel" className="w-full px-4 py-3 rounded-[var(--radius-sm)] border border-gray-200 text-[14px] focus:outline-none focus:border-blue focus:ring-2 focus:ring-blue/10 transition-all" />
            </div>
            {activeForm === "general" && (
              <div>
                <label className="block text-[13px] font-bold text-navy mb-2">Subject</label>
                <select className="w-full px-4 py-3 rounded-[var(--radius-sm)] border border-gray-200 text-[14px] focus:outline-none focus:border-blue focus:ring-2 focus:ring-blue/10 transition-all bg-white">
                  <option>Summer Camp</option>
                  <option>Spring Break</option>
                  <option>Tutoring</option>
                  <option>Extra-Curriculars</option>
                  <option>Languages Camp</option>
                  <option>Inclusive Support</option>
                  <option>School Partnerships</option>
                  <option>Events</option>
                  <option>Other</option>
                </select>
              </div>
            )}
            <div>
              <label className="block text-[13px] font-bold text-navy mb-2">Message *</label>
              <textarea required rows={5} className="w-full px-4 py-3 rounded-[var(--radius-sm)] border border-gray-200 text-[14px] focus:outline-none focus:border-blue focus:ring-2 focus:ring-blue/10 transition-all resize-none" />
            </div>
            <button type="submit" className="w-full gradient-coral text-white font-bold text-[15px] py-3.5 rounded-[var(--radius-sm)] shadow-[var(--shadow-coral)] hover:-translate-y-0.5 hover:shadow-lg transition-all">
              Send Message
            </button>
          </motion.form>
        </div>
      </section>
    </PageWrapper>
  );
}
