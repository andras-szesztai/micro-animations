import { space, TSpace } from '../../../styles/space'

interface Props {
  alignItems?: 'flex-start' | 'center'
  justifyContent?: 'flex-start' | 'center'
  gap?: TSpace
}

const Flex: React.FC<Props> = ({
  children,
  alignItems,
  justifyContent,
  gap,
}) => {
  return (
    <>
      <div>{children}</div>
      <style jsx>{`
        position: relative;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: ${alignItems};
        justify-content: ${justifyContent};
        gap: ${space[gap]}px;
      `}</style>
    </>
  )
}

Flex.defaultProps = {
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  gap: 0,
}

export default Flex
