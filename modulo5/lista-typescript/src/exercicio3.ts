type Filme = {
    nome: string
    anoLancamento: number
    tipo : Genero
    nota?: number
}

enum Genero {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

const digaFilme = (nome:string, anoLancamento:number, tipo:Genero, nota?:number) => {
    if(nota === undefined){
       
        return `nome: ${nome}, anoLancamento: ${anoLancamento}, genero: ${tipo}`

    } else {
        return `nome: ${nome}, anoLancamento: ${anoLancamento}, genero: ${tipo}, pontuação ${nota}`
    }
    
}



console.log(digaFilme("Corra que a polícia vem aí", 1988, Genero.COMEDIA))
