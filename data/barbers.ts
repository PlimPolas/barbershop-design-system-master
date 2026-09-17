import type { Barber } from '@/types';

export const barbers: Barber[] = [
  {
    id: 'barber-caio',
    slug: 'caio-nunes',
    name: 'Caio Nunes',
    role: 'Barbeiro sênior',
    shortBio: 'Especialista em cortes clássicos e desenho de barba.',
    specialties: ['cortes clássicos', 'barba'],
    serviceIds: ['service-cut', 'service-beard'],
    locationIds: ['location-central'],
    primaryMediaId: 'media-foundation-placeholder',
    bookingEnabled: true,
    active: true,
    sortOrder: 1,
  },
  {
    id: 'barber-lia',
    slug: 'lia-monteiro',
    name: 'Lia Monteiro',
    role: 'Barbeira e visagista',
    shortBio: 'Cortes contemporâneos com atenção à forma e manutenção.',
    specialties: ['visagismo', 'cortes contemporâneos'],
    serviceIds: ['service-cut'],
    locationIds: ['location-central'],
    primaryMediaId: 'media-foundation-placeholder',
    bookingEnabled: true,
    active: true,
    sortOrder: 2,
  },
];
