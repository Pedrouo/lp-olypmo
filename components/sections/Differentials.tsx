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
      className="section-light relative py-[var(--space-32)] md:py-[var(--space-40)] bg-[var(--color-white)] overflow-hidden"
    >
      {/* Atmosphere */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(232,196,76,0.05)_0%,transparent_60%)] pointer-events-none" />

      <div className="container-site relative z-10">
        <ScrollReveal>
          <span className="section-label mb-[var(--space-4)]">
            Por que Olympo
          </span>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-[var(--space-12)]">
            <h2 className="text-[var(--font-display-l)] font-semibold leading-[1.05] max-w-[500px] text-[var(--color-white-text)]">
              Engenharia que sustenta resultados.
            </h2>
            <p className="text-[var(--font-body)] text-[var(--color-white-text-dim)] max-w-[340px]">
              Cada equipamento passa por controle dimensional, teste de carga e
              inspeção de acabamento antes de sair da fábrica.
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[var(--space-6)]">
          {items.map((item) => (
            <StaggerItem key={item.num}>
              <div
                className={`p-[var(--space-6)] rounded-[var(--radius-sm)] border h-full flex flex-col gap-4 transition-all duration-300 ${
                  item.highlight
                    ? "bg-[var(--color-ink)] border-[var(--color-ink)] text-[var(--color-white)] shadow-[var(--shadow-float)]"
                    : "bg-[var(--color-white-off)] border-[var(--color-white-line)] hover:border-[var(--color-white-line-strong)] hover:shadow-[0_2px_12px_rgba(0,0,0,0.06)]"
                }`}
              >
                <span
                  className={`mono text-[var(--font-display-m)] font-bold leading-none ${
                    item.highlight
                      ? "text-[var(--color-gold)] opacity-60"
                      : "text-[var(--color-gold-deep)]"
                  }`}
                >
                  {item.num}
                </span>
                <h3
                  className={`font-['Clash_Display',sans-serif] text-[var(--font-h3)] font-semibold ${
                    item.highlight ? "text-[var(--color-white)]" : "text-[var(--color-white-text)]"
                  }`}
                >
                  {item.title}
                </h3>
                <p
                  className={`text-[var(--font-small)] leading-relaxed ${
                    item.highlight
                      ? "text-[var(--color-text-dim)]"
                      : "text-[var(--color-white-text-dim)]"
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

