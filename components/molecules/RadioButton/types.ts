import { Dispatch, SetStateAction } from 'react'

type Variant = 'sm' | 'md' | 'lg'

export interface Props {
  setSelected: Dispatch<SetStateAction<number>>
  selected: number
  index: number
  label: string
  variant?: Variant
}
