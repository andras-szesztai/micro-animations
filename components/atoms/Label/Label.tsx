import { fontSize, TFontSize } from '@styles/fontSize'
import { fontWeight } from '@styles/fontWeight'

interface Props {
  text: string
  size: TFontSize
  color?: string
}

const Label = ({ text, size, color }: Props) => (
  <>
    <span className="label">{text}</span>
    <style jsx>{`
      font-weight: ${fontWeight.medium};
      user-select: none;
      font-size: ${fontSize[size]};
      color: ${color};
    `}</style>
  </>
)

Label.defaultProps = {
  color: '#000',
}

export default Label
