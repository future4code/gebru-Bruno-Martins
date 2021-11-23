
//Exercícios de interpretação de código

//Exercicio 1
//A- 10 é 50
//b- Nada pois sem o console.log, nao vai ser transmitido, so a operação seria realizada.

//Exercicio 2
// A- ele relaciona o texto escrito pelo usuario com a cenoura voltando um verdadeiro ou falso. verdadeiro se tiver cenoura no texto, falso se nao tiver!

//B- i = true
// ii = true
// iii= false

//Exercícios de escrita de código

//Exercicio 1

// function eu(){
//     console.log("Eu sou Bruno, tenho 27 anos, moro em Minas Gerais e sou estudante.")

// }
// Exercicio B

// let nome = prompt("Qual o seu nome?")
// let idade = Number(prompt("Qual a sua idade?"))
// let endereco = prompt("Qual o seu endereço?")
// let profissao = prompt("Qual a sua profissão?")

// pessoa(nome, idade, endereco, profissao)

// function pessoa(nome, idade, endereco, profissao){
//     console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${endereco} e sou ${profissao}.`)
//     return
// }
//Exercicio 2
//A
//  let numero1 = Number(prompt("Digite um numero!"))
//  let numero2 = Number(prompt("Digite outro numero!"))

//console.log(numero(numero1,numero2))

// function numero(numero1, numero2){
//     let resultado = numero1 + numero2
//     return resultado
// }

// B

//   function numero(numero1, numero2){
//       let resultado = numero1 >= numero2
//       return resultado
//   }

// C
// let numero1 = Number(prompt("Digite um numero!"))
// console.log(numero(numero1))

// function numero(){
//     let resultado = numero1 % 2
//      resultado = resultado === 0
//      return resultado      
// }
// D
// let texto = prompt("Digite um texto")
// palavras(texto)
// function palavras(texto){
//     console.log(texto.length)
//     console.log(texto.toUpperCase())
// }

//exercicio 3
// let numero1 = Number(prompt("Digite um numero!"))
// let numero2 = Number(prompt("Digite outro numero!"))

// console.log("Números inseridos: ", numero1, numero2)
// console.log("Soma: ", adicao(numero1, numero2))
// console.log("Diferença: ", subtracao(numero1, numero2))
// console.log("Multiplicação: ", multiplicacao(numero1, numero2))
// console.log("Divisão: ",divisao(numero1, numero2))

// function adicao(numero1, numero2) {
//     return numero1 + numero2
// }

// function subtracao(numero1, numero2) {
//     return numero1 - numero2
// }

// function multiplicacao(numero1, numero2) {
//     return numero1 * numero2
// }

// function divisao(numero1, numero2) {
//     return numero1 / numero2
// }

//Desafio
//Exercicio 1
//A 
// let arrowFac = parametro => {
//     console.log(arrowFac)
// }

//B
// let arrowFac = (n1, n2) => {
//     const soma = n1 + n2
//     arrowFac = soma
// }
// arrowFac(10, 2)

// console.log(arrowFac)

// Exercicio 2

let pitagoras = (ca, co) =>{
    let valorCa = ca ** 2
    let valorCo = ca ** 2
    let igual = (valorCa + valorCo) **(1/2)
    return igual
}

console.log(pitagoras(15, 30))