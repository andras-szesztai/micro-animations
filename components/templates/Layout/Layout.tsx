import { space } from '@styles/space'
import { FC } from 'react'

const NAV_WIDTH = 320

const Layout: FC = ({ children }) => (
  <>
    <div className="layout-container">
      <nav />
      <section>{children}</section>
    </div>
    <style jsx>{`
      .layout-container {
        display: grid;
        grid-template-columns: ${NAV_WIDTH}px 1fr;
        width: 100vw;
        height: 100vh;
        position: relative;
      }
      nav {
        height: 100%;
        background-color: #1d1c1c;
      }
      section {
        width: 100%;
        margin: 0 auto;
        padding: ${space[8]}px ${space[16]}px;
        overflow-y: auto;
      }
    `}</style>
  </>
)

export default Layout
