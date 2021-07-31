import Head from 'next/head';
import data from '../data'
import { useRouter } from 'next/router';
import cuid from 'cuid';
export default function Image(p) {
    const router = useRouter()
    const { name } = router.query
    return (
        <div>
            <Head>
                <title>{name}</title>
                <meta name="description" content="yasin pic" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="images mobile">
                <div className="images_left">
                    <div className="name">
                        <h1>{data[name]?.fname}</h1>
                        <h2>{data[name]?.lname}</h2>
                        <p>Dept of  {data[name]?.dept}</p>
                    </div>
                    <img src={`${name}/1.jpg`} className="yasin_img_2" />
                </div>
                <img src={`${name}/2.jpg`} />

            </div>
            {/* {
               for (let index = 0; index < data.yasin.images.length; index++) {
                   const element = array[index];
                   
               }       
            } */}
            <div className="pics mobile">
                {
                    data.yasin.images.map((img_src, index) => {
                        console.log(index)
                        return (
                            <img key={cuid()} src={img_src} alt={img_src} />
                        )
                    }
                    )
                }


            </div>



            <div className="desktop">
                <div className="name">
                    <h1>YASIN</h1>
                    <h1>MEHMOOD MK</h1>
                    <p>Dept of Mechanical Engineering</p>
                </div>
                {
                    data.yasin.images.map((img_src, index) => {
                        console.log(index)
                        return (
                            <img key={cuid()} src={img_src} alt={img_src} />
                        )
                    }
                    )
                }
         
            </div>
        </div>

    )
}
