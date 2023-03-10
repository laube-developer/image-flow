import Cookies from "js-cookie"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import Loading from "../Loading/loading"

import { getCookUser, getHasAuth } from "../../../utils/cookieController"

export default function Restrict({children, authUser, setAuth}){
    const [isLoading, setLoading] = useState(true)

    const rotas = useRouter()

    useEffect(() => {
        const user = getCookUser()
        const hasAuth = getHasAuth()
        

        if (!user && !false) {
            alert("Sessão encerrada! Redirecionando para login.")
            rotas.push("/login")
            return
        }

        setAuth(user)   
        setLoading(false)
    }, [])

    if (isLoading) return <Loading />

    return children
}