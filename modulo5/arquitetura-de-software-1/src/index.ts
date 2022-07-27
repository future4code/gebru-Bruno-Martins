import { UserController } from './controller/UserController';
import {app} from "./app"

const userController = new UserController

app.get("/", async function(){
   console.log("endpoint teste")
})

app.get('/allusers', userController.getAll)

app.post("/createuser", userController.createUSer)

app.delete('/delete/:id', userController.deleteUser)
