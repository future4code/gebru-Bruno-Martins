import express, { request } from "express";
import cors from "cors"
import{ Request, Response } from "express"

const app = express();
app.use(cors())
app.use(express.json());


app.get('/', (req: Request, res: Response)=>{
    res.status(200).send("Deu certo.")
})


app.listen(3003, ()=> {
    console.log("servidor de pé")
})