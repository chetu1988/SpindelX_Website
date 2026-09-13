"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const MSGS = [
  "INITIALIZING MANUFACTURING SYSTEMS",
  "CONNECTING CNC FIBER LASER...",
  "CALIBRATING PRESS BRAKE AXES...",
  "VERIFYING DFM PARAMETERS...",
  "LOADING PROCESS CONTROLS...",
  "SYSTEM ACTIVE. PRECISION ENGAGED.",
];

export function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [msgIdx, setMsgIdx] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (sessionStorage.getItem("spx_loaded")) { setVisible(false); return; }
    const step = 100 / (2000 / 20);
    const t = setInterval(() => {
      setProgress(p => {
        const n = p + step;
        if (n >= 100) { clearInterval(t); setTimeout(() => { setVisible(false); sessionStorage.setItem("spx_loaded", "1"); }, 400); return 100; }
        return n;
      });
    }, 20);
    const m = setInterval(() => setMsgIdx(i => i < MSGS.length - 1 ? i + 1 : i), 2000 / MSGS.length);
    return () => { clearInterval(t); clearInterval(m); };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div className="loading-screen" initial={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
          <div className="flex flex-col items-center w-full max-w-xs px-8">
            <motion.h1 className="text-white text-3xl font-extrabold tracking-widest mb-1 select-none" initial={{ letterSpacing: "0.2em" }} animate={{ letterSpacing: "0.4em" }} transition={{ duration: 1.5 }}>
              SPINDEL<span style={{ color: "#FFBF00" }}>X</span>
            </motion.h1>
            <p className="font-mono text-[8px] uppercase tracking-wider mb-6 h-4 select-none" style={{ color: "rgba(255,191,0,0.7)" }}>{MSGS[msgIdx]}</p>
            <div className="w-full h-[2px] rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.1)" }}>
              <div className="h-full transition-all duration-100" style={{ width: `${progress}%`, background: "#FFBF00", boxShadow: "0 0 8px #FFBF00" }} />
            </div>
            <div className="flex justify-between w-full mt-2">
              <span className="font-mono text-[8px]" style={{ color: "rgba(255,255,255,0.3)" }}>LOC: MYSORE_IN</span>
              <span className="font-mono text-[9px] font-bold tabular-nums" style={{ color: "rgba(255,255,255,0.5)" }}>{Math.floor(progress)}%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
