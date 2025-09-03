
"use client";

import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function ContactUsDialog({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const socialLinks = [
    { icon: Twitter, href: '#' },
    { icon: Instagram, href: '#' },
    { icon: Facebook, href: '#' },
    { icon: Linkedin, href: '#' },
  ];

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-lg glass-card animate-dialog-in">
        <DialogHeader className="items-center text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-2 animate-pulse">
                <Send className="w-8 h-8 text-primary" />
            </div>
            <DialogTitle className="text-2xl font-bold text-gradient bg-gradient-to-r from-primary to-secondary">Contact Us</DialogTitle>
            <DialogDescription className="text-muted-foreground">
                We'd love to hear from you. Here's how you can reach us.
            </DialogDescription>
        </DialogHeader>
        <div className="py-4 space-y-4">
            <div className="flex items-center gap-4 p-3 rounded-lg bg-muted/50">
                <Mail className="w-5 h-5 text-primary"/>
                <a href="mailto:support@mentify-ai.com" className="text-muted-foreground hover:text-primary">support@mentify-ai.com</a>
            </div>
             <div className="flex items-center gap-4 p-3 rounded-lg bg-muted/50">
                <Phone className="w-5 h-5 text-primary"/>
                <span className="text-muted-foreground">+1 (555) 123-4567</span>
            </div>
             <div className="flex items-center gap-4 p-3 rounded-lg bg-muted/50">
                <MapPin className="w-5 h-5 text-primary"/>
                <span className="text-muted-foreground">123 AI Avenue, Tech City, 12345</span>
            </div>
            <div className="border-t border-border pt-4 mt-4 flex justify-center gap-4">
                {socialLinks.map((link, i) => (
                    <a key={i} href={link.href} className="text-muted-foreground hover:text-secondary transition-colors" target="_blank" rel="noopener noreferrer">
                        <link.icon className="h-6 w-6" />
                    </a>
                ))}
            </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
