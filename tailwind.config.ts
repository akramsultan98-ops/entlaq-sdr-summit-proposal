import type { Config } from "tailwindcss";

/**
 * Design System — "MADE VISIBLE"
 * Derived from docs/11_creative_concept.md
 *
 * Foundation : deep navy      — Act I, evening environments, primary ground
 * Depth      : teal → deep blue — Act II, the descent
 * Signal     : amber          — meaning ONLY. Never decoration.
 * Clarity    : cream          — type, negative space
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Foundation
        abyss: "#04060F",
        navy: {
          950: "#070B18",
          900: "#0A1024",
          800: "#0E1631",
          700: "#141F44",
          600: "#1B2A5C",
        },
        // Depth gradient (Act II)
        depth: {
          100: "#B8DCE0",
          300: "#5FA8B5",
          500: "#2E7787",
          700: "#1A4A5C",
          900: "#0E2A3A",
        },
        // Signal — meaning only
        signal: {
          400: "#F5C978",
          500: "#E9A93C",
          600: "#D18A1E",
        },
        // Clarity
        cream: {
          50: "#FDFCF9",
          100: "#F5F2EA",
          300: "#DDD8CA",
          500: "#9C978A",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      fontSize: {
        "display-xl": ["clamp(3rem, 9vw, 8.5rem)", { lineHeight: "0.94", letterSpacing: "-0.035em" }],
        "display-lg": ["clamp(2.5rem, 6.5vw, 5.5rem)", { lineHeight: "0.98", letterSpacing: "-0.03em" }],
        "display-md": ["clamp(2rem, 4.5vw, 3.5rem)", { lineHeight: "1.05", letterSpacing: "-0.025em" }],
        "display-sm": ["clamp(1.5rem, 3vw, 2.25rem)", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
        eyebrow: ["0.6875rem", { lineHeight: "1", letterSpacing: "0.22em" }],
      },
      maxWidth: {
        prose: "68ch",
sect: "1180px",
      },
      transitionTimingFunction: {
        keynote: "cubic-bezier(0.16, 1, 0.3, 1)",
        resolve: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      animation: {
        "fade-up": "fadeUp 0.9s cubic-bezier(0.16,1,0.3,1) both",
        shimmer: "shimmer 3s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%,100%": { opacity: "0.35" },
          "50%": { opacity: "0.75" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
