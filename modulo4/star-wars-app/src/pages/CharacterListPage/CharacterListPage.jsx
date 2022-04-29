import axios from "axios"
import React, { useState } from "react"
import { BASE_URL } from "../../constants/urls"

function CharacterListPage() {
    const [characterList, setCharacterList] = useState([])

    function getCharacterList() {
        axios
        .get(`${BASE_URL}/people/`)
        .then((response) => setCharacterList(response.data.results))
        .catch((error) => console.log("Erro:", error.massage))
    }

    function showCharacter() {
        return characterList.map((character, index) => {
            return <p key={index}>{character.name}</p>
        })
    }

    return (
       <div>
            <h1>Lista de personagens</h1>
            {showCharacter()}
       </div>
    )
}

export default CharacterListPage