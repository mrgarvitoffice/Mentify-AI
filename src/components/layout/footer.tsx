import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import AnimatedParticles from '../ui/animated-particles';

export default function Footer() {
    const socialLinks = [
        { icon: Twitter, href: '#' },
        { icon: Instagram, href: '#' },
        { icon: Facebook, href: '#' },
        { icon: Linkedin, href: '#' },
    ];

    const footerLinks = {
        'AI Buddies': [
            { name: 'Business Mentor', href: '#' },
            { name: 'Relationship Buddy', href: '#' },
            { name: 'Finance Buddy', href: '#' },
            { name: 'Health Buddy', href: '#' },
            { name: 'Social Media Buddy', href: '#' },
            { name: 'Education Buddy', href: '#' },
        ],
        'Support': [
            { name: 'FAQ', href: '#' },
            { name: 'Contact Us', href: '#' },
            { name: 'Privacy Policy', href: '#' },
            { name: 'Terms of Service', href: '#' },
        ],
    };

    return (
        <footer className="relative bg-card/50 text-white overflow-hidden">
            <AnimatedParticles count={50} className="absolute inset-0 opacity-20" />
            <div className="relative container mx-auto px-6 py-16">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
                    <div className="lg:col-span-2">
                        <h3 className="text-2xl font-bold flex items-center gap-2">
                          <span className="text-primary animate-pulse">✨</span> Mentify-AI
                        </h3>
                        <p className="mt-4 max-w-md text-muted-foreground">
                            Our mission is to provide hyper-personalized AI companions that empower individuals to achieve their fullest potential, guided by the wisdom of the stars.
                        </p>
                        <div className="mt-6 flex gap-4">
                            {socialLinks.map((link, i) => (
                                <Link key={i} href={link.href} className="text-muted-foreground hover:text-secondary transition-colors">
                                    <link.icon className="h-6 w-6" />
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h4 className="font-semibold tracking-wider uppercase text-foreground">AI Buddies</h4>
                        <ul className="mt-4 space-y-2">
                            {footerLinks['AI Buddies'].map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-muted-foreground hover:text-secondary transition-colors">{link.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold tracking-wider uppercase text-foreground">Support</h4>
                        <ul className="mt-4 space-y-2">
                            {footerLinks['Support'].map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-muted-foreground hover:text-secondary transition-colors">{link.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="mt-16 border-t border-border pt-8 text-center text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} Mentify-AI. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
