import Link from "next/link";
import "./evidence.css";

export default function EvidenceRoomLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <aside className="bg-[var(--surface-muted)] px-5 py-3 text-center text-sm text-[var(--text-secondary)]">
        V1 archive: retained for reference. Wiserbond now focuses on shared
        agent memory.{" "}
        <Link href="/" className="underline underline-offset-4">
          Explore Akashic
        </Link>
      </aside>
      {children}
    </>
  );
}
