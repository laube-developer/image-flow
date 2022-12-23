import Cookies from "js-cookie"
import { useRouter } from "next/router"
import { useEffect, useState, useMemo } from "react"
import Loading from "../../src/components/loading"

export default function Restrict({handleSetUserData, children}){
    const [isLoading, setLoading] = useState(true)
    const [haveUserData, setHaveUserData] = useState(false)

    const rotas = useRouter()

    useEffect(async ()=>{
        setLoading(true)
        const authUser = await buscarUsuarioLogado()

        if(authUser){
            handleSetUserData(authUser)
            setHaveUserData(true)
        }else{
            salvarUsuarioNosCookies()
        }
        setLoading(false)

        async function buscarUsuarioLogado(){
            let authUserString = Cookies.get("authUser")
            let authUser

            if(Cookies.get("authUser") != undefined){
                authUser = JSON.parse(authUserString)

                return authUser
            } else {
                return false
            }
            
        }

        function salvarUsuarioNosCookies(){

            const user = {
                username: Cookies.get("username"),
                senha: Cookies.get("senha")
            }
    
            if(user.username === undefined || user.senha === undefined){
                alert("Realize o login.")
                setLoading(false)
                rotas.push("/login")
                return
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
                    Cookies.set("authUser", JSON.stringify(dados))
                })
                .catch((err)=>{
                    console.log(err)
                    alert("Usuário ou senha incorretos")
                    rotas.push("/login")
                })
            

            
        }

    }, [handleSetUserData, rotas])

    
    if(!isLoading && haveUserData ) return children
    
    return <Loading />

}