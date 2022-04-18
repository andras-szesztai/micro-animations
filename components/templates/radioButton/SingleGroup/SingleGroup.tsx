import { RadioGroup } from '@components/organisms/RadioGroup'
import { Flex } from '@components/atoms/Flex'
import { firstRadios } from '@data/radioGroup'

const SingleGroup = () => (
  <Flex width="240px" alignItems="center" gap={4}>
    <RadioGroup
      labeledById="ElevatorOne"
      initialActive={0}
      title="Select a floor"
      options={firstRadios}
      onChange={(v) => {
        console.log(v)
      }}
    />
  </Flex>
)

export default SingleGroup
