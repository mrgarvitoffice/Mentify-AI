
'use client';

import { Suspense, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, CreditCard, Lock, User, Briefcase, MessageSquare, Building } from 'lucide-react';
import AnimatedParticles from '@/components/ui/animated-particles';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';

function CheckoutContent() {
    const searchParams = useSearchParams();
    const buddyName = searchParams.get('buddy') || 'Your AI Buddy';
    const price = searchParams.get('price') || '$300';
    const refId = searchParams.get('ref');

    const [selectedRole, setSelectedRole] = useState<'customer' | 'partner' | null>(null);
  
    return (
      <div className="relative min-h-screen bg-background text-foreground flex items-center justify-center p-4 overflow-hidden">
        <AnimatedParticles count={50} className="absolute inset-0 z-0" />
        <div className="relative z-10 w-full max-w-2xl">
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

            <div className="glass-card rounded-2xl p-8 shadow-2xl space-y-8">
                {/* Role Selection */}
                <div>
                    <h2 className="text-xl font-bold text-center mb-4">Choose Your Role</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Card 
                            className={cn("cursor-pointer transition-all duration-300", selectedRole === 'customer' ? 'ring-2 ring-primary shadow-primary/30' : 'hover:shadow-lg')}
                            onClick={() => setSelectedRole('customer')}
                        >
                            <CardContent className="p-6 flex flex-col items-center text-center">
                                <User className="w-12 h-12 text-primary mb-2"/>
                                <h3 className="text-lg font-bold">Become a Customer</h3>
                                <p className="text-sm text-muted-foreground">Purchase products for personal use.</p>
                            </CardContent>
                        </Card>
                        <Card 
                            className={cn("cursor-pointer transition-all duration-300", selectedRole === 'partner' ? 'ring-2 ring-primary shadow-primary/30' : 'hover:shadow-lg')}
                            onClick={() => setSelectedRole('partner')}
                        >
                            <CardContent className="p-6 flex flex-col items-center text-center">
                                <Briefcase className="w-12 h-12 text-secondary mb-2"/>
                                <h3 className="text-lg font-bold">Become a Partner</h3>
                                <p className="text-sm text-muted-foreground">Join the business and get dashboard access.</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                {/* Order Summary */}
                <div>
                    <h2 className="text-xl font-bold">Order Summary</h2>
                    <div className="mt-4 space-y-2">
                        <div className="flex justify-between items-center text-lg">
                            <span className="text-muted-foreground flex items-center gap-2"><Building className="w-5 h-5" />{buddyName}</span>
                            <span className="font-bold text-primary">{price}/year</span>
                        </div>
                        {refId && (
                            <div className="flex justify-between items-center text-sm text-muted-foreground">
                                <span className="text-green-500">Referred by: {refId}</span>
                            </div>
                        )}
                    </div>
                </div>

                {/* Payment Details */}
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
                     <div className="relative">
                        <MessageSquare className="absolute top-3 left-3 text-muted-foreground h-5 w-5"/>
                        <Textarea placeholder="Add a note (optional)" className="pl-10"/>
                    </div>
                </div>

                <Button disabled={!selectedRole} className="w-full rounded-full bg-gradient-to-r from-primary to-yellow-500 text-primary-foreground font-bold py-4 text-lg hover:-translate-y-1 transition-transform hover:shadow-primary/40 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0">
                    <Lock className="w-5 h-5 mr-2" />
                    {selectedRole ? `Complete as ${selectedRole.charAt(0).toUpperCase() + selectedRole.slice(1)}` : 'Select a Role to Continue'}
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
