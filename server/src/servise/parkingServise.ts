import parkingModel from "../models/pc.model"
import { IServiseProps } from './model/servise.model'

export const createPcServise = async (PcData: any) => {
    
    console.log(PcData);
    
    if(Object.keys(PcData).length === 0) {
        return {
            data: null,
            status:false,
        }
    }
    const createdParking = await parkingModel.create(PcData)
    const data = {
        data: createdParking,
        status: true,
    }
    return data
}

export const getPcServise = async (id: string) => {
    const createdUser = await parkingModel.findById(id)
    return createdUser
}

export const getAllPcServise = async () => {
    const createdUser = await parkingModel.find()
    return createdUser
}

export const setPcSeetServise = async (PcData: IServiseProps) => {
    const filter = { _id: PcData.id }
    const update = { "reserved": true }
    const UpdateParkingData = await parkingModel.findByIdAndUpdate(filter, update)
    await UpdateParkingData.save()
    const UpdatedParkingData = await parkingModel.findById(filter)
    return UpdatedParkingData
}

export const clearPcServise = async (id: string) => {
    const filter = { _id: id }
    const update = { "reserved": false}
    const UpdateParkingData = await parkingModel.findByIdAndUpdate(filter, update)
    await UpdateParkingData.save()
    const UpdatedParkingData = await parkingModel.findById(filter)
    return UpdatedParkingData
}



