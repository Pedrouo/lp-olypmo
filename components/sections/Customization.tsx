import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { asset } from "@/lib/assets";

export function Customization() {
  return (
    <section
      id="sobmedida"
      className="py-[var(--space-32)] md:py-[var(--space-40)] bg-[var(--color-bg)] border-t border-[var(--color-line)]"
    >
      <div className="container-site grid grid-cols-1 lg:grid-cols-12 gap-[var(--space-12)] items-center">
        {/* Left: Image with glass card — 6 cols */}
        <ScrollReveal className="lg:col-span-6">
          <div className="relative w-full aspect-[4/3] rounded-[var(--radius-md)] overflow-hidden border border-[var(--color-line)]">
            {/* Image */}
            <img
              src={asset("/academia.webp")}
              alt="Academia equipada com Olympo Steel"
              className="w-full h-full object-cover"
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-[rgba(11,11,12,0.45)]" />

            {/* Glass card overlay */}
            <div className="absolute bottom-6 left-6 right-6 bg-[rgba(20,20,22,0.6)] backdrop-blur-[16px] border border-[var(--color-line)] rounded-[var(--radius-md)] p-5">
              <h3 className="font-['Clash_Display',sans-serif] text-[var(--font-h3)] font-semibold mb-2">
                Vamos conversar.
              </h3>
              <p className="text-[var(--font-small)] text-[var(--color-text-dim)] leading-relaxed mb-4">
                Projetos sob medida para o layout e a demanda do seu espaço.
                Cor, dimensão e configuração personalizada.
              </p>
              <Button href="#contato" icon>
                Falar com a fábrica
              </Button>
            </div>
          </div>
        </ScrollReveal>

        {/* Right: Text — 6 cols */}
        <ScrollReveal className="lg:col-span-6" delay={0.15}>
          <div className="flex flex-col gap-[var(--space-6)]">
            <span className="section-label">Sob medida</span>
            <h2 className="text-[var(--font-display-l)] font-semibold leading-[1.05]">
              Configure equipamentos sob medida para o seu espaço.
            </h2>
            <p className="text-[var(--font-body-l)] text-[var(--color-text-dim)] leading-relaxed max-w-[480px]">
              Cada academia tem um layout, um público e uma rotina.
              Dimensionamos, ajustamos e fabricamos equipamentos que se encaixam
              no projeto — sem adaptação forçada, sem comprometer a biomecânica.
            </p>
            <div className="flex flex-col gap-3 py-[var(--space-4)] border-t border-[var(--color-line)]">
              <div className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-gold)]" />
                <span className="text-[var(--font-small)] text-[var(--color-text-dim)]">
                  Dimensões customizadas
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-gold)]" />
                <span className="text-[var(--font-small)] text-[var(--color-text-dim)]">
                  Cores e acabamento personalizado
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-gold)]" />
                <span className="text-[var(--font-small)] text-[var(--color-text-dim)]">
                  Assessoria técnica de layout
                </span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
