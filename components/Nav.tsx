"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Home } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { usePathname, useRouter } from "next/navigation";

const MotionLink = motion.create(Link);

const links = [
  { label: "Início", href: "/" },
  { label: "Linhas", href: "/#linhas" },
  { label: "Equipamentos", href: "/#equipamentos" },
  { label: "Diferenciais", href: "/#diferenciais" },
  { label: "Sobre nós", href: "/#sobre" },
  { label: "Catálogo", href: "/catalogo" },
  { label: "Contato", href: "/#contato" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const pendingScrollTargetRef = useRef<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to hash on page load or client-side route transitions
  useEffect(() => {
    if (pendingScrollTargetRef.current) {
      // Cross-page navigation: Next.js reset scroll to 0 (scroll:true),
      // wait for layout to stabilize, then animate to target.
      const targetId = pendingScrollTargetRef.current;
      pendingScrollTargetRef.current = null;
      const timer = setTimeout(() => {
        const el = document.getElementById(targetId);
        if (!el) return;
        const lenis = (window as any).lenis;
        if (lenis) {
          lenis.scrollTo(el, { duration: 1.2 });
        } else {
          el.scrollIntoView({
            behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
          });
        }
      }, 150);
      return () => clearTimeout(timer);
    }

    // Same-page or initial load: read hash from URL
    const hash = window.location.hash.replace("#", "");
    if (!hash) return;

    const tryScroll = () => {
      const el = document.getElementById(hash);
      if (!el) return false;
      const lenis = (window as any).lenis;
      if (lenis) {
        lenis.scrollTo(el, { duration: 1.2 });
      } else if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        el.scrollIntoView({ behavior: "auto" });
      } else {
        el.scrollIntoView({ behavior: "smooth" });
      }
      return true;
    };

    if (tryScroll()) return;
    let count = 0;
    const interval = setInterval(() => {
      count++;
      if (tryScroll() || count > 30) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, [pathname]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href === "/" || href.startsWith("/#")) {
      const currentPath = window.location.pathname;
      if (currentPath === "/") {
        e.preventDefault();
        
        if (mobileOpen) {
          setMobileOpen(false);
        }

        const targetId = href === "/" ? null : href.replace("/#", "");
        if (targetId) {
          const element = document.getElementById(targetId);
          if (element) {
            const lenis = (window as any).lenis;
            if (lenis) {
              lenis.scrollTo(element, { duration: 1.2 });
            } else {
              element.scrollIntoView({ behavior: "smooth" });
            }
            window.history.pushState(null, "", href);
          }
        } else {
          const lenis = (window as any).lenis;
          if (lenis) {
            lenis.scrollTo(0, { duration: 1.2 });
          } else {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }
          window.history.pushState(null, "", "/");
        }
      } else {
        // We are on a different page, e.g. /catalogo.
        e.preventDefault();
        if (mobileOpen) {
          setMobileOpen(false);
        }
        // If it's an in-page anchor on the home page (e.g. "/#contato"),
        // perform a full navigation so the browser can land on the hash
        // and scroll to the target reliably. Client-side push sometimes
        // fails to scroll to hashes across routes in some setups.
        if (href.startsWith("/#")) {
          // Directly navigate the browser to the full href (causes a normal
          // page load which will jump to the hash when available).
          window.location.href = href;
          return;
        }
        // Otherwise perform a normal client-side route push.
        router.push(href);
      }
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -12, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
          scrolled
            ? "bg-[var(--color-bg-elev)]/80 backdrop-blur-[12px] border-neutral-900"
            : "bg-transparent border-transparent"
        }`}
      >
        <div className="container-site flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            onClick={(e) => handleLinkClick(e, "/")}
            className="flex items-center hover:opacity-80 transition-opacity"
          >
            <img
              src="/logo-olympo.jpeg"
              alt="Olympo Steel"
              className="h-12 w-12 rounded-full object-cover"
            />
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
            <Button href="/#contato" icon onClick={(e) => handleLinkClick(e as any, "/#contato")}>
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
               <Button href="/#contato" icon onClick={(e) => {
                 handleLinkClick(e as any, "/#contato");
                 setMobileOpen(false);
               }}>
                 Pedir orçamento
               </Button>
             </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
