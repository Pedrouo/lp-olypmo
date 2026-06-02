"use client";

import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { Shield, Target, Cpu } from "lucide-react";

export function AboutUs() {
  const pillars = [
    {
      icon: Cpu,
      title: "Engenharia de Ponta",
      desc: "Projetados através de softwares de modelagem biomecânica avançados, garantindo a ergonomia e o arco de movimento fisiológico ideal.",
    },
    {
      icon: Shield,
      title: "Aço Estrutural",
      desc: "Construção de alta durabilidade com tubos de aço carbono e chapas cortadas com tecnologia laser de extrema precisão.",
    },
    {
      icon: Target,
      title: "Acabamento Premium",
      desc: "Tratamento anticorrosivo e pintura eletrostática a pó curada em forno, conferindo resistência máxima a impactos e oxidação.",
    },
  ];

  return (
    <section id="sobre" className="relative py-[var(--space-32)] md:py-[var(--space-40)] bg-neutral-200 border-t border-b border-neutral-300 overflow-hidden">
      <div className="container-site relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-[var(--space-12)] lg:gap-[var(--space-16)] items-center">
        {/* Left Col: Visual Showcase */}
        <ScrollReveal className="lg:col-span-6 order-2 lg:order-1">
          <div className="relative group rounded-[var(--radius-md)] overflow-hidden border border-neutral-700 bg-black shadow-[var(--shadow-card)] p-3">
            <div className="relative w-full aspect-[4/3] rounded-[var(--radius-sm)] overflow-hidden">
              <img
                src="/academia.webp"
                alt="Fábrica da Olympo Steel"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(11,11,12,0.85)] via-transparent to-transparent" />
            </div>
            {/* Soft decorative golden line below the image */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] h-[1px] bg-gradient-to-r from-transparent via-[var(--color-gold-deep)] to-transparent opacity-40 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        </ScrollReveal>

        {/* Right Col: Info & Pillars */}
        <ScrollReveal className="lg:col-span-6 order-1 lg:order-2" delay={0.15}>
          <div className="flex flex-col gap-[var(--space-6)]">
            <span className="section-label !text-[var(--color-gold-deep)] font-bold text-xs sm:text-sm tracking-wider">Sobre nós</span>
            
            <h2 className="text-[clamp(1.75rem,3vw,2.75rem)] font-semibold leading-[1.05] tracking-[-0.02em] text-black">
              Forjada na precisão,<br />construída para durar.
            </h2>
            
            <p className="text-[1.0625rem] text-neutral-800 leading-relaxed">
              A Olympo Steel nasceu com o propósito de fabricar equipamentos de força com o mais alto nível de engenharia mecânica. Combinamos robustez industrial, biomecânica precisa e acabamento estético de alto padrão, atendendo às necessidades das maiores academias e centros de treinamento do país.
            </p>
 
            {/* Pillars Grid */}
            <div className="grid grid-cols-1 gap-5 mt-4 pt-6 border-t border-neutral-300">
              {pillars.map((p, idx) => (
                <div key={idx} className="flex gap-4 items-start group">
                  <div className="flex-shrink-0 p-2.5 rounded-[var(--radius-sm)] bg-white border border-neutral-300 text-[var(--color-gold-deep)] group-hover:border-[var(--color-gold-deep)] transition-colors duration-300">
                    <p.icon size={18} />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h4 className="font-semibold text-[1rem] text-black">
                      {p.title}
                    </h4>
                    <p className="text-sm text-neutral-700 leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
