import React, { useEffect, useState } from "react";
import {getCharacterDetails, getPlanetDetails} from "../../services/request"


const CharacterDetailPage = (props) => {

    const [details, setDetails] = useState({})
    const [planet, setPlanet] = useState({})

    useEffect(() => {
        getCharacterDetails(props.url, setDetails)
    }, [props.url])

    useEffect(() =>{
        getPlanetDetails(details.homeworld, setPlanet)
    }, [details.homeworld])


    return (
        <div>
           <h1>Detalhe de personagens</h1>
           {details.name && planet.name ?
            <div> 
            <p1>Nome: {details.name}</p1>
            <p1>    </p1>
            <p1>Planeta de origem: {planet.name}</p1>
            </div> :
            <p>Carregando...</p>}
           
           <button onClick={props.goTolistPage}>Voltar para lista de personagens</button>
        </div>
    )
}

export default CharacterDetailPage