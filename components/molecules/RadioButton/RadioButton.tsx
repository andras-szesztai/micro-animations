import { Dispatch, SetStateAction } from 'react'
import { isUndefined } from 'lodash'

import { Flex } from '@components/atoms/Flex'
import { Label } from '@components/atoms/Label'
import { RadioButtonSvg } from '@components/atoms/svg/RadioButtonSvg'

type Variant = 'sm' | 'md' | 'lg'

interface Props {
  setSelected: Dispatch<SetStateAction<number>>
  selected: number
  index: number
  label: string
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
  md: 125,
  lg: 150,
} as const

const getTabIndex = (index: number, selected?: number) => {
  if (isUndefined(selected)) {
    return index === 0 ? 0 : -1
  }
  return selected === index ? 0 : -1
}

const RadioButton = ({
  selected,
  setSelected,
  index,
  variant,
  label,
}: Props) => {
  const currDim = dim[variant]
  const isSelected = selected === index
  const tabIndex = getTabIndex(index, selected)
  return (
    <div
      role="radio"
      tabIndex={tabIndex}
      onClick={() => {
        setSelected(index)
      }}
      onKeyPress={(key) => {
        if (key.code.toLowerCase() === 'space') {
          setSelected(index)
        }
      }}
      aria-checked={isSelected}
    >
      <Flex alignItems="center" gap={gap[variant]} height={`${currDim}px`}>
        <RadioButtonSvg
          index={index}
          selected={selected}
          isSelected={isSelected}
          dim={currDim}
        />
        <Label text={label} size={fontSizes[variant]} />
      </Flex>
    </div>
  )
}

RadioButton.defaultProps = {
  variant: 'md',
}

export default RadioButton
