import Head from 'next/head';
export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>YASIN</title>
        <meta name="description" content="yasin pic" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="images mobile">
        <div className="images_left">
          <div className="name">
            <h1>YASIN</h1>
            <h1>MEHMOOD MK</h1>
            <p>Dept of Mechanical Engineering</p>
          </div>
          <img src="2.jpg" className="yasin_img_2" />
        </div>
        <img src="1.jpg" />

      </div>
      <div className="images mobile">
        <img src="3.jpg" />
        <img src="4.jpg" />
        <img src="5.jpg" />
        <img src="6.jpg" />
      </div>



      <div className="desktop">
        <div className="name">
          <h1>YASIN</h1>
          <h1>MEHMOOD MK</h1>
          <p>Dept of Mechanical Engineering</p>
        </div>
        <img src="2.jpg" />
        <img src="1.jpg" />
        <img src="3.jpg" />
        <img src="4.jpg" />
        <img src="5.jpg" />
        <img src="6.jpg" />
      </div>




    </div>

  )
}
