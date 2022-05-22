import { Request, Response } from "express"
import { getPcServise, createPcServise, getAllPcServise, setPcSeetServise, clearPcServise } from "../servise/parkingServise"

export const createdPc = async (req: Request, res: Response) => {
    try {
        const newParking = await createPcServise(req.body)
        res.status(200).json(newParking)
    } catch(erro) {
        console.log(erro)
        res.sendStatus(400)
    }
}

export const getPc = async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        const parkings = await getPcServise(id)
        res.status(200).json(parkings)
    } catch(erro) {
        console.log(erro)
        res.sendStatus(400)
    }
}

export const getAllPc = async (req: Request, res: Response) => {
    try {
        const parkings = await getAllPcServise()
        res.status(200).json(parkings)
    } catch(erro) {
        console.log(erro)
        res.sendStatus(400)
    }
}

export const setPcSeet = async (req: Request, res: Response) => {
    try {
        const parking = await setPcSeetServise(req.body)
        res.status(200).json(parking)
    } catch(erro) {
        console.log(erro)
        res.sendStatus(400)
    }
}

export const clearPcSeet = async (req: Request, res: Response) => {
    try {
        const parking = await clearPcServise(req.params.id)
        res.status(200).json(parking)
    } catch(erro) {
        console.log(erro)
        res.sendStatus(400)
    }
}