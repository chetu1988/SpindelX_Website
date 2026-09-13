"use client";
import { motion } from "framer-motion";
import { slideUp, slideLeft, slideRight, defaultViewport } from "@/lib/animations";

interface Props { children: React.ReactNode; className?: string; delay?: number; direction?: "up" | "left" | "right"; style?: React.CSSProperties; }

export function SectionReveal({ children, className = "", delay = 0, direction = "up", style }: Props) {
  const v = direction === "left" ? slideLeft : direction === "right" ? slideRight : slideUp;
  return (
    <motion.div initial="hidden" whileInView="visible" viewport={defaultViewport} variants={v} transition={{ delay }} className={className} style={style}>
      {children}
    </motion.div>
  );
}
