"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { Mail, Phone, ArrowUpRight } from "lucide-react";
import { BRAND } from "@/lib/constants";

export function CTABanner() {
  return (
    <section style={{ background: "#1F3855", color: "#fff", padding: "5rem 0", position: "relative", overflow: "hidden" }}>
      <div className="blueprint-bg-lg" style={{ position: "absolute", inset: 0, opacity: 0.25, pointerEvents: "none" }} />
      <motion.div style={{ position: "absolute", top: "-20%", left: "-10%", width: 500, height: 500, background: "radial-gradient(circle, rgba(255,191,0,0.12) 0%, transparent 70%)", borderRadius: "50%", pointerEvents: "none" }} animate={{ x: [0, 40, 0], y: [0, 20, 0] }} transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }} />
      <motion.div style={{ position: "absolute", bottom: "-20%", right: "-10%", width: 500, height: 500, background: "radial-gradient(circle, rgba(255,191,0,0.1) 0%, transparent 70%)", borderRadius: "50%", pointerEvents: "none" }} animate={{ x: [0, -40, 0], y: [0, -20, 0] }} transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }} />
      <div className="container-xl" style={{ position: "relative", zIndex: 1, textAlign: "center", maxWidth: 800, margin: "0 auto" }}>
        <SectionReveal style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "2rem" }}>
          <span className="section-tag">GET STARTED</span>
          <h2 style={{ fontFamily: "var(--font-manrope)", fontWeight: 800, fontSize: "clamp(2.5rem, 6vw, 5rem)", textTransform: "uppercase", color: "#fff", lineHeight: 1.0 }}>
            Ready to Start<br />Your <span style={{ color: "#FFBF00" }}>Project?</span>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.85rem", maxWidth: 480, lineHeight: 1.7 }}>Upload your DXF, STEP, or PDF files. Our engineering team will review your drawings and send back a structured quote within 24 hours.</p>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1rem" }}>
            <Link href="/rfq"><MagneticButton><button className="btn-primary" style={{ padding: "0.85rem 2.5rem", fontSize: "0.8rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>REQUEST QUOTE <ArrowUpRight size={16} /></button></MagneticButton></Link>
            <Link href="/contact"><button className="btn-outline" style={{ padding: "0.85rem 2.5rem", fontSize: "0.8rem" }}>CONTACT ENGINEERING</button></Link>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "2rem", color: "rgba(255,255,255,0.4)", fontSize: "0.7rem", fontFamily: "var(--font-inter)", marginTop: "1rem" }}>
            <a href={`mailto:${BRAND.email}`} style={{ display: "flex", alignItems: "center", gap: "0.5rem", transition: "color 0.3s" }} onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#FFBF00"} onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.4)"}>
              <Mail size={14} style={{ color: "#FFBF00" }} />{BRAND.email}
            </a>
            <a href={`tel:${BRAND.phone}`} style={{ display: "flex", alignItems: "center", gap: "0.5rem", transition: "color 0.3s" }} onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#FFBF00"} onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.4)"}>
              <Phone size={14} style={{ color: "#FFBF00" }} />{BRAND.phone}
            </a>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
