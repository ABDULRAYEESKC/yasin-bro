import Link from "next/link"

export default function pageNotFound() {
    return (
        <div className="pageNotFound">
            <Link href="/">
                <a>
                    <img src="/athif/5.jpg" alt="404" className="benguu" />
                    <h1>error !!!</h1>
                    {/* <button>Back To Home</button> */}
                </a>
            </Link>
        </div>
    )
}
