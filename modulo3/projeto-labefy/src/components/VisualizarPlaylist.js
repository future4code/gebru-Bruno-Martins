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
  allPlaylist: [],
  click: 'false'
  
}

addTrackToPlaylist = (idMusic) => {
  const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${idMusic}/tracks`
  const body = {
    name: '',
    artist: '',
    url: ''
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

getPlaylistTracks = (id) => {
  const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`
  axios
  .get(url, {
    headers: {
      Authorization: 'bruno-martins-gebru'
    }
  })
  .then((res) => {
    this.setState(
      {
        click: 'true'
      }
    )
    this.setState({allPlaylist: res.data.result.tracks})
  })

  // .then(res => console.log(res.data.result.tracks))
  .catch(err => console.error(err.response))
}

  componentDidMount() {
    this.getAllPlaylists();
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
 

  return (
    <div>
      {this.state.allPlaylist.map((play) => {
        if (this.state.click === 'true') {
          return (

            <div key={play.id}>
              <label 
              onClick={() => this.getPlaylistTracks(play.id)}
              >
              <p>{play.name} - {play.artist}</p>
              <audio controls={"controls"} type={"audio/mp3"}>
              <source src={play.url}/>
               </audio>
              </label>
            </div>
          )
        } else if (this.state.click === 'false') {
          return (
            <PlaylistCard>
            <li>{play.name}</li>
            <button onClick={() => this.deletePlaylist(play.id)}>Apagar</button>
            <button onClick={() => this.getPlaylistTracks(play.id)}>Detalhes</button>
          </PlaylistCard>
          )
        }
      })}
    </div>
  )
 }
}

export default VisualizarPlaylist
