import PageWrapper from "@/components/PageWrapper";

export default function TermsPage() {
  return (
    <PageWrapper>
      <section className="gradient-hero py-16 lg:py-20">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h1 className="text-[clamp(2rem,4vw,3rem)] font-black text-navy mb-3">Terms & Conditions</h1>
          <p className="text-[15px] text-text-muted">Effective for 2026 Programs &middot; Governed by the Province of Quebec</p>
        </div>
      </section>
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="space-y-8 text-[15px] text-text-body leading-relaxed">
            <div>
              <h2 className="text-[20px] font-extrabold text-navy mb-3">1. Registration & Payment</h2>
              <p>Registration is completed through our Amilia platform. All fees include applicable GST/HST/QST. Payment is due at the time of registration. Dishonored payments are subject to a $25 fee.</p>
            </div>
            <div>
              <h2 className="text-[20px] font-extrabold text-navy mb-3">2. Cancellation Policy</h2>
              <p>Cancellations are subject to a $50 fee and are processed within 14 business days. To cancel, submit a Cancellation Request form on our Contact page. Refunds are issued minus the cancellation fee.</p>
            </div>
            <div>
              <h2 className="text-[20px] font-extrabold text-navy mb-3">3. Customer Responsibilities</h2>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>Provide accurate registration information</li>
                <li>Disclose any medical conditions or special needs</li>
                <li>Ensure on-time pick-up (extended care fees apply for late pick-ups)</li>
                <li>Provide emergency medical authorization</li>
                <li>Communicate dietary restrictions and allergies</li>
              </ul>
            </div>
            <div>
              <h2 className="text-[20px] font-extrabold text-navy mb-3">4. Company Responsibilities</h2>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>Maintain safe environments at all locations</li>
                <li>Employ qualified, background-checked, CPR/First Aid certified staff</li>
                <li>Deliver programs as described</li>
                <li>Respond to emergencies with established protocols</li>
                <li>Issue RL-24 tax receipts for eligible fees</li>
              </ul>
            </div>
            <div>
              <h2 className="text-[20px] font-extrabold text-navy mb-3">5. Behavioral Standards</h2>
              <p>Children are expected to follow camp rules and treat others with respect. Prohibited items include weapons, drugs, alcohol, and dangerous objects. Behavioral issues may result in parent contact and, in extreme cases, dismissal from the program.</p>
            </div>
            <div>
              <h2 className="text-[20px] font-extrabold text-navy mb-3">6. Photo & Media</h2>
              <p>By default, permission is granted for photos and videos used in marketing materials. Opt-out is available via the Photo & Media Opt-Out form on our Contact page. Photos may be used on our website, social media, print materials, and promotional content.</p>
            </div>
            <div>
              <h2 className="text-[20px] font-extrabold text-navy mb-3">7. Tax Deductions</h2>
              <p>Camp fees are eligible for RL-24 provincial tax receipts. Receipts are issued automatically following program completion.</p>
            </div>
            <div>
              <h2 className="text-[20px] font-extrabold text-navy mb-3">8. Governing Law</h2>
              <p>These terms are governed by the laws of the Province of Quebec, Canada. Any disputes shall be resolved in the courts of Quebec.</p>
            </div>
            <div>
              <h2 className="text-[20px] font-extrabold text-navy mb-3">9. Contact</h2>
              <p>Laurus Events Inc.</p>
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
