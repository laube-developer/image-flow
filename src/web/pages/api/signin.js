import { findOneUser } from "../../src/database/controllers/UserController"

import { jsonParser } from "../../src/utils/jsonParser"
import { hashPwd, compare } from "../../src/utils/pwdEncrypt"

export default async function handler(req, res){
    if(req.method == "GET") res.redirect("/login")

    const body = jsonParser(req.body)

    const {username, senha} = body

    await findOneUser({ username })
        .then(async (user) => {
            if (!user) {
                res.status(401).json(false)
                return
            }

            const pwdMatch = await compare(senha, user._doc.senha)

            pwdMatch 
                ? res.status(200).json({...user._doc, senha: undefined})
                : res.status(401).json(false)

        })
        .catch((err) => {
            console.log(err)
            res.status(401).json({message: err.message})
        })
}