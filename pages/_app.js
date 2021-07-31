import '../styles/globals.css'
import '../styles/home.css'
import Head from 'next/head';
import { useState } from 'react';

function MyApp({ Component, pageProps }) {
  const [link, setLink] = useState("/")
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="viewport" content="viewport-fit=cover" />
      </Head>
      <Component {...pageProps} link={link} setLink={setLink} />
    </>
  )
}

export default MyApp
