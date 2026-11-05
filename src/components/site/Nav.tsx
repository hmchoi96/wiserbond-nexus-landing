import Link from "next/link";
import { nav } from "@/lib/config/site";
import { AKASHIC_SETUP_URL, PRODUCT_NAME } from "@/lib/site";
export default function Nav() {
  return (
    <nav
      aria-label="Main navigation"
      className="sticky top-0 z-50 bg-[var(--page-bg)]/95 backdrop-blur border-b border-[var(--border-soft)]"
    >
      <div className="max-w-[1200px] mx-auto min-h-20 px-5 md:px-10 flex items-center justify-between gap-5">
        <Link
          href="/"
          className="font-semibold text-xl tracking-tight text-[var(--brand)]"
        >
          Wiserbond<span className="text-[#6b7c6e]">.</span>
        </Link>
        <div className="hidden md:flex gap-7 text-sm text-[var(--text-secondary)]">
          {nav.map((n) => (
            <Link
              key={n.label}
              href={n.href}
              className="hover:underline underline-offset-4"
            >
              {n.label}
            </Link>
          ))}
        </div>
        <a
          href={AKASHIC_SETUP_URL}
          className="rounded-full bg-[var(--brand)] text-white px-5 py-3 text-sm font-medium"
        >
          Connect {PRODUCT_NAME} ↗
        </a>
      </div>
    </nav>
  );
}
