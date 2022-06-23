import { Request, Response } from "express";
import { connection } from "./connection";

//A)
export const actor = async(req: Request, res: Response) => {
    try {
        const id = req.query.id
        const result = await connection.raw(`
        SELECT * FROM actor WHERE id = "${id}"
        `)
        res.send(result[0])
    } catch(e) {
        console.error({e});
        return res.status(400).send("Usuario não encontrado.");
    }
}

//B)

export const amountGender = async(req: Request, res: Response) => {
    try {
        const result = await connection.raw(`
        SELECT COUNT(*) as Quantidade, gender as Genero FROM actor GROUP BY gender
        `)
        res.send(result[0])
    } catch (e) {
        console.error({e});
        return res.status(400).send("Usuario não encontrado.");
    }
}