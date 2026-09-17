import type { MediaAsset } from '@/types';

export const media: MediaAsset[] = [
  {
    id: 'media-foundation-placeholder',
    src: '/media-placeholder.svg',
    alt: 'Composição abstrata usada para validar enquadramento e sobreposição',
    mimeType: 'image/svg+xml',
    width: 1600,
    height: 1000,
    aspectRatio: 1.6,
    focalPointMobile: { x: 68, y: 50 },
    focalPointTablet: { x: 62, y: 50 },
    focalPointDesktop: { x: 58, y: 50 },
    treatment: 'natural-warm',
    rights: 'Placeholder abstrato interno da fundação',
    active: true,
  },
];
