import nextConnect from "next-connect"
import multiparty from "multiparty"

const middleware = nextConnect()

middleware.use(async (req, res, next)=>{
    const form = new multiparty.Form()

    await form.parse(req, (err, fields, files)=>{
        req.body = fields
        req.files = files

        console.log("Campos enviados")
        Object.keys(fields).forEach((name, index)=>{
            console.log(`Campo ${index}: ${name}`)
        })

        Object.keys(files).forEach((name)=>{
            console.log(`   Valor: ${name}`)
        })
        next()
    })

})

export default middleware