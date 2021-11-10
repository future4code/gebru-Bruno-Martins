// Exercícios de interpretação de código

// Exercicio 1
// console.log(b) Vai mostrar 10
// Console.log(a, b) vai mostrar 10, 5 ja que no codigo foi alterado b = 5 pois let pode ter seu valor alterado

// Exercicio 2

// por ser let ela pode ter seu valor alterado ficando entao
// na console.log(a, b, c) fica aparecendo 10, 10, 10.

// Exercicio 3
// let horasTrabalhadaPorDia = prompt("Quantas horas você trabalha por dia?")
// let dinheiroPorDia = prompt("Quanto você recebe por dia?")
// let dinheiroPorHora = alert(`Voce recebe ${t/p} por hora`)

// Exercícios de escrita de código

// Exercicio 1
// let nome  Resposta A
// let idade  Resposta B
// console.log (typeof(nome, idade)) Resposta C undefined
// Resposta D, por nao atribuir valor as variaveis ela se torna undefined 

// Resposta E
// const nome = "Bruno"
// const idade = 27
// console.log (prompt ("Qual seu nome"))
// console.log (prompt ("Qual a sua idade?"))

// Resposta F
// console.log(typeof nome)
// console.log(typeof idade) // Apos definir um valor das variaveis pode se dizer um tipo delas (String/Number)

// Resposta G
// console.log("Olá "+ nome+ ", você tem "+ idade+  " anos.")

// Exercicio 2

// let jogouFutebol = prompt("Jogou futebol hoje?")
// console.log(jogouFutebol)

// let fezGol = prompt("Fez gol?")
// console.log(fezGol)

// let camisaDoTime = prompt("Usou a camisa do seu time?") 
// console.log(camisaDoTime)

// console.log("Jogou futebol hoje?", jogouFutebol)
// console.log("Fez gol?",fezGol)
// console.log("Usou a camisa do seu time?", camisaDoTime)

// Exercicio 3

let a = prompt("digite um valor para A")
let b = prompt("Digite um valor para B")
let c = prompt("valor de c", b)
b = a
a = c


console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10

