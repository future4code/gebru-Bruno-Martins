import { UserController } from './controller/UserController';
import {app} from "./app"

const userController = new UserController

app.get("/", async function(){
   console.log("endpoint teste")
})

app.get("/all", userController.get)

app.post("/createuser", userController.createUSer)
