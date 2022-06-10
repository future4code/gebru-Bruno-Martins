import { Request, Response } from "express";
import { users } from "./data";

export const searchName = (req:Request, res:Response) =>{
    let erroCode = 500
    try {
        const name = req.query.name as string

        if(!name) {
            erroCode = 422
            throw new Error("Busque por um nome!")
        }
        const soloName = users.filter(elemento => elemento.name.toLowerCase() === name.toLowerCase())

        if(!soloName.length){
            erroCode = 404
            throw new Error("Usuario não encontrado.")
        }

        res.status(200).send(soloName)
        
    } catch (error:any) {
        res.status(erroCode).send(error.message)
    }
}
