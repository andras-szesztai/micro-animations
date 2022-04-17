export const fontWeight = {
  thin: 100,
  light: 300,
  medium: 500,
  bold: 700,
} as const

export type TFontWeight = keyof typeof fontWeight
