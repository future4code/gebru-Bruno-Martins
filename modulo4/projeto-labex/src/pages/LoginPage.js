import axios from "axios";
import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { goAdminHomePage, goBack } from "../routes/coordinator";
import AdminHomePage from "./AdminHomePage";

export default function LoginPage() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const onChangeEmail = (event) => {
        setEmail(event.target.value)
    }

    const onChangePassword = (event) => {
        setPassword(event.target.value)
    }



    const goLogin = () => {
        console.log(email, password)
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/bruno-martins-gebru/login" 
        const body = {
            email: email,
            password: password
        }
        axios
        .post(url, body)
        .then((res)=>{
            localStorage.setItem("token", res.data.token)
            goAdminHomePage(navigate)
        })
        .catch((err)=>{
            console.log("erro>", err.response)
        })
    }


    return(
        <div>
            <p>Para fazermos login como administrador</p>

            <input placeholder="Email" type="email" value={email} onChange={onChangeEmail}></input>
            <input placeholder="Senha" type="password" value={password} onChange={onChangePassword}></input>
            <button onClick={()=>goBack(navigate)}>Voltar</button>
            {/* <button onClick={()=>goAdminHomePage(navigate)}>Entrar</button> */}
            <button onClick={goLogin}>Entrar</button>

        </div>
    )
}