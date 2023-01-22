import styles from "./TitleUnderlineLight.module.css"

export default function TitleUnderlineLight({children}){
    return <span className={styles.titleSpan}>{children}</span>
}