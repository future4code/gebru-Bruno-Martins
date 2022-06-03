import { toDos } from "./exercicio3";
import express, { response } from 'express'
import cors from 'cors'
import { Request, Response } from 'express'
import { v4 as generateId} from "uuid";

const app = express()
app.use(express.json())
app.use(cors())

app.post('/addtask', (req: Request, res: Response) =>{
    try{
        const addtitle = req.body.title
    let newcompleted = {
        "userId": generateId(),
        "id": generateId(),
        title: addtitle,
        completed: Boolean
    }
    toDos.push(addtitle)
    res.status(201).send(`Sua tarefa foi adicionada com sucesso!`)


    }catch(error){
        res.status(400).send("Tarefa não foi criada")
    }
})

app.listen(3003, () => {
    console.log("Servidor rodando em http://localhost:3003")
})