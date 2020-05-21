import '../styles/styles.css'
import useSWR, { SWRConfig } from 'swr'
import Head from 'next/head'


export default function MyApp({ Component, pageProps }) {
  return <SWRConfig
    value={{
      fetcher: (...args) => fetch(...args).then(res => res.json())
    }}
  >
    <Head>
      <title>Glitch Alumni Talent Tracker</title>
      <link id="favicon" rel="icon" href="https://cdn.glitch.com/2bdfb3f8-05ef-4035-a06e-2043962a3a13%2Ffavicon.ico" type="image/x-icon" />
    </Head>
    <Component {...pageProps} />
  </SWRConfig>
}
