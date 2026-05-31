"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";
import { asset } from "@/lib/assets";

const emphasis = [0.16, 1, 0.3, 1] as const;
const easeOut = [0.22, 1, 0.36, 1] as const;

const titleLines = ["Força projetada", "para durar."];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[var(--color-bg)]">
      {/* Background atmosphere */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-bg)] via-[var(--color-bg)] to-[rgba(232,196,76,0.03)]" />
        <div className="absolute top-1/4 right-0 w-[60vw] h-[60vw] bg-[radial-gradient(circle,rgba(232,196,76,0.06)_0%,transparent_70%)] blur-3xl" />
      </div>

      <div className="container-site relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-[var(--space-8)] items-center pt-32 pb-[var(--space-24)]">
        {/* Left: Text content — 7 cols */}
        <div className="lg:col-span-7 flex flex-col gap-[var(--space-6)]">
          {/* Section label */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5, ease: easeOut }}
          >
            <span className="section-label">Fábrica de equipamentos</span>
          </motion.div>

          {/* Title — reveal by line */}
          <h1 className="text-[var(--font-display-xl)] font-bold leading-[0.95] tracking-[-0.02em]">
            {titleLines.map((line, i) => (
              <span key={i} className="block overflow-hidden">
                <motion.span
                  className="block"
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{
                    delay: 0.4 + i * 0.1,
                    duration: 0.7,
                    ease: emphasis,
                  }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6, ease: easeOut }}
            className="text-[var(--font-body-l)] text-[var(--color-text-dim)] max-w-[520px] leading-relaxed"
          >
            A Olympo Steel projeta e fabrica equipamentos de musculação em aço
            carbono com pintura eletrostática. Durabilidade profissional,
            acabamento de fábrica.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.5, ease: easeOut }}
            className="flex gap-4 flex-wrap"
          >
            <Button href="#equipamentos" icon>
              Explorar equipamentos
            </Button>
            <Button href="#linhas" variant="ghost">
              Nossas linhas
            </Button>
          </motion.div>
        </div>

        {/* Right: Floating card — 5 cols */}
        <motion.div
          className="lg:col-span-5 flex justify-center lg:justify-end"
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 1, duration: 0.7, ease: easeOut }}
        >
          <div className="relative w-full max-w-[380px] bg-[rgba(20,20,22,0.55)] backdrop-blur-[16px] border border-[var(--color-line)] rounded-[var(--radius-md)] shadow-[var(--shadow-float)] p-6 group hover:border-[var(--color-gold-deep)] transition-colors duration-300">
            {/* Product image */}
            <div className="w-full aspect-[4/3] rounded-[var(--radius-sm)] mb-5 overflow-hidden">
              <img
                src={asset("/academia.webp")}
                alt="Equipamentos Olympo Steel"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />
            </div>

            {/* Info */}
            <div className="flex flex-col gap-2">
              <span className="inline-flex w-fit px-3 py-1 rounded-[var(--radius-pill)] bg-[var(--color-gold)] text-[var(--color-ink)] text-[var(--font-label)] font-semibold mono uppercase tracking-[0.05em]">
                Zeus
              </span>
              <h3 className="text-[var(--font-h3)] font-semibold leading-tight">
                Pull-Over Articulado (Gold Edition)
              </h3>
              <p className="text-[var(--font-small)] text-[var(--color-text-dim)] leading-relaxed">
                Linha premium com torre de pesos integrada. Carenagem e
                acabamento de alto padrão.
              </p>
              <div className="flex items-center justify-between mt-3 pt-3 border-t border-[var(--color-line)]">
                <span className="price-block text-sm">R$ 18.800,00</span>
                <a
                  href="/catalogo"
                  className="inline-flex items-center gap-1 text-[var(--font-small)] text-[var(--color-gold)] font-medium hover:text-[var(--color-gold-soft)] transition-colors group"
                >
                  Ver detalhes
                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
