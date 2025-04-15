import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // Brand colors
        brand: {
          bg: "#495c2e",
          lime: "#b0f03d",
        },
        
        // Background colors
        bg: {
          main: "#0D0D0D",  // main/jet
          secondary: {
            dark: "#171717",
            DEFAULT: "#232323",
          },
          tertiary: "#292929",  // shadow
        },
        
        // Border colors
        border: {
          main: "#2C2B28",
          "mesh-hover": "#404040",  // strong/mesh hover
          "strong-hover": "#534C4C",
        },
        
        // Border alpha colors
        "border-alpha": {
          subtle: "rgba(255, 255, 255, 0.08)",  // 8%
          normal: "rgba(255, 255, 255, 0.2)",   // 20%
          strong: "rgba(255, 255, 255, 0.3)",   // 30%
        },
        
        // Background alpha colors
        "bg-alpha": {
          subtle: "rgba(255, 255, 255, 0.05)",  // 5%
          normal: "rgba(255, 255, 255, 0.1)",   // 10%
          strong: "rgba(255, 255, 255, 0.2)",   // 20%
        },
        
        // Content colors
        content: {
          disabled: "#888888",
          subdued: "#9D9D9D",
          normal: "#CECECE",
          muted: "#E9E9E9",
          strong: "#FFFFFF",  // white
        },
        
        // Status colors
        success: {
          bg: "#173F85",
          content: "#3B83F6",
        },
        error: {
          bg: "#520A0A",
          content: "#EA4F4F",
        },
        alert: {
          bg: "#5C2C04",
          content: "#F5A742",
        },
        
        // Legacy shadcn colors - keep for compatibility
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontSize: {
        // Heading sizes
        "heading-1": ["48px", { lineHeight: "52px" }],
        "heading-2": ["32px", { lineHeight: "36px" }],
        "heading-3": ["24px", { lineHeight: "28px" }],
        "heading-4": ["20px", { lineHeight: "24px" }],
        
        // Label sizes
        "label-lg": ["18px", { lineHeight: "22px" }],
        "label-md": ["16px", { lineHeight: "20px" }],
        "label-sm": ["14px", { lineHeight: "18px" }],
        "label-xs": ["12px", { lineHeight: "16px" }],
        
        // Body sizes
        "body-lg": ["18px", { lineHeight: "24px" }],
        "body-base": ["16px", { lineHeight: "22px" }],
        "body-sm": ["14px", { lineHeight: "20px" }],
        "body-xs": ["12px", { lineHeight: "16px" }],
        
        // Mono sizes
        "mono-lg": ["16px", { lineHeight: "20px" }],
        "mono-base": ["14px", { lineHeight: "16px" }],
        "mono-sm": ["12px", { lineHeight: "20px" }],
        "mono-xs": ["10px", { lineHeight: "14px" }],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
