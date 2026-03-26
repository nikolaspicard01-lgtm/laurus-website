import type { Metadata } from "next";
import type { Locale } from "./i18n";

interface PageMeta {
  en: { title: string; description: string };
  fr: { title: string; description: string };
}

const pages: Record<string, PageMeta> = {
  home: {
    en: { title: "Laurus Summer Camp | Best Bilingual Summer Camp in Montreal", description: "Empower your child through fun and learning. Bilingual day camps across 17+ locations in Montreal, Quebec & Ontario for ages 3-15." },
    fr: { title: "Laurus Camp d'été | Meilleur camp d'été bilingue à Montréal", description: "Enrichissez votre enfant par le plaisir et l'apprentissage. Camps de jour bilingues dans 17+ emplacements à Montréal, Québec et Ontario pour les 3-15 ans." },
  },
  "summer-camp": {
    en: { title: "Summer Camp | Laurus Summer Camp", description: "Give your child the best summer ever. 11+ activities, 17+ locations, ages 3-15. Bilingual day camp across Montreal and Ontario." },
    fr: { title: "Camp d'été | Laurus Camp d'été", description: "Offrez à votre enfant le meilleur été. 11+ activités, 17+ emplacements, 3-15 ans. Camp de jour bilingue à Montréal et en Ontario." },
  },
  "spring-break": {
    en: { title: "Spring Break Camp | Laurus Summer Camp", description: "Action-packed March Break day camps across Quebec and Ontario. Same great activities, one power-packed week for ages 3-15." },
    fr: { title: "Camp de la relâche | Laurus Camp d'été", description: "Camps de jour de la relâche scolaire au Québec et en Ontario. Activités incroyables condensées en une semaine dynamique pour les 3-15 ans." },
  },
  tutoring: {
    en: { title: "Bilingual Tutoring | Laurus Summer Camp", description: "One-on-one and small-group academic support in Math, English, French & Science. In-person and virtual options for ages 5-17." },
    fr: { title: "Tutorat bilingue | Laurus Camp d'été", description: "Soutien académique individuel et en petit groupe en maths, anglais, français et sciences. Options en personne et virtuelles pour les 5-17 ans." },
  },
  "extra-curriculars": {
    en: { title: "Extra-Curriculars | Laurus Summer Camp", description: "Year-round enrichment: PED Day Camps, After-School programs, Reading Week, and Themed Break activities for kids 3-15." },
    fr: { title: "Parascolaires | Laurus Camp d'été", description: "Enrichissement toute l'année: camps journées pédagogiques, programmes parascolaires, semaine de lecture et activités thématiques pour les 3-15 ans." },
  },
  languages: {
    en: { title: "Languages Camp — ESL & FSL Immersion | Laurus Summer Camp", description: "Bilingual English & French immersion day camp in Montreal. Native speakers, certified instructors, beginner-friendly for ages 3-15." },
    fr: { title: "Camp de langues — Immersion ALS et FLS | Laurus Camp d'été", description: "Camp de jour d'immersion bilingue anglais et français à Montréal. Locuteurs natifs, instructeurs certifiés, adapté aux débutants pour les 3-15 ans." },
  },
  "inclusive-support": {
    en: { title: "Inclusive Support | Laurus Summer Camp", description: "Clinician-led inclusive support for neurodivergent campers through our NDR partnership. Every child belongs at Laurus." },
    fr: { title: "Soutien inclusif | Laurus Camp d'été", description: "Soutien inclusif dirigé par des cliniciens pour les campeurs neurodivergents grâce à notre partenariat NDR. Chaque enfant a sa place chez Laurus." },
  },
  events: {
    en: { title: "School Events | Laurus Summer Camp", description: "Custom school events: carnival days, field days, talent shows, seasonal festivals, and educational workshops. Fully customizable packages." },
    fr: { title: "Événements scolaires | Laurus Camp d'été", description: "Événements scolaires sur mesure: journées carnaval, journées sportives, spectacles de talents, festivals saisonniers et ateliers éducatifs." },
  },
  "school-partnerships": {
    en: { title: "School Partnerships | Laurus Summer Camp", description: "Turnkey enrichment programming for schools. Camps, tutoring, extra-curriculars, and events. 50+ schools already trust us." },
    fr: { title: "Partenariats scolaires | Laurus Camp d'été", description: "Programmation d'enrichissement clé en main pour les écoles. Camps, tutorat, parascolaires et événements. 50+ écoles nous font confiance." },
  },
  about: {
    en: { title: "About Us | Laurus Summer Camp", description: "Learn about Laurus Lifestyles — empowering children and families through high-quality educational programs since 2015. 2,000+ kids served annually." },
    fr: { title: "À propos | Laurus Camp d'été", description: "Découvrez Laurus Lifestyles — enrichir les enfants et les familles par des programmes éducatifs de qualité depuis 2015. 2 000+ enfants servis annuellement." },
  },
  contact: {
    en: { title: "Contact Us | Laurus Summer Camp", description: "Get in touch with Laurus Summer Camp. Phone: (514) 600-0504. Email: info@laurussummercamp.com. Mon-Sun, 9AM-5PM." },
    fr: { title: "Contactez-nous | Laurus Camp d'été", description: "Communiquez avec Laurus Camp d'été. Téléphone: (514) 600-0504. Courriel: info@laurussummercamp.com. Lun-Dim, 9h-17h." },
  },
  faq: {
    en: { title: "FAQ | Laurus Summer Camp", description: "Answers to common questions about summer camp, spring break, tutoring, extra-curriculars, and more." },
    fr: { title: "FAQ | Laurus Camp d'été", description: "Réponses aux questions fréquentes sur le camp d'été, la relâche, le tutorat, les parascolaires et plus." },
  },
  partners: {
    en: { title: "Partners | Laurus Summer Camp", description: "Our trusted partners: Agendrix, Neurodiverse Resource (NDR), ICTC-CTIC, and Les Petits Chefs." },
    fr: { title: "Partenaires | Laurus Camp d'été", description: "Nos partenaires de confiance: Agendrix, Neurodiverse Resource (NDR), ICTC-CTIC et Les Petits Chefs." },
  },
  blog: {
    en: { title: "Blog | Laurus Summer Camp", description: "Tips, insights, and stories about camp life, child development, and making the most of every season." },
    fr: { title: "Blogue | Laurus Camp d'été", description: "Conseils, perspectives et histoires sur la vie au camp, le développement de l'enfant et comment profiter de chaque saison." },
  },
  "privacy-policy": {
    en: { title: "Privacy Policy | Laurus Summer Camp", description: "Laurus Events Inc. privacy policy. How we collect, use, and protect your personal information." },
    fr: { title: "Politique de confidentialité | Laurus Camp d'été", description: "Politique de confidentialité de Laurus Events Inc. Comment nous recueillons, utilisons et protégeons vos renseignements personnels." },
  },
  "terms-and-conditions": {
    en: { title: "Terms & Conditions | Laurus Summer Camp", description: "Terms and conditions for Laurus Summer Camp programs. Registration, cancellation, policies, and more." },
    fr: { title: "Conditions d'utilisation | Laurus Camp d'été", description: "Conditions d'utilisation des programmes Laurus Camp d'été. Inscription, annulation, politiques et plus." },
  },
};

export function getPageMetadata(page: string, locale: Locale): Metadata {
  const meta = pages[page];
  if (!meta) {
    return {
      title: locale === "fr" ? "Laurus Camp d'été" : "Laurus Summer Camp",
    };
  }
  const t = meta[locale];
  return {
    title: t.title,
    description: t.description,
    openGraph: {
      title: t.title,
      description: t.description,
      locale: locale === "fr" ? "fr_CA" : "en_CA",
      siteName: locale === "fr" ? "Laurus Camp d'été" : "Laurus Summer Camp",
    },
    alternates: {
      languages: {
        en: `/en/${page === "home" ? "" : page}`,
        fr: `/fr/${page === "home" ? "" : page}`,
      },
    },
  };
}
