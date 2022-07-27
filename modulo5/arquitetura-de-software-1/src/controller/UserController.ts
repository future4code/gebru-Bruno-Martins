import { Request, Response } from 'express'
import { UserBusiness } from '../business/UserBusiness'


export class UserController {
    createUSer = async (
        req: Request,
        res: Response
    ) => {
        try {
            const input: any = {
                email: req.body.email,
                name: req.body.name,
                password: req.body.password
            }

            const userBusiness = new UserBusiness()
            await userBusiness.createUser(input)

            res.status(201).send("Usuário criado!");

        } catch (error: any) {
            res.status(400).send({ error: error.message });
        }
    }


    get = async (
        req: Request,
        res: Response
        ) => {	
        try {

            const users = new UserBusiness();

            res.send(users).status(200);

        } catch (error:any) {
            res.send({ message: error.message }).status(error.status);
        }
    }

}