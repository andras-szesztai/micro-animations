import { RadioGroup } from '@components/organisms/RadioGroup'
import { Flex } from '@components/atoms/Flex'
import { secondRadios } from '@data/radioGroup'

const DisabledSizeVariants = () => (
  <Flex justifyContent="center" gap={12}>
    <RadioGroup
      variant="sm"
      labeledById="ElevatorTwo"
      title="Select a small floor:"
      options={secondRadios}
      onChange={() => {}}
    />
    <RadioGroup
      labeledById="ElevatorThree"
      title="Select a medium floor:"
      options={secondRadios}
      onChange={() => {}}
    />
    <RadioGroup
      variant="lg"
      labeledById="ElevatorFour"
      title="Select a large floor:"
      options={secondRadios}
      onChange={() => {}}
    />
  </Flex>
)

export default DisabledSizeVariants
