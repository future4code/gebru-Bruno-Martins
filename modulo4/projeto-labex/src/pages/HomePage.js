import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import {goListTripsPage, goLoginPage} from "../routes/coordinator"

export default function HomePage() {
    const navigate = useNavigate()
    
    
    
    return(
        <div>
            <p>Para o usuário escolher entre Área Administrativa e Lista de Viagens</p>
            <button onClick={()=>goListTripsPage(navigate)}>Viagens</button>
            <button onClick={()=>goLoginPage(navigate)}>Login</button>
        </div>
    )
}