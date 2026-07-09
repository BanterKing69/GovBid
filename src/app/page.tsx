"use client";

import { useEffect, useState } from "react";
import { calBooking } from "@/lib/cal";
import { SiteFooter } from "@/components/SiteFooter";

const FEATURES = [
  { title: "Daily tender intelligence", text: "Find a Tender + Contracts Finder + framework and DPS pipelines, filtered to your fit. Not a keyword-alert firehose; a human-checked shortlist.", icon: "search" },
  { title: "Win-rationale scoring", text: "Every match arrives with why you specifically can win it: product fit, geography, incumbent status, competition level.", icon: "check" },
  { title: "Compliant bid writing", text: "Responses structured against the buyer’s award criteria. You attest all facts; we handle structure, compliance and deadlines.", icon: "doc" },
  { title: "Aligned pricing", text: "Fixed fee per bid + success fee on award. If you don’t win, we don’t fully earn. We’ll share exact numbers on the call.", icon: "pound" },
];

const TENDERS = [
  { tag: "Furniture & Fitout", title: "Supply of office furniture for civic building refurbishment", value: "£120k–180k", deadline: "14 days" },
  { tag: "Engineering & Manufacturing", title: "Fabrication and supply of steel components for infrastructure project", value: "£250k–400k", deadline: "21 days" },
  { tag: "Textiles & PPE", title: "Supply of specialist workwear and PPE for NHS trust", value: "£80k–130k", deadline: "9 days" },
];

