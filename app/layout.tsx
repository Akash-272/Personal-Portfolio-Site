import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import FloatingNav from '@/components/layout/floating-nav';
import { cn } from '@/lib/utils';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Akash Nalawade - Portfolio',
  description: 'Personal portfolio website of Akash Nalawade',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn(
        "min-h-screen relative w-full bg-background text-foreground antialiased",
        inter.className
      )}>
        {children}
        <FloatingNav />
      </body>
    </html>
  );
}