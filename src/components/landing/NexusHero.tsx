"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

export default function NexusHero(){
  return (
    <header className="relative overflow-hidden">
      <div className="relative">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_200px_at_20%_0%,rgba(5,31,91,0.10),transparent),radial-gradient(600px_200px_at_80%_0%,rgba(255,192,77,0.12),transparent)]" />
        <div className="max-w-7xl mx-auto px-4 py-16 lg:py-24 grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6">
            <motion.span 
              initial={{ opacity: 0, y: 8 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-base bg-white/80 border-black/5"
            >
              Noise Off. Calm Think.
            </motion.span>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight" style={{ color: "#0B1537" }}>
            Connect past judgments to present conditions
          </h1>
          <p className="text-base md:text-lg text-muted-foreground">
            Macro strategy copilot with Akashic Record (on‑prem SLM). <br /> Compare &ldquo;Then vs Now&rdquo; in minutes with external data connections.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/demo" className="inline-flex">
              <Button className="h-11" style={{ background: "var(--brand)" }}>
                Request Demo
              </Button>
            </Link>
            <Link href="/waitlist" className="inline-flex">
              <Button variant="outline" className="h-11">
                Join Waitlist
              </Button>
            </Link>
            <Link href="/pricing" className="inline-flex">
              <Button variant="ghost" className="h-11">
                Pricing
              </Button>
            </Link>
          </div>
        </div>
        <div className="lg:col-span-5">
          <div className="rounded-xl p-6 bg-white border border-black/5 shadow-sm">
            <div className="text-sm font-medium mb-2">&ldquo;Then vs Now&rdquo; Demo Card</div>
            <p className="text-xs text-muted-foreground mb-4">
              Similar case search, difference comparison, risk summary
            </p>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span>Historical Context:</span>
                <span className="text-green-600">✓ Connected</span>
              </div>
              <div className="flex justify-between">
                <span>Current Conditions:</span>
                <span className="text-green-600">✓ Analyzed</span>
              </div>
              <div className="flex justify-between">
                <span>Risk Assessment:</span>
                <span className="text-blue-600">In Progress</span>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </header>
  );
}
