/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

alert("Boas vindas ao jogo Blackjack!")

if(confirm("Quer iniciar uma nova rodada")){
   let carta1 = comprarCarta()
   let carta2 = comprarCarta()
   let usuario = pegarValor(carta1) + pegarValor(carta2)
   if (confirm(`Quer comprar mais uma carta?  \n  Suas cartas: ${carta1 + naipes()} e ${carta2 + naipes()} = ${usuario}`)){
      let cartaExtra = comprarCarta()
      usuario += pegarValor(cartaExtra)
      alert(`Cartas do Usuario:  ${carta1 + naipes()} ${carta2 + naipes()} ${cartaExtra + naipes()} = ${usuario}`)
   }

   let carta3 = comprarCarta()
   let carta4 = comprarCarta()
   let computador = pegarValor(carta3) + pegarValor(carta4)
   alert(`Cartas do computador:  ${carta3 + naipes()} ${carta4 + naipes()} = ${computador}`)
   
   if (usuario < computador) {
      if (computador > 21) {
      alert("O usuario ganhou")   
      } else {
         alert("O computador ganhou!")
      }
   } else if (usuario === computador) {
      alert("Deu empate")
   }else {
      if (usuario > 21) {
         alert("O computador ganhou!")
      } else {
         alert("O usuario ganhou")
      }
   }
} else{
   alert("O jogo acabou")
}

function comprarCarta() {
   const cartas =  ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10,"J", "Q", "K"]
   const random = Math.floor(Math.random() * cartas.length)
   return cartas[random]
}

function naipes() {
   const naipes = ["♥", "♣", "♦", "♠"]
   const random = Math.floor(Math.random() * naipes.length)
   return naipes[random]
}

function pegarValor(valor) {
   switch (valor) {
      case 'A':
         return 11
         case 'J':
         case 'Q':
         case 'K':
            return 10
         default:
            return valor
   }
}