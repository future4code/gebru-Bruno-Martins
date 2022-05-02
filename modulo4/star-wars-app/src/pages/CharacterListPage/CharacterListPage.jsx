import axios from "axios"
import React, { useState, useEffect } from "react"
import { BASE_URL } from "../../constants/urls"
import { CharacterCard } from "./styled"

const CharacterListPage = () => {
    const [characterList, setCharacterList] = useState([])


        const getCharacterList = () => {
        axios
        .get(`${BASE_URL}/people/`)
        .then((response) => setCharacterList(response.data.results))
        .catch((error) => console.log("Erro:", error.massage))
    }
 

    useEffect(() => {
        getCharacterList()
   }, [])
    
       const showCharacters = () => {
        return characterList.map((character, index) => {
            return <CharacterCard key={index}>{character.name}</CharacterCard>
        })
    }

    return (
       <div>
            <h1>Lista de personagens</h1>
            {showCharacters()}
       </div>
    )
}

export default CharacterListPage