import gsap from 'gsap'
import { Dispatch, SetStateAction, useEffect, useRef } from 'react'
import { usePrevious } from 'react-use'

import { Status } from '../../RadioButton/RadioButton'

interface Props {
  isSelected: boolean
  type: 'up' | 'down'
  setStatus: Dispatch<SetStateAction<Status>>
  status: Status
}

export const Door = ({ type, isSelected, setStatus, status }: Props) => {
  const prevType = usePrevious(type)
  const prevIsSelected = usePrevious(isSelected)
  const buttonUpRef = useRef<SVGPolygonElement>(null)
  const buttonDownRef = useRef<SVGPolygonElement>(null)
  const leftDoorRef = useRef<SVGRectElement>(null)
  const rightDoorRef = useRef<SVGGElement>(null)
  const buttonTypes = {
    up: buttonUpRef.current,
    down: buttonDownRef.current,
  }
  useEffect(() => {
    if (!prevIsSelected && isSelected) {
      gsap.to(buttonTypes[type], {
        fill: '#FFF200',
        duration: 0.2,
        onComplete: () => {
          setStatus('transition')
        },
      })
    }
    if (prevIsSelected && !isSelected) {
      gsap.to([buttonUpRef.current, buttonDownRef.current], {
        fill: '#58595B',
        duration: 0.2,
      })
    }
  }, [prevIsSelected, isSelected, type])

  useEffect(() => {
    if (isSelected && status === 'transition') {
      gsap.to([buttonUpRef.current, buttonDownRef.current], {
        fill: '#58595B',
        duration: 0.2,
        delay: 1,
      })
      gsap.to(rightDoorRef.current, {
        x: '100%',
        delay: 1.25,
        ease: 'Bounce.easeOut',
      })
      gsap.to(leftDoorRef.current, {
        x: '-100%',
        delay: 1.25,
        ease: 'Bounce.easeOut',
      })
    }
    if (prevIsSelected && !isSelected) {
      gsap.to(rightDoorRef.current, { x: 0, ease: 'Bounce.easeOut' })
      gsap.to(leftDoorRef.current, {
        x: 0,
        ease: 'Bounce.easeOut',
        onComplete: () => {
          setStatus('door')
        },
      })
    }
  }, [isSelected, status, prevIsSelected])

  return (
    <>
      <rect
        ref={leftDoorRef}
        x="3"
        y="2.9"
        width="58.9"
        height="117.78"
        fill="#939598"
        stroke="#58595b"
        strokeLinejoin="round"
      />
      <g ref={rightDoorRef}>
        <rect
          x="61.6"
          y="3.8"
          width="58.9"
          height="117.78"
          fill="#939598"
          stroke="#58595b"
          strokeLinejoin="round"
        />
        <polygon
          ref={buttonUpRef}
          points="90 45.4 79.2 59.4 100.8 59.4 90 45.4"
          fill="#58595b"
          stroke="#58595b"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <polygon
          ref={buttonDownRef}
          points="90 79.3 100.8 65.3 79.2 65.3 90 79.3"
          fill="#58595b"
          stroke="#58595b"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </>
  )
}
