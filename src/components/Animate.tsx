"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect, type ReactNode } from "react";

/* ---- Shared easing ---- */
const smoothEase = [0.16, 1, 0.3, 1] as const;

/* ============================================
   FadeIn — fade up on scroll (most common)
   ============================================ */
interface FadeInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function FadeIn({ children, delay = 0, className = "" }: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: smoothEase }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ============================================
   StaggerContainer — stagger children (grids)
   ============================================ */
interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}

export function StaggerContainer({
  children,
  className = "",
  staggerDelay = 0.08,
}: StaggerContainerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: staggerDelay } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ============================================
   StaggerItem — child of StaggerContainer
   ============================================ */
interface StaggerItemProps {
  children: ReactNode;
  className?: string;
}

export function StaggerItem({ children, className = "" }: StaggerItemProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 24 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: smoothEase } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ============================================
   ScaleIn — scale up on scroll
   ============================================ */
interface ScaleInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function ScaleIn({ children, delay = 0, className = "" }: ScaleInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay, ease: smoothEase }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ============================================
   SlideInLeft — slide from left
   ============================================ */
interface SlideInLeftProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function SlideInLeft({ children, delay = 0, className = "" }: SlideInLeftProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: smoothEase }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ============================================
   SlideInRight — slide from right
   ============================================ */
interface SlideInRightProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function SlideInRight({ children, delay = 0, className = "" }: SlideInRightProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: smoothEase }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ============================================
   AnimatedCounter — count from 0 to target
   Parses "2,000+" → animates 0→2000 → "2,000+"
   ============================================ */
interface AnimatedCounterProps {
  value: string;
  suffix?: string;
  prefix?: string;
  className?: string;
}

export function AnimatedCounter({
  value,
  suffix = "",
  prefix = "",
  className = "",
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [display, setDisplay] = useState("0");

  // Parse the raw value string
  const trailingSuffix = value.replace(/[\d,.\s]/g, ""); // e.g. "+" or "%"
  const numericPart = parseFloat(value.replace(/[^0-9.]/g, "")); // e.g. 2000

  useEffect(() => {
    if (!isInView) return;

    const duration = 1600; // ms
    const steps = 60;
    const stepTime = duration / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += 1;
      const progress = current / steps;
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const currentValue = Math.round(eased * numericPart);

      // Format with commas
      const formatted = currentValue.toLocaleString("en-US");
      setDisplay(formatted);

      if (current >= steps) {
        clearInterval(timer);
        // Ensure we land on the exact original formatted number
        setDisplay(numericPart.toLocaleString("en-US"));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, numericPart]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display}
      {trailingSuffix || suffix}
    </span>
  );
}
