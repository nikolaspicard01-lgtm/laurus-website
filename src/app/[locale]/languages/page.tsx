"use client";

import { motion } from "framer-motion";
import PageWrapper from "@/components/PageWrapper";
import PageHero from "@/components/PageHero";
import SectionTag from "@/components/SectionTag";
import Card from "@/components/Card";
import Button from "@/components/Button";
import Icon from "@/components/Icon";
import type { IconName } from "@/components/Icon";
import { useLocale } from "@/lib/LocaleContext";

export default function LanguagesPage() {
  const { locale, dict } = useLocale();
  const t = dict.languages;

  const tiers = [
    { icon: "sprout" as const, title: t.littleExplorersTitle, ages: "Ages 3–5", desc: t.littleExplorersDesc, accent: "mint" as const },
    { icon: "search" as const, title: t.youngDiscoverersTitle, ages: "Ages 6–9", desc: t.youngDiscoverersDesc, accent: "blue" as const },
    { icon: "palette" as const, title: t.creatorsInActionTitle, ages: "Ages 10–11", desc: t.creatorsInActionDesc, accent: "sunshine" as const },
    { icon: "globe" as const, title: t.ambassadorsTitle, ages: "Ages 12–15", desc: t.ambassadorsDesc, accent: "coral" as const },
  ];

  const methods: { icon: IconName; name: string }[] = [
    { icon: "theater", name: t.dramaRolePlay },
    { icon: "gamepad", name: t.languageGames },
    { icon: "book-open", name: t.storytimeBookClubs },
    { icon: "message-circle", name: t.conversationCircles },
    { icon: "brush", name: t.culturalCrafts },
    { icon: "party-popper", name: t.culturalCelebrations },
  ];

  const locations = [
    { name: "Montreal Downtown", venue: "The Sacred Heart School", dates: "Jun 22 – Aug 14", price: "$375/wk", weeks: 8, registrationUrl: "https://app.amilia.com/store/en/laurus-summer-camp/api/Program/Detail?programId=kX62gOy" },
    { name: "Laval", venue: "John F. Kennedy Elementary", dates: "Jun 29 – Aug 14", price: "$375/wk", weeks: 7, registrationUrl: "https://app.amilia.com/store/en/laurus-summer-camp/api/Program/Detail?programId=k40e89k" },
    { name: "DDO", venue: "Emmanuel Christian School", dates: "Jun 22 – Aug 14", price: "$375/wk", weeks: 8, registrationUrl: "https://app.amilia.com/store/en/laurus-summer-camp/api/Program/Detail?programId=ydzGrDk" },
  ];

  return (
    <PageWrapper>
      <PageHero
        tag={t.heroTag}
        tagColor="blue"
        title={<>{t.heroTitle} <span className="hl-blue">{t.heroHighlight}</span> {t.heroTitle2}</>}
        subtitle={t.heroSub}
        ctaText={dict.common.registerNow}
        ctaHref="https://app.amilia.com/store/en/laurus-summer-camp/api/Program/Detail?programId=kX62gOy"
        ctaExternal
        gradient="blue"
      />

      {/* Age Tiers */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1320px] mx-auto px-6">
          <div className="text-center mb-14">
            <SectionTag color="blue">{t.ageTiersTitle}</SectionTag>
            <motion.h2 initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-black text-navy mt-5 mb-4">
              {t.ageTiersTitle}
            </motion.h2>
            <p className="text-[16px] text-text-body max-w-[480px] mx-auto">{t.ageTiersSub}</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {tiers.map((tier, i) => (
              <Card key={i} accent={tier.accent} icon={tier.icon} delay={i * 0.1}>
                <h3 className="text-[17px] font-extrabold text-navy mb-1">{tier.title}</h3>
                <p className="text-[13px] font-bold text-blue mb-2">{tier.ages}</p>
                <p className="text-[14px] text-text-body leading-relaxed">{tier.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Methods */}
      <section className="py-20 lg:py-28 bg-cream">
        <div className="max-w-[900px] mx-auto px-6">
          <div className="text-center mb-14">
            <SectionTag color="sunshine">{t.howWeTeachTitle}</SectionTag>
            <motion.h2 initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-black text-navy mt-5 mb-4">
              {t.howWeTeachTitle}
            </motion.h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {methods.map((m, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                className="bg-white rounded-[var(--radius-lg)] p-5 text-center shadow-[var(--shadow-xs)] border border-[var(--border)] hover:-translate-y-1 hover:shadow-[var(--shadow-md)] transition-all">
                <div className="text-3xl mb-2"><Icon name={m.icon} size={28} /></div>
                <div className="text-[14px] font-bold text-navy">{m.name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Laurus Languages */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1320px] mx-auto px-6">
          <div className="text-center mb-14">
            <SectionTag color="coral">The Laurus Difference</SectionTag>
            <motion.h2 initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-black text-navy mt-5 mb-4">
              Why Choose Laurus Languages
            </motion.h2>
            <p className="text-[16px] text-text-body max-w-[520px] mx-auto">Our language programs go far beyond vocabulary lists and grammar drills. Here is what sets us apart.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: "globe" as IconName, title: "Native Speaker Instructors", desc: "Every instructor is a fluent or native speaker of the language they teach, bringing authentic pronunciation, cultural knowledge, and real-world fluency to every lesson.", accent: "blue" as const },
              { icon: "users" as IconName, title: "Small Group Sizes", desc: "With a maximum of 8-10 students per group, every child gets personalized attention and ample opportunity to practise speaking, listening, and engaging with the language.", accent: "mint" as const },
              { icon: "palette" as IconName, title: "Cultural Immersion", desc: "Language learning comes alive through cooking traditional recipes, celebrating cultural holidays, exploring music and dance, and connecting with the stories behind each language.", accent: "sunshine" as const },
              { icon: "clipboard" as IconName, title: "Progress Reports", desc: "Parents receive regular updates on their child's language development, including vocabulary growth, conversational confidence, and areas of strength, so you can see the progress in real time.", accent: "coral" as const },
            ].map((card, i) => (
              <Card key={i} accent={card.accent} icon={card.icon} delay={i * 0.1}>
                <h3 className="text-[17px] font-extrabold text-navy mb-2">{card.title}</h3>
                <p className="text-[14px] text-text-body leading-relaxed">{card.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Perfect For */}
      <section className="py-20 lg:py-28 bg-cream">
        <div className="max-w-[900px] mx-auto px-6">
          <div className="text-center mb-14">
            <SectionTag color="violet">Who It's For</SectionTag>
            <motion.h2 initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-black text-navy mt-5 mb-4">
              Perfect For
            </motion.h2>
            <p className="text-[16px] text-text-body max-w-[480px] mx-auto">Our programs are designed to meet a wide range of language learning needs.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: "ESL / FSL Learners", desc: "Children learning English or French as a second language who need extra support and practice in a fun, low-pressure environment outside the classroom." },
              { title: "Bilingual Families", desc: "Families who want to strengthen their child's skills in both official languages, maintain a heritage language, or add a third language to their repertoire." },
              { title: "Newcomers to Canada", desc: "Recently arrived families looking for a welcoming, supportive space where children can build language confidence while making new friends and adapting to life in Montreal." },
              { title: "Kids Who Want to Boost Grades", desc: "Students who want to improve their performance in French or English class at school by building stronger foundations in reading, writing, and oral communication." },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="flex items-start gap-3 bg-white rounded-[var(--radius-md)] p-5 border border-[var(--border)] shadow-[var(--shadow-xs)]">
                <span className="w-5 h-5 rounded-full bg-blue/15 flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                </span>
                <div>
                  <h3 className="text-[15px] font-extrabold text-navy mb-1">{item.title}</h3>
                  <p className="text-[13px] text-text-body leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[900px] mx-auto px-6">
          <div className="text-center mb-14">
            <SectionTag color="coral">3 Dedicated Locations</SectionTag>
            <motion.h2 initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-black text-navy mt-5 mb-4">
              {t.locationsTitle}
            </motion.h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {locations.map((loc, i) => (
              <Card key={loc.name} accent="blue" delay={i * 0.1}>
                <h3 className="text-[17px] font-extrabold text-navy mb-1">{loc.name}</h3>
                <p className="text-[13px] text-text-muted mb-1">{loc.venue}</p>
                <p className="text-[13px] text-text-muted mb-1">{loc.dates} ({loc.weeks} weeks)</p>
                <p className="text-[13px] text-text-muted mb-3">English & French Immersion</p>
                <p className="text-[22px] font-black text-blue mb-3">{loc.price}</p>
                <a href={loc.registrationUrl} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[13px] font-bold text-blue hover:underline">
                  Register for {loc.name} <span>&rarr;</span>
                </a>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 lg:py-28 bg-cream">
        <div className="max-w-[900px] mx-auto px-6">
          <div className="text-center mb-14">
            <SectionTag color="blue">Parent Testimonials</SectionTag>
            <motion.h2 initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-black text-navy mt-5 mb-4">
              What Families Are Saying
            </motion.h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { quote: "We moved to Montreal from Ontario and my son barely spoke any French. After just one summer with Laurus, he was confidently ordering food in French and chatting with the neighbours. The immersive approach made all the difference.", name: "Jennifer T.", detail: "Parent, Montreal" },
              { quote: "My daughter is in French immersion at school but was struggling with oral communication. The small group setting at Laurus gave her the practice and confidence she needed. Her teacher noticed the improvement right away in September.", name: "Michael R.", detail: "Parent, Laval" },
            ].map((testimonial, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-white rounded-[var(--radius-lg)] p-6 border border-[var(--border)]">
                <p className="text-[14px] text-text-body leading-relaxed mb-4 italic">&ldquo;{testimonial.quote}&rdquo;</p>
                <div>
                  <p className="text-[15px] font-bold text-navy">{testimonial.name}</p>
                  <p className="text-[13px] text-text-muted">{testimonial.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 gradient-navy text-center">
        <div className="max-w-[700px] mx-auto px-6">
          <h2 className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-black text-white mb-4">{t.ctaTitle}</h2>
          <p className="text-[16px] text-white/60 mb-8">{t.ctaSub}</p>
          <Button href="https://app.amilia.com/store/en/laurus-summer-camp/api/Program/Detail?programId=kX62gOy" external variant="coral" size="lg" pill>{dict.common.registerNow}</Button>
        </div>
      </section>
    </PageWrapper>
  );
}
