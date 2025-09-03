"use client";

import { useState, useEffect, useMemo } from 'react';
import { cn } from '@/lib/utils';

type AnimatedParticlesProps = {
  count?: number;
  className?: string;
};

export default function AnimatedParticles({ count = 20, className }: AnimatedParticlesProps) {
  const [particles, setParticles] = useState<React.ReactNode[]>([]);

  useEffect(() => {
    const generateParticles = () => {
      const newParticles = Array.from({ length: count }).map((_, i) => {
        const style: React.CSSProperties = {
          animationDelay: `${Math.random() * 15}s`,
          animationDuration: `${10 + Math.random() * 15}s`,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          transform: `scale(${Math.random() * 0.5 + 0.5})`,
          opacity: Math.random() * 0.5 + 0.2,
        };
        return (
          <div
            key={i}
            className={cn('absolute h-1.5 w-1.5 rounded-full bg-primary animate-float', className)}
            style={style}
          />
        );
      });
      setParticles(newParticles);
    };

    generateParticles();
  }, [count, className]);

  return <div className="absolute inset-0 overflow-hidden" aria-hidden="true">{particles}</div>;
}
