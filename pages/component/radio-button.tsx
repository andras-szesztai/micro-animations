import { useState } from 'react'

import { RadioButton } from '@components/molecules/RadioButton'
import { RadioGroup } from '@components/atoms/RadioGroup'
import { Flex } from '@components/atoms/Flex'

import { space } from '@styles/space'

const firstRadios = [
  {
    label: 'Third floor',
  },
  {
    label: 'Second floor',
  },
  {
    label: 'First floor',
  },
]

const secondRadios = [
  {
    label: '3rd floor',
  },
  {
    label: '2nd floor',
  },
  {
    label: '1st floor',
  },
]

// TODO
// Figure out bug when changing quickly
// Finish setting up labeledById

const LikeButtonPage = () => {
  const [firstGroupIndex, setFirstGroupIndex] = useState<number>(undefined)
  const [secondGroupIndex, setSecondGroupIndex] = useState<number>(undefined)
  return (
    <>
      <div className="fullScreen">
        <Flex width="500px" alignItems="center" gap={2}>
          <RadioGroup labeledById="ElevatorOne">
            {firstRadios.map(({ label }, i) => (
              <RadioButton
                key={label}
                label={label}
                index={i}
                selected={firstGroupIndex}
                setSelected={setFirstGroupIndex}
              />
            ))}
          </RadioGroup>
          <RadioGroup labeledById="ElevatorTwo">
            {secondRadios.map(({ label }, i) => (
              <RadioButton
                key={label}
                label={label}
                index={i}
                selected={secondGroupIndex}
                setSelected={setSecondGroupIndex}
              />
            ))}
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
