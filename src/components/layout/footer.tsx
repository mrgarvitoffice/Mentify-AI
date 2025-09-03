import { Facebook, Twitter, Instagram, Linkedin, Sparkles } from 'lucide-react';
import { BuddyInfoDialog } from '../shop/buddy-info-dialog';
import { FaqDialog } from '../info-dialogs/faq-dialog';
import { PrivacyPolicyDialog } from '../info-dialogs/privacy-policy-dialog';
import { TermsOfServiceDialog } from '../info-dialogs/terms-of-service-dialog';
import { ContactUsDialog } from '../info-dialogs/contact-us-dialog';
import { ShopDialog } from '../shop/shop-dialog';
import { Button } from '../ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const buddies = [
  { icon: "Briefcase", title: "Business Motivator & Mentor", description: "Inspires, guides, and explains business strategies. Your 24/7 business coach." },
  { icon: "HeartHandshake", title: "Relationship & Social Buddy", description: "Navigate love, friendship, and emotional connections with confidence." },
  { icon: "LandPlot", title: "Finance & Real Estate Buddy", description: "Your personal guide for investments, savings, and real estate." },
  { icon: "ShieldPlus", title: "Health & Wellness Buddy", description: "Holistic health advisor for diet, fitness, and wellbeing transformation." },
  { icon: "MonitorSmartphone", title: "Social Media & Branding Buddy", description: "Build your online identity and grow your digital presence." },
  { icon: "BookOpen", title: "Problem Solver & Education Buddy", description: "Your learning companion for skill development and problem-solving." },
];

export default function Footer() {
    const socialLinks = [
        { icon: Twitter, href: '#' },
        { icon: Instagram, href: '#' },
        { icon: Facebook, href: '#' },
        { icon: Linkedin, href: '#' },
    ];

    const supportLinks = [
      { name: 'FAQ', component: FaqDialog },
      { name: 'Contact Us', component: ContactUsDialog },
      { name: 'Privacy Policy', component: PrivacyPolicyDialog },
      { name: 'Terms of Service', component: TermsOfServiceDialog },
  ];

    return (
        <footer className="bg-muted/30 text-foreground">
            <div className="container mx-auto px-6 py-16">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
                    <div className="lg:col-span-2">
                         <Link href="/" className="flex items-center gap-2 group w-fit">
                            <Sparkles className="h-6 w-6 text-primary animate-pulse"/>
                            <span className={cn('text-2xl font-bold font-headline')}>
                            Mentify-AI
                            </span>
                        </Link>
                        <p className="mt-4 max-w-md text-muted-foreground">
                           Your AI companions that never sleep. Build, grow, and transform your life with a team of AI Buddies personalized to your soul.
                        </p>
                        <div className="mt-6 flex gap-4">
                            {socialLinks.map((link, i) => (
                                <a key={i} href={link.href} className="text-muted-foreground hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
                                    <link.icon className="h-6 w-6" />
                                </a>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h4 className="font-semibold tracking-wider uppercase text-foreground">AI Buddies</h4>
                        <ul className="mt-4 space-y-2">
                           {buddies.map((buddy) => (
                                <li key={buddy.title}>
                                    <BuddyInfoDialog buddy={buddy}>
                                        <button className="text-muted-foreground hover:text-primary transition-colors text-left w-full">
                                            {buddy.title}
                                        </button>
                                    </BuddyInfoDialog>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold tracking-wider uppercase text-foreground">Support</h4>
                        <ul className="mt-4 space-y-2">
                            {supportLinks.map((link) => {
                                const DialogComponent = link.component;
                                return (
                                <li key={link.name}>
                                    <DialogComponent>
                                      <button className="text-muted-foreground hover:text-primary transition-colors">
                                          {link.name}
                                      </button>
                                    </DialogComponent>
                                </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
                <div className="mt-16 border-t border-border pt-8 text-center text-sm text-muted-foreground flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p>&copy; {new Date().getFullYear()} Mentify-AI. All rights reserved.</p>
                     <ShopDialog>
                        <Button>Get Your AI Buddies</Button>
                    </ShopDialog>
                </div>
            </div>
        </footer>
    );
}
