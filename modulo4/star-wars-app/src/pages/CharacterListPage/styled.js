import styled from "styled-components"
import starwar from "../../img/4125.jpg"


export const CharacterCard = styled.div`
    border: 1px solid black;
    padding: 10px;
    margin: 10px;
    width: 300px;
    &:hover{
        cursor: Pointer;
        background-color: lightblue;
    }

`

export const BagImg = styled.div`
margin: 0;
background-image: url(${starwar});
height: 100vh;
width: 100vw;
`