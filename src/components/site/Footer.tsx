export default function Footer() {
  return (
    <footer className="py-12 border-t border-[var(--border-soft)]">
      <div className="max-w-[1120px] mx-auto px-5 md:px-10 text-[15px] text-[var(--text-muted)] flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <div>
          <span className="font-semibold text-[var(--brand)]">Wiserbond</span>
          <span className="ml-2">
            builds Akashic Record, a judgment memory system for private equity
            teams.
          </span>
        </div>
        <div className="flex items-center gap-5 shrink-0">
          <a href="/research" className="hover:text-[var(--brand)]">
            Research
          </a>
          <a href="/evidence-room" className="hover:text-[var(--brand)]">
            Evidence
          </a>
          <a href="/pilot" className="hover:text-[var(--brand)]">
            Pilot
          </a>
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
