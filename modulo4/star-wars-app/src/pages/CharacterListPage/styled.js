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
background-image: url(${starwar});
padding: 10px;
background-position: center;
background-size: cover;
`

export const TextCard = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    text-align: center;
`