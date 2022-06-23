import express, { request } from "express";
import cors from "cors"
import{ Request, Response } from "express"
import { users } from "./exercicio3";

const app = express();
app.use(cors())

app.use(express.json());


app.get('/', (req: Request, res: Response)=>{
    res.status(200).send("Deu certo.")
})

app.get('/listusers',(req: Request, res: Response)=>{

    try{
        const allUser = users

        const userPeople = allUser.map((eachUser)=>{
            return eachUser.id
        })
        res.status(200).send(allUser)
    }
    catch(error){
        res.status(400).end("Lista nao encontrada")
    }

})



app.listen(3003, ()=> {
    console.log("servidor de pé")
})