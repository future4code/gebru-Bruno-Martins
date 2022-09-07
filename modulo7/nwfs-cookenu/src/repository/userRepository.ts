import { IUser } from './../model/user';

export interface IUserRepository {
    UserSignup (user: IUser):Promise<void> 
}