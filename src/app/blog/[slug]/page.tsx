import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const POSTS: Record<string, { title: string; date: string; read: string; cat: string; content: string }> = {
  "design-engineers-guide-sheet-metal-bending": {
    title: "Design Engineer's Guide to Sheet Metal Bending Allowances",
    date: "Jul 08, 2026", read: "6 min", cat: "ENGINEERING",
    content: `Understanding bend allowances is critical for accurate flat pattern generation in precision sheet metal manufacturing.

## K-Factor

The K-factor represents the position of the neutral axis relative to the material thickness. For mild steel:
- **Soft materials (annealed):** K = 0.50
- **Standard cold-rolled:** K = 0.42–0.44  
- **Hard materials:** K = 0.33–0.38

## Bend Allowance Formula

**BA = (π × angle/180) × (R + K × T)**

Where R = inside bend radius, T = material thickness.

## Practical Guidance

At SpindelX, we review every DXF for flat pattern accuracy before cutting begins. Common issues found:
- Incorrect K-factor assumptions for SS304 vs MS
- Missing bend relief on edge bends
- Tight inside radii causing cracking on harder grades

Contact our engineering team for DFM review before sending your drawings to any fabricator.`,
  },
  "6kw-vs-4kw-fiber-laser-cutting-comparison": {
    title: "6 kW vs 4 kW Fiber Lasers: Edge Quality and Speed",
    date: "Jun 24, 2026", read: "4 min", cat: "MACHINING",
    content: `Higher wattage in fiber laser systems unlocks capability that 4 kW systems cannot match in industrial sheet metal production.

## Speed Comparison (MS)

| Thickness | 4 kW | 6 kW | Improvement |
|---|---|---|---|
| 1.0 mm | 22 m/min | 34 m/min | +55% |
| 3.0 mm | 10 m/min | 16 m/min | +60% |
| 6.0 mm | 3 m/min | 5.5 m/min | +83% |
| 12 mm  | 1.1 m/min | 2.2 m/min | +100% |

## Edge Quality at 6 kW

With nitrogen assist gas at 12–16 bar, our 6 kW achieves:
- **Dross-free edge** up to 6mm stainless
- **Oxide-free cut face** on aluminium up to 8mm
- **Burr-free** mild steel up to 15mm

These outputs mean minimal post-processing before bending — a key quality advantage for precision fabrication.`,
  },
  "mtc-traceability-digital-manufacturing": {
    title: "Mill Test Certificate Traceability in Digital Manufacturing",
    date: "Jun 12, 2026", read: "5 min", cat: "QUALITY",
    content: `In aerospace, medical, and EV sectors, being able to prove the exact metal grade used in a finished part is a regulatory and contractual requirement.

## What is MTC Traceability?

Mill Test Certificates (MTCs) are issued by steel mills confirming:
- Chemical composition (carbon, manganese, sulphur, silicon)
- Mechanical properties (yield strength, UTS, elongation)
- Heat/batch number

## Our Traceability System

At SpindelX, every incoming coil or sheet is tagged at goods inward with its MTC reference. This reference travels through:

1. **Incoming Inspection → Material Card**
2. **Material Card → Job Traveler** (linked to customer PO)
3. **Job Traveler → Dispatch Document**

The customer receives the MTC alongside their parts. For critical applications, we can provide a CoC (Certificate of Conformity).

## Why It Matters

A single material substitution — MS HR instead of IS 2062 Grade E250 — can cause weld defects, corrosion failures, or statutory non-compliance. Traceability eliminates this risk.`,
  },
};

