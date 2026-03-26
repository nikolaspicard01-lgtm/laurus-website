"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import PageWrapper from "@/components/PageWrapper";
import PageHero from "@/components/PageHero";
import Button from "@/components/Button";
import Icon from "@/components/Icon";
import { useLocale } from "@/lib/LocaleContext";
import { blogPosts } from "@/data/blog-posts";

const colorMap: Record<string, string> = {
  coral: "bg-coral/8 text-coral",
  blue: "bg-blue/8 text-blue",
  sunshine: "bg-sunshine/12 text-sunshine-dark",
  mint: "bg-mint/8 text-mint-dark",
  violet: "bg-violet/8 text-violet",
};

export default function BlogPage() {
  const { locale, dict } = useLocale();

  return (
    <PageWrapper>
      <PageHero
        tag={dict.blog.heroTag}
        tagColor="coral"
        title={<>{dict.blog.heroTitle} <span className="hl-coral">{dict.blog.heroHighlight}</span></>}
        subtitle={dict.blog.heroSub}
      />

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1320px] mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, i) => (
              <Link key={post.slug} href={`/${locale}/blog/${post.slug}`} className="block">
                <motion.article initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                  className="bg-white rounded-[var(--radius-lg)] shadow-[var(--shadow-sm)] border border-[var(--border)] overflow-hidden hover:-translate-y-1 hover:shadow-[var(--shadow-md)] transition-all group h-full">
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
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-cream text-center">
        <div className="max-w-[600px] mx-auto px-6">
          <h2 className="text-[22px] font-extrabold text-navy mb-3">{dict.blog.stayUpdated}</h2>
          <p className="text-[15px] text-text-body mb-6">{dict.blog.stayUpdatedSub}</p>
          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-3 max-w-[420px] mx-auto">
            <input type="email" placeholder={dict.blog.yourEmail} className="flex-1 px-4 py-3 rounded-full border border-gray-200 text-[14px] focus:outline-none focus:border-blue focus:ring-2 focus:ring-blue/10" />
            <Button variant="coral" pill>{dict.home.subscribe}</Button>
          </form>
        </div>
      </section>
    </PageWrapper>
  );
}
