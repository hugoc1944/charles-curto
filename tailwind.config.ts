import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1F2E5A",
        secondary: "#0E3B3F",
        accent: "#C7A36A",
        neutralLight: "#F5EFE6",
        text: "#1B1E23",
      },

      boxShadow: {
        softCard: "0 18px 40px rgba(0,0,0,0.08)",
        goldCTA: "0 8px 24px rgba(199,163,106,0.25)",
        darkSm: "0 4px 4px rgba(0,0,0,0.25)",
        goldSm: "0 1px 3px rgba(199,163,106,0.45)",
      },
    },
  },
  plugins: [],
};

export default config;
