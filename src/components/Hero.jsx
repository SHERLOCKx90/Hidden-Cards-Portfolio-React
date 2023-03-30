import React from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { devices } from "../assets/devices";
import sh from "../assets/sh.png";

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

const Left = styled.div`
border: 2px solid black;
margin-right: 20px;
border-radius: 30px;
width: max-content;
height: max-content;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;`

const Right = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border: 2px solid black;
border-radius: 30px;
padding: 20px;
margin:20px;`

const MyImg = styled.img`
width: 200px;
height: 200px;
object-fit: fill;
${'' /* border: 2px solid white; */}
border-radius: 20px;`

MyImg.defaultProps = {
    src: sh,
};

const Title = styled.div`
font-size: 2rem;
border: 2px solid black;
border-radius: 20px;
padding: 20px;
margin:20px;`

const Info = styled.div`
font-size: 1rem;
border: 2px solid black;
border-radius: 20px;
padding: 20px;
margin:20px;`
const Hero = () => {
    return (
        <Section>
            <GlobalStyle />
            <Container>
                <Left>
                    <MyImg />
                </Left>
                <Right>
                    <Title>Subhadeep Chell</Title>
                    <Info>B.Tech undergraduate</Info>
                </Right>
            </Container>
        </Section>
    )
}

export default Hero;
