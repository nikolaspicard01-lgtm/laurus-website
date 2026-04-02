"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import PageWrapper from "./PageWrapper";
import SectionTag from "./SectionTag";
import Card from "./Card";
import Button from "./Button";
import Icon from "@/components/Icon";
import type { Location } from "@/data/locations";
import { summerLocations, springLocations } from "@/data/locations";

interface Props {
  location: Location;
  type: "summer" | "spring";
}

// Simulated availability per location (would come from API in production)
function getAvailability(slug: string): { filled: number; total: number } {
  const seed = slug.split("").reduce((a, c) => a + c.charCodeAt(0), 0);
  const total = 60 + (seed % 20); // 60-80 total spots
  const filled = Math.floor(total * (0.55 + (seed % 30) / 100)); // 55-85% filled
  return { filled, total };
}

function getWeekAvailability(slug: string, weekCount: number) {
  const seed = slug.split("").reduce((a, c) => a + c.charCodeAt(0), 0);
  return Array.from({ length: weekCount }, (_, i) => {
    const v = (seed * (i + 1)) % 100;
    if (v < 25) return "available" as const;
    if (v < 60) return "filling" as const;
    return "almost-full" as const;
  });
}

const statusColors = {
  available: { bg: "bg-mint/15", text: "text-mint-dark", label: "Available" },
  filling: { bg: "bg-sunshine/15", text: "text-sunshine-dark", label: "Filling Up" },
  "almost-full": { bg: "bg-coral/15", text: "text-coral", label: "Almost Full" },
};

const programs = [
  { title: "Junior Program", ages: "Ages 3–4", icon: "baby" as const, color: "coral" as const },
  { title: "Youth Program", ages: "Ages 5–11", icon: "star" as const, color: "blue" as const },
  { title: "Leadership", ages: "Ages 12–14", icon: "target" as const, color: "mint" as const },
  { title: "C.I.T.", ages: "Age 15+", icon: "award" as const, color: "sunshine" as const },
];

const testimonials: Record<string, { quote: string; author: string }> = {
  "dollard-des-ormeaux": { quote: "My kids beg to go back every summer. The DDO location feels like a second home — the staff are incredible.", author: "Sarah M., DDO parent" },
  "beaconsfield": { quote: "We love how close the Beaconsfield camp is. Our daughter made lifelong friends and couldn't stop talking about robotics!", author: "Jennifer L., Beaconsfield parent" },
  "baie-durfe": { quote: "Baie d'Urfé camp has the perfect mix of outdoor fun and structured learning. Both our kids come home happy every day.", author: "Marc T., Baie d'Urfé parent" },
  "ile-bizard": { quote: "The small community feel at Île-Bizard is exactly what we wanted. Our son felt comfortable from day one.", author: "Nadia K., Île-Bizard parent" },
  "sainte-genevieve": { quote: "Sainte-Geneviève camp exceeded our expectations. The variety of activities means our kids never get bored.", author: "David R., Sainte-Geneviève parent" },
  "montreal-downtown": { quote: "Having camp near Atwater metro is a game-changer. The Sacred Heart facilities are excellent.", author: "Isabelle C., Downtown parent" },
  "notre-dame-de-grace": { quote: "Willingdon is the perfect spot for our junior camper. The NDG neighbourhood is lovely.", author: "Christine B., NDG parent" },
  "town-of-mount-royal": { quote: "TMR camp at Mount Royal Academy is fantastic. The grounds are beautiful and programming is excellent.", author: "Andrew P., TMR parent" },
  "verdun": { quote: "Verdun camp is the highlight of our kids' summer. They love the variety of activities.", author: "Sophia G., Verdun parent" },
  "ville-saint-laurent": { quote: "So convenient for our family. Our children have grown so much in confidence.", author: "Fatima A., VSL parent" },
  "saint-leonard": { quote: "Saint-Léonard camp brought out the best in our shy son. The bilingual programming made all the difference.", author: "Marco D., Saint-Léonard parent" },
  "riviere-des-prairies": { quote: "We appreciate the smaller community feel at RDP. Our kids get personal attention.", author: "Evelyne H., RDP parent" },
  "laval": { quote: "Laval camp at JFK Elementary is outstanding. Staying open on holidays means no disruption to our schedule.", author: "Patrick L., Laval parent" },
  "rosemere": { quote: "Rosemère captures the best of summer. The North Shore setting is peaceful and our kids love it.", author: "Caroline S., Rosemère parent" },
  "brossard": { quote: "Best decision for our kids' summer. Being open on holidays is a huge plus.", author: "Yanick F., Brossard parent" },
  "vaudreuil": { quote: "Vaudreuil camp made our first camp experience wonderful. The staff are patient and passionate.", author: "Marie-Eve J., Vaudreuil parent" },
  "toronto": { quote: "Finally a quality camp in Woodbridge! The early bird pricing is unbeatable.", author: "Lisa W., Woodbridge parent" },
  "ottawa": { quote: "Ottawa camp has been a lifesaver for our summers. Our kids love the sports and arts programming.", author: "James O., Ottawa parent" },
  "westmount": { quote: "Westmount spring break camp kept our kids active all week. They can't wait to go back.", author: "Rebecca N., Westmount parent" },
};

