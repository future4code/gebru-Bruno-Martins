import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { goBack } from "../routes/coordinator";

export default function CreateTripPage() {
    const navigate = useNavigate()
    
    
    
    
    
    return(
        <div>
            <p>Formulário para o administrador criar uma nova viagem</p>
            <input placeholder="Nome"></input>
            <input type="" placeholder="Escolha planeta"></input>
            <input type="date"></input>
            <input placeholder="Descrição"></input>
            <input type="number" placeholder="Dias de viagem"></input>
            <button onClick={()=>goBack(navigate)}>Voltar</button>
           <button>Criar Viagem</button>
        </div>
    )
}