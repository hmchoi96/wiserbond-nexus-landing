import Link from "next/link";
export default function Footer() {
  return (
    <footer className="border-t border-[var(--border-soft)] py-10">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10 flex flex-col md:flex-row justify-between gap-6 text-sm text-[var(--text-secondary)]">
        <p>
          <span className="font-semibold text-[var(--brand)]">Wiserbond</span> ·
          Shared memory for connected agents.
        </p>
        <div className="flex flex-wrap gap-6">
          <Link href="/archive/akashic-v1">V1 archive</Link>
          <a href="https://github.com/hmchoi96/akashic-v2">GitHub ↗</a>
          <a href="mailto:hmchoi@sfu.ca">Contact</a>
        </div>
      </div>
    </footer>
  );
}
