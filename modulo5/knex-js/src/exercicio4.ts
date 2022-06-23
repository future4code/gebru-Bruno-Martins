import { Request, Response } from "express";
import { connection } from "./connection";

export const addUser =async (req: Request, res: Response) => {
    try {
        const { name, salary, birth_date, gender} = req.body
        await connection.raw(`
        INSERT INTO actor (id, name, birth_date, salary, gender)
        VALUES (
            010,
            "${name}",
            "${birth_date}",
            "${Number(salary)}",
            "${gender}"
        )
        `)
        res.send("Usuario adicionado.")
    } catch (e) {
        console.error({e})
        return res.status(500).send("Faltou alguma coisa.")
    }
}

//Questao 4 A) fiz ela direto no exercicio 3
// Questão 4 B) fiz no exercicio 2