import  express  from "express"
import cors from 'cors'
import { Request, Response  } from "express"
import { produtos, Produtos} from './data'
import { idText } from "typescript"
import { v4 as generatorId } from 'uuid'


const app = express ()
app.use(express.json())
app.use(cors())

// editar usa put
// criar post
app.post('/test', (req: Request, res:Response)=>{

    try {


    const { name, price }:Produtos = req.body
    if(!name || !price){
        throw new Error("Por favor digite nome e o preço!");
        
    }


    const id = generatorId()
    produtos.push({id:id, name:name, price:price})

    res.send(produtos)

    }catch(error:any){
        res.status(400).send(error.message)
    }

})

app.listen(3003, ()=>{
    console.log("servidor de pé http://localhost:3003")
})
