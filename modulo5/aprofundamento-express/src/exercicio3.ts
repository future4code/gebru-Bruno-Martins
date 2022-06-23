import { v4 as generateId } from "uuid";

export const toDos = [
    {
        "userId": generateId(),
        "id": generateId(),
        "title": "Estudar Golang.",
        "completed": true
    },
    {
        "userId": generateId(),
        "id": generateId(),
        "title": "Estudar interpretação.",
        "completed": true
    },
    {
        "userId": generateId(),
        "id": generateId(),
        "title": "Dormir.",
        "completed": false
    },
    {
        "userId": generateId(),
        "id": generateId(),
        "title": "Passear com os cachorros.",
        "completed": true
    }
]