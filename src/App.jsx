import React from 'react'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import { devices } from './assets/devices'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

// using styled-components to style the app

const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media ${devices.tablet} {
    width: 100%;
    height: 100%;
  }
    `
const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Poppins', sans-serif;
    background-color: #C8E70D;
  }
  
`
const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  border: 2px solid black;
  border-radius: 40px;
  padding: 20px;
  color: black;
  font-family: 'Poppins', sans-serif;
  font-size: 2rem;
  font-weight: 600;
  text-align: center;
  margin: 30px;
  @media ${devices.tablet} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  &:hover {
    background-color: #6D7C0C;
    transition: 0.3s ease-in-out;
    transform: scale(1.01);
    ${'' /* color: black; */}
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    border: none;
    cursor: pointer;
    font-size: 1.9rem;
  }
`
const Head = styled.h1`
  color: #C8E70D;
  font-size: 10rem;
  margin: 20px;

  @media ${devices.tablet} {
    font-style: italic;
    font-size: 100px;
    text-align: center;
  }
  &:hover{
    display: flex;
    color: black;
  }
`

const TagLine = styled.h2`
  color: #C8E70D;
  font-size: 5rem;

  @media ${devices.tablet} {
    font-style: italic;
    font-size: 50px;
    text-align: center;
    ${'' /* font-family: 'Lobster', cursive; */}
  }
  &:hover{
    color: black;
  }
`
function App() {

  return (
    <Section>
      <Container>
        <GlobalStyle />
        Who Am i?<br />
        <Head>Hello Guys!</Head>
        <TagLine>Hi! Myself SHERLOCK!</TagLine>
      </Container>
      <Navbar />
      <Hero />
    </Section>

  )
}

export default App
