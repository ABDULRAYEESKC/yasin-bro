import Head from 'next/head';
import Link from 'next/link';
import cuid from 'cuid';
import data from '../data';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Image from 'next/image';
export default function Home({ link }) {
  const router = useRouter();
  useEffect(() => {
    if (link === "/error") {
      router.push("/error");
    }
  }, [])
  return (
    <div className="main_bg">
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
                      <Image src={require(`./images/${name}/1.jpg`)} alt={name} />
                    </div>
                    <div className="Name_main">
                      <h3 >{name}</h3>
                    </div>
                  </a>
                </Link>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
