import { useRef, useState } from "react";
import Restrict from "../../src/components/restrict";
import axios from 'axios'

export default function Post(){
    const [userData, setUserData] = useState({})
    const [uploadProcess, setUpload] = useState(0)
    const [message, setMessage] = useState(null)

    const formRef = useRef()
    const fileRef = useRef()

    const mostrarMensagem = (responseMessage)=>{
        setMessage(responseMessage)
        setTimeout(()=>{
            setMessage(null)
        }, 10000)
    }

    const onChange = async (event)=>{
        const config = {
            headers: {'content-type':'multipart/form-data'},
        }
        
        const formData = new FormData()
        const timeStamp = new Date().getTime()

        Array.from(event.target.files).forEach((file, index)=>{
            //nome do arquivo será 
            // [id do usuario]_[timestamp]_[indice do arquivo no envio].[extenção do arquivo enviado]
            let extention = file.name.split(".").pop()
            let filename = Array.from([userData._id, timeStamp, index]).join("_") + `.${extention}`

            let newFile = new File([file.slice()], filename)


            formData.append(event.target.name, newFile)
        })

        const response = await axios.post('/api/upload', formData, config)
       
        mostrarMensagem(response.data.message)
    }


    return <Restrict>
        <form ref={formRef}>
            <p>Envie um arquivo</p>
            <input multiple={true} ref={fileRef} type="file" name="theFiles" onChange={onChange}/>
        </form>
        <div>{message != null ? message : ""}</div>
    </Restrict>
}