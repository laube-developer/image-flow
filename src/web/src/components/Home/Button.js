import styles from "./Button.module.css"

export default function Button({type, children, src}){
    return (<a href={src || ""} className={styles[type]}>
        {children}
    </a>)
}