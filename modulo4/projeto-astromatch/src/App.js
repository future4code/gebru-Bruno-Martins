import axios from "axios";
import React, {useState, useEffect} from "react";
import styled from "styled-components";

export default function App() {
  const [photo, setPhoto] = useState('')
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [age, setAge] = useState('')

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
    })  
    .catch(err => console.log(err.response.data))
  }

  console.log(`Nome: ${name}`)
  console.log(`Descrição: ${description}`)
  console.log(`Foto: ${photo}`)
  console.log(`Idade: ${age}`)
  return (
    <div>
      <div>
        <img src={photo} height={300} width={300}></img>
        <h2></h2> {name}, {age}
        <h4></h4> {description}
      </div>
<button>X</button>
<button onClick={getProfileToChoose}>O</button>
    </div>
  );
}
