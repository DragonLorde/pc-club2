import { model, Schema } from "mongoose"
import { number } from "zod"

const UserSchema = new Schema({
    login: {
        type: String,
        required: true, 
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    pass:{
        type: Boolean,
        required: true
    },
})

export default model("user", UserSchema)