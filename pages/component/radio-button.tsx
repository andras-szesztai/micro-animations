import { useState } from 'react'

import { Flex } from '../../components/atoms/Flex'
import { space } from '../../styles/space'
import { RadioButton } from '../../components/atoms/svg/RadioButton/RadioButton'

const LikeButtonPage = () => {
  const [index, setIndex] = useState(0)
  return (
    <>
      <div className="fullScreen">
        <Flex
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          gap={2}
        >
          <RadioButton selected={index} index={0} setSelected={setIndex} />
          <RadioButton selected={index} index={1} setSelected={setIndex} />
          <RadioButton selected={index} index={2} setSelected={setIndex} />
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
        }
      `}</style>
    </>
  )
}

export default LikeButtonPage
