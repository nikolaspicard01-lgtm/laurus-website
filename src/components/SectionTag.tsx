"use client";

import { motion } from "framer-motion";

type TagColor = "blue" | "coral" | "sunshine" | "mint" | "violet";

const colorMap: Record<TagColor, string> = {
  blue: "bg-blue/8 border-blue/20 text-blue",
  coral: "bg-coral/8 border-coral/20 text-coral",
  sunshine: "bg-sunshine/12 border-sunshine/30 text-sunshine-dark",
  mint: "bg-mint/8 border-mint/20 text-mint-dark",
  violet: "bg-violet/8 border-violet/20 text-violet",
};

export default function SectionTag({
  children,
  color = "blue",
  dot = false,
}: {
  children: React.ReactNode;
  color?: TagColor;
  dot?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      className={`inline-flex items-center gap-2 px-5 py-2 rounded-full text-[12px] font-extrabold uppercase tracking-[0.15em] border ${colorMap[color]}`}
    >
      {dot && (
        <span className="w-2 h-2 rounded-full bg-current animate-[pulse-dot_2s_infinite]" />
      )}
      {children}
    </motion.div>
  );
}
