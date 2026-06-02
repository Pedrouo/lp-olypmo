"use client";

import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { Button } from "@/components/ui/Button";

export function Manifesto() {
  return (
    <section className="py-[var(--space-32)] md:py-[var(--space-40)] bg-[var(--color-bg)]">
      <div className="container-site max-w-[800px] text-center flex flex-col items-center gap-[var(--space-6)]">
        <ScrollReveal>
          <span className="section-label justify-center">Nossa Engenharia</span>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="font-['Clash_Display',sans-serif] text-[clamp(1.75rem,3.5vw,3rem)] font-semibold leading-[1.1] tracking-[-0.02em]">
            A Olympo Steel projeta e fabrica equipamentos de musculação que unem
            aço carbono e acabamento de fábrica.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <Button
            href="/#sobre"
            variant="ghost"
            onClick={(e) => {
              if (window.location.pathname === "/") {
                e.preventDefault();
                const element = document.getElementById("sobre");
                if (element) {
                  const lenis = (window as any).lenis;
                  if (lenis) {
                    lenis.scrollTo(element, { duration: 1.2 });
                  } else {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                  window.history.pushState(null, "", "/#sobre");
                }
              }
            }}
          >
            Sobre nós
          </Button>
        </ScrollReveal>
      </div>
    </section>
  );
}
