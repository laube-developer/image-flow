import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import styles from "../styles/Home.module.css"

export default function Home(){
    const [screenWidth, setWidth] =  useState(0);
    const [commits, setCommits] = useState([])
    const [filteredCommits, setFilteredCommits] = useState([])

    const resize = (event)=>{
        setWidth(window.innerWidth)
    }

    const loadCommits = async ()=>{
        let commitsList = []

        //trocar esse link para esse https://api.github.com/repos/laube-developer/image-flow/commits
        await fetch('/api/commits')
        .then((response) => response.json())
        .then((data) => {
            data.map((item, index)=>{

                commitsList[index] = {
                    "sha": item.sha,
                    "date": new Date(item.commit.author.date),
                    "author": item.author.login,
                    "url": item.author.avatar_url,
                    "mensagem": item.commit.message
                }

            })
        });

        console.log(commits)
    }

    const filtrarCommits = ()=>{
        if(screenWidth <= 800){
            salvarCommitsFiltrados(4, 1)
        }

        if(screenWidth > 800 && screenWidth <= 1000){
            salvarCommitsFiltrados(4, 2)
        }

        if(screenWidth > 1000 && screenWidth <= 1300){
            salvarCommitsFiltrados(6, 3)
        }

        if(screenWidth > 1300){
            salvarCommitsFiltrados(8, 4)
        }
    }

    const salvarCommitsFiltrados = (reps, whiteItems)=>{
        let list = []   
    
        for (let i = 0; i < reps; i++){
            if(commits[i] != undefined){
                let c = commits[i]
                
                list.push({
                    'title': c.mensagem,
                    'userImgUrl': c.url,
                    'userName': c.author,
                    'date': c.date,
                    'key': c.sha
                })
            }
        }

        for(let i = 0; i < whiteItems; i++){
            list.push({element: null})
        }
    
        setFilteredCommits(list)
    }

    useEffect(()=>{
        window.onresize = resize

        filtrarCommits()
    }, [screenWidth, commits])

    useEffect(()=>{
        resize()

        loadCommits()
        

    }, [])

    return(<div className={styles.container}>
        <section className={styles.session_1}>
            <h1>Projeto <TitleUnderlineLight>Image Flow</TitleUnderlineLight></h1>
            <h3> Salve suas memórias e acesse quando quiser</h3>
            <div className={styles.cardsBlock}>
                <Card src={"/home/image-card-1.svg"} key={1}>
                Salve seus arquivos de imagem e vídeo
                </Card>
                <Card src={"/home/image-card-2.svg"} key={2}>
                Crie coleções para cada momento
                </Card>
                <Card src={"/home/image-card-3.svg"} key={3}>
                Acesse a qualquer momento
                </Card>
                <Card src={"/home/image-card-4.svg"} key={4}>
                Compartilhe seus arquivos
                </Card>
            </div>
            <div className={styles.session1_bottom}>
                <p>por Rafael Laube</p>
                <div>
                    <Button type={"btn_primary"} src={"/login"}>Entrar</Button>
                    <Button type={"btn_secondary"} src={"/cadastrar"}>Quero começar</Button>
                </div>
            </div>
        </section>
        <session className={styles.session_2}>
            <div>
                <img src="/home/flow.svg" className={styles.flow}/>
            </div>
            <div src="/home/image_session_2.svg" className={styles.image_s2}>
                <div className={styles.session_2_content}>
                    <div className={styles.session_2_box}>
                        <h2>Portifólio</h2>
                        <ul>
                            <li>Next.js</li>
                            <li>React.js</li>
                            <li>MongoDB</li>
                        </ul>
                        <p>Projeto para composição de portifólio pessoal. O processo de desenvolvimento está registrado no <span><Link href="https://youtube.com/@rafaellaube">Youtube</Link></span>.</p>
                    </div>
                    <Button type={"btn_terciary"}>Veja mais projetos →</Button>
                </div>
            </div>
        </session>
        <session className={styles.session_3}>
            <h1>Commits</h1>
            <div className={styles.commits}>
                {filteredCommits.map((item, index)=>{
                    return <CommitItem 
                    title={item != null ? item.title : ""}
                    userImgUrl={item != null ? item.userImgUrl : ""}
                    userName={item != null ? item.userName : ""}
                    date={item != null ? item.date : ""}
                    key={index}
                    />
                })}
            </div>
        </session>
        <footer className={styles.footer}>
            <div>
                <img src="/home/github.svg"/>
                <Link href="https://github.com/laube-developer/image-flow">Image Flow</Link>
            </div>
            <div>
                <img src="/home/linkedin.svg"/>
                <Link href="https://www.linkedin.com/in/rafaellaube/">Rafael Laube</Link>
            </div>
        </footer>
    </div>)
}

function TitleUnderlineLight({children}){
    return <span className={styles.titleSpan}>{children}</span>
}

function Card({src, children}){
return <div className={styles.card}>
    <img src={src}></img>
    <p>{children}</p>
</div>
}

function Button({type, children, src}){
    return (<a href={src || ""} className={styles[type]}>
        {children}
    </a>)
}

function CommitItem({title, userImgUrl, userName, date}){
    var titleSliced
    var titleSlicedDescription
    let [day, month, year] = [null, null, null]
    
    if(title){
        titleSliced = title.slice(0, 19).split(" ")
        titleSliced.pop()
        titleSliced = titleSliced.join(" ")
        titleSlicedDescription = title.replace(titleSliced, "")
    }

    let months = ["janeiro","fevereiro","março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"]

    if(date){
        [day, month, year] = [date.getDate(), months[date.getMonth()], date.getFullYear()]
    }

    return (<li className={styles.commitsItem}>
        {title ? <h1>{titleSliced}</h1> : (<div className={styles.titleNone}></div>)}

        {title ? <h4>{titleSlicedDescription}</h4> : (<div className={styles.titleNoneDesc}></div>)}
        
        <div>
            <img src={userImgUrl}/>
            <div className={styles.icon}>←</div>
            {userName? <p>por {userName}</p> : <></>}
        </div>
        {date ? (<h3><i>{`${day} de ${month} de ${year}`}</i></h3>)  : <></>}
    </li>)
}