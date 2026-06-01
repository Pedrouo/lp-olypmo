import { ArrowUpRight } from "lucide-react";

const navGroups = [
  {
    title: "Equipamentos",
    links: [
      { label: "Peitoral", href: "/catalogo" },
      { label: "Costas", href: "/catalogo" },
      { label: "Pernas", href: "/catalogo" },
      { label: "Catálogo completo", href: "/catalogo" },
    ],
  },
  {
    title: "Linhas",
    links: [
      { label: "Steel", href: "#linhas" },
      { label: "Zeus", href: "#linhas" },
      { label: "BSC", href: "#linhas" },
    ],
  },
  {
    title: "Suporte",
    links: [
      { label: "Personalização", href: "#sobmedida" },
      { label: "Garantia e manutenção", href: "#" },
    ],
  },
  {
    title: "Contato",
    links: [
      { label: "contato@olympsteel.com.br", href: "mailto:contato@olympsteel.com.br" },
      { label: "(00) 00000-0000", href: "tel:+5500000000000" },
    ],
  },
];

export function Footer() {
  return (
    <footer
      id="contato"
      className="relative bg-[var(--color-bg)] border-t border-[var(--color-line)] overflow-hidden"
    >
      {/* Top section */}
      <div className="container-site pt-[var(--space-16)] pb-[var(--space-12)]">
        {/* Brand phrase */}
        <p className="font-['Clash_Display',sans-serif] text-[clamp(1.375rem,2.2vw,2rem)] font-semibold max-w-[620px] leading-[1.15] mb-[var(--space-10)]">
          Aço carbono, engenharia precisa, acabamento de fábrica.
        </p>

        {/* Link columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-[var(--space-8)]">
          {navGroups.map((group) => (
            <div key={group.title}>
              <h4 className="mono text-[0.75rem] uppercase tracking-[0.08em] text-[var(--color-gold)] mb-[var(--space-4)]">
                {group.title}
              </h4>
              <ul className="flex flex-col gap-[var(--space-2)]">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-[var(--color-text-dim)] hover:text-[var(--color-text)] transition-colors inline-flex items-center gap-1 group"
                    >
                      {link.label}
                      <ArrowUpRight
                        size={12}
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Wordmark watermark */}
      <div className="container-site pb-[var(--space-8)] overflow-hidden">
        <p
          className="font-['Clash_Display',sans-serif] font-bold text-[clamp(3rem,15vw,12rem)] leading-none tracking-[0.04em] select-none text-center whitespace-nowrap"
          style={{ color: "rgba(245,244,241,0.04)" }}
        >
          OLYMPO
        </p>
      </div>

      {/* Copyright */}
      <div className="container-site py-[var(--space-4)] border-t border-[var(--color-line)]">
        <p className="mono text-[0.75rem] text-[var(--color-text-faint)] tracking-[0.08em] uppercase">
          © 2026 Olympo Steel Ltda. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
