import React from "react";
import axios from "axios";

class TelaDeCadastro extends React.Component {
    state = {
        nomeInput: '',
        emailInput: ''
    }

    alterarNomeInput = (event) => {
        this.setState({nomeInput: event.target.value})
    }

    alterarEmailInput = (event) => {
        this.setState({emailInput: event.target.value})
    }

    createUser = () => {
        const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'
        const body = {
            name: this.state.nomeInput,
            email: this.state.emailInput
        }

        axios
        .post(url, body, {
            headers: {
                Authorization: 'bruno-martins-gebru'
            }
        })
        .then(res => {alert(`Usuário(a) ${this.state.nomeInput} criado com sucesso`)
        this.setState({nomeInput: '', emailInput: ''})
    })
        .catch(err => alert(err.response.data.message))
    }


    render() {
        return (
            <div>
                <h1>Tela de Cadastro</h1>
                <button onClick={this.props.irParaTelaDeUsuarios}>Lista De Usuários</button>
                <div>
                <input placeholder='Nome' value={this.state.nomeInput} onChange={this.alterarNomeInput}/>
                <input placeholder='Email' value={this.state.emailInput} onChange={this.alterarEmailInput}/>
                <button onClick={this.createUser}>Criar Usuário</button>
                </div>
            </div>
        )
    }
}

export default TelaDeCadastro