// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  let altura = Number(prompt("Altura?"))
  let largura = Number(prompt("largura?"))
  let area = altura * largura 
  console.log(area)
  
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  let anoAtual = Number(prompt("Em que ano estamos?"))
  let anoDeNascimento = Number(prompt("Em que ano voce nasceu?"))

  let idade = anoAtual - anoDeNascimento
  
  console.log(idade)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  let nome = prompt("Qual é o seu nome?")
  let idade = prompt("Qual a sua idade?")
  let email = prompt("Qual o seu email?")
 
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const cor1 = prompt("Primeira cor?")
  const cor2 = prompt("Segunda cor?")
  const cor3 = prompt("terceira cor?")
  
  const todasCores = [cor1, cor2, cor3]
  
  console.log(todasCores)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  let palavra = prompt("Diga uma palavra")

  return(palavra).toUpperCase()
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  let espetaculo = Number(prompt("Valor do espetaculo do teatro?"))
  let ingresso = Number(prompt("Valor do ingresso"))
  let semPrejuizo = espetaculo / ingresso

  return semPrejuizo
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  let textoUm = prompt("Uma palavra")
  let textoDois = prompt("Outra palavra")
  
  const resultado1 = textoUm.length
  const resultado2 = textoDois.length

  return resultado1 === resultado2

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
    let array1 = [prompt("uma palavra ou numero")]
    let array2 = [prompt("outra palavra ou numero")]
    let array3 = [prompt("Outra palavra ou numero")]

   function array(array1, array2, array3){

    let resultado = [array1, array2, array3]
    return resultado[1]
  }

  
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}