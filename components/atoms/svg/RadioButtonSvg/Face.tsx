import classNames from 'classnames'
import { useEffect } from 'react'
import { random } from 'lodash'
import gsap from 'gsap'

const moveBrows = () => {
  const tl = gsap.timeline({ repeat: Infinity, repeatDelay: random(1.0, 4.0) })
  tl.to('.brow', {
    y: random(-7, 5),
    duration: random(0.2, 0.3),
    delay: random(0.1, 1.0),
  })
  tl.to('.brow', { y: 0, duration: random(0.2, 0.5), delay: random(0.0, 3.5) })
}

const lookAroundOne = () => {
  const tl = gsap.timeline({
    defaults: { ease: 'Power1.easeInOut' },
  })
  tl.to('.pupil', {
    x: 4,
    y: 0,
    delay: random(0.1, 0.5),
    duration: random(0.2, 0.6),
  })
  tl.to('.pupil', {
    x: 0,
    y: 0,
    delay: random(0.0, 2.0),
    duration: random(0.3, 0.5),
  })
  tl.to('.pupil', {
    x: -3,
    y: -3,
    delay: random(0.2, 3.0),
    duration: random(0.4, 0.7),
  })
  tl.to('.pupil', {
    x: 0,
    y: -4,
    delay: random(0.2, 2.0),
    duration: random(0.2, 0.4),
  })
  tl.to('.pupil', {
    x: 0,
    y: 0,
    delay: random(0.4, 2.5),
    duration: random(0.5, 0.8),
  })
  return tl
}

const lookAroundTwo = () => {
  const tl = gsap.timeline({
    defaults: { duration: random(0.2, 0.5), ease: 'Power1.easeInOut' },
  })
  tl.to('.pupil', {
    x: 0,
    y: 4,
    delay: random(0.2, 3.0),
    duration: random(0.4, 0.8),
  })
  tl.to('.pupil', {
    x: 0,
    y: 0,
    delay: random(0.3, 2.5),
    duration: random(0.3, 0.7),
  })
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

const Face = () => {
  useEffect(() => {
    const masterTl = gsap.timeline({
      repeatDelay: 3,
      repeat: Infinity,
    })
    moveBrows()
    masterTl
      .add(blink(2))
      .add(lookAroundOne())
      .add(blink())
      .add(lookAroundTwo())
      .add(blink())
      .add(blink(2))
  }, [])
  return (
    <>
      <circle
        id="headFill"
        cx="61.8"
        cy="61.8"
        r="47.7"
        fill="#27aae1"
        opacity="0.75"
      />
      <circle
        className="eyeOpen"
        cx="89.3"
        cy="61.9"
        r="18.1"
        fill="#fff"
        stroke="#231f20"
        strokeMiterlimit="10"
      />
      <circle
        className={classNames('eyeOpen', 'pupil')}
        cx="89.3"
        cy="61.9"
        r="12"
        fill="#231f20"
      />
      <circle
        className="eyeOpen"
        cx="34.8"
        cy="61.9"
        r="18.1"
        fill="#fff"
        stroke="#231f20"
        strokeMiterlimit="10"
      />
      <circle
        className={classNames('eyeOpen', 'pupil')}
        cx="34.8"
        cy="61.9"
        r="12"
        fill="#231f20"
      />
      <path
        className="eyeClosed"
        d="M71.2,61.9a18.1,18.1,0,0,1,36.2,0"
        fill="none"
        stroke="#231f20"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="2"
        opacity="0"
      />
      <path
        className="eyeClosed"
        d="M16.6,61.9a18.2,18.2,0,0,1,36.3,0"
        fill="none"
        stroke="#231f20"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="2"
        opacity="0"
      />
      <path
        className={classNames('brow', 'browUp')}
        d="M84,36.3s-5.1-5.8-11,0"
        fill="none"
        stroke="#231f20"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
      <path
        className={classNames('brow', 'browUp')}
        d="M51.1,35.5s-5-5.8-11,0"
        fill="none"
        stroke="#231f20"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
      <path
        id="mouth"
        d="M54.3,82.9s6.9,8,15.1,0"
        fill="none"
        stroke="#231f20"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
    </>
  )
}

export default Face
