import Link from "next/link";

import styles from "../styles/Home.module.css"

export default function Home(){
    return(<div className={styles.container}>
        <section className={styles.session_1}>
            <h1>Projeto <TitleUnderlineLight>Image Flow</TitleUnderlineLight></h1>
            <h3> Salve suas memórias e acesse quando quiser</h3>
            <div className={styles.cardsBlock}>
                {Array.from([1, 2, 3, 4]).map(i=><Card type={i}></Card>)}
            </div>
            <div className={styles.session1_bottom}>
                <p>por Rafael Laube</p>
                <div>
                    <Button primary>Entrar</Button>
                    <Button secondary>Quero começar</Button>
                </div>
            </div>
        </section>
        <session className={styles.session_2}>
            <img src="/home/image_session_2.svg"/>
            <div className={styles.session_2_content}>
                <div className={styles.session_2_box}></div>
                <Button terciary>Veja mais projetos</Button>
            </div>
        </session>
        <session className={styles.session_3}>
            
        </session>
    </div>)
}

function TitleUnderlineLight({children}){
    return <span className={styles.titleSpan}>{children}</span>
}

function Card({type}){
    const cards = [
        <div className={styles.card}>
            <img src="/home/image-card-1.svg"></img>
            <p>Salve seus arquivos de imagem e vídeo</p>
        </div>,
        <div className={styles.card}>
            <img src="/home/image-card-2.svg"></img>
            <p>Crie coleções para cada momento</p>
        </div>,
        <div className={styles.card}>
            <img src="/home/image-card-3.svg"></img>
            <p>Acesse a qualquer momento</p>
        </div>,
        <div className={styles.card}>
            <img src="/home/image-card-4.svg"></img>
            <p>Compartilhe seus arquivos</p>
        </div>,
    ]

    return <>{cards[type+-1]}</>
}

function Button({primary, secondary, terciary, children}){
    if (primary) return (<button className={styles.btn_primary}>
        {children}
    </button>)

    if (secondary) return (<button className={styles.btn_secondary}>
        {children}
    </button>)

    if (terciary) return (<button className={styles.btn_terciary}>
        {children}
    </button>)
}