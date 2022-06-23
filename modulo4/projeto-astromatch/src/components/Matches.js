import axios from "axios";
import React, {useState, useEffect} from "react";

export default function Matches() {


  const getMatches = () => {
    axios
    .get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/matches`)
    .then(res => console.log(res.data))
    .catch(err => console.log(err.response.data))
  }
  
  return (
    <div>
        Ola
    </div>
  );
}
