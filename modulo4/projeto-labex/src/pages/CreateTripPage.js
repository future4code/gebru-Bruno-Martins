import axios from "axios";
import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { goBack } from "../routes/coordinator";

export default function CreateTripPage() {
    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [planet, setPlanet] = useState("")
    const [date, setDate] = useState("")
    const [description, setDescription] = useState("")
    const [days, setDays] = useState("")

    const onChangeName = (event) => {
        setName(event.target.value)
    }

    const onChangePlanet = (event) => {
        setPlanet(event.target.value)
    }

    const onChangeDate = (event) => {
        setDate(event.target.value)
    }

    const onChangeDescription = (event) => {
        setDescription(event.target.value)
    }

    const onChangeDays = (event) => {
        setDays(event.target.value)
    }

    const createTrips = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/bruno-martins-gebru/trips"
        const body = {
            name: name,
            planet: planet,
            date: date,
            description: description,
            durationInDays: days
        }
        const headers = {
            headers: {
           auth: localStorage.getItem("token")
}
}

        axios
        .post(url, body, headers)
        .then((res)=>{
            setName("")
            setPlanet("")
            setDate("")
            setDescription("")
            setDays("")
            console.log("sucesso")
        })
        .catch((err)=>{
            console.log("error", err.response)
        })
    }
    
    console.log(name)
    console.log(planet)
    console.log(description)
    console.log(date)
    console.log(days)
    
    
    
    return(
        <div>
            <input placeholder="Nome" value={name} onChange={onChangeName}></input>
            <input type="" placeholder="Escolha planeta" value={planet} onChange={onChangePlanet}></input>
            <input type="date" value={date} onChange={onChangeDate}></input>
            <input placeholder="Descrição" value={description} onChange={onChangeDescription}></input>
            <input type="number" placeholder="Dias de viagem" value={days} onChange={onChangeDays}></input>
            <button onClick={()=>goBack(navigate)}>Voltar</button>
           <button onClick={createTrips}>Criar Viagem</button>
        </div>
    )
}