import { Dispatch, SetStateAction, useState } from 'react'
import { usePrevious } from 'react-use'
import { Door } from '../svg/RadioButton/Door'
import { Face } from '../svg/RadioButton/Face'

interface Props {
  setSelected: Dispatch<SetStateAction<number>>
  selected: number
  index: number
}

export type Status = 'face' | 'door' | 'transition'

export const RadioButton = ({ selected, setSelected, index }: Props) => {
  const prevSelected = usePrevious(selected)
  const [status, setStatus] = useState<Status>('door')
  const isSelected = selected === index
  return (
    <div
      onClick={() => {
        setSelected(index)
      }}
    >
      <svg width={36} viewBox="0 0 123.7 123.7">
        <defs>
          <clipPath id="clip-path">
            <circle cx="61.8" cy="61.8" r="58" fill="none" />
          </clipPath>
        </defs>
        <g clipPath="url(#clip-path)">
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
        <g id="Container">
          <circle
            cx="61.8"
            cy="61.8"
            r="58"
            fill="none"
            stroke="#231f20"
            strokeMiterlimit="10"
            strokeWidth="5"
          />
        </g>
      </svg>
    </div>
  )
}
