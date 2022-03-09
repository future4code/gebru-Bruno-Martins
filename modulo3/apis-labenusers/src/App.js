import React from 'react';
import TelaDeCadastro from './components/TelaDeCadastro'
import TelaLista from './components/TelaLista'


class App extends React.Component {
  state = {
    telaCarregada: 'cadastro'
  }

  escolhendoTela = () => {
    switch (this.state.telaCarregada) {
      case 'cadastro':
    return <TelaDeCadastro irParaTelaDeUsuarios={this.irParaTelaDeUsuarios} />
    case 'listaUsuarios':
    return <TelaLista irParaTelaDeCadastro={this.irParaTelaDeCadastro}/>
    default:
      return <h2>Página não encontrada!</h2>
    }
  }

  irParaTelaDeCadastro = () => {
    this.setState({telaCarregada: 'cadastro'})
  }

  irParaTelaDeUsuarios = () => {
    this.setState({ telaCarregada: 'listaUsuarios'})
  }

  render() {
  return (
    <div >
      {this.escolhendoTela()}
    </div>
  );
  }
}
export default App
