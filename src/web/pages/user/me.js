import Link from "next/link"
import { useState, useEffect } from "react"
import Restrict from "../../src/components/Global/Restrict"

export default function Me(){
    const [authUser, setAuth] = useState({})

    return <Restrict authUser={authUser} setAuth={setAuth}>
        <h1>Meu Usuário</h1>
        <p>Id: {authUser ? authUser._id : ""}</p>

        <Link href="/user/post"><a>Adicionar posts {authUser.name}</a></Link>
    </Restrict>
}