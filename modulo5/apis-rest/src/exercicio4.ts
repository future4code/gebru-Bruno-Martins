import { Request, Response } from "express";
import { users } from "./data";
import {USER_TYPE} from "./data"
import { Users } from "./data";


export const addUsers = (req: Request, res: Response) => {
    let errorCode = 500
    try {
        const {name, email, type, age} = req.body
        if (!name || !email || !type || !age){
            errorCode = 422
            throw new Error("Não deixe nenhum parametro vazio")
        }
        if(type != USER_TYPE.NORMAL && type != USER_TYPE.ADMIN){
            errorCode = 422
            throw new Error("Inserir o tipo de usúario valido: NORMAL OU ADMIN")
        }
        const newUser:Users = {
            id: users.length + 1,
            name: name,
            email: email,
            type: type,
            age: age
        } 
        users.push(newUser)
        res.status(201).send(users)

    } catch (error:any) {
        res.status(errorCode).send(error.message)
    }
}


// a. Mude o método do endpoint para `PUT`. O que mudou?
// Em questão de usabilidade nada!

// b. Você considera o método `PUT` apropriado para esta transação? Por quê?
// Sim! Pois o metodo PUT é destinado para criação!