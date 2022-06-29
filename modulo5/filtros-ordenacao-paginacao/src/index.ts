import { getOrder } from './exercicio2';
import { searchName, searchType } from './exercicio';
import { app } from "./app";
import { Request, Response } from 'express'


app.get('/ping', (req: Request, res: Response)=>{
    res.send('Pong!')
})



app.get('/search', searchName)

app.get('/search/order', getOrder)

app.get('/search/:type', searchType)