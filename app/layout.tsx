import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { SmoothScroll } from "@/components/motion/SmoothScroll";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Olympo Steel | Fábrica de Equipamentos de Musculação",
  description:
    "A Olympo Steel projeta e fabrica equipamentos de musculação em aço carbono com pintura eletrostática. Linhas Steel, Zeus e BSC. Durabilidade profissional e personalização sob medida.",
  keywords: [
    "equipamentos de musculação",
    "academia",
    "aço carbono",
    "pintura eletrostática",
    "Olympo Steel",
    "leg press",
    "crossover",
    "hack squat",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${jetbrainsMono.variable} antialiased`}>
      <head>
        {/* Fontshare — Clash Display + General Sans */}
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@400,500,600,700&f[]=general-sans@400,500,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[var(--color-bg)] text-[var(--color-text)]">
        <SmoothScroll>
          <Nav />
          <main className="flex-1">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
