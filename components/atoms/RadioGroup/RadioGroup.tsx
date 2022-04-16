import { FC } from 'react'

import { Flex } from '../Flex'

interface Props {
  labeledById: string
}

export const RadioGroup: FC<Props> = ({ children, labeledById }) => (
  <Flex
    alignItems="center"
    justifyContent="center"
    flexDirection="column"
    gap={2}
    role="radiogroup"
    aria-labelledby={`radioGroupLabel${labeledById}`}
  >
    {children}
  </Flex>
)
