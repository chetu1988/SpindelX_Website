"use client";
import { motion } from "framer-motion";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { GlassCard } from "@/components/ui/GlassCard";
import { CAPABILITIES_STATS, MATERIALS } from "@/lib/constants";
import { staggerContainer, slideUp } from "@/lib/animations";
import { FileDown, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function CapabilitiesKPIs() {
  return (
    <section id="capabilities" style={{ background: "#1F3855", color: "#fff", padding: "6rem 0", position: "relative", overflow: "hidden" }}>
      <div className="blueprint-bg-lg" style={{ position: "absolute", inset: 0, opacity: 0.15, pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: "25%", left: "50%", transform: "translate(-50%,-50%)", width: 800, height: 800, background: "radial-gradient(circle, rgba(255,191,0,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />
      
      <div className="container-xl" style={{ position: "relative", zIndex: 1 }}>
        
        {/* Section Header */}
        <div style={{ marginBottom: "4rem" }}>
          <span className="section-tag">CAPABILITIES &amp; MACHINERY</span>
          <h2 style={{ fontFamily: "var(--font-manrope)", fontWeight: 800, fontSize: "clamp(2.2rem, 5vw, 3.8rem)", color: "#fff", textTransform: "uppercase", lineHeight: 1.1 }}>
            Capabilities <span style={{ color: "#FFBF00" }}>&amp; Limits</span>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.95rem", maxWidth: 800, marginTop: "1rem", lineHeight: 1.65 }}>
            State-of-the-art sheet metal processing equipment driving industrial-grade precision.<br className="hidden sm:block" /> Zero tribal knowledge — all processes are digitally logged and inspected.
          </p>
        </div>

        {/* 4 Counter KPIs */}
        <motion.div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "2.5rem", marginBottom: "5rem" }}
          variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
          {CAPABILITIES_STATS.map((stat, i) => (
            <motion.div key={stat.label} variants={slideUp} 
              style={{ 
                paddingLeft: "1.5rem", 
                borderLeft: "2px solid rgba(255,191,0,0.3)",
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem"
              }}>
              <div style={{ fontFamily: "var(--font-manrope)", fontWeight: 800, fontSize: "clamp(2.8rem, 5vw, 4.2rem)", color: "#FFBF00", lineHeight: 1 }}>
                <AnimatedCounter value={stat.value} suffix={stat.suffix} duration={1500} />
              </div>
              <h4 style={{ fontFamily: "var(--font-manrope)", fontWeight: 700, fontSize: "0.95rem", textTransform: "uppercase", letterSpacing: "0.05em", color: "#fff" }}>
                {stat.label}
              </h4>
              <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.85rem", lineHeight: 1.5 }}>
                {stat.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Materials Table Section */}
        <SectionReveal style={{ marginBottom: "5rem" }}>
          <h3 style={{ fontFamily: "var(--font-manrope)", fontWeight: 700, fontSize: "1.25rem", color: "#FFBF00", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "1.5rem" }}>
            Material Selection Matrix
          </h3>
          <div style={{ overflowX: "auto", borderRadius: 16, border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.03)" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.9rem" }}>
              <thead>
                <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.05)" }}>
                  {["Material Type", "Grades Support", "Thickness Limits", "Finishes Available"].map(h => (
                    <th key={h} style={{ padding: "1.2rem 1.5rem", textAlign: "left", fontFamily: "var(--font-inter)", fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", fontWeight: 700 }}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {MATERIALS.map(m => (
                  <tr key={m.name} style={{ borderBottom: "1px solid rgba(255,255,255,0.05)", transition: "background 0.3s" }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.02)"}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = "transparent"}>
                    <td style={{ padding: "1.2rem 1.5rem", fontWeight: 700, color: "#fff", fontFamily: "var(--font-manrope)", textTransform: "uppercase", fontSize: "0.9rem" }}>
                      {m.name}
                    </td>
                    <td style={{ padding: "1.2rem 1.5rem", color: "rgba(255,255,255,0.85)", fontFamily: "var(--font-inter)" }}>
                      {m.grades.join(", ")}
                    </td>
                    <td style={{ padding: "1.2rem 1.5rem", color: "#FFBF00", fontFamily: "var(--font-inter)", fontWeight: 700 }}>
                      {m.thicknesses}
                    </td>
                    <td style={{ padding: "1.2rem 1.5rem", color: "rgba(255,255,255,0.85)", fontFamily: "var(--font-inter)" }}>
                      {Array.isArray(m.finishes) ? m.finishes.join(", ") : m.finishes}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </SectionReveal>

        {/* Machinery Specs Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" style={{ marginBottom: "5rem" }}>
          {[
            { 
              title: "Fiber Laser Sheet Cutting (6 kW)", 
              badge: null,
              rows: [
                ["Max Sheet Bed Size", "3000 × 1500 mm"], 
                ["Dimensional Accuracy", "±0.1 mm"], 
                ["Max Mild Steel (MS)", "25 mm"], 
                ["Max Stainless Steel (SS)", "12 mm"], 
                ["Max Aluminium (Al)", "12 mm"]
              ] 
            },
            { 
              title: "Laser Tube Cutting (Ø240 mm)", 
              badge: "FIRST TIME IN MYSORE",
              rows: [
                ["Max Tube Diameter", "Ø240 mm"], 
                ["Max Square Profile Size", "160 × 160 mm"], 
                ["Profiles Supported", "Round, Square, Rectangular Tube"], 
                ["Dimensional Accuracy", "±0.1 mm"], 
                ["Chuck Control Type", "CNC Auto-Centering Rotary Chuck"]
              ] 
            },
            { 
              title: "CNC Bending (160 Ton)", 
              badge: null,
              rows: [
                ["Max Bending Length", "2500 mm"], 
                ["Total Pressing Force", "160 Tons"], 
                ["Controlled Axes", "X, R, Z1, Z2 CNC"], 
                ["Angular Accuracy", "±0.25°"], 
                ["Simulation Validation", "CAD 3D Simulation"]
              ] 
            },
          ].map(({ title, badge, rows }) => (
            <SectionReveal key={title}>
              <div style={{ display: "flex", flexDirection: "column", height: "100%", gap: "0.5rem" }}>
                {/* Fixed height wrapper so all cards align, even without a badge */}
                <div style={{ minHeight: "1.5rem", display: "flex", justifyContent: "center", alignItems: "flex-end" }}>
                  {badge && (
                    <span style={{ background: "#FFBF00", color: "#1F3855", fontSize: "0.6rem", fontFamily: "var(--font-inter)", fontWeight: 800, padding: "0.3rem 0.75rem", borderRadius: 4, letterSpacing: "0.08em", boxShadow: "0 0 15px rgba(255,191,0,0.4)" }}>
                      {badge}
                    </span>
                  )}
                </div>
                <GlassCard style={{ background: "rgba(255,255,255,0.03)", display: "flex", flexDirection: "column", gap: "2.5rem", border: "1px solid rgba(255,255,255,0.08)", height: "100%", position: "relative" }}>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "0.75rem", borderBottom: "1px solid rgba(255,255,255,0.08)", paddingBottom: "1rem", marginBottom: "1rem" }}>
                    <h3 style={{ fontFamily: "var(--font-manrope)", fontWeight: 800, fontSize: "1.05rem", textTransform: "uppercase", color: "#FFBF00", margin: 0, lineHeight: 1.4 }}>
                      {title}
                    </h3>
                  </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
                  {rows.map(([k, v]) => (
                    <div key={k} style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: "1rem", borderBottom: "1px solid rgba(255,255,255,0.04)", paddingBottom: "0.6rem", fontFamily: "var(--font-inter)", fontSize: "0.85rem" }}>
                      <span style={{ color: "rgba(255,255,255,0.5)" }}>{k}</span>
                      <span style={{ color: "#fff", fontWeight: 600 }}>{v}</span>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </div>
          </SectionReveal>
        ))}
        </div>

        {/* Footer CTA inside section */}
        <div style={{ height: "1px", background: "rgba(255,255,255,0.1)", marginBottom: "4rem" }} />
        <SectionReveal style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "2.5rem" }}>
          <div>
            <h3 style={{ fontFamily: "var(--font-manrope)", fontWeight: 800, fontSize: "1.35rem", textTransform: "uppercase", color: "#fff", marginBottom: "0.5rem" }}>
              Request Quote or Engineering Deck
            </h3>
            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.88rem", maxWidth: 520, lineHeight: 1.6 }}>
              Looking for full machine lists or material specifications? Request a quote or send drawings directly to our desk.
            </p>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1.25rem" }}>
            <Link href="/rfq">
              <button className="btn-primary" style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.8rem", padding: "0.85rem 1.75rem" }}>
                REQUEST QUOTE <ArrowUpRight size={16} />
              </button>
            </Link>
          </div>
        </SectionReveal>

      </div>
    </section>
  );
}
