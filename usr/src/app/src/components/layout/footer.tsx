
import { Sparkles } from 'lucide-react';
import { FaqDialog } from '../info-dialogs/faq-dialog';
import { PrivacyPolicyDialog } from '../info-dialogs/privacy-policy-dialog';
import { TermsOfServiceDialog } from '../info-dialogs/terms-of-service-dialog';
import { ContactUsDialog } from '../info-dialogs/contact-us-dialog';
import { Button } from '../ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { buddies } from '@/lib/buddies-data';
import Image from 'next/image';

const supportLinks = [
    { name: 'FAQ', component: FaqDialog },
    { name: 'Contact Us', component: ContactUsDialog },
];

const legalLinks = [
    { name: 'Privacy Policy', component: PrivacyPolicyDialog },
    { name: 'Terms of Service', component: TermsOfServiceDialog },
]

export default function Footer() {
    return (
        <footer className="bg-muted/30 text-foreground">
            <div className="container mx-auto px-6 py-16">
                <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
                    <div className="col-span-2 md:col-span-2">
                         <Link href="/" className="flex items-center gap-2 group w-fit">
                             <span className={cn('text-2xl font-bold text-primary')}>
                                ✨
                             </span>
                            <span className={cn('text-2xl font-bold font-headline')}>
                                Mentify-AI
                            </span>
                        </Link>
                        <p className="mt-4 max-w-md text-muted-foreground text-sm">
                           &copy; {new Date().getFullYear()} Mentify-AI. All rights reserved.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-semibold tracking-wider uppercase text-foreground">AI Buddies</h4>
                        <ul className="mt-4 space-y-3">
                           {buddies.map((buddy) => (
                                <li key={buddy.title}>
                                    <Link href={`/buddies/${buddy.slug}`} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                                        {buddy.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold tracking-wider uppercase text-foreground">Support</h4>
                        <ul className="mt-4 space-y-3">
                             <li>
                                <Link href="/pricing" className="text-muted-foreground hover:text-primary transition-colors text-sm">Pricing</Link>
                            </li>
                            {supportLinks.map((link) => {
                                const DialogComponent = link.component;
                                return (
                                <li key={link.name}>
                                    <DialogComponent>
                                      <button className="text-muted-foreground hover:text-primary transition-colors text-sm">
                                          {link.name}
                                      </button>
                                    </DialogComponent>
                                </li>
                                )
                            })}
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold tracking-wider uppercase text-foreground">Company</h4>
                        <ul className="mt-4 space-y-3">
                            {legalLinks.map((link) => {
                                const DialogComponent = link.component;
                                return (
                                <li key={link.name}>
                                    <DialogComponent>
                                      <button className="text-muted-foreground hover:text-primary transition-colors text-sm">
                                          {link.name}
                                      </button>
                                    </DialogComponent>
                                </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}
