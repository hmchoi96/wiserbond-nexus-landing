"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

export default function NexusHero() {
  return (
    <header className="relative overflow-hidden">
      <div className="max-w-[960px] mx-auto px-4 md:px-7 pt-16 pb-10 md:pt-24 md:pb-14 text-center">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          <div className="text-[12px] font-medium tracking-[0.08em] uppercase text-[var(--text-muted)] mb-5">
            Akashic Record
          </div>
          <h1 className="font-serif text-3xl md:text-5xl font-medium tracking-tight mb-5 text-[var(--brand)] leading-[1.15]">
            Turn past decisions into reusable judgment memory
          </h1>
          <p className="text-base md:text-lg text-[var(--text-secondary)] max-w-lg mx-auto mb-8 leading-relaxed">
            Past Self Advises Present Self.
            <br />
            On-prem, offline-first. Your data never leaves your network.
          </p>
          <Link href="/waitlist" className="inline-flex">
            <Button
              className="h-11 px-7 text-sm font-semibold hover:bg-[var(--brand-hover)]"
              style={{ background: "var(--brand)" }}
            >
              Request a 15-min Interview
            </Button>
          </Link>
        </motion.div>
      </div>
    </header>
  );
}
