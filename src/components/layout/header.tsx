
"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Menu, X, Sparkles } from 'lucide-react';
import { ThemeToggle } from '../ui/theme-toggle';
import { ShopDialog } from '../shop/shop-dialog';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 10;
      if (show !== isScrolled) {
        setIsScrolled(show);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [isScrolled]);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'How It Works', href: '/#how-it-works' },
    { name: 'Testimonials', href: '/testimonials' },
  ];

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 h-20 transition-all duration-300',
          isScrolled ? 'bg-background/80 shadow-sm backdrop-blur-lg' : 'bg-transparent'
        )}
      >
        <div className="container mx-auto flex h-full items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2 group">
            <Sparkles className="h-6 w-6 text-primary animate-pulse"/>
            <span className={cn('text-2xl font-bold font-headline text-foreground')}>
              Mentify-AI
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative text-base font-medium text-muted-foreground transition-colors duration-300 hover:text-primary group"
              >
                {item.name}
                <span className="absolute bottom-[-4px] left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </nav>
          
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <ShopDialog>
              <Button
                className="group relative rounded-lg bg-primary px-6 py-3 font-bold text-primary-foreground shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-primary/40"
              >
                Get Your AI Buddies
              </Button>
            </ShopDialog>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <Button size="icon" variant="ghost" onClick={() => setIsMenuOpen(true)} className='text-foreground'>
              <Menu />
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={cn(
        'fixed inset-0 z-[100] bg-background/95 backdrop-blur-xl transition-opacity duration-300 md:hidden',
        isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      )}>
        <div className="container mx-auto flex h-full flex-col p-4">
          <div className="flex justify-between items-center">
             <Link href="/" className="flex items-center gap-2 group">
                <Sparkles className="h-6 w-6 text-primary animate-pulse"/>
                <span className={cn('text-2xl font-bold font-headline text-foreground')}>
                Mentify-AI
                </span>
            </Link>
            <Button size="icon" variant="ghost" onClick={() => setIsMenuOpen(false)} className="text-foreground">
                <X />
            </Button>
          </div>
          <nav className="mt-16 flex flex-col items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-2xl font-medium text-muted-foreground transition-colors duration-300 hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <ShopDialog>
               <Button
                onClick={() => setIsMenuOpen(false)}
                className="mt-8 rounded-lg bg-primary px-8 py-4 text-lg font-bold text-primary-foreground shadow-lg"
              >
                Get Your AI Buddies
              </Button>
            </ShopDialog>
          </nav>
        </div>
      </div>
    </>
  );
}
