"use client";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll } from "framer-motion";
import { nav } from "@/lib/config/site";

export default function Nav() {
  const { scrollYProgress } = useScroll();
  
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-black/5">
      <div className="max-w-7xl mx-auto h-16 px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image 
            src="/Submark logo.png" 
            alt="Wiserbond Logo" 
            width={32} 
            height={32}
            className="w-8 h-8"
          />
          <span className="font-semibold" style={{ color: "var(--brand)" }}>
            Wiserbond · Nexus
          </span>
        </Link>
        <div className="hidden md:flex items-center gap-6 text-sm">
          {nav.map(n => (
            <Link 
              key={n.label} 
              href={n.href} 
              className="hover:opacity-80 transition-opacity"
            >
              {n.label}
            </Link>
          ))}
        </div>
      </div>
      <motion.div 
        className="h-[2px] bg-[var(--brand)]" 
        style={{ 
          scaleX: scrollYProgress, 
          transformOrigin: "0% 50%" 
        }} 
      />
    </nav>
  );
}
