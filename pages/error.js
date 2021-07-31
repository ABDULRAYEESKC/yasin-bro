import Link from "next/link"

export default function pageNotFound({setLink}) {
    return (
        <div className="pageNotFound">
            <Link href="/">
                <a>
                    <img src="/athif/5.jpg" alt="404" className="benguu" onClick={()=> setLink("/")} />
                    <h1>error !!!</h1>
                    {/* <button>Back To Home</button> */}
                </a>
            </Link>
        </div>
    )
}
