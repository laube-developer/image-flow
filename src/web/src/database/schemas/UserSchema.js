import { Schema, model, models } from "mongoose";

const UserSchema = Schema({
    name: {type: String, max: 30, required: true},
    username: {type: String, max: 20, required: true},
    email: {type: String, required: true},
    data_nascimento: {type: Date, required: true},
    user_image: {type: String, default: ""},
    senha: {type: String, max: 60},
    active: {type: Boolean, default: true},
    date: {type: Date, default: Date.now}
})

const User = models.user || model("user", UserSchema)

export default User