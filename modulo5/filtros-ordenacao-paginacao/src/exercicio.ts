import { Request, Response } from "express"
import { connection } from "./connection"

export const getAllUsers = async(req: Request,res: Response): Promise<void> =>{
    let statusCode = 500
    try {
        let statusCode = 500

        const result = await connection.raw(`
        SELECT id, name, email, type
        FROM aula48_exercicio;
     `)
  
     
 
       if(!result[0].length){
          res.statusCode = 404
          throw new Error("No recipes found")
       }
 
       res.status(200).send(result[0])
       
    } catch (error:any) {
       console.log(error)
       res.send(error.message || error.sqlMessage)
    }
 }

 export const searchName = async(req: Request, res: Response) => {
   let errorCode = 500
   try{
       const name = req.query.name

       if(!name) {
           errorCode = 422
           throw new Error("Por favor passe um numero!")
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
