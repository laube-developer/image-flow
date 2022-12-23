import nextConnect from 'next-connect'
import multer from 'multer'

//Cria uma instancia que contém vários métodos para
//gerar os processos de opload de arquivos com multipart/form-data
const upload = multer({
    storage: multer.diskStorage({
        destination: './temp/files',
        filename: (req, file, cb)=>{cb(null, file.originalname)}
    })
})

const apiRoute = nextConnect({
    //Respondendo qualquer outro método HTTP
    onNoMatch(req, res){
        res.status(405).json({error: `Método ${req.method} não é válido para essa rota.`})
    }  
})

//retorna o middleware que processa arquivos miltiplos com o mesmo nome de campo
const uploadMiddleware = upload.array('theFiles')

//Adiciona o middleware ao Next-Connect
apiRoute.use(uploadMiddleware)

//Processando uma requisição do tipo POST
apiRoute.post(
    (req, res)=>{
        res.status(200).json({message: "Arquivo(s) enviado(s) com sucesso!"})
    },
    (error)=>{
        res.status(500).json({message: "Falha ao carregar os arquivos"})
    })

export default apiRoute

export const config = {
    api: {
        bodyParser: false
    }
}