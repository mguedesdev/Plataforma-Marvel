import styled, { keyframes, css } from "styled-components";

interface CardContainerProps {
  isEntering: boolean;
  isExiting: boolean;
}


const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

export const CardContainer = styled.main<CardContainerProps>`
  display: flex;
  position: relative;

  height: 550px;
  width: 350px;
  border-radius: 30px;
  overflow: hidden;
  
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    
  }

  ${({ isEntering, isExiting }) => 
      css`
        animation: 
          ${isExiting ? fadeOut : 'none'} .5s ease-in-out both,
          ${isEntering ? fadeIn : 'none'} .5s ease-in-out both;
      `
    }

`;

export const CardContent = styled.div`
  position: absolute;
  bottom: 0;
  font-family: "Axiforma", sans-serif;
  padding: 20px 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 1;
  height: 50%;
  max-height: 50%;
  background: linear-gradient(to bottom, red, rgba(255, 0, 0, 0.2));
  border-radius:  30px;

  h1{
    font-size: 24px;
    text-align: center;
    
  }

  p {
    font-size: 15px;
    font-weight: 100;
    text-align: start;
    height: 70%;
    max-height: 70%;
    overflow: auto;
  }

  button {
    font-family: "Axiforma", sans-serif;
    width: 100%;
    background-color: transparent;
    color: #FFF;
    font-size: 26px;
    font-weight: 100;
    border: none;
    cursor: pointer;

  }

`;


