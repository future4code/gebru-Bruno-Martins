import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import useRequestData from "../hooks/useRequestData";
import { goBack, goApplicationFormPage } from "../routes/coordinator";

export default function ListTripsPage() {
    const navigate = useNavigate()
    const listTrips = useRequestData()
console.log(listTrips)

    const trips = listTrips.map((trip)=> {
        return <div>
        <p>Nome:{trip.name}</p>
        <p>Descrição: {trip.description}</p>
        <p>Planeta: {trip.planet}</p>planet
        <p>Duração: {trip.durationInDays}</p>
        <p>Data: {trip.date}</p>
        <p>====================================================================================</p>
        </div>
    })
    
    return(
        <div>
            <button onClick={()=>goBack(navigate)}>Voltar</button>
            <button onClick={()=>goApplicationFormPage(navigate)}>Inscrever</button>
            {trips}
        </div>
    )
}