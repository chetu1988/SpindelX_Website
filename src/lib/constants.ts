export const BRAND = {
  name: "SpindelX",
  tagline: "Engineering Precision. Manufacturing Excellence.",
  description: "Premium Precision Sheet Metal Manufacturing from DXF Review to Production with Complete Process Control.",
  email: "spindelx@outlook.com",
  phone: "+91 79755 25982",
  address: { street: "#235, JCK Industrial Park, Belagola Industrial Area", city: "Mysore", state: "Karnataka - 570016", country: "India" },
  social: {
    instagram: "https://www.instagram.com/spindelx/",
    facebook: "https://www.facebook.com/profile.php?id=61591664144259",
  },
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Quality", href: "/quality" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
] as const;

export const SERVICES = [
  { id: "laser-cutting", title: "Laser Sheet Cutting", icon: "Zap", description: "6 kW fiber laser cutting with ±0.1mm tolerance on mild steel, stainless steel, and aluminium sheets.", specs: ["6 kW Fiber Laser", "±0.1mm Tolerance", "MS / SS / Aluminium", "Up to 25mm MS Sheets"], href: "/#capabilities" },
  { id: "laser-tube-cutting", title: "Laser Tube Cutting", icon: "RotateCw", description: "First time in Mysore. Dedicated CNC rotary laser cutting for tubes, pipes, and square profiles up to Ø240mm.", specs: ["First Time in Mysore", "Up to Ø240mm Capacity", "Round & Square Profiles", "±0.1mm Joint Alignment"], href: "/#capabilities" },
  { id: "cnc-bending", title: "CNC Bending", icon: "CornerDownRight", description: "150-ton CNC press brake with precision backgauge for complex multi-bend parts.", specs: ["150 Ton Press Brake", "Complex Multi-Bend", "Backgauge Precision", "Bend Simulation"], href: "/#capabilities" },
  { id: "fabrication", title: "Precision Fabrication", icon: "Layers", description: "End-to-end sheet metal fabrication including assemblies, sub-assemblies, and weldments.", specs: ["Full Assemblies", "Weldments", "Surface Finishing", "Quality Documentation"], href: "/#capabilities" },
  { id: "engineering-support", title: "Engineering Support", icon: "Cpu", description: "DFM review, DXF cleanup, flat pattern validation, and bend feasibility analysis.", specs: ["DXF Review", "DFM Analysis", "Flat Pattern", "Bend Feasibility"], href: "/#capabilities" },
  { id: "prototype", title: "Prototype Development", icon: "FlaskConical", description: "Rapid prototype development with short lead times and full engineering support.", specs: ["Rapid Turnaround", "Full Engineering Support", "First Piece Approval", "Design Iteration"], href: "/#capabilities" },
  { id: "production", title: "Production Manufacturing", icon: "Factory", description: "Scalable batch production with material traceability and dispatch documentation.", specs: ["Batch Production", "Material Traceability", "Dispatch Documentation", "Consistent Quality"], href: "/#capabilities" },
  { id: "inspection", title: "Inspection & Quality", icon: "ShieldCheck", description: "In-process and final inspection with calibrated instruments and NCR tracking.", specs: ["Calibrated Instruments", "NCR Tracking", "Quality Reports", "Customer Documentation"], href: "/quality" },
  { id: "traceability", title: "Material Traceability", icon: "ScanLine", description: "Full material traceability from incoming certificates to finished goods.", specs: ["Material Certificates", "Lot Tracking", "Incoming Inspection", "Certificate Management"], href: "/quality" },
] as const;

export const INDUSTRIES = [
  { id: "medical", title: "Medical Equipment", icon: "Heart", description: "High-grade Stainless Steel and Aluminium fabrication for sterile medical device housings, mobile carts, and rigid equipment frames." },
  { id: "automotive", title: "Automotive", icon: "Car", description: "Precision-engineered brackets, stampings, and critical body components trusted by automotive OEMs and Tier-1 suppliers." },
  { id: "machine-builders", title: "Machine Builders", icon: "Settings", description: "Custom heavy-duty enclosures, rigid machine frames, safety guards, and full sub-assemblies for OEM builders." },
  { id: "automation", title: "Automation", icon: "Bot", description: "Precision structural framing, custom cable trays, and control panels built for high-speed industrial automation." },
  { id: "robotics", title: "Robotics", icon: "Cpu", description: "Lightweight, high-rigidity structural components designed for advanced robotic cells and custom end-of-arm tooling." },
  { id: "electrical-panels", title: "Electrical Panels", icon: "Zap", description: "Custom electrical panel enclosures, precision mounting plates, and heavy-duty switchgear housings." },
  { id: "ev", title: "Electric Vehicles", icon: "BatteryCharging", description: "Thermally-optimized battery enclosures, robust charger housings, and structural metal components for the EV sector." },
  { id: "architecture", title: "Architecture", icon: "Building2", description: "Aesthetic, precision-cut architectural metalwork including custom building facades, premium signage, and decorative elements." },
] as const;

