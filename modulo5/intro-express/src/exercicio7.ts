import { post } from './exercicio6';
import express, { request } from "express";
import cors from "cors"
import{ Request, Response } from "express"

const app = express();
app.use(cors())

app.use(express.json());

app.get('/listpost',(req: Request, res: Response)=>{

    try{
        const allPoster = post

        const getPost = allPoster.map((eachPost)=>{
            return eachPost.id
        })
        res.status(200).send(getPost)
    }
    catch(error){
        res.status(400).end("Lista não encontrada")
    }

})

app.listen(3003, ()=> {
    console.log("servidor de pé")
})