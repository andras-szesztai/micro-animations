import { useState } from 'react'

import { RadioGroup } from '@components/organisms/RadioGroup'
import { Flex } from '@components/atoms/Flex'

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
