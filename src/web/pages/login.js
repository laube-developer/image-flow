import { useState, useContext } from "react"
import styles from "../styles/Login.module.css"
import Cookies from "js-cookie"
import { useRouter } from "next/router"
import AuthUserContext from './../src/utils/context/userContext';
import Link from "next/link";

export default function Login(){
    const [authUser, setAuth, username, setUsername, senha, setSenha] = useContext(AuthUserContext)

    const rotas = useRouter()

    function handleSubmit(e){
        e.preventDefault()
        rotas.push("/user/me")
    }

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
            <button
                onClick={handleSubmit}
                className={styles.button}
            >Enviar</button>
        </form>
    </div>)
}