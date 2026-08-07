"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { useRef, useState, useEffect } from "react";
import { Volume2, Volume1, VolumeX } from "lucide-react";

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
  onToggle: (index: number, shouldUnmute?: boolean) => void;
}) {
  const [volume, setVolume] = useState(1); // last non-zero volume
  const ref = useRef<HTMLVideoElement>(null);

  // Sync DOM muted whenever parent changes it
  useEffect(() => {
    if (!ref.current) return;
    ref.current.muted = isMuted;
    // restore volume level when unmuted
    if (!isMuted) ref.current.volume = volume;
  }, [isMuted]);

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const vol = parseFloat(e.target.value);
    if (ref.current) ref.current.volume = vol;

    if (vol === 0) {
      // dragged to zero → mute
      if (!isMuted) onToggle(index);
    } else {
      setVolume(vol);
      // if currently muted and user raised volume → unmute this card
      if (isMuted) onToggle(index, true);
    }
  };

  const displayVol = isMuted ? 0 : volume;
  const VolumeIcon = displayVol === 0 ? VolumeX : displayVol < 0.5 ? Volume1 : Volume2;

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

      {/* Controls — bottom-right corner; named group so slider reacts only to button hover */}
      <div className="absolute bottom-3 right-3 group/ctrl flex flex-col items-center gap-2">

        {/* Vertical volume slider — slides in when hovering the controls area */}
        <div
          className="flex flex-col items-center gap-1 opacity-0 translate-y-2 group-hover/ctrl:opacity-100 group-hover/ctrl:translate-y-0 transition-all duration-300 ease-out"
          style={{ height: 96 }}
        >
          {/* Track container */}
          <div className="relative flex items-center justify-center" style={{ width: 36, height: 88 }}>
            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={displayVol}
              onChange={handleVolumeChange}
              aria-label="Volume"
              style={{
                /* rotate to vertical */
                position: "absolute",
                width: 80,
                height: 4,
                transform: "rotate(-90deg)",
                transformOrigin: "center center",
                cursor: "pointer",
                appearance: "none",
                WebkitAppearance: "none",
                background: `linear-gradient(to right, var(--color-gold) ${displayVol * 100}%, rgba(255,255,255,0.15) ${displayVol * 100}%)`,
                borderRadius: 99,
                outline: "none",
              }}
            />
          </div>
        </div>

        {/* Mute / unmute button */}
        <button
          onClick={() => onToggle(index)}
          aria-label={isMuted ? "Ativar som" : "Desativar som"}
          className="flex items-center justify-center w-9 h-9 rounded-full bg-[rgba(11,11,12,0.65)] border border-[var(--color-line)] text-[var(--color-text)] backdrop-blur-[8px] hover:bg-[var(--color-gold)] hover:text-[var(--color-ink)] hover:border-[var(--color-gold)] transition-all duration-200"
        >
          <VolumeIcon size={15} />
        </button>
      </div>

      {/* Slider thumb styling via global style tag */}
      <style>{`
        input[type=range]::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: var(--color-gold);
          border: 2px solid var(--color-ink);
          cursor: pointer;
          box-shadow: 0 0 4px rgba(0,0,0,0.5);
        }
        input[type=range]::-moz-range-thumb {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: var(--color-gold);
          border: 2px solid var(--color-ink);
          cursor: pointer;
        }
        input[type=range]::-moz-range-track {
          border-radius: 99px;
          height: 4px;
        }
      `}</style>

      {/* Golden accent line on hover */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[var(--color-gold)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
}

/* ─── Hero section ─── */
export function Hero() {
  // null = todos mudos; number = índice do vídeo com som ativo
  const [activeAudioIdx, setActiveAudioIdx] = useState<number | null>(null);

  const handleToggle = (index: number, forceUnmute?: boolean) => {
    setActiveAudioIdx((prev) => {
      if (forceUnmute) return index;
      return prev === index ? null : index;
    });
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

          <h1 className="text-[clamp(2.5rem,5vw,5.5rem)] font-bold leading-[0.95] tracking-[-0.02em]">
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
