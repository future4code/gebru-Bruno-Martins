import { post } from './exercicio6';
import express, { request, response } from "express";
import cors from "cors"
import{ Request, Response } from "express"

const app = express();
app.use(cors())

app.use(express.json());


app.get('/post/:id', (req: Request, res: Response)=>{
    const id = Number(req.params.id)
    console.log(id)
    const userFilter = post.filter(user => user.userId == id)

    res.send(userFilter)
    
})

