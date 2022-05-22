import { model, Schema } from "mongoose"
import { boolean } from "zod"

const pcSchema = new Schema({
    cpu: {
        type: String,
        required: true
    },
    gpu: {
        type: String,
        required: true,
    },
    ram: {
        type: String,
        required: true
    },
    monitor: {
        type: String,
        required: true,
    },
    reserved: {
        type: Boolean,
        required: true,
    }
   
})

export default model("pc" , pcSchema)