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

    }
}

import lottie from "lottie-web";
import animationData from "../lootie/loading_animation.json"
// import Gradient from "rgt"
import { useEffect } from 'react';

// const gradientProps = {
//     dir: "left-to-right",
//     fron: "#A019D8",
//     to: "#D11AD6"
// }

export default function Loading(){


    return (<div style={styles.body}>
        <div
            className="container"
        ></div>
        <p
            style={styles.text}
        >

        {/* <Gradient
            dir="left-to-right"
            from="#A019D8"
            to="#D11AD6"
            >Carregando...</Gradient> */}
        </p>
    </div>)
}