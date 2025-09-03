
"use client";

import { useChat } from 'ai/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Bot, Send, User, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';

export default function ChatDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg h-[80vh] flex flex-col p-0 glass-card">
        <DialogHeader className="p-6 pb-4 bg-gradient-to-br from-primary/80 to-secondary/80 rounded-t-lg">
          <div className="flex items-center gap-3">
             <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
             </div>
             <div>
                <DialogTitle className="text-2xl font-bold text-white">AI Flix Assistant</DialogTitle>
                <DialogDescription className="text-white/80">
                    Ask me anything about the AI Buddies!
                </DialogDescription>
             </div>
          </div>
        </DialogHeader>
        <ScrollArea className="flex-1 px-6 py-4">
          <div className="space-y-6">
            {messages.length === 0 && (
              <div className="text-center text-muted-foreground p-8">
                <Bot className="mx-auto w-12 h-12 mb-4 text-primary/50"/>
                <p>Hello! How can I help you understand our AI Buddies today?</p>
              </div>
            )}
            {messages.map((m) => (
              <div
                key={m.id}
                className={cn(
                  'flex gap-3 animate-fade-in-up',
                  m.role === 'user' ? 'justify-end' : 'justify-start'
                )}
              >
                {m.role !== 'user' && (
                  <Avatar className="w-10 h-10 border-2 border-primary/50">
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      <Bot size={20}/>
                    </AvatarFallback>
                  </Avatar>
                )}
                <div
                  className={cn(
                    'rounded-2xl p-3 max-w-sm shadow-md',
                    m.role === 'user'
                      ? 'bg-primary text-primary-foreground rounded-br-none'
                      : 'bg-muted rounded-bl-none'
                  )}
                >
                  <p className="text-sm leading-relaxed">{m.content}</p>
                </div>
                 {m.role === 'user' && (
                  <Avatar className="w-10 h-10 border-2 border-muted">
                    <AvatarFallback className="bg-muted text-muted-foreground">
                      <User size={20} />
                    </AvatarFallback>
                  </Avatar>
                )}
              </div>
            ))}
          </div>
        </ScrollArea>
        <DialogFooter className="p-4 bg-background/80 border-t">
          <form
            onSubmit={handleSubmit}
            className="flex w-full items-center space-x-2"
          >
            <Input
              value={input}
              onChange={handleInputChange}
              placeholder="Type your message..."
              className="flex-1 rounded-full px-4"
            />
            <Button type="submit" size="icon" className="rounded-full bg-primary hover:bg-primary/90">
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
