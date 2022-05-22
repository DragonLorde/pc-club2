import mongoose from "mongoose"
import config from 'config'

const connect = async () => {
    const mongoUrl = config.get<string>('dbUri')

    try {
        await mongoose.connect(mongoUrl)
        console.log("DB connected")
    } catch(error) {
        process.exit(1)
    }
}

export default connect