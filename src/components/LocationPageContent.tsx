"use client";

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

const programs = [
  {
    title: "Junior Program",
    ages: "Ages 3–4",
    icon: "baby" as const,
    description: "Play-based learning with low staff-to-camper ratios. Activities include team sports, music & movement, nature exploration, and sensory play.",
    color: "coral" as const,
  },
  {
    title: "Youth Program",
    ages: "Ages 5–11",
    icon: "star" as const,
    description: "Core camp experience with weekly Specific Training Activities (STAs) — robotics, visual arts, performing arts, dance, and sports clinics.",
    color: "blue" as const,
  },
  {
    title: "Leadership Program",
    ages: "Ages 12–14",
    icon: "target" as const,
    description: "Leadership development through entrepreneurship, team sports, guest speakers, volunteering, and problem-solving challenges.",
    color: "mint" as const,
  },
  {
    title: "C.I.T. Program",
    ages: "Age 15+",
    icon: "award" as const,
    description: "Counselor-in-Training development with the Shadow, Assist, Lead progression model. Earn a completion certificate for college applications.",
    color: "sunshine" as const,
  },
];

const scheduleItems = [
  { time: "7:30 AM", label: "Early care & drop-off opens", icon: "clock" as const },
  { time: "9:00 AM", label: "Morning activity blocks begin", icon: "star" as const },
  { time: "12:00 PM", label: "Lunch break & outdoor play", icon: "utensils" as const },
  { time: "1:00 PM", label: "Afternoon activities & projects", icon: "palette" as const },
  { time: "3:30 PM", label: "Regular pick-up begins", icon: "users" as const },
  { time: "5:30 PM", label: "Extended care ends", icon: "clock" as const },
];

const testimonials: Record<string, { quote: string; author: string }> = {
  "dollard-des-ormeaux": { quote: "My kids beg to go back every summer. The DDO location feels like a second home — the staff are incredible and the activities keep them engaged all day.", author: "Sarah M., DDO parent" },
  "beaconsfield": { quote: "We love how close the Beaconsfield camp is to home. Our daughter made lifelong friends and couldn't stop talking about robotics class!", author: "Jennifer L., Beaconsfield parent" },
  "baie-durfe": { quote: "Baie d'Urfé camp has the perfect mix of outdoor fun and structured learning. Both our kids come home happy and exhausted every single day.", author: "Marc T., Baie d'Urfé parent" },
  "ile-bizard": { quote: "The small community feel at Île-Bizard is exactly what we wanted. Our son felt comfortable from day one and the counselors are so attentive.", author: "Nadia K., Île-Bizard parent" },
  "sainte-genevieve": { quote: "Sainte-Geneviève camp exceeded our expectations. The variety of activities means our kids never get bored, and the staff genuinely care.", author: "David R., Sainte-Geneviève parent" },
  "montreal-downtown": { quote: "Having camp right near Atwater metro is a game-changer for our family. The Sacred Heart facilities are excellent and the programs are top-notch.", author: "Isabelle C., Downtown parent" },
  "notre-dame-de-grace": { quote: "Willingdon is the perfect spot for our junior camper. The NDG neighbourhood is lovely, and the dedicated junior area gives us peace of mind.", author: "Christine B., NDG parent" },
  "town-of-mount-royal": { quote: "TMR camp at Mount Royal Academy is fantastic. The grounds are beautiful and the programming keeps our kids learning and growing all summer.", author: "Andrew P., TMR parent" },
  "verdun": { quote: "Verdun camp is the highlight of our kids' summer. They love the variety of activities and we love that it's right in our neighbourhood.", author: "Sophia G., Verdun parent" },
  "ville-saint-laurent": { quote: "The Saint-Laurent location is so convenient for our family. Our children have grown so much in confidence thanks to the amazing counselors.", author: "Fatima A., VSL parent" },
  "saint-leonard": { quote: "Saint-Léonard camp brought out the best in our shy son. The bilingual programming and inclusive environment made all the difference.", author: "Marco D., Saint-Léonard parent" },
  "riviere-des-prairies": { quote: "We appreciate the smaller community feel at RDP. Our kids get personal attention and the nature-oriented activities are wonderful.", author: "Evelyne H., RDP parent" },
  "laval": { quote: "Laval camp at JFK Elementary is outstanding. The fact that they stay open on holidays means no disruption to our work schedule — and the kids love it.", author: "Patrick L., Laval parent" },
  "rosemere": { quote: "Rosemère camp captures the best of summer. The North Shore setting is peaceful and our kids come home with amazing stories every day.", author: "Caroline S., Rosemère parent" },
  "brossard": { quote: "Brossard camp is the best decision we made for our kids' summer. Being open on holidays is a huge plus, and Roya Elementary is a great venue.", author: "Yanick F., Brossard parent" },
  "vaudreuil": { quote: "Vaudreuil camp made our first summer camp experience wonderful. The staff are patient, caring, and truly passionate about what they do.", author: "Marie-Eve J., Vaudreuil parent" },
  "toronto": { quote: "Finally a quality summer camp in the Woodbridge area! The early bird pricing is unbeatable, and the programming rivals anything in downtown Toronto.", author: "Lisa W., Woodbridge parent" },
  "ottawa": { quote: "Ottawa camp at Roberta Bondar has been a lifesaver for our summers. Our kids love the sports and arts programming — they never want to leave!", author: "James O., Ottawa parent" },
  "westmount": { quote: "Westmount spring break camp kept our kids active and engaged all week. It was the perfect solution for March Break — they can't wait to go back.", author: "Rebecca N., Westmount parent" },
};

