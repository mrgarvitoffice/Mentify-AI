
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
import { ShieldCheck } from 'lucide-react';

export function PrivacyPolicyDialog({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-2xl glass-card animate-dialog-in">
        <DialogHeader className="items-center text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-2 animate-pulse">
                <ShieldCheck className="w-8 h-8 text-primary" />
            </div>
            <DialogTitle className="text-2xl font-bold text-gradient bg-gradient-to-r from-primary to-secondary">Privacy Policy</DialogTitle>
          <DialogDescription>
            Last updated: {new Date().toLocaleDateString()}
          </DialogDescription>
        </DialogHeader>
        <div className="py-4 space-y-4 max-h-[60vh] overflow-y-auto pr-4 text-sm text-muted-foreground">
            <p>Your privacy is important to us. It is Mentify-AI's policy to respect your privacy regarding any information we may collect from you across our website, and other sites we own and operate.</p>
            <h4 className="font-bold text-foreground">1. Information We Collect</h4>
            <p>We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used. This includes your name, email, and birth data (date, time, location) for personalization.</p>
            <h4 className="font-bold text-foreground">2. How We Use Your Information</h4>
            <p>We use the information we collect to operate, maintain, and provide to you the features and functionality of the Service. Your birth data is used exclusively to generate your personalized AI Buddy profile. Your conversation data with your AI buddy is encrypted and used to improve the service, but is not accessible by human staff unless required for security and support purposes.</p>
            <h4 className="font-bold text-foreground">3. Security</h4>
            <p>We take the security of your data seriously. We use industry-standard encryption and security protocols to protect your personal information from unauthorized access, use, or disclosure. However, no method of transmission over the Internet or method of electronic storage is 100% secure.</p>
             <h4 className="font-bold text-foreground">4. Sharing of Information</h4>
            <p>We do not share any personally identifying information publicly or with third-parties, except when required to by law.</p>
            <h4 className="font-bold text-foreground">5. Your Rights</h4>
            <p>You are free to refuse our request for your personal information, with the understanding that we may be unable to provide you with some of your desired services. You have the right to access, update, or delete your personal information at any time by contacting our support team.</p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
