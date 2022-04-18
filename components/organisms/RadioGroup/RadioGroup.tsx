import { useState } from 'react'
import { RadioButton } from '@components/molecules/RadioButton'
import {
  TRadioOption,
  TRadioVariant,
} from '@components/molecules/RadioButton/types'
import { radioButtonColor } from '@styles/colors'

import { Flex } from '../../atoms/Flex'
import { Title } from '../../atoms/Title'

interface Props {
  labeledById: string
  title: string
  options: TRadioOption[]
  variant?: TRadioVariant
  initialActive?: number
  onChange: (val: string) => void
}

const gap = {
  sm: 2,
  md: 3,
  lg: 4,
} as const

const titleType = {
  sm: 'h6',
  md: 'h4',
  lg: 'h3',
} as const

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
        >
          {title}
        </Title>
        {options.map((option, i) => (
          <RadioButton
            key={option.label}
            option={option}
            maxIndex={options.length - 1}
            index={i}
            called={called}
            setCalled={setCalled}
            active={active}
            variant={variant}
            setActive={(index: number) => {
              setActive(index)
              onChange(option.value || option.label)
            }}
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
