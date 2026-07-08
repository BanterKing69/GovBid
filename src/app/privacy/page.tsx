import type { Metadata } from "next";
import { LegalHeader } from "@/components/LegalHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Privacy Policy | GovBid",
  description:
    "How GovBid UK Limited collects, uses, stores and protects your personal data under UK GDPR and the Data Protection Act 2018.",
};

export default function PrivacyPage() {
  return (
    <>
      <LegalHeader />
      <main id="main" className="max-w-3xl mx-auto px-6 py-16 md:py-20">
        <h1 className="text-[32px] md:text-[40px] font-heading font-bold text-charcoal leading-tight mb-2">
          Privacy Policy
        </h1>
        <p className="text-grey text-sm mb-10">
          GovBid UK Limited · Effective date: 8 July 2026
        </p>

        <div className="legal-prose">
          <h2>1. Introduction</h2>
          <p>
            This Privacy Policy explains how GovBid UK Limited (“GovBid”, “we”, “us” or “our”) collects, uses, stores and protects your personal data when you visit our website, contact us, subscribe to our communications, or use our services. It also explains your rights under UK data protection law and how the law protects you.
          </p>
          <p>
            We are committed to protecting your privacy and handling your personal data in a transparent and lawful manner. We are the “controller” responsible for your personal data under the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
          </p>
          <p>
            We operate only within the United Kingdom and this policy is governed by the laws of England and Wales.
          </p>

          <h2>2. Who we are and how to contact us</h2>
          <p>
            <strong>Company:</strong> GovBid UK Limited<br />
            <strong>Registered address:</strong> 123 Great Portland Street, London, W1W 6QB, United Kingdom<br />
            <strong>Contact for privacy matters:</strong> <a href="mailto:hello@govbid.co.uk">hello@govbid.co.uk</a>
          </p>
          <p>
            If you have any questions about this policy or wish to exercise any of your rights, please contact us using the email address above.
          </p>

          <h2>3. The personal data we collect</h2>
          <p>We may collect, use, store and transfer the following categories of personal data about you:</p>
          <ul>
            <li><strong>Identity data</strong> – your name, job title and the organisation you represent.</li>
            <li><strong>Contact data</strong> – your email address, telephone number, business address and other contact details.</li>
            <li><strong>Enquiry and engagement data</strong> – information you provide when you contact us, request a quote, or engage our services, including details relevant to bids and tenders you ask us to support.</li>
            <li><strong>Marketing and communications data</strong> – your preferences in receiving marketing from us and your communication preferences.</li>
            <li><strong>Technical and usage data</strong> – your internet protocol (IP) address, browser type and version, and information about how you use our website, collected through cookies and similar technologies.</li>
          </ul>
          <p>
            We do not intentionally collect any special categories of personal data (such as data about your health, race, religion or political opinions), and we ask that you do not provide such data to us unless strictly necessary.
          </p>

          <h2>4. How we collect your personal data</h2>
          <p>We collect personal data through the following means:</p>
          <ul>
            <li><strong>Directly from you</strong> – when you complete a form on our website, email or telephone us, subscribe to our newsletter, or engage our services.</li>
            <li><strong>Automated technologies</strong> – as you interact with our website, we may automatically collect technical data using cookies and similar technologies. See the Cookies section below.</li>
            <li><strong>Third parties or publicly available sources</strong> – we may occasionally obtain business contact information from publicly available sources such as company websites or public procurement records.</li>
          </ul>

          <h2>5. How we use your personal data and our lawful bases</h2>
          <p>
            Under UK data protection law, we must have a lawful basis for processing your personal data. The table below sets out the purposes for which we process your data and the lawful bases we rely on.
          </p>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Purpose</th>
                  <th>Type of data</th>
                  <th>Lawful basis</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Responding to your enquiries and requests</td>
                  <td>Identity, contact, enquiry</td>
                  <td>Legitimate interests (to respond to and assist prospective and existing clients)</td>
                </tr>
                <tr>
                  <td>Providing our bid intelligence, bid writing and consultancy services</td>
                  <td>Identity, contact, engagement</td>
                  <td>Performance of a contract with you</td>
                </tr>
                <tr>
                  <td>Sending newsletters and marketing communications</td>
                  <td>Contact, marketing</td>
                  <td>Consent</td>
                </tr>
                <tr>
                  <td>Administering and improving our website and services</td>
                  <td>Technical, usage</td>
                  <td>Legitimate interests (to keep our website secure and improve it)</td>
                </tr>
                <tr>
                  <td>Managing payments, invoicing and keeping business records</td>
                  <td>Identity, contact, engagement</td>
                  <td>Performance of a contract and compliance with a legal obligation</td>
                </tr>
                <tr>
                  <td>Complying with legal and regulatory obligations</td>
                  <td>As relevant</td>
                  <td>Legal obligation</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            Where we rely on legitimate interests, we have assessed that our interests are not overridden by your interests, rights or freedoms. Where we rely on consent, you can withdraw it at any time.
          </p>

          <h2>6. Marketing communications</h2>
          <p>
            We send newsletters and marketing emails only where you have consented to receive them, or where you are an existing client and the communication relates to similar services and you have not opted out.
          </p>
          <p>
            You can opt out of marketing communications at any time by clicking the “unsubscribe” link in any email, or by contacting us at <a href="mailto:hello@govbid.co.uk">hello@govbid.co.uk</a>. Opting out of marketing will not affect any communications we send you in relation to a service you have engaged us to provide.
          </p>

          <h2>7. Cookies</h2>
          <p>
            Our website uses cookies and similar technologies to help it function correctly and to understand how visitors use it. Cookies are small text files placed on your device. You can set your browser to refuse some or all cookies, or to alert you when websites set or access cookies. If you disable or refuse cookies, some parts of our website may become inaccessible or not function properly.
          </p>

          <h2>8. How we share your personal data</h2>
          <p>We do not sell your personal data. We may share your personal data with:</p>
          <ul>
            <li><strong>Service providers</strong> – trusted third parties who provide IT, hosting, email delivery, customer relationship management and similar services on our behalf, acting as our processors under written contracts.</li>
            <li><strong>Professional advisers</strong> – including accountants, lawyers and insurers where necessary.</li>
            <li><strong>Regulators and authorities</strong> – where we are required to do so by law or to protect our rights.</li>
          </ul>
          <p>
            We require all third parties to respect the security of your personal data and to treat it in accordance with the law. They may only process your personal data for specified purposes and in accordance with our instructions.
          </p>

          <h2>9. International transfers</h2>
          <p>
            We are a UK-based business and store personal data within the United Kingdom wherever possible. Some of our service providers may process data outside the UK. Where this occurs, we ensure a similar degree of protection is afforded to your data by relying on an approved adequacy regulation or the UK’s International Data Transfer Agreement (or equivalent safeguards).
          </p>

          <h2>10. Data security</h2>
          <p>
            We have put in place appropriate technical and organisational measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed. We limit access to your personal data to those who have a business need to know. We also have procedures in place to deal with any suspected personal data breach and will notify you and any applicable regulator of a breach where we are legally required to do so.
          </p>

          <h2>11. Data retention</h2>
          <p>
            We will only retain your personal data for as long as necessary to fulfil the purposes for which we collected it, including to satisfy any legal, accounting or reporting requirements. Where we process data on the basis of consent, we retain it until you withdraw consent. Business and financial records are generally retained for at least six years to comply with legal obligations.
          </p>

          <h2>12. Your legal rights</h2>
          <p>Under UK data protection law, you have the following rights in relation to your personal data:</p>
          <ul>
            <li>The right to be informed about how we use your personal data.</li>
            <li>The right of access to a copy of the personal data we hold about you.</li>
            <li>The right to rectification of inaccurate or incomplete data.</li>
            <li>The right to erasure (“the right to be forgotten”) in certain circumstances.</li>
            <li>The right to restrict processing in certain circumstances.</li>
            <li>The right to data portability in certain circumstances.</li>
            <li>The right to object to processing based on legitimate interests or for direct marketing.</li>
            <li>The right to withdraw consent at any time where we rely on consent.</li>
          </ul>
          <p>
            You will not usually have to pay a fee to exercise your rights. We aim to respond to all legitimate requests within one month. To exercise any of these rights, please contact us at <a href="mailto:hello@govbid.co.uk">hello@govbid.co.uk</a>.
          </p>

          <h2>13. Children’s privacy</h2>
          <p>
            Our website and services are intended for businesses and professionals and are not directed at children. We do not knowingly collect personal data from anyone under the age of 13. If you believe we may have collected data relating to a child, please contact us so that we can delete it.
          </p>

          <h2>14. Changes to this Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes will be posted on this page with a revised effective date. We encourage you to review this policy periodically to stay informed about how we protect your personal data.
          </p>

          <h2>15. Complaints</h2>
          <p>
            If you have any concerns about how we handle your personal data, we would ask that you contact us first so that we can try to resolve the matter. You also have the right to lodge a complaint with the Information Commissioner’s Office (ICO), the UK supervisory authority for data protection:
          </p>
          <p>
            Information Commissioner’s Office – <a href="https://www.ico.org.uk" target="_blank" rel="noopener noreferrer">www.ico.org.uk</a>  |  Helpline: 0303 123 1113
          </p>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
