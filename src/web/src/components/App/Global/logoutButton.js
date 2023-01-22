import Cookies from "js-cookie"
import { useEffect, useContext } from "react"
import { useRouter } from "next/router"

import AuthUserContext from "../../../utils/context/userContext"

const styles = {
    button: {
        border: "none",
        background: "#ccc",
        padding: "2",
        cursor: "pointer"
    }
}

const LogoutButton = ()=>{
    const [authUser, setAuth, username, setUsername, senha, setSenha] = useContext(AuthUserContext)

    const rotas = useRouter()

    const logout = ()=>{
        setAuth({})
        setUsername("")
        setSenha("")

        rotas.push("/")
    }

    return <button style={styles.button} onClick={logout}>
        Logout
    </button>
}

export default LogoutButton