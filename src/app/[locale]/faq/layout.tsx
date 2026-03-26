import type { Metadata } from "next";
import { getPageMetadata } from "@/lib/metadata";
import type { Locale } from "@/lib/i18n";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return getPageMetadata("faq", locale as Locale);
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
