// Exercício 2
    
// Crie uma aplicação Node que recebe uma string representando uma operação matemática
// e dois valores numéricos. O retorno deverá ser o resultado da operação selecionada 
// utilizando os 2 valores fornecidos.

const operacao = String(process.argv[2]) 
const valor = Number(process.argv[3])
const valor2 = Number(process.argv[4])

switch(operacao){
	case "add":
		console.log(valor + valor2)
		break;
	case "subt":
		console.log(valor - valor2)
		break;
    case "mult":
        console.log(valor * valor2)
        break;
    case "div":
        console.log(valor / valor2)
        break
}