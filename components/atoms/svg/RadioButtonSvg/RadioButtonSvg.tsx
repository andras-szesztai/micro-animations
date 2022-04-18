import { Dispatch, SetStateAction } from 'react'

import { radioButtonColor } from '@styles/colors'

import Door from './Door'
import Face from './Face'
import OutOfOrder from './OutOfOrder'

interface Props {
  active: number
  index: number
  dim: number
  isCalled: boolean
  isActive: boolean
  setActive: Dispatch<SetStateAction<number>>
  id: string
  disabled: boolean
}

const RadioButtonSvg = ({
  index,
  active,
  dim,
  isCalled,
  id,
  isActive,
  setActive,
  disabled,
}: Props) => {
  return (
    <svg width={dim} height={dim} viewBox="0 0 123.7 123.7">
      <defs>
        <clipPath id={`${id}-clip-path`}>
          <circle cx="61.8" cy="61.8" r="58" fill="none" />
        </clipPath>
      </defs>
      <g clipPath={`url(#${id}-clip-path)`}>
        {(isCalled || isActive) && <Face />}
        <Door
          active={active}
          isCalled={isCalled}
          isActive={isActive}
          setActive={setActive}
          index={index}
          disabled={disabled}
        />
        {disabled && <OutOfOrder />}
      </g>
      <circle
        cx="61.8"
        cy="61.8"
        r="58"
        fill="none"
        stroke={radioButtonColor.black}
        strokeMiterlimit="10"
        strokeWidth="5"
      />
    </svg>
  )
}

export default RadioButtonSvg
