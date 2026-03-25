import { notFound } from "next/navigation";
import { springLocations } from "@/data/locations";
import LocationPageContent from "@/components/LocationPageContent";

export function generateStaticParams() {
  return springLocations.map((loc) => ({ slug: loc.slug }));
}

export default async function SpringLocationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const location = springLocations.find((l) => l.slug === slug);
  if (!location) notFound();
  return <LocationPageContent location={location} type="spring" />;
}
