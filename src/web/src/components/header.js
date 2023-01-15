import Cookies from "js-cookie"
import { useRouter } from "next/router"
import { useContext, useEffect, useRef, useState } from "react"

import LogoutButton from "./logoutButton"
import Link from "next/link"
import AuthUserContext from "../utils/context/userContext"

import styles from "../../styles/Header.module.css"

export default function Header(){
    const [authUser, setAuth, username, setUsername, senha, setSenha] = useContext(AuthUserContext)
    const whiteList = {/*"/": 1,*/ "/login":1}

    const rotas = useRouter()

    const header = useRef(null)

    const [headerType, setType] = useState("header_7")

    useEffect(()=>{
        window.onscroll = (event)=>{
            let headerHeight = header.current.getBoundingClientRect().height
            let scrollY = window.scrollY
            
            if(scrollY > headerHeight){
                setType("header_5")
            } else {
                setType("header_7")
            }
        }
    }, [])

    function HeaderComponent({child}){
        return <header className={styles[headerType]} ref={header}>
            <ul>
                <li><a href="/">Início</a></li>
                <li className={styles.current}>Sobre</li>
                <li><a href="/cadastrar">Cadastrar</a></li>
                <li><a href="/login">Entrar</a></li>
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

