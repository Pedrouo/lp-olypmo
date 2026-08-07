"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { useRef, useState, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";

const emphasis = [0.16, 1, 0.3, 1] as const;
const easeOut  = [0.22, 1, 0.36, 1] as const;

const titleLines = ["Força projetada", "para durar."];
const videoSrcs  = ["/video1.mp4", "/video2.mp4", "/video3.mp4"];

/* ─── Individual video card ─── */
function VideoCard({
  src,
  index,
  isMuted,
  onToggle,
}: {
  src: string;
  index: number;
  isMuted: boolean;
  onToggle: (index: number) => void;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  // Sync DOM muted property whenever parent state changes
  useEffect(() => {
    if (ref.current) ref.current.muted = isMuted;
  }, [isMuted]);

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1.1 + index * 0.15, duration: 0.6, ease: easeOut }}
      className="group relative flex-1 overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-line)] bg-[rgba(20,20,22,0.55)] backdrop-blur-[16px] shadow-[var(--shadow-float)] hover:border-[var(--color-gold-deep)] transition-colors duration-300"
    >
      <video
        ref={ref}
        src={src}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover aspect-[9/16]"
      />

      {/* Mute / unmute button */}
      <button
        onClick={() => onToggle(index)}
        aria-label={isMuted ? "Ativar som" : "Desativar som"}
        className="absolute bottom-3 right-3 flex items-center justify-center w-9 h-9 rounded-full bg-[rgba(11,11,12,0.65)] border border-[var(--color-line)] text-[var(--color-text)] backdrop-blur-[8px] hover:bg-[var(--color-gold)] hover:text-[var(--color-ink)] hover:border-[var(--color-gold)] transition-all duration-200"
      >
        {isMuted ? <VolumeX size={15} /> : <Volume2 size={15} />}
      </button>

      {/* Golden accent line on hover */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[var(--color-gold)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
}

/* ─── Hero section ─── */
export function Hero() {
  // null = todos mudos; number = índice do vídeo com som ativo
  const [activeAudioIdx, setActiveAudioIdx] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveAudioIdx((prev) => (prev === index ? null : index));
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[var(--color-bg)]">
      {/* Background atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="/Hero1.png"
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover opacity-[0.3]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--color-bg)]/50 to-[var(--color-bg)]" />
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-bg)] via-transparent to-[rgba(232,196,76,0.03)]" />
        <div className="absolute top-1/4 right-0 w-[60vw] h-[60vw] bg-[radial-gradient(circle,rgba(232,196,76,0.06)_0%,transparent_70%)] blur-3xl" />
      </div>

      <div className="container-site relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-[var(--space-8)] items-center pt-32 pb-[var(--space-24)]">

        {/* Left: Text — 5 cols */}
        <div className="lg:col-span-5 flex flex-col gap-[var(--space-6)]">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5, ease: easeOut }}
          >
            <span className="section-label">Fábrica de equipamentos</span>
          </motion.div>

          <h1 className="text-[clamp(3.25rem,7vw,7.5rem)] font-bold leading-[0.95] tracking-[-0.02em]">
            {titleLines.map((line, i) => (
              <span key={i} className="block overflow-hidden">
                <motion.span
                  className="block"
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.7, ease: emphasis }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6, ease: easeOut }}
            className="text-[clamp(1.25rem,2vw,1.625rem)] font-normal text-[var(--color-text-dim)] max-w-[520px] leading-[1.5]"
          >
            A Olympo Steel projeta e fabrica equipamentos de musculação em aço
            carbono com pintura eletrostática. Durabilidade profissional,
            acabamento de fábrica.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.5, ease: easeOut }}
            className="flex gap-4 flex-wrap"
          >
            <Button href="#equipamentos" icon>Explorar equipamentos</Button>
            <Button href="#linhas" variant="ghost">Nossas linhas</Button>
          </motion.div>
        </div>

        {/* Right: 3 video cards — 7 cols */}
        <motion.div
          className="lg:col-span-7 flex flex-row gap-3"
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 1, duration: 0.7, ease: easeOut }}
        >
          {videoSrcs.map((src, i) => (
            <VideoCard
              key={src}
              src={src}
              index={i}
              isMuted={activeAudioIdx !== i}
              onToggle={handleToggle}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
