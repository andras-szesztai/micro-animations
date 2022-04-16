import fontWeight from '@/styles/fontWeight'

interface Props {
  text: string
}

const Label = ({ text }: Props) => (
  <>
    <span>{text}</span>
    <style jsx>{`
      font-weight: ${fontWeight.medium};
    `}</style>
  </>
)

export default Label
