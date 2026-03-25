"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Andi Lane",
    text: "My kids absolutely loved their time at Laurus! The counselors were amazing, and I could see my children growing more confident every day.",
    rating: 5,
  },
  {
    name: "Catherine Lefebvre",
    text: "The bilingual program is a game-changer. My daughter improved her French so much over the summer while having the best time of her life.",
    rating: 5,
  },
  {
    name: "Hassan El Mansouri",
    text: "We've tried many camps over the years, and Laurus is by far the best. The activities are creative, the staff is professional, and the kids never want to leave!",
    rating: 5,
  },
  {
    name: "Ashwin Santiago",
    text: "The inclusive support program gave us peace of mind. Our son with ADHD had the structure he needed while still enjoying every activity.",
    rating: 5,
  },
  {
    name: "Elsie Roy",
    text: "From Robotics to Dance, the variety of activities keeps my kids engaged all summer. Laurus truly offers something for every child.",
    rating: 5,
  },
  {
    name: "Zara Bush",
    text: "The Leadership Program was incredible for my teenager. She came home with real confidence and new skills. Worth every penny!",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {testimonials.map((t, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ delay: i * 0.08, duration: 0.5 }}
          className="bg-white rounded-[var(--radius-lg)] p-7 shadow-[var(--shadow-sm)] border border-[var(--border)] hover:-translate-y-1 hover:shadow-[var(--shadow-md)] transition-all duration-300"
        >
          {/* Stars */}
          <div className="flex gap-1 mb-4">
            {Array.from({ length: t.rating }).map((_, j) => (
              <svg
                key={j}
                className="w-4 h-4 text-sunshine"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>

          <p className="text-[14px] leading-relaxed text-text-body mb-5">
            &ldquo;{t.text}&rdquo;
          </p>

          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue to-mint flex items-center justify-center text-white text-[13px] font-bold">
              {t.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>
            <span className="text-[13px] font-bold text-text-primary">
              {t.name}
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
