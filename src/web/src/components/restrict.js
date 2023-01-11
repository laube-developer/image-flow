import Cookies from "js-cookie"
import { useRouter } from "next/router"
import { useEffect, useState, useMemo, useContext } from "react"
import Loading from "../../src/components/loading"
import AuthUserContext from './../utils/context/userContext';

export default function Restrict({children}){
    const [isLoading, setLoading] = useState(true)
    const [authUser, setAuth, username, setUsername, senha, setSenha] = useContext(AuthUserContext)

    const rotas = useRouter()

    useEffect(async ()=>{
        setLoading(true)

        if(!authUser){
            instanciarUsuario()
        }
        setLoading(false)

        async function instanciarUsuario(){

            const user = {
                username: username,
                senha: senha
            }
    
            if(user.username === undefined || user.senha === undefined){
                alert("Realize o login.")
                setLoading(false)
                rotas.push("/login")
                return
            } 

            const formData = new FormData()
            formData.append("json", JSON.stringify(user))

            await fetch("/api/login", {
                method: "POST",
                body: JSON.stringify(user)
            })
                .then(res=>res.json())
                .then(dados=>{
                    console.log(dados)
                    setAuth(dados)
                    setLoading(false)
                })
                .catch((err)=>{
                    console.log(err)
                    alert("Usuário ou senha incorretos")
                    rotas.push("/login")
                })
        }
    }, [rotas])

    
    if(!isLoading && authUser ) return children
    
    return <Loading />

}