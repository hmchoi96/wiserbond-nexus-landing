import Link from "next/link";
import { PRODUCT_NAME, COMPANY_NAME } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border-soft)] py-10">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10 flex flex-col md:flex-row justify-between gap-6 text-sm text-[var(--text-secondary)]">
        <div><p className="font-semibold text-lg text-[var(--brand)]">{PRODUCT_NAME}</p><p className="mt-2">Shared memory for your agents.</p><p className="mt-3 text-xs text-[var(--text-muted)]">Built and operated by {COMPANY_NAME}</p></div>
        <div className="flex flex-wrap items-start gap-x-6 gap-y-3">
          <Link href="/archive/akashic-v1">Earlier work</Link>
          <Link href="/agents">For agents</Link>
          <a href="mailto:hmchoi@sfu.ca">Contact</a>
        </div>
      </div>
    </footer>
  );
}
