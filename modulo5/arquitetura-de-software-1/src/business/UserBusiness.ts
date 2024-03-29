import { user } from './../user';
import { BaseDatabase } from './../data/BaseDatabase';
import { UserDatabase } from './../data/UserDatabase';


export class UserBusiness {

    createUser = async (input: any) => {
        try {
            const { name, email, password } = input

            if (!name || !email || !password) {
                throw new Error("Please fill all the fields");
            }

            if (email.indexOf("@") === -1) {
                throw new Error("Invalid Email");
            }

            if (password.length < 6) {
                throw new Error("Password must have at least 6 characters");
            }

            const id = Date.now().toString()
            const userDatabase = new UserDatabase

            await userDatabase.createUser({
                id,
                email,
                name,
                password
            })


        } catch (error: any) {
            throw new Error(error.message || "Error creating user. Please check your system administrator.");
        }
    }

    getAll = async (input: any) => {

        return await new UserDatabase().getAll()
    }

    deleteUser = async (input: {id:string}) => {
				
        if(!input.id){
            throw new Error("Insira um id!")
        }

return await new UserDatabase().deleteUser(input.id);
}
}



