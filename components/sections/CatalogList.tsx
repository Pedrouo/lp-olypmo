"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { ArrowRight } from "lucide-react";
import { categories } from "@/data/products";
import Link from "next/link";

export function CatalogList() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      id="equipamentos"
      className="py-[var(--space-32)] md:py-[var(--space-40)] bg-[var(--color-bg)] border-t border-[var(--color-line)]"
    >
      <div className="container-site">
        <ScrollReveal>
          <span className="section-label mb-[var(--space-4)]">Catálogo</span>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-[var(--space-12)]">
            <h2 className="text-[clamp(1.75rem,3vw,2.75rem)] font-semibold leading-[1.05] max-w-[560px]">
              Nossos sistemas para cada grupo muscular.
            </h2>
            <a
              href="/catalogo"
              className="inline-flex items-center gap-2 text-sm text-[var(--color-gold)] font-medium hover:text-[var(--color-gold-soft)] transition-colors group"
            >
              Ver todos os produtos
              <ArrowRight
                size={14}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[var(--space-8)]">
          {/* Left: Category list — 7 cols */}
          <div className="lg:col-span-7">
            {categories.map((cat, i) => (
              <Link
                key={cat.id}
                href={`/catalogo?categoria=${cat.id}`}
                className={`group flex items-center justify-between py-[var(--space-4)] border-b border-[var(--color-line)] cursor-pointer transition-all duration-300 ${
                  activeIndex === i
                    ? "opacity-100"
                    : "opacity-55 hover:opacity-80"
                }`}
                onMouseEnter={() => setActiveIndex(i)}
              >
                <div className="flex items-center gap-[var(--space-4)]">
                  {/* Mobile thumbnail */}
                  <div className="lg:hidden w-12 h-12 rounded-[var(--radius-xs)] flex-shrink-0 overflow-hidden">
                    <img
                      src="/academia.webp"
                      alt={cat.nome}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span
                    className={`mono text-[1rem] font-medium transition-colors duration-300 ${
                      activeIndex === i
                        ? "text-[var(--color-gold)]"
                        : "text-[var(--color-text-faint)]"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={`font-['Clash_Display',sans-serif] text-[1.125rem] font-semibold transition-colors duration-300 ${
                      activeIndex === i
                        ? "text-[var(--color-text)]"
                        : "text-[var(--color-text-dim)]"
                    }`}
                  >
                    {cat.nome}
                  </span>
                </div>

                <div className="flex items-center gap-[var(--space-4)]">
                  <span className="mono text-sm text-[var(--color-text-faint)]">
                    {cat.count} produtos
                  </span>
                  <ArrowRight
                    size={16}
                    className={`transition-all duration-300 ${
                      activeIndex === i
                        ? "text-[var(--color-gold)] translate-x-0"
                        : "text-[var(--color-text-faint)] -translate-x-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
                    }`}
                  />
                </div>
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex lg:col-span-5 items-center justify-center">
            <div className="relative w-full aspect-[4/5] rounded-[var(--radius-md)] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, scale: 1.02, y: 8 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0"
                >
                  <img
                    src="/academia.webp"
                    alt={categories[activeIndex].nome}
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay with category info */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(11,11,12,0.85)] via-[rgba(11,11,12,0.2)] to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h3 className="font-['Clash_Display',sans-serif] text-[clamp(1.75rem,3vw,2.75rem)] font-semibold text-[var(--color-text)] mb-1">
                      {categories[activeIndex].nome}
                    </h3>
                    <p className="mono text-[0.75rem] text-[var(--color-gold)] uppercase tracking-[0.08em]">
                      {categories[activeIndex].count} equipamentos
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
