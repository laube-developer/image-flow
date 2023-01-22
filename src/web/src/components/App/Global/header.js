import Cookies from "js-cookie"
import { useRouter } from "next/router"
import { useContext, useEffect, useRef, useState } from "react"

import LogoutButton from "./logoutButton"
import Link from "next/link"
import AuthUserContext from "../../../utils/context/userContext"

import styles from "./Header.module.css"

export default function Header(){
    const [authUser] = useContext(AuthUserContext)
    const whiteList = {/*"/": 1,*/ "/login":1}

    const rotas = useRouter()

    function HeaderComponent({child}){
        return <header className={styles.header}>
            <ul>
                <li><Link href="/">Início</Link></li>
                <li className={styles.current}><Link href="/">Sobre</Link></li>
                <li><Link href="/cadastrar">Cadastrar</Link></li>
                <li><Link href="/login">Entrar</Link></li>
            </ul>
        </header>
    }

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

