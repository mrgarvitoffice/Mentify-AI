
'use client';

import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Inter, Playfair_Display } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import Chatbot from '@/components/chat/chatbot';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import BottomNavBar from '@/components/layout/bottom-nav';
import { useIsMobile } from '@/hooks/use-mobile';
import { useEffect, useState } from 'react';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  variable: '--font-inter',
});
const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['900'],
  variable: '--font-playfair-display',
});

// export const metadata: Metadata = {
//   title: 'Mentify-AI - AI Companions Aligned to Your Soul',
//   description:
//     'Unlike generic chatbots, our AI Buddies are personalized to your date, time, and place of birth, making them your truest AI companions.',
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isMobile = useIsMobile();
   const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);


  return (
    <html lang="en" className="!scroll-smooth" suppressHydrationWarning>
       <head>
        <title>Mentify-AI - AI Companions Aligned to Your Soul</title>
        <meta
          name="description"
          content="Unlike generic chatbots, our AI Buddies are personalized to your date, time, and place of birth, making them your truest AI companions."
        />
      </head>
      <body
        className={`${inter.variable} ${playfairDisplay.variable} font-body bg-background text-foreground antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {mounted && (
            <div className="flex min-h-screen flex-col">
              <Header />
              <main className="flex-1">
                {children}
              </main>
              {isMobile ? <BottomNavBar /> : <Footer />}
            </div>
          )}
          <Chatbot />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
