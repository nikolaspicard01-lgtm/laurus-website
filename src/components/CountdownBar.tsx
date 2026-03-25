"use client";

import { useState, useEffect } from "react";

export default function CountdownBar() {
  const [visible, setVisible] = useState(true);
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const target = new Date("2026-03-31T23:59:59").getTime();
    const tick = () => {
      const now = Date.now();
      const diff = Math.max(0, target - now);
      setTime({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  if (!visible) return null;

  return (
    <div className="relative gradient-coral text-white text-center py-3 px-4 text-[13px] sm:text-[14px] font-bold overflow-hidden">
      {/* Shimmer */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 animate-[shimmer_3s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div className="relative flex items-center justify-center gap-3 sm:gap-5 flex-wrap">
        <span>
          2026 Registrations Open! Save <span className="underline decoration-2 underline-offset-2">25% OFF</span> — March Only
        </span>
        <div className="flex items-center gap-1.5">
          {[
            { v: time.days, l: "D" },
            { v: time.hours, l: "H" },
            { v: time.minutes, l: "M" },
            { v: time.seconds, l: "S" },
          ].map((u) => (
            <div
              key={u.l}
              className="bg-white/15 backdrop-blur-sm rounded-lg px-2.5 py-1 min-w-[40px] text-center"
            >
              <span className="text-[15px] font-black tabular-nums">
                {String(u.v).padStart(2, "0")}
              </span>
              <span className="text-[10px] text-white/70 ml-0.5">{u.l}</span>
            </div>
          ))}
        </div>
        <a
          href="https://app.amilia.com/store/en/laurus-summer-camp/shop/programs"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:inline-flex bg-white text-coral font-extrabold text-[12px] px-4 py-1.5 rounded-full hover:scale-105 transition-transform"
        >
          REGISTER NOW
        </a>
      </div>

      <button
        onClick={() => setVisible(false)}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-white/60 hover:text-white p-1"
        aria-label="Close"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
}
