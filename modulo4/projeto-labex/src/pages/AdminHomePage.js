import React, {useState, useEffect} from "react"
import { useNavigate, useParams } from "react-router-dom"
import { goBack, goCreateTripPage, goTripDetailsPage } from "../routes/coordinator"

export default function AdminHomePage() {
 const navigate = useNavigate()
 const params = useParams()


    return(
        <div>
            <p>Para o administrador ver a lista de viagens e poder deletá-las ou acessar o detalhe de cada uma delas</p>
            <button onClick={()=>goBack(navigate)}>Voltar</button>
            <button onClick={()=>goCreateTripPage(navigate)}>Criar Viagem</button>
            <button onClick={()=>goBack(navigate)}>Sair</button>
            <div>
                <button onClick={goTripDetailsPage(navigate)}> Exemplo detalhes das viagens</button>
            </div>
            
        </div>
    )
}