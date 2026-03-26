"use client";

import { motion } from "framer-motion";
import SectionTag from "./SectionTag";
import Button from "./Button";

interface PageHeroProps {
  tag: string;
  tagColor?: "blue" | "coral" | "sunshine" | "mint" | "violet";
  title: React.ReactNode;
  subtitle: string;
  ctaText?: string;
  ctaHref?: string;
  ctaExternal?: boolean;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  gradient?: "hero" | "blue" | "coral" | "sunshine";
}

const gradientMap = {
  hero: "gradient-hero",
  blue: "bg-gradient-to-br from-blue-light to-cream",
  coral: "bg-gradient-to-br from-coral-light to-cream",
  sunshine: "bg-gradient-to-br from-sunshine-light to-cream",
};

export default function PageHero({
  tag,
  tagColor = "blue",
  title,
  subtitle,
  ctaText,
  ctaHref,
  ctaExternal = false,
  secondaryCtaText,
  secondaryCtaHref,
  gradient = "hero",
}: PageHeroProps) {
  return (
    <section className={`relative overflow-hidden ${gradientMap[gradient]}`}>
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute w-[350px] h-[350px] rounded-full bg-blue/5 -top-16 -right-16 blur-3xl" />
        <div className="absolute w-[250px] h-[250px] rounded-full bg-sunshine/6 bottom-0 left-10 blur-3xl" />
      </div>
      <div className="relative max-w-[1320px] mx-auto px-4 sm:px-6 py-12 sm:py-20 lg:py-28 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <SectionTag color={tagColor} dot>
            {tag}
          </SectionTag>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-[clamp(2rem,4.5vw,3.4rem)] font-black text-navy mt-6 mb-5 max-w-[800px] mx-auto leading-[1.1]"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-[15px] sm:text-[17px] text-text-body max-w-[600px] mx-auto mb-8 leading-relaxed"
        >
          {subtitle}
        </motion.p>
        {ctaText && ctaHref && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row flex-wrap justify-center gap-3"
          >
            <Button href={ctaHref} external={ctaExternal} variant="coral" size="lg" pill>
              {ctaText}
            </Button>
            {secondaryCtaText && secondaryCtaHref && (
              <Button href={secondaryCtaHref} variant="white" size="lg" pill>
                {secondaryCtaText}
              </Button>
            )}
          </motion.div>
        )}
      </div>
    </section>
  );
}
