import login from "../../src/utils/userDAO"

export default async function handler(req, res){

    if(req.method == "GET") res.redirect("/login")

    let body = {}

    if(typeof(req.body) == "string") body = JSON.parse(req.body)
    else body = req.body

    const user = {
        username: body.username,
        senha: body.senha
    }

    const response = await login(user.username, user.senha)
 
    res.status(200).json(response)
}