import { useState } from 'react'

import { RadioButton } from '@/components/molecules/RadioButton'
import { RadioGroup } from '@/components/atoms/RadioGroup'
import { Flex } from '@/components/atoms/Flex'

import { space } from '@/styles/space'

const LikeButtonPage = () => {
  const [index, setIndex] = useState(0)
  return (
    <>
      <div className="fullScreen">
        <Flex width="240px">
          <RadioGroup labeledById="ElevatorOne">
            <RadioButton selected={index} index={0} setSelected={setIndex} />
            <RadioButton selected={index} index={1} setSelected={setIndex} />
            <RadioButton selected={index} index={2} setSelected={setIndex} />
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
