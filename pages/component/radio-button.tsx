import { useState } from 'react'
import { useKey } from 'react-use'

import { RadioButton } from '@components/molecules/RadioButton'
import { RadioGroup } from '@components/atoms/RadioGroup'
import { Flex } from '@components/atoms/Flex'

import { space } from '@styles/space'

const LikeButtonPage = () => {
  const [index, setIndex] = useState<number>(undefined)
  useKey('ArrowUp', () => {
    setIndex((prev) => (prev === 0 ? 2 : prev - 1))
  })
  useKey('ArrowLeft', () => {
    setIndex((prev) => (prev === 0 ? 2 : prev - 1))
  })
  useKey('ArrowDown', () => {
    setIndex((prev) => (prev === 2 ? 0 : prev + 1))
  })
  useKey('ArrowRight', () => {
    setIndex((prev) => (prev === 2 ? 0 : prev + 1))
  })
  return (
    <>
      <div className="fullScreen">
        <Flex width="240px" alignItems="center">
          <RadioGroup labeledById="ElevatorOne">
            <RadioButton
              label="Third floor"
              selected={index}
              index={0}
              setSelected={setIndex}
            />
            <RadioButton
              selected={index}
              index={1}
              setSelected={setIndex}
              label="Second floor"
            />
            <RadioButton
              selected={index}
              index={2}
              setSelected={setIndex}
              label="First floor"
            />
          </RadioGroup>
        </Flex>
      </div>
      <style jsx>{`
        button {
          width: 100px;
          height: 20px;
          cursor: pointer;
          padding: ${space[4]}px;
          border-radius: ${space[2]}px;
        }
        .fullScreen {
          position: relative;
          width: 100vw;
          height: 100vh;
          display: grid;
          place-items: center;
        }
      `}</style>
    </>
  )
}

export default LikeButtonPage
