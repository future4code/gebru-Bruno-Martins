import  express  from "express"
import cors from 'cors'
import { Request, Response  } from "express"

const app = express ()
app.use(express.json())
app.use(cors())


app.get('/test', (req: Request, res:Response)=>{

    try{
        res.status(200).send("API está funcionando")
    }catch(error){

    }
})

app.listen(3003, ()=>{
    console.log("servidor de pé http://localhost:3003")
})

