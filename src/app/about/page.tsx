"use client";
import { motion } from "framer-motion";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { GlassCard } from "@/components/ui/GlassCard";
import { staggerContainer, slideUp } from "@/lib/animations";
import { Award, Compass } from "lucide-react";

export default function About() {
  return (
    <div style={{ background: "#1F3855", color: "#fff", minHeight: "100vh", paddingTop: "8rem", paddingBottom: "5rem", position: "relative", overflow: "hidden" }}>
      <div className="blueprint-bg-lg" style={{ position: "absolute", inset: 0, opacity: 0.25, pointerEvents: "none" }} />
      <div className="container-xl" style={{ position: "relative", zIndex: 1 }}>
        <motion.div variants={staggerContainer} initial="hidden" animate="visible" style={{ maxWidth: 800, marginBottom: "4rem" }}>
          <motion.span variants={slideUp} className="section-tag">ABOUT SPINDELX</motion.span>
          <motion.h1 variants={slideUp} style={{ fontFamily: "var(--font-manrope)", fontWeight: 800, fontSize: "clamp(2.5rem, 5vw, 4.5rem)", textTransform: "uppercase", color: "#fff", lineHeight: 1.05, marginBottom: "1.5rem" }}>
            Built on <span style={{ color: "#FFBF00" }}>Engineering.</span><br />Driven by Passion.
          </motion.h1>
          <motion.p variants={slideUp} style={{ color: "rgba(255,255,255,0.7)", fontSize: "1.05rem", lineHeight: 1.75, maxWidth: 680, textAlign: "justify" }}>
            SpindelX was founded in Mysore, Karnataka, by a core team of passionate mechanical and electronics engineers. With a strong background in R&D and product development across medical devices, automotive, and electronics, we understand the exacting standards required for mission-critical parts. We built SpindelX to bridge the gap between design engineering and sheet metal manufacturing, running a state-of-the-art facility built on strict digital process control.
          </motion.p>
        </motion.div>

        <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem", maxWidth: 800 }}>
          <SectionReveal>
            <h3 style={{ fontFamily: "var(--font-manrope)", fontWeight: 700, fontSize: "1.1rem", color: "#FFBF00", textTransform: "uppercase", marginBottom: "0.75rem", letterSpacing: "0.05em" }}>Our Competency</h3>
            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.95rem", lineHeight: 1.75, textAlign: "justify" }}>Our core competency lies in translating complex engineering designs into flawless physical products. With our deep background in product development, we provide expert DFM (Design for Manufacturability) support to ensure your parts are optimized for cost, quality, and scale.</p>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <h3 style={{ fontFamily: "var(--font-manrope)", fontWeight: 700, fontSize: "1.1rem", color: "#FFBF00", textTransform: "uppercase", marginBottom: "0.75rem", letterSpacing: "0.05em" }}>Our Vision</h3>
            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.95rem", lineHeight: 1.75, textAlign: "justify" }}>To raise the standard of precision sheet metal manufacturing in India to be globally competitive — serving demanding sectors like medical equipment, automotive, electronics, and robotics with the process rigor and quality documentation that international OEMs demand.</p>
          </SectionReveal>
          <SectionReveal delay={0.2}>
            <h3 style={{ fontFamily: "var(--font-manrope)", fontWeight: 700, fontSize: "1.1rem", color: "#FFBF00", textTransform: "uppercase", marginBottom: "0.75rem", letterSpacing: "0.05em" }}>Engineering Hub: Mysore</h3>
            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.95rem", lineHeight: 1.75, textAlign: "justify" }}>Located in the industrial city of Mysore, Karnataka, our modern facility is perfectly positioned with robust logistics networks to supply key manufacturing hubs across India, including Bangalore, Chennai, Pune, and Hyderabad.</p>
          </SectionReveal>
        </div>
      </div>
    </div>
  );
}