function FeatureIcon({ type }: { type: string }) {
  const paths: Record<string, string> = {
    search: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
    check: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
    doc: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
    pound: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  };
  return (
    <div className="w-10 h-10 bg-offwhite rounded-lg flex items-center justify-center mb-5" aria-hidden="true">
      <svg className="w-5 h-5 text-charcoal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={paths[type]} />
      </svg>
    </div>
  );
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  // Progressive-enhancement scroll animation for the "How it works" section
  useEffect(() => {
    const section = document.querySelector(".gb-process");
    if (!section || !("IntersectionObserver" in window)) return;
    section.classList.add("gb-anim");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            section.classList.add("gb-inview");
            io.disconnect();
          }
        });
      },
      { threshold: 0.2 },
    );
    io.observe(section);
    return () => io.disconnect();
  }, []);

  return (
    <>
      {/* Skip link */}
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-4 focus:z-[200] focus:bg-charcoal focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:text-sm">
        Skip to main content
      </a>

      {/* ===== NAV ===== */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-offwhite/95 backdrop-blur-sm border-b border-grey-light">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-baseline text-2xl font-heading font-bold leading-none select-none" aria-label="GovBid home">
            <span className="text-charcoal">Gov</span><span className="text-govred">Bid</span>
          </a>

          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            <a href="#how" className="font-medium text-[15px] text-charcoal hover:text-govred transition-colors">How it works</a>
            <a href="#features" className="font-medium text-[15px] text-charcoal hover:text-govred transition-colors">Features</a>
            <a href="#proof" className="font-medium text-[15px] text-charcoal hover:text-govred transition-colors">Why us</a>
            <button {...calBooking} className="bg-govred hover:bg-govred-hover text-white font-heading font-semibold text-[15px] px-5 py-2.5 rounded-lg transition-colors focus-visible:ring-2 focus-visible:ring-govred focus-visible:ring-offset-2">
              Book Call
            </button>
          </nav>

          <button
            className="md:hidden p-2 -mr-2"
            aria-label="Open menu"
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6 text-charcoal" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden bg-offwhite border-t border-grey-light" aria-label="Mobile navigation">
            <div className="px-6 py-4 flex flex-col gap-4">
              <a href="#how" onClick={() => setMobileMenuOpen(false)} className="font-medium text-charcoal">How it works</a>
              <a href="#features" onClick={() => setMobileMenuOpen(false)} className="font-medium text-charcoal">Features</a>
              <a href="#proof" onClick={() => setMobileMenuOpen(false)} className="font-medium text-charcoal">Why us</a>
              <button {...calBooking} onClick={() => setMobileMenuOpen(false)} className="bg-govred hover:bg-govred-hover text-white font-heading font-semibold text-[15px] px-5 py-2.5 rounded-lg transition-colors w-full">
                Book Call
              </button>
            </div>
          </nav>
        )}
      </header>

      <main id="main">
        {/* ===== HERO ===== */}
        <section className="min-h-dvh flex flex-col items-center justify-center px-6 py-20" aria-labelledby="hero-heading">
          <div className="max-w-3xl mx-auto text-center hero-rise">
            <h1 id="hero-heading" className="text-[30px] md:text-[48px] font-heading font-bold leading-[1.12] text-charcoal mb-6">
              <span className="block sm:whitespace-nowrap">£400bn of public contracts.</span>
              <span className="block">One connection away.</span>
            </h1>
            <p className="text-[17px] md:text-lg text-grey leading-relaxed max-w-2xl mx-auto mb-10">
              GovBid finds the tenders you should win and writes the bids that win them. Fixed fee per bid, success fee only when you win.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <button {...calBooking} className="bg-govred hover:bg-govred-hover text-white font-heading font-semibold text-base px-8 py-4 rounded-lg transition-colors w-full sm:w-auto focus-visible:ring-2 focus-visible:ring-govred focus-visible:ring-offset-2">
                Book Your Consultation
              </button>
            </div>
            <p className="text-sm text-grey">
              Monitoring UK-wide Tenders
            </p>
          </div>
        </section>

        {/* ===== HOW IT WORKS ===== */}
        <section className="gb-process" id="how" aria-labelledby="gb-hiw-heading">
          <div className="gb-inner">
            <p className="gb-kicker">How it works</p>
            <h2 id="gb-hiw-heading">Six steps from tender to submission</h2>

            <div className="gb-grid-wrap">
              {/* Progress rail — the 6-step flow, fills L→R on scroll */}
              <div className="gb-rail" aria-hidden="true">
                <span className="gb-rail-fill" />
                <span className="gb-rail-node" />
                <span className="gb-rail-node" />
                <span className="gb-rail-node" />
                <span className="gb-rail-node" />
                <span className="gb-rail-node" />
                <span className="gb-rail-node" />
              </div>

              <ol className="gb-steps">
                <li><div className="gb-card">
                  <span className="gb-num" aria-hidden="true">1</span>
                  <h3>We quote</h3>
                  <p>Every bid is priced individually. Size, scope and service level determine the fee. No hidden costs, <strong>no retainers</strong>.</p>
                </div></li>
                <li><div className="gb-card">
                  <span className="gb-num" aria-hidden="true">2</span>
                  <h3>We meet your experts</h3>
                  <p>A kick-off call with your subject-matter experts. We extract everything the bid needs. You talk, we <strong>capture</strong>.</p>
                </div></li>
                <li><div className="gb-card">
                  <span className="gb-num" aria-hidden="true">3</span>
                  <h3>We draft</h3>
                  <p>Our bid writer builds every quality response from scratch, structured against the buyer’s <strong>award criteria</strong>.</p>
                </div></li>
                <li><div className="gb-card">
                  <span className="gb-num" aria-hidden="true">4</span>
                  <h3>We QA</h3>
                  <p>Every response goes through our quality assurance process: reviewed for <strong>compliance</strong>, scored against criteria, and proofread.</p>
                </div></li>
                <li><div className="gb-card">
                  <span className="gb-num" aria-hidden="true">5</span>
                  <h3>You sign off</h3>
                  <p>The final bid comes to you for review and feedback. Nothing goes out without your <strong>approval</strong>.</p>
                </div></li>
                <li><div className="gb-card">
                  <span className="gb-num" aria-hidden="true">6</span>
                  <h3>We submit</h3>
                  <p>We handle the admin: portal uploads, document formatting, compliance checks, and get it in before the <strong>deadline</strong>.</p>
                </div></li>
              </ol>
            </div>
          </div>
        </section>

        {/* ===== FEATURES ===== */}
        <section id="features" className="py-16 md:py-24 bg-white scroll-mt-16" aria-labelledby="features-heading">
          <div className="max-w-5xl mx-auto px-6">
            <h2 id="features-heading" className="text-[26px] md:text-[36px] font-heading font-semibold text-charcoal text-center mb-14">
              What you get
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {FEATURES.map((f, i) => (
                <article key={i} className="border border-grey-light rounded-xl p-8 transition-[transform,box-shadow] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] hover:shadow-lg motion-safe:hover:-translate-y-1">
                  <FeatureIcon type={f.icon} />
                  <h3 className="font-heading font-semibold text-[20px] md:text-[22px] text-charcoal mb-3">{f.title}</h3>
                  <p className="text-[17px] text-grey leading-relaxed">{f.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ===== SOCIAL PROOF ===== */}
        <section id="proof" className="py-16 md:py-24 scroll-mt-16" aria-labelledby="proof-heading">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8 mb-16" role="list">
              <div className="text-center" role="listitem">
                <p className="text-govred font-heading font-bold text-[36px] md:text-[42px] leading-none mb-2" style={{ fontVariantNumeric: "tabular-nums" }}>&pound;400bn+</p>
                <p className="text-grey text-[15px]">UK public procurement annually</p>
              </div>
              <div className="text-center" role="listitem">
                <p className="text-govred font-heading font-bold text-[36px] md:text-[42px] leading-none mb-2" style={{ fontVariantNumeric: "tabular-nums" }}>&gt;40k</p>
                <p className="text-grey text-[15px]">Tender opportunities published every year on Contracts Finder alone</p>
              </div>
              <div className="text-center" role="listitem">
                <p className="text-govred font-heading font-bold text-[36px] md:text-[42px] leading-none mb-2" style={{ fontVariantNumeric: "tabular-nums" }}>15&ndash;20%</p>
                <p className="text-grey text-[15px]">Higher win rates for teams using structured bid processes</p>
              </div>
            </div>

            <h2 id="proof-heading" className="text-[26px] md:text-[36px] font-heading font-semibold text-charcoal text-center mb-4">
              Live tender matches
            </h2>
            <p className="text-grey text-center mb-10 max-w-xl mx-auto">
              Real tenders from UK public buyers, matched this week. Anonymised, but the opportunities are live.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {TENDERS.map((t, i) => (
                <article key={i} className="bg-white rounded-xl p-6 shadow-[0_1px_3px_rgba(0,0,0,0.06)] transition-[transform,box-shadow] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] hover:shadow-lg motion-safe:hover:-translate-y-1">
                  <span className="inline-block bg-offwhite text-charcoal font-medium text-xs px-3 py-1 rounded-full mb-4">{t.tag}</span>
                  <h3 className="font-heading font-semibold text-charcoal text-lg mb-2">{t.title}</h3>
                  <div className="flex justify-between items-baseline mt-4 pt-4 border-t border-grey-light">
                    <div>
                      <p className="text-xs text-grey uppercase tracking-wide">Est. value</p>
                      <p className="font-heading font-semibold text-charcoal">{t.value}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-grey uppercase tracking-wide">Deadline</p>
                      <p className="font-heading font-semibold text-govred">{t.deadline}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <p className="text-center text-sm text-grey mt-6">
              These are anonymised examples based on real published notices. Updated weekly.
            </p>
          </div>
        </section>

        {/* ===== EMAIL CAPTURE ===== */}
        <section className="py-16 md:py-20 bg-white" aria-labelledby="email-heading">
          <div className="max-w-xl mx-auto px-6 text-center">
            <h2 id="email-heading" className="text-[22px] md:text-[28px] font-heading font-semibold text-charcoal mb-3">
              Weekly tender alert
            </h2>
            <p className="text-grey text-[17px] mb-8">
              Get a weekly email with tenders matched to UK manufacturers. Free, no spam, unsubscribe any time.
            </p>
            {!emailSubmitted ? (
              <form
                onSubmit={(e) => { e.preventDefault(); setEmailSubmitted(true); }}
                className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
                aria-label="Subscribe to weekly tender alerts"
              >
                <label htmlFor="email-input" className="sr-only">Email address</label>
                <input
                  type="email"
                  id="email-input"
                  name="email"
                  required
                  autoComplete="email"
                  spellCheck={false}
                  placeholder="you@company.co.uk"
                  className="flex-1 border border-grey-light rounded-lg px-4 py-3 text-base text-charcoal placeholder:text-grey focus:outline-none focus:ring-2 focus:ring-govred focus:border-transparent"
                />
                <button type="submit" className="bg-govred hover:bg-govred-hover text-white font-heading font-semibold text-[15px] px-6 py-3 rounded-lg transition-colors whitespace-nowrap focus-visible:ring-2 focus-visible:ring-govred focus-visible:ring-offset-2">
                  Subscribe
                </button>
              </form>
            ) : (
              <p className="text-charcoal font-medium text-[15px]" role="status" aria-live="polite">
                Check your inbox to confirm your subscription.
              </p>
            )}
          </div>
        </section>

        {/* ===== FINAL CTA ===== */}
        <section className="py-20 md:py-28" aria-labelledby="cta-heading">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 id="cta-heading" className="text-[26px] md:text-[36px] font-heading font-semibold text-charcoal mb-4 text-pretty">
              There&apos;s a tender with your name on it closing soon.
            </h2>
            <p className="text-grey text-[17px] md:text-lg mb-10 max-w-xl mx-auto">
              20 minutes. We&apos;ll show you the live matches for your product line. Free, no commitment.
            </p>
            <button {...calBooking} className="bg-govred hover:bg-govred-hover text-white font-heading font-semibold text-base px-8 py-4 rounded-lg transition-colors focus-visible:ring-2 focus-visible:ring-govred focus-visible:ring-offset-2">
              Book Your Consultation
            </button>
            <p className="text-sm text-grey mt-5">
              No retainer. No lock-in.
            </p>
          </div>
        </section>
      </main>

      {/* ===== FOOTER ===== */}
      <SiteFooter />
    </>
  );
}
