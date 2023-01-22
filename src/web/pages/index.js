import Link from "next/link";

import styles from "../styles/Home.module.css"

import TitleUnderlineLight from "../src/components/Home/TitleUnderlineLight"
import Card from "../src/components/Home/Card"
import Button from "../src/components/Home/Button"
import CommitItem from "../src/components/Home/CommitItem"

export default function Home({commitsList, test}){

    return(<div className={styles.container}>
        <section className={styles.session_1}>
            <h1>Projeto <TitleUnderlineLight>Image Flow</TitleUnderlineLight></h1>
            <h3> Salve suas memórias e acesse quando quiser</h3>
            <div className={styles.cardsBlock}>
                <Card src="/home/image-card-1.svg" key={1}>
                    Salve seus arquivos de imagem e vídeo
                </Card>
                <Card src="/home/image-card-2.svg" key={1}>
                    Crie coleções para cada momento
                </Card>
                <Card src="/home/image-card-3.svg" key={1}>
                    Acesse a qualquer momento
                </Card>
                <Card src="/home/image-card-4.svg" key={1}>
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
            <div className={styles.commitsBox}>
                {commitsList.map((item, index)=>{
                    return <CommitItem 
                    title={item.mensagem}
                    userImgUrl={item.userImgUrl}
                    author={item.author}
                    date={new Date(item.dateStamp)}
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

export async function getServerSideProps(){
    const response = await fetch('https://api.github.com/repos/laube-developer/image-flow/commits')
    const serverDada = await response.json()
    let commitsList = []
    
    serverDada.map((item, index)=>{
        commitsList.unshift({
            "sha": item.sha,
            "dateStamp": item.commit.author.date,
            "author": item.author.login,
            "userImgUrl": item.author.avatar_url,
            "mensagem": item.commit.message
        })
    })

    return {props: {
        commitsList: commitsList
    }}

}