import { radioButtonColor } from '@styles/colors'
import { useState } from 'react'
import { usePrevious } from 'react-use'

import Door from './Door'
import Face from './Face'

import { Status } from './type'

interface Props {
  selected: number
  index: number
  dim: number
  isSelected: boolean
  id: string
}

const RadioButtonSvg = ({ index, selected, dim, isSelected, id }: Props) => {
  const [status, setStatus] = useState<Status>('door')
  const prevSelected = usePrevious(selected)
  return (
    <svg width={dim} height={dim} viewBox="0 0 123.7 123.7">
      <defs>
        <clipPath id={`${id}-clip-path`}>
          <circle cx="61.8" cy="61.8" r="58" fill="none" />
        </clipPath>
      </defs>
      <g clipPath={`url(#${id}-clip-path)`}>
        {(status === 'face' || status === 'transition') && <Face />}
        {(status === 'door' || status === 'transition') && (
          <Door
            type={prevSelected < index ? 'down' : 'up'}
            isSelected={isSelected}
            setStatus={setStatus}
            status={status}
          />
        )}
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
