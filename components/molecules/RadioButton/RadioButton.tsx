import { KeyboardEvent, useEffect, useRef } from 'react'

import { Flex } from '@components/atoms/Flex'
import { Label } from '@components/atoms/Label'
import { RadioButtonSvg } from '@components/atoms/svg/RadioButtonSvg'

import { getTabIndex } from './utils'
import { Props } from './types'
import { gap, dim, fontSize } from './styles'

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
  useEffect(() => {
    if (isSelected) {
      divRef.current.focus()
    }
  }, [isSelected])
  const handleKeyDown = ({ code }: KeyboardEvent) => {
    if (document.activeElement === divRef.current) {
      if (code.match(/space/i)) {
        setSelected(index)
      }
      if (code.match(/arrowleft|arrowup/i)) {
        setSelected((prev) => (!prev ? 2 : (prev || 0) - 1))
      }
      if (code.match(/arrowright|arrowdown/i)) {
        setSelected((prev) => (prev === 2 ? 0 : (prev || 0) + 1))
      }
    }
  }
  return (
    <>
      <div
        ref={divRef}
        role="radio"
        aria-checked={isSelected}
        tabIndex={tabIndex}
        className="radio-container"
        onClick={() => {
          setSelected(index)
        }}
        onKeyDown={handleKeyDown}
      >
        <Flex alignItems="center" gap={gap[variant]} height={`${currDim}px`}>
          <RadioButtonSvg
            index={index}
            selected={selected}
            isSelected={isSelected}
            dim={currDim}
          />
          <Label text={label} size={fontSize[variant]} />
        </Flex>
      </div>
      <style jsx>{`
        .radio-container {
          width: 100%;
          cursor: pointer;
        }
      `}</style>
    </>
  )
}

RadioButton.defaultProps = {
  variant: 'md',
}

export default RadioButton
