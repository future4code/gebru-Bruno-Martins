import { user } from './../user';
import { BaseDatabase } from './BaseDatabase';


export class UserDatabase extends BaseDatabase {
    createUser = async (user: user): Promise<void> => {
        try {
          await UserDatabase.connection.insert({
              id: user.id,
              email: user.email,
              name: user.name,
              password: user.password
            }).into('User_Arq')

        } catch (error:any) {
          throw new Error(error.sqlMessage || error.message);
        }
      }

    get = async (input: any)  => {
        try {
            const input: any = [];

            const result = await UserDatabase.connection('User_Arq')
                .select("*")

						for(let user of result){
								input.push(user);
						}

            return input

        } catch (error:any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }
}