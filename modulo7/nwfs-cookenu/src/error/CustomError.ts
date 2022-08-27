export class CustomError extends Error{
    constructor (statusCode:number, message:string){
     super(message)   
    }
}

export class InvalidRequest extends CustomError{
    constructor () {
        super(400, 'É necessario preencher todos os campos.')
    }
}

export class InvalidEmail extends CustomError{ 
    constructor(){
        super(400, "Email inválido")
    }
}

export class InvalidPassword extends CustomError{ 
    constructor(){
        super(400,"Senha deve conter 6 caracteres.")
    }
}

export class UserNotFound extends CustomError{ 
    constructor(){
        super(404, "Usuário não encontrado")
    }
}

export class Unauthorized extends CustomError{ 
    constructor(){
        super(401,"Usuário não authorizado, faça login novamente")
    }
} 
export class InvalidToken extends CustomError{ 
    constructor(){

        super(402, "É necessário passar o token no header authorization!")
    }
} 
export class InvalidId extends CustomError{ 
    constructor(){

        super(400, "É necessário passar o id da receita")
    }
}

export class InvalidName extends CustomError{ 
    constructor(){
        super(400, "Campo name inválido, é necessário passar ao menos 3 caracteres!")
    }
}