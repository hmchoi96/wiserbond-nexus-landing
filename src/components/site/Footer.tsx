export default function Footer(){
  return (
    <footer className="py-10 border-t border-black/5">
      <div className="max-w-7xl mx-auto px-4 text-sm text-muted-foreground flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <div>
          <span className="font-semibold" style={{ color: "var(--brand)" }}>Wiserbond</span> · Nexus 
          <span className="ml-2 text-xs">Noise Off. Calm Think.</span>
        </div>
        <div className="flex items-center gap-4">
          <a href="mailto:hmchoi@sfu.ca" className="hover:underline">Contact</a>
          <a href="/privacy" className="hover:underline">Privacy</a>
          <a href="/terms" className="hover:underline">Terms</a>
        </div>
      </div>
    </footer>
  );
}
