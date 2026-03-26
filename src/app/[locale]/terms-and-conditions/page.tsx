"use client";

import PageWrapper from "@/components/PageWrapper";
import { useLocale } from "@/lib/LocaleContext";

export default function TermsPage() {
  const { dict } = useLocale();

  return (
    <PageWrapper>
      <section className="gradient-hero py-16 lg:py-20">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h1 className="text-[clamp(2rem,4vw,3rem)] font-black text-navy mb-3">{dict.termsConditions.title}</h1>
          <p className="text-[15px] text-text-muted">{dict.termsConditions.subtitle}</p>
        </div>
      </section>
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="space-y-8 text-[15px] text-text-body leading-relaxed">
            <div>
              <h2 className="text-[20px] font-extrabold text-navy mb-3">{dict.termsConditions.section1Title}</h2>
              <p>{dict.termsConditions.section1Body}</p>
            </div>
            <div>
              <h2 className="text-[20px] font-extrabold text-navy mb-3">{dict.termsConditions.section2Title}</h2>
              <p>{dict.termsConditions.section2Body}</p>
            </div>
            <div>
              <h2 className="text-[20px] font-extrabold text-navy mb-3">{dict.termsConditions.section3Title}</h2>
              <p>{dict.termsConditions.section3Body}</p>
            </div>
            <div>
              <h2 className="text-[20px] font-extrabold text-navy mb-3">{dict.termsConditions.section4Title}</h2>
              <p>{dict.termsConditions.section4Body}</p>
            </div>
            <div>
              <h2 className="text-[20px] font-extrabold text-navy mb-3">{dict.termsConditions.section5Title}</h2>
              <p>{dict.termsConditions.section5Body}</p>
            </div>
            <div>
              <h2 className="text-[20px] font-extrabold text-navy mb-3">{dict.termsConditions.section6Title}</h2>
              <p>{dict.termsConditions.section6Body}</p>
            </div>
            <div>
              <h2 className="text-[20px] font-extrabold text-navy mb-3">{dict.termsConditions.section7Title}</h2>
              <p>{dict.termsConditions.section7Body}</p>
            </div>
            <div>
              <h2 className="text-[20px] font-extrabold text-navy mb-3">{dict.termsConditions.section8Title}</h2>
              <p>{dict.termsConditions.section8Body}</p>
            </div>
            <div>
              <h2 className="text-[20px] font-extrabold text-navy mb-3">{dict.termsConditions.section9Title}</h2>
              <p>{dict.termsConditions.section9Body}</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Email: <a href="mailto:info@laurussummercamp.com" className="text-blue hover:underline">info@laurussummercamp.com</a></li>
                <li>Phone: <a href="tel:+15146000504" className="text-blue hover:underline">(514) 600-0504</a></li>
                <li>Website: laurussummercamp.com</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
