
'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Ghost, LogIn, Mail, UserPlus, Chrome } from 'lucide-react';
import Link from 'next/link';

export default function LoginPage({ onLogin, onTogglePage }: { onLogin: () => void, onTogglePage: () => void }) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <main className="flex-1 flex items-center justify-center cosmic-nebula p-4">
        <Card className="w-full max-w-md animate-dialog-in glass-card">
          <CardHeader className="text-center">
             <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <LogIn className="w-8 h-8 text-primary" />
            </div>
            <CardTitle className="text-3xl font-bold">Welcome Back</CardTitle>
            <CardDescription>Sign in to access your personalized AI buddies.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
              />
            </div>
            <Button className="w-full" type="submit" onClick={onLogin}>
              <Mail className="mr-2" /> Login with Email
            </Button>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
              </div>
            </div>
            <Button variant="outline" className="w-full" type="button" onClick={onLogin}>
              <Chrome className="mr-2" /> Continue with Google
            </Button>
            <Button variant="ghost" className="w-full" type="button" onClick={onLogin}>
              <Ghost className="mr-2" /> Continue as Guest
            </Button>
            <div className="mt-4 text-center text-sm">
              Don't have an account?{' '}
              <Link href="#" onClick={(e) => { e.preventDefault(); onTogglePage(); }} className="underline text-primary">
                Sign up
              </Link>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
