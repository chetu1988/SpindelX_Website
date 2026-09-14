"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { GlassCard } from "@/components/ui/GlassCard";
import { BRAND } from "@/lib/constants";
import { staggerContainer, slideUp } from "@/lib/animations";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault(); setStatus("submitting");
    try {
      const r = await fetch("https://api.web3forms.com/submit", { 
        method: "POST", 
        headers: { "Content-Type": "application/json", "Accept": "application/json" }, 
        body: JSON.stringify({ ...form, subject: "SpindelX Contact Form", access_key: "85df0e33-1af2-4583-b321-cb1155452fc8" }) 
      });
      setStatus(r.ok ? "success" : "error");
      if (r.ok) setForm({ name: "", company: "", email: "", phone: "", message: "" });
    } catch { setStatus("error"); }
  };

  const inputStyle: React.CSSProperties = { background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8, padding: "0.75rem 1rem", fontSize: "0.75rem", color: "#fff", outline: "none", width: "100%", fontFamily: "var(--font-inter)", transition: "border-color 0.3s" };
  const labelStyle: React.CSSProperties = { fontFamily: "var(--font-inter)", fontSize: "0.6rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", fontWeight: 600, marginBottom: "0.4rem", display: "block" };

  return (
    <div style={{ background: "#1F3855", color: "#fff", minHeight: "100vh", paddingTop: "8rem", paddingBottom: "5rem", position: "relative", overflow: "hidden" }}>
      <div className="blueprint-bg-lg" style={{ position: "absolute", inset: 0, opacity: 0.2, pointerEvents: "none" }} />
      <div className="container-xl grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start relative z-10">
        <div className="lg:col-span-5">
          <span className="section-tag">CONTACT US</span>
          <h1 style={{ fontFamily: "var(--font-manrope)", fontWeight: 800, fontSize: "clamp(2rem, 4vw, 3.5rem)", textTransform: "uppercase", color: "#fff", lineHeight: 1.05, marginBottom: "1.5rem" }}>
            Talk to an <span style={{ color: "#FFBF00" }}>Engineer</span>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.8rem", lineHeight: 1.7, maxWidth: 380, marginBottom: "2.5rem" }}>Have questions about tolerances, batch capacities, or DFM? Contact us directly.</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {[{ Icon: MapPin, label: "FACILITY", text: <>{BRAND.address.street},<br/>{BRAND.address.city}, {BRAND.address.state} {BRAND.address.country}</> }, { Icon: Mail, label: "EMAIL", text: BRAND.email, href: `mailto:${BRAND.email}` }, { Icon: Phone, label: "PHONE", text: BRAND.phone, href: `tel:${BRAND.phone}` }].map(({ Icon, label, text, href }, i) => (
              <div key={label} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <Icon size={18} style={{ color: "#FFBF00", marginTop: 2, flexShrink: 0 }} />
                <div>
                  <span style={{ fontFamily: "var(--font-inter)", fontSize: "0.6rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", display: "block", marginBottom: "0.2rem" }}>{label}</span>
                  {href ? <a href={href} style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.8rem" }}>{text}</a> : <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.8rem", lineHeight: 1.5, display: "block" }}>{text}</span>}
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: "2.5rem", padding: "0.75rem 1rem", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 10, background: "rgba(255,255,255,0.04)", display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <Clock size={14} style={{ color: "#FFBF00" }} />
            <span style={{ fontFamily: "var(--font-inter)", fontSize: "0.6rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)" }}>Response SLA: Under 24 Business Hours</span>
          </div>
        </div>
        <SectionReveal className="lg:col-span-7 w-full">
          <GlassCard disableTilt={true} style={{ padding: "2.5rem", background: "rgba(255,255,255,0.04)" }}>
            {status === "success" ? (
              <div style={{ textAlign: "center", padding: "3rem 0" }}>
                <CheckCircle size={48} style={{ color: "#00FF66", margin: "0 auto 1rem" }} />
                <h3 style={{ fontFamily: "var(--font-manrope)", fontWeight: 700, fontSize: "1.1rem", textTransform: "uppercase", color: "#fff", marginBottom: "0.75rem" }}>Message Dispatched</h3>
                <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.75rem", maxWidth: 320, margin: "0 auto 1.5rem" }}>Your message has been routed to our engineering queue at spindelx@outlook.com.</p>
                <button onClick={() => setStatus("idle")} className="btn-primary" style={{ fontSize: "0.7rem" }}>SEND ANOTHER</button>
              </div>
            ) : (
              <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {[{ key: "name", label: "Full Name *", type: "text", placeholder: "John Doe", required: true }, { key: "company", label: "Company *", type: "text", placeholder: "OEM Ltd", required: true }].map(f => (
                    <div key={f.key}><label style={labelStyle}>{f.label}</label><input type={f.type} required={f.required} value={(form as any)[f.key]} onChange={e => setForm({ ...form, [f.key]: e.target.value })} placeholder={f.placeholder} style={inputStyle} onFocus={e => (e.target as HTMLInputElement).style.borderColor = "#FFBF00"} onBlur={e => (e.target as HTMLInputElement).style.borderColor = "rgba(255,255,255,0.1)"} /></div>
                  ))}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {[{ key: "email", label: "Email *", type: "email", placeholder: "john@company.com", required: true }, { key: "phone", label: "Phone *", type: "tel", placeholder: "+91 XXXXX XXXXX", required: true }].map(f => (
                    <div key={f.key}><label style={labelStyle}>{f.label}</label><input type={f.type} required={f.required} value={(form as any)[f.key]} onChange={e => setForm({ ...form, [f.key]: e.target.value })} placeholder={f.placeholder} style={inputStyle} onFocus={e => (e.target as HTMLInputElement).style.borderColor = "#FFBF00"} onBlur={e => (e.target as HTMLInputElement).style.borderColor = "rgba(255,255,255,0.1)"} /></div>
                  ))}
                </div>
                <div><label style={labelStyle}>Message *</label><textarea required rows={4} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} placeholder="Specify materials, tolerances, or scope..." style={{ ...inputStyle, resize: "none" }} onFocus={e => (e.target as HTMLTextAreaElement).style.borderColor = "#FFBF00"} onBlur={e => (e.target as HTMLTextAreaElement).style.borderColor = "rgba(255,255,255,0.1)"} /></div>
                <button type="submit" disabled={status === "submitting"} className="btn-primary" style={{ alignSelf: "flex-start", display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.7rem" }}>
                  {status === "submitting" ? "DISPATCHING..." : "SEND MESSAGE"} <Send size={13} />
                </button>
                {status === "error" && <p style={{ color: "#ff6b6b", fontFamily: "var(--font-inter)", fontSize: "0.65rem", textTransform: "uppercase", letterSpacing: "0.1em" }}>Error dispatching. Please retry.</p>}
              </form>
            )}
          </GlassCard>
        </SectionReveal>
      </div>
    </div>
  );
}
