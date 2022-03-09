import React from "react";
import axios from "axios";
import styled from "styled-components";

const Lista = styled.div`
display: flex;
justify-content: space-between;
margin: 5px;
padding: 5px;
border: 1px solid black;
width: 500px ;
align-items: center;
`

class TelaLista extends React.Component {
    state = {
        listaUsuario: []
    }

    componentDidMount() {
        this.getAllUsers()
    }

    getAllUsers = () => {
        const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'
        axios
        .get(url, {
            headers: {
                Authorization: 'bruno-martins-gebru'
            }
        })
        .then(res => {
            this.setState({listaUsuario: res.data})
        })
        .catch(err => console.log(err.response))
    }

    deleUsers = (idUsuario) => {
        const url1 = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${idUsuario}`
        axios
        .delete(url1, {
            headers: {
                Authorization: 'bruno-martins-gebru'
            }
        })
        .then(res => {
            alert ('Usuário(a) deletado')
            this.getAllUsers()
        })
        .catch(err => console.log(err.response))

    }

    render() {
        const listaUsuarios = this.state.listaUsuario.map((usuarios) => {
            return (
            <Lista key={usuarios.id}>
                <p>{usuarios.name}</p>
                <button onClick={() => this.deleUsers(usuarios.id)}>Apagar</button>
                </Lista>)
        })

        return (
            <div>
                <h1>Tela de Usuários</h1>
                {listaUsuarios}
                <button onClick={this.props.irParaTelaDeCadastro}>Cadastro</button>
            </div>
        )
    }
}

export default TelaLista