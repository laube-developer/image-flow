import Cookies from "js-cookie"
import { useRouter } from "next/router"
import { useContext } from "react"

import LogoutButton from "./logoutButton"
import Link from "next/link"
import AuthUserContext from "../utils/context/userContext"

import styles from "../../styles/Header.module.css"

export default function Header(){
    const [authUser, setAuth, username, setUsername, senha, setSenha] = useContext(AuthUserContext)
    const whiteList = {/*"/": 1,*/ "/login":1}

    const rotas = useRouter()

    
    if(whiteList[rotas.pathname]) return <></>

    if(authUser){
        return <HeaderComponent>
            <LogoutButton />
        </HeaderComponent>
    } else {
        return <HeaderComponent>
            <Link href="/login"><u>Login</u></Link>
        </HeaderComponent>
    }

}

function HeaderComponent({child}){
    return <header className={styles.header}>
        <ul>
            <li>Início</li>
            <li className={styles.current}>Sobre</li>
            <li>Cadastrar</li>
            <li>Entrar</li>
        </ul>
    </header>
}