export default function LocationPageContent({ location, type }: Props) {
  const isSummer = type === "summer";
  const allLocations = isSummer ? summerLocations : springLocations;
  const siblingLocations = allLocations
    .filter((loc) => loc.slug !== location.slug)
    .slice(0, 5);
  const basePath = isSummer ? "/summer-camp/locations" : "/spring-break/locations";
  const testimonial = testimonials[location.slug];

  return (
    <PageWrapper>
      {/* Hero */}
      <section className={`relative overflow-hidden ${isSummer ? "gradient-hero" : "bg-gradient-to-br from-coral-light to-cream"}`}>
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute w-[350px] h-[350px] rounded-full bg-blue/5 -top-16 -right-16 blur-3xl" />
        </div>
        <div className="relative max-w-[1320px] mx-auto px-6 py-20 lg:py-28 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <SectionTag color={isSummer ? "sunshine" : "coral"} dot>
              {location.dates}
            </SectionTag>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-[clamp(2rem,4.5vw,3.4rem)] font-black text-navy mt-6 mb-3">
            {isSummer ? "Summer Camp" : "Spring Break Camp"} in {location.name}
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
            className="text-[15px] text-text-muted mb-2">{location.region}</motion.p>
          {location.venue && (
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
              className="text-[16px] text-text-body font-semibold mb-1">{location.venue}</motion.p>
          )}
          {location.address && (
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}
              className="text-[14px] text-text-muted mb-6">{location.address}</motion.p>
          )}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3">
            <Button href="https://app.amilia.com/store/en/laurus-summer-camp/shop/programs" external variant="coral" size="lg" pill>
              Register Now →
            </Button>
            <Button href={isSummer ? "/summer-camp" : "/spring-break"} variant="white" size="lg" pill>
              ← All Locations
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Pricing & Details */}
      <section className="py-16 bg-white">
        <div className="max-w-[900px] mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <Card accent="blue" delay={0}>
              <div className="text-center">
                <h3 className="text-[14px] font-bold text-text-muted mb-2">Early Bird Price</h3>
                <div className="text-[28px] font-black text-blue">{location.earlyBirdPrice}</div>
              </div>
            </Card>
            <Card accent="coral" delay={0.1}>
              <div className="text-center">
                <h3 className="text-[14px] font-bold text-text-muted mb-2">Regular Price</h3>
                <div className="text-[28px] font-black text-coral">{location.regularPrice}</div>
              </div>
            </Card>
            <Card accent="mint" delay={0.2}>
              <div className="text-center">
                <h3 className="text-[14px] font-bold text-text-muted mb-2">Camp Hours</h3>
                <div className="text-[18px] font-black text-navy">7:30 AM – 5:30 PM</div>
                <p className="text-[13px] text-text-muted mt-1">Mon–Fri</p>
              </div>
            </Card>
          </div>

          {location.notes && (
            <div className="mt-6 bg-sunshine/10 border border-sunshine/20 rounded-[var(--radius-md)] p-4 text-center">
              <p className="text-[14px] font-bold text-sunshine-dark"><Icon name="map-pin" size={16} className="inline -mt-0.5" /> {location.notes}</p>
            </div>
          )}
        </div>
      </section>

      {/* Location Highlights */}
      <section className="py-16 lg:py-20 bg-cream">
        <div className="max-w-[900px] mx-auto px-6">
          <div className="text-center mb-10">
            <SectionTag color="blue">Why {location.name}</SectionTag>
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-black text-navy mt-5 mb-4">Location Highlights</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {location.highlights.map((highlight, i) => (
              <motion.div key={highlight} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="flex items-center gap-3 bg-white rounded-[var(--radius-md)] p-4 border border-[var(--border)] shadow-[var(--shadow-sm)]">
                <span className="w-8 h-8 rounded-full bg-mint/15 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-mint-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                </span>
                <span className="text-[15px] font-semibold text-text-primary">{highlight}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About This Location */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-[900px] mx-auto px-6">
          <div className="text-center mb-10">
            <SectionTag color="coral">About</SectionTag>
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-black text-navy mt-5 mb-4">About This Location</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            <Card accent="blue" delay={0}>
              <div className="flex items-start gap-3">
                <span className="w-10 h-10 rounded-[var(--radius-sm)] bg-blue/10 flex items-center justify-center shrink-0">
                  <Icon name="map-pin" size={20} className="text-blue" />
                </span>
                <div>
                  <h3 className="text-[14px] font-bold text-navy mb-1">Nearby Landmarks</h3>
                  <p className="text-[13px] text-text-muted leading-relaxed">{location.nearbyLandmarks}</p>
                </div>
              </div>
            </Card>

            {location.holidayNote && (
              <Card accent="sunshine" delay={0.1}>
                <div className="flex items-start gap-3">
                  <span className="w-10 h-10 rounded-[var(--radius-sm)] bg-sunshine/10 flex items-center justify-center shrink-0">
                    <Icon name="calendar" size={20} className="text-sunshine-dark" />
                  </span>
                  <div>
                    <h3 className="text-[14px] font-bold text-navy mb-1">Holiday Schedule</h3>
                    <p className="text-[13px] text-text-muted leading-relaxed">{location.holidayNote}</p>
                  </div>
                </div>
              </Card>
            )}

            <Card accent="mint" delay={0.15}>
              <div className="flex items-start gap-3">
                <span className="w-10 h-10 rounded-[var(--radius-sm)] bg-mint/10 flex items-center justify-center shrink-0">
                  <Icon name="clock" size={20} className="text-mint-dark" />
                </span>
                <div>
                  <h3 className="text-[14px] font-bold text-navy mb-1">Extended Care</h3>
                  <p className="text-[13px] text-text-muted leading-relaxed">{location.extendedCare === "Included" ? "Extended care until 5:30 PM is included in your weekly rate — no extra fees." : `Extended care is available at ${location.extendedCare} beyond regular pickup hours.`}</p>
                </div>
              </div>
            </Card>

            <Card accent="coral" delay={0.2}>
              <div className="flex items-start gap-3">
                <span className="w-10 h-10 rounded-[var(--radius-sm)] bg-coral/10 flex items-center justify-center shrink-0">
                  <Icon name="utensils" size={20} className="text-coral" />
                </span>
                <div>
                  <h3 className="text-[14px] font-bold text-navy mb-1">Lunch Program</h3>
                  <p className="text-[13px] text-text-muted leading-relaxed">{location.lunchAvailable ? "Hot lunch program available ($10–12/day), prepared by Les Petits Chefs certified nutritionists. Or bring your own!" : "Campers should bring their own packed lunch daily."}</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Programs Available */}
      <section className="py-16 lg:py-20 bg-cream">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="text-center mb-10">
            <SectionTag color="mint">Programs</SectionTag>
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-black text-navy mt-5 mb-4">Programs Available at {location.name}</h2>
            <p className="text-[15px] text-text-muted max-w-[600px] mx-auto">Four age-based programs designed to give every camper the perfect experience.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {programs.map((program, i) => (
              <motion.div key={program.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <Card accent={program.color} delay={0}>
                  <div className="text-center">
                    <span className={`w-12 h-12 rounded-full bg-${program.color}/10 flex items-center justify-center mx-auto mb-3`}>
                      <Icon name={program.icon} size={22} className={`text-${program.color === "mint" ? "mint-dark" : program.color === "sunshine" ? "sunshine-dark" : program.color}`} />
                    </span>
                    <h3 className="text-[16px] font-bold text-navy mb-1">{program.title}</h3>
                    <p className="text-[13px] font-semibold text-blue mb-2">{program.ages}</p>
                    <p className="text-[13px] text-text-muted leading-relaxed">{program.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button href={isSummer ? "/summer-camp#programs" : "/spring-break"} variant="outline" size="md" pill>
              Learn More About Programs
            </Button>
          </div>
        </div>
      </section>

      {/* Daily Schedule Preview */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-[700px] mx-auto px-6">
          <div className="text-center mb-10">
            <SectionTag color="sunshine">Daily Schedule</SectionTag>
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-black text-navy mt-5 mb-4">A Typical Day at Camp</h2>
            <p className="text-[15px] text-text-muted">10 structured activity blocks keep campers engaged from drop-off to pick-up.</p>
          </div>
          <div className="space-y-3">
            {scheduleItems.map((item, i) => (
              <motion.div key={item.time} initial={{ opacity: 0, x: -15 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                className="flex items-center gap-4 bg-cream rounded-[var(--radius-sm)] p-4 border border-[var(--border)]">
                <span className="w-9 h-9 rounded-full bg-sunshine/15 flex items-center justify-center shrink-0">
                  <Icon name={item.icon} size={16} className="text-sunshine-dark" />
                </span>
                <div className="flex items-center gap-3 flex-1">
                  <span className="text-[14px] font-black text-navy min-w-[80px]">{item.time}</span>
                  <span className="text-[14px] text-text-body">{item.label}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 lg:py-20 bg-cream">
        <div className="max-w-[900px] mx-auto px-6">
          <div className="text-center mb-10">
            <SectionTag color="blue">What&apos;s Included</SectionTag>
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-black text-navy mt-5 mb-4">Everything Your Child Needs</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "11+ activity categories to choose from",
              "Expert-led 75-minute STA sessions",
              "Age-appropriate grouping (3–15+)",
              "Early care from 7:30 AM",
              "Extended care until 5:30 PM",
              "Optional lunch program ($10–12/day)",
              "Certified, background-checked staff",
              "Inclusive support available (via NDR)",
              "Stackable discounts up to 25%",
              "RL-24 tax receipts issued",
            ].map((item, i) => (
              <motion.div key={item} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }}
                className="flex items-start gap-3 bg-white rounded-[var(--radius-sm)] p-3 border border-[var(--border)]">
                <span className="w-5 h-5 rounded-full bg-mint/15 flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-mint-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                </span>
                <span className="text-[14px] text-text-body">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      {testimonial && (
        <section className="py-16 lg:py-20 bg-white">
          <div className="max-w-[700px] mx-auto px-6 text-center">
            <SectionTag color="coral">Testimonial</SectionTag>
            <h2 className="text-[clamp(1.4rem,2.5vw,1.8rem)] font-black text-navy mt-5 mb-8">
              Parents at {location.name} Love Our Camp
            </h2>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <Card accent="coral" delay={0}>
                <div className="text-center py-4">
                  <span className="w-12 h-12 rounded-full bg-coral/10 flex items-center justify-center mx-auto mb-4">
                    <Icon name="message-circle" size={22} className="text-coral" />
                  </span>
                  <blockquote className="text-[16px] text-text-body leading-relaxed italic mb-4">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>
                  <p className="text-[14px] font-bold text-navy">— {testimonial.author}</p>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>
      )}

      {/* Explore Other Locations */}
      <section className="py-16 lg:py-20 bg-cream">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="text-center mb-10">
            <SectionTag color="blue">Explore</SectionTag>
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-black text-navy mt-5 mb-4">Explore Other Locations</h2>
            <p className="text-[15px] text-text-muted">Find the perfect Laurus camp location for your family.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {siblingLocations.map((loc, i) => (
              <motion.div key={loc.slug} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                <Card accent={i % 3 === 0 ? "blue" : i % 3 === 1 ? "coral" : "mint"} delay={0}>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Icon name="map-pin" size={16} className="text-text-muted" />
                      <span className="text-[12px] font-semibold text-text-muted uppercase tracking-wide">{loc.region}</span>
                    </div>
                    <h3 className="text-[16px] font-bold text-navy mb-1">{loc.name}</h3>
                    {loc.venue && <p className="text-[13px] text-text-muted mb-1">{loc.venue}</p>}
                    <p className="text-[13px] font-semibold text-blue mb-3">{loc.dates}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-[14px] font-black text-coral">{loc.earlyBirdPrice}</span>
                      <Button href={`${basePath}/${loc.slug}`} variant="outline" size="sm" pill>
                        View Details
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button href={isSummer ? "/summer-camp" : "/spring-break"} variant="blue" size="md" pill>
              View All Locations
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 gradient-navy text-center">
        <div className="max-w-[700px] mx-auto px-6">
          <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-black text-white mb-4">
            Register for {location.name}
          </h2>
          <p className="text-[16px] text-white/60 mb-8">Spots are limited — secure your child&apos;s place today.</p>
          <Button href="https://app.amilia.com/store/en/laurus-summer-camp/shop/programs" external variant="coral" size="lg" pill>Register Now →</Button>
        </div>
      </section>
    </PageWrapper>
  );
}
