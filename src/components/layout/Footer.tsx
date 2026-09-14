"use client";
import Link from "next/link";
import { Mail, Phone, MapPin, CornerDownRight } from "lucide-react";
import { BRAND, NAV_LINKS, SERVICES } from "@/lib/constants";

const SocialIcons = {
  LinkedIn: () => (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
    </svg>
  ),
  Instagram: () => (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  ),
  Facebook: () => (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  ),
  YouTube: () => (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.54C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#1F3855"/>
    </svg>
  ),
};

export function Footer() {
  const yr = new Date().getFullYear();
  return (
    <footer style={{ background: "#1F3855", color: "#fff", position: "relative", borderTop: "1px solid rgba(255,255,255,0.05)", overflow: "hidden" }}>
      <div className="blueprint-bg" style={{ position: "absolute", inset: 0, opacity: 0.3, pointerEvents: "none" }} />
      <div className="container-xl" style={{ position: "relative", zIndex: 1, paddingTop: "4rem", paddingBottom: "2rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "3rem", marginBottom: "3rem" }}>
          {/* Brand */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <Link href="/" style={{ display: "flex", alignItems: "center" }}>
              <img src="/images/logo.png" alt="SpindelX" style={{ height: "45px", width: "auto", objectFit: "contain" }} />
            </Link>
            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.85rem", lineHeight: 1.7, maxWidth: 240 }}>{BRAND.tagline}</p>
            <div style={{ display: "flex", gap: "0.75rem" }}>
              {[
                { href: BRAND.social.instagram, Icon: SocialIcons.Instagram },
                { href: BRAND.social.facebook, Icon: SocialIcons.Facebook },
                { href: BRAND.social.youtube, Icon: SocialIcons.YouTube },
              ].map(({ href, Icon }) => (
                <a key={href} href={href} target="_blank" rel="noopener noreferrer"
                  style={{ width: 32, height: 32, borderRadius: "50%", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(255,255,255,0.5)", transition: "all 0.3s" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "#FFBF00"; (e.currentTarget as HTMLElement).style.borderColor = "#FFBF00"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.5)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)"; }}>
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ fontFamily: "var(--font-manrope)", fontWeight: 700, fontSize: "0.82rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#FFBF00", marginBottom: "1.25rem" }}>SERVICES</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {SERVICES.slice(0, 6).map(s => (
                <Link key={s.id} href={s.href}
                  style={{ display: "flex", alignItems: "center", gap: "0.4rem", color: "rgba(255,255,255,0.7)", fontSize: "0.85rem", transition: "color 0.3s" }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#FFBF00"}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.5)"}>
                  <CornerDownRight size={9} style={{ opacity: 0.4 }} />{s.title}
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontFamily: "var(--font-manrope)", fontWeight: 700, fontSize: "0.82rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#FFBF00", marginBottom: "1.25rem" }}>RESOURCES</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {NAV_LINKS.slice(1).map(l => (
                <Link key={l.href} href={l.href}
                  style={{ display: "flex", alignItems: "center", gap: "0.4rem", color: "rgba(255,255,255,0.7)", fontSize: "0.85rem", transition: "color 0.3s" }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#FFBF00"}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.5)"}>
                  <CornerDownRight size={9} style={{ opacity: 0.4 }} />{l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontFamily: "var(--font-manrope)", fontWeight: 700, fontSize: "0.82rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#FFBF00", marginBottom: "1.25rem" }}>CONTACT</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                { Icon: MapPin, text: `${BRAND.address.street}, ${BRAND.address.city}, ${BRAND.address.state} ${BRAND.address.country}`, href: null },
                { Icon: Mail, text: BRAND.email, href: `mailto:${BRAND.email}` },
                { Icon: Phone, text: BRAND.phone, href: `tel:${BRAND.phone}` },
              ].map(({ Icon, text, href }) => (
                <div key={text} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                  <Icon size={14} style={{ color: "#FFBF00", flexShrink: 0, marginTop: "0.1rem" }} />
                  {href
                    ? <a href={href} style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.85rem", transition: "color 0.3s" }} onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#FFBF00"} onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.7)"}>{text}</a>
                    : <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.85rem" }}>{text}</span>
                  }
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ height: 1, background: "rgba(255,255,255,0.05)", marginBottom: "1.5rem" }} />
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flexWrap: "wrap", gap: "1rem" }}>
          <span style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.78rem", fontFamily: "var(--font-inter)", textAlign: "center" }}>
            © {yr} SpindelX. All rights reserved. Made with precision in Mysore, Karnataka, India.
          </span>
        </div>
      </div>
    </footer>
  );
}
