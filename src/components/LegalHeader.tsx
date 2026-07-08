import Link from "next/link";
import { calBooking } from "@/lib/cal";

export function LegalHeader() {
  return (
    <header className="sticky top-0 z-50 bg-offwhite/95 backdrop-blur-sm border-b border-grey-light">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-baseline text-2xl font-heading font-bold leading-none select-none" aria-label="GovBid home">
          <span className="text-charcoal">Gov</span><span className="text-govred">Bid</span>
        </Link>
        <div className="flex items-center gap-6">
          <Link href="/" className="hidden sm:inline font-medium text-[15px] text-charcoal hover:text-govred transition-colors">
            Home
          </Link>
          <button {...calBooking} className="bg-govred hover:bg-govred-hover text-white font-heading font-semibold text-[15px] px-5 py-2.5 rounded-lg transition-colors focus-visible:ring-2 focus-visible:ring-govred focus-visible:ring-offset-2">
            Book Call
          </button>
        </div>
      </div>
    </header>
  );
}
