export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Laurus Summer Camp",
    alternateName: "Laurus Events Inc.",
    description:
      "Best bilingual summer camp in Montreal offering sports, arts, STEM, languages, and leadership programs for ages 3-15+ across 18 locations.",
    url: "https://laurussummercamp.com",
    telephone: "+1-514-600-0504",
    email: "info@laurussummercamp.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Montreal",
      addressRegion: "QC",
      addressCountry: "CA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 45.5017,
      longitude: -73.5673,
    },
    openingHours: "Mo-Su 09:00-17:00",
    priceRange: "$$",
    sameAs: [
      "https://www.facebook.com/laurussummercamp",
      "https://www.instagram.com/laurussummercamp",
    ],
    image: "https://laurussummercamp.com/og-image.jpg",
    areaServed: [
      { "@type": "City", name: "Montreal" },
      { "@type": "City", name: "Laval" },
      { "@type": "City", name: "Toronto" },
      { "@type": "City", name: "Ottawa" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Camp Programs",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Summer Camp" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Spring Break Camp" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Tutoring" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Extra-Curriculars" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Languages Camp" } },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FAQSchema({ items }: { items: { question: string; answer: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbSchema({ items }: { items: { name: string; url: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
