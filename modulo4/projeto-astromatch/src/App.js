import axios from "axios";
import React, {useState, useEffect} from "react";
import styled from "styled-components";
import Matches from "./components/Matches";

export default function App() {
  const [photo, setPhoto] = useState('') 
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [age, setAge] = useState('')
  const [id, setId] = useState('')
  const [tela, setTela] = useState('')


  useEffect(() => {
    getProfileToChoose()
  }, [])

  
  const getProfileToChoose = () => {
    axios
    .get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/person')
    .then((res) => {
      setName(res.data.profile.name)
      setDescription(res.data.profile.bio)
      setAge(res.data.profile.age)
      setPhoto(res.data.profile.photo)
      setId(res.data.profile.id)
    })  
    .catch(err => console.log(err.response.data))
  }


  const choosePerson = () => {
const url = `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/choose-person`
    const body = {
      id: id,
      choice: true
    }
    axios
    .post(url, body)
    .then(res => console.log(res.data))
    .catch(err => console.log(err.response.data))
  }


  const getMatches = () => {
    axios
    .get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/matches`)
    .then((res) => {
      console.log(res.data.matches.name)
      console.log(res.data.matches.photo)
      console.log(res.data)})
    .catch(err => console.log(err.response.data))
  }
  // const clearApi = () => {
  //   axios
  //   .put(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/clear`)
  //   .then((res) =>{
  //     console.log(res.data.message)
  //   })
  //   .catch(err => console.log(err.response.data))
  // }
  
  return (
    <div>
      <div>
        <img src={photo} height={300} width={300}></img>
        <h2></h2> {name}, {age}
        <h4></h4> {description}
      </div>
<button onClick={getProfileToChoose}>X</button>
<button onClick={choosePerson}>O</button>
<button onClick={getMatches}>Match</button>
<button>Resert</button>
    </div>
  );
}
