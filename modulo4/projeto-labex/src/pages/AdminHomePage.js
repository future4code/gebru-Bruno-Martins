import axios from "axios"
import React, {useState, useEffect} from "react"
import { useNavigate, useParams } from "react-router-dom"
import { goBack, goCreateTripPage, goTripDetailsPage } from "../routes/coordinator"
import useRequestData from "../hooks/useRequestData";

export default function AdminHomePage() {
 const navigate = useNavigate()

 const params = useParams()

 const listTrips = useRequestData()

 const deletar = (delID) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/bruno-martins-gebru/trips/${delID}`
        const headers = {
                    headers: {
                   auth: localStorage.getItem("token")
      }
    }
            
        axios
    .delete(url, headers)
    .then(res => {
        window.location.reload(false)
      alert('Viagem Deletada.')
    })
    .catch(err => console.log(err.response))
  }

    const trips = listTrips.map((trip)=> {
        return <div>
        <p>{trip.name}</p>
        <button onClick={()=> deletar(trip.id)}>Apagar</button>
        </div>
    })


    // useEffect(()=> {
    //     deletar()
    // },[])

//  useEffect(()=> {
//      const URL = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/bruno-martins-gebru/trip/BjbMS1Bmqhcn1PleJYRM"
//     const headers = {
//         headers: {
//         auth: localStorage.getItem("token")
// //     }
// //     }

//     axios
//     .get(URL, headers)
//     .then((res)=>{
//         console.log(res.data)
//     })
//     .catch((err)=>{
//         console.log("erro", err.response)
//     })
//     },[])



//  useEffect(()=>{
//     const token = localStorage.getItem("token")
//     if(token === null) {
//         AdminHomePage(navigate)
//     }
//      },[navigate])



    return(
        <div>
            <button onClick={()=>goBack(navigate)}>Voltar</button>
            <button onClick={()=>goCreateTripPage(navigate)}>Criar Viagem</button>
            <button onClick={()=>goBack(navigate)}>Sair</button>
            {trips}
            
        </div>
    )
}