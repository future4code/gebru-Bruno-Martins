import axios from 'axios'
import React from 'react'


class CriarPlaylist extends React.Component {
  state = {
    inputname: ''
  }
handleInputName = (event) => {
  this.setState({inputname: event.target.value})
}

createPlaylist = () => {
  const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists'
  const body = {
    name: this.state.inputname
  }

  axios
  .post(url, body, {
    headers: {
      Authorization: 'bruno-martins-gebru'
    }
  })
  .then(res => {
    alert(`Playlist ${this.state.inputname} criada com sucesso.`)
    this.setState({inputname: ''})
  })
  .catch(err => alert(err.response.data.message))
}



 render() {

  return (
    <div>
      <h1>
          Criar Playlist
      </h1>
      <input
       placeholder='Insira nome' 
       value={this.state.inputname} 
       onChange={this.handleInputName}
      />
      <button onClick={this.createPlaylist}>Criar</button>
    </div>
  )
 }
}

export default CriarPlaylist
