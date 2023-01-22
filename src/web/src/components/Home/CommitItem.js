import styles from "./CommitItem.module.css"
import Image from "next/image"

export default function CommitItem({title, userImgUrl, author, date}){
    let [ day, month, year] = [0, 0, 0]
    let [mainTitle, info] = sliceTitle(title)

    let months = ["janeiro","fevereiro","março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"]

    day = date.getDate()
    month = months[date.getMonth()]
    year = date.getFullYear()


    return (<li className={styles.commitsItem}>
        <h1>{mainTitle}</h1>

        <h4>{info}</h4>
        
        <div>
            <img src={userImgUrl} alt={userImgUrl} />
            <div className={styles.icon}>←</div>
            <p>por {author}</p>
        </div>
        <h3><i>{`${day} de ${month} de ${year}`}</i></h3>
    </li>)
}

function sliceTitle(title){
    let [main, info] = [null, null]
    if(title){
        main = title.slice(0, 30).split(" ")
        main.pop()
        main = main.join(" ")
        info = title.replace(main, "")
    }

    return [main, info]
}