"use client";

import { useMemo } from 'react';

type AnimatedParticlesProps = {
  count?: number;
  className?: string;
};

export default function AnimatedParticles({ count = 20, className }: AnimatedParticlesProps) {
  const particles = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => {
      const style = {
        animationDelay: `${Math.random() * 15}s`,
        animationDuration: `${5 + Math.random() * 10}s`,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
      } as React.CSSProperties;
      return <div key={i} className={`absolute h-1 w-1 rounded-full bg-white/30 animate-float ${className}`} style={style} />;
    });
  }, [count, className]);

  return <div className="absolute inset-0 overflow-hidden" aria-hidden="true">{particles}</div>;
}
