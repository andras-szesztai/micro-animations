import { Dispatch, SetStateAction } from 'react'

import { Flex } from '@/components/atoms/Flex'
import { Label } from '@/components/atoms/Label'
import RadioButtonSvg from '@/components/atoms/svg/RadioButtonSvg/RadioButtonSvg'

interface Props {
  setSelected: Dispatch<SetStateAction<number>>
  selected: number
  index: number
}

const RadioButton = ({ selected, setSelected, index }: Props) => {
  return (
    <Flex
      onClick={() => {
        setSelected(index)
      }}
    >
      <RadioButtonSvg index={index} selected={selected} />
      <Label text="Radio button" />
    </Flex>
  )
}

export default RadioButton
