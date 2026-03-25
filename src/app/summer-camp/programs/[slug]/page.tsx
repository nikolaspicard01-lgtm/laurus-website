"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import PageWrapper from "@/components/PageWrapper";
import PageHero from "@/components/PageHero";
import SectionTag from "@/components/SectionTag";
import Card from "@/components/Card";
import Button from "@/components/Button";
import type { IconName } from "@/components/Icon";

const programData: Record<string, {
  tag: string; tagColor: "blue" | "coral" | "sunshine" | "mint";
  title: React.ReactNode; subtitle: string; ages: string;
  features: { icon: IconName; title: string; desc: string; accent: "blue" | "coral" | "sunshine" | "mint" | "violet" }[];
  activities: string[]; highlights: string[];
}> = {
  junior: {
    tag: "Ages 3–4", tagColor: "blue",
    title: <>The <span className="hl-blue">Junior Camp</span> Experience</>,
    subtitle: "A nurturing introduction to camp life with play-based learning, sensory exploration, and gentle social development. Potty training not required.",
    ages: "Ages 3–4",
    features: [
      { icon: "gamepad", title: "Sensory Play", desc: "Hands-on exploration through textures, colours, sounds, and movement.", accent: "blue" },
      { icon: "music", title: "Music & Movement", desc: "Songs, dance, rhythm activities that develop coordination and joy.", accent: "coral" },
      { icon: "sprout", title: "Nature Exploration", desc: "Outdoor adventures discovering plants, insects, weather, and seasons.", accent: "mint" },
      { icon: "palette", title: "Arts & Crafts", desc: "Creative expression through painting, drawing, sculpting, and crafting.", accent: "sunshine" },
    ],
    activities: ["Team Sports", "Music & Movement", "Obstacle Courses", "Nature Exploration", "Arts & Crafts", "Storytime & Play", "Sensory Play"],
    highlights: ["Low staff-to-camper ratios", "Potty training NOT required", "Rest time included", "Gentle, nurturing environment", "Play-based learning approach"],
  },
  youth: {
    tag: "Ages 5–11", tagColor: "coral",
    title: <>The <span className="hl-coral">Youth Program</span></>,
    subtitle: "The core camp experience built around Specific Training Activities (STAs). Kids choose activities weekly and can switch every week.",
    ages: "Ages 5–11",
    features: [
      { icon: "bot", title: "Robotics & Coding", desc: "Build, program, and problem-solve with age-appropriate technology.", accent: "blue" },
      { icon: "music", title: "Performing Arts", desc: "Dance, drama, music — express creativity and build confidence on stage.", accent: "coral" },
      { icon: "dumbbell", title: "Sports Clinics", desc: "Multi-sport training, soccer skills, team games, and fitness challenges.", accent: "mint" },
      { icon: "palette", title: "Visual Arts", desc: "Drawing, painting, sculpture — explore different mediums and techniques.", accent: "sunshine" },
    ],
    activities: ["Robotics", "Dance", "Multi-Sport", "Cooking", "Coding", "Languages", "Science", "Visual Arts", "Soccer", "Drama", "Music"],
    highlights: ["Choose different STAs weekly", "Age and interest-based grouping", "Social skills & teamwork focus", "75-minute expert-led sessions", "Switch activities every week"],
  },
  leadership: {
    tag: "Ages 12–14", tagColor: "sunshine",
    title: <>The <span className="hl-sunshine">Leadership Program</span></>,
    subtitle: "Develop real-world leadership skills through team challenges, community service, entrepreneurship workshops, and guided mentorship.",
    ages: "Ages 12–14",
    features: [
      { icon: "lightbulb", title: "Entrepreneurship", desc: "Learn business basics, pitch ideas, and develop problem-solving skills.", accent: "sunshine" },
      { icon: "handshake", title: "Team Building", desc: "Collaborative challenges that build trust, communication, and empathy.", accent: "blue" },
      { icon: "mic", title: "Guest Speakers", desc: "Inspiring talks from community leaders, entrepreneurs, and professionals.", accent: "coral" },
      { icon: "heart", title: "Volunteering", desc: "Service projects and fundraisers that develop empathy and civic responsibility.", accent: "mint" },
    ],
    activities: ["Entrepreneurship", "Team Sports & Fitness", "Fundraisers", "Guest Speakers", "Volunteering", "Problem-Solving Challenges", "Career Planning", "Service Projects"],
    highlights: ["Regular mentorship sessions", "Confidence building focus", "Real-world skill development", "Traditional camp + leadership", "Peer mentoring opportunities"],
  },
  cit: {
    tag: "Age 15+", tagColor: "mint",
    title: <>The <span className="hl-blue">C.I.T. Program</span></>,
    subtitle: "Counselor-in-Training professional development. Shadow, assist, and lead — building career-ready skills with a recognized completion certificate.",
    ages: "Age 15+",
    features: [
      { icon: "clipboard", title: "Activity Planning", desc: "Learn to design, organize, and lead engaging activities for younger campers.", accent: "blue" },
      { icon: "brain", title: "Conflict Resolution", desc: "Develop skills in mediation, de-escalation, and positive communication.", accent: "coral" },
      { icon: "target", title: "Mentorship", desc: "Guided reflections and one-on-one mentoring from experienced counselors.", accent: "sunshine" },
      { icon: "cross", title: "First Aid Basics", desc: "Learn essential first aid skills and emergency response fundamentals.", accent: "mint" },
    ],
    activities: ["Conflict Resolution", "Creative Problem-Solving", "Activity Planning", "Mentorship", "Guided Reflections", "First Aid Basics", "Leadership Workshops"],
    highlights: ["Shadow → Assist → Lead model", "Recognized completion certificate", "Valuable for college applications", "Real hands-on experience", "Professional development focus"],
  },
};

