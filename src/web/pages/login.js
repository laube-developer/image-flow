import { useState, useContext } from "react"
import styles from "../styles/Login.module.css"
import Cookies from "js-cookie"
import { useRouter } from "next/router"
import Link from "next/link";
import Loading from "../src/components/Global/Loading/loading";
import { setCookUser } from "../src/utils/cookieController";

export default function Login(){
    const [username, setUsername] = useState("")
    const [senha, setSenha] = useState("")
    const [isLoading, setLoading] = useState(false)
    const [messages, setMessages] = useState([])

    const rotas = useRouter()

    const findUser = async () => {
        const credencial = {username, senha}

        const response = await fetch("/api/signin", {
            method: "POST",
            body: JSON.stringify(credencial)
        })

        return response.json()
    }

    const saveCookUser = async (user) => {
        setCookUser(user)
    }

    async function handleSubmit(e){
        e.preventDefault()
        setMessages([])

        await findUser()
            .then(user => {
                if (user) saveCookUser(user) && rotas.push("/user/me")
                if (!user) setMessages([
                    "Usuário ou senha incorretos."
                ])
            })
            .catch(err => {throw err})

    }

    if (isLoading) return <Loading />

    return (<div className={styles.container}>
        <button onClick={()=>{rotas.push("/")}}>Voltar para o Início</button>
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
            {messages.map((item, id)=>{
                return <p key={id} style={{color: "red"}}>{item}</p>
            })}
            <button
                onClick={handleSubmit}
                className={styles.button}
            >Enviar</button>
        </form>
    </div>)
}