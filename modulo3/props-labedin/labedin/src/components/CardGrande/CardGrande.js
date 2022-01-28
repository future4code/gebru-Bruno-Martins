import React from 'react';
import './CardGrande.css'
import styled from 'styled-components'

const CardStyle = styled.h4`
color: green;
margin-bottom: 15px;
`
const Negrito = styled.p`
font-weight: bolder;
`
const ConfiImg = styled.img`
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
`
const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
    .bigcard-container {
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
}


`




function CardGrande(props) {
    return (
        <div className="bigcard-container">
            <ConfiImg src={ props.imagem } />
            <div>
                <CardStyle>{ props.nome }</CardStyle>
                <Negrito>{ props.data }</Negrito>
                <p>{ props.descricao }</p>
            </div>
        </div>
    )
}

export default CardGrande;