import { space } from '@styles/space'
import { FC } from 'react'

const Layout: FC = ({ children }) => (
  <>
    <section>{children}</section>
    <style jsx>{`
      section {
        width: 100%;
        padding: ${space[8]}px ${space[12]}px;
      }
    `}</style>
  </>
)

export default Layout
