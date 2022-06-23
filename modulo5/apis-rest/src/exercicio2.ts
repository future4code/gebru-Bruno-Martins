import { Request, Response } from "express";
import { users } from "./data";

export const type = (req:Request, res:Response) =>{
    let errorCode = 500
    try {
        const type = req.query.type as string

        if(!type) {
            errorCode = 422
            throw new Error(" Busque por ADMIN OU NORMAL")
        }
        const userType = users.filter(elemento => elemento.type.toLowerCase() === type.toLowerCase())

        if(!userType.length){
            errorCode = 404
            throw new Error ("Busque por ADMIN ou NORMAL.")
        }
        res.status(200).send(userType)

    } catch (error:any) {
        res.status(errorCode).send(error.message)
    }
}