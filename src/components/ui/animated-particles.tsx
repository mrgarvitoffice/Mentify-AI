"use client";

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

type AnimatedParticlesProps = {
  count?: number;
  className?: string;
};

export default function AnimatedParticles({ count = 50, className }: AnimatedParticlesProps) {
  const [particles, setParticles] = useState<React.ReactNode[]>([]);

  useEffect(() => {
    const generateParticles = () => {
      const newParticles = Array.from({ length: count }).map((_, i) => {
        const size = Math.random() * 2 + 1; //
        const style: React.CSSProperties = {
          animationDelay: `${Math.random() * 20}s`,
          animationDuration: `${15 + Math.random() * 20}s`,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          width: `${size}px`,
          height: `${size}px`,
          transform: `scale(${Math.random() * 0.7 + 0.5})`,
          opacity: Math.random() * 0.4 + 0.1,
        };
        return (
          <div
            key={i}
            className={cn('absolute rounded-full bg-primary/80 animate-float', className)}
            style={style}
          />
        );
      });
      setParticles(newParticles);
    };

    generateParticles();
  }, [count, className]);

  return <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">{particles}</div>;
}
