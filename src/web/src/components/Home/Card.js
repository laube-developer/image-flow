import styles from "./Card.module.css"

export default function Card({src, children}){
    return <div className={styles.card}>
        <img src={src}></img>
        <p>{children}</p>
    </div>
}