//Exercícios de interpretação de código

//Exercicio 1
// A- o codigo recebe um numero do usuario é retorna o  restante da divisão dos dois. retornando "Passou no teste ou Não passou no teste"
//B- Numeros pares
//C- Numeros impar

//Exercicio 2
//A- consultar o preço da fruta do sacolão!
//B- O preço da fruta Maçã é R$ 2.25
//C- O preço da fruta Pêra é R$ 5

//Exercicio 3
//A- Recolhendo um numero do usuario!
//B- se ele escolher numero 10 sera impresso "Esse número passou no teste".Qualquer numero menor ou igual a 0 o codigo dara erro!
//C-ele usou let pra devolver uma mensagem! deveria ter usado else numero < 0 para retornar a mensagem "Essa mensagem é secreta!!!"

//Exercícios de escrita de código

//Exercicio 1

// const idade = Number(prompt("Vamos verificar se voce ja pode tirar carteira para dirigir! Digite a sua idade?"))

// if (idade < 18) {
//     console.log ("Você não iniciar o processo para tirar habilitaçâo.")
// } else if(idade >= 18) {
//     console.log("Você ja pode começar a tirar carteira, para ai sim começar a dirigir!")
// } else {
//     console.log("Digite um numero!" )
// }
//Exercicio 2

// const turnoEstudo = prompt("Digite o Turno que voce estuda! (M para Matiturno), (V para Vespertino), (N para Noturno).").toLocaleLowerCase()

// if(turnoEstudo === "m") {
//     console.log("Bom Dia!")
// } else if(turnoEstudo === "v") {
//     console.log("Boa Tarde!")
// }  else if (turnoEstudo === "n"){
//     console.log("Boa Noite!")
// } else {
//     console.log("Digite a inicial do seu turno (M, V ou N).")

// }

//exercicio 3

// const turnoEstudo = prompt("Digite o Turno que voce estuda! (M para Matiturno), (V para Vespertino), (N para Noturno).").toLocaleLowerCase()

// switch(turnoEstudo) {
//     case "m":
//         console.log("Bom Dia!")
//         break
//     case "v":
//         console.log("Boa Tarde!")
//         break
//     case "n":
//         console.log("Boa Noite!")
//         break
//     default:
//         console.log("Digite a inicial do seu turno (M, V ou N).")
//         break
// }

//Exercicio 4
// const generoFilme = prompt("Qual o genero do filme?")
// const valorIngresso = Number(prompt("Qual o valor do ingresso?"))
// const lanche = prompt("Qual lanchinho voce vai comprar?")

// if(generoFilme != "fantasia" || valorIngresso > 15 ) {
//     console.log("escolha outro filme :(")
// } else {
//     console.log(`Bom filme! Aproveite o seu ${lanche}`)

// }
// complementando desafio 1
