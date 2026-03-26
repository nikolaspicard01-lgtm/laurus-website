"use client";

import { motion } from "framer-motion";
import Icon, { type IconName } from "./Icon";

type AccentColor = "blue" | "coral" | "sunshine" | "mint" | "violet";

const accentGradients: Record<AccentColor, string> = {
  blue: "from-blue to-[#6BD5FF]",
  coral: "from-coral to-tangerine",
  sunshine: "from-sunshine to-[#FFE87A]",
  mint: "from-mint to-[#5DE09E]",
  violet: "from-violet to-[#C49CFF]",
};

const iconBgColors: Record<AccentColor, string> = {
  blue: "bg-blue shadow-[var(--shadow-blue)]",
  coral: "bg-coral shadow-[var(--shadow-coral)]",
  sunshine: "bg-sunshine shadow-[var(--shadow-sunshine)]",
  mint: "bg-mint",
  violet: "bg-violet",
};

interface CardProps {
  children: React.ReactNode;
  accent?: AccentColor;
  icon?: IconName;
  className?: string;
  hover?: boolean;
  delay?: number;
}

export default function Card({
  children,
  accent,
  icon,
  className = "",
  hover = true,
  delay = 0,
}: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
      className={`relative bg-white rounded-[var(--radius-lg)] p-5 sm:p-8 shadow-[var(--shadow-sm)] border border-[var(--border)] ${
        hover
          ? "transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[var(--shadow-lg)]"
          : ""
      } ${className}`}
    >
      {/* Top accent bar */}
      {accent && (
        <div
          className={`absolute top-0 left-0 right-0 h-[4px] rounded-t-[var(--radius-lg)] bg-gradient-to-r ${accentGradients[accent]}`}
        />
      )}

      {/* Icon circle */}
      {icon && accent && (
        <div
          className={`w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-5 ring-[6px] ring-white ${iconBgColors[accent]}`}
        >
          <Icon name={icon} size={24} strokeWidth={2} />
        </div>
      )}

      {children}
    </motion.div>
  );
}
