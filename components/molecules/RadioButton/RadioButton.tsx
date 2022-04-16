import { Dispatch, SetStateAction } from 'react'

import { Flex } from '@/components/atoms/Flex'
import { Label } from '@/components/atoms/Label'
import RadioButtonSvg from '@/components/atoms/svg/RadioButtonSvg/RadioButtonSvg'
import { space } from '@/styles/space'

type Variant = 'sm' | 'md' | 'lg'
interface Props {
  setSelected: Dispatch<SetStateAction<number>>
  selected: number
  index: number
  variant?: Variant
}

const gap = {
  sm: 1,
  md: 2,
  lg: 3,
} as const

const dim = {
  sm: 24,
  md: 36,
  lg: 48,
}

const fontSizes = {
  sm: 75,
  md: 100,
  lg: 150,
} as const

const RadioButton = ({ selected, setSelected, index, variant }: Props) => {
  const currDim = dim[variant]
  return (
    <Flex
      onClick={() => {
        setSelected(index)
      }}
      alignItems="center"
      gap={gap[variant]}
      height={`${currDim}px`}
    >
      <RadioButtonSvg index={index} selected={selected} dim={currDim} />
      <Label text="Radio button" size={fontSizes[variant]} />
    </Flex>
  )
}

RadioButton.defaultProps = {
  variant: 'md',
}

export default RadioButton
