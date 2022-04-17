import {
  KeyboardEvent,
  useEffect,
  useRef,
  Dispatch,
  SetStateAction,
} from 'react'

import { Flex } from '@components/atoms/Flex'
import { Label } from '@components/atoms/Label'
import { RadioButtonSvg } from '@components/atoms/svg/RadioButtonSvg'
import { space } from '@styles/space'
import { radioButtonColor } from '@styles/colors'

import { getTabIndex, makeId } from './utils'
import { gap, dim, fontSize } from './styles'

type Variant = 'sm' | 'md' | 'lg'

export interface Props {
  active: number
  setActive: Dispatch<SetStateAction<number>>
  called: number
  setCalled: Dispatch<SetStateAction<number>>
  index: number
  label: string
  variant?: Variant
}

const RadioButton = ({
  called,
  setCalled,
  active,
  setActive,
  index,
  variant,
  label,
}: Props) => {
  const currDim = dim[variant]
  const isActive = active === index
  const isCalled = called === index
  const tabIndex = getTabIndex(index, active)
  const divRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (isCalled) {
      divRef.current.focus()
    }
  }, [isCalled])
  const handleKeyDown = ({ code }: KeyboardEvent) => {
    if (document.activeElement === divRef.current) {
      if (code.match(/space/i)) {
        setCalled(index)
      }
      if (code.match(/arrowleft|arrowup/i)) {
        setCalled((prev) => (!prev ? 2 : (prev || 0) - 1))
      }
      if (code.match(/arrowright|arrowdown/i)) {
        setCalled((prev) => (prev === 2 ? 0 : (prev || 0) + 1))
      }
    }
  }
  return (
    <>
      <div
        ref={divRef}
        role="radio"
        aria-checked={isActive}
        tabIndex={tabIndex}
        className="radio-container"
        onClick={() => {
          setCalled(index)
        }}
        onKeyDown={handleKeyDown}
      >
        <Flex alignItems="center" gap={gap[variant]} height={`${currDim}px`}>
          <RadioButtonSvg
            index={index}
            active={active}
            isCalled={isCalled}
            isActive={isActive}
            setActive={setActive}
            dim={currDim}
            id={makeId(label)}
          />
          <Label
            text={label}
            size={fontSize[variant]}
            color={radioButtonColor.black}
          />
        </Flex>
      </div>
      <style jsx>{`
        .radio-container {
          width: 100%;
          cursor: pointer;
          outline: none;
          position: relative;
          padding: ${space[gap[variant]]}px;
          padding-left: 0px;
        }
        .radio-container:focus-visible::before {
          content: '';
          left: calc(-${currDim / 4}px - ${space[gap[variant]]}px);
          top: 50%;
          border: solid transparent;
          height: 0;
          width: 0;
          position: absolute;
          pointer-events: none;
          border-left-color: ${radioButtonColor.neutral200};
          border-width: ${currDim / 4}px;
          margin-top: -${currDim / 4}px;
        }
      `}</style>
    </>
  )
}

RadioButton.defaultProps = {
  variant: 'md',
}

export default RadioButton
