"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { CALENDLY_URL } from "@/lib/config/calendly";

export default function NexusHero() {
  return (
    <header className="relative overflow-hidden">
      <div className="max-w-[1120px] mx-auto px-5 md:px-10 pt-20 pb-12 md:pt-28 md:pb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          <div className="text-[13px] font-medium tracking-[0.08em] uppercase text-[var(--text-muted)] mb-6">
            Akashic Record
          </div>
          <h1 className="font-serif text-4xl md:text-[56px] font-medium tracking-tight mb-6 text-[var(--brand)] leading-[1.12]">
            Turn past decisions into reusable judgment memory
          </h1>
          <p className="text-lg md:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto mb-9 leading-relaxed">
            Past Self Advises Present Self.
            <br />
            On-prem, offline-first. Your data never leaves your network.
          </p>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex"
          >
            <Button
              className="h-12 px-8 text-base font-semibold hover:bg-[var(--brand-hover)]"
              style={{ background: "var(--brand)" }}
            >
              Request a 15-min Interview
            </Button>
          </a>
        </motion.div>
      </div>
    </header>
  );
}
