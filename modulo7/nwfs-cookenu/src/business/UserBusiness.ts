import { GenerateId } from './../services/GenerateId';
import { Authenticator } from './../services/Authentication';
import { HashManager } from './../services/HashManager';
import { InvalidRequest, InvalidName, InvalidEmail, InvalidPassword, CustomError } from './../error/CustomError';
import { IUserRepository } from './../repository/userRepository';
import { IUser, IUserDTO } from './../model/user';


export class UserBusiness  {
    constructor (
        private userDatabase: IUserRepository, 
        private hashManager: HashManager,
        private authenticator: Authenticator 
        ) {}


    async signup (input: IUserDTO):Promise<string> {
        try {
            
            const {name, email, password} = input

            if(!name || !email || !password) {
                throw new InvalidRequest()
            }

            if(name.length < 3) {
                throw new InvalidName()
            }
            
            // if(email.match(/[\w.]+@\w+\.\w{2,10}\.?\w{0,2}/g)) {
            //     throw new InvalidEmail()
            // }
            if (!email.includes("@")) {
                throw new InvalidEmail()
              }

            if(password.length < 6) {
                throw new InvalidPassword()
            }

        const hashPassword = await this.hashManager.generateHash(password)

        const id = GenerateId()

        const user:IUser = {
            id,
            name,
            email,
            password:hashPassword
        }

        await this.userDatabase.UserSignup(user)

        const token = this.authenticator.generateToken({id})
        return token 

        } catch (error:any) {
            throw new CustomError(400, error.message)
        }

    }
}