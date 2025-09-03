import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

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
        <footer className="bg-[#1a1a1a] text-white">
            <div className="container mx-auto px-6 py-16">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
                    <div className="lg:col-span-2">
                        <h3 className="text-2xl font-bold flex items-center gap-2">
                          ✨ Mentify-AI
                        </h3>
                        <p className="mt-4 max-w-md text-gray-400">
                            Our mission is to provide hyper-personalized AI companions that empower individuals to achieve their fullest potential, guided by the wisdom of the stars.
                        </p>
                        <div className="mt-6 flex gap-4">
                            {socialLinks.map((link, i) => (
                                <Link key={i} href={link.href} className="text-gray-400 hover:text-white transition-colors">
                                    <link.icon className="h-6 w-6" />
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h4 className="font-semibold tracking-wider uppercase">AI Buddies</h4>
                        <ul className="mt-4 space-y-2">
                            {footerLinks['AI Buddies'].map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">{link.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold tracking-wider uppercase">Support</h4>
                        <ul className="mt-4 space-y-2">
                            {footerLinks['Support'].map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">{link.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="mt-16 border-t border-gray-800 pt-8 text-center text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Mentify-AI. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
