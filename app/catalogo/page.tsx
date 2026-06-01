"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X } from "lucide-react";
import { categories, allProducts, allLines, MATERIAL, type Product } from "@/data/products";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { Button } from "@/components/ui/Button";

const badgeStyle = (linha: string) => {
  const l = linha.toLowerCase();
  if (l === "zeus")
    return "bg-[var(--color-gold)] text-[var(--color-ink)]";
  if (l === "bsc" || l === "basic")
    return "border border-[var(--color-line-strong)] text-[var(--color-text-dim)] bg-transparent";
  return "border border-[var(--color-gold)] text-[var(--color-text)] bg-transparent";
};

export default function CatalogoPage() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedLine, setSelectedLine] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filtered = useMemo(() => {
    let products = selectedCategory
      ? categories.find((c) => c.id === selectedCategory)?.produtos || []
      : allProducts;

    if (selectedLine) {
      products = products.filter((p) => p.linha === selectedLine);
    }

    if (search.trim()) {
      const q = search.toLowerCase();
      products = products.filter((p) => p.nome.toLowerCase().includes(q));
    }

    return products;
  }, [search, selectedCategory, selectedLine]);

  return (
    <div className="pt-28 pb-[var(--space-24)]">
      <div className="container-site">
        {/* Header */}
        <ScrollReveal>
          <span className="section-label mb-[var(--space-4)]">Catálogo</span>
          <h1 className="text-display-l font-semibold leading-[1.05] mb-[var(--space-4)]">
            Todos os equipamentos.
          </h1>
          <p className="text-body text-[var(--color-text-dim)] max-w-[520px] mb-[var(--space-12)]">
            {allProducts.length} equipamentos em {categories.length} categorias.
            Filtre por grupo muscular, linha ou busque por nome.
          </p>
        </ScrollReveal>

        {/* Filters bar */}
        <div className="flex flex-col md:flex-row gap-4 mb-[var(--space-8)] pb-[var(--space-6)] border-b border-[var(--color-line)]">
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Search
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-text-faint)]"
            />
            <input
              type="text"
              placeholder="Buscar por nome..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-3 bg-[var(--color-bg-soft)] border border-[var(--color-line)] rounded-[var(--radius-sm)] text-sm text-[var(--color-text)] placeholder:text-[var(--color-text-faint)] focus:border-[var(--color-gold)] focus:outline-none transition-colors"
            />
          </div>

          {/* Category filter */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-3 py-2 rounded-[var(--radius-pill)] text-label mono uppercase tracking-[0.05em] transition-colors cursor-pointer ${
                !selectedCategory
                  ? "bg-[var(--color-gold)] text-[var(--color-ink)]"
                  : "border border-[var(--color-line)] text-[var(--color-text-dim)] hover:border-[var(--color-line-strong)]"
              }`}
            >
              Todas
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() =>
                  setSelectedCategory(
                    selectedCategory === cat.id ? null : cat.id
                  )
                }
                className={`px-3 py-2 rounded-[var(--radius-pill)] text-label mono uppercase tracking-[0.05em] transition-colors cursor-pointer ${
                  selectedCategory === cat.id
                    ? "bg-[var(--color-gold)] text-[var(--color-ink)]"
                    : "border border-[var(--color-line)] text-[var(--color-text-dim)] hover:border-[var(--color-line-strong)]"
                }`}
              >
                {cat.nome}
              </button>
            ))}
          </div>

          {/* Line filter */}
          <div className="flex flex-wrap gap-2">
            {allLines.map((line) => (
              <button
                key={line}
                onClick={() =>
                  setSelectedLine(selectedLine === line ? null : line)
                }
                className={`px-3 py-2 rounded-[var(--radius-pill)] text-label mono uppercase tracking-[0.05em] transition-colors cursor-pointer ${
                  selectedLine === line
                    ? "bg-[var(--color-gold)] text-[var(--color-ink)]"
                    : "border border-[var(--color-line)] text-[var(--color-text-dim)] hover:border-[var(--color-line-strong)]"
                }`}
              >
                {line}
              </button>
            ))}
          </div>
        </div>

        {/* Results count */}
        <p className="mono text-label text-[var(--color-text-faint)] uppercase tracking-[0.08em] mb-[var(--space-6)]">
          {filtered.length} resultado{filtered.length !== 1 ? "s" : ""}
        </p>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[var(--space-6)]">
          {filtered.map((product, i) => (
            <motion.article
              key={`${product.nome}-${i}`}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: Math.min(i * 0.03, 0.3),
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group border border-[var(--color-line)] rounded-[var(--radius-sm)] overflow-hidden hover:border-[var(--color-line-strong)] transition-colors cursor-pointer"
              onClick={() => setSelectedProduct(product)}
            >
              {/* Image placeholder */}
              <div className="w-full aspect-square bg-[var(--color-surface)] flex items-center justify-center overflow-hidden">
                <div className="text-center transition-transform duration-500 group-hover:scale-[1.04]">
                  <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-[var(--color-surface-2)] flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-text-faint)" strokeWidth="1.5">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                    </svg>
                  </div>
                  <span className="mono text-[10px] text-[var(--color-text-faint)] uppercase tracking-[0.08em] px-4 line-clamp-2">
                    {product.nome}
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="p-[var(--space-4)] bg-[var(--color-bg)] flex flex-col gap-2">
                <span
                  className={`inline-flex w-fit px-2 py-0.5 rounded-[var(--radius-pill)] text-[10px] font-semibold mono uppercase tracking-[0.05em] ${badgeStyle(product.linha)}`}
                >
                  {product.linha}
                </span>
                <h3 className="font-['Clash_Display',sans-serif] text-body font-semibold leading-tight line-clamp-2">
                  {product.nome}
                </h3>
                <span className="price-block text-sm mt-auto">
                  {product.precoFmt}
                </span>
                <div className="flex flex-col gap-1 mt-2 pt-2 border-t border-[var(--color-line)]">
                  <span className="mono text-[10px] text-[var(--color-text-faint)]">
                    {product.dimensoes}
                  </span>
                  <span className="mono text-[10px] text-[var(--color-text-faint)]">
                    {product.peso}
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-[var(--space-16)]">
            <p className="text-body-l text-[var(--color-text-dim)]">
              Nenhum equipamento encontrado.
            </p>
            <button
              onClick={() => {
                setSearch("");
                setSelectedCategory(null);
                setSelectedLine(null);
              }}
              className="mt-4 text-[var(--color-gold)] hover:text-[var(--color-gold-soft)] transition-colors text-sm font-medium cursor-pointer"
            >
              Limpar filtros
            </button>
          </div>
        )}
      </div>

      {/* Product detail modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-[rgba(0,0,0,0.7)] backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.97 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="w-full max-w-lg bg-[var(--color-bg-elev)] border border-[var(--color-line)] rounded-[var(--radius-md)] overflow-hidden max-h-[85vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image */}
              <div className="w-full aspect-[4/3] bg-[var(--color-surface)] flex items-center justify-center relative">
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[rgba(0,0,0,0.3)] backdrop-blur-sm flex items-center justify-center text-white hover:bg-[rgba(0,0,0,0.5)] transition-colors cursor-pointer z-10"
                  aria-label="Fechar"
                >
                  <X size={16} />
                </button>
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-3 rounded-full bg-[var(--color-surface-2)] flex items-center justify-center">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--color-text-faint)" strokeWidth="1.5">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                    </svg>
                  </div>
                  <span className="mono text-label text-[var(--color-text-faint)] uppercase tracking-[0.08em]">
                    {selectedProduct.linha}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-[var(--space-6)] flex flex-col gap-4">
                <span
                  className={`inline-flex w-fit px-3 py-1 rounded-[var(--radius-pill)] text-label font-semibold mono uppercase tracking-[0.05em] ${badgeStyle(selectedProduct.linha)}`}
                >
                  {selectedProduct.linha}
                </span>
                <h2 className="font-['Clash_Display',sans-serif] text-display-m font-semibold leading-[1.05]">
                  {selectedProduct.nome}
                </h2>
                <span className="price-block">{selectedProduct.precoFmt}</span>

                {/* Specs */}
                <div className="flex flex-col gap-3 py-[var(--space-4)] border-t border-b border-[var(--color-line)]">
                  <div className="flex justify-between">
                    <span className="mono text-sm text-[var(--color-text-faint)]">
                      Dimensões
                    </span>
                    <span className="mono text-sm text-[var(--color-text)]">
                      {selectedProduct.dimensoes}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="mono text-sm text-[var(--color-text-faint)]">
                      Peso
                    </span>
                    <span className="mono text-sm text-[var(--color-text)]">
                      {selectedProduct.peso}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="mono text-sm text-[var(--color-text-faint)]">
                      Material
                    </span>
                    <span className="mono text-sm text-[var(--color-text)]">
                      {MATERIAL}
                    </span>
                  </div>
                </div>

                <Button href="#contato" icon className="w-full justify-center">
                  Pedir orçamento
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
