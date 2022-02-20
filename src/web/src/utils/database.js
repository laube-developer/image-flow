import { MongoClient } from "mongodb";


const db_url = "mongodb+srv://admin:"+ process.env.DB_PWD +"@cluster0.hns3u.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

const client = new MongoClient(db_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

export default async function connect(){
    await client.connect()

    const db = client.db("imageFlow")

    return {db, client}

}