import { AriaAttributes, HTMLAttributes } from 'react'
import { space, TSpace } from '@/styles/space'

interface Props extends HTMLAttributes<AriaAttributes> {
  alignItems?: 'flex-start' | 'center'
  justifyContent?: 'flex-start' | 'center'
  flexDirection?: 'row' | 'column'
  width?: string
  height?: string
  gap?: TSpace
}

const Flex: React.FC<Props> = ({
  children,
  alignItems,
  justifyContent,
  gap,
  flexDirection,
  width,
  height,
}) => (
  <>
    <div>{children}</div>
    <style jsx>{`
      position: relative;
      width: ${width};
      height: ${height};
      display: flex;
      align-items: ${alignItems};
      justify-content: ${justifyContent};
      gap: ${space[gap]}px;
      flex-direction: ${flexDirection};
    `}</style>
  </>
)

Flex.defaultProps = {
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  flexDirection: 'row',
  gap: 0,
  width: '100%',
  height: '100%',
}

export default Flex
