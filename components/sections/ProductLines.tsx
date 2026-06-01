import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/motion/ScrollReveal";
import { ArrowRight } from "lucide-react";

const lines = [
  {
    name: "Steel",
    badge: "steel" as const,
    desc: "Equipamentos profissionais para academias. Construção sólida, geometria precisa.",
    example: "Supino Sentado Articulado",
  },
  {
    name: "Zeus",
    badge: "zeus" as const,
    desc: "Linha premium com torre de pesos integrada. Carenagem e acabamento de alto padrão.",
    example: "Fly Voador Peitoral",
  },
  {
    name: "BSC",
    badge: "bsc" as const,
    desc: "Alto custo-benefício, sem abrir mão da resistência do aço carbono.",
    example: "Remada Baixa (Torre)",
  },
];

const badgeStyles = {
  steel:
    "border border-[var(--color-gold)] text-[var(--color-text)] bg-transparent",
  zeus: "bg-[var(--color-gold)] text-[var(--color-ink)]",
  bsc: "border border-[var(--color-line-strong)] text-[var(--color-text-dim)] bg-transparent",
};

export function ProductLines() {
  return (
    <section id="linhas" className="py-[var(--space-32)] md:py-[var(--space-40)] bg-[var(--color-bg)]">
      <div className="container-site">
        <ScrollReveal>
          <span className="section-label mb-[var(--space-4)]">
            Nossas linhas
          </span>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="flex items-start justify-between mb-[var(--space-12)] flex-wrap gap-4">
            <h2 className="text-[var(--font-display-m)] font-semibold leading-[1.05] max-w-[500px]">
              Três linhas, um padrão.
            </h2>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-[var(--space-6)]">
          {lines.map((line) => (
            <StaggerItem key={line.name}>
              <div className="group border border-[var(--color-line)] rounded-[var(--radius-sm)] overflow-hidden hover:border-[var(--color-line-strong)] transition-colors">
                {/* Image */}
                <div className="w-full aspect-[4/3] overflow-hidden">
                  <img
                    src="/academia.webp"
                    alt={`Linha ${line.name} - ${line.example}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </div>

                {/* Content */}
                <div className="p-[var(--space-6)] bg-[var(--color-bg)] flex flex-col gap-3">
                  <span
                    className={`inline-flex w-fit px-3 py-1 rounded-[var(--radius-pill)] text-[var(--font-label)] font-semibold mono uppercase tracking-[0.05em] ${badgeStyles[line.badge]}`}
                  >
                    {line.name}
                  </span>
                  <h3 className="text-[var(--font-body-l)] font-semibold">
                    Linha {line.name}.
                  </h3>
                  <p className="text-[var(--font-body)] text-[var(--color-text-dim)] leading-relaxed">
                    {line.desc}
                  </p>
                  <a
                    href="/catalogo"
                    className="inline-flex items-center gap-1 text-[var(--font-small)] text-[var(--color-gold)] font-medium hover:text-[var(--color-gold-soft)] transition-colors mt-2 group/link"
                  >
                    Explorar
                    <ArrowRight
                      size={14}
                      className="transition-transform group-hover/link:translate-x-1"
                    />
                  </a>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
