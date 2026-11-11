"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { nav } from "@/lib/config/site";
import { AKASHIC_SETUP_URL, PRODUCT_NAME } from "@/lib/site";

export default function Nav() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const close = (event: KeyboardEvent) => { if (event.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);
  return (
    <nav aria-label="Main navigation" className="sticky top-0 z-50 bg-[var(--page-bg)]/95 backdrop-blur border-b border-[var(--border-soft)]">
      <div className="max-w-[1200px] mx-auto min-h-20 px-4 md:px-10 flex items-center justify-between gap-2">
        <Link href="/" aria-label={`${PRODUCT_NAME} home`} className="flex items-center gap-2 font-semibold text-xl tracking-tight text-[var(--brand)]" onClick={() => setOpen(false)}>
          <span aria-hidden="true" className="inline-flex size-7 items-center justify-center rounded-lg border border-[var(--brand)] font-serif text-lg">{PRODUCT_NAME[0]}</span>
          {PRODUCT_NAME}
        </Link>
        <div className="hidden lg:flex gap-7 text-sm text-[var(--text-secondary)]">
          {nav.map((item) => <Link key={item.label} href={item.href} className="hover:underline underline-offset-4">{item.label}</Link>)}
        </div>
        <div className="flex items-center gap-2">
          <a href={AKASHIC_SETUP_URL} className="inline-flex items-center gap-2 rounded-full bg-[var(--brand)] text-white whitespace-nowrap px-3 py-2.5 sm:px-5 sm:py-3 text-sm font-medium">Get started <ArrowUpRight size={15} aria-hidden="true" /></a>
          <button type="button" className="lg:hidden rounded-md p-2 text-[var(--brand)]" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>{open ? <X size={22} /> : <Menu size={22} />}</button>
        </div>
      </div>
      {open && <div id="mobile-navigation" className="lg:hidden border-t border-[var(--border-soft)] px-5 pb-5 pt-2 flex flex-col gap-1">{nav.map((item) => <Link key={item.label} href={item.href} className="py-3 text-sm text-[var(--brand)]" onClick={() => setOpen(false)}>{item.label}</Link>)}</div>}
    </nav>
  );
}
