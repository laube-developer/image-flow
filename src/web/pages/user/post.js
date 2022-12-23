import { useState } from "react";
import Restrict from "../../src/components/restrict";

export default function Post(){
    const [userData, setUserData] = useState({})

    return <Restrict handleSetUserData={setUserData}>
        <h1>Adicione novos posts</h1>

    </Restrict>
}