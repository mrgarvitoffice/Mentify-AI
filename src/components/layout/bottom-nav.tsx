
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Rocket, ShieldQuestion, Sparkles, DollarSign } from 'lucide-react';
import { cn } from '@/lib/utils';
import { PersonalityQuizDialog } from '../shop/personality-quiz-dialog';
import { useState, useEffect } from 'react';

const navItems = [
  { href: '/', icon: Home, label: 'Home' },
  { href: '/#buddies', icon: Sparkles, label: 'Buddies' },
  { href: '/pricing', icon: DollarSign, label: 'Pricing' },
  { href: '/how-it-works', icon: Rocket, label: 'How It Works' },
];

export default function BottomNavBar() {
  const pathname = usePathname();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const currentPath = pathname.split('?')[0];
    let foundIndex = navItems.findIndex(
      (item) => item.href === currentPath || (item.href === '/#buddies' && currentPath.startsWith('/buddies'))
    );
    if (foundIndex === -1 && currentPath.startsWith('/buddies')) {
        foundIndex = 1; // Special case for individual buddy pages
    }
    setActiveIndex(foundIndex);
  }, [pathname]);

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 h-24 border-t bg-background/80 backdrop-blur-lg md:hidden">
      <div className="relative mx-auto grid h-full max-w-lg grid-cols-5 items-center px-2">
        {activeIndex !== -1 && (
            <div
                className="absolute top-2 h-14 w-1/5 rounded-2xl bg-primary/10 transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(${activeIndex * 100}%)` }}
            />
        )}
        {navItems.map((item, index) => {
          const isActive = activeIndex === index;
          return (
            <Link 
                key={item.href} 
                href={item.href} 
                className="group flex flex-col items-center justify-center text-center p-2 rounded-lg transition-transform active:scale-95"
                onClick={() => setActiveIndex(index)}
            >
               <div className="relative p-2 rounded-full">
                <item.icon
                    className={cn(
                    'h-6 w-6 text-muted-foreground transition-all duration-300 group-hover:text-primary',
                    isActive && 'text-primary'
                    )}
                />
               </div>
              <span
                className={cn(
                  'text-[10px] font-medium text-muted-foreground transition-all group-hover:text-primary',
                  isActive && 'text-primary'
                )}
              >
                {item.label}
              </span>
            </Link>
          );
        })}
        <div className="flex flex-col items-center justify-center text-center">
           <PersonalityQuizDialog>
                <button className="group flex flex-col items-center justify-center text-center p-2 rounded-lg transition-transform active:scale-95">
                    <div className="relative p-2 rounded-full">
                        <ShieldQuestion className="h-6 w-6 text-muted-foreground transition-all duration-300 group-hover:text-primary" />
                    </div>
                    <span className="mt-1 text-[10px] font-medium text-muted-foreground transition-all group-hover:text-primary">
                        Quiz
                    </span>
                </button>
           </PersonalityQuizDialog>
        </div>
      </div>
    </nav>
  );
}
