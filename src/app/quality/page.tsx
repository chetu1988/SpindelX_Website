"use client";
import { motion } from "framer-motion";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { GlassCard } from "@/components/ui/GlassCard";
import { QUALITY_PROCESSES } from "@/lib/constants";
import { staggerContainer, slideUp } from "@/lib/animations";
import { ShieldCheck, FileCheck, CheckCircle, Sliders, Ruler, BookOpen, LucideIcon } from "lucide-react";

const icons: Record<string, LucideIcon> = { PackageSearch: CheckCircle, CheckSquare: FileCheck, ScanLine: Sliders, Ruler, AlertCircle: ShieldCheck, FileText: BookOpen };

export default function Quality() {
  return (
    <div style={{ background: "#1F3855", color: "#fff", minHeight: "100vh", paddingTop: "8rem", paddingBottom: "5rem", position: "relative", overflow: "hidden" }}>
      <div className="blueprint-bg-lg" style={{ position: "absolute", inset: 0, opacity: 0.2, pointerEvents: "none" }} />
      <div className="container-xl" style={{ position: "relative", zIndex: 1 }}>
        <motion.div variants={staggerContainer} initial="hidden" animate="visible" style={{ maxWidth: 700, marginBottom: "4rem" }}>
          <motion.span variants={slideUp} className="section-tag">QUALITY CONTROLS</motion.span>
          <motion.h1 variants={slideUp} style={{ fontFamily: "var(--font-manrope)", fontWeight: 800, fontSize: "clamp(2.5rem, 5vw, 4.5rem)", textTransform: "uppercase", color: "#fff", lineHeight: 1.05 }}>
            Zero Tolerance <span style={{ color: "#FFBF00" }}>Quality</span>
          </motion.h1>
        </motion.div>
        <div style={{ display: "grid", gridTemplateColumns: "8fr 4fr", gap: "4rem", alignItems: "start" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {QUALITY_PROCESSES.map((p, i) => {
              const Icon = icons[p.icon as keyof typeof icons] || ShieldCheck;
              return (
                <SectionReveal key={p.step} delay={i * 0.05}>
                  <div style={{ display: "flex", gap: "1rem", padding: "1.25rem", borderRadius: 16, border: "1px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.04)", transition: "all 0.3s" }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,191,0,0.2)"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.06)"; }}>
                    <div style={{ width: 48, height: 48, borderRadius: 12, background: "rgba(255,191,0,0.1)", border: "1px solid rgba(255,191,0,0.2)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Icon size={24} style={{ color: "#FFBF00" }} />
                    </div>
                    <div>
                      <h4 style={{ fontFamily: "var(--font-manrope)", fontWeight: 800, fontSize: "0.95rem", textTransform: "uppercase", color: "#fff", marginBottom: "0.35rem", letterSpacing: "0.02em" }}>{p.step}. {p.title}</h4>
                      <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.85rem", lineHeight: 1.6 }}>{p.description}</p>
                    </div>
                  </div>
                </SectionReveal>
              );
            })}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {[{ Icon: ShieldCheck, title: "Material Traceability", desc: "100% trace from raw material to finished goods. Heat numbers and Mill Test Reports are permanently linked to every job." }, { Icon: FileCheck, title: "First-Off Inspection", desc: "Zero assumptions. First completed part is fully measured and signed off against CAD before any batch run." }].map(({ Icon, title, desc }) => (
              <SectionReveal key={title}>
                <GlassCard style={{ display: "flex", flexDirection: "column", background: "rgba(255,255,255,0.04)", padding: "1.75rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                    <Icon style={{ color: "#FFBF00" }} size={28} />
                    <h3 style={{ fontFamily: "var(--font-manrope)", fontWeight: 800, fontSize: "0.95rem", textTransform: "uppercase", color: "#fff", letterSpacing: "0.02em", margin: 0 }}>{title}</h3>
                  </div>
                  <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.85rem", lineHeight: 1.65, margin: 0, marginTop: "1.25rem" }}>{desc}</p>
                </GlassCard>
              </SectionReveal>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
