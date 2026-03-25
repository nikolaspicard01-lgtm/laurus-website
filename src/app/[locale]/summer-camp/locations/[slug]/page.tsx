import { notFound } from "next/navigation";
import { summerLocations } from "@/data/locations";
import LocationPageContent from "@/components/LocationPageContent";

export function generateStaticParams() {
  return summerLocations.map((loc) => ({ slug: loc.slug }));
}

export default async function SummerLocationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const location = summerLocations.find((l) => l.slug === slug);
  if (!location) notFound();
  return <LocationPageContent location={location} type="summer" />;
}
