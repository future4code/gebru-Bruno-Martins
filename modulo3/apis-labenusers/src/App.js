
import React from 'react';
import './App.css';

export default class App extends React.Component {
  render() {
  return (
    <div >
      <div><button>Trocar de tela</button></div>
      <input placeholder='Nome'/>
      <input placeholder='Email'/>
      <button>Criar Usuário</button>
    </div>
  );
  }
}

