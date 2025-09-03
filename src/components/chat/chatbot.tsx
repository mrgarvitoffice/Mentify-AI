
"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { MessageSquarePlus } from 'lucide-react';
import ChatDialog from './chat-dialog';

export default function Chatbot() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setOpen(true)}
          className="rounded-full w-16 h-16 shadow-lg bg-gradient-to-r from-primary to-secondary text-white transition-transform duration-300 hover:scale-110 hover:shadow-2xl"
        >
          <MessageSquarePlus className="w-8 h-8" />
        </Button>
      </div>
      <ChatDialog open={open} onOpenChange={setOpen} />
    </>
  );
}
