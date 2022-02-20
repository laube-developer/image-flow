import Cookies from "js-cookie"
import { useRouter } from "next/router"
import { useEffect, useState, useMemo } from "react"
import Loading from "../../src/components/loading"

export default function Restrict({handleSetUserData, children}){
    const [isLoading, setLoading] = useState(true)
    const [userData, setData] = useState({})

    const rotas = useRouter()

    useEffect(()=>{
        const user = {
            username: Cookies.get("username"),
            senha: Cookies.get("senha")
        }

        fetch("/api/login", {
            method: "POST",
            body: JSON.stringify(user)
        })
            .then(res=>res.json())
            .then(dados=>{
                setData(dados)
                handleSetUserData(dados)
                setLoading(false)
            })
            .catch((err)=>{
                console.log(err)
                if(Cookies.get("username")== undefined){
                    alert("Realize o login.")
                    rotas.push("/login")
                    return
                }
                alert("Usuário ou senha incorretos")
                rotas.push("/login")
            })
        
    }, [handleSetUserData, rotas])

    if(isLoading) return <Loading></Loading>

    return children

}