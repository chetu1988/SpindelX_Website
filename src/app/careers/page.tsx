"use client";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { staggerContainer, slideUp } from "@/lib/animations";
import { Zap, Cpu, ScanLine, Users, MapPin } from "lucide-react";
import { BRAND } from "@/lib/constants";
import Link from "next/link";

const OPENINGS = [
  { id: "laser-op", title: "Fiber Laser Machine Operator", dept: "PRODUCTION", type: "FULL-TIME", loc: "Mysore, IN", req: ["2+ years CNC / laser experience", "Able to read engineering drawings", "Basic DXF file handling", "Quality-conscious mindset"] },
  { id: "cnc-op", title: "CNC Press Brake Operator", dept: "PRODUCTION", type: "FULL-TIME", loc: "Mysore, IN", req: ["3+ years bending experience", "Multi-axis CNC press brake", "Offset and Z-section familiarity", "Blueprint reading"] },
  { id: "qc-eng", title: "Quality Control Engineer", dept: "QUALITY", type: "FULL-TIME", loc: "Mysore, IN", req: ["BE Mechanical Engineering", "Dimensional inspection experience", "Vernier, height gauge, CMM", "NCR and MTC documentation"] },
];

export default function Careers() {
  return (
    <div style={{ background: "#1F3855", color: "#fff", minHeight: "100vh", paddingTop: "8rem", paddingBottom: "5rem", position: "relative", overflow: "hidden" }}>
      <div className="blueprint-bg-lg" style={{ position: "absolute", inset: 0, opacity: 0.25, pointerEvents: "none" }} />
      <div className="container-xl" style={{ position: "relative", zIndex: 1 }}>
        <motion.div variants={staggerContainer} initial="hidden" animate="visible" style={{ maxWidth: 700, marginBottom: "4rem" }}>
          <motion.span variants={slideUp} className="section-tag">CAREERS</motion.span>
          <motion.h1 variants={slideUp} style={{ fontFamily: "var(--font-manrope)", fontWeight: 800, fontSize: "clamp(2.5rem, 5vw, 4.5rem)", textTransform: "uppercase", color: "#fff", lineHeight: 1.05, marginBottom: "1.5rem" }}>
            Engineer the <span style={{ color: "#FFBF00" }}>Future</span>
          </motion.h1>
          <motion.p variants={slideUp} style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.9rem", lineHeight: 1.75 }}>We are building the most process-driven precision sheet metal facility in South India. Join a team that values engineering thinking at every level.</motion.p>
        </motion.div>

        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginBottom: "4rem" }}>
          {OPENINGS.map((o, i) => (
            <SectionReveal key={o.id} delay={i * 0.05}>
              <div style={{ padding: "1.75rem", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 16, background: "rgba(255,255,255,0.04)", display: "flex", gap: "2rem", alignItems: "flex-start", transition: "all 0.3s" }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,191,0,0.2)"}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)"}>
                <div style={{ flexGrow: 1 }}>
                  <div style={{ display: "flex", gap: "0.5rem", marginBottom: "0.75rem", flexWrap: "wrap" }}>
                    {[o.dept, o.type, o.loc].map(t => (
                      <span key={t} style={{ padding: "0.2rem 0.65rem", borderRadius: 999, border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.05)", fontFamily: "var(--font-inter)", fontSize: "0.55rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)" }}>{t}</span>
                    ))}
                  </div>
                  <h3 style={{ fontFamily: "var(--font-manrope)", fontWeight: 700, fontSize: "1.05rem", textTransform: "uppercase", color: "#fff", marginBottom: "1rem" }}>{o.title}</h3>
                  <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap" }}>
                    {o.req.map(r => (
                      <span key={r} style={{ display: "flex", alignItems: "center", gap: "0.3rem", color: "rgba(255,255,255,0.5)", fontFamily: "var(--font-inter)", fontSize: "0.65rem" }}>
                        <span style={{ color: "#FFBF00" }}>✓</span> {r}
                      </span>
                    ))}
                  </div>
                </div>
                <a href={`mailto:${BRAND.email}?subject=Application: ${o.title}`}>
                  <button className="btn-primary" style={{ flexShrink: 0, fontSize: "0.65rem" }}>APPLY</button>
                </a>
              </div>
            </SectionReveal>
          ))}
        </div>

        <SectionReveal>
          <div style={{ textAlign: "center", padding: "3rem", border: "1px solid rgba(255,191,0,0.15)", borderRadius: 20, background: "rgba(255,191,0,0.04)" }}>
            <h3 style={{ fontFamily: "var(--font-manrope)", fontWeight: 700, fontSize: "1.25rem", textTransform: "uppercase", color: "#fff", marginBottom: "0.75rem" }}>Don&apos;t See Your Role?</h3>
            <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.8rem", maxWidth: 400, margin: "0 auto 1.5rem" }}>If you&apos;re a precision machinist, welder, or manufacturing engineer who values process discipline, send us your profile.</p>
            <a href={`mailto:${BRAND.email}?subject=Speculative Application — SpindelX`}><button className="btn-primary" style={{ fontSize: "0.7rem" }}>SEND PROFILE</button></a>
          </div>
        </SectionReveal>
      </div>
    </div>
  );
}
