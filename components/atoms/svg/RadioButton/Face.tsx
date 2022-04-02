import classNames from 'classnames'
import { useEffect } from 'react'
import { random } from 'lodash'
import gsap from 'gsap'

const moveBrows = () => {
  const tl = gsap.timeline({ repeat: Infinity, repeatDelay: random(1.0, 4.0) })
  tl.to('.brow', {
    y: random(-5, 5),
    duration: random(0.2, 0.3),
    delay: random(0.0, 3.0),
  })
  tl.to('.brow', { y: 0, duration: random(0.2, 0.3), delay: random(0.0, 3.5) })
}

const lookAroundOne = () => {
  const tl = gsap.timeline({
    defaults: { ease: 'Power1.easeInOut' },
  })
  tl.to('.pupil', {
    x: 5,
    y: 0,
    delay: random(0.1, 0.5),
    duration: random(0.2, 0.6),
  })
  tl.to('.pupil', {
    x: 0,
    y: 0,
    delay: random(0.0, 1.0),
    duration: random(0.3, 0.5),
  })
  tl.to('.pupil', {
    x: -3,
    y: -3,
    delay: random(0.2, 1.2),
    duration: random(0.4, 0.7),
  })
  tl.to('.pupil', {
    x: 0,
    y: -5,
    delay: random(0.2, 0.9),
    duration: random(0.2, 0.4),
  })
  tl.to('.pupil', {
    x: 0,
    y: 0,
    delay: random(0.4, 1.6),
    duration: random(0.5, 0.8),
  })
  return tl
}

const lookAroundTwo = () => {
  const tl = gsap.timeline({
    defaults: { duration: random(0.2, 0.5), ease: 'Power1.easeInOut' },
  })
  tl.to('.pupil', { x: 0, y: 5, delay: 0.5 })
  tl.to('.pupil', { x: 0, y: 0, delay: 1 })
  return tl
}

const blink = (delay = 0) => {
  const tl = gsap.timeline({ repeat: 1, delay })
  tl.to('.eyeOpen', { duration: 0, opacity: 0, delay: 0.1 })
  tl.to('.eyeClosed', { duration: 0, opacity: 1 })
  tl.to('.eyeOpen', { duration: 0, opacity: 1, delay: 0.2 })
  tl.to('.eyeClosed', { duration: 0, opacity: 0 })
  return tl
}

const makeAnimation = (tl: gsap.core.Timeline) => {
  tl.add(blink(1))
    .add(lookAroundOne())
    .add(blink())
    .add(lookAroundTwo())
    .add(blink())
    .add(blink(2))
}

export const Face = () => {
  useEffect(() => {
    const masterTl = gsap.timeline({
      repeatDelay: 3,
      onComplete: () => {
        masterTl.clear()
        makeAnimation(masterTl)
        masterTl.restart()
      },
    })
    moveBrows()
    makeAnimation(masterTl)
  }, [])
  return (
    <>
      <circle
        id="headFill"
        cx="61.8"
        cy="61.8"
        r="55"
        fill="#27aae1"
        opacity="0.5"
      />
      <circle
        className="eyeOpen"
        cx="93.5"
        cy="61.9"
        r="20.9"
        fill="#fff"
        stroke="#231f20"
        strokeMiterlimit="10"
      />
      <circle
        className={classNames('eyeOpen', 'pupil')}
        cx="93.5"
        cy="61.9"
        r="14.8"
        fill="#231f20"
      />
      <circle
        className="eyeOpen"
        cx="30.6"
        cy="61.9"
        r="20.9"
        fill="#fff"
        stroke="#231f20"
        strokeMiterlimit="10"
      />
      <circle
        className={classNames('eyeOpen', 'pupil')}
        cx="30.6"
        cy="61.9"
        r="14.8"
        fill="#231f20"
      />
      <path
        className="eyeClosed"
        d="M72.6,61.9a20.9,20.9,0,0,1,41.8,0"
        fill="none"
        stroke="#231f20"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="2"
        opacity="0"
      />
      <path
        className="eyeClosed"
        d="M9.8,61.9a20.9,20.9,0,1,1,41.7,0"
        fill="none"
        stroke="#231f20"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="2"
        opacity="0"
      />
      <path
        className={classNames('brow', 'browUp')}
        d="M87.3,32.5s-5.8-6.7-12.6,0"
        fill="none"
        stroke="#231f20"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
      <path
        className={classNames('brow', 'browUp')}
        d="M49.5,31.5s-5.8-6.7-12.7,0"
        fill="none"
        stroke="#231f20"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
      <path
        id="mouth"
        d="M53.1,86.2s8,9.2,17.5,0"
        fill="none"
        stroke="#231f20"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
    </>
  )
}
