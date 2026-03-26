import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { Nunito, DM_Sans } from "next/font/google";
import { isValidLocale, locales, type Locale } from "@/lib/i18n";
import { LocaleProvider } from "@/lib/LocaleContext";
import { getPageMetadata } from "@/lib/metadata";
import { LocalBusinessSchema } from "@/components/JsonLd";

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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0A1E3D",
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return getPageMetadata("home", locale as Locale);
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();

  return (
    <html lang={locale} className={`h-full antialiased ${nunito.variable} ${dmSans.variable}`}>
      <head>
        <link rel="preconnect" href="https://app.amilia.com" />
        <link rel="dns-prefetch" href="https://app.amilia.com" />
        <LocalBusinessSchema />
      </head>
      <body className="min-h-full flex flex-col">
        <LocaleProvider locale={locale as Locale}>
          {children}
        </LocaleProvider>
      </body>
    </html>
  );
}
