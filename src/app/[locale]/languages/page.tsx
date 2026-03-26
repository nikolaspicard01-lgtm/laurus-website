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
    { name: "DDO Campus", venue: "Emmanuel Christian School", dates: "Jun 22 – Aug 14", price: "$375/wk" },
    { name: "Montreal Downtown", venue: "Sacred Heart School", dates: "Jun 22 – Aug 14", price: "$375/wk" },
    { name: "Laval Campus", venue: "John F. Kennedy Elementary", dates: "Jun 29 – Aug 14", price: "$375/wk" },
  ];

  return (
    <PageWrapper>
      <PageHero
        tag={t.heroTag}
        tagColor="blue"
        title={<>{t.heroTitle} <span className="hl-blue">{t.heroHighlight}</span> {t.heroTitle2}</>}
        subtitle={t.heroSub}
        ctaText={dict.common.registerNow}
        ctaHref="https://app.amilia.com/store/en/laurus-summer-camp/shop/programs"
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
                <p className="text-[13px] text-text-muted mb-3">{loc.dates}</p>
                <p className="text-[22px] font-black text-blue">{loc.price}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 gradient-navy text-center">
        <div className="max-w-[700px] mx-auto px-6">
          <h2 className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-black text-white mb-4">{t.ctaTitle}</h2>
          <p className="text-[16px] text-white/60 mb-8">{t.ctaSub}</p>
          <Button href="https://app.amilia.com/store/en/laurus-summer-camp/shop/programs" external variant="coral" size="lg" pill>{dict.common.registerNow}</Button>
        </div>
      </section>
    </PageWrapper>
  );
}
