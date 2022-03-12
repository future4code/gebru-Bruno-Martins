import React from 'react'
import axios from 'axios'
import styled from 'styled-components'

const PlaylistCard = styled.div`
display: flex;
justify-content: space-between;
margin: 10px;
padding: 10px;
width: 400px;
`


class VisualizarPlaylist extends React.Component {
state = {
  allPlaylist: []
}

  componentDidMount() {
    this.getAllPlaylists()
  }

  getAllPlaylists = () => {
    const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists'

    axios
    .get(url, {
      headers: {
        Authorization: 'bruno-martins-gebru'
      }
    })
    .then(res => {
      this.setState({allPlaylist: res.data.result.list})
    })
    .catch(err => console.error(err.response))
  }

  deletePlaylist = (playlistId) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}`
    axios
    .delete(url, {
      headers: {
        Authorization: 'bruno-martins-gebru'
      }
    })
    .then(res => {
      alert('Playlist Deletada.')
      this.getAllPlaylists()
    })
    .catch(err => console.log(err.response))
  }


 render(){
  const renderAllPlaylists = this.state.allPlaylist.map((playlist) => {
    return <PlaylistCard key={playlist.id}>
      <li>{playlist.name}</li>
      <button onClick={() => this.deletePlaylist(playlist.id)}>Apagar</button>
    </PlaylistCard>
  })

  return (
    <div>
      <h1>
       Visualizar Playlist
      </h1>
      <h3>{renderAllPlaylists}</h3>
    </div>
  )
 }
}

export default VisualizarPlaylist
