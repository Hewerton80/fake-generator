import '../styles/globals.css'
import type { AppProps } from 'next/app'
import MainTemplate from '../components/templates/MainTemplate'
import { HikariProviders } from 'hikari-ui'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <HikariProviders>
      <MainTemplate>
        <Component {...pageProps} />
      </MainTemplate>
    </HikariProviders>
  )
}

export default MyApp
