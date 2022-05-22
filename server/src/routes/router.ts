import { Express, Request, Response } from 'express'
import { clearPcSeet, createdPc, getAllPc, getPc, setPcSeet } from '../controller/pcController'
import { createUser, getAllUser, getUser, validateUser } from '../controller/userContoller'

const router = (app: Express) => {
    app.get('/healthcheck' , (req: Request, res: Response) => res.sendStatus(200))
    app.get('/getUser/:id', getUser)
    app.get('/getAllUser', getAllUser)

    app.get('/getAllPC', getAllPc)
    
    app.post('/createUser' , createUser)
    app.post('/validateUser' , validateUser)

    app.get('/getPC/:id', getPc)
    app.post('/createdPc', createdPc)
    app.post('/seetPc' , setPcSeet)
    app.get('/claerPc/:id', clearPcSeet)
}

export default router
