import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-grey-light py-10" role="contentinfo">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          <div className="max-w-sm">
            <Link href="/" className="flex items-baseline text-xl font-heading font-bold leading-none select-none mb-3" aria-label="GovBid home">
              <span className="text-charcoal">Gov</span><span className="text-govred">Bid</span>
            </Link>
            <p className="text-sm text-grey mt-4">
              GovBid is an independent consultancy, not affiliated with any government body.
            </p>
          </div>
          <div className="flex gap-12">
            <div>
              <h4 className="font-heading font-semibold text-charcoal text-sm mb-3">Contact</h4>
              <ul className="space-y-2">
                <li><a href="mailto:hello@govbid.co.uk" className="text-sm text-grey hover:text-govred transition-colors">hello@govbid.co.uk</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-semibold text-charcoal text-sm mb-3">Legal</h4>
              <ul className="space-y-2">
                <li><Link href="/privacy" className="text-sm text-grey hover:text-govred transition-colors">Privacy policy</Link></li>
                <li><Link href="/terms" className="text-sm text-grey hover:text-govred transition-colors">Terms</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-grey-light mt-8 pt-6">
          <p className="text-xs text-grey text-center">© 2026 GovBid UK Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
