"use client";
import Link from "next/link";
import { motion, useScroll } from "framer-motion";
import { nav } from "@/lib/config/site";
import { CALENDLY_URL } from "@/lib/config/calendly";

export default function Nav() {
  const { scrollYProgress } = useScroll();

  return (
    <nav className="sticky top-0 z-50 bg-[var(--page-bg)]/90 backdrop-blur border-b border-[var(--border-soft)]">
      <div className="max-w-[1120px] mx-auto h-16 px-5 md:px-10 flex items-center justify-between">
        <Link href="/" className="font-semibold text-base text-[var(--brand)]">
          Wiserbond
        </Link>
        <div className="hidden md:flex items-center gap-7 text-[15px] text-[var(--text-secondary)]">
          {nav.map((n) => (
            <Link
              key={n.label}
              href={n.href}
              className="hover:text-[var(--brand)] transition-colors"
            >
              {n.label}
            </Link>
          ))}
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-[15px] font-semibold px-4 py-2.5 rounded-md hover:bg-[var(--brand-hover)] transition-colors"
            style={{ background: "var(--brand)" }}
          >
            Request interview
          </a>
        </div>
      </div>
      <motion.div
        className="h-[2px] bg-[var(--brand)]"
        style={{
          scaleX: scrollYProgress,
          transformOrigin: "0% 50%",
        }}
      />
    </nav>
  );
}
