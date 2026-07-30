export default function Footer() {
  return (
    <footer className="py-10 border-t border-[var(--border-soft)]">
      <div className="max-w-[960px] mx-auto px-4 md:px-7 text-sm text-[var(--text-muted)] flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <div>
          <span className="font-semibold text-[var(--brand)]">Wiserbond</span>
          <span className="ml-2">· Akashic Record</span>
        </div>
        <div className="flex items-center gap-4">
          <a href="mailto:hmchoi@sfu.ca" className="hover:text-[var(--brand)]">
            Contact
          </a>
          <a href="/privacy" className="hover:text-[var(--brand)]">
            Privacy
          </a>
          <a href="/terms" className="hover:text-[var(--brand)]">
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
}
