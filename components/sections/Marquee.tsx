"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const text =
  "AÇO CARBONO • PINTURA ELETROSTÁTICA • LINHA STEEL • ZEUS • BSC • DURABILIDADE PROFISSIONAL • SOB MEDIDA • ";

export function Marquee() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <div
      ref={ref}
      className="py-[var(--space-6)] border-t border-b border-[var(--color-line)] overflow-hidden group"
    >
      <motion.div
        className="flex whitespace-nowrap"
        animate={isInView ? { x: [0, -1920] } : {}}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          },
        }}
        style={{ width: "fit-content" }}
      >
        {Array.from({ length: 4 }).map((_, i) => (
          <span
            key={i}
            className="mono text-[var(--font-label)] text-[var(--color-text-faint)] uppercase tracking-[0.12em] mr-[var(--space-8)] group-hover:[animation-play-state:paused]"
          >
            {text}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
