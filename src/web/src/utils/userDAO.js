//Realizar operações de CRUD da aplicação
// |> Login
// |> Cadastramento
// |> Alteração
// |> Exclusão
import connect from "./database";

async function login(username, senha){
    console.log("Realizando login...")
    const {db, client} = await connect()

    const user = {
        username: username,
        senha: senha
    }

    const collection = db.collection("users")

    const opcoes = {
        projection: {
            senha: 0
        }
    }

    const response = await collection.findOne(user, opcoes)

    client.close()
    
    return response
}

export default login
