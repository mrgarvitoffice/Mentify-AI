
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Rocket, ShieldQuestion, Sparkles, DollarSign } from 'lucide-react';
import { cn } from '@/lib/utils';
import { PersonalityQuizDialog } from '../shop/personality-quiz-dialog';

const navItems = [
  { href: '/', icon: Home, label: 'Home' },
  { href: '/#buddies', icon: Sparkles, label: 'Buddies' },
  { href: '/pricing', icon: DollarSign, label: 'Pricing' },
  { href: '/how-it-works', icon: Rocket, label: 'How It Works' },
];

export default function BottomNavBar() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t bg-background/80 backdrop-blur-lg md:hidden">
      <div className="mx-auto grid h-20 max-w-lg grid-cols-5 items-center px-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link key={item.href} href={item.href} className="group flex flex-col items-center justify-center text-center p-2 rounded-lg">
               <div className="relative">
                <item.icon
                    className={cn(
                    'h-6 w-6 text-muted-foreground transition-all duration-300 group-hover:text-primary',
                    isActive && 'text-primary'
                    )}
                />
                 <span className={cn("absolute -bottom-1 left-1/2 -translate-x-1/2 h-1 w-1 rounded-full bg-primary transition-all duration-300 scale-0", isActive && "scale-100")}></span>
               </div>
              <span
                className={cn(
                  'mt-1 text-[10px] font-medium text-muted-foreground transition-all group-hover:text-primary',
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
                <button className="group flex flex-col items-center justify-center text-center p-2 rounded-lg">
                    <div className="relative">
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
