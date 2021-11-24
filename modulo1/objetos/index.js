//Exercícios de interpretação de código
//Exercicio -1

//"Matheus Nachtergaele" Buscou 
//"Virginia Cavendish"
//canal: "Globo", horario: "14h"

//Exercicio -2
//A nome: 'Juca', idade: 3, raca: 'SRD'
// nome: 'Juba', idade: 3, raca: 'SRD'
// nome: 'Jubo', idade: 3, raca: 'SRD'

//B Faz um clone do objeto! Muito pra fazer alteraçoes sem alterar o objeto clonado!

//Exercicio 3
//A false
//indefinido

//B false porque buscou no objeto pessoa o parametro backender
// indefinido porque no objeto nao possui nenhum parametro sobre altura

//Exercícios de escrita de código
//1A
const pessoa = {
    nome: "Igor",
    apelidos: ["Zumbi", "Mumia", "Lobisomem"]
}

// function apelidos (pessoa) {

// console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]} ou ${pessoa.apelidos[2]}`)

// }
// apelidos(pessoa)

//B

// const pessoa2 = {
//     ...pessoa,
//     apelidos: ["Sentinela", "Mestre", "Boss"]
// }

// function apelidos (pessoa2) {
//     console.log(`Eu sou ${pessoa2.nome}, mas pode me chamar de: ${pessoa2.apelidos[0]}, ${pessoa2.apelidos[1]} ou ${pessoa2.apelidos[2]}`)
// }

// apelidos(pessoa2)


//exercicio 2
//A
// const objeto = {
//     nome: "Gael",
//     idade: 20,
//     profissao: "programador",
// }


// const objeto2 = {
//     nome: "Kayn",
//     idade: 27,
//     profissao: "Jornalista"
// }


//B
// function pessoa (objeto, objeto2) {
//     console.log(`${objeto.nome}, ${objeto.nome.length}, ${objeto.idade}, ${objeto.profissao}, ${objeto.profissao.length}`)
//     console.log(`${objeto2.nome}, ${objeto2.nome.length}, ${objeto2.idade}, ${objeto2.profissao}, ${objeto2.profissao.length}`)
// }
// pessoa(objeto, objeto2)


//Exercicio 3
// //A
// const Carrinho = []

// //B

// const Sacolao = {
//     fruta: "banana",
//     disponibilidade: true,
// }


// const sacolao2 = {
//     Fruta: "Manga",
//     disponibilidade: false,

// }

// const sacolao3 = {
//     fruta: "Uva",
//     disponibilidade: true
// }

// //c
// Carrinho.push(Sacolao, sacolao2, sacolao3)
// console.log(Carrinho)

// Desafio 
//1
// const nome = prompt("Qual o seu nome?")
// const idade = prompt("Qual a sua idade?")
// const profissao = prompt("Qual a sua profissao?")

// const dados = {
//     nome: nome,
//     idade: idade,
//     profissao: profissao,
// }

// console.log(`${dados.nome}, ${dados.idade}, ${dados.profissao}`)
// console.log(dados)

// function dados(){

// }

// const primeiroFilme = {
//     Lancamento: 2013,
//     filme: "Circulo de fogo",
// }

// const segundoFilme = {
//     lancamento: 2006,
//     filme: "Todo mundo em panico"
// }

// Exercicio 3
// //A
// const Carrinho=[]

//B

// const fruta1 = {
//     fruta: "banana",
//     disponibilidade: true,
// }


// const fruta2 = {
//     Fruta: "Manga",
//     disponibilidade: false,

// }

// const fruta3 = {
//     fruta: "Uva",
//     disponibilidade: true
// }

// C
// function sacolao (fruta) {
//     Carrinho.push(fruta)

// }

// sacolao([fruta1, fruta2, fruta3])

//D
// console.log(Carrinho)