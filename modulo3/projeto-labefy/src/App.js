import React from 'react'
import AdicionarMusica from './components/AdicionarMusica'
import CriarPlaylist from './components/CriarPlaylist'
import VisualizarPlaylist from './components/VisualizarPlaylist'

class App extends React.Component {
  state = {
    telaAtual: 'criarplaylist'
  }

  escolherTela = () => {
    switch (this.state.telaAtual) {
      case 'criarplaylist':
        return <CriarPlaylist />
      case 'adicionarmusica':
        return <AdicionarMusica />
      case 'visualizarplaylist':
        return <VisualizarPlaylist />
      default:
        return <CriarPlaylist />
    }
  }

  mudatela = (nomeTela) => {
    this.setState({telaAtual: nomeTela})
  }

 render(){
  return (
    <div>
      <button onClick={() => this.mudatela('criarplaylist')}>Criar Playlist</button>
      <button onClick={() => this.mudatela('adicionarmusica')}>Adicionar Musicas</button>
      <button onClick={() => this.mudatela('visualizarplaylist')}>Visualizar Playlist</button>
      {this.escolherTela()}
      <div>
      <button onClick={() => this.mudatela('voltar')}>Voltar</button>
      </div>
    </div>
  )
 }
}

export default App
