import { Request, Response } from "express"
import { connection } from "./connection"

export const getOrder = async (req: Request, res: Response): Promise<void> => {
   let statusCode = 500
   try {
      let sort = req.query.sort as string
      let order = req.query.order as string

      if (sort !== "name" && sort !== "type") {
         sort = "email"
      }

      if (order.toUpperCase() !== "ASC" && order.toUpperCase() !== "DESC") {
         order = "ASC"
      }


      const result = await connection.raw(`
        SELECT *
        FROM aula48_exercicio ORDER BY ${sort} ${order};
     `)

      if (!result[0].length) {
         statusCode = 404
         throw new Error("No recipes found")
      }

      res.status(200).send(result[0])

   } catch (error: any) {
      console.log(error)
      res.status(statusCode).send(error.message || error.sqlMessage)
   }
}