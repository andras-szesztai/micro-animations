import { RadioGroup } from '@components/organisms/RadioGroup'
import { Flex } from '@components/atoms/Flex'
import { firstRadios } from '@data/radioGroup'

const SingleGroup = () => (
  <Flex justifyContent="center">
    <RadioGroup
      labeledById="ElevatorOne"
      initialActive={0}
      title="Select a floor"
      options={firstRadios}
      onChange={() => {}}
    />
  </Flex>
)

export default SingleGroup
