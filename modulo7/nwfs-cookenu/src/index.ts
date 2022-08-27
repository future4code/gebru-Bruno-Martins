import app from "./app";
import { userRouters } from "./routers/userRouters";



app.use("/user", userRouters)