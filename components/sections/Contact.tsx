"use client";

import { useState, useEffect } from "react";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { Mail, Phone, MapPin, CheckCircle2, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    nome: "",
    email: "",
    telefone: "",
    academia: "",
    mensagem: "",
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const productParam = params.get("produto");
      if (productParam) {
        setForm((prev) => ({
          ...prev,
          mensagem: `Olá, tenho interesse no equipamento ${productParam} e gostaria de solicitar um orçamento detalhado.`,
        }));
        
        if (window.location.hash === "#contato" || window.location.href.includes("contato")) {
          const element = document.getElementById("contato");
          if (element) {
            setTimeout(() => {
              element.scrollIntoView({ behavior: "smooth" });
            }, 150);
          }
        }
      }
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct WhatsApp message
    const msg = `Olá Olympo Steel! Gostaria de solicitar um orçamento:\n\n` +
      `*Nome:* ${form.nome}\n` +
      `*E-mail:* ${form.email}\n` +
      `*WhatsApp:* ${form.telefone}\n` +
      (form.academia ? `*Academia/Empresa:* ${form.academia}\n` : "") +
      `\n*Interesse / Mensagem:*\n${form.mensagem}`;
      
    const encodedMsg = encodeURIComponent(msg);
    // WhatsApp number placeholder (replace with real Olympo number if needed)
    const whatsappUrl = `https://wa.me/5500000000000?text=${encodedMsg}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    
    setSubmitted(true);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section
      id="contato"
      className="relative py-[var(--space-32)] md:py-[var(--space-40)] bg-[var(--color-bg)] border-t border-[var(--color-line)] overflow-hidden"
    >
      {/* Background atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-[radial-gradient(circle,rgba(232,196,76,0.015)_0%,transparent_70%)]" />
      </div>

      <div className="container-site relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-[var(--space-12)] lg:gap-[var(--space-16)] lg:items-stretch items-start">
        {/* Left Column: Contact info */}
        <ScrollReveal className="lg:col-span-5 flex flex-col gap-[var(--space-6)]">
          <span className="section-label">Contato</span>
          <h2 className="text-[clamp(2.25rem,4vw,3.25rem)] font-semibold leading-[1.05] tracking-[-0.02em]">
            Inicie o seu<br />projeto de força.
          </h2>
          <p className="text-[1.0625rem] text-[var(--color-text-dim)] leading-relaxed">
            Entre em contato com nossa equipe comercial. Solicite orçamentos, discuta projetos sob medida, personalização de cores ou tire suas dúvidas sobre nossas linhas.
          </p>

          <div className="flex flex-col gap-6 mt-4">
            {/* Mail */}
            <a
              href="mailto:contato@olympsteel.com.br"
              className="flex items-center gap-4 group p-4 rounded-[var(--radius-md)] bg-[var(--color-bg-elev)] border border-[var(--color-line)] hover:border-[var(--color-line-strong)] transition-all"
            >
              <div className="p-3 rounded-[var(--radius-sm)] bg-[var(--color-bg-soft)] text-[var(--color-gold)]">
                <Mail size={20} />
              </div>
              <div className="flex flex-col">
                <span className="text-xs mono text-[var(--color-text-faint)] uppercase tracking-[0.05em]">
                  E-mail comercial
                </span>
                <span className="text-[1rem] font-medium text-[var(--color-text)] group-hover:text-[var(--color-gold)] transition-colors">
                  contato@olympsteel.com.br
                </span>
              </div>
            </a>

            {/* Phone */}
            <a
              href="tel:+5500000000000"
              className="flex items-center gap-4 group p-4 rounded-[var(--radius-md)] bg-[var(--color-bg-elev)] border border-[var(--color-line)] hover:border-[var(--color-line-strong)] transition-all"
            >
              <div className="p-3 rounded-[var(--radius-sm)] bg-[var(--color-bg-soft)] text-[var(--color-gold)]">
                <Phone size={20} />
              </div>
              <div className="flex flex-col">
                <span className="text-xs mono text-[var(--color-text-faint)] uppercase tracking-[0.05em]">
                  Telefone / WhatsApp
                </span>
                <span className="text-[1rem] font-medium text-[var(--color-text)] group-hover:text-[var(--color-gold)] transition-colors">
                  (00) 00000-0000
                </span>
              </div>
            </a>

            {/* Address */}
            <div className="flex items-center gap-4 p-4 rounded-[var(--radius-md)] bg-[var(--color-bg-elev)] border border-[var(--color-line)]">
              <div className="p-3 rounded-[var(--radius-sm)] bg-[var(--color-bg-soft)] text-[var(--color-gold)]">
                <MapPin size={20} />
              </div>
              <div className="flex flex-col">
                <span className="text-xs mono text-[var(--color-text-faint)] uppercase tracking-[0.05em]">
                  Fábrica & Showroom
                </span>
                <span className="text-[1rem] font-medium text-[var(--color-text-dim)]">
                  Distrito Industrial, Bento Gonçalves, RS
                </span>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Right Column: Form */}
        <ScrollReveal className="lg:col-span-7 lg:h-full" delay={0.15}>
          <div className="w-full lg:h-full bg-[var(--color-bg-elev)] border border-[var(--color-line)] rounded-[var(--radius-md)] shadow-[var(--shadow-card)] p-8 relative overflow-hidden min-h-[500px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="contact-form"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-6"
                >
                  <div>
                    <h3 className="font-['Clash_Display',sans-serif] text-xl font-semibold mb-1">
                      Solicite um Orçamento
                    </h3>
                    <p className="text-sm text-[var(--color-text-dim)]">
                      Preencha os campos abaixo e entraremos em contato em até 24h.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Nome */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="nome" className="mono text-xs text-[var(--color-text-dim)] uppercase tracking-[0.05em]">
                        Nome completo
                      </label>
                      <input
                        required
                        type="text"
                        id="nome"
                        name="nome"
                        value={form.nome}
                        onChange={handleInputChange}
                        placeholder="Seu nome"
                        className="w-full px-4 py-2.5 bg-[var(--color-bg-soft)] border border-[var(--color-line)] rounded-[var(--radius-sm)] text-sm text-[var(--color-text)] placeholder:text-[var(--color-text-faint)] focus:border-[var(--color-gold)] focus:outline-none transition-colors"
                      />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="email" className="mono text-xs text-[var(--color-text-dim)] uppercase tracking-[0.05em]">
                        E-mail corporativo
                      </label>
                      <input
                        required
                        type="email"
                        id="email"
                        name="email"
                        value={form.email}
                        onChange={handleInputChange}
                        placeholder="seu@email.com"
                        className="w-full px-4 py-2.5 bg-[var(--color-bg-soft)] border border-[var(--color-line)] rounded-[var(--radius-sm)] text-sm text-[var(--color-text)] placeholder:text-[var(--color-text-faint)] focus:border-[var(--color-gold)] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Telefone */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="telefone" className="mono text-xs text-[var(--color-text-dim)] uppercase tracking-[0.05em]">
                        WhatsApp / Celular
                      </label>
                      <input
                        required
                        type="tel"
                        id="telefone"
                        name="telefone"
                        value={form.telefone}
                        onChange={handleInputChange}
                        placeholder="(00) 00000-0000"
                        className="w-full px-4 py-2.5 bg-[var(--color-bg-soft)] border border-[var(--color-line)] rounded-[var(--radius-sm)] text-sm text-[var(--color-text)] placeholder:text-[var(--color-text-faint)] focus:border-[var(--color-gold)] focus:outline-none transition-colors"
                      />
                    </div>

                    {/* Academia */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="academia" className="mono text-xs text-[var(--color-text-dim)] uppercase tracking-[0.05em]">
                        Nome da Academia <span className="text-[var(--color-text-faint)]">(Opcional)</span>
                      </label>
                      <input
                        type="text"
                        id="academia"
                        name="academia"
                        value={form.academia}
                        onChange={handleInputChange}
                        placeholder="Nome da sua empresa"
                        className="w-full px-4 py-2.5 bg-[var(--color-bg-soft)] border border-[var(--color-line)] rounded-[var(--radius-sm)] text-sm text-[var(--color-text)] placeholder:text-[var(--color-text-faint)] focus:border-[var(--color-gold)] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Mensagem */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="mensagem" className="mono text-xs text-[var(--color-text-dim)] uppercase tracking-[0.05em]">
                      Mensagem / Equipamentos de Interesse
                    </label>
                    <textarea
                      required
                      id="mensagem"
                      name="mensagem"
                      rows={4}
                      value={form.mensagem}
                      onChange={handleInputChange}
                      placeholder="Ex: Gostaria de solicitar um orçamento para 5 supines da linha Zeus e 2 leg presses da linha Steel..."
                      className="w-full px-4 py-2.5 bg-[var(--color-bg-soft)] border border-[var(--color-line)] rounded-[var(--radius-sm)] text-sm text-[var(--color-text)] placeholder:text-[var(--color-text-faint)] focus:border-[var(--color-gold)] focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <Button type="submit" icon className="w-full justify-center mt-2">
                    Enviar Proposta
                  </Button>
                </motion.form>
              ) : (
                <motion.div
                  key="success-card"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col items-center text-center gap-5 p-4"
                >
                  <div className="p-4 rounded-full bg-[rgba(232,196,76,0.06)] border border-[rgba(232,196,76,0.15)] text-[var(--color-gold)] mb-2">
                    <CheckCircle2 size={44} />
                  </div>
                  <h3 className="font-['Clash_Display',sans-serif] text-2xl font-bold text-[var(--color-text)] leading-tight">
                    Proposta enviada!
                  </h3>
                  <p className="text-[1rem] text-[var(--color-text-dim)] max-w-[340px] leading-relaxed">
                    Olá <strong>{form.nome}</strong>, recebemos o seu pedido. Nossa equipe comercial entrará em contato pelo e-mail ou WhatsApp em até 24 horas úteis.
                  </p>
                  <button
                    onClick={() => {
                      setForm({ nome: "", email: "", telefone: "", academia: "", mensagem: "" });
                      setSubmitted(false);
                    }}
                    className="mt-4 text-xs font-semibold uppercase tracking-wider text-[var(--color-gold)] hover:text-[var(--color-gold-soft)] transition-colors inline-flex items-center gap-1.5 cursor-pointer"
                  >
                    Enviar nova mensagem
                    <ArrowRight size={12} />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
