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
        brand: {
          purple: "#5B51D8",
          lilac: "#F2ECFF",
          sand: "#F5E8D8",
          gold: "#FCAF45",
          "gold-hover": "#F5A02A",
          coral: "#E1306C",
          black: "#111318",
          gray: "#8A8F98",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        card: "1rem",
        "card-lg": "1.5rem",
      },
      boxShadow: {
        soft: "0 4px 20px rgba(91, 81, 216, 0.08)",
        "soft-lg": "0 8px 40px rgba(91, 81, 216, 0.12)",
        glow: "0 0 40px rgba(91, 81, 216, 0.15)",
      },
    },
  },
  plugins: [],
};

export default config;
