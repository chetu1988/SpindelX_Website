"use client";
import { motion } from "framer-motion";
import { Settings, Bot, Cpu, Zap, Heart, Car, BatteryCharging, Plane, Building2, Wrench, LucideIcon } from "lucide-react";
import { INDUSTRIES } from "@/lib/constants";
import { GlassCard } from "@/components/ui/GlassCard";
import { staggerContainerSlow, slideUp } from "@/lib/animations";

const icons: Record<string, LucideIcon> = { Settings, Bot, Cpu, Zap, Heart, Car, BatteryCharging, Plane, Building2, Wrench };

export function IndustriesGrid() {
  return (
    <section id="industries" style={{ background: "#fff", padding: "5rem 0", position: "relative", overflow: "hidden" }}>
      <div className="blueprint-bg" style={{ position: "absolute", inset: 0, opacity: 0.02, pointerEvents: "none" }} />
      <div className="container-xl" style={{ position: "relative", zIndex: 1 }}>
        <div style={{ marginBottom: "3rem" }}>
          <span className="section-tag">INDUSTRIES SERVED</span>
          <h2 style={{ fontFamily: "var(--font-manrope)", fontWeight: 800, fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "#1F3855", textTransform: "uppercase", lineHeight: 1.1 }}>
            Engineered for <span style={{ color: "#FFBF00" }}>Your Industry</span>
          </h2>
           <p style={{ color: "#6b7280", fontSize: "0.95rem", maxWidth: "100%", marginTop: "0.75rem" }}>From machine builders to aerospace — precision parts for demanding applications.</p>
        </div>
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={staggerContainerSlow} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
          {INDUSTRIES.map(ind => {
            const Icon = icons[ind.icon as keyof typeof icons] || Settings;
            return (
              <motion.div key={ind.id} variants={slideUp} style={{ display: "flex", height: "100%" }}>
                <GlassCard tiltStrength={5} className="flex-1" style={{ 
                  background: "#f9fafb", 
                  border: "1px solid #f3f4f6", 
                  display: "flex", 
                  flexDirection: "column", 
                  padding: "1.5rem", 
                  cursor: "default" 
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                    <div style={{ minWidth: 48, width: 48, height: 48, borderRadius: 12, background: "rgba(31,56,85,0.06)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <Icon size={24} style={{ color: "#1F3855" }} />
                    </div>
                    <h3 style={{ fontFamily: "var(--font-manrope)", fontWeight: 800, fontSize: "1.05rem", textTransform: "uppercase", color: "#1F3855", letterSpacing: "0.03em", margin: 0, lineHeight: 1.25 }}>
                      {ind.title}
                    </h3>
                  </div>
                  
                  {/* Divider Line */}
                  <div style={{ width: "100%", height: "1px", background: "linear-gradient(90deg, rgba(31,56,85,0.1) 0%, transparent 100%)", marginTop: "1rem", marginBottom: "1.25rem" }} />

                  <p style={{ color: "#4b5563", fontSize: "0.95rem", lineHeight: 1.6, margin: 0 }}>
                    {ind.description}
                  </p>
                </GlassCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
