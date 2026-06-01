import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/motion/ScrollReveal";

const items = [
  {
    num: "01",
    title: "Aço Carbono",
    desc: "Estrutura em aço carbono de alta resistência. Tubulação reforçada, soldas industriais e geometria dimensionada para carga profissional contínua.",
    highlight: false,
  },
  {
    num: "02",
    title: "Pintura Eletrostática",
    desc: "Acabamento em pintura eletrostática a pó, aplicada em estufa. Resistência a riscos, corrosão e desgaste de uso intenso.",
    highlight: false,
  },
  {
    num: "03",
    title: "Sob Medida",
    desc: "Equipamentos configuráveis em dimensão, cor e acessórios. Cada projeto é adaptado ao layout e necessidade do espaço.",
    highlight: true,
  },
  {
    num: "04",
    title: "Durabilidade Profissional",
    desc: "Projetado para a rotina de academias de alto fluxo. Componentes dimensionados para operação diária sem manutenção frequente.",
    highlight: false,
  },
];

export function Differentials() {
  return (
    <section
      id="diferenciais"
      className="py-[var(--space-32)] md:py-[var(--space-40)] bg-[var(--color-bg)] border-t border-[var(--color-line)]"
    >
      <div className="container-site">
        <ScrollReveal>
          <span className="section-label mb-[var(--space-4)]">
            Por que Olympo
          </span>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-[var(--space-12)]">
            <h2 className="text-[clamp(1.75rem,3vw,2.75rem)] font-semibold leading-[1.05] max-w-[500px]">
              Engenharia que sustenta resultados.
            </h2>
            <p className="text-[1.125rem] text-[var(--color-text-dim)] max-w-[380px] leading-relaxed">
              Cada equipamento passa por controle dimensional, teste de carga e
              inspeção de acabamento antes de sair da fábrica.
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[var(--space-6)]">
          {items.map((item) => (
            <StaggerItem key={item.num}>
              <div
                className={`group p-[var(--space-6)] rounded-[var(--radius-sm)] border h-full flex flex-col gap-4 transition-all duration-300 cursor-default ${
                  item.highlight
                    ? "bg-[var(--color-gold)] border-[var(--color-gold)] text-[var(--color-ink)] hover:bg-[var(--color-gold-soft)] hover:border-[var(--color-gold-soft)]"
                    : "bg-[var(--color-bg-soft)] border-[var(--color-line)] hover:bg-[var(--color-gold)] hover:border-[var(--color-gold)]"
                }`}
              >
                <span
                  className={`mono text-[clamp(1.25rem,2vw,1.625rem)] font-bold leading-none transition-colors duration-300 ${
                    item.highlight
                      ? "text-[var(--color-ink)] opacity-30"
                      : "text-[var(--color-gold)] group-hover:text-[var(--color-ink)] group-hover:opacity-30"
                  }`}
                >
                  {item.num}
                </span>
                <h3
                  className={`font-['Clash_Display',sans-serif] text-[clamp(1.25rem,2vw,1.625rem)] font-semibold transition-colors duration-300 ${
                    item.highlight
                      ? "text-[var(--color-ink)]"
                      : "group-hover:text-[var(--color-ink)]"
                  }`}
                >
                  {item.title}
                </h3>
                <p
                  className={`text-[1rem] leading-relaxed transition-colors duration-300 ${
                    item.highlight
                      ? "text-[var(--color-ink)] opacity-80"
                      : "text-[var(--color-text-dim)] group-hover:text-[var(--color-ink)] group-hover:opacity-80"
                  }`}
                >
                  {item.desc}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
