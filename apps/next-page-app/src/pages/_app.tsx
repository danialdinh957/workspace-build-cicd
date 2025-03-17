import type { AppProps } from 'next/app'

import { Fragment } from 'react'
import Head from 'next/head'

import '@danialdinh/test-ui-pkg/style.css'
import '@/styles/global.css'

function App({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Head>
        <title>UI</title>
      </Head>

      <main>
        <Component {...pageProps} />
      </main>
    </Fragment>
  )
}

export default App
