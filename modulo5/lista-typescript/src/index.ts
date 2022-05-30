const aniversario = (nome:string, data:string)=>{

const nascimento : string[] = data.split("/")
return `Olá me chamo ${nome}, nasci no dia ${nascimento[0]} do mês de ${nascimento[1]} do ano de ${nascimento[2]}`
}

console.log(aniversario("bruno", "09/12/1993"))