"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { GlassCard } from "@/components/ui/GlassCard";
import { BRAND } from "@/lib/constants";
import { CheckCircle, FileText, ArrowRight, ArrowLeft, Send, Plus, Trash2 } from "lucide-react";

const STEPS = ["Company Info", "Part Specs", "Review & Submit"];

interface Part {
  id: string;
  partNumber: string;
  partName: string;
  material: string;
  thickness: string;
  quantity: string;
  surfaceFinish: string;
  deliveryDate: string;
  notes: string;
}

export default function RFQ() {
  const [step, setStep] = useState(0);
  const [company, setCompany] = useState({ companyName: "", contactPerson: "", email: "", phone: "" });
  const [parts, setParts] = useState<Part[]>([{
    id: "1", partNumber: "", partName: "", material: "MS", thickness: "2.0", quantity: "50", surfaceFinish: "Raw", deliveryDate: "", notes: ""
  }]);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const inputStyle: React.CSSProperties = { background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8, padding: "0.75rem 1rem", fontSize: "0.75rem", color: "#fff", outline: "none", width: "100%", fontFamily: "var(--font-inter)", transition: "border-color 0.3s" };
  const labelStyle: React.CSSProperties = { fontFamily: "var(--font-inter)", fontSize: "0.6rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", fontWeight: 600, marginBottom: "0.4rem", display: "block" };

  const addPart = () => {
    setParts([...parts, { id: Math.random().toString(36).substring(7), partNumber: "", partName: "", material: "MS", thickness: "2.0", quantity: "50", surfaceFinish: "Raw", deliveryDate: "", notes: "" }]);
  };

  const removePart = (id: string) => {
    if (parts.length > 1) setParts(parts.filter(p => p.id !== id));
  };

  const updatePart = (id: string, key: keyof Part, value: string) => {
    setParts(parts.map(p => p.id === id ? { ...p, [key]: value } : p));
  };

  const next = () => setStep(s => Math.min(s + 1, 2));
  const back = () => setStep(s => Math.max(s - 1, 0));

  const submit = async () => {
    setStatus("submitting");
    try {
      const partsPayload = parts.map(p => ({
        partNumber: p.partNumber || "N/A",
        partName: p.partName || "N/A",
        material: p.material,
        thickness: p.thickness,
        quantity: p.quantity,
        surfaceFinish: p.surfaceFinish,
        deliveryDate: p.deliveryDate,
        notes: p.notes,
      }));

      const r = await fetch("https://api.web3forms.com/submit", { 
        method: "POST", 
        headers: { "Content-Type": "application/json", "Accept": "application/json" }, 
        body: JSON.stringify({ 
          access_key: "85df0e33-1af2-4583-b321-cb1155452fc8",
          subject: "New SpindelX RFQ Submission",
          company, 
          parts: partsPayload 
        }) 
      });
      setStatus(r.ok ? "success" : "error");
    } catch { setStatus("error"); }
  };

  return (
    <div style={{ background: "#1F3855", color: "#fff", minHeight: "100vh", paddingTop: "8rem", paddingBottom: "5rem", position: "relative", overflow: "hidden" }}>
      <div className="blueprint-bg-lg" style={{ position: "absolute", inset: 0, opacity: 0.25, pointerEvents: "none" }} />
      <div className="container-xl" style={{ position: "relative", zIndex: 1, maxWidth: 900, textAlign: "center" }}>
        <span className="section-tag">REQUEST A QUOTE</span>
        <h1 style={{ fontFamily: "var(--font-manrope)", fontWeight: 800, fontSize: "clamp(2rem, 5vw, 4rem)", textTransform: "uppercase", color: "#fff", marginBottom: "3rem" }}>
          Instant <span style={{ color: "#FFBF00" }}>RFQ</span>
        </h1>

        <div style={{ display: "flex", justifyContent: "center", gap: "1.5rem", marginBottom: "3rem" }}>
          {STEPS.map((s, i) => (
            <div key={s} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.4rem" }}>
              <div style={{ width: 32, height: 32, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-inter)", fontSize: "0.7rem", fontWeight: 700, background: i <= step ? "#FFBF00" : "rgba(255,255,255,0.08)", color: i <= step ? "#1F3855" : "rgba(255,255,255,0.4)", border: i === step ? "2px solid #FFBF00" : "none", boxShadow: i <= step ? "0 0 12px rgba(255,191,0,0.4)" : "none", transition: "all 0.3s" }}>{i + 1}</div>
              <span style={{ fontFamily: "var(--font-inter)", fontSize: "0.55rem", letterSpacing: "0.1em", textTransform: "uppercase", color: i <= step ? "rgba(255,255,255,0.8)" : "rgba(255,255,255,0.3)", whiteSpace: "nowrap" }}>{s}</span>
            </div>
          ))}
        </div>

        <SectionReveal>
          <GlassCard disableTilt={true} style={{ padding: "2.5rem", background: "rgba(255,255,255,0.04)", textAlign: "left" }}>
            {status === "success" ? (
              <div style={{ textAlign: "center", padding: "3rem 0" }}>
                <CheckCircle size={48} style={{ color: "#00FF66", margin: "0 auto 1.25rem" }} />
                <h3 style={{ fontFamily: "var(--font-manrope)", fontWeight: 700, fontSize: "1.1rem", textTransform: "uppercase", color: "#fff", marginBottom: "0.75rem" }}>RFQ Dispatched</h3>
                <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.75rem", maxWidth: 360, margin: "0 auto 1.5rem" }}>Your specs have been routed to {BRAND.email}. An engineer will respond within 24 hours.</p>
                <button onClick={() => { setStep(0); setStatus("idle"); setParts([{ id: "1", partNumber: "", partName: "", material: "MS", thickness: "2.0", quantity: "50", surfaceFinish: "Raw", deliveryDate: "", notes: "" }]); }} className="btn-primary" style={{ fontSize: "0.7rem" }}>SUBMIT NEW RFQ</button>
              </div>
            ) : (
              <>
                {/* Step 0: Company */}
                {step === 0 && (
                  <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                    <h3 style={{ fontFamily: "var(--font-manrope)", fontWeight: 700, fontSize: "0.9rem", color: "#FFBF00", textTransform: "uppercase", borderBottom: "1px solid rgba(255,255,255,0.06)", paddingBottom: "0.75rem", marginBottom: "0.5rem" }}>Company Details</h3>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }}>
                      {[{ k: "companyName", l: "Company Name *", p: "Acme Corp", t: "text", req: true }, { k: "contactPerson", l: "Contact Person *", p: "Jane Smith", t: "text", req: true }, { k: "email", l: "Email *", p: "jane@company.com", t: "email", req: true }, { k: "phone", l: "Phone", p: "+91 XXXXX XXXXX", t: "tel", req: false }].map(({ k, l, p, t, req }) => (
                        <div key={k}><label style={labelStyle}>{l}</label><input type={t} required={req} value={(company as any)[k]} onChange={e => setCompany({ ...company, [k]: e.target.value })} placeholder={p} style={inputStyle} onFocus={e => (e.target as HTMLInputElement).style.borderColor = "#FFBF00"} onBlur={e => (e.target as HTMLInputElement).style.borderColor = "rgba(255,255,255,0.1)"} /></div>
                      ))}
                    </div>
                  </div>
                )}
                {/* Step 1: Part Specs */}
                {step === 1 && (
                  <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                    {parts.map((p, index) => (
                      <div key={p.id} style={{ display: "flex", flexDirection: "column", gap: "1.25rem", background: "rgba(0,0,0,0.15)", padding: "1.5rem", borderRadius: 12, border: "1px solid rgba(255,255,255,0.05)" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid rgba(255,255,255,0.06)", paddingBottom: "0.75rem", marginBottom: "0.5rem" }}>
                          <h3 style={{ fontFamily: "var(--font-manrope)", fontWeight: 700, fontSize: "0.9rem", color: "#FFBF00", textTransform: "uppercase", margin: 0 }}>Part {index + 1}</h3>
                          {parts.length > 1 && (
                            <button onClick={() => removePart(p.id)} style={{ background: "none", border: "none", color: "rgba(255,107,107,0.8)", cursor: "pointer", display: "flex", alignItems: "center", gap: "0.3rem", fontSize: "0.7rem", fontFamily: "var(--font-inter)", textTransform: "uppercase" }}>
                              <Trash2 size={12} /> Remove
                            </button>
                          )}
                        </div>
                        
                        {/* Identity */}
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }}>
                          <div><label style={labelStyle}>Part Number *</label><input type="text" required value={p.partNumber} onChange={e => updatePart(p.id, "partNumber", e.target.value)} placeholder="e.g. SPX-1045" style={inputStyle} onFocus={e => (e.target as HTMLInputElement).style.borderColor = "#FFBF00"} onBlur={e => (e.target as HTMLInputElement).style.borderColor = "rgba(255,255,255,0.1)"} /></div>
                          <div><label style={labelStyle}>Part Name</label><input type="text" value={p.partName} onChange={e => updatePart(p.id, "partName", e.target.value)} placeholder="e.g. Mounting Bracket" style={inputStyle} onFocus={e => (e.target as HTMLInputElement).style.borderColor = "#FFBF00"} onBlur={e => (e.target as HTMLInputElement).style.borderColor = "rgba(255,255,255,0.1)"} /></div>
                        </div>

                        {/* Specs */}
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1.25rem" }}>
                          <div><label style={labelStyle}>Material *</label><select value={p.material} onChange={e => updatePart(p.id, "material", e.target.value)} style={{ ...inputStyle, background: "#1F3855" }}><option value="MS">Mild Steel (MS)</option><option value="SS">Stainless Steel (SS)</option><option value="AL">Aluminium</option></select></div>
                          <div><label style={labelStyle}>Thickness (mm) *</label><input type="text" required value={p.thickness} onChange={e => updatePart(p.id, "thickness", e.target.value)} placeholder="2.0" style={inputStyle} onFocus={e => (e.target as HTMLInputElement).style.borderColor = "#FFBF00"} onBlur={e => (e.target as HTMLInputElement).style.borderColor = "rgba(255,255,255,0.1)"} /></div>
                          <div><label style={labelStyle}>Quantity *</label><input type="number" required value={p.quantity} onChange={e => updatePart(p.id, "quantity", e.target.value)} placeholder="50" style={inputStyle} onFocus={e => (e.target as HTMLInputElement).style.borderColor = "#FFBF00"} onBlur={e => (e.target as HTMLInputElement).style.borderColor = "rgba(255,255,255,0.1)"} /></div>
                        </div>

                        {/* Finishes */}
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }}>
                          <div><label style={labelStyle}>Surface Finish</label><input type="text" value={p.surfaceFinish} onChange={e => updatePart(p.id, "surfaceFinish", e.target.value)} placeholder="e.g. Powder Coated RAL 9005" style={inputStyle} onFocus={e => (e.target as HTMLInputElement).style.borderColor = "#FFBF00"} onBlur={e => (e.target as HTMLInputElement).style.borderColor = "rgba(255,255,255,0.1)"} /></div>
                          <div><label style={labelStyle}>Delivery Date</label><input type="date" value={p.deliveryDate} onChange={e => updatePart(p.id, "deliveryDate", e.target.value)} style={inputStyle} onFocus={e => (e.target as HTMLInputElement).style.borderColor = "#FFBF00"} onBlur={e => (e.target as HTMLInputElement).style.borderColor = "rgba(255,255,255,0.1)"} /></div>
                        </div>

                        {/* Notes */}
                        <div><label style={labelStyle}>Notes / Special Instructions</label><textarea rows={2} value={p.notes} onChange={e => updatePart(p.id, "notes", e.target.value)} placeholder="Tolerances, assembly notes..." style={{ ...inputStyle, resize: "none" }} onFocus={e => (e.target as HTMLTextAreaElement).style.borderColor = "#FFBF00"} onBlur={e => (e.target as HTMLTextAreaElement).style.borderColor = "rgba(255,255,255,0.1)"} /></div>
                      </div>
                    ))}

                    <button onClick={addPart} className="btn-outline" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem", width: "100%", padding: "1rem", borderRadius: 12, borderStyle: "dashed" }}>
                      <Plus size={16} /> ADD ANOTHER PART
                    </button>
                  </div>
                )}
                {/* Step 2: Review */}
                {step === 2 && (
                  <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                    <div>
                      <h3 style={{ fontFamily: "var(--font-manrope)", fontWeight: 700, fontSize: "0.9rem", color: "#FFBF00", textTransform: "uppercase", borderBottom: "1px solid rgba(255,255,255,0.06)", paddingBottom: "0.75rem", marginBottom: "1rem" }}>Company Review</h3>
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", fontSize: "0.75rem" }}>
                        {[["COMPANY", company.companyName], ["CONTACT", company.contactPerson], ["EMAIL", company.email]].map(([k, v]) => (
                          <div key={k}><span style={{ fontFamily: "var(--font-inter)", fontSize: "0.6rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", display: "block", marginBottom: "0.2rem" }}>{k}</span><span style={{ color: "#fff", fontWeight: 600 }}>{v}</span></div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 style={{ fontFamily: "var(--font-manrope)", fontWeight: 700, fontSize: "0.9rem", color: "#FFBF00", textTransform: "uppercase", borderBottom: "1px solid rgba(255,255,255,0.06)", paddingBottom: "0.75rem", marginBottom: "1rem" }}>Parts ({parts.length})</h3>
                      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                        {parts.map((p, i) => (
                          <div key={p.id} style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 8, padding: "1rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                            <div>
                              <span style={{ fontFamily: "var(--font-inter)", fontSize: "0.6rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", display: "block", marginBottom: "0.2rem" }}>PART {i + 1}</span>
                              <span style={{ color: "#fff", fontWeight: 600, fontSize: "0.75rem", display: "block" }}>{p.partNumber || "N/A"}</span>
                              <span style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.7rem", display: "block" }}>{p.partName || "Unnamed"}</span>
                            </div>
                            <div>
                              <span style={{ fontFamily: "var(--font-inter)", fontSize: "0.6rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", display: "block", marginBottom: "0.2rem" }}>SPECS</span>
                              <span style={{ color: "#fff", fontWeight: 600, fontSize: "0.75rem", display: "block" }}>{p.quantity} pcs | {p.material} ({p.thickness}mm)</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Navigation */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "2.5rem", paddingTop: "1.5rem", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                  <button onClick={back} disabled={step === 0} className="btn-outline" style={{ display: "flex", alignItems: "center", gap: "0.4rem", fontSize: "0.7rem", opacity: step === 0 ? 0.3 : 1 }}><ArrowLeft size={12} /> BACK</button>
                  {step < 2
                    ? <button onClick={next} className="btn-primary" style={{ display: "flex", alignItems: "center", gap: "0.4rem", fontSize: "0.7rem" }}>NEXT <ArrowRight size={12} /></button>
                    : <button onClick={submit} disabled={status === "submitting"} className="btn-primary" style={{ display: "flex", alignItems: "center", gap: "0.4rem", fontSize: "0.7rem" }}>{status === "submitting" ? "SUBMITTING..." : "SUBMIT RFQ"} <Send size={12} /></button>
                  }
                </div>
                {status === "error" && <p style={{ color: "#ff6b6b", fontFamily: "var(--font-inter)", fontSize: "0.65rem", textTransform: "uppercase", letterSpacing: "0.1em", marginTop: "1rem" }}>Submission failed. Please retry.</p>}
              </>
            )}
          </GlassCard>
        </SectionReveal>
      </div>
    </div>
  );
}
