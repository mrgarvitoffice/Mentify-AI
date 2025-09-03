import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Inter, Sora } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const sora = Sora({ subsets: ['latin'], variable: '--font-sora' });

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
    <html lang="en" className="!scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.variable} ${sora.variable} font-body bg-background text-foreground antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
