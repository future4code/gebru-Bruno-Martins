import  express  from 'express';
import cors from 'cors'
import { allUser } from './exercicio1';
import { type } from './exercicio2';
import { searchName } from './exercicio3';
import { addUsers } from './exercicio4';

const app = express()
app.use(express.json())
app.use(cors())

app.listen(3003, () => {
    console.log('Servidor esta ativo http://localhost:3003')
})

app.get('/allusers', allUser)

app.get('/typeuser/', type)

app.get('/searchname/', searchName)

app.put('/addusers/', addUsers)