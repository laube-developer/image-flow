import styles from "./Card.module.css"
import Image from "next/image"

export default function Card({src, children}){
    return <div className={styles.card}>
        <Image src={src} alt={src}/>
        <p>{children}</p>
    </div>
}