export function generateStaticParams() {
  return Object.keys(POSTS).map((slug) => ({
    slug: slug,
  }));
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = POSTS[params.slug];
  if (!post) return (
    <div style={{ background: "#1F3855", color: "#fff", minHeight: "100vh", paddingTop: "8rem", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ textAlign: "center" }}>
        <h1 style={{ fontFamily: "var(--font-manrope)", fontWeight: 800, fontSize: "3rem", color: "#fff" }}>POST NOT FOUND</h1>
        <Link href="/blog" className="btn-primary" style={{ marginTop: "1.5rem", display: "inline-flex" }}>← BACK TO BLOG</Link>
      </div>
    </div>
  );

  const lines = post.content.split("\n");

  return (
    <div style={{ background: "#1F3855", color: "#fff", minHeight: "100vh", paddingTop: "8rem", paddingBottom: "5rem", position: "relative", overflow: "hidden" }}>
      <div className="blueprint-bg-lg" style={{ position: "absolute", inset: 0, opacity: 0.25, pointerEvents: "none" }} />
      <div className="container-xl" style={{ position: "relative", zIndex: 1, maxWidth: 780 }}>
        <Link href="/blog" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", fontFamily: "var(--font-inter)", fontSize: "0.65rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: "2.5rem", transition: "color 0.3s" }}>
          <ArrowLeft size={12} /> BACK TO JOURNAL
        </Link>
        <div>
          <span style={{ fontFamily: "var(--font-inter)", fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#FFBF00", fontWeight: 600, display: "block", marginBottom: "1rem" }}>{post.cat} — {post.date} · {post.read} read</span>
          <h1 style={{ fontFamily: "var(--font-manrope)", fontWeight: 800, fontSize: "clamp(1.5rem, 4vw, 2.75rem)", textTransform: "uppercase", color: "#fff", lineHeight: 1.15, marginBottom: "3rem" }}>{post.title}</h1>
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "2.5rem" }}>
            {lines.map((line, i) => {
              if (!line.trim()) return <div key={i} style={{ height: "0.75rem" }} />;
              if (line.startsWith("## ")) return <h2 key={i} style={{ fontFamily: "var(--font-manrope)", fontWeight: 700, fontSize: "1rem", textTransform: "uppercase", color: "#FFBF00", letterSpacing: "0.05em", marginTop: "2rem", marginBottom: "0.75rem" }}>{line.slice(3)}</h2>;
              if (line.startsWith("| ")) {
                if (line.startsWith("| --- ") || line.startsWith("|---")) return null;
                const cells = line.split("|").filter(Boolean).map(s => s.trim());
                return <div key={i} style={{ display: "grid", gridTemplateColumns: `repeat(${cells.length}, 1fr)`, gap: "0.5rem", padding: "0.4rem 0", borderBottom: "1px solid rgba(255,255,255,0.05)", fontFamily: "var(--font-inter)", fontSize: "0.72rem", color: "rgba(255,255,255,0.7)" }}>{cells.map((c, j) => <span key={j}>{c}</span>)}</div>;
              }
              if (line.startsWith("- **")) return <div key={i} style={{ display: "flex", gap: "0.6rem", alignItems: "baseline", marginBottom: "0.4rem" }}><span style={{ color: "#FFBF00", flexShrink: 0, fontFamily: "var(--font-inter)", fontSize: "0.7rem" }}>—</span><span style={{ color: "rgba(255,255,255,0.65)", fontFamily: "var(--font-inter)", fontSize: "0.75rem", lineHeight: 1.6 }}>{line.replace(/- \*\*(.*?)\*\*: /g, '$1: ')}</span></div>;
              return <p key={i} style={{ color: "rgba(255,255,255,0.65)", fontFamily: "var(--font-inter)", fontSize: "0.82rem", lineHeight: 1.75 }}>{line}</p>;
            })}
          </div>
          <div style={{ marginTop: "3rem", padding: "1.5rem", border: "1px solid rgba(255,191,0,0.15)", borderRadius: 12, background: "rgba(255,191,0,0.04)" }}>
            <span style={{ fontFamily: "var(--font-inter)", fontSize: "0.6rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#FFBF00", display: "block", marginBottom: "0.5rem" }}>SUBMIT YOUR DRAWINGS</span>
            <p style={{ color: "rgba(255,255,255,0.6)", fontFamily: "var(--font-inter)", fontSize: "0.75rem", marginBottom: "1rem" }}>Get precision manufacturing feedback from our engineers — free with every RFQ.</p>
            <Link href="/rfq" className="btn-primary" style={{ display: "inline-flex", fontSize: "0.65rem" }}>REQUEST A QUOTE</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
