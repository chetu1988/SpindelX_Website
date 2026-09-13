"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Upload, Search, FileEdit, LayoutGrid, Zap, CornerDownRight, Ruler, Package, Truck, LucideIcon } from "lucide-react";
import { MANUFACTURING_PROCESS } from "@/lib/constants";

const icons: Record<string, LucideIcon> = { Upload, Search, FileEdit, LayoutGrid, Zap, CornerDownRight, Ruler, Package, Truck };

export function ProcessTimeline() {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <section ref={ref} style={{ background: "#fff", color: "#111", padding: "5rem 0", position: "relative", overflow: "hidden" }}>
      <div className="blueprint-bg" style={{ position: "absolute", inset: 0, opacity: 0.025, pointerEvents: "none" }} />
      <div className="container-xl" style={{ position: "relative", zIndex: 1 }}>
        <div style={{ marginBottom: "3rem" }}>
          <span className="section-tag">MANUFACTURING PROCESS</span>
          <h2 style={{ fontFamily: "var(--font-manrope)", fontWeight: 800, fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "#1F3855", textTransform: "uppercase", lineHeight: 1.1 }}>
            From Drawing to <span style={{ color: "#1F3855", textDecoration: "underline", textDecorationColor: "#FFBF00" }}>Dispatch</span>
          </h2>
          <p style={{ color: "#6b7280", fontSize: "1.05rem", maxWidth: "100%", marginTop: "0.75rem" }}>5 precision steps. Zero surprises. Every order follows the same controlled sequence.</p>
        </div>

        {/* Progress line (Desktop only, connects the centered step circles) */}
        <div style={{ position: "relative", marginBottom: "1rem" }} className="hidden lg:block">
          {/* Faint background track */}
          <div style={{ position: "absolute", top: 20, left: "10%", right: "10%", height: 2, background: "#e5e7eb" }} />
          
          {/* Faint amber base line */}
          <div style={{ position: "absolute", top: 20, left: "10%", right: "10%", height: 2, background: "rgba(255,191,0,0.2)" }} />

          {/* The dynamic traveling pulse */}
          <motion.div 
            animate={{ 
              left: ["10%", "90%"], 
              opacity: [0, 1, 1, 0] 
            }}
            transition={{ 
              duration: 2.5, 
              ease: "easeInOut", 
              repeat: Infinity,
              times: [0, 0.1, 0.9, 1] 
            }}
            style={{ 
              position: "absolute", 
              top: 19, 
              width: 150, 
              height: 4, 
              background: "linear-gradient(90deg, transparent, #FFBF00, #FFBF00, transparent)", 
              boxShadow: "0 0 12px rgba(255,191,0,0.8)", 
              borderRadius: "50%",
              transform: "translateX(-50%)"
            }} 
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {MANUFACTURING_PROCESS.map((step) => {
            const Icon = icons[step.icon as keyof typeof icons] || Upload;
            return (
              <div key={step.id} style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
                {/* Centered Number Circle Badge */}
                <div style={{ width: 44, height: 44, borderRadius: "50%", background: "#FFBF00", color: "#1F3855", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-manrope)", fontSize: "1.1rem", fontWeight: 800, marginBottom: "1.25rem", position: "relative", zIndex: 2, border: "4px solid #fff", boxShadow: "0 4px 12px rgba(255,191,0,0.3)", cursor: "default" }}>
                  {String(step.id).padStart(2, "0")}
                </div>
                {/* step description card */}
                <div style={{ background: "#f9fafb", border: "1px solid #f3f4f6", borderRadius: 16, padding: "1.75rem 1.25rem", minHeight: 200, display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem", transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)", width: "100%", boxShadow: "0 4px 12px rgba(0,0,0,0.02)", position: "relative", overflow: "hidden" }}
                  onMouseEnter={e => { 
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,191,0,0.4)"; 
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 15px 40px -10px rgba(31,56,85,0.1)"; 
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                  }}
                  onMouseLeave={e => { 
                    (e.currentTarget as HTMLElement).style.borderColor = "#f3f4f6"; 
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 12px rgba(0,0,0,0.02)"; 
                    (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  }}>
                  
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: "rgba(31,56,85,0.06)", border: "1px solid rgba(31,56,85,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Icon size={22} style={{ color: "#1F3855" }} />
                  </div>
                  <h4 style={{ fontFamily: "var(--font-manrope)", fontWeight: 800, fontSize: "0.95rem", textTransform: "uppercase", color: "#1F3855", letterSpacing: "0.04em", lineHeight: 1.3 }}>{step.title}</h4>
                  <p style={{ color: "#6b7280", fontSize: "0.85rem", lineHeight: 1.6 }}>{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
