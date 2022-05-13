import React, { useEffect, useState } from "react";
import {getCharacterDetails, getPlanetDetails} from "../../services/request"
import { CharacterPerson, Container } from "./styled";


const CharacterDetailPage = (props) => {

    const [details, setDetails] = useState({})
    const [planet, setPlanet] = useState({})

    useEffect(() => {
        getCharacterDetails(props.url, setDetails)
    }, [props.url])

    useEffect(() =>{
        getPlanetDetails(details.homeworld, setPlanet)
    }, [details.homeworld])

    //CharacterPerson
    return (
        <Container>
           <h1>Detalhe de personagens</h1>
           {details.name && planet.name ?
            <CharacterPerson> 
            <p1>Nome: {details.name}</p1>
            <p1>    </p1>
            <p1>Planeta de origem: {planet.name}</p1>
            </CharacterPerson> :
            <p>Carregando...</p>}
           <div>
               <button onClick={props.goTolistPage}>Voltar</button>
           </div>
        </Container>
    )
}

export default CharacterDetailPage