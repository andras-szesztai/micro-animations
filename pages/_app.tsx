import { AppProps } from 'next/app'

import { Layout } from '@components/templates/Layout'

import '@styles/globals.css'

// TODO
// Cypress & unit tests
// Global styling using this
// Finish Radio component documentation

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    <style jsx global>{`
      a {
        text-decoration: underline;
      }
    `}</style>
  </>
)

export default MyApp
