"use client";
import { motion } from "framer-motion";
import { useMouseInElement } from "@/hooks/useMousePosition";

export function MagneticButton({ children, className = "", strength = 0.35 }: { children: React.ReactNode; className?: string; strength?: number }) {
  const { ref, position, isHovered } = useMouseInElement();
  return (
    <motion.div ref={ref} className={className} animate={{ x: isHovered ? position.x * strength : 0, y: isHovered ? position.y * strength : 0 }} transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }} style={{ display: "inline-block" }}>
      {children}
    </motion.div>
  );
}
