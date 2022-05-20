import styled from "styled-components"
import starwar from "../../img/4127.jpg"


export const CharacterCard = styled.div`
    border: 1px solid black;
    padding: 20px;
    margin: 10px;
    width: 300px;
    &:hover{
        cursor: Pointer;
        background-color: lightblue;
    }
    text-align: center;
    font-weight: bold;
   // background-color: white;
    color: white;
    
`

export const Container = styled.div`
display: flex;
flex-direction: column;
background-image: url(${starwar});
background-position: center;
background-size: cover;
height: 100vh;
`

export const DivCards = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
align-content: center;
`
export const Text = styled.div`
text-align: center;
`
