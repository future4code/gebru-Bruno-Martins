import { addUser } from './exercicio4';
import { actor, amountGender } from './exercicio3';
import { update, deleteUser, medSalary } from './exercicio2';
import { app } from "./app";
import { searchName, searchGender } from "./exercicio1";

app.get('/searchname/', searchName)

app.get('/searchgender/', searchGender)

app.put('/updatesalary/:id', update)

app.delete('/deleteuser/:id', deleteUser)

app.get('/medsalary/', medSalary)

app.get('/userid/', actor)

app.get('/actor', amountGender)

app.post('/actor', addUser)