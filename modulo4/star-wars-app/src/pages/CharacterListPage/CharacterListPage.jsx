import React, { useState, useEffect } from "react"
import { BagImg, CharacterCard } from "./styled"
import {getCharacterList} from "../../services/request"

const CharacterListPage = (props) => {
    const [characterList, setCharacterList] = useState([])

    useEffect(() => {
        getCharacterList(setCharacterList)
   }, [])
    
       const showCharacters = () => {
        return characterList.map((character, index) => {
            return <CharacterCard onClick={() => props.goToDetailsPage(character.url)} key={index}>{character.name}</CharacterCard>
        })
    }

    return (
       <div>
           <BagImg>
            <h1>Lista de personagens.</h1>
            {showCharacters()}
            </BagImg>
       </div>
    )
}

export default CharacterListPage