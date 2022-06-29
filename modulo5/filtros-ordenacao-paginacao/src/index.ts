import { getAllUsers, searchName } from './exercicio';
import { app } from "./app";
import { Request, Response } from 'express'

app.get('/ping', (req: Request, res: Response)=>{
    res.send('Pong!')
})

app.get('/allusers', getAllUsers)

app.get('/search', searchName)