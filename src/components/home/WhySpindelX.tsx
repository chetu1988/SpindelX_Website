"use client";
import { motion } from "framer-motion";
import { Cpu, Monitor, Sliders, CheckCircle, FileCheck, Clock, ScanLine, TrendingUp, LucideIcon } from "lucide-react";
import { WHY_SPINDELX } from "@/lib/constants";
import { GlassCard } from "@/components/ui/GlassCard";
import { staggerContainerSlow, slideUp } from "@/lib/animations";

const icons: Record<string, LucideIcon> = { Cpu, Monitor, Sliders, CheckCircle, FileCheck, Clock, ScanLine, TrendingUp };

export function WhySpindelX() {
  return (
    <section style={{ background: "#1F3855", color: "#fff", padding: "5rem 0", position: "relative", overflow: "hidden" }}>
      <div className="blueprint-bg" style={{ position: "absolute", inset: 0, opacity: 0.1, pointerEvents: "none" }} />
      <div className="container-xl" style={{ position: "relative", zIndex: 1 }}>
        <div style={{ marginBottom: "3rem" }}>
          <span className="section-tag">WHY SPINDELX</span>
          <h2 style={{ fontFamily: "var(--font-manrope)", fontWeight: 800, fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "#fff", textTransform: "uppercase", lineHeight: 1.1 }}>
            Built for Engineers<br />Who Demand <span style={{ color: "#FFBF00" }}>Precision</span>
          </h2>
        </div>
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={staggerContainerSlow} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
          {WHY_SPINDELX.map(card => {
            const Icon = icons[card.icon as keyof typeof icons] || Cpu;
            return (
              <motion.div key={card.id} variants={slideUp} style={{ display: "flex", height: "100%" }}>
                <GlassCard tiltStrength={5} className="flex-1" style={{ 
                  display: "flex", 
                  flexDirection: "column", 
                  padding: "2rem", 
                  background: "linear-gradient(145deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)",
                  boxShadow: "0 4px 24px -1px rgba(0,0,0,0.2)",
                  borderTop: "1px solid rgba(255,255,255,0.1)",
                  borderLeft: "1px solid rgba(255,255,255,0.05)"
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                    <div style={{ minWidth: 48, width: 48, height: 48, borderRadius: 12, background: "rgba(255,191,0,0.1)", border: "1px solid rgba(255,191,0,0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <Icon size={24} style={{ color: "#FFBF00" }} />
                    </div>
                    <h3 style={{ fontFamily: "var(--font-manrope)", fontWeight: 800, fontSize: "1.05rem", textTransform: "uppercase", letterSpacing: "0.04em", color: "#fff", lineHeight: 1.3, margin: 0 }}>{card.title}</h3>
                  </div>
                  
                  {/* Divider Line */}
                  <div style={{ width: "100%", height: "1px", background: "linear-gradient(90deg, rgba(255,255,255,0.15) 0%, transparent 100%)", marginTop: "1.25rem", marginBottom: "2rem" }} />

                  <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.95rem", lineHeight: 1.6, fontWeight: 400, margin: 0 }}>{card.description}</p>
                </GlassCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