export default function LocationPageContent({ location, type }: Props) {
  const isSummer = type === "summer";
  const allLocations = isSummer ? summerLocations : springLocations;
  const siblingLocations = allLocations.filter((l) => l.slug !== location.slug).slice(0, 4);
  const basePath = isSummer ? "/summer-camp/locations" : "/spring-break/locations";
  const testimonial = testimonials[location.slug];

  const availability = useMemo(() => getAvailability(location.slug), [location.slug]);
  const fillPercent = Math.round((availability.filled / availability.total) * 100);
  const spotsLeft = availability.total - availability.filled;

  const weekCount = isSummer ? 9 : 1;
  const weeks = useMemo(() => getWeekAvailability(location.slug, weekCount), [location.slug, weekCount]);

  // Discount calculator
  const [numWeeks, setNumWeeks] = useState(1);
  const [numKids, setNumKids] = useState(1);

  const basePrice = parseFloat(location.earlyBirdPrice.replace(/[$\/wk,]/g, ""));
  const weekDiscount = numWeeks >= 8 ? 0.10 : numWeeks >= 5 ? 0.05 : 0;
  const siblingDiscount = numKids >= 2 ? 0.10 : 0;
  const totalDiscount = Math.min(weekDiscount + siblingDiscount, 0.20);
  const pricePerWeek = basePrice * (1 - totalDiscount);
  const totalPrice = pricePerWeek * numWeeks * numKids;
  const totalSavings = (basePrice * numWeeks * numKids) - totalPrice;

  return (
    <PageWrapper>
      {/* Hero */}
      <section className={`relative overflow-hidden ${isSummer ? "gradient-hero" : "bg-gradient-to-br from-coral-light to-cream"}`}>
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute w-[350px] h-[350px] rounded-full bg-blue/5 -top-16 -right-16 blur-3xl" />
        </div>
        <div className="relative max-w-[1320px] mx-auto px-4 sm:px-6 py-12 sm:py-20 lg:py-24 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <SectionTag color={isSummer ? "sunshine" : "coral"} dot>{location.dates}</SectionTag>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-[clamp(2rem,4.5vw,3.2rem)] font-black text-navy mt-6 mb-3">
            {isSummer ? "Summer Camp" : "Spring Break Camp"} in {location.name}
          </motion.h1>
          {location.venue && (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
              className="text-[15px] text-text-body font-semibold">{location.venue}</motion.p>
          )}
          {location.address && (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }}
              className="text-[14px] text-text-muted mb-6">{location.address}</motion.p>
          )}

          {/* Spots Counter — right in the hero for immediate urgency */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            className="max-w-[400px] mx-auto mb-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-[var(--radius-lg)] p-5 border border-[var(--border)] shadow-[var(--shadow-md)]">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[13px] font-bold text-navy">Spots Filling Up</span>
                <span className={`text-[13px] font-bold ${spotsLeft < 10 ? "text-coral" : spotsLeft < 20 ? "text-sunshine-dark" : "text-mint-dark"}`}>
                  {spotsLeft} spots left
                </span>
              </div>
              <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${fillPercent}%` }}
                  transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className={`h-full rounded-full ${
                    fillPercent > 80 ? "bg-gradient-to-r from-coral to-tangerine" :
                    fillPercent > 60 ? "bg-gradient-to-r from-sunshine to-[#FFE87A]" :
                    "bg-gradient-to-r from-mint to-[#5DE09E]"
                  }`}
                />
              </div>
              <p className="text-[12px] text-text-muted mt-2">{availability.filled} of {availability.total} spots filled for {location.dates}</p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row flex-wrap justify-center gap-3">
            <Button href={location.registrationUrl} external variant="coral" size="lg" pill>
              Register Now — {location.earlyBirdPrice}
            </Button>
            <Button href={isSummer ? "/summer-camp" : "/spring-break"} variant="white" size="lg" pill>
              ← All Locations
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ========== PRICING & DISCOUNTS — The Main Event ========== */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <SectionTag color="sunshine">Pricing & Discounts</SectionTag>
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-black text-navy mt-5 mb-2">Calculate Your Price</h2>
            <p className="text-[15px] text-text-muted">Stack discounts for up to 20% off + 10% sibling discount. Camp fees are tax deductible (RL-24).</p>
          </div>

          {/* Pricing Tiers */}
          {location.pricing && (
            <div className="mb-8 grid grid-cols-4 gap-2 sm:gap-3">
              {[
                { month: "Jan", price: location.pricing.jan, past: true },
                { month: "Feb", price: location.pricing.feb, past: true },
                { month: "Mar", price: location.pricing.mar, past: true },
                { month: "Apr", price: location.pricing.apr, past: false },
              ].map((tier) => (
                <div key={tier.month} className={`rounded-[var(--radius-md)] p-3 sm:p-4 text-center border ${
                  !tier.past
                    ? "bg-blue/5 border-blue/20 ring-2 ring-blue/30"
                    : "bg-gray-50 border-[var(--border)] opacity-50"
                }`}>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-text-muted mb-1">{tier.month}</div>
                  <div className={`text-[18px] sm:text-[22px] font-black ${!tier.past ? "text-blue" : "text-text-muted line-through"}`}>
                    {tier.price}
                  </div>
                  <div className="text-[10px] text-text-muted">/week</div>
                  {!tier.past && (
                    <div className="text-[9px] font-bold text-blue bg-blue/10 rounded-full px-2 py-0.5 mt-1.5 inline-block">CURRENT</div>
                  )}
                </div>
              ))}
            </div>
          )}

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left: Calculator */}
            <div className="bg-cream rounded-[var(--radius-lg)] p-6 sm:p-8 border border-[var(--border)]">
              <h3 className="text-[16px] font-bold text-navy mb-6 flex items-center gap-2">
                <Icon name="target" size={18} className="text-blue" /> Discount Calculator
              </h3>

              {/* Weeks slider */}
              <div className="mb-6">
                <div className="flex justify-between mb-2">
                  <label className="text-[13px] font-bold text-navy">Number of weeks</label>
                  <span className="text-[14px] font-black text-blue">{numWeeks} week{numWeeks > 1 ? "s" : ""}</span>
                </div>
                <input
                  type="range" min={1} max={isSummer ? 9 : 1} value={numWeeks}
                  onChange={(e) => setNumWeeks(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-full appearance-none cursor-pointer accent-blue"
                />
                <div className="flex justify-between text-[11px] text-text-muted mt-1">
                  <span>1 wk</span>
                  {isSummer && <span>5 wk (5% off)</span>}
                  {isSummer && <span>9 wk (10% off)</span>}
                </div>
              </div>

              {/* Kids counter */}
              <div className="mb-6">
                <div className="flex justify-between mb-2">
                  <label className="text-[13px] font-bold text-navy">Number of children</label>
                  <span className="text-[14px] font-black text-blue">{numKids}</span>
                </div>
                <div className="flex gap-2">
                  {[1, 2, 3, 4].map((n) => (
                    <button key={n} onClick={() => setNumKids(n)}
                      className={`flex-1 py-2.5 rounded-[var(--radius-sm)] text-[14px] font-bold border transition-all ${
                        numKids === n
                          ? "bg-blue text-white border-blue shadow-[var(--shadow-blue)]"
                          : "bg-white text-text-body border-[var(--border)] hover:border-blue/30"
                      }`}>
                      {n} kid{n > 1 ? "s" : ""}
                    </button>
                  ))}
                </div>
              </div>

              {/* Active discounts */}
              <div className="space-y-2 mb-6">
                <p className="text-[12px] font-bold uppercase tracking-wider text-text-muted">Active Discounts</p>
                <div className={`flex items-center justify-between p-3 rounded-[var(--radius-xs)] border ${weekDiscount > 0 ? "bg-mint/8 border-mint/20" : "bg-gray-50 border-[var(--border)]"}`}>
                  <span className="text-[13px] font-semibold text-navy">Multi-Week ({numWeeks} wk{numWeeks > 1 ? "s" : ""})</span>
                  <span className={`text-[13px] font-bold ${weekDiscount > 0 ? "text-mint-dark" : "text-text-muted"}`}>
                    {weekDiscount > 0 ? `${Math.round(weekDiscount * 100)}% off` : "Add 5+ weeks"}
                  </span>
                </div>
                <div className={`flex items-center justify-between p-3 rounded-[var(--radius-xs)] border ${siblingDiscount > 0 ? "bg-mint/8 border-mint/20" : "bg-gray-50 border-[var(--border)]"}`}>
                  <span className="text-[13px] font-semibold text-navy">Sibling Discount ({numKids} kid{numKids > 1 ? "s" : ""})</span>
                  <span className={`text-[13px] font-bold ${siblingDiscount > 0 ? "text-mint-dark" : "text-text-muted"}`}>
                    {siblingDiscount > 0 ? "10% off" : "Add 2+ kids"}
                  </span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-[var(--radius-xs)] bg-blue/8 border border-blue/20">
                  <span className="text-[13px] font-semibold text-navy">Early Bird (current)</span>
                  <span className="text-[13px] font-bold text-blue">Active</span>
                </div>
              </div>
            </div>

            {/* Right: Price Summary */}
            <div>
              <div className="bg-navy rounded-[var(--radius-lg)] p-6 sm:p-8 text-white mb-4">
                <h3 className="text-[14px] font-bold text-white/50 mb-4">Your Estimated Price</h3>
                <div className="flex items-end gap-2 mb-1">
                  <span className="text-[clamp(2.2rem,5vw,3rem)] font-black leading-none">${Math.round(pricePerWeek)}</span>
                  <span className="text-[16px] font-semibold text-white/60 pb-1">/wk per child</span>
                </div>
                {totalDiscount > 0 && (
                  <p className="text-[14px] text-white/40 line-through">${basePrice}/wk regular</p>
                )}

                <div className="mt-6 pt-6 border-t border-white/10 space-y-3">
                  <div className="flex justify-between text-[14px]">
                    <span className="text-white/60">{numWeeks} week{numWeeks > 1 ? "s" : ""} × {numKids} child{numKids > 1 ? "ren" : ""}</span>
                    <span className="font-bold">${Math.round(totalPrice)}</span>
                  </div>
                  {totalSavings > 0 && (
                    <div className="flex justify-between text-[14px]">
                      <span className="text-mint">You save</span>
                      <span className="font-bold text-mint">${Math.round(totalSavings)}</span>
                    </div>
                  )}
                  {totalDiscount > 0 && (
                    <div className="bg-white/10 rounded-[var(--radius-xs)] px-3 py-2 text-center">
                      <span className="text-[13px] font-bold text-sunshine">{Math.round(totalDiscount * 100)}% total discount applied</span>
                    </div>
                  )}
                </div>

                <Button
                  href={location.registrationUrl}
                  external variant="coral" size="lg" pill
                  className="w-full mt-6 justify-center"
                >
                  Register Now →
                </Button>
                <p className="text-[11px] text-white/30 text-center mt-3">Tax deductible — RL-24 receipts issued</p>
              </div>

              {/* Referral bonus */}
              <div className="bg-mint/8 border border-mint/20 rounded-[var(--radius-md)] p-4 flex items-start gap-3">
                <Icon name="users" size={18} className="text-mint-dark mt-0.5 shrink-0" />
                <div>
                  <p className="text-[13px] font-bold text-navy">Referral Bonus</p>
                  <p className="text-[12px] text-text-muted">Get $10/week credit for every family you refer. They get 10% off too.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== WEEK-BY-WEEK AVAILABILITY ========== */}
      {isSummer && (
        <section className="py-14 bg-cream">
          <div className="max-w-[900px] mx-auto px-4 sm:px-6">
            <div className="text-center mb-8">
              <h3 className="text-[18px] font-extrabold text-navy mb-2">Week-by-Week Availability</h3>
              <p className="text-[14px] text-text-muted">June 22 – August 21, 2026</p>
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-2">
              {weeks.map((status, i) => {
                const s = statusColors[status];
                return (
                  <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                    className={`${s.bg} rounded-[var(--radius-sm)] p-3 text-center border border-transparent`}>
                    <div className="text-[12px] font-bold text-navy mb-1">Week {i + 1}</div>
                    <div className={`text-[10px] font-bold ${s.text}`}>{s.label}</div>
                  </motion.div>
                );
              })}
            </div>
            <div className="flex flex-wrap justify-center gap-4 mt-4">
              {Object.entries(statusColors).map(([key, val]) => (
                <div key={key} className="flex items-center gap-1.5">
                  <div className={`w-3 h-3 rounded-full ${val.bg}`} />
                  <span className="text-[11px] font-semibold text-text-muted">{val.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ========== WHAT'S INCLUDED vs ADD-ONS ========== */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <SectionTag color="blue">What You Get</SectionTag>
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-black text-navy mt-5 mb-2">Included vs. Add-Ons</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Included */}
            <div className="bg-mint/5 border border-mint/15 rounded-[var(--radius-lg)] p-6">
              <h3 className="text-[15px] font-bold text-mint-dark mb-4 flex items-center gap-2">
                <Icon name="check-circle" size={18} /> Included in Weekly Price
              </h3>
              <ul className="space-y-3">
                {[
                  "11+ expert-led activity categories",
                  "75-minute STA sessions daily",
                  "Early care from 7:30 AM",
                  "Extended care until 5:30 PM",
                  "Certified, background-checked staff",
                  "Age-appropriate grouping (3–15+)",
                  "Inclusive support available",
                  "RL-24 tax receipts",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-[14px] text-text-body">
                    <Icon name="check-circle" size={16} className="text-mint-dark shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            {/* Add-ons */}
            <div className="bg-sunshine/5 border border-sunshine/15 rounded-[var(--radius-lg)] p-6">
              <h3 className="text-[15px] font-bold text-sunshine-dark mb-4 flex items-center gap-2">
                <Icon name="sparkles" size={18} /> Optional Add-Ons
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2.5 text-[14px] text-text-body">
                  <Icon name="utensils" size={16} className="text-sunshine-dark shrink-0 mt-0.5" />
                  <div><span className="font-bold">Lunch Program</span> — $10-12/day. Fresh meals by Les Petits Chefs. Nut-free, nutritionist-planned.</div>
                </li>
                <li className="flex items-start gap-2.5 text-[14px] text-text-body">
                  <Icon name="shirt" size={16} className="text-sunshine-dark shrink-0 mt-0.5" />
                  <div><span className="font-bold">Camp Merchandise</span> — Official Laurus t-shirts and gear available for purchase on-site.</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ========== HIGHLIGHTS ========== */}
      <section className="py-14 bg-cream">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6">
          <h3 className="text-[18px] font-extrabold text-navy mb-5 text-center">Why {location.name}</h3>
          <div className="grid sm:grid-cols-2 gap-3">
            {location.highlights.map((h, i) => (
              <motion.div key={h} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="flex items-center gap-3 bg-white rounded-[var(--radius-sm)] p-3.5 border border-[var(--border)]">
                <Icon name="check-circle" size={16} className="text-mint-dark shrink-0" />
                <span className="text-[14px] font-medium text-text-body">{h}</span>
              </motion.div>
            ))}
          </div>
          {location.holidayNote && (
            <div className="mt-4 bg-sunshine/10 border border-sunshine/20 rounded-[var(--radius-sm)] p-3.5 flex items-start gap-3">
              <Icon name="calendar" size={16} className="text-sunshine-dark shrink-0 mt-0.5" />
              <span className="text-[13px] font-semibold text-sunshine-dark">{location.holidayNote}</span>
            </div>
          )}
        </div>
      </section>

      {/* ========== PROGRAMS ========== */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6">
          <h3 className="text-[18px] font-extrabold text-navy mb-6 text-center">Programs at This Location</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {programs.map((p) => (
              <div key={p.title} className="bg-gray-50 rounded-[var(--radius-md)] p-4 text-center border border-[var(--border)]">
                <div className={`w-10 h-10 rounded-xl bg-${p.color}/10 flex items-center justify-center mx-auto mb-2`}>
                  <Icon name={p.icon} size={18} className={`text-${p.color === "mint" ? "mint-dark" : p.color === "sunshine" ? "sunshine-dark" : p.color}`} />
                </div>
                <h4 className="text-[13px] font-bold text-navy">{p.title}</h4>
                <p className="text-[12px] text-text-muted">{p.ages}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== TESTIMONIAL ========== */}
      {testimonial && (
        <section className="py-14 bg-cream">
          <div className="max-w-[600px] mx-auto px-4 sm:px-6 text-center">
            <div className="flex justify-center gap-1 mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} className="w-4 h-4 text-sunshine" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <blockquote className="text-[15px] text-text-body leading-relaxed italic mb-3">
              &ldquo;{testimonial.quote}&rdquo;
            </blockquote>
            <p className="text-[13px] font-bold text-navy">— {testimonial.author}</p>
          </div>
        </section>
      )}

      {/* ========== SAMPLE WEEKLY SCHEDULE ========== */}
      {isSummer && (
        <section className="py-16 lg:py-20 bg-white">
          <div className="max-w-[900px] mx-auto px-4 sm:px-6">
            <div className="text-center mb-8">
              <SectionTag color="blue">Sample Week</SectionTag>
              <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-black text-navy mt-5 mb-2">What a Week Looks Like</h2>
              <p className="text-[14px] text-text-muted">Your child picks one STA per week. Here&apos;s an example if they chose Robotics:</p>
            </div>
            <div className="overflow-x-auto -mx-4 px-4">
              <table className="w-full min-w-[600px] text-[13px]">
                <thead>
                  <tr>
                    <th className="text-left py-3 px-3 text-[12px] font-bold uppercase tracking-wider text-text-muted bg-gray-50 rounded-tl-[var(--radius-sm)]">Time</th>
                    {["Mon", "Tue", "Wed", "Thu", "Fri"].map((day) => (
                      <th key={day} className="text-center py-3 px-2 text-[12px] font-bold uppercase tracking-wider text-text-muted bg-gray-50 last:rounded-tr-[var(--radius-sm)]">{day}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    { time: "7:30–9:00", activity: "Early Care & Drop-off", color: "text-text-muted" },
                    { time: "9:00–10:15", activity: "Robotics STA", color: "text-blue font-bold" },
                    { time: "10:15–10:30", activity: "Snack Break", color: "text-text-muted" },
                    { time: "10:30–11:45", activity: "Outdoor Games", color: "text-mint-dark font-semibold" },
                    { time: "11:45–12:45", activity: "Lunch & Free Play", color: "text-text-muted" },
                    { time: "12:45–2:00", activity: "Team Challenges", color: "text-coral font-semibold" },
                    { time: "2:00–3:15", activity: "Robotics STA", color: "text-blue font-bold" },
                    { time: "3:15–3:30", activity: "Closing Circle", color: "text-text-muted" },
                    { time: "3:30–4:00", activity: "Pick-up", color: "text-text-muted" },
                    { time: "4:00–5:30", activity: "Extended Care", color: "text-text-muted" },
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                      <td className="py-2.5 px-3 font-bold text-navy whitespace-nowrap">{row.time}</td>
                      {Array.from({ length: 5 }).map((_, j) => (
                        <td key={j} className={`py-2.5 px-2 text-center ${row.color}`}>{row.activity}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-[12px] text-text-muted text-center mt-4">Next week, they can switch to Dance, Cooking, Science, or any other STA — their choice!</p>
          </div>
        </section>
      )}

      {/* ========== YOUR CHILD'S FIRST DAY ========== */}
      <section className="py-16 lg:py-20 bg-cream">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <SectionTag color="sunshine">First Day Guide</SectionTag>
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-black text-navy mt-5 mb-2">Your Child&apos;s First Day</h2>
            <p className="text-[14px] text-text-muted">Here&apos;s exactly what to expect so you and your child feel prepared.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            <div className="bg-white rounded-[var(--radius-lg)] p-5 border border-[var(--border)]">
              <h3 className="text-[15px] font-bold text-navy mb-3 flex items-center gap-2">
                <Icon name="clipboard" size={18} className="text-blue" /> What to Pack
              </h3>
              <ul className="space-y-2">
                {[
                  "Sunscreen (applied before arrival)",
                  "Water bottle (labeled with name)",
                  "Hat and comfortable clothes",
                  "Running shoes (closed-toe)",
                  "Lunch and snacks (or order our lunch program)",
                  "Change of clothes in a labeled bag",
                  "Any required medication (give to staff at drop-off)",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-[13px] text-text-body">
                    <Icon name="check-circle" size={14} className="text-mint-dark shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-[var(--radius-lg)] p-5 border border-[var(--border)]">
              <h3 className="text-[15px] font-bold text-navy mb-3 flex items-center gap-2">
                <Icon name="sun" size={18} className="text-sunshine-dark" /> What to Expect
              </h3>
              <ul className="space-y-2.5">
                {[
                  { bold: "Drop-off (7:30–9:00 AM):", text: "Pull up, a counselor greets your child by name, and walks them to their group. Quick and easy." },
                  { bold: "First morning:", text: "Ice-breaker games, group introductions, and a tour of the facility. Your child will know everyone by lunch." },
                  { bold: "Activities start right away:", text: "No wasted time. Your child jumps into their chosen STA by mid-morning." },
                  { bold: "Communication:", text: "You'll receive a welcome package with your child's group, counselor name, and daily schedule." },
                  { bold: "Pick-up (3:30–4:00 PM):", text: "Show ID, sign out, and hear about your child's day. Extended care available until 5:30 PM." },
                ].map((item) => (
                  <li key={item.bold} className="text-[13px] text-text-body">
                    <span className="font-bold text-navy">{item.bold}</span> {item.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-5 bg-blue/5 border border-blue/15 rounded-[var(--radius-md)] p-4 text-center">
            <p className="text-[13px] text-text-body"><Icon name="heart" size={14} className="text-blue inline -mt-0.5" /> <span className="font-bold text-navy">Nervous kids are normal.</span> Our counselors are trained to help first-timers feel welcome. Most kids are smiling within 20 minutes.</p>
          </div>
        </div>
      </section>

      {/* ========== DROP-OFF & PICK-UP ========== */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <h3 className="text-[18px] font-extrabold text-navy mb-2">Drop-off & Pick-up Details</h3>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="bg-gray-50 rounded-[var(--radius-lg)] p-5 border border-[var(--border)]">
              <h4 className="text-[14px] font-bold text-navy mb-3 flex items-center gap-2">
                <Icon name="clock" size={16} className="text-blue" /> Morning Drop-off
              </h4>
              <ul className="space-y-2 text-[13px] text-text-body">
                <li><span className="font-bold text-navy">Early care:</span> 7:30 AM – 9:00 AM</li>
                <li><span className="font-bold text-navy">Where:</span> Main entrance — look for Laurus signage</li>
                <li><span className="font-bold text-navy">Process:</span> Drive up or walk in, a counselor checks your child in by name</li>
                <li><span className="font-bold text-navy">Medication:</span> Hand any medication directly to the Site Director at drop-off</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-[var(--radius-lg)] p-5 border border-[var(--border)]">
              <h4 className="text-[14px] font-bold text-navy mb-3 flex items-center gap-2">
                <Icon name="users" size={16} className="text-coral" /> Afternoon Pick-up
              </h4>
              <ul className="space-y-2 text-[13px] text-text-body">
                <li><span className="font-bold text-navy">Regular:</span> 3:30 PM – 4:00 PM</li>
                <li><span className="font-bold text-navy">Extended care:</span> Until 5:30 PM ({location.extendedCare === "Included" ? "included" : location.extendedCare})</li>
                <li><span className="font-bold text-navy">ID required:</span> Government-issued photo ID for all pick-ups</li>
                <li><span className="font-bold text-navy">Authorized list:</span> Only pre-authorized individuals can pick up your child</li>
                <li><span className="font-bold text-navy">Late pick-up:</span> Please call ahead — fees may apply after 5:30 PM</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ========== GOOGLE REVIEWS + CANCELLATION + REGISTRATION STEPS ========== */}
      <section className="py-16 lg:py-20 bg-cream">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6">
          {/* Google Review Badge */}
          <div className="bg-white rounded-[var(--radius-lg)] p-5 border border-[var(--border)] mb-6 flex flex-col sm:flex-row items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className={`w-5 h-5 ${i < 5 ? "text-sunshine" : "text-gray-200"}`} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-[20px] font-black text-navy">4.8</span>
            </div>
            <div className="text-center sm:text-left">
              <p className="text-[14px] font-bold text-navy">Rated 4.8/5 by parents on Google</p>
              <p className="text-[12px] text-text-muted">Based on 230+ reviews across all locations</p>
            </div>
          </div>

          {/* After You Register Steps */}
          <div className="mb-6">
            <h3 className="text-[18px] font-extrabold text-navy mb-5 text-center">After You Click &ldquo;Register&rdquo;</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {[
                { step: "1", title: "Create Account", desc: "Quick Amilia signup — takes 2 minutes", color: "bg-blue/10 text-blue" },
                { step: "2", title: "Pick Your Weeks", desc: "Choose which weeks and location work for you", color: "bg-coral/10 text-coral" },
                { step: "3", title: "Choose Activities", desc: "Select your child's STAs — change anytime", color: "bg-sunshine/10 text-sunshine-dark" },
                { step: "4", title: "You're In!", desc: "Pay securely and receive your welcome package", color: "bg-mint/10 text-mint-dark" },
              ].map((s) => (
                <div key={s.step} className="bg-white rounded-[var(--radius-md)] p-4 border border-[var(--border)] text-center">
                  <div className={`w-8 h-8 rounded-full ${s.color} flex items-center justify-center mx-auto mb-2 text-[14px] font-black`}>{s.step}</div>
                  <h4 className="text-[14px] font-bold text-navy mb-1">{s.title}</h4>
                  <p className="text-[12px] text-text-muted">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Cancellation Policy */}
          <div className="bg-white rounded-[var(--radius-md)] p-5 border border-[var(--border)] flex flex-col sm:flex-row items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-coral/10 flex items-center justify-center shrink-0">
              <Icon name="shield" size={18} className="text-coral" />
            </div>
            <div>
              <h4 className="text-[14px] font-bold text-navy mb-1">Flexible Cancellation Policy</h4>
              <p className="text-[13px] text-text-body leading-relaxed">Changed your mind? Cancel anytime for a $50 processing fee, refund within 14 business days. No questions asked. We want you to register with confidence — not stress.</p>
              <p className="text-[12px] text-text-muted mt-2">Questions about cancellation? Call <a href="tel:+15146000504" className="text-blue hover:underline">(514) 600-0504</a> or email <a href="mailto:info@laurussummercamp.com" className="text-blue hover:underline">info@laurussummercamp.com</a></p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== OTHER LOCATIONS ========== */}
      <section className="py-14 bg-white">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6">
          <h3 className="text-[18px] font-extrabold text-navy mb-5 text-center">Other Locations Near You</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {siblingLocations.map((loc) => (
              <a key={loc.slug} href={`${basePath}/${loc.slug}`}
                className="bg-gray-50 rounded-[var(--radius-md)] p-4 border border-[var(--border)] hover:border-blue/20 hover:shadow-[var(--shadow-sm)] transition-all text-center">
                <p className="text-[14px] font-bold text-navy mb-0.5">{loc.name}</p>
                <p className="text-[12px] text-text-muted mb-1">{loc.region}</p>
                <p className="text-[15px] font-black text-blue">{loc.earlyBirdPrice}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ========== STICKY BOTTOM CTA ========== */}
      <section className="py-14 gradient-navy text-center">
        <div className="max-w-[700px] mx-auto px-4 sm:px-6">
          <h2 className="text-[clamp(1.6rem,3vw,2rem)] font-black text-white mb-2">
            Register for {location.name}
          </h2>
          <p className="text-[15px] text-white/50 mb-2">Starting at <span className="text-white font-bold">{location.earlyBirdPrice}</span> with early bird pricing</p>
          <p className="text-[13px] text-coral font-bold mb-6">{spotsLeft} spots remaining</p>
          <Button href={location.registrationUrl} external variant="coral" size="lg" pill>
            Secure Your Spot →
          </Button>
        </div>
      </section>
    </PageWrapper>
  );
}
