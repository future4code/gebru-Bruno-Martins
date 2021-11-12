// Exercícios de interpretação de código

// Exercício 1
// let resultado = bool1 && bool2 Reasultado false
// resultado = bool1 && bool2 && bool3 Fazendo/ true && false && !bool2/ false && true / Resultado é False
// resultado = !resultado && (bool1 || bool2) Fazendo/ !resultado && (True || False)/ !resultado && True/ True && true / Reultado é true
// console.log("d. ", typeof resultado) Resultado undefined

// Exercício 2
// O valor obtido pelo prompt é uma variavel String, string nao soma.

//Exercicio 3
// let primeiroNumero = Number(prompt( " Digite um numero "));
// let segundoNumero = Number(prompt ("Digite outro numero!"));

// const soma = primeiroNumero + segundoNumero

// console.log (soma) 

//Exercícios de escrita de código

// Exercicio 1

// let idade = Number(prompt("Qual a sua idade?"))
// let idadeAmigo = Number(prompt("Qual a idade do seu melhor amigo(a)?"))
// console.log("Sua idade é maior do que a do seu melhor amigo?",idade > idadeAmigo)
// console.log("A diferença de idade e:",idade - idadeAmigo)

//Exercicio 2
// let numeroPar = Number(prompt("Insira numero Par"))
// console.log(numeroPar % 2)

// Console sempre me retorna 0 se eu duvido por 2 um numero par
// console sempre me retorna 1 se eu divido por 2 um numero impar

// Exercicio 3

// let idadeAno = Number(prompt("Em que ano voce nasceu?"))
// let resultadoMeses = (2021 - idadeAno) * 12
// let resultadoDias = resultadoMeses * 365
// let horas = resultadoDias * 24
// console.log("Sua vida em meses: ", resultadoMeses, " meses")
// console.log("Sua vida em dias: ", resultadoDias, " dias")
// console.log("Sua vida em horas: ", horas, " horas")

//Exercicio 4

// let numeroUm = Number(prompt("Escolha o primeiro numero!"))
// let numeroDois = Number(prompt("Agora o segundo!"))

// console.log("O primeiro numero é maior que segundo? ", numeroUm > numeroDois)
// console.log("O primeiro numero é igual ao segundo? ", numeroUm === numeroDois) 
// console.log("O primeiro numero é divisível pelo segundo? ", numeroUm % numeroDois ===0)
// console.log("O segundo numero é divisível pelo primeiro? ", numeroDois % numeroUm ===0)

//Desafio
//Exercicio 1

// let kelvin = (77 - 32)*(5/9) + 273.15
// console.log("O valor de 77°F convertido para kelvin é: ", kelvin)

// let fahrenheit= (80)*(9/5) + 32
// console.log("O valor de 80°C convertido em fahrenheit é: ", fahrenheit)
// // Resposta Da C fahrenheit = (30)*(9/5) + 32
// let celsius = Number(prompt("insira o valor em graus Celsius"))
// fahrenheit = celsius*(9/5) + 32
// kelvin = (fahrenheit - 32)*(5/9) + 273.15
// console.log("O Valor de ", celsius + "°C convertido para fahrenheit é:  ", fahrenheit,"e o valor em kelvin é: ", kelvin)

//Exercicio 2

// let consumo = Number(prompt("Insira a quantidade de Quilowatts consumido?"))
// let desconto = Number(prompt("Insira o valor de deconto"))
// const valor = 0.05
// let total = consumo * valor
// let resultado = total - (total * (desconto / 100))
// console.log("O valor total é R$", total)
// console.log("O valor total com desconto é R$", resultado)

// Exercicio 3
// console.log("20lb equivalem a ", 20 /  2.2046, "kg")
// console.log("10.5oz equivalem a ", 10.5 / 35.274, "kg")
// console.log("100mi equivalem a ", 100 * 1609, "m")
// console.log("50ft equivalem a ", 50 / 3.281, "m")
// console.log("103.56gal equivalem a ", 106.56 * 3.785, "l")
// console.log("450 xic equivalem a ", (450 * 6) / 25, "l")

// let mi = Number(prompt("Insira o valor de milha"))
// console.log(mi +"mi equivalem a ", mi * 1609, "m")