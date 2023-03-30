import React from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { devices } from ".././assets/devices";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Poppins', sans-serif;
  }
`

const Section = styled.div`
    display: flex;
  @media ${devices.tablet} {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }`

const Container = styled.div`
width: max-content;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
border: 2px solid black;
padding: 20px;
border-radius: 30px;
margin-top: 20px;
font-size: 2rem;

&:hover{
    background-color: black;
    transition: 0.3s ease-in-out;
    transform: scale(1.01);
    color: wheat;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    border: none;
    cursor: poiner;
    font-size: 1.9rem;
}`

const Nav = styled.nav`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
gap: 2rem;
width: 850px;;
@media ${devices.tablet} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    font-style: italic;
}`

const List = styled.ul`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
gap: 2rem;
list-style: none;
font-size: 2rem;
font-weight: 600;
font-family: 'Poppins', sans-serif;
@media ${devices.tablet} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: left;
}`

const ListItem = styled.li`
margin: 1rem;
font-size: 1.5rem;
font-weight: 600;
color: #C8E70D;
&:hover{
    color: yellowgreen;
    cursor: pointer;
}`

const Navbar = () => {
    return (
        <Section>
            <GlobalStyle />
            <Container>
                <Nav>
                    <List>
                        <ListItem>
                            About Me
                        </ListItem>
                        <ListItem>
                            Skills
                        </ListItem>
                        <ListItem>
                            Projects
                        </ListItem>
                        <ListItem>
                            Let's Talk
                        </ListItem>
                        Want to <br />
                        Explore?
                    </List>
                </Nav>
            </Container>
        </Section>
    )
}

export default Navbar