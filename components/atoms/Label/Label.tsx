import { fontSize } from '@styles/fontSize'
import { fontWeight } from '@styles/fontWeight'

interface Props {
  text: string
  size: keyof typeof fontSize
}

const Label = ({ text, size }: Props) => (
  <>
    <span>{text}</span>
    <style jsx>{`
      font-weight: ${fontWeight.medium};
      user-select: none;
      font-size: ${fontSize[`${size}`]};
    `}</style>
  </>
)

export default Label
