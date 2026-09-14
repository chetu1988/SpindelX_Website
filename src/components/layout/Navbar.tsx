"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();

  useEffect(() => scrollY.on("change", v => setScrolled(v > 50)), [scrollY]);
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [open]);

  const navStyle: React.CSSProperties = {
    position: "fixed", top: 0, left: 0, width: "100%", zIndex: 50,
    transition: "all 0.3s ease",
    background: scrolled ? "rgba(31,56,85,0.9)" : "transparent",
    backdropFilter: scrolled ? "blur(16px)" : "none",
    borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
    padding: scrolled ? "0.75rem 0" : "1.25rem 0",
  };

  return (
    <>
      <motion.nav style={navStyle} initial={{ y: -80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
      <div className="container-xl flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <img src="/images/logo.png" alt="SpindelX" style={{ height: "45px", width: "auto", objectFit: "contain" }} />
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map(link => {
            const active = pathname === link.href;
            return (
              <Link key={link.href} href={link.href} style={{ position: "relative", color: active ? "#FFBF00" : "rgba(255,255,255,0.75)", fontFamily: "var(--font-inter)", fontSize: "0.85rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", transition: "color 0.3s", padding: "0.25rem 0" }}
                onMouseEnter={e => { if (!active) (e.target as HTMLElement).style.color = "#fff"; }}
                onMouseLeave={e => { if (!active) (e.target as HTMLElement).style.color = "rgba(255,255,255,0.75)"; }}>
                {link.label}
                {active && <motion.div layoutId="nav-active" style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 2, background: "#FFBF00", borderRadius: 1 }} transition={{ type: "spring", stiffness: 380, damping: 30 }} />}
              </Link>
            );
          })}
        </div>

        {/* CTA */}
        <div className="hidden lg:block">
          <Link href="/rfq">
            <MagneticButton><button className="btn-primary" style={{ padding: "0.6rem 1.4rem", fontSize: "0.75rem" }}>REQUEST QUOTE</button></MagneticButton>
          </Link>
        </div>

        {/* Hamburger */}
        <button className="lg:hidden" onClick={() => setOpen(!open)} style={{ color: "rgba(255,255,255,0.8)", padding: "0.5rem", cursor: "pointer", background: "none", border: "none" }}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.35 }}
            style={{ position: "fixed", top: 60, left: 0, width: "100%", height: "calc(100vh - 60px)", backgroundColor: "#1F3855", zIndex: 9999, display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "3rem 2rem", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {NAV_LINKS.map((link, i) => (
                <motion.div key={link.href} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }}>
                  <Link href={link.href} onClick={() => setOpen(false)} style={{ fontSize: "1.75rem", fontFamily: "var(--font-manrope)", fontWeight: 800, textTransform: "uppercase", letterSpacing: "-0.02em", color: pathname === link.href ? "#FFBF00" : "rgba(255,255,255,0.5)", transition: "color 0.3s" }}>
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
              <div style={{ height: 1, background: "rgba(255,255,255,0.08)", marginBottom: "1.5rem" }} />
              <Link href="/rfq" onClick={() => setOpen(false)} style={{ display: "block" }}>
                <button className="btn-primary" style={{ width: "100%", justifyContent: "center", padding: "1rem", fontSize: "0.75rem", letterSpacing: "0.15em" }}>REQUEST QUOTE</button>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
