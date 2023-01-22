const styles = {
    body: {
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column"
    },
    text: {
        fontSize: "30px",
        fontWeight: "800",
        backgroundClip: "text",
        textFillColor: "transparent"
    },
    container: {
        width: 150,
        height: 150
    }
}

import lottie from "lottie-web";
import Gradient from "rgt"
import { useEffect, useRef } from 'react';

const gradientProps = {
    dir: "left-to-right",
    fron: "#A019D8",
    to: "#D11AD6"
}

export default function Loading(){
    const container = useRef(null)
    
    useEffect(()=>{
        lottie.loadAnimation({
            container: container.current, 
            render: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('./animation/loading_animation.json')
        })
    }, [])

    return (<div style={styles.body}>
        <div
            style={styles.container}
            ref={container}
        ></div>
        <p
            style={styles.text}
        >

        <Gradient
            dir="left-to-right"
            from="#A019D8"
            to="#D11AD6"
            >Carregando...</Gradient>
        </p>
    </div>)
}