import './globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title:
    'Imam Alfarizi Syahputra - Full Stack Developer with a passion for staying updated with the latest technologies',
  description:
    'Full Stack Developer specializing in JavaScript/TypeScript technologies. My expertise lies in using modern frameworks like Next.js/React for front-end development and Node.js for back-end solutions.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
