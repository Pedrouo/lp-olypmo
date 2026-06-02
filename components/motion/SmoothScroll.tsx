"use client";

import { ReactNode, useEffect, useRef } from "react";
import Lenis from "lenis";

export function SmoothScroll({ children }: { children: ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
    });
    lenisRef.current = lenis;
    if (typeof window !== "undefined") {
      (window as any).lenis = lenis;
    }

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      if (typeof window !== "undefined") {
        delete (window as any).lenis;
      }
    };
  }, []);

  return <>{children}</>;
}
