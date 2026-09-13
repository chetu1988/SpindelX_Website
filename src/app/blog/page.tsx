"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { GlassCard } from "@/components/ui/GlassCard";
import { staggerContainer, slideUp } from "@/lib/animations";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const POSTS = [
  { slug: "design-engineers-guide-sheet-metal-bending", title: "Design Engineer's Guide to Sheet Metal Bending Allowances", date: "Jul 08, 2026", read: "6 min", cat: "ENGINEERING", excerpt: "Understand K-factor, bend deductions, and flat pattern calculations to prevent dimensional shifts on the shop floor." },
  { slug: "6kw-vs-4kw-fiber-laser-cutting-comparison", title: "6 kW vs 4 kW Fiber Lasers: Edge Quality and Speed", date: "Jun 24, 2026", read: "4 min", cat: "MACHINING", excerpt: "Comparing cutting velocities, dross formation, and thickness limits across steel alloys at different power levels." },
  { slug: "mtc-traceability-digital-manufacturing", title: "Mill Test Certificate Traceability in Digital Manufacturing", date: "Jun 12, 2026", read: "5 min", cat: "QUALITY", excerpt: "How linking MTC codes to job travelers prevents raw grade mix-ups and ensures regulatory compliance." },
];

const CATS = ["ALL", "ENGINEERING", "MACHINING", "QUALITY"];

export default function Blog() {
  const [cat, setCat] = useState("ALL");
  const filtered = POSTS.filter(p => cat === "ALL" || p.cat === cat);

  return (
    <div style={{ background: "#1F3855", color: "#fff", minHeight: "100vh", paddingTop: "8rem", paddingBottom: "5rem", position: "relative", overflow: "hidden" }}>
      <div className="blueprint-bg-lg" style={{ position: "absolute", inset: 0, opacity: 0.25, pointerEvents: "none" }} />
      <div className="container-xl" style={{ position: "relative", zIndex: 1 }}>
        <motion.div variants={staggerContainer} initial="hidden" animate="visible" style={{ maxWidth: 700, marginBottom: "3rem" }}>
          <motion.span variants={slideUp} className="section-tag">ENGINEERING JOURNAL</motion.span>
          <motion.h1 variants={slideUp} style={{ fontFamily: "var(--font-manrope)", fontWeight: 800, fontSize: "clamp(2.5rem, 5vw, 4.5rem)", textTransform: "uppercase", color: "#fff", lineHeight: 1.05 }}>
            SpindelX <span style={{ color: "#FFBF00" }}>Logs</span>
          </motion.h1>
        </motion.div>
        <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", marginBottom: "3rem" }}>
          {CATS.map(c => (
            <button key={c} onClick={() => setCat(c)} style={{ padding: "0.4rem 1rem", borderRadius: 999, border: `1px solid ${cat === c ? "#FFBF00" : "rgba(255,255,255,0.12)"}`, background: cat === c ? "#FFBF00" : "rgba(255,255,255,0.05)", color: cat === c ? "#1F3855" : "rgba(255,255,255,0.6)", fontFamily: "var(--font-inter)", fontSize: "0.6rem", letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: cat === c ? 700 : 400, cursor: "pointer", transition: "all 0.3s" }}>{c}</button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filtered.map((p, i) => (
            <SectionReveal key={p.slug} delay={i * 0.05}>
              <GlassCard style={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontFamily: "var(--font-inter)", fontSize: "0.6rem", letterSpacing: "0.1em" }}>
                    <span style={{ color: "#FFBF00", fontWeight: 600, textTransform: "uppercase" }}>{p.cat}</span>
                    <div style={{ display: "flex", gap: "1rem", color: "rgba(255,255,255,0.35)" }}>
                      <span style={{ display: "flex", alignItems: "center", gap: "0.3rem" }}><Calendar size={10} />{p.date}</span>
                      <span style={{ display: "flex", alignItems: "center", gap: "0.3rem" }}><Clock size={10} />{p.read}</span>
                    </div>
                  </div>
                  <h3 style={{ fontFamily: "var(--font-manrope)", fontWeight: 700, fontSize: "0.95rem", textTransform: "uppercase", color: "#fff", lineHeight: 1.3 }}>{p.title}</h3>
                  <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.72rem", lineHeight: 1.65 }}>{p.excerpt}</p>
                </div>
                <Link href={`/blog/${p.slug}`} style={{ marginTop: "1.5rem", display: "inline-flex", alignItems: "center", gap: "0.4rem", fontFamily: "var(--font-manrope)", fontWeight: 700, fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)", transition: "color 0.3s" }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#FFBF00"}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.6)"}>
                  READ ARTICLE <ArrowRight size={10} />
                </Link>
              </GlassCard>
            </SectionReveal>
          ))}
        </div>
      </div>
    </div>
  );
}
