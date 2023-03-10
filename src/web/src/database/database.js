import mongoose from "mongoose";

const connect = async props => {
    return await mongoose.connect(process.env.URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
}

export {
    connect
}