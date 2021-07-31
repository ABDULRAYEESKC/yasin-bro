import Head from 'next/head';
import data from '../data'
import { useRouter } from 'next/router';
import cuid from 'cuid';
import { useEffect, useState } from 'react';
export default function Main({ setLink }) {
    const router = useRouter();
    const { name } = router.query;
    useEffect(() => {
        setLink("/error");
    }, [])
    const [pic, setPic] = useState([])
    const [picPhone, setPicPhone] = useState([])
    let NumberOfPhotos = 0;
    NumberOfPhotos = data[`${name}`]?.NumberOfPhotos;
    useEffect(() => {
        let items = [];
        let itemsPhone = [];
        for (let i = 3; i <= NumberOfPhotos; i++) {
            items.push(<img key={cuid()} src={`/${name}/${i}.jpg`} alt={name} />)
        }
        for (let i = 1; i <= NumberOfPhotos; i++) {
            itemsPhone.push(<img key={cuid()} src={`/${name}/${i}.jpg`} alt={name} />)
        }
        setPic(items)
        setPicPhone(itemsPhone)
    }, [NumberOfPhotos])
    return (
        <div>

            <Head>
                <title>{name}</title>
                <meta name="description" content="yasin pic" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <button className="back_button" onClick={() => router.push("/404")}><img src="/back.png" alt="Back" /></button>
            <div className="images desktop">
                <div className="images_left">
                    <div className="name">
                        <h1>{data[name]?.fname}</h1>
                        <h2>{data[name]?.lname}</h2>
                        <p>Dept of  {data[name]?.dept}</p>
                    </div>
                    <img src={`/${name}/1.jpg`} className="yasin_img_2" />
                </div>
                <img src={`/${name}/2.jpg`} />

            </div>
            <div className="pics desktop">
                {pic}
            </div>



            <div className="mobile">
                <div className="name">
                    <h1>{data[name]?.fname} {data[name]?.lname}</h1>
                    <p>Dept of  {data[name]?.dept}</p>
                </div>
                <div className="photo">
                    {picPhone}
                </div>
            </div>
        </div>

    )
}
