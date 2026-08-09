import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Inter } from "next/font/google";
import "./globals.css";

const display = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  fallback: ["Georgia", "serif"],
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
});

export const metadata: Metadata = {
  title: "ENTLAQ SDR Summit 2026 — Executive Proposal",
  description:
    "Event Production & Experience proposal for the Entlaq Sectoral Diagnostics Report Summit, El Gouna, 10–12 September 2026. Prepared by Paradigm.",
};

export const viewport: Viewport = {
  themeColor: "#04060F",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
