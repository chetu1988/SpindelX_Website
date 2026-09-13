"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { staggerContainer, slideUp } from "@/lib/animations";
import { Maximize2, X } from "lucide-react";

const CATS = ["ALL", "MACHINES", "PARTS", "QUALITY", "FACTORY"];
const ITEMS = [
  { id: 1, title: "6 kW Fiber Laser", cat: "MACHINES", src: "/images/laser_cutting.png", desc: "Our high-precision fiber laser machine cutting mild steel sheets. Configured with a 3000 × 1500 mm dual-shuttle cutting table, achieving ±0.1 mm repeatability." },
  { id: 2, title: "CNC Bending (150T)", cat: "MACHINES", src: "/images/cnc_bending.png", desc: "Precision bend setup on the CNC press brake for multi-bend geometries. 4-axis backgauge coordinates are calculated automatically via CAD bending simulation." },
  { id: 3, title: "Laser Sparks Close-up", cat: "FACTORY", src: "/images/laser_sparks.png", desc: "Close-up of molten metal during precision fiber laser cutting. High gas-pressure nitrogen ejects slag instantly to leave oxide-free edges." },
  { id: 4, title: "Precision Parts", cat: "PARTS", src: "/images/precision_parts.png", desc: "Batches of stainless steel brackets and custom bent enclosures ready for assembly. All parts undergo rigorous dimensional inspections." },
  { id: 5, title: "Dimensional Inspection", cat: "QUALITY", src: "/images/quality_inspection.png", desc: "Calibrated measurement checks on finished components. All reports are logged digitally against material heat numbers for complete traceability." },
  { id: 6, title: "Factory Floor", cat: "FACTORY", src: "/images/factory_interior.png", desc: "Structured factory floor interior designed for optimal DFM workflow routing from laser bed to press brake bays." },
];

