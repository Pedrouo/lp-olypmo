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
          <div className="w-full aspect-[16/10] bg-[var(--color-surface)] rounded-[var(--radius-md)] flex items-center justify-center relative overflow-hidden">
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-[var(--color-surface-2)] flex items-center justify-center">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--color-text-faint)" strokeWidth="1.5">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <span className="mono text-[var(--font-label)] text-[var(--color-text-faint)] uppercase tracking-[0.08em]">
                Crossover Angular
              </span>
              <p className="text-[var(--font-small)] text-[var(--color-text-faint)] mt-1">
                390 kg · 2,40m (L) x 1,10m (P) x 2,30m (A)
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Right: Info card — 5 cols */}
        <ScrollReveal className="lg:col-span-5" delay={0.15}>
          <div className="flex flex-col gap-[var(--space-6)]">
            <span className="section-label">Destaque</span>
            <span className="inline-flex w-fit px-3 py-1 rounded-[var(--radius-pill)] border border-[var(--color-gold)] text-[var(--color-text)] text-[var(--font-label)] font-semibold mono uppercase tracking-[0.05em]">
              Steel
            </span>
            <h2 className="text-[var(--font-display-m)] font-semibold leading-[1.05]">
              Crossover Angular.
            </h2>
            <p className="text-[var(--font-body)] text-[var(--color-text-dim)] leading-relaxed">
              Estrutura em aço carbono com sistema de cabos independentes.
              Regulagem de altura por pino, polias com rolamentos blindados.
              Capacidade para uso profissional contínuo.
            </p>

            {/* Specs */}
            <div className="flex flex-col gap-2 py-[var(--space-4)] border-t border-b border-[var(--color-line)]">
              <div className="flex justify-between">
                <span className="mono text-[var(--font-small)] text-[var(--color-text-faint)]">
                  Dimensões
                </span>
                <span className="mono text-[var(--font-small)] text-[var(--color-text)]">
                  2,40m (L) x 1,10m (P) x 2,30m (A)
                </span>
              </div>
              <div className="flex justify-between">
                <span className="mono text-[var(--font-small)] text-[var(--color-text-faint)]">
                  Peso
                </span>
                <span className="mono text-[var(--font-small)] text-[var(--color-text)]">
                  390 kg
                </span>
              </div>
              <div className="flex justify-between">
                <span className="mono text-[var(--font-small)] text-[var(--color-text-faint)]">
                  Material
                </span>
                <span className="mono text-[var(--font-small)] text-[var(--color-text)]">
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
