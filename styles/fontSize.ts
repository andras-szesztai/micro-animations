export const fontSize = {
  50: '0.5rem',
  75: '0.75rem',
  100: '1rem',
  125: '1.25rem',
  150: '1.5rem',
  200: '2rem',
  250: '2.5rem',
  300: '3rem',
  350: '3.5rem',
  400: '4rem',
  450: '4.5rem',
  500: '5rem',
} as const

export type TFontSize = keyof typeof fontSize
