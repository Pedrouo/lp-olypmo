"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Home } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

const MotionLink = motion.create(Link);

const links = [
  { label: "Início", href: "/" },
  { label: "Linhas", href: "/#linhas" },
  { label: "Equipamentos", href: "/#equipamentos" },
  { label: "Diferenciais", href: "/#diferenciais" },
  { label: "Catálogo", href: "/catalogo" },
  { label: "Contato", href: "/#contato" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href === "/" || href.startsWith("/#")) {
      const pathname = window.location.pathname;
      if (pathname === "/") {
        e.preventDefault();
        
        if (mobileOpen) {
          setMobileOpen(false);
        }

        const targetId = href === "/" ? null : href.replace("/#", "");
        if (targetId) {
          const element = document.getElementById(targetId);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            window.history.pushState(null, "", href);
          }
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
          window.history.pushState(null, "", "/");
        }
      }
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -12, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[var(--color-bg-elev)]/80 backdrop-blur-[12px] border-b border-neutral-900"
            : "bg-transparent"
        }`}
      >
        <div className="container-site flex items-center justify-between h-20">
          {/* Wordmark */}
          <Link
            href="/"
            className="font-['Clash_Display',sans-serif] text-xl font-bold tracking-[0.08em] text-[var(--color-text)] hover:text-[var(--color-gold)] transition-colors"
          >
            OLYMPO
          </Link>

          {/* Desktop nav links */}
          <nav className="hidden lg:flex items-center gap-8">
            {links.map((link) => {
              const isInternal = link.href.startsWith("/");
              const Component = isInternal ? Link : "a";
              return (
                <Component
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="relative text-sm font-medium text-[var(--color-text-dim)] hover:text-[var(--color-text)] transition-colors group py-1 flex items-center gap-1.5"
                >
                  {link.label === "Início" ? (
                    <Home size={16} className="transition-colors group-hover:text-[var(--color-gold)]" />
                  ) : (
                    link.label
                  )}
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[var(--color-gold)] transition-all duration-300 group-hover:w-full" />
                </Component>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Button href="#contato" icon>
              Pedir orçamento
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 text-[var(--color-text)]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile fullscreen menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[var(--color-bg)] flex flex-col items-center justify-center gap-8 lg:hidden"
          >
            {links.map((link, i) => {
              const isInternal = link.href.startsWith("/");
              const Component = isInternal ? MotionLink : motion.a;
              return (
                <Component
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.1 + i * 0.08,
                    duration: 0.5,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="font-['Clash_Display',sans-serif] text-[clamp(1.75rem,3vw,2.75rem)] font-semibold text-[var(--color-text)] hover:text-[var(--color-gold)] transition-colors flex items-center gap-3"
                  onClick={(e) => {
                    handleLinkClick(e as any, link.href);
                    setMobileOpen(false);
                  }}
                >
                  {link.label === "Início" ? (
                    <>
                      <Home size={24} />
                      <span>Início</span>
                    </>
                  ) : (
                    link.label
                  )}
                </Component>
              );
            })}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <Button href="#contato" icon onClick={() => setMobileOpen(false)}>
                Pedir orçamento
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
