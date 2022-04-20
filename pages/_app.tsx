import { AppProps } from 'next/app'

import { Layout } from '@components/templates/Layout'

import { mainColor } from '@styles/colors'
import { fontWeight } from '@styles/fontWeight'
import { space } from '@styles/space'
import { fontSize } from '@styles/fontSize'

const { neutral700, white, black } = mainColor

// TODO
// Style table for props in documentation
// Cypress & unit tests
// Finish Radio component documentation

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    <style jsx global>{`
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: hero-new, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        font-weight: 300;
        font-style: normal;
        color: ${black};
      }
      * {
        box-sizing: border-box;
      }
      h1 {
        font-size: ${fontSize[250]};
        font-weight: ${fontWeight.bold};
      }
      h2 {
        font-size: ${fontSize[200]};
        font-weight: ${fontWeight.bold};
      }
      h3 {
        font-size: ${fontSize[175]};
        font-weight: ${fontWeight.bold};
      }
      h4 {
        font-size:: ${fontSize[150]};
        font-weight: ${fontWeight.medium};
      }
      h5 {
        font-size: : ${fontSize[125]};
        font-weight: ${fontWeight.medium};
      }
      h6 {
        font-size: : ${fontSize[100]};
        font-weight: ${fontWeight.medium};
      }
      a {
        color: inherit;
        text-decoration: underline;
      }
      code {
        background: ${neutral700};
        padding: ${space[1]}px ${space[2]}px;
        border-radius: ${space[1]}px;
        color: ${white};
      }
    `}</style>
  </>
)

export default MyApp
