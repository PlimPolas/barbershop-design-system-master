import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Style Guide — Barbershop Design System',
  description: 'Referência interna de tokens, primitives e contratos do Design System.',
};

export default function StyleGuideLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}

