import { v4 as generatorId } from 'uuid'

export type Produtos = {
    id:string
    name:string
    price:number
}

export const produtos:Produtos[] = [
    {
        "id": generatorId(),
        "name": "Fralda P",
        "price": 23
    },
    {
        "id": generatorId(),
        "name": "Fralda M",
        "price": 28
    },
    {
        "id": generatorId(),
        "name": "Fralda G",
        "price": 32
    }
]