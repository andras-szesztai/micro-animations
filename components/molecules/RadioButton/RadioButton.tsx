import { Dispatch, SetStateAction } from 'react'

import RadioButtonSvg from '../../atoms/svg/RadioButtonSvg/RadioButtonSvg'
import { Label } from '../../atoms/Label'

interface Props {
  setSelected: Dispatch<SetStateAction<number>>
  selected: number
  index: number
}

export const RadioButton = ({ selected, setSelected, index }: Props) => {
  return (
    <div
      onClick={() => {
        setSelected(index)
      }}
    >
      <RadioButtonSvg index={index} selected={selected} />
      <Label text="Radio button" />
    </div>
  )
}
