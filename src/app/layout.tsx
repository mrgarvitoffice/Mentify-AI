import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Inter, Playfair_Display } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import Chatbot from '@/components/chat/chatbot';

const inter = Inter({ 
  subsets: ['latin'], 
  weight: ['400', '500', '700', '900'],
  variable: '--font-inter' 
});
const playfairDisplay = Playfair_Display({ 
  subsets: ['latin'], 
  weight: ['900'],
  variable: '--font-playfair-display' 
});

export const metadata: Metadata = {
  title: 'Mentify-AI - AI Companions Aligned to Your Soul',
  description: 'Unlike generic chatbots, our AI Buddies are personalized to your date, time, and place of birth, making them your truest AI companions.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfairDisplay.variable} font-body bg-background text-foreground antialiased`}>
        <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
          {children}
          <Chatbot />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
