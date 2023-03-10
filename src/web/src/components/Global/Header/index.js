import Cookies from "js-cookie"
import { useRouter } from "next/router"
import { useContext, useEffect, useRef, useState } from "react"

import LogoutButton from "../LogoutButton"
import Link from "next/link"

import styles from "./styles.module.css"

export default function Header(){
    const [isTop, setTop] = useState(false)

    const rotas = useRouter()

    useEffect(() => {
        window.onscroll = ()=>{
            const scrollY = window.scrollY
            setTop(scrollY == 0)
            console.log(scrollY)
        }
    }, [isTop])

    function HeaderComponent({children, notTop}){
        return <header
            className={`${styles.header} ${notTop ? styles["notTop"] : ""}`}
            onScroll={() => {scroll()}}
            >
            <ul>
                <li><Link href="/" passHref>Início</Link></li>
                <li className={styles.current} ><Link href="/" passHref>Sobre</Link></li>
                <li><Link href="/cadastrar" passHref>Cadastrar</Link></li>
                <li><Link href="/login" passHref>Entrar</Link></li>
            </ul>
        </header>
    }
    if (isTop) return <>
        <HeaderComponent>
            <Link href="/login" passHref><u>Login</u></Link>
        </HeaderComponent>
    </>

    if (!isTop) return <>
        <HeaderComponent>
            <Link href="/login" passHref><u>Login</u></Link>
        </HeaderComponent>
        <HeaderComponent notTop>
            <Link href="/login" passHref><u>Login</u></Link>
        </HeaderComponent>
    </>
 
}

