import { connection } from './connection';
import { Request, Response } from 'express'

export const createUser = async(req: Request, res: Response) => {
    let errorCode = 500
    try {
        const {name, nickname, email} = req.body

        if(!name || !nickname || !email.match(/[\w.]+@\w+\.\w{2,10}\.?\w{0,2}/g)) {
            errorCode = 422
            throw new Error("Verifique se esta tudo preenchido.")
        }
        await connection.raw(`
        INSERT INTO Users (name, nickname, email)
        VALUES(
            "${name}",
            "${nickname}",
            "${email}"
        )
        `)
        res.send("Usuario Criado.")
        
    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }
}

export const searchId = async(req: Request, res: Response) => {
    let errorCode = 500
    try{
        const id = Number(req.params.id)
        if(isNaN(id)) {
            errorCode = 422
            throw new Error("Por favor passe um numero!")
        }
        const result = await connection.raw(`
        SELECT * FROM Users WHERE id = "${id}"
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

export const changeUser = async(req: Request, res: Response) =>{
    let errorCode = 500
    try {
        const id = req.params.id
        const {name, nickname, email} = req.body

        await connection("Users")
        .update({
            name,
            nickname,
            email
        })
        .where({
            id
        });
        res.send("Dados Alterado.")
    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }
}
    