import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { Button } from "@/components/ui/Button";

export function Manifesto() {
  return (
    <section className="section-light relative py-[var(--space-32)] md:py-[var(--space-40)] bg-[var(--color-white)] overflow-hidden">
      {/* Subtle radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(232,196,76,0.06)_0%,transparent_70%)] pointer-events-none" />

      <div className="container-site max-w-[800px] text-center flex flex-col items-center gap-[var(--space-6)] relative z-10">
        <ScrollReveal>
          <span className="section-label justify-center">Sobre nós</span>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="font-['Clash_Display',sans-serif] text-[var(--font-display-l)] font-semibold leading-[1.05] tracking-[-0.02em] text-[var(--color-white-text)]">
            A Olympo Steel projeta e fabrica equipamentos de musculação que unem
            engenharia em aço carbono e acabamento de fábrica.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <Button href="#sobmedida" variant="ghost-dark">
            Sobre nós
          </Button>
        </ScrollReveal>
      </div>
    </section>
  );
}
