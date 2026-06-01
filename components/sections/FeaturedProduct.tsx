import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { Button } from "@/components/ui/Button";

export function FeaturedProduct() {
  return (
    <section className="relative py-[var(--space-32)] md:py-[var(--space-40)] bg-[var(--color-bg-soft)] overflow-hidden">
      {/* Background atmosphere */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-bg)] via-transparent to-[var(--color-bg)]" />
        <div className="absolute top-0 right-0 w-[40vw] h-full bg-[radial-gradient(ellipse_at_right,rgba(232,196,76,0.04)_0%,transparent_60%)]" />
      </div>

      <div className="container-site relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-[var(--space-12)] items-center">
        {/* Left: Image placeholder — 7 cols */}
        <ScrollReveal className="lg:col-span-7">
          <div className="w-full aspect-[16/10] rounded-[var(--radius-md)] overflow-hidden">
            <img
              src="/academia.webp"
              alt="Crossover Angular Olympo Steel"
              className="w-full h-full object-cover"
            />
          </div>
        </ScrollReveal>

        {/* Right: Info card — 5 cols */}
        <ScrollReveal className="lg:col-span-5" delay={0.15}>
          <div className="flex flex-col gap-[var(--space-6)]">
            <span className="section-label">Destaque</span>
            <span className="inline-flex w-fit px-3 py-1 rounded-[var(--radius-pill)] border border-[var(--color-gold)] text-[var(--color-text)] text-label font-semibold mono uppercase tracking-[0.05em]">
              Steel
            </span>
            <h2 className="text-display-l font-semibold leading-[1.05]">
              Crossover Angular.
            </h2>
            <p className="text-body-l text-[var(--color-text-dim)] leading-relaxed">
              Estrutura em aço carbono com sistema de cabos independentes.
              Regulagem de altura por pino, polias com rolamentos blindados.
              Capacidade para uso profissional contínuo.
            </p>

            {/* Specs */}
            <div className="flex flex-col gap-2 py-[var(--space-4)] border-t border-b border-[var(--color-line)]">
              <div className="flex justify-between">
                <span className="mono text-sm text-[var(--color-text-faint)]">
                  Dimensões
                </span>
                <span className="mono text-sm text-[var(--color-text)]">
                  2,40m (L) x 1,10m (P) x 2,30m (A)
                </span>
              </div>
              <div className="flex justify-between">
                <span className="mono text-sm text-[var(--color-text-faint)]">
                  Peso
                </span>
                <span className="mono text-sm text-[var(--color-text)]">
                  390 kg
                </span>
              </div>
              <div className="flex justify-between">
                <span className="mono text-sm text-[var(--color-text-faint)]">
                  Material
                </span>
                <span className="mono text-sm text-[var(--color-text)]">
                  Aço Carbono | Pintura Eletrostática
                </span>
              </div>
            </div>

            <div className="flex items-center gap-4 flex-wrap">
              <span className="price-block">R$ 19.800,00</span>
              <Button href="/catalogo" variant="link" icon>
                Ver no catálogo
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
