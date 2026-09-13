import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        amber: {
          DEFAULT: "#FFBF00",
          50: "#FFF9E6",
          100: "#FFF3CC",
          200: "#FFE799",
          300: "#FFDB66",
          400: "#FFCF33",
          500: "#FFBF00",
          600: "#CC9900",
          700: "#997300",
          800: "#664D00",
          900: "#332600",
        },
        sapphire: {
          DEFAULT: "#1F3855",
          50: "#E8EDF3",
          100: "#D1DBE7",
          200: "#A3B7CF",
          300: "#7593B7",
          400: "#476F9F",
          500: "#2D5078",
          600: "#1F3855",
          700: "#172A40",
          800: "#0F1C2B",
          900: "#080E16",
        },
        neutral: {
          50: "#F8F9FB",
          100: "#EDEDED",
          200: "#D9D9D9",
          300: "#BFBFBF",
          400: "#A6A6A6",
          500: "#8C8C8C",
          600: "#737373",
          700: "#595959",
          800: "#404040",
          900: "#222222",
        },
      },
      fontFamily: {
        manrope: ["var(--font-manrope)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "blueprint-grid":
          "linear-gradient(rgba(255,191,0,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,191,0,0.08) 1px, transparent 1px)",
        "glass-gradient":
          "linear-gradient(135deg, rgba(31,56,85,0.4) 0%, rgba(31,56,85,0.1) 100%)",
        "amber-glow": "radial-gradient(circle at center, rgba(255,191,0,0.15) 0%, transparent 70%)",
      },
      backgroundSize: {
        "blueprint": "40px 40px",
      },
      boxShadow: {
        "glass": "0 4px 24px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255,255,255,0.1)",
        "amber-glow": "0 0 30px rgba(255,191,0,0.3), 0 0 60px rgba(255,191,0,0.1)",
        "sapphire-glow": "0 0 30px rgba(31,56,85,0.4)",
        "card-hover": "0 20px 60px rgba(0,0,0,0.2), 0 0 0 1px rgba(255,191,0,0.2)",
        "premium": "0 8px 32px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.08)",
        "premium-dark": "0 8px 32px rgba(0,0,0,0.4), 0 2px 8px rgba(0,0,0,0.2)",
      },
      animation: {
        "pulse-amber": "pulse-amber 2s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "laser-scan": "laser-scan 3s linear infinite",
        "grain": "grain 0.5s steps(1) infinite",
        "shimmer": "shimmer 2s linear infinite",
        "border-rotate": "border-rotate 3s linear infinite",
        "counter-up": "counter-up 0.5s ease-out forwards",
        "slide-up": "slide-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
      keyframes: {
        "pulse-amber": {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(255,191,0,0.4)" },
          "50%": { boxShadow: "0 0 0 10px rgba(255,191,0,0)" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "laser-scan": {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "10%": { opacity: "1" },
          "90%": { opacity: "1" },
          "100%": { transform: "translateX(100%)", opacity: "0" },
        },
        "grain": {
          "0%": { transform: "translate(0, 0)" },
          "10%": { transform: "translate(-2%, -2%)" },
          "20%": { transform: "translate(-4%, 2%)" },
          "30%": { transform: "translate(2%, -4%)" },
          "40%": { transform: "translate(-2%, 4%)" },
          "50%": { transform: "translate(-4%, -2%)" },
          "60%": { transform: "translate(4%, 2%)" },
          "70%": { transform: "translate(2%, 4%)" },
          "80%": { transform: "translate(-2%, -2%)" },
          "90%": { transform: "translate(4%, -4%)" },
          "100%": { transform: "translate(0, 0)" },
        },
        "shimmer": {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
        "border-rotate": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        "slide-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
      transitionTimingFunction: {
        "smooth": "cubic-bezier(0.16, 1, 0.3, 1)",
        "snap": "cubic-bezier(0.87, 0, 0.13, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
