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
          'fixed top-0 left-0 right-0 z-50 h-20 transition-all duration-300',
          isScrolled
            ? 'bg-white/95 shadow-md'
            : 'bg-white/10 border-b border-white/10 [backdrop-filter:blur(20px)]'
        )}
      >
        <div className="container mx-auto flex h-full items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2">
            <span className={cn('animate-sparkle text-2xl font-bold', isScrolled ? 'text-black' : 'text-white')}>
              ✨
            </span>
            <span className={cn('text-2xl font-bold', isScrolled ? 'text-black' : 'text-white')}>
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
                  isScrolled ? 'text-gray-700' : 'text-white'
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          
          <div className="hidden md:block">
            <Button
              asChild
              className="rounded-full bg-gradient-to-r from-yellow-400 to-yellow-300 px-6 py-3 font-bold text-black shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-yellow-400/30"
              style={{ background: 'linear-gradient(45deg, #ffd700, #ffed4e)' }}
            >
              <Link href="#">Shop AI Buddies</Link>
            </Button>
          </div>

          <div className="md:hidden">
            <Button size="icon" variant="ghost" onClick={() => setIsMenuOpen(true)} className={cn(isScrolled ? 'text-black' : 'text-white')}>
              <Menu />
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={cn(
        'fixed inset-0 z-50 bg-gray-900/80 [backdrop-filter:blur(10px)] transition-opacity duration-300 md:hidden',
        isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      )}>
        <div className="container mx-auto flex h-full flex-col p-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center gap-2">
                <span className="animate-sparkle text-2xl font-bold text-white">✨</span>
                <span className="text-2xl font-bold text-white">Mentify-AI</span>
            </Link>
            <Button size="icon" variant="ghost" onClick={() => setIsMenuOpen(false)} className="text-white">
                <X />
            </Button>
          </div>
          <nav className="mt-10 flex flex-col items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-2xl font-medium text-white transition-colors duration-300 hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
             <Button
              asChild
              className="mt-8 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-300 px-8 py-4 text-lg font-bold text-black shadow-lg"
              style={{ background: 'linear-gradient(45deg, #ffd700, #ffed4e)' }}
            >
              <Link href="#">Shop AI Buddies</Link>
            </Button>
          </nav>
        </div>
      </div>
    </>
  );
}
