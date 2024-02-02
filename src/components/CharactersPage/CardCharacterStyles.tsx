import styled, { css } from "styled-components";
import { fadeIn, fadeOut } from "../../styles/animations";

interface CardContainerProps {
  isEntering: boolean;
  isExiting: boolean;
  isCardSelected: boolean;
  detailsOpen: boolean;
  index: number;
}

interface DetailsOpenProps {
  detailsOpen: boolean;
}

export const CardContainer = styled.div<CardContainerProps>`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: end;
  height: 100%;
  width: 350px;
  border-radius: 30px;
  overflow: hidden;
  

  ${({ isEntering, isExiting }) => css`
    animation: 
      ${isExiting ? fadeOut : 'none'} .5s ease-in-out both,
      ${isEntering ? fadeIn : 'none'} .5s ease-in-out both;
  `}

  ${({ isCardSelected, detailsOpen, index }) => isCardSelected && detailsOpen && css`
    position: absolute;
    display: flex;

    z-index: 1000;
    width: 750px;
    justify-content: ${index !== 0 ? 'flex-end' : 'flex-start'};
    transform: ${index !== 0 ? 'translateX(calc(-100% + 350px))' : '0'};
  `}
  
`;

export const CardContent = styled.div`
  font-family: "Axiforma", sans-serif;
  padding: 20px 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 1;
  height: 50%;
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

`;

export const BtnDetails = styled.button`
  font-family: "Axiforma", sans-serif;
  width: 100%;
  background-color: transparent;
  color: #FFF;
  font-size: 26px;
  font-weight: 100;
  border: none;
  cursor: pointer;

  transition: all 0.2s;

  &:hover {
    font-weight: 500;
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.9);
  }
`;

export const ModalContainer = styled.div<DetailsOpenProps>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, rgba(0, 0, 0, 1) 50%, transparent);
  display: flex;
  justify-content: center;
  align-items: center;
  
  animation: ${({ detailsOpen }) => detailsOpen ? fadeIn : fadeOut} 0.5s ease-in-out both;
`;

export const CardImage = styled.img`
  height: 100%;
  width: 350px;
  object-fit: cover;
  position: absolute;
  z-index: 1;
  border-radius: 30px;
`;

