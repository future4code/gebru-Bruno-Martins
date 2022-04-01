import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { goAdminHomePage, goBack } from "../routes/coordinator";

export default function LoginPage() {
    const navigate = useNavigate()



    return(
        <div>
            <p>Para fazermos login como administrador</p>

            <input placeholder="Email"></input>
            <input placeholder="Senha"></input>
            <button onClick={()=>goBack(navigate)}>Voltar</button>
            <button onClick={()=>goAdminHomePage(navigate)}>Entrar</button>

        </div>
    )
}