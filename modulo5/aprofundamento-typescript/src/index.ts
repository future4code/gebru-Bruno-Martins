// - Exercício 1
    
// O Typescript é uma linguagem um pouco mais criteriosa que o Javascript, então vamos conhecer um pouco desses critérios.
    
//     a) Crie uma variável minhaString do tipo `string` e atribua um valor a ela. Tente atribuir um número a esta variável. O que acontece?

// let minhaString: string = 24 erro, não posso atribuir um tipo numero a uma string
    
//     b) Crie uma variável meuNumero do tipo `number` e atribua um valor numérico. Como fazer para que essa variável também aceite strings? Ou seja, como criamos no typescript uma variável que aceite mais de um tipo de valor?
    
    //let meuNumero: number = 57 //
    //Podemos utilizar Uniom Type inserindo o |

    // let meuNumero: number | string = ''
    // meuNumero = 27
    // meuNumero = "27"

    // c) Agora crie um novo objeto. Este objeto é uma pessoa, e deve possuir três propriedades:
    
//     `nome`, que é uma string;
    
//     `idade`, que é um número;
    
//     `corFavorita`, que é uma string.
    
//     Crie mais três objetos, que também precisam ter apenas os campos definidos acima.
// Crie um **tipo** `Pessoa` para garantir que todos os objetos tenham os mesmos campos.

type Objeto = {
    nome: string
    idade: number
    corFavorita: ArcoIris
}

enum ArcoIris {
    VERMELHO = "Vermelho",
    ANIL = "Anil",
    AZUL = "Azul",
    VERDE = "Verde",
    AMARELO = "Amarelo",
    LARANJA = "Laranja"
}

const pessoa: Objeto = {
 nome: "Bruno",
 idade: 28,
corFavorita: ArcoIris.AZUL
}

const pessoa2: Objeto = {
    nome: "Kakau",
    idade: 36,
    corFavorita: ArcoIris.AMARELO
}

const pessoa3: Objeto ={
    nome: "Laura",
    idade: 23,
    corFavorita: ArcoIris.ANIL
}
    
// d) Modifique a propriedade `corFavorita` para que apenas seja possível escolher entre as cores do arco-íris. Utilize um `enum` para isso.

