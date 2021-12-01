//Exercícios de interpretação de código

//- 1 O codigo esta atribuindo o valores de "i" (valor de "i" abaixo de 5 ) é somando com array valor. valor a ser impresso é 10

//-2 19 21 23 25 27 30

// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let indexValue of lista.entries()) {
//   console.log(indexValue)
// }

//-3 *
//   **
//   ***
//   ****

//Exercícios de escrita de código

// 1
// const animais = Number(prompt("Quantos bichinhos de estimação você tem?"))
// let quantidadeAtual = 0

// if (animais === 0){
//   console.log("Que pena! Você pode adotar um pet!")
// }

// while(quantidadeAtual < animais){
//   let nome = prompt("Qual nome deles")
//   for(let i = 0; i < quantidadeAtual + 1; i++){
//   }
//   console.log(nome)
//   quantidadeAtual++
// }

// console.log(resultadoSoma)
//Exercicio 2

const original = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

// function todos (array) {
//     for(let i = 0; i < original.length; i++) {
//         console.log(original[i])
//         }
//     }
//     console.log(todos(original))
    

// for(let i = 0; i < original.length; i++){
//     console.log(original[i] / 10)
// }


// const pares = []
// for(let i = 0; i < original.length; i++){
//     if(original[i] % 2 === 0) {
//         pares.push(original[i])
//     }
// }
// console.log(pares)

// let array = []
// for(let i = 0; i < original.length; i++){
//     array.push(`O elemento do index i é: ${original[i]}`)
    
// }
// console.log(array)


// function encontraMaior(array) {
//     let maiorNumero = 0
//     for (let i = 0; i < array.length; i++){
//         const elemento = array [i];
//         if (elemento > maiorNumero) {
//             maiorNumero = elemento;
//         }
//     }
//     return maiorNumero
// }


// function menorNumero(menor) {
//     let menorNumero = Infinity
//     for(let i = 0; i < menor.length; i++) {
//         let item = menor[i]
//         if(item < menorNumero) {
//             menorNumero = item;
//         }
//     }
//     return menorNumero
// }

// console.log(`O maior número é ${encontraMaior(original)} e o menor é ${menorNumero(original)}`)



//EU BUSCA DE ACHAR SOLUÇAO, CONHECI ESSE COMANDO!
// UMA FORMA MAIS SIMPLES, SINTO QUE MINHAS DUVIDAS ESTAO SENDO ACUMULADAS, EU ENTENDO A MATERIA MAS AS PERGUNTAS PARECEM PROVA DE ENEM, AI NAO CONSIGO COLOCAR NO PAPEL.

// function encontraMaior(array){
//     return Math.max(...array);
// }

// function encontrarMenor(array){
//     return Math.min(...array)
// }

// console.log(`O maior número é ${encontraMaior(original)} e o menor é ${encontrarMenor(original)}`)