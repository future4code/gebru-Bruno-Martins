import { toDos } from "./exercicio3";
import express, { response } from 'express'
import cors from 'cors'
import { Request, Response } from 'express'

const app = express()
app.use(express.json())
app.use(cors())

app.get('/completed/search', (req: Request, res: Response)=>{
    try{
        const searchCompleted = req.query.completed
        let searchBooleano: boolean
        if(searchCompleted == "true"){
            searchBooleano = true
        } else {
            searchBooleano = false
        }

        const allCompleted = toDos.filter((allCompleted) => {
            if (allCompleted.completed === searchBooleano) {
                return searchCompleted
            } else if (allCompleted.completed === searchBooleano) {
                return searchCompleted
            }
        })
            res.send(allCompleted)
    }
    catch(error: any) {
        response.end(error.message)
    }
})

app.listen(3003, () => {
    console.log("Servidor rodando em http://localhost:3003/completed/search")
})