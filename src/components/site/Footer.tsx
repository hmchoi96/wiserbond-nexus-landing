export default function Footer() {
  return (
    <footer className="py-12 border-t border-[var(--border-soft)]">
      <div className="max-w-[1120px] mx-auto px-5 md:px-10 text-[15px] text-[var(--text-muted)] flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <div>
          <span className="font-semibold text-[var(--brand)]">Wiserbond</span>
          <span className="ml-2">· Akashic Record</span>
        </div>
        <div className="flex items-center gap-5">
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
