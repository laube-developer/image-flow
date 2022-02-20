//Realizar operações de CRUD da aplicação
// |> Login
// |> Cadastramento
// |> Alteração
// |> Exclusão
import connect from "./database";

async function login(username, senha){
    console.log("Realizando login...")
    const {db} = await connect()

    const user = {
        username: username,
        senha: senha
    }

    const collection = db.collection("users")

    const opcoes = {
        projection: {
            senha: false
        }
    }

    const response = collection.findOne(user, opcoes)

    return response
}

export default login
