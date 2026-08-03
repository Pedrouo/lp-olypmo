"use client";

import { useState, useMemo, useEffect, useCallback, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, ArrowUp } from "lucide-react";
import { categories, allProducts, allLines, MATERIAL, type Product } from "@/data/products";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { productImage } from "@/lib/slugify";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

const badgeStyle = (linha: string) => {
  const l = linha.toLowerCase();
  if (l === "zeus")
    return "bg-[var(--color-gold)] text-[var(--color-ink)]";
  if (l === "bsc" || l === "basic" || l === "expositores")
    return "border border-[var(--color-line-strong)] text-[var(--color-text-dim)] bg-transparent";
  return "border border-[var(--color-gold)] text-[var(--color-text)] bg-transparent";
};

interface CatalogoContentProps {
  categoryFromUrl: string | null;
  lineFromUrl: string | null;
  productFromUrl: string | null;
}

function CatalogoContent({ categoryFromUrl, lineFromUrl, productFromUrl }: CatalogoContentProps) {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedLine, setSelectedLine] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [visibleCount, setVisibleCount] = useState(10);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    setSelectedCategory(categoryFromUrl);
  }, [categoryFromUrl]);

  useEffect(() => {
    setSelectedLine(lineFromUrl);
  }, [lineFromUrl]);

  useEffect(() => {
    if (productFromUrl) {
      const prod = allProducts.find(
        (p) => p.nome.toLowerCase() === productFromUrl.toLowerCase()
      );
      if (prod) {
        setSelectedProduct(prod);
      }
    }
  }, [productFromUrl]);

  useEffect(() => {
    if (selectedProduct) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [selectedProduct]);

  useEffect(() => {
    setVisibleCount(10);
  }, [search, selectedCategory, selectedLine]);

  useEffect(() => {
    // Reset scroll to top on next animation frames and timeout to ensure Lenis and Next.js DOM sync
    let frameId: number;
    const resetScroll = () => {
      const lenis = (window as any).lenis;
      if (lenis) {
        lenis.scrollTo(0, { immediate: true });
      } else {
        window.scrollTo(0, 0);
      }
    };

    resetScroll();
    frameId = requestAnimationFrame(() => {
      resetScroll();
      frameId = requestAnimationFrame(() => {
        resetScroll();
      });
    });

    const timer = setTimeout(resetScroll, 100);

    return () => {
      cancelAnimationFrame(frameId);
      clearTimeout(timer);
    };
  }, [categoryFromUrl, lineFromUrl]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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

  // Determina quais categorias possuem produtos com base na linha selecionada e na busca
  const categoriesWithProducts = useMemo(() => {
    return categories.map((cat) => {
      const hasProducts = cat.produtos.some((p) => {
        const matchesLine = !selectedLine || p.linha === selectedLine;
        const matchesSearch = !search.trim() || p.nome.toLowerCase().includes(search.toLowerCase());
        return matchesLine && matchesSearch;
      });
      return { id: cat.id, hasProducts };
    });
  }, [selectedLine, search]);

  // Determina quais linhas possuem produtos com base na categoria selecionada e na busca
  const linesWithProducts = useMemo(() => {
    const baseProducts = selectedCategory
      ? categories.find((c) => c.id === selectedCategory)?.produtos || []
      : allProducts;

    const activeLines = new Set(
      baseProducts
        .filter((p) => !search.trim() || p.nome.toLowerCase().includes(search.toLowerCase()))
        .map((p) => p.linha)
    );

    return activeLines;
  }, [selectedCategory, search]);

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
            <div className="flex flex-col gap-2 flex-1 max-w-3xl">
              <span className="mono text-[10px] text-[var(--color-text-dim)] uppercase tracking-[0.08em] mb-1">
                Filtrar por Equipamento / Grupo Muscular
              </span>
              <div className="flex flex-wrap gap-2">
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
                {categories.map((cat) => {
                  const isAvailable = categoriesWithProducts.find((c) => c.id === cat.id)?.hasProducts;
                  const isSelected = selectedCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      disabled={!isAvailable && !isSelected}
                      onClick={() =>
                        setSelectedCategory(
                          isSelected ? null : cat.id
                        )
                      }
                      className={`px-3 py-2 rounded-[var(--radius-pill)] text-[0.75rem] mono uppercase tracking-[0.05em] transition-colors cursor-pointer ${
                        isSelected
                          ? "bg-[var(--color-gold)] text-[var(--color-ink)]"
                          : isAvailable
                          ? "border border-[var(--color-line)] text-[var(--color-text-dim)] hover:border-[var(--color-line-strong)]"
                          : "border border-[var(--color-line)] text-[var(--color-text-faint)] opacity-30 cursor-not-allowed pointer-events-none"
                      }`}
                    >
                      {cat.nome}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Line filter */}
            <div className="flex flex-col gap-2 lg:items-end max-w-md w-full">
              <span className="mono text-[10px] text-[var(--color-text-dim)] uppercase tracking-[0.08em] mb-1">
                Filtrar por Linha
              </span>
              <div className="flex flex-wrap gap-2 lg:justify-end">
                <button
                  onClick={() => setSelectedLine(null)}
                  className={`px-3 py-2 rounded-[var(--radius-pill)] text-[0.75rem] mono uppercase tracking-[0.05em] transition-colors cursor-pointer ${
                    !selectedLine
                      ? "bg-[var(--color-gold)] text-[var(--color-ink)]"
                      : "border border-[var(--color-line)] text-[var(--color-text-dim)] hover:border-[var(--color-line-strong)]"
                  }`}
                >
                  Todas
                </button>
                {allLines.map((line) => {
                  const isAvailable = linesWithProducts.has(line);
                  const isSelected = selectedLine === line;
                  return (
                    <button
                      key={line}
                      disabled={!isAvailable && !isSelected}
                      onClick={() =>
                        setSelectedLine(selectedLine === line ? null : line)
                      }
                      className={`px-3 py-2 rounded-[var(--radius-pill)] text-[0.75rem] mono uppercase tracking-[0.05em] transition-colors cursor-pointer ${
                        isSelected
                          ? "bg-[var(--color-gold)] text-[var(--color-ink)]"
                          : isAvailable
                          ? "border border-[var(--color-line)] text-[var(--color-text-dim)] hover:border-[var(--color-line-strong)]"
                          : "border border-[var(--color-line)] text-[var(--color-text-faint)] opacity-30 cursor-not-allowed pointer-events-none"
                      }`}
                    >
                      {line}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Results count */}
        <p className="mono text-[0.75rem] text-[var(--color-text-faint)] uppercase tracking-[0.08em] mb-[var(--space-6)]">
          {filtered.length} resultado{filtered.length !== 1 ? "s" : ""}
        </p>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[var(--space-6)]">
          {filtered.slice(0, visibleCount).map((product, i) => (
            <motion.article
              key={`${product.nome}-${i}`}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: Math.min((i % 10) * 0.03, 0.3),
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group border border-[var(--color-line)] rounded-[var(--radius-sm)] overflow-hidden hover:border-[var(--color-line-strong)] transition-colors cursor-pointer"
              onClick={() => setSelectedProduct(product)}
            >
              {/* Product image */}
              <div className="w-full aspect-square overflow-hidden bg-[var(--color-surface)] border-b border-[var(--color-line)]">
                <img
                  src={productImage(product.nome)}
                  alt={product.nome}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </div>

              {/* Info */}
              <div className="p-[var(--space-4)] bg-[var(--color-bg)] flex flex-col gap-2">
                <Link
                  href="/#linhas"
                  onClick={(e) => e.stopPropagation()}
                  className={`inline-flex w-fit px-2 py-0.5 rounded-[var(--radius-pill)] text-[10px] font-semibold mono uppercase tracking-[0.05em] hover:scale-105 transition-transform duration-200 cursor-pointer ${badgeStyle(product.linha)}`}
                >
                  {product.linha}
                </Link>
                <h3 className="font-['Clash_Display',sans-serif] text-body font-semibold leading-tight line-clamp-2">
                  {product.nome}
                </h3>
                <div className="flex flex-col gap-1 mt-auto pt-2 border-t border-[var(--color-line)]">
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

        {/* Load More Button */}
        {filtered.length > visibleCount && (
          <div className="flex justify-center mt-[var(--space-12)]">
            <Button
              onClick={() => setVisibleCount((prev) => prev + 10)}
              variant="primary"
              className="min-w-[200px] justify-center"
            >
              Ver mais
            </Button>
          </div>
        )}

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
              className="w-full max-w-lg bg-[var(--color-bg-elev)] border border-[var(--color-line)] rounded-[var(--radius-md)] overflow-hidden max-h-[85vh] overflow-y-auto scrollbar-hidden"
              onClick={(e) => e.stopPropagation()}
              data-lenis-prevent
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
                  src={productImage(selectedProduct.nome)}
                  alt={selectedProduct.nome}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-[var(--space-6)] flex flex-col gap-4">
                <Link
                  href="/#linhas"
                  className={`inline-flex w-fit px-3 py-1 rounded-[var(--radius-pill)] text-[0.75rem] font-semibold mono uppercase tracking-[0.05em] hover:scale-105 transition-transform duration-200 cursor-pointer ${badgeStyle(selectedProduct.linha)}`}
                >
                  {selectedProduct.linha}
                </Link>
                <h2 className="font-['Clash_Display',sans-serif] text-[clamp(1.5rem,2.5vw,2.25rem)] font-semibold leading-[1.05]">
                  {selectedProduct.nome}
                </h2>

                {/* Specs */}
                <div className="flex flex-col gap-4 py-[var(--space-4)] border-t border-b border-[var(--color-line)]">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-4">
                    <span className="mono text-xs sm:text-sm text-[var(--color-text-faint)] uppercase tracking-wider">
                      Dimensões
                    </span>
                    <span className="mono text-sm text-[var(--color-text)] sm:text-right">
                      {selectedProduct.dimensoes}
                    </span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-4">
                    <span className="mono text-xs sm:text-sm text-[var(--color-text-faint)] uppercase tracking-wider">
                      Peso
                    </span>
                    <span className="mono text-sm text-[var(--color-text)] sm:text-right">
                      {selectedProduct.peso}
                    </span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 sm:gap-4">
                    <span className="mono text-xs sm:text-sm text-[var(--color-text-faint)] uppercase tracking-wider">
                      Material
                    </span>
                    <span className="mono text-sm text-[var(--color-text)] sm:text-right sm:max-w-xs">
                      {MATERIAL}
                    </span>
                  </div>
                </div>

                <Button
                  onClick={() => {
                    const nome = selectedProduct.nome;
                    setSelectedProduct(null);
                    // Use full-page navigation so the browser lands on the hash
                    // and the contact form can be reached reliably from this route.
                    window.location.href = `/?produto=${encodeURIComponent(nome)}#contato`;
                  }}
                  icon
                  className="w-full justify-center"
                >
                  Pedir orçamento
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 16 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            onClick={scrollToTop}
            className="fixed bottom-24 right-5 sm:bottom-28 sm:right-8 z-50 w-12 h-12 rounded-full bg-[var(--color-gold)] text-[var(--color-ink)] hover:bg-[var(--color-gold-soft)] hover:scale-110 active:scale-90 shadow-[0_4px_20px_rgba(232,196,76,0.3)] flex items-center justify-center cursor-pointer transition-all duration-300 group"
            aria-label="Voltar ao topo"
          >
            <ArrowUp
              size={20}
              className="transition-transform duration-300 group-hover:-translate-y-0.5"
            />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

// Lê os parâmetros da URL isoladamente. Fica dentro do Suspense sozinho,
// sem nenhum elemento interativo, para não impedir a hidratação do resto da página.
function SearchParamsBridge({
  onParams,
}: {
  onParams: (params: CatalogoContentProps) => void;
}) {
  const searchParams = useSearchParams();
  const categoria = searchParams.get("categoria");
  const linha = searchParams.get("linha");
  const produto = searchParams.get("produto");

  useEffect(() => {
    onParams({ categoryFromUrl: categoria, lineFromUrl: linha, productFromUrl: produto });
  }, [categoria, linha, produto, onParams]);

  return null;
}

export default function CatalogoPage() {
  const [urlParams, setUrlParams] = useState<CatalogoContentProps>({
    categoryFromUrl: null,
    lineFromUrl: null,
    productFromUrl: null,
  });

  const handleParams = useCallback((params: CatalogoContentProps) => {
    setUrlParams(params);
  }, []);

  return (
    <>
      <Suspense fallback={null}>
        <SearchParamsBridge onParams={handleParams} />
      </Suspense>
      <CatalogoContent
        categoryFromUrl={urlParams.categoryFromUrl}
        lineFromUrl={urlParams.lineFromUrl}
        productFromUrl={urlParams.productFromUrl}
      />
    </>
  );
}
