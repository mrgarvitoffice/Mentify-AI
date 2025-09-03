'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, CreditCard, Lock } from 'lucide-react';
import AnimatedParticles from '@/components/ui/animated-particles';

function CheckoutContent() {
    const searchParams = useSearchParams();
    const buddyName = searchParams.get('buddy') || 'Your AI Buddy';
    const price = searchParams.get('price') || '$300';
  
    return (
      <div className="relative min-h-screen bg-background text-foreground flex items-center justify-center p-4 overflow-hidden">
        <AnimatedParticles count={50} className="absolute inset-0 z-0" />
        <div className="relative z-10 w-full max-w-md">
            <div className="text-center mb-8">
                <Link href="/" className="inline-block text-primary hover:text-primary/80 transition-colors mb-4">
                    <div className="flex items-center gap-2">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Home
                    </div>
                </Link>
                <h1 className="text-4xl font-bold font-headline text-gradient bg-gradient-to-r from-primary to-secondary">Secure Checkout</h1>
                <p className="text-muted-foreground mt-2">You're one step away from transforming your life.</p>
            </div>

            <div className="glass-card rounded-2xl p-8 shadow-2xl">
                <div className="mb-6">
                    <h2 className="text-xl font-bold">Order Summary</h2>
                    <div className="mt-4 flex justify-between items-center text-lg">
                        <span className="text-muted-foreground">{buddyName}</span>
                        <span className="font-bold text-primary">{price}/year</span>
                    </div>
                </div>
                
                <div className="space-y-4">
                    <input type="email" placeholder="Email Address" className="w-full p-3 rounded-lg bg-input border border-border focus:ring-2 focus:ring-primary outline-none transition-all" />
                    <div className="p-3 rounded-lg bg-input border border-border flex items-center gap-3">
                        <CreditCard className="text-muted-foreground" />
                        <input type="text" placeholder="Card Number" className="flex-1 bg-transparent outline-none" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <input type="text" placeholder="MM / YY" className="w-full p-3 rounded-lg bg-input border border-border focus:ring-2 focus:ring-primary outline-none transition-all" />
                        <input type="text" placeholder="CVC" className="w-full p-3 rounded-lg bg-input border border-border focus:ring-2 focus:ring-primary outline-none transition-all" />
                    </div>
                </div>

                <Button className="w-full mt-8 rounded-full bg-gradient-to-r from-primary to-yellow-500 text-primary-foreground font-bold py-4 text-lg hover:-translate-y-1 transition-transform hover:shadow-primary/40">
                    <Lock className="w-5 h-5 mr-2" />
                    Complete Purchase
                </Button>

                <p className="text-xs text-muted-foreground text-center mt-4">
                    Payments are securely processed. 30-day money-back guarantee.
                </p>
            </div>
        </div>
      </div>
    );
  }

export default function CheckoutPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <CheckoutContent />
        </Suspense>
    );
}
