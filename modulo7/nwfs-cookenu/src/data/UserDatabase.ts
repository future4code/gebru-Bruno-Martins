import { CustomError } from './../error/CustomError';
import { IUser } from './../model/user';
import { IUserRepository } from "../repository/userRepository";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase implements IUserRepository{

    private static TABLE_NAME = 'cookenu_user'

    public UserSignup = async (user: IUser):Promise<void> => {
        try {
            
            await UserDatabase.connection
            .insert(user)
            .into(UserDatabase.TABLE_NAME)

        } catch (error:any) {
            throw new CustomError(400, error.sqlMessage)
        }
    }
}