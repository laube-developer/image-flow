import Cookies from "js-cookie"
import { useEffect, useContext } from "react"
import { useRouter } from "next/router"

const styles = {
    button: {
        border: "none",
        background: "#ccc",
        padding: "2",
        cursor: "pointer"
    }
}

const LogoutButton = ()=>{
    const rotas = useRouter()

    return <button style={styles.button}>
        Logout
    </button>
}

export default LogoutButton