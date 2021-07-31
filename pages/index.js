import Head from 'next/head';
import Link from 'next/link';
import cuid from 'cuid';
import data from '../data'

export default function Home() {
  console.log()
  return (
    <>
      <Head>
        <title>Kade</title>
        <meta name="description" content="kade photos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <div className="container">

          {
            Object.keys(data).map((name) => {
              return (
                <div key={cuid()}>
                  <Link href={`/${name}`}>
                    <a >
                      <div className="Main_Page">
                        <img src={`/${name}/1.jpg`} alt={name} />
                      </div>
                      <h3>{name}</h3>
                    </a>
                  </Link>
                </div>
              )
            })
          }
        </div>
    </>
  )
}
