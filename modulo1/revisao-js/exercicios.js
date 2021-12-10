// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
  return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    
array.sort(function(a, b) {
    return a - b;
})

return array
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  let retorno = array.filter(pares => (pares % 2) === 0)
  return retorno
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
 let retorno = array.filter(pares => (pares % 2) === 0).map(pares => (pares ** 2))
 return retorno
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
let maiorNumero = 0
for (let i = 0; i < array.length; i++){
  const elemento = array [i];
  if (elemento > maiorNumero) {
    maiorNumero = elemento;
  }
}
  return maiorNumero
}
  

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
if (num1 > num2) {
  
}
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
 if(ladoA !== ladoB && ladoB !== ladoC && ladoA !== ladoC) {
   return "Escaleno"
 } else if(ladoA === ladoB && ladoB === ladoC && ladoA ===ladoC){
   return "Equilátero"
  } else { (ladoA !== ladoB && ladoB !== ladoC && ladoA === ladoC || ladoB) 
    return "Isósceles"
 }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
  
  let novoObjeto = {
    ...pessoa,
    nome: "ANÔNIMO",
  }
  return novoObjeto
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   let pessoasAutorizadas = pessoas.filter(pessoa => (pessoa.altura >= 1.5 && pessoa.idade > 14 && pessoa.idade < 60))
   return pessoasAutorizadas
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  let pessoasNaoAutorizadas = pessoas.filter(pessoa => (pessoa.altura <= 1.5 || pessoa.idade <= 14 || pessoa.idade > 60))
  return pessoasNaoAutorizadas
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  return consultas.sort((a, b) => a.nome.localeCompare(b.nome))
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}