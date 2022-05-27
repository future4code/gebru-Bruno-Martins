// - Exercício 2
    
//     Observe a função a seguir, escrita em JavaScript:
function obterEstatisticas(numeros: number[]):{} {

    const numerosOrdenados: number[] = numeros.sort(
        (a, b) => a - b
    )

    let soma:number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas:{maior:number, menor:number, media:number} = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

// a) Quais são as entradas e saídas dessa função? Copie a função para um arquivo .ts
//  e faça a tipagem desses parâmetro

// b) Quais outras variáveis compõem essa função? Explicite a tipagem de todas elas 



// c) Crie um type chamado amostra de dados, isto é, um objeto com as propriedades numeros
//  e obterEstatisticas**. Abaixo, temos um exemplo de objeto desse tipo, declarado em JavaScript:
// const amostraDeIdades = {

//     numeros: [21, 18, 65, 44, 15, 18],

//     obterEstatisticas: (numeros) => {...}
// }

type ObterEstatisticas = {
    numeros: number[],
    obterEstatisticas(numeros: number[]):{}
}
