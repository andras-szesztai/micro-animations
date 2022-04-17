import { useState } from 'react'
import { RadioButton } from '@components/molecules/RadioButton'
import { radioButtonColor } from '@styles/colors'

import { Flex } from '../../atoms/Flex'
import { Title } from '../../atoms/Title'

type TOption = { label: string; value?: string }

interface Props {
  labeledById: string
  title: string
  options: TOption[]
  initialActive?: number
  // eslint-disable-next-line no-unused-vars
  onChange: (val: string) => void
}

const RadioGroup = ({
  labeledById,
  title,
  options,
  initialActive,
  onChange,
}: Props) => {
  const [called, setCalled] = useState<number | undefined>(initialActive)
  const [active, setActive] = useState<number | undefined>(initialActive)
  return (
    <div role="radiogroup" aria-labelledby={`radioGroupLabel${labeledById}`}>
      <Flex justifyContent="center" flexDirection="column" gap={1}>
        <Title
          as="h4"
          id={`radioGroupLabel${labeledById}`}
          color={radioButtonColor.black}
        >
          {title}
        </Title>
        {options.map(({ label, value }, i) => (
          <RadioButton
            key={label}
            label={label}
            index={i}
            called={called}
            setCalled={setCalled}
            active={active}
            setActive={(index: number) => {
              setActive(index)
              onChange(value || label)
            }}
          />
        ))}
      </Flex>
    </div>
  )
}

RadioGroup.defaultProps = {
  initialActive: undefined,
}

export default RadioGroup