export default function Gallery() {
  const [cat, setCat] = useState("ALL");
  const [selected, setSelected] = useState<typeof ITEMS[0] | null>(null);
  const detailRef = useRef<HTMLDivElement>(null);
  const filtered = ITEMS.filter(i => cat === "ALL" || i.cat === cat);

  const handleSelect = (item: typeof ITEMS[0]) => {
    setSelected(item);
    setTimeout(() => {
      detailRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  return (
    <div style={{ background: "#1F3855", color: "#fff", minHeight: "100vh", paddingTop: "8rem", paddingBottom: "5rem", position: "relative", overflow: "hidden" }}>
      <div className="blueprint-bg-lg" style={{ position: "absolute", inset: 0, opacity: 0.25, pointerEvents: "none" }} />
      
      <div className="container-xl" style={{ position: "relative", zIndex: 1 }}>
        <motion.div variants={staggerContainer} initial="hidden" animate="visible" style={{ maxWidth: 700, marginBottom: "2rem" }}>
          <motion.span variants={slideUp} className="section-tag">GALLERY</motion.span>
          <motion.h1 variants={slideUp} style={{ fontFamily: "var(--font-manrope)", fontWeight: 800, fontSize: "clamp(2.5rem, 5vw, 4.5rem)", textTransform: "uppercase", color: "#fff", lineHeight: 1.05 }}>
            Precision <span style={{ color: "#FFBF00" }}>Portfolio</span>
          </motion.h1>
        </motion.div>

        {/* Inline Active Detail Panel (Replaces separate Modal) */}
        <AnimatePresence>
          {selected && (
            <motion.div ref={detailRef} initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              style={{ overflow: "hidden", marginBottom: "3rem", scrollMarginTop: "7rem" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: "2.5rem", padding: "2rem", border: "1px solid rgba(255,191,0,0.25)", borderRadius: 20, background: "rgba(255,191,0,0.03)", position: "relative" }} className="grid grid-cols-1 md:grid-cols-2">
                <button onClick={() => setSelected(null)}
                  style={{ position: "absolute", top: "1.5rem", right: "1.5rem", width: 36, height: 36, borderRadius: "50%", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "rgba(255,255,255,0.6)", transition: "all 0.3s" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "#FFBF00"; (e.currentTarget as HTMLElement).style.borderColor = "#FFBF00"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.6)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)"; }}>
                  <X size={16} />
                </button>
                <div style={{ position: "relative", aspectRatio: "16/9", borderRadius: 14, overflow: "hidden", border: "1px solid rgba(255,255,255,0.08)" }}>
                  <Image src={selected.src} alt={selected.title} fill style={{ objectFit: "cover" }} />
                </div>
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: "1rem", paddingRight: "2rem" }}>
                  <span style={{ fontFamily: "var(--font-inter)", fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#FFBF00", fontWeight: 700 }}>{selected.cat}</span>
                  <h2 style={{ fontFamily: "var(--font-manrope)", fontWeight: 800, fontSize: "1.75rem", textTransform: "uppercase", color: "#fff", lineHeight: 1.2 }}>{selected.title}</h2>
                  <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.95rem", lineHeight: 1.6 }}>{selected.desc}</p>
                  <button onClick={() => setSelected(null)} style={{ border: "none", background: "none", color: "#FFBF00", fontFamily: "var(--font-inter)", fontSize: "0.85rem", fontWeight: 600, cursor: "pointer", display: "inline-flex", width: "max-content", marginTop: "1rem" }}>
                    &larr; BACK TO GRID
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Category Filters */}
        <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", marginBottom: "3rem" }}>
          {CATS.map(c => (
            <button key={c} onClick={() => setCat(c)} style={{ padding: "0.4rem 1rem", borderRadius: 999, border: `1px solid ${cat === c ? "#FFBF00" : "rgba(255,255,255,0.12)"}`, background: cat === c ? "#FFBF00" : "rgba(255,255,255,0.05)", color: cat === c ? "#1F3855" : "rgba(255,255,255,0.6)", fontFamily: "var(--font-inter)", fontSize: "0.6rem", letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: cat === c ? 700 : 400, cursor: "pointer", boxShadow: cat === c ? "0 0 12px rgba(255,191,0,0.4)" : "none", transition: "all 0.3s" }}>{c}</button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map(item => (
              <motion.div key={item.id} layout initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.92 }} transition={{ duration: 0.35 }}
                style={{ position: "relative", borderRadius: 16, overflow: "hidden", border: "1px solid rgba(255,255,255,0.08)", cursor: "pointer" }}
                onClick={() => handleSelect(item)}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,191,0,0.4)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)"; }}>
                <div style={{ position: "relative", aspectRatio: "4/3" }}>
                  <Image src={item.src} alt={item.title} fill sizes="(max-width:768px) 100vw, 33vw" style={{ objectFit: "cover", transition: "transform 0.5s ease" }}
                    onMouseEnter={e => (e.target as HTMLImageElement).style.transform = "scale(1.05)"}
                    onMouseLeave={e => (e.target as HTMLImageElement).style.transform = "scale(1)"} />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(31,56,85,0.9) 0%, transparent 50%)", opacity: 0, transition: "opacity 0.3s" }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.opacity = "1"}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.opacity = "0"} />
                  <div style={{ position: "absolute", top: "0.75rem", right: "0.75rem", width: 30, height: 30, borderRadius: "50%", background: "rgba(31,56,85,0.8)", border: "1px solid rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Maximize2 size={12} style={{ color: "rgba(255,255,255,0.6)" }} />
                  </div>
                  <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "1rem" }}>
                    <span style={{ fontFamily: "var(--font-inter)", fontSize: "0.55rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#FFBF00", display: "block", marginBottom: "0.2rem" }}>{item.cat}</span>
                    <h3 style={{ fontFamily: "var(--font-manrope)", fontWeight: 700, fontSize: "0.85rem", textTransform: "uppercase", color: "#fff" }}>{item.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
