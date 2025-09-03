import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Poppins, Nunito } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';

const poppins = Poppins({ 
  subsets: ['latin'], 
  weight: ['800'],
  variable: '--font-poppins' 
});
const nunito = Nunito({ 
  subsets: ['latin'], 
  weight: ['400', '700'],
  variable: '--font-nunito' 
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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${poppins.variable} ${nunito.variable} font-body bg-background text-foreground antialiased`}>
        <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
