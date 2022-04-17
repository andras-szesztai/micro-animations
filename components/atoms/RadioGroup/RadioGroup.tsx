import { radioButtonColor } from '@styles/colors'
import { FC } from 'react'

import { Flex } from '../Flex'
import { Title } from '../Title'

interface Props {
  labeledById: string
}

const RadioGroup: FC<Props> = ({ children, labeledById }) => (
  <div role="radiogroup" aria-labelledby={`radioGroupLabel${labeledById}`}>
    <Flex justifyContent="center" flexDirection="column" gap={1}>
      <Title
        as="h4"
        id={`radioGroupLabel${labeledById}`}
        color={radioButtonColor.black}
      >
        Select a floor
      </Title>
      {children}
    </Flex>
  </div>
)

export default RadioGroup
