"use client";

import { useState, useMemo, useEffect, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X } from "lucide-react";
import { categories, allProducts, allLines, MATERIAL, type Product } from "@/data/products";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { useSearchParams } from "next/navigation";

const badgeStyle = (linha: string) => {
  const l = linha.toLowerCase();
  if (l === "zeus")
    return "bg-[var(--color-gold)] text-[var(--color-ink)]";
  if (l === "bsc" || l === "basic")
    return "border border-[var(--color-line-strong)] text-[var(--color-text-dim)] bg-transparent";
  return "border border-[var(--color-gold)] text-[var(--color-text)] bg-transparent";
};

function CatalogoContent() {
  const searchParams = useSearchParams();
  const categoryFromUrl = searchParams.get("categoria");
  const lineFromUrl = searchParams.get("linha");

  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedLine, setSelectedLine] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    setSelectedCategory(categoryFromUrl);
  }, [categoryFromUrl]);

  useEffect(() => {
    setSelectedLine(lineFromUrl);
  }, [lineFromUrl]);

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
          <h1 className="text-[clamp(2rem,4.5vw,3.5rem)] font-semibold leading-[1.05] mb-[var(--space-4)]">
            Todos os equipamentos.
          </h1>
          <p className="text-body text-[var(--color-text-dim)] max-w-[520px] mb-[var(--space-12)]">
            {allProducts.length} equipamentos em {categories.length} categorias.
            Filtre por grupo muscular, linha ou busque por nome.
          </p>
        </ScrollReveal>

        {/* Filters bar */}
        <div className="flex flex-col gap-6 mb-[var(--space-8)] pb-[var(--space-6)] border-b border-[var(--color-line)]">
          {/* Row 1: Search bar */}
          <div className="relative w-full max-w-md">
            <Search
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-text-faint)]"
            />
            <input
              type="text"
              placeholder="Buscar por nome..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 bg-[var(--color-bg-soft)] border border-[var(--color-line)] rounded-[var(--radius-sm)] text-sm text-[var(--color-text)] placeholder:text-[var(--color-text-faint)] focus:border-[var(--color-gold)] focus:outline-none transition-colors"
            />
          </div>

          {/* Row 2: Filters */}
          <div className="flex flex-col lg:flex-row gap-6 justify-between lg:items-start">
            {/* Category filter */}
            <div className="flex flex-wrap gap-2 flex-1 max-w-3xl">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-3 py-2 rounded-[var(--radius-pill)] text-[0.75rem] mono uppercase tracking-[0.05em] transition-colors cursor-pointer ${
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
                  className={`px-3 py-2 rounded-[var(--radius-pill)] text-[0.75rem] mono uppercase tracking-[0.05em] transition-colors cursor-pointer ${
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
            <div className="flex flex-wrap gap-2 lg:justify-end max-w-md">
              {allLines.map((line) => (
                <button
                  key={line}
                  onClick={() =>
                    setSelectedLine(selectedLine === line ? null : line)
                  }
                  className={`px-3 py-2 rounded-[var(--radius-pill)] text-[0.75rem] mono uppercase tracking-[0.05em] transition-colors cursor-pointer ${
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
        </div>

        {/* Results count */}
        <p className="mono text-[0.75rem] text-[var(--color-text-faint)] uppercase tracking-[0.08em] mb-[var(--space-6)]">
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
              {/* Product image */}
              <div className="w-full aspect-square overflow-hidden bg-[var(--color-surface)] border-b border-[var(--color-line)]">
                <img
                  src="/academia.webp"
                  alt={product.nome}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
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
                  <span className="mono text-[11px] text-[var(--color-text-dim)]">
                    {product.dimensoes}
                  </span>
                  <span className="mono text-[11px] text-[var(--color-text-dim)]">
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
              <div className="w-full aspect-[4/3] overflow-hidden relative">
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[rgba(0,0,0,0.3)] backdrop-blur-sm flex items-center justify-center text-white hover:bg-[rgba(0,0,0,0.5)] transition-colors cursor-pointer z-10"
                  aria-label="Fechar"
                >
                  <X size={16} />
                </button>
                <img
                  src="/academia.webp"
                  alt={selectedProduct.nome}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-[var(--space-6)] flex flex-col gap-4">
                <span
                  className={`inline-flex w-fit px-3 py-1 rounded-[var(--radius-pill)] text-[0.75rem] font-semibold mono uppercase tracking-[0.05em] ${badgeStyle(selectedProduct.linha)}`}
                >
                  {selectedProduct.linha}
                </span>
                <h2 className="font-['Clash_Display',sans-serif] text-[clamp(1.5rem,2.5vw,2.25rem)] font-semibold leading-[1.05]">
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

export default function CatalogoPage() {
  return (
    <Suspense fallback={<div className="pt-28 text-center text-sm text-[var(--color-text-dim)]">Carregando catálogo...</div>}>
      <CatalogoContent />
    </Suspense>
  );
}
