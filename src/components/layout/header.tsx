"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Features', href: '#features' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Testimonials', href: '#testimonials' },
  ];

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 h-20 transition-all duration-300 animate-aurora',
          isScrolled
            ? 'bg-background/80 shadow-lg shadow-primary/10 [backdrop-filter:blur(12px)]'
            : 'bg-transparent border-b border-white/10'
        )}
      >
        <div className="container mx-auto flex h-full items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2 group">
            <span className={cn('animate-sparkle text-2xl font-bold text-primary')}>
              ✨
            </span>
            <span className={cn('text-2xl font-bold text-foreground')}>
              Mentify-AI
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'text-base font-medium transition-all duration-300 hover:text-primary hover:-translate-y-0.5',
                   'text-foreground'
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          
          <div className="hidden md:block">
            <Button
              asChild
              className="rounded-full bg-gradient-to-r from-primary to-accent px-6 py-3 font-bold text-primary-foreground shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-primary/30"
            >
              <Link href="#">Shop AI Buddies</Link>
            </Button>
          </div>

          <div className="md:hidden">
            <Button size="icon" variant="ghost" onClick={() => setIsMenuOpen(true)} className='text-foreground'>
              <Menu />
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={cn(
        'fixed inset-0 z-50 bg-background/90 [backdrop-filter:blur(10px)] transition-opacity duration-300 md:hidden',
        isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      )}>
        <div className="container mx-auto flex h-full flex-col p-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center gap-2">
                <span className="animate-sparkle text-2xl font-bold text-primary">✨</span>
                <span className="text-2xl font-bold text-foreground">Mentify-AI</span>
            </Link>
            <Button size="icon" variant="ghost" onClick={() => setIsMenuOpen(false)} className="text-foreground">
                <X />
            </Button>
          </div>
          <nav className="mt-10 flex flex-col items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-2xl font-medium text-foreground transition-colors duration-300 hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
             <Button
              asChild
              className="mt-8 rounded-full bg-gradient-to-r from-primary to-accent px-8 py-4 text-lg font-bold text-primary-foreground shadow-lg"
            >
              <Link href="#">Shop AI Buddies</Link>
            </Button>
          </nav>
        </div>
      </div>
    </>
  );
}
