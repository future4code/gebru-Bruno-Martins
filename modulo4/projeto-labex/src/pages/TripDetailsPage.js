import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { goBack } from "../routes/coordinator";

export default function TripDetailsPage() {
    const navigate = useNavigate()

    
    
    
    return(
        <div>
            <p>Para o administrador ver o detalhe de uma viagem específica, bem como os candidatos que aplicaram para ela</p>
            <h2>Viagem Pendente</h2>
            <button onClick={()=>goBack()}>Voltar</button>
            <h2>Candidatos Pendentes</h2>
            <h2>Candidatos Aprovados</h2>
        </div>
    )
}