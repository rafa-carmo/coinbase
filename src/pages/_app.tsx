// import App from "next/app";

import { ThirdwebWeb3Provider } from '@3rdweb/hooks'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

const supportedChainIds = [4]
const connectors = {
  injected: {}
}

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Home Page</title>

        <link rel="shortcut icon" href="favicon.ico" />

        <link rel="apple-touch-icon" href="favicon.ico" />

        <link rel="manifest" href="/manifest.json" />

        <meta name="description" content="A simple Page" />
      </Head>

      <GlobalStyles />

      <ThemeProvider theme={theme}>
        <ThirdwebWeb3Provider
          supportedChainIds={supportedChainIds}
          connectors={connectors}
        >
          <Component {...pageProps} />
        </ThirdwebWeb3Provider>
      </ThemeProvider>
    </>
  )
}

export default App
