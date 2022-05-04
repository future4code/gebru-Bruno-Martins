import React from "react";

function CharacterDetailPage(props) {
    return (
        <div>
           <h1>Detalhe de personagens</h1> 
           <p1>{props.url}</p1>
        <button onClick={props.goTolistPage}>Voltar para lista de personagens</button>
        </div>
    )
}

export default CharacterDetailPage