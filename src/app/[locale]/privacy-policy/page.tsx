import PageWrapper from "@/components/PageWrapper";

export default function PrivacyPolicyPage() {
  return (
    <PageWrapper>
      <section className="gradient-hero py-16 lg:py-20">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h1 className="text-[clamp(2rem,4vw,3rem)] font-black text-navy mb-3">Privacy Policy</h1>
          <p className="text-[15px] text-text-muted">Effective: June 22, 2024 &middot; Last Updated: December 1, 2025</p>
        </div>
      </section>
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-[800px] mx-auto px-6 prose prose-slate max-w-none">
          <div className="space-y-8 text-[15px] text-text-body leading-relaxed">
            <div>
              <h2 className="text-[20px] font-extrabold text-navy mb-3">1. Information We Collect</h2>
              <p>We collect personal information that you provide during registration and interaction with our services, including: names, contact information, emergency contacts, medical information, payment details, and child-specific information necessary for program participation.</p>
              <p className="mt-3">We also automatically collect certain data through cookies and similar technologies, including browser type, IP address, and usage patterns.</p>
            </div>
            <div>
              <h2 className="text-[20px] font-extrabold text-navy mb-3">2. How We Use Information</h2>
              <p>Your information is used for: registration and payment processing, program communication, safety and emergency response, service improvement, and marketing communications (with consent). We use your data to provide the best possible camp experience and ensure your child&apos;s safety.</p>
            </div>
            <div>
              <h2 className="text-[20px] font-extrabold text-navy mb-3">3. Data Sharing</h2>
              <p><strong>We do not sell your personal data.</strong> We share information only with service providers necessary for operations (payment processors, scheduling platforms, our inclusive support partner NDR), and only to the extent required for service delivery.</p>
            </div>
            <div>
              <h2 className="text-[20px] font-extrabold text-navy mb-3">4. Data Security</h2>
              <p>We protect your data using SSL/TLS encryption, access controls, and regular security audits. While no system is 100% secure, we take reasonable measures to protect your personal information.</p>
            </div>
            <div>
              <h2 className="text-[20px] font-extrabold text-navy mb-3">5. Children&apos;s Privacy</h2>
              <p>We apply extra safeguards for children&apos;s data. Parental consent is required for all child information collection. Children&apos;s data is used solely for program participation and safety.</p>
            </div>
            <div>
              <h2 className="text-[20px] font-extrabold text-navy mb-3">6. Your Rights</h2>
              <p>You have the right to: access your personal data, request corrections, request deletion, and withdraw consent for marketing communications. To exercise these rights, contact us at <a href="mailto:info@laurussummercamp.com" className="text-blue hover:underline">info@laurussummercamp.com</a> or call <a href="tel:+15146000504" className="text-blue hover:underline">(514) 600-0504</a>.</p>
            </div>
            <div>
              <h2 className="text-[20px] font-extrabold text-navy mb-3">7. Contact</h2>
              <p>For privacy inquiries, contact Laurus Events Inc. at:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Email: <a href="mailto:info@laurussummercamp.com" className="text-blue hover:underline">info@laurussummercamp.com</a></li>
                <li>Phone: <a href="tel:+15146000504" className="text-blue hover:underline">(514) 600-0504</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
