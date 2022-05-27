import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { goBack } from "../routes/coordinator";

export default function ApplicationFormPage() {
    const navigate = useNavigate()









    return(
        <div>
            <p>Para o usuário se candidatar à viagens, página que vai ter o formulário de inscrição</p>
            <button onClick={()=>goBack(navigate)}>Voltar</button>
            <button>Enviar Cadastro</button>
        </div>
    )
}