import type { Metadata } from "next";
import { SITE, SEO_KEYWORDS } from "./site";

export const defaultMetadata: Metadata = {
  metadataBase: new URL(SITE.baseUrl),
  title: {
    default: SITE.defaultTitle,
    template: "%s | Wiserbond Nexus",
  },
  description: SITE.defaultDescription,
  applicationName: "Wiserbond Nexus",
  keywords: SEO_KEYWORDS,
  openGraph: {
    type: "website",
    url: SITE.baseUrl,
    siteName: SITE.name,
    title: SITE.defaultTitle,
    description: SITE.defaultDescription,
    images: [
      { 
        url: SITE.ogImage, 
        width: 1200, 
        height: 630, 
        alt: "Wiserbond Nexus - On-prem Judgment Memory for Macro & Risk Teams" 
      }
    ],
    locale: SITE.locale,
  },
  twitter: {
    card: "summary_large_image",
    site: SITE.twitter || undefined,
    creator: SITE.twitter || undefined,
    title: SITE.defaultTitle,
    description: SITE.defaultDescription,
    images: [SITE.ogImageTwitter || SITE.ogImage],
  },
  alternates: {
    canonical: SITE.baseUrl,
    languages: {
      en: `${SITE.baseUrl}/en/`,
      "x-default": SITE.baseUrl,
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  category: "business",
  icons: {
    icon: "/favicon.ico",
    apple: "/icons/apple-touch-icon.png",
  },
};

// 환경변수 기반 robots 설정 (프리뷰 환경 대응)
export const getRobotsMetadata = (): Metadata["robots"] => {
  if (process.env.NEXT_PUBLIC_ROBOTS === "noindex") {
    return { index: false, follow: false };
  }
  return defaultMetadata.robots;
};
