import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        asphalt: {
          DEFAULT: "#14181D",
          soft: "#1E242C",
          line: "#2B323C",
        },
        amber: {
          DEFAULT: "#F5A623",
          soft: "#FFD180",
        },
        signal: {
          DEFAULT: "#E5484D",
          dark: "#C93A3F",
        },
        ink: "#171A1F",
        mute: "#5B6472",
        paper: "#F7F8FA",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      maxWidth: {
        content: "1180px",
      },
      keyframes: {
        "beacon-sweep": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.55" },
        },
        "rise-in": {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        beacon: "beacon-sweep 1.8s ease-in-out infinite",
        "rise-in": "rise-in 0.7s ease-out both",
      },
    },
  },
  plugins: [],
};
export default config;
