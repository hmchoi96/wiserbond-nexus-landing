import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wiserbond Nexus — Noise Off. Calm Think.",
  description: "Connect past judgments to present conditions. Then vs Now in minutes.",
  openGraph: {
    title: "Wiserbond Nexus",
    description: "Macro strategy copilot with Akashic Record (on‑prem SLM).",
    images: ["/og/nexus-og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-gradient-to-b from-white to-[#F6F8FF] text-slate-900`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
