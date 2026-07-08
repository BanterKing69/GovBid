import type { NextConfig } from "next";

// Static export so the site can be hosted on GitHub Pages (and any static host).
// basePath/assetPrefix are only applied for the GitHub Pages build (served under
// /GovBid). For Vercel + govbid.co.uk later, leave GITHUB_PAGES unset for root paths.
const isPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  ...(isPages
    ? { basePath: "/GovBid", assetPrefix: "/GovBid/" }
    : {}),
};

export default nextConfig;
