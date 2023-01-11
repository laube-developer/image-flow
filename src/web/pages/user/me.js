import Link from "next/link"
import { useContext, useEffect } from "react"
import Restrict from "../../src/components/restrict"
import AuthUserContext from "../../src/utils/context/userContext"

export default function Me(){
    const [authUser, setAuth, username, setUsername, senha, setSenha] = useContext(AuthUserContext)

    useEffect(()=>{
        console.log(authUser)
    }, [])

    return <Restrict>
        <h1>Meu Usuário</h1>
        <p>Id: {authUser ? authUser._id : ""}</p>

        <Link href="/user/post"><a>Adicionar posts</a></Link>
    </Restrict>
}