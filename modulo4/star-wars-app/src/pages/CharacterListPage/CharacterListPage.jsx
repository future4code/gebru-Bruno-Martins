import React, { useState, useEffect } from "react"
import { DivCards, CharacterCard, Container, Text } from "./styled"
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
        <Container>
            <Text>
                <h1>Personagens</h1>
            </Text>
            <DivCards>
                {showCharacters()}
            </DivCards>
        </Container>
    )
}

export default CharacterListPage