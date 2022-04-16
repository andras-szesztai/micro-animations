import { Dispatch, SetStateAction, useRef } from 'react'
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
  const divRef = useRef<HTMLDivElement>(null)
  return (
    <>
      <div
        ref={divRef}
        role="radio"
        className="radio-container"
        tabIndex={tabIndex}
        onClick={() => {
          setSelected(index)
        }}
        onKeyDown={({ code }) => {
          if (document.activeElement === divRef.current) {
            if (code.match(/space/i)) {
              setSelected(index)
            }
            if (code.match(/arrowleft|arrowup/i)) {
              setSelected((prev) => (prev === 0 ? 2 : prev - 1))
            }
            if (code.match(/arrowright|arrowdown/i)) {
              setSelected((prev) => (prev === 2 ? 0 : prev + 1))
            }
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
      <style jsx>{`
        .radio-container {
          width: 100%;
        }
      `}</style>
    </>
  )
}

RadioButton.defaultProps = {
  variant: 'md',
}

export default RadioButton
