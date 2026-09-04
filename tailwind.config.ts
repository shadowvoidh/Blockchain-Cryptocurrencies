import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        // Display serif for the Blockchain (gold/black) track — echoes the
        // ledger/manuscript feel of the source deck's ornamental gold frames.
        display: ["\"Fraunces\"", "serif"],
        // Grotesk sans for the Bitcoin (violet/indigo) track — technical,
        // numeric, protocol-flavoured.
        mono: ["\"Space Grotesk\"", "monospace"],
        sans: ["\"Inter\"", "system-ui", "sans-serif"],
      },
      colors: {
        // Blockchain track: black canvas, warm brass/gold ink
        chain: {
          bg: "#0a0805",
          surface: "#141009",
          gold: "#c9a24b",
          goldLight: "#e6c877",
          goldDeep: "#8a6d2c",
          ink: "#f3ead1",
        },
        // Bitcoin track: deep indigo canvas, violet + amber accent
        coin: {
          bg: "#0c0a1f",
          surface: "#161334",
          violet: "#8b5cf6",
          indigo: "#4338ca",
          amber: "#f7931a",
          ink: "#ece9ff",
        },
      },
      boxShadow: {
        goldGlow: "0 0 0 1px rgba(201,162,75,0.35), 0 12px 40px -12px rgba(201,162,75,0.25)",
        coinGlow: "0 0 0 1px rgba(139,92,246,0.35), 0 12px 40px -12px rgba(139,92,246,0.35)",
      },
      backgroundImage: {
        "chain-radial": "radial-gradient(circle at 20% 0%, rgba(201,162,75,0.10), transparent 55%)",
        "coin-radial": "radial-gradient(circle at 80% 0%, rgba(139,92,246,0.18), transparent 55%)",
      },
    },
  },
  plugins: [],
} satisfies Config;
