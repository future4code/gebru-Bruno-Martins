import express from 'express'
import cors from 'cors'
import { Request, Response } from 'express'

const app = express()
app.use(express.json())
app.use(cors())

app.get('/ping', (req: Request, res: Response)=>{
    res.send('Pong!')
})
app.listen(3003, () => {
    console.log("Servidor rodando em http://localhost:3003")
})

