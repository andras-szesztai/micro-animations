import { useState } from 'react'
import { RadioButton } from '@components/molecules/RadioButton'
import {
  TRadioOption,
  TRadioVariant,
} from '@components/molecules/RadioButton/types'
import { Flex } from '@components/atoms/Flex'
import { Title } from '@components/atoms/Title'
import { radioButtonColor } from '@styles/colors'

import { gap, titleType } from './styles'

interface Props {
  labeledById: string
  title: string
  options: TRadioOption[]
  variant?: TRadioVariant
  initialActive?: number
  onChange: (val: string) => void
}

const RadioGroup = ({
  labeledById,
  title,
  options,
  initialActive,
  onChange,
  variant,
}: Props) => {
  const [called, setCalled] = useState<number | undefined>(initialActive)
  const [active, setActive] = useState<number | undefined>(initialActive)
  return (
    <div role="radiogroup" aria-labelledby={`radioGroupLabel${labeledById}`}>
      <Flex justifyContent="center" flexDirection="column" gap={gap[variant]}>
        <Title
          as={titleType[variant]}
          id={`radioGroupLabel${labeledById}`}
          color={radioButtonColor.black}
          weight="medium"
        >
          {title}
        </Title>
        {options.map((option, i) => (
          <RadioButton
            index={i}
            key={option.label}
            option={option}
            maxIndex={options.length - 1}
            called={called}
            setCalled={setCalled}
            active={active}
            setActive={(index: number) => {
              setActive(index)
              onChange(option.value || option.label)
            }}
            variant={variant}
          />
        ))}
      </Flex>
    </div>
  )
}

RadioGroup.defaultProps = {
  initialActive: undefined,
  variant: 'md',
}

export default RadioGroup
