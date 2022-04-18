import { useState } from 'react'

import { RadioGroup } from '@components/organisms/RadioGroup'
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
    disabled: true,
  },
  {
    label: 'Ground floor',
  },
]

// Testing (unit & cypress)
// Husky, commitlint

const RadioButtonPage = () => {
  const [, setSelected] = useState<string | undefined>(undefined)
  return (
    <>
      <div className="fullScreen">
        <Flex width="400px" alignItems="center" gap={4}>
          <RadioGroup
            labeledById="ElevatorOne"
            title="Select a floor"
            options={firstRadios}
            onChange={(index) => {
              setSelected(index)
            }}
          />
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

export default RadioButtonPage
