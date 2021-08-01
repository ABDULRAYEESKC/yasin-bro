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
        <meta name="google-site-verification" content="6MS1hQ67jC9zPO38hXm7njrs8pojzwASFcz3h9xX_Oc" />
      </Head>
      <Component {...pageProps} link={link} setLink={setLink} />
    </>
  )
}

export default MyApp
