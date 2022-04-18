import { FC } from 'react'

import { space } from '@styles/space'
import { mainColor } from '@styles/colors'

const ExampleContainer: FC = ({ children }) => (
  <>
    <div>{children}</div>
    <style jsx>{`
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: ${space[8]}px;
      border-radius: ${space[2]}px;
      border: 1px solid ${mainColor.neutral200};
    `}</style>
  </>
)

export default ExampleContainer
