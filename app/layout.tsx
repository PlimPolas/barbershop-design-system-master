import type { Metadata } from 'next';
import { Barlow_Condensed, Manrope } from 'next/font/google';
import '../styles/tokens.css';
import '../styles/typography.css';
import '../styles/motion.css';
import '../components/media/media.css';
import '../components/landing/landing.css';
import './globals.css';

const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const barlowCondensed = Barlow_Condensed({
  variable: '--font-barlow-condensed',
  subsets: ['latin'],
  weight: ['600', '700'],
});

export const metadata: Metadata = {
  title: 'Ateliê 47 — Barbearia autoral em São Paulo',
  description: 'Cortes, barba e cuidado com técnica, presença e atenção aos detalhes.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${manrope.variable} ${barlowCondensed.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
