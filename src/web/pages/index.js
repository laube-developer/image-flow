import Link from "next/link";

export default function Home(){
    return(<>
        <h1>Home Page</h1>
        <p><Link href="/login"><a>Realize o login</a></Link></p>
    </>)
}