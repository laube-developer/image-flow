import Link from "next/link"
import { useState } from "react"
import Restrict from "../../src/components/restrict"

export default function Me(){
    const [userData, setUserData] = useState({})

    return <Restrict handleSetUserData={setUserData}>
        <h1>Meu Usuário</h1>
        <p>Id: {userData._id}</p>

        <Link href="/user/post"><a>Adicionar posts</a></Link>
    </Restrict>
}