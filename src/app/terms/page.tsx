import type { Metadata } from "next";
import Link from "next/link";
import { LegalHeader } from "@/components/LegalHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Website Terms and Conditions | GovBid",
  description:
    "The terms and conditions governing your access to and use of the GovBid UK Limited website.",
};

export default function TermsPage() {
  return (
    <>
      <LegalHeader />
      <main id="main" className="max-w-3xl mx-auto px-6 py-16 md:py-20">
        <h1 className="text-[32px] md:text-[40px] font-heading font-bold text-charcoal leading-tight mb-2">
          Website Terms and Conditions
        </h1>
        <p className="text-grey text-sm mb-10">
          GovBid UK Limited · Effective date: 8 July 2026
        </p>

        <div className="legal-prose">
          <h2>1. About these terms</h2>
          <p>
            These terms and conditions (“Terms”) govern your access to and use of the website operated by GovBid UK Limited (“GovBid”, “we”, “us” or “our”) and any information or services made available through it. By accessing or using our website, you confirm that you accept these Terms and agree to comply with them. If you do not agree, you must not use our website.
          </p>

          <h2>2. Information about us</h2>
          <p>
            <strong>Company:</strong> GovBid UK Limited<br />
            <strong>Registered address:</strong> 123 Great Portland Street, London, W1W 6QB, United Kingdom<br />
            <strong>Contact:</strong> <a href="mailto:hello@govbid.co.uk">hello@govbid.co.uk</a>
          </p>

          <h2>3. Our services</h2>
          <p>
            GovBid is a specialist public sector growth partner. We help suppliers identify and qualify relevant government opportunities, prepare compliant tender submissions, and win more public sector business through our bid intelligence, bid writing and consultancy services.
          </p>
          <p>
            The information on our website is provided for general information only and does not constitute advice on which you should rely. Any specific services we provide to you will be governed by a separate written agreement, proposal or statement of work agreed between us. Where there is any conflict between these Terms and such an agreement, the terms of that agreement will prevail in respect of the services.
          </p>

          <h2>4. No guarantee of results</h2>
          <p>
            Public sector procurement outcomes depend on many factors outside our control, including the decisions of contracting authorities, competing bids, and information you provide to us. While we apply professional skill and care to every engagement, we do not and cannot guarantee that any bid or tender will be shortlisted, awarded, or successful. Nothing on our website or in our communications should be taken as a promise or warranty of any particular result.
          </p>

          <h2>5. Fees and payment</h2>
          <p>
            Fees for our services are set out in the proposal or statement of work agreed with you. Unless otherwise stated, our fees are exclusive of VAT, which will be added where applicable.
          </p>
          <p>
            We do not accept payments online through this website. All fees are invoiced and payable by bank transfer (BACS) to the account details provided on our invoice. Unless otherwise agreed in writing, invoices are payable within the period stated on the invoice. We reserve the right to charge interest on overdue amounts in accordance with the Late Payment of Commercial Debts (Interest) Act 1998.
          </p>

          <h2>6. Accessing our website</h2>
          <p>
            Our website is made available free of charge. We do not guarantee that our website, or any content on it, will always be available or be uninterrupted. We may suspend, withdraw or restrict the availability of all or any part of our website for business and operational reasons. We will try to give reasonable notice of any suspension or withdrawal.
          </p>

          <h2>7. Intellectual property rights</h2>
          <p>
            We are the owner or licensee of all intellectual property rights in our website and the material published on it, including text, graphics, logos and design. These works are protected by copyright and other laws. You may print or download extracts for your own personal, non-commercial reference. You must not reproduce, distribute, modify or commercially exploit any content from our website without our prior written permission.
          </p>

          <h2>8. Acceptable use</h2>
          <p>You may use our website only for lawful purposes. You must not:</p>
          <ul>
            <li>Use our website in any way that breaches any applicable law or regulation.</li>
            <li>Use our website to transmit any unsolicited or unauthorised advertising or any harmful or malicious material.</li>
            <li>Attempt to gain unauthorised access to, interfere with, damage or disrupt our website, the server on which it is stored, or any connected database or equipment.</li>
          </ul>
          <p>
            We may prevent or suspend your access to our website if you fail to comply with these Terms or any applicable law.
          </p>

          <h2>9. Third-party links</h2>
          <p>
            Where our website contains links to other sites and resources provided by third parties, these links are provided for your information only. We have no control over the contents of those sites or resources and accept no responsibility for them or for any loss or damage that may arise from your use of them.
          </p>

          <h2>10. Our liability</h2>
          <p>
            Nothing in these Terms excludes or limits our liability where it would be unlawful to do so, including liability for death or personal injury caused by our negligence or for fraud or fraudulent misrepresentation.
          </p>
          <p>
            Subject to the above, we exclude all implied conditions, warranties, representations or other terms that may apply to our website or any content on it. We will not be liable to you for any loss or damage, whether in contract, tort (including negligence), breach of statutory duty, or otherwise, that is not foreseeable, or for any loss of profit, loss of business, business interruption, or loss of business opportunity arising from your use of, or inability to use, our website. This clause does not affect the terms of any separate services agreement between us, which will set out the liability position in relation to our services.
          </p>

          <h2>11. Data protection</h2>
          <p>
            We take your privacy seriously. Any personal data we collect through our website or in the course of providing our services is handled in accordance with our <Link href="/privacy">Privacy Policy</Link>, which forms part of these Terms.
          </p>

          <h2>12. Events outside our control</h2>
          <p>
            We will not be liable or responsible for any failure to perform, or delay in performance of, any of our obligations that is caused by any act or event beyond our reasonable control.
          </p>

          <h2>13. Changes to these Terms and our website</h2>
          <p>
            We may revise these Terms at any time by amending this page. Please check this page from time to time to take notice of any changes, as they are binding on you. We may also update and change our website from time to time to reflect changes to our services and our users’ needs.
          </p>

          <h2>14. Governing law and jurisdiction</h2>
          <p>
            These Terms, their subject matter and formation are governed by the laws of England and Wales. You and we both agree that the courts of England and Wales will have exclusive jurisdiction over any dispute or claim arising out of or in connection with them.
          </p>

          <h2>15. Contact us</h2>
          <p>
            If you have any questions about these Terms, please contact us at <a href="mailto:hello@govbid.co.uk">hello@govbid.co.uk</a>.
          </p>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
