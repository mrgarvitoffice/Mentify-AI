
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

export function TermsOfServiceDialog({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Terms of Service</DialogTitle>
           <DialogDescription>
            Last updated: {new Date().toLocaleDateString()}
          </DialogDescription>
        </DialogHeader>
        <div className="py-4 space-y-4 max-h-[60vh] overflow-y-auto pr-4 text-sm text-muted-foreground">
            <h4 className="font-bold text-foreground">1. Terms</h4>
            <p>By accessing the website at Mentify-AI, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site.</p>
            <h4 className="font-bold text-foreground">2. Use License</h4>
            <p>Permission is granted to temporarily download one copy of the materials (information or software) on Mentify-AI's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.</p>
            <h4 className="font-bold text-foreground">3. Disclaimer</h4>
            <p>The materials on Mentify-AI's website are provided on an 'as is' basis. Mentify-AI makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
            <p>The guidance provided by the AI Buddies is for informational and entertainment purposes only. It is not a substitute for professional financial, legal, medical, or psychological advice. Always consult with a qualified professional before making any major life decisions.</p>
            <h4 className="font-bold text-foreground">4. Limitations</h4>
            <p>In no event shall Mentify-AI or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Mentify-AI's website.</p>
             <h4 className="font-bold text-foreground">5. Governing Law</h4>
            <p>These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction of our incorporation and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.</p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
