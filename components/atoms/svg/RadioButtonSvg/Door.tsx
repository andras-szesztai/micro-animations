import { Dispatch, SetStateAction, useEffect, useRef } from 'react'
import { usePrevious } from 'react-use'
import gsap from 'gsap'

import { radioButtonColor } from '@styles/colors'

const { accent, neutral200, neutral100 } = radioButtonColor

interface Props {
  isCalled: boolean
  isActive: boolean
  index: number
  setActive: Dispatch<SetStateAction<number>>
  active: number
}

const Door = ({ isCalled, setActive, index, isActive, active }: Props) => {
  const prevActive = usePrevious(active)
  const type = prevActive < index ? 'down' : 'up'
  const buttonUpRef = useRef<SVGPolygonElement>(null)
  const buttonDownRef = useRef<SVGPolygonElement>(null)
  const leftDoorRef = useRef<SVGRectElement>(null)
  const rightDoorRef = useRef<SVGGElement>(null)

  // Call elevator
  useEffect(() => {
    const tl = gsap.timeline()
    if (isCalled) {
      const button = type === 'up' ? buttonUpRef.current : buttonDownRef.current
      tl.to(button, {
        fill: accent,
        duration: 0.2,
      }).to(
        button,
        {
          fill: neutral200,
          duration: 0.2,
          onComplete: () => {
            setActive(index)
          },
        },
        '+.5'
      )
    } else {
      tl.to([buttonUpRef.current, buttonDownRef.current], {
        fill: neutral200,
        duration: 0.2,
      })
    }
  }, [isCalled, type, setActive, index])

  useEffect(() => {
    if (isCalled && isActive) {
      gsap.to(rightDoorRef.current, {
        x: '100%',
        ease: 'Bounce.easeOut',
      })
      gsap.to(leftDoorRef.current, {
        x: '-100%',
        ease: 'Bounce.easeOut',
      })
    }
    if ((isActive && !isCalled) || (!isActive && !isCalled)) {
      gsap.to(rightDoorRef.current, {
        x: 0,
        ease: 'Bounce.easeOut',
      })
      gsap.to(leftDoorRef.current, {
        x: 0,
        ease: 'Bounce.easeOut',
      })
    }
  }, [isActive, isCalled, index])

  return (
    <>
      <rect
        ref={leftDoorRef}
        x="3"
        y="2.9"
        width="58.9"
        height="117.78"
        fill={neutral100}
        stroke={neutral200}
        strokeLinejoin="round"
      />
      <g ref={rightDoorRef}>
        <rect
          x="61.6"
          y="3.8"
          width="58.9"
          height="117.78"
          fill={neutral100}
          stroke={neutral200}
          strokeLinejoin="round"
        />
        <polygon
          ref={buttonUpRef}
          points="90 45.4 79.2 59.4 100.8 59.4 90 45.4"
          fill={neutral200}
          stroke={neutral200}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <polygon
          ref={buttonDownRef}
          points="90 79.3 100.8 65.3 79.2 65.3 90 79.3"
          fill={neutral200}
          stroke={neutral200}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </>
  )
}

export default Door
