import styled from "styled-components"
import world from "../../img/02.jpg"

export const CharacterPerson = styled.div`
    display: flex;
    flex-direction: column;
    font-weight: bold
`


export const Container = styled.div`
display: flex;
flex-direction: column;
background-image: url(${world});
background-position: center;
background-size: cover;
height: 100vh;

`