import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { Button } from "@/components/ui/Button";

export function Manifesto() {
  return (
    <section className="py-[var(--space-32)] md:py-[var(--space-40)] bg-[var(--color-bg)]">
      <div className="container-site max-w-[800px] text-center flex flex-col items-center gap-[var(--space-6)]">
        <ScrollReveal>
          <span className="section-label justify-center">Sobre nós</span>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="font-['Clash_Display',sans-serif] text-display-l font-semibold leading-[1.05] tracking-[-0.02em]">
            A Olympo Steel projeta e fabrica equipamentos de musculação que unem
            engenharia em aço carbono e acabamento de fábrica.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <Button href="#sobmedida" variant="ghost">
            Sobre nós
          </Button>
        </ScrollReveal>
      </div>
    </section>
  );
}
