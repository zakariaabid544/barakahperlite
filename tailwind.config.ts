import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        basalt: {
          950: "#080a08",
          900: "#101311",
          850: "#141813",
          800: "#1b201b",
        },
        perlite: {
          50: "#faf8ef",
          100: "#eee9dd",
          200: "#d8d2c3",
          300: "#b9b0a1",
        },
        atlas: {
          sand: "#d6b87a",
          clay: "#b96842",
          copper: "#d28b55",
          sun: "#f0c467",
        },
        agritech: {
          emerald: "#16d66f",
          leaf: "#0f9f58",
          deep: "#063b24",
        },
        silver: {
          100: "#f7f7f4",
          200: "#d8ddd7",
          500: "#a5aea8",
        },
      },
      boxShadow: {
        glow: "0 0 70px rgba(22, 214, 111, 0.18)",
        bronze: "0 24px 80px rgba(210, 139, 85, 0.16)",
        glass: "0 20px 80px rgba(0, 0, 0, 0.28)",
      },
      backgroundImage: {
        "perlite-radial":
          "radial-gradient(circle at 30% 15%, rgba(247,247,244,0.18), transparent 28%), radial-gradient(circle at 72% 38%, rgba(22,214,111,0.16), transparent 24%), radial-gradient(circle at 52% 82%, rgba(214,184,122,0.16), transparent 28%)",
        "premium-conic":
          "conic-gradient(from 135deg at 50% 50%, rgba(22,214,111,0.16), rgba(210,139,85,0.12), rgba(247,247,244,0.12), rgba(22,214,111,0.16))",
      },
      fontFamily: {
        sans: [
          "Neue Montreal",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
        display: [
          "Neue Montreal",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
      },
      fontWeight: {
        normal: "400",
        medium: "500",
        semibold: "560",
        bold: "620",
        extrabold: "660",
        black: "680",
      },
      keyframes: {
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
      },
      animation: {
        shimmer: "shimmer 3.2s ease-in-out infinite",
        float: "float 7s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
