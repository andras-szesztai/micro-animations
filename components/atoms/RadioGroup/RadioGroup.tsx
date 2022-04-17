import { FC } from 'react'

import { Flex } from '../Flex'

interface Props {
  labeledById: string
}

const RadioGroup: FC<Props> = ({ children, labeledById }) => (
  <div role="radiogroup" aria-labelledby={`radioGroupLabel${labeledById}`}>
    <Flex justifyContent="center" flexDirection="column" gap={3}>
      {children}
    </Flex>
  </div>
)

export default RadioGroup
