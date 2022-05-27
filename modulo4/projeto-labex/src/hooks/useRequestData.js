import axios from "axios";
import React, {useState, useEffect} from "react";

export default function useRequestData() {
    const [listTrips, setListTrips] = useState([])



    useEffect(()=>{
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/bruno-martins-gebru/trips" 
    axios
    .get(url)
    .then((res)=> setListTrips(res.data.trips))
    .catch((err)=>{
        console.log("ERROR", err.response)
    })

    },[])

    return listTrips
}