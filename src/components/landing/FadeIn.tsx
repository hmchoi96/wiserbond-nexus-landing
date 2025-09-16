"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function FadeIn({ children }: { children: React.ReactNode }) {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: "-10% 0px" });
  
  return (
    <motion.div 
      ref={ref} 
      initial={{ opacity: 0, y: 12 }} 
      animate={inView ? { opacity: 1, y: 0 } : {}} 
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}
