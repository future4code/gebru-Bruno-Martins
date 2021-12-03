//Exercícios de interpretação de código
//A objeto 0
    //  apelido: "Mandi"
    //  nome: "Amanda Rangel",

    //  objeto 1
    //  apelido: "Laura"
    //  nome: "Laís Petra" 

    //  objeto 2
    //  apelido: "Chijo"
    //  nome: "Letícia Chijo",
  
// vai ser impresso tambem 3 arrays cada um array escrito todas as informações da conts usuario com os indices!

// 2 mapeou todos os novos dos usuarios na array, é os retornou!
// Amanda Rangel, Laís Petra, Letícia Chijo

// 3 ele filtrou todo usuario que nao tinham apelidos de "chijo" ( que era diferente de "chijo")
// retornando
    //  nome: "Amanda Rangel", apelido: "Mandi"
    //  nome: "Laís Petra", apelido: "Laura" 
   

    //Exercícios de escrita de código

//exercicio 1

// const pets = [
//     { nome: "Lupin", raca: "Salsicha"},
//     { nome: "Polly", raca: "Lhasa Apso"},
//     { nome: "Madame", raca: "Poodle"},
//     { nome: "Quentinho", raca: "Salsicha"},
//     { nome: "Fluffy", raca: "Poodle"},
//     { nome: "Caramelo", raca: "Vira-lata"},
// ]

// const nomesDoguinhos = pets.map((item) =>{
//     return item.nome
// })
// console.log('Nomes dos cachorros:', nomesDoguinhos)

// const salsicha = pets.filter((item, index, array) =>{
//     return item.raca === "Salsicha"
// })

// console.log('Cachorros salsicha', salsicha)

// const desconto = pets.filter(function(pets) {
//     if (pets.raca === "Poodle") {
//         console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a ${pets.nome}`)

//     }
// })

// console.log(desconto)

// Exercicico 2
// const produtos = [
//     { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
//     { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
//     { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
//     { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
//     { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
//     { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
//     { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
//     { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
//     { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
//     { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
//  ]

// const nomeitem = produtos.map((item) => {
//     return item.nome
// })

// console.log('Produtos', nomeitem)

// const desconto = produtos.map((item, index, array) =>{
//     return{nome:item.nome, preco:(item.preco * 0.95).toFixed(2)}
// })
// console.log('Produtos com Desconto de 5%', desconto)

// const bebidas = produtos.filter((item, index, array) =>{
//     return item.categoria === "Bebidas"
// })
// console.log('Bebidas', bebidas)

// const palavras = produtos.filter((item, index, array) => {
//     return item.nome.includes("Ypê")
// })

// console.log('Produtos Ypês', palavras)

// let compre = produtos.filter(item => item.nome.includes("Ypê")).map(item => console.log(`Compre ${item.nome} por R$ ${item.preco}.`))
