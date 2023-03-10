import styles from "./styles.module.css"

export default function LayoutBox({ children }){
    return <div className={styles.layoutBox}>
        {children}
    </div>
}