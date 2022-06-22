import { Request, Response } from "express";
import { connection } from "./connection";

//A) vai retornar todas informaçoes do ID que o usuario colocar.

//B

export const searchName = async(req: Request, res: Response) => {
    try {
        const name = req.query.name
        const result = await connection.raw(`
        SELECT * FROM actor WHERE name = "${name}"
        `)
        res.status(200).send(result[0])
    } catch (error) {
        console.log(error)
    }
}

//C)

export const searchGender = async(req: Request, res: Response) => {
    try {
        const gender = req.query.gender
        const result = await connection.raw(`
        SELECT COUNT(*) as"Quantidade de ${gender}" FROM actor WHERE gender = "${gender}"
        `)
        res.status(200).send(result[0])
    } catch (error) {
        console.log(error)
    }
}