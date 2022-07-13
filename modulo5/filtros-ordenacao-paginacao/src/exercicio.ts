import { Request, Response } from "express"
import { connection } from "./connection"

 export const searchName = async(req: Request, res: Response) => {
   let errorCode = 500
   try{
       const name = req.query.name

       if(!name) {
           errorCode = 422
           throw new Error("Digite o nome de um usuario valido.")
       }
       const result = await connection.raw(`
       select * from aula48_exercicio where name like '%${name}%';
       `)
       if(result[0].length === 0) {
           errorCode = 404
           throw new Error("Usuario não encontrado")
       }
       res.send(result[0])
   } catch (error: any) {
       res.status(errorCode).send(error.message)
   }
}

export const searchType = async(req: Request, res: Response) => {
    let errorCode = 500
    try{
        const type = req.params.type
 
        if(!type) {
            errorCode = 422
            throw new Error("Teacher, Operations, CX, São os três valores.")
        }
        const result = await connection.raw(`
        select * from aula48_exercicio where type like '%${type}%';
        `)
        if(result[0].length === 0) {
            errorCode = 404
            throw new Error("Tipo não encontrado")
        }
        res.send(result[0])
    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }
 }
 