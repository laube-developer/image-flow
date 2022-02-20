import { useState } from "react"
import styles from "../styles/Login.module.css"
import Cookies from "js-cookie"
import { useRouter } from "next/router"

export default function Login(){
    const [username, setUsername] = useState("")
    const [senha, setSenha] = useState("")

    const rotas = useRouter()

    function handleSubmit(e){
        Cookies.remove("username")
        Cookies.remove("senha")
        e.preventDefault()

        const options = {
            expires: 10/(24*60)
        }

        Cookies.set("username", username, options)
        Cookies.set("senha", senha, options)

        rotas.push("/user/me")
    }

    return (<div className={styles.container}>
        <h1>Realize seu login</h1>
        <form className={styles.form}>
            <input
                name="username"
                placeholder="Nome de Usuário"
                className={styles.input}
                onInput={(e)=>setUsername(e.target.value)}
                />
            <input
                name="senha"
                type="password"
                placeholder="senha"
                className={styles.input}
                onInput={(e)=>setSenha(e.target.value)}
            />
            <button
                onClick={handleSubmit}
                className={styles.button}
            >Enviar</button>
        </form>
        <div>
            <p>{username}</p>
            <p>{senha}</p>
        </div>
    </div>)
}