export default function ProgramDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const program = programData[slug];

  if (!program) {
    return (
      <PageWrapper>
        <div className="py-40 text-center">
          <h1 className="text-2xl font-bold text-navy">Program not found</h1>
          <Button href="/summer-camp" variant="blue" className="mt-4">← Back to Summer Camp</Button>
        </div>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <PageHero tag={program.tag} tagColor={program.tagColor} title={program.title} subtitle={program.subtitle}
        ctaText="Register Now" ctaHref="https://app.amilia.com/store/en/laurus-summer-camp/shop/programs" ctaExternal
        secondaryCtaText="← All Programs" secondaryCtaHref="/summer-camp" />

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1320px] mx-auto px-6">
          <div className="text-center mb-14">
            <SectionTag color={program.tagColor}>Key Features</SectionTag>
            <motion.h2 initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-black text-navy mt-5 mb-4">What Makes It Special</motion.h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {program.features.map((f, i) => (
              <Card key={f.title} accent={f.accent} icon={f.icon} delay={i * 0.1}>
                <h3 className="text-[17px] font-extrabold text-navy mb-2">{f.title}</h3>
                <p className="text-[14px] text-text-body leading-relaxed">{f.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-cream">
        <div className="max-w-[900px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-[20px] font-extrabold text-navy mb-5">Activities</h3>
              <div className="flex flex-wrap gap-2">
                {program.activities.map((a) => (
                  <span key={a} className="text-[13px] font-bold text-blue bg-blue/6 px-4 py-2 rounded-full border border-blue/15">{a}</span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-[20px] font-extrabold text-navy mb-5">Highlights</h3>
              <ul className="space-y-3">
                {program.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3 text-[14px] text-text-body">
                    <span className="w-5 h-5 rounded-full bg-mint/15 flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-mint-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                    </span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 gradient-navy text-center">
        <div className="max-w-[700px] mx-auto px-6">
          <h2 className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-black text-white mb-4">Ready to Enroll?</h2>
          <p className="text-[16px] text-white/60 mb-8">Secure your child&apos;s spot in the {program.ages} program today.</p>
          <Button href="https://app.amilia.com/store/en/laurus-summer-camp/shop/programs" external variant="coral" size="lg" pill>Register Now →</Button>
        </div>
      </section>
    </PageWrapper>
  );
}
