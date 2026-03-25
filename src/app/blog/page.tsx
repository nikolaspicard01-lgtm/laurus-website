"use client";

import { motion } from "framer-motion";
import PageWrapper from "@/components/PageWrapper";
import PageHero from "@/components/PageHero";
import Button from "@/components/Button";
import Icon from "@/components/Icon";

const posts = [
  {
    title: "What Does a 'Safe & Supportive' Summer Camp Really Mean?",
    excerpt: "A look at Laurus's safety protocols — from staff certifications to emergency procedures — and what parents should look for when choosing a camp.",
    date: "January 15, 2026",
    category: "Safety",
    color: "coral",
  },
  {
    title: "More Than a Camper: Building Real-World Skills with Montreal Youth Programs",
    excerpt: "How our Leadership and CIT programs help teens develop confidence, teamwork, and career-ready skills that last well beyond summer.",
    date: "January 14, 2026",
    category: "Programs",
    color: "blue",
  },
  {
    title: "5 Ways Bilingual Camps Give Kids an Academic Edge",
    excerpt: "Research shows bilingual immersion programs boost cognitive flexibility, academic performance, and social skills. Here's how Laurus does it.",
    date: "January 13, 2026",
    category: "Education",
    color: "sunshine",
  },
  {
    title: "How to Prepare Your Child for Their First Camp Experience",
    excerpt: "A parent's guide to making the transition smooth — from what to pack to how to talk about camp beforehand.",
    date: "January 13, 2026",
    category: "Tips",
    color: "mint",
  },
  {
    title: "The Importance of Inclusive Programming in Day Camps",
    excerpt: "Why inclusive support matters, how our NDR partnership works, and what it means for neurodivergent campers and their families.",
    date: "January 13, 2026",
    category: "Inclusivity",
    color: "violet",
  },
  {
    title: "Spring Break Camp vs. Screen Time: Why Active Breaks Matter",
    excerpt: "The case for structured, active March Break programming over a week of screen time — and how to make the switch.",
    date: "January 13, 2026",
    category: "Wellness",
    color: "coral",
  },
];

const colorMap: Record<string, string> = {
  coral: "bg-coral/8 text-coral",
  blue: "bg-blue/8 text-blue",
  sunshine: "bg-sunshine/12 text-sunshine-dark",
  mint: "bg-mint/8 text-mint-dark",
  violet: "bg-violet/8 text-violet",
};

export default function BlogPage() {
  return (
    <PageWrapper>
      <PageHero
        tag="Blog"
        tagColor="coral"
        title={<>The Laurus <span className="hl-coral">Blog</span></>}
        subtitle="Tips, insights, and stories about camp life, child development, and making the most of every season."
      />

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1320px] mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, i) => (
              <motion.article key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="bg-white rounded-[var(--radius-lg)] shadow-[var(--shadow-sm)] border border-[var(--border)] overflow-hidden hover:-translate-y-1 hover:shadow-[var(--shadow-md)] transition-all group">
                {/* Placeholder image area */}
                <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center">
                  <span className="opacity-30"><Icon name="pen-line" size={48} /></span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full ${colorMap[post.color]}`}>
                      {post.category}
                    </span>
                    <span className="text-[12px] text-text-muted">{post.date}</span>
                  </div>
                  <h2 className="text-[17px] font-extrabold text-navy mb-2 leading-snug group-hover:text-blue transition-colors">{post.title}</h2>
                  <p className="text-[14px] text-text-body leading-relaxed line-clamp-3">{post.excerpt}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-cream text-center">
        <div className="max-w-[600px] mx-auto px-6">
          <h2 className="text-[22px] font-extrabold text-navy mb-3">Stay Updated</h2>
          <p className="text-[15px] text-text-body mb-6">Subscribe to get new articles, camp tips, and early bird offers.</p>
          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-3 max-w-[420px] mx-auto">
            <input type="email" placeholder="Your email" className="flex-1 px-4 py-3 rounded-full border border-gray-200 text-[14px] focus:outline-none focus:border-blue focus:ring-2 focus:ring-blue/10" />
            <Button variant="coral" pill>Subscribe</Button>
          </form>
        </div>
      </section>
    </PageWrapper>
  );
}
