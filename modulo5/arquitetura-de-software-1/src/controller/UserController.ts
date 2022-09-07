import { UserDatabase } from './../data/UserDatabase';
import { Request, Response } from 'express'
import { UserBusiness } from '../business/UserBusiness'
import { user } from '../user'


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

  getAll = async (req: Request, res: Response) => {	
        try {
            const users = new UserBusiness()
           const input = await users.getAll(UserDatabase)
          


            res.send(input).status(200);

        } catch (error:any) {
            res.send({ message: error.message }).status(error.status);
        }
    }

    deleteUser = async (req: Request, res: Response): Promise<void> => {

        try {
            const input = {
                id: req.params.id
            }

           await new UserBusiness().deleteUser(input);

            res.status(200).send({ message: "Usuário apagado com sucesso" });

        } catch (error:any) {
            res.status(400).send({ error: error.message });
        }

    }
}