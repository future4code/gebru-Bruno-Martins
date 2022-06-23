import { Request, Response } from "express";
import { connection } from "./connection";

//A)
export const update = async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        const salary = req.body.salary
        await connection("actor")
        .update({
            salary
        })
        .where({
            id
        })
        res.send("Salario alterado")
    } catch (e) {
        console.error({e})
        return res.status(500).send("Faltou algum parametro.")
    }
}

//B)
export const deleteUser = async(req: Request, res: Response) => {
    try {
        await connection("actor")
        .delete()
        .where({
            id: req.params.id
        })
        res.send("Usuario Deletado")
    } catch (e) {
        console.error({e})
        return res.status(500).send("Usuario não encontrado.")
    }
}

//C)
export const medSalary = async(req: Request, res: Response) => {
    try {
        const gender = req.query.gender
        const result = await connection.raw(`
        SELECT gender, AVG(salary) as "Media do salario" FROM actor WHERE gender = "${gender}";
        `)
        res.status(200).send(result)

    } catch (e) {
        console.error({e})
        return res.status(500).send("Algo errado, verifique parametros")
    }
}
