import type { Metadata } from "next";
import { Nunito, DM_Sans } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Laurus Summer Camp | Best Bilingual Summer Camp in Montreal",
  description:
    "Empower your child through fun and learning at Laurus Summer Camp. Bilingual day camps across 17+ locations in Montreal, Quebec & Ontario for ages 3-15.",
  keywords: [
    "summer camp montreal",
    "bilingual summer camp",
    "day camp quebec",
    "kids camp",
    "spring break camp",
    "french immersion camp",
    "laurus summer camp",
  ],
  openGraph: {
    title: "Laurus Summer Camp | Best Bilingual Summer Camp in Montreal",
    description:
      "Empower your child through fun and learning at Laurus Summer Camp. 17+ locations, ages 3-15.",
    type: "website",
    siteName: "Laurus Summer Camp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
