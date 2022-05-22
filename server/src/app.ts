import express from "express";
import config  from "config";
import connect from "./utils/connect";
import routes from "./routes";
import cors from 'cors'

const port = config.get('port')

const app = express()
app.use(express.json())
app.use(cors())

app.listen(port, async () => {
    console.log(`App is running at http://localhost:${port}`)
    await connect()

    routes(app)
})