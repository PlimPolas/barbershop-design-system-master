export const breakpoints = {
  mobile: 0,
  tablet: 768,
  desktop: 1024,
  large: 1440,
} as const;

export const containers = {
  small: '760px',
  content: '1200px',
  wide: '1440px',
  full: '100%',
} as const;

export const spacing = {
  1: '4px',
  2: '8px',
  3: '12px',
  4: '16px',
  5: '24px',
  6: '32px',
  7: '48px',
  8: '64px',
  9: '80px',
  10: '96px',
  11: '128px',
  12: '160px',
} as const;

export const motion = {
  level1: { duration: '160ms', easing: 'cubic-bezier(0.2, 0.7, 0.2, 1)' },
  level2: { duration: '420ms', easing: 'cubic-bezier(0.2, 0.7, 0.2, 1)' },
  level3: { duration: '800ms', easing: 'cubic-bezier(0.2, 0.7, 0.2, 1)' },
} as const;
