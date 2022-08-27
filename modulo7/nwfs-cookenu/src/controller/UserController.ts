import { IUserDTO } from './../model/user';
import { Request, Response } from 'express';
import { UserBusiness } from './../business/UserBusiness';

export class UserController{
    constructor(private userbusiness: UserBusiness){}

    public userSinup = async (req: Request, res: Response ) => {
        try {
            const {name, email, password} = req.body

            const input:IUserDTO = {
                name,
                email,
                password
            }

            const token = await this.userbusiness.signup(input)
            res.status(201).send({message:"Usuario criado com sucesso.", token})

        } catch (error:any) {
            res.send(error.message).status(error.statusCode)
        }
    }
}