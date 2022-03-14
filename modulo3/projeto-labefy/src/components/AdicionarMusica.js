import React from 'react'
import axios from 'axios'

class AdicionarMusica extends React.Component {
  state = {
    inputName: '',
    inputArtist: '',
    inputUrl: ''
  }
  
  handleInputName = (event) => {
  this.setState({inputName: event.target.value})
  }
  
  handleInputArtist = (event) => {
    this.setState({inputArtist: event.target.value})
  }
  
  handleInputUrl = (event) => {
    this.setState({inputUrl: event.target.value})
  }

  addTrackToPlaylist = () => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/d4d094e4-efa9-418f-8aa0-7415df50ab93/tracks`
    const body = {
      name: this.state.inputName,
      artist: this.state.inputArtist,
      url: this.state.inputUrl
    }
    axios
    .post(url, body, {
      headers: {
        Authorization: 'bruno-martins-gebru'
      }
    })
    .then(res => console.log(res))
    .catch(err => console.error(err.response))
  }


 render(){
   console.log(this.state)
  return (
    <div>
      <h1>
          Adicionar Musicas
      </h1>
        <div>
        <input placeholder='Insira nome da musica' value={this.state.inputName} onChange={this.handleInputName}></input>
        <input placeholder='Cantor ou Banda' value={this.state.inputArtist} onChange={this.handleInputArtist}></input>
        <input placeholder='Link da musica' value={this.state.inputUrl} onChange={this.handleInputUrl}></input>
        <button onClick={this.addTrackToPlaylist}>Cadastrar</button>
        </div>
    </div>
  )
 }
}

export default AdicionarMusica
