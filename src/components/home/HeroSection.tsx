"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { staggerContainer, slideUp, textReveal } from "@/lib/animations";

export function HeroSection() {
  const particles = Array.from({ length: 12 }, (_, i) => ({
    id: i, x: Math.random() * 100, y: Math.random() * 100,
    size: Math.random() * 3 + 2, delay: Math.random() * 4, dur: Math.random() * 8 + 8,
  }));

  return (
    <section style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", background: "#1F3855", overflow: "hidden", padding: "6rem 0 4rem" }}>
      <div className="blueprint-bg-lg" style={{ position: "absolute", inset: 0, opacity: 0.4, pointerEvents: "none" }} />

      {particles.map(p => (
        <motion.div key={p.id} style={{ position: "absolute", left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size, borderRadius: "50%", background: "rgba(255,191,0,0.2)", pointerEvents: "none" }}
          animate={{ y: ["0px", "-35px", "0px"], opacity: [0.1, 0.4, 0.1] }}
          transition={{ duration: p.dur, repeat: Infinity, delay: p.delay, ease: "easeInOut" }} />
      ))}

      <div className="container-xl hero-grid" style={{ position: "relative", zIndex: 1, display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: "4rem", alignItems: "center", width: "100%" }}>
        {/* Left: Copy */}
        <motion.div variants={staggerContainer} initial="hidden" animate="visible" style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "1.5rem" }}>
          <motion.div variants={slideUp} style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "rgba(31,56,85,0.5)", border: "1px solid rgba(255,191,0,0.3)", borderRadius: "9999px", padding: "0.45rem 1.25rem" }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#00FF66", animation: "pulse 2s infinite" }} />
            <span style={{ fontFamily: "var(--font-inter)", fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 600, color: "rgba(255,255,255,0.9)" }}>AVAILABLE FOR PROTO AND PRODUCTION ORDERS</span>
          </motion.div>

          <h1 style={{ fontFamily: "var(--font-manrope)", fontWeight: 800, lineHeight: 1.0, letterSpacing: "-0.03em", color: "#fff", margin: 0 }}>
            <div style={{ overflow: "hidden", marginBottom: "0.1em" }}>
              <motion.div variants={textReveal} style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}>FORMED WITH</motion.div>
            </div>
            <div style={{ overflow: "hidden", marginBottom: "0.1em" }}>
              <motion.div variants={textReveal} style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", color: "#FFBF00" }}>PRECISION.</motion.div>
            </div>
          </h1>

          <motion.p variants={slideUp} style={{ color: "rgba(255,255,255,0.8)", fontSize: "1.05rem", lineHeight: 1.7, maxWidth: 520 }}>
            Precision Sheet Metal Manufacturing. From DXF review to volume production with complete process control, lot-level traceability, and inspection documentation.
          </motion.p>

          <motion.div variants={slideUp} style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
            <Link href="/rfq"><MagneticButton><button className="btn-primary">REQUEST QUOTE &rarr;</button></MagneticButton></Link>
            <Link href="/#capabilities"><button className="btn-outline">VIEW CAPABILITIES</button></Link>
          </motion.div>

          <motion.div variants={slideUp} style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginTop: "2rem", color: "rgba(255,255,255,0.45)", fontFamily: "var(--font-inter)", fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>
            <div style={{ width: 20, height: 32, border: "1px solid rgba(255,255,255,0.2)", borderRadius: 10, display: "flex", justifyContent: "center", padding: "4px 0" }}>
              <motion.div style={{ width: 4, height: 4, borderRadius: "50%", background: "#FFBF00" }} animate={{ y: [0, 14, 0] }} transition={{ duration: 1.5, repeat: Infinity }} />
            </div>
            SCROLL TO EXPLORE
          </motion.div>
        </motion.div>

        {/* Right: Stack of 3 Borderless Machine Simulations */}
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          style={{ display: "flex", flexDirection: "column", gap: "2.5rem", width: "100%", position: "relative" }} className="hero-right">
          
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle, rgba(255,191,0,0.1) 0%, transparent 70%)", borderRadius: "50%", filter: "blur(50px)", pointerEvents: "none" }} />

          {/* MONITOR 1: 6kW FIBER LASER MACHINE (SPLIT SHEET & TUBE LASER CUTTING SIMULATIONS) */}
          <div style={{ background: "rgba(255,255,255,0.01)", border: "none", borderRadius: 20, padding: "0.5rem", backdropFilter: "blur(12px)", width: "100%", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontFamily: "var(--font-manrope)", fontWeight: 800, fontSize: "0.8rem", color: "#FFBF00", textTransform: "uppercase", letterSpacing: "0.08em" }}>FIBER LASER CELLS (SHEET &amp; TUBE)</span>
              <span style={{ color: "#00FF66", fontSize: "0.55rem", fontFamily: "monospace", fontWeight: 700 }}>● RUNNING: CNC_ACTIVE</span>
            </div>
            <div style={{ height: 135, background: "rgba(15,30,50,0.6)", borderRadius: 12, border: "none", position: "relative", overflow: "hidden" }}>
              <div className="blueprint-bg" style={{ position: "absolute", inset: 0, opacity: 0.15 }} />
              <svg viewBox="0 0 400 135" style={{ width: "100%", height: "100%" }}>
                
                {/* --- LEFT SIDE: SHEET LASER CUTTING (X = 0 to 190) --- */}
                {/* Guide Rail */}
                <line x1="15" y1="20" x2="185" y2="20" stroke="rgba(255,255,255,0.25)" strokeWidth="2.5" />
                {/* Slat bed support combs */}
                {[...Array(12)].map((_, i) => (
                  <line key={i} x1={25 + i * 13} y1="103" x2={25 + i * 13} y2="120" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" />
                ))}
                {/* Sheet metal plate (resting on slats) */}
                <rect x="25" y="100" width="150" height="4" fill="rgba(255,191,0,0.3)" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />
                {/* Cut line path */}
                <line x1="25" y1="102" x2="175" y2="102" stroke="rgba(15,30,50,0.7)" strokeWidth="2" />
                
                {/* Sheet carriage moving horizontally */}
                <motion.g
                  animate={{ x: [25, 140, 25] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}>
                  <rect x="0" y="10" width="26" height="22" rx="3" fill="rgba(80,95,115,0.9)" stroke="rgba(255,255,255,0.25)" strokeWidth="0.75" />
                  <rect x="9" y="32" width="8" height="12" fill="#FFBF00" />
                  <path d="M 8,44 L 18,44 L 13,50 Z" fill="#fff" />
                  {/* Vertical Beam */}
                  <line x1="13" y1="50" x2="13" y2="101" stroke="#00E5FF" strokeWidth="2" filter="drop-shadow(0 0 3px #00E5FF)" />
                  <circle cx="13" cy="101" r="2.5" fill="#fff" filter="drop-shadow(0 0 5px #FFBF00)" />
                  {/* Sparks */}
                  {[...Array(3)].map((_, i) => (
                    <motion.circle key={i} r="1" fill="#FFBF00"
                      animate={{
                        cx: [13, 13 + (Math.random() - 0.5) * 30],
                        cy: [101, 101 + Math.random() * 15],
                        opacity: [1, 0]
                      }}
                      transition={{ duration: 0.4, repeat: Infinity, delay: i * 0.08 }} />
                  ))}
                </motion.g>

                {/* --- VERTICAL DASHED CENTER SPLIT --- */}
                <line x1="200" y1="10" x2="200" y2="125" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="4 4" />

                {/* --- RIGHT SIDE: TUBE LASER CUTTING (X = 210 to 400) --- */}
                <text x="215" y="15" fill="#FFBF00" fontSize="7" fontFamily="monospace" letterSpacing="1" opacity="0.8">TUBE LASER</text>
                
                {/* Guide Rail */}
                <line x1="215" y1="20" x2="385" y2="20" stroke="rgba(255,255,255,0.25)" strokeWidth="2.5" />
                
                <defs>
                  <linearGradient id="pipeGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="rgba(140,155,170,1)" />
                    <stop offset="20%" stopColor="rgba(220,235,250,1)" />
                    <stop offset="50%" stopColor="rgba(80,95,110,1)" />
                    <stop offset="80%" stopColor="rgba(40,50,65,1)" />
                    <stop offset="100%" stopColor="rgba(100,115,130,1)" />
                  </linearGradient>
                </defs>
                
                {/* Main Pipe (Horizontal) */}
                <rect x="235" y="75" width="130" height="24" fill="url(#pipeGradient)" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
                {/* Pipe end (hollow profile) */}
                <ellipse cx="365" cy="87" rx="4" ry="12" fill="url(#pipeGradient)" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5" />
                <ellipse cx="365" cy="87" rx="2" ry="9" fill="#0f1e32" />

                {/* Rotating Chuck holding the pipe */}
                <g transform="translate(235, 87)">
                  <rect x="-20" y="-22" width="20" height="44" fill="rgba(40,55,75,1)" stroke="rgba(255,255,255,0.2)" strokeWidth="1" rx="2" />
                  {/* Chuck center hollow */}
                  <ellipse cx="0" cy="0" rx="2" ry="14" fill="#0f1e32" />
                  
                  {/* Simulated rotating jaws */}
                  <motion.rect x="-15" y="-18" width="10" height="8" fill="#FFBF00" rx="1"
                    animate={{ y: [-18, 10, -18], height: [8, 4, 8] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }} />
                  <motion.rect x="-15" y="10" width="10" height="8" fill="#FFBF00" rx="1"
                    animate={{ y: [10, -18, 10], height: [8, 4, 8] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }} />
                </g>

                {/* The dark hole inside the pipe (hidden until piece drops) */}
                <motion.rect x="275" y="78" width="40" height="12" rx="3" fill="#0f1e32" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5"
                  animate={{ opacity: [0, 0, 1, 1, 0] }}
                  transition={{ duration: 8, repeat: Infinity, times: [0, 0.41, 0.42, 0.95, 1] }}
                />
                
                {/* The cutout piece falling down (hidden until piece drops) */}
                <motion.g
                  animate={{ 
                    y: [0, 0, 0, 20, 20, 0],
                    opacity: [0, 0, 1, 0, 0, 0],
                    rotate: [0, 0, 0, 10, 10, 0],
                    scale: [1, 1, 1, 0.8, 0.8, 1]
                  }}
                  transition={{ duration: 8, repeat: Infinity, times: [0, 0.41, 0.42, 0.7, 0.95, 1] }}
                  style={{ transformOrigin: "295px 84px" }}
                >
                  <rect x="275" y="78" width="40" height="12" rx="3" fill="url(#pipeGradient)" />
                </motion.g>

                {/* Glowing cut outline that draws as laser moves */}
                <motion.rect x="275" y="78" width="40" height="12" rx="3" fill="none" stroke="#FFBF00" strokeWidth="1.5" filter="drop-shadow(0 0 2px #FFBF00)"
                  strokeDasharray="100"
                  animate={{ strokeDashoffset: [100, 0, 0, 100] }}
                  transition={{ duration: 8, repeat: Infinity, times: [0, 0.4, 0.95, 1], ease: "linear" }}
                />

                {/* Laser Head Assembly cutting the pipe */}
                <motion.g
                  animate={{ x: [275, 315, 315, 275] }}
                  transition={{ duration: 8, repeat: Infinity, times: [0, 0.4, 0.5, 1], ease: "linear" }}>
                  
                  {/* Gantry / Head Mount sliding on rail */}
                  <rect x="-12" y="10" width="24" height="15" rx="2" fill="rgba(60,75,95,1)" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
                  
                  {/* Vertical Z-axis arm */}
                  <rect x="-6" y="25" width="12" height="35" fill="rgba(80,95,115,1)" />
                  
                  {/* Laser Nozzle */}
                  <polygon points="-4,60 4,60 0,72" fill="#FFBF00" />
                  
                  <motion.g
                    animate={{ opacity: [0, 1, 1, 0, 0, 0] }}
                    transition={{ duration: 8, repeat: Infinity, times: [0, 0.02, 0.38, 0.4, 0.95, 1] }}
                  >
                    {/* Laser Beam down to the pipe surface (Y=75) */}
                    <motion.line x1="0" y1="72" x2="0" y2="75" stroke="#00E5FF" strokeWidth="2.5" filter="drop-shadow(0 0 4px #00E5FF)"
                      animate={{ opacity: [1, 0.4, 1] }}
                      transition={{ duration: 0.05, repeat: Infinity }} />
                    
                    {/* Sparks deflecting off the tube */}
                    <motion.g>
                      {[...Array(8)].map((_, i) => (
                        <motion.circle key={i} r="1.5" fill="#FFBF00" filter="drop-shadow(0 0 3px #FFBF00)"
                          animate={{
                            cx: [0, (Math.random() - 0.5) * 40],
                            cy: [75, 75 + Math.random() * 30 + 10],
                            opacity: [1, 0],
                            scale: [1, 0]
                          }}
                          transition={{ duration: 0.4 + Math.random() * 0.3, repeat: Infinity, delay: i * 0.1 }} />
                      ))}
                    </motion.g>
                    
                    {/* Glowing cut point on tube */}
                    <motion.circle cx="0" cy="75" r="3" fill="#fff" filter="drop-shadow(0 0 6px #FFBF00)"
                      animate={{ opacity: [1, 0.5, 1], scale: [1, 1.2, 1] }}
                      transition={{ duration: 0.1, repeat: Infinity }} />
                  </motion.g>
                </motion.g>

              </svg>
            </div>
          </div>

          {/* MONITOR 2: CNC PRESS BRAKE BENDING */}
          <div style={{ background: "rgba(255,255,255,0.01)", border: "none", borderRadius: 20, padding: "0.5rem", backdropFilter: "blur(12px)", width: "100%", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontFamily: "var(--font-manrope)", fontWeight: 800, fontSize: "0.8rem", color: "#FFBF00", textTransform: "uppercase", letterSpacing: "0.08em" }}>CNC PRESS BRAKE BENDING</span>
              <span style={{ color: "#00FF66", fontSize: "0.55rem", fontFamily: "monospace", fontWeight: 700 }}>● RUNNING: HYDRAULIC_OK</span>
            </div>
            <div style={{ height: 135, background: "rgba(15,30,50,0.6)", borderRadius: 12, border: "none", position: "relative", overflow: "hidden" }}>
              <div className="blueprint-bg" style={{ position: "absolute", inset: 0, opacity: 0.15 }} />
              <svg viewBox="0 0 400 135" style={{ width: "100%", height: "100%" }}>
                {/* Side frames */}
                <rect x="25" y="10" width="28" height="115" fill="rgba(80,95,115,0.6)" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
                <rect x="347" y="10" width="28" height="115" fill="rgba(80,95,115,0.6)" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
                
                {/* Cylinder housings */}
                <rect x="65" y="5" width="24" height="35" fill="rgba(60,75,95,0.9)" stroke="rgba(255,255,255,0.2)" />
                <rect x="311" y="5" width="24" height="35" fill="rgba(60,75,95,0.9)" stroke="rgba(255,255,255,0.2)" />

                {/* Lower Bed / Die Holder (Static) */}
                <rect x="53" y="105" width="294" height="20" fill="rgba(50,65,85,0.85)" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
                {/* Lower V-Die Block */}
                <path d="M 120,105 L 140,92 L 260,92 L 280,105 Z" fill="rgba(110,125,140,0.7)" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                <path d="M 180,92 L 195,108 L 205,108 L 220,92" fill="none" stroke="rgba(15,30,50,0.7)" strokeWidth="2" />

                {/* Upper Ram Assembly (Moves Vertically) */}
                <motion.g
                  animate={{ y: [0, 25, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
                  
                  {/* Moving Hydraulic Piston Rods */}
                  <rect x="73" y="25" width="8" height="25" fill="#e5e7eb" stroke="rgba(0,0,0,0.2)" />
                  <rect x="319" y="25" width="8" height="25" fill="#e5e7eb" stroke="rgba(0,0,0,0.2)" />

                  {/* Heavy Upper Ram Block */}
                  <rect x="53" y="25" width="294" height="30" fill="rgba(80,95,115,0.85)" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
                  
                  {/* Upper V-Punch Tooling */}
                  <path d="M 130,55 L 270,55 L 270,62 L 203,82 L 197,82 L 130,62 Z" fill="rgba(170,185,200,0.95)" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
                </motion.g>

                {/* Backgauge finger guide indicators */}
                <rect x="100" y="80" width="10" height="15" fill="rgba(255,191,0,0.3)" stroke="#FFBF00" strokeWidth="0.5" />
                <rect x="290" y="80" width="10" height="15" fill="rgba(255,191,0,0.3)" stroke="#FFBF00" strokeWidth="0.5" />

                {/* Bending Metal Sheet */}
                <motion.path d="M 70,91 L 330,91" fill="none" stroke="#FFBF00" strokeWidth="4" strokeLinecap="round"
                  animate={{
                    d: [
                      "M 70,91 L 200,91 L 330,91",
                      "M 75,70 L 200,107 L 325,70",
                      "M 70,91 L 200,91 L 330,91"
                    ]
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} />
              </svg>
            </div>
          </div>

          {/* MONITOR 3: WELDING STATION */}
          <div style={{ background: "rgba(255,255,255,0.01)", border: "none", borderRadius: 20, padding: "0.5rem", backdropFilter: "blur(12px)", width: "100%", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontFamily: "var(--font-manrope)", fontWeight: 800, fontSize: "0.8rem", color: "#FFBF00", textTransform: "uppercase", letterSpacing: "0.08em" }}>WELDING STATION</span>
              <span style={{ color: "#00FF66", fontSize: "0.55rem", fontFamily: "monospace", fontWeight: 700 }}>● RUNNING: ARC_ESTABLISHED</span>
            </div>
            <div style={{ height: 135, background: "rgba(15,30,50,0.6)", borderRadius: 12, border: "none", position: "relative", overflow: "hidden" }}>
              <div className="blueprint-bg" style={{ position: "absolute", inset: 0, opacity: 0.15 }} />
              <svg viewBox="0 0 400 135" style={{ width: "100%", height: "100%" }}>
                {/* Horizontal joint plates */}
                <line x1="40" y1="105" x2="360" y2="105" stroke="rgba(255,255,255,0.2)" strokeWidth="6" strokeLinecap="round" />
                <line x1="40" y1="101" x2="360" y2="101" stroke="#1F3855" strokeWidth="2.5" />

                {/* Weld Seam Bead with Cooling Color Gradient */}
                <motion.path d="M 120,105 L 280,105" fill="none" strokeWidth="5.5" strokeLinecap="round"
                  stroke="url(#coolingWeldBeadConsoleHero)"
                  animate={{ strokeDasharray: ["0, 200", "160, 200", "0, 200"] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }} />

                {/* Pedestal Base */}
                <rect x="50" y="75" width="40" height="30" fill="rgba(70,85,105,0.7)" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
                <circle cx="70" cy="75" r="10" fill="rgba(50,65,85,0.9)" stroke="rgba(255,255,255,0.2)" />

                {/* Robot Arm segments bend dynamically to track the torch head as it moves horizontally */}
                {/* Upper Arm Segment 1 */}
                <motion.line x1="70" y1="75" stroke="rgba(150,165,180,0.8)" strokeWidth="8" strokeLinecap="round"
                  animate={{
                    x2: [120, 210, 120],
                    y2: [40, 30, 40]
                  }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }} />
                
                {/* Elbow joint */}
                <motion.circle r="7.5" fill="rgba(80,95,115,1)" stroke="#fff" strokeWidth="1"
                  animate={{
                    cx: [120, 210, 120],
                    cy: [40, 30, 40]
                  }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }} />

                {/* Forearm Segment 2 */}
                <motion.line stroke="rgba(150,165,180,0.8)" strokeWidth="6" strokeLinecap="round"
                  animate={{
                    x1: [120, 210, 120],
                    y1: [40, 30, 40],
                    x2: [130, 290, 130],
                    y2: [72, 72, 72]
                  }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }} />

                {/* Torch Head */}
                <motion.g
                  animate={{ x: [130, 290, 130], y: [72, 72, 72] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}>
                  
                  {/* Torch nozzle is at Y = 98, constant height above seam joint at Y = 105 */}
                  <path d="M 0,-32 L 0,26 L -6,26 L -6,-10 Z" fill="rgba(220,100,50,0.9)" stroke="rgba(255,255,255,0.25)" />
                  <rect x="-8" y="-32" width="10" height="6" fill="rgba(50,65,85,1)" />
                  
                  {/* Arc welding light at nozzle tip */}
                  <motion.circle cx="-3" cy="26" r="10" fill="url(#arcGlowRobotConsoleHero)"
                    animate={{ scale: [0.9, 1.3, 0.9] }}
                    transition={{ duration: 0.1, repeat: Infinity }} />
                  <motion.circle cx="-3" cy="26" r="15" fill="rgba(0,180,255,0.22)"
                    animate={{ scale: [1, 1.4, 1] }}
                    transition={{ duration: 0.15, repeat: Infinity }} />
                  
                  {/* Flying welding sparks */}
                  {[...Array(5)].map((_, i) => (
                    <motion.circle key={i} r="1.2" fill="#FFBF00"
                      animate={{
                        cx: [-3, -3 + (Math.random() - 0.5) * 40],
                        cy: [26, 26 - Math.random() * 25],
                        opacity: [1, 0]
                      }}
                      transition={{ duration: 0.4, repeat: Infinity, delay: i * 0.05 }} />
                  ))}
                </motion.g>
                <defs>
                  {/* Arc light gradient */}
                  <radialGradient id="arcGlowRobotConsoleHero" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#fff" />
                    <stop offset="35%" stopColor="#00E5FF" />
                    <stop offset="70%" stopColor="#002FFF" stopOpacity="0.45" />
                    <stop offset="100%" stopColor="#000" stopOpacity="0" />
                  </radialGradient>
                  {/* Cooling weld bead linear color gradient */}
                  <linearGradient id="coolingWeldBeadConsoleHero" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="rgba(255,255,255,0.1)" />
                    <stop offset="60%" stopColor="rgba(120,130,140,0.4)" />
                    <stop offset="85%" stopColor="#FF3D00" />
                    <stop offset="95%" stopColor="#FFC107" />
                    <stop offset="100%" stopColor="#fff" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>

        </motion.div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-right { display: none !important; }
        }
      `}</style>
    </section>
  );
}
