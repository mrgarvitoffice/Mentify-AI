
"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Menu, X, Sparkles, ChevronDown } from 'lucide-react';
import { ThemeToggle } from '../ui/theme-toggle';
import { ShopDialog } from '../shop/shop-dialog';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useIsMobile } from '@/hooks/use-mobile';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { buddies } from '@/lib/buddies-data';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useIsMobile();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    { name: 'How It Works', href: '/how-it-works' },
  ];
  
  const resourceItems = [
      { name: 'Blog', href: '/blog'},
      { name: 'Case Studies', href: '/case-studies'},
      { name: 'FAQ', href: '/faq'},
      { name: 'Help Center', href: '/help'},
      { name: 'What is an AI Helper?', href: '/what-is-ai-helper'},
  ]

  const MobileMenu = () => (
    <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
      <SheetTrigger asChild>
        <Button size="icon" variant="ghost" className='text-foreground'>
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-full max-w-sm glass-card p-6 flex flex-col">
        <SheetHeader className="text-left">
           <SheetTitle asChild>
            <Link href="/" className="flex items-center gap-2 group mb-4" onClick={() => setMobileMenuOpen(false)}>
                <Sparkles className="h-6 w-6 text-primary animate-pulse"/>
                <span className={cn('text-2xl font-bold font-headline text-foreground')}>
                Mentify-AI
                </span>
            </Link>
          </SheetTitle>
           <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
        </SheetHeader>
        <nav className="flex-grow">
            <div className="flex flex-col gap-4 text-lg font-medium mt-4">
                 {[...navItems, ...resourceItems].map((item) => (
                    <Link key={item.name} href={item.href} className="text-muted-foreground hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>
                        {item.name}
                    </Link>
                ))}
            </div>
        </nav>
        <div className="mt-auto">
            <ShopDialog>
                <Button
                    className="w-full group relative rounded-lg bg-primary px-6 py-3 font-bold text-primary-foreground shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-primary/40"
                >
                    Get Your AI Buddies
                </Button>
            </ShopDialog>
        </div>
      </SheetContent>
    </Sheet>
  );

  return (
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 h-20 transition-all duration-300 flex items-center',
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

            {isMobile ? (
                 <div className="flex items-center gap-2">
                    <ThemeToggle />
                    <MobileMenu />
                 </div>
            ) : (
                <>
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
                        <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="relative text-base font-medium text-muted-foreground transition-colors duration-300 hover:text-primary group">
                            Resources <ChevronDown className="w-4 h-4 ml-1" />
                            <span className="absolute bottom-[-4px] left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            {resourceItems.map((item) => (
                                <DropdownMenuItem key={item.name} asChild>
                                    <Link href={item.href}>{item.name}</Link>
                                </DropdownMenuItem>
                            ))}
                        </DropdownMenuContent>
                        </DropdownMenu>
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
                </>
            )}
        </div>
      </header>
  );
}
