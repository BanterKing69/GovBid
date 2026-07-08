import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "GovBid: UK tender intelligence and bid writing for SMEs",
  description:
    "GovBid monitors every UK public tender daily and matches them to your products. Fixed fee bid writing with a success fee only when you win.",
  openGraph: {
    title: "GovBid: UK tender intelligence and bid writing for SMEs",
    description:
      "We find the government contracts you should win. Then we write the bid. Fixed fee + success fee only when you win.",
    type: "website",
    url: "https://govbid.co.uk",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-GB"
      className={`${inter.variable} ${poppins.variable} h-full`}
    >
      <head>
        <meta name="theme-color" content="#F8F7F5" />
      </head>
      <body className="min-h-full flex flex-col antialiased">
        {children}
        {/* Cal.com element-click embed — global so booking buttons work on every page */}
        <Script id="cal-embed" strategy="afterInteractive">
          {`(function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
Cal("init", "30min", {origin:"https://app.cal.com"});
Cal.config = Cal.config || {};
Cal.config.forwardQueryParams = true;
Cal.ns["30min"]("ui", {"cssVarsPerTheme":{"light":{"cal-brand":"#E03C31"},"dark":{"cal-brand":"#fafafa"}},"hideEventTypeDetails":false,"layout":"month_view"});`}
        </Script>
      </body>
    </html>
  );
}
