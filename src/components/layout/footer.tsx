
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { BuddyInfoDialog } from '../shop/buddy-info-dialog';
import { FaqDialog } from '../info-dialogs/faq-dialog';
import { PrivacyPolicyDialog } from '../info-dialogs/privacy-policy-dialog';
import { TermsOfServiceDialog } from '../info-dialogs/terms-of-service-dialog';
import { ContactUsDialog } from '../info-dialogs/contact-us-dialog';

const buddies = [
  { icon: "TrendingUp", title: "Business Motivator & Mentor", description: "Inspires, guides, and explains business strategies. Your 24/7 business coach." },
  { icon: "Heart", title: "Relationship & Social Buddy", description: "Navigate love, friendship, and emotional connections with confidence." },
  { icon: "Wallet", title: "Finance & Real Estate Buddy", description: "Your personal guide for investments, savings, and real estate." },
  { icon: "ShieldPlus", title: "Health & Wellness Buddy", description: "Holistic health advisor for diet, fitness, and wellbeing transformation." },
  { icon: "Share2", title: "Social Media & Branding Buddy", description: "Build your online identity and grow your digital presence." },
  { icon: "GraduationCap", title: "Problem Solver & Education Buddy", description: "Your learning companion for skill development and problem-solving." },
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
        <footer className="relative bg-card/50 text-white overflow-hidden">
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
                                <a key={i} href={link.href} className="text-muted-foreground hover:text-secondary transition-colors" target="_blank" rel="noopener noreferrer">
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
                                        <button className="text-muted-foreground hover:text-secondary transition-colors text-left w-full">
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
                                      <button className="text-muted-foreground hover:text-secondary transition-colors">
                                          {link.name}
                                      </button>
                                    </DialogComponent>
                                </li>
                                )
                            })}
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
