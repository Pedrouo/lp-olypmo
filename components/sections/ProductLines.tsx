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
    desc: "Equipamentos profissionais para academias, com estrutura robusta e acabamento preciso.",
    example: "Supino Sentado Articulado",
    image: "/products/supino-inclinado-olimpico.webp",
  },
  {
    name: "Zeus",
    badge: "zeus" as const,
    desc: "Linha premium com torre de pesos integrada e acabamento de alto padrão.",
    example: "Fly Voador Peitoral",
    image: "/products/pull-over-articulado-gold-edition.webp",
  },
  {
    name: "BSC",
    badge: "bsc" as const,
    desc: "Componentes e complementos essenciais para o dia a dia da academia.",
    example: "Remada Baixa (Torre)",
    image: "/products/remada-frontal-articulada-bsc.webp",
  },
  {
    name: "Expositores",
    badge: "expositores" as const,
    desc: "Suportes e expositores para halteres, anilhas e acessórios.",
    example: "Suporte Dumbbell 3 Andares",
    image: "/products/suporte-dumbbell-3-andares.webp",
  },
];

const badgeStyles = {
  steel:
    "border border-[var(--color-gold)] text-[var(--color-text)] bg-transparent",
  zeus: "bg-[var(--color-gold)] text-[var(--color-ink)]",
  bsc: "border border-[var(--color-line-strong)] text-[var(--color-text-dim)] bg-transparent",
  expositores:
    "border border-[var(--color-line-strong)] text-[var(--color-text-dim)] bg-transparent",
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
            <h2 className="text-[clamp(1.75rem,3vw,2.75rem)] font-semibold leading-[1.05] max-w-[500px]">
              Quatro linhas, um padrão.
            </h2>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[var(--space-6)]">
          {lines.map((line) => (
            <StaggerItem key={line.name} className="h-full">
              <div className="group h-full flex flex-col border border-[var(--color-line)] rounded-[var(--radius-sm)] overflow-hidden hover:border-[var(--color-line-strong)] transition-colors">
                {/* Image */}
                <div className="w-full aspect-[4/3] overflow-hidden">
                  <img
                    src={line.image}
                    alt={`Linha ${line.name}, exemplo: ${line.example}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 p-[var(--space-6)] bg-[var(--color-bg)] flex flex-col gap-3">
                  <span
                    className={`inline-flex w-fit px-3 py-1 rounded-[var(--radius-pill)] text-[0.75rem] font-semibold mono uppercase tracking-[0.05em] ${badgeStyles[line.badge]}`}
                  >
                    {line.name}
                  </span>
                  <h3 className="min-h-[2.4em] text-[clamp(1.375rem,2vw,1.75rem)] font-semibold leading-[1.2]">
                    Linha {line.name}.
                  </h3>
                  <p className="min-h-[3em] text-[1rem] text-[var(--color-text-dim)] leading-relaxed line-clamp-2">
                    {line.desc}
                  </p>
                  <a
                    href={`/catalogo?linha=${line.name}`}
                    className="inline-flex items-center gap-1 text-sm text-[var(--color-gold)] font-medium hover:text-[var(--color-gold-soft)] transition-colors mt-auto pt-2 group/link"
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