export const WHY_SPINDELX = [
  { id: "engineering-first", title: "Engineering First", description: "Every project undergoes a rigorous DFM review. We resolve potential manufacturing issues before a single laser cut is made.", icon: "Cpu" },
  { id: "digital-manufacturing", title: "Digital Manufacturing", description: "Paperless, CNC-driven precision. Digital job cards and smart routing eliminate manual errors on the shop floor.", icon: "Monitor" },
  { id: "process-control", title: "Process Control", description: "Zero tribal knowledge. Every operation is strictly documented and digitally logged for highly repeatable manufacturing.", icon: "Sliders" },
  { id: "first-piece", title: "First Piece Approval", description: "Zero assumptions. First-off components are rigorously measured and validated against CAD before batch release.", icon: "CheckCircle" },
  { id: "quality-docs", title: "Quality Documentation", description: "Complete transparency. Material certificates, dimensional reports, and QA sign-offs provided with every dispatch.", icon: "FileCheck" },
  { id: "fast-turnaround", title: "Fast Turnaround", description: "Optimized scheduling algorithms ensure streamlined production and strictly reliable lead times.", icon: "Clock" },
  { id: "traceability", title: "Full Traceability", description: "100% lot-level traceability linking every finished part back to its original mill heat number.", icon: "ScanLine" },
  { id: "prototype-to-production", title: "Prototype to Production", description: "Seamless scaling. We maintain the exact same quality standards from rapid prototypes to high-volume batch production.", icon: "TrendingUp" },
] as const;

export const MANUFACTURING_PROCESS = [
  { id: 1, title: "CAD & DFM Review", description: "DXF/STEP drawings analyzed for bend clearances and manufacturability.", icon: "Search" },
  { id: 2, title: "CNC Laser Cutting", description: "High-power 6 kW fiber laser cuts precise blanks with ±0.1mm tolerance.", icon: "Zap" },
  { id: 3, title: "CNC Precision Bending", description: "160-ton multi-axis press brake forms parts with complete bend control.", icon: "CornerDownRight" },
  { id: 4, title: "Quality Inspection", description: "Dimensional verification reports logged against material heat numbers.", icon: "Ruler" },
  { id: 5, title: "Packaging & Dispatch", description: "Parts packed safely and dispatched with mill certificates and QA logs.", icon: "Truck" },
] as const;

export const CAPABILITIES_STATS = [
  { value: 6, suffix: " KW", label: "Fiber Laser Power", description: "High-powered cutting for MS, SS & Aluminium" },
  { value: 160, suffix: "T", label: "CNC Press Brake", description: "Precision bending with backgauge accuracy" },
  { value: 5, suffix: "+", label: "Materials", description: "Mild Steel, Stainless Steel, Aluminium, Copper, Brass" },
  { value: 0.1, suffix: "mm", label: "Laser Tolerance", description: "±0.1mm cutting accuracy consistently achieved" },
] as const;

export const MATERIALS = [
  { name: "Mild Steel (MS)", grades: ["IS 2062", "HR / CR sheets"], thicknesses: "0.8mm – 25mm", finishes: ["Raw", "Powder Coated", "Painted", "Zinc Coated"] },
  { name: "Stainless Steel (SS)", grades: ["SS304", "SS316", "SS316L"], thicknesses: "0.8mm – 12mm", finishes: ["Brushed", "Mirror", "Raw", "Electropolished"] },
  { name: "Aluminium", grades: ["6061", "5052", "3003"], thicknesses: "1mm – 12mm", finishes: ["Raw", "Anodized", "Powder Coated"] },
  { name: "Copper", grades: ["C101", "C110"], thicknesses: "0.5mm – 6mm", finishes: ["Raw", "Polished"] },
  { name: "Brass", grades: ["CZ108", "Commercial"], thicknesses: "0.5mm – 6mm", finishes: ["Raw", "Polished"] },
] as const;

export const QUALITY_PROCESSES = [
  { step: 1, title: "Incoming Material Inspection", description: "Rigorous verification of all incoming raw materials against mill certificates and heat numbers.", icon: "PackageSearch" },
  { step: 2, title: "First Piece Approval", description: "Comprehensive dimensional and visual inspection of the first article before authorizing batch production.", icon: "CheckSquare" },
  { step: 3, title: "In-Process Inspection", description: "Continuous quality gates at laser cutting, CNC bending, and assembly stages to ensure zero drift.", icon: "ScanLine" },
  { step: 4, title: "Final Dimensional Check", description: "Complete measurement and validation against original CAD drawings prior to packaging.", icon: "Ruler" },
  { step: 5, title: "NCR Management", description: "Strict tracking of non-conformances with immediate root-cause analysis and corrective actions.", icon: "AlertCircle" },
  { step: 6, title: "Dispatch Documentation", description: "Complete dispatch package including inspection reports, material certificates, and QA sign-offs.", icon: "FileText" },
] as const;
