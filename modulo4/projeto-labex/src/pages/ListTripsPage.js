import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { goBack, goApplicationFormPage } from "../routes/coordinator";

export default function ListTripsPage() {
    const navigate = useNavigate()

    
    
    return(
        <div>
            <p>Para vermos todas as viagens</p>
            <button onClick={()=>goBack(navigate)}>Voltar</button>
            <button onClick={()=>goApplicationFormPage(navigate)}>Inscrever</button>
        </div>
    )
}