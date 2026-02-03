"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

export default function NexusHero(){
  return (
    <header className="relative overflow-hidden">
      <div className="relative">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_200px_at_20%_0%,rgba(5,31,91,0.10),transparent),radial-gradient(600px_200px_at_80%_0%,rgba(255,192,77,0.12),transparent)]" />
        <div className="max-w-7xl mx-auto px-4 py-20 lg:py-32 text-center">
          <motion.span 
            initial={{ opacity: 0, y: 8 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm bg-white/80 border-black/5 mb-6"
          >
            Judgment Memory for Teams
          </motion.span>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6" style={{ color: "#0B1537" }}>
            Turn past decisions into reusable judgment memory
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Past Self Advises Present Self.<br />
            On-prem, offline-first. Your data never leaves your network.
          </p>
          <Link href="/waitlist" className="inline-flex">
            <Button className="h-12 px-8 text-base" style={{ background: "var(--brand)" }}>
              Request a 15-min Interview
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
