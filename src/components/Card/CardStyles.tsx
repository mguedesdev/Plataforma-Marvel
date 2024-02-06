import styled, { css } from "styled-components";
import { fadeIn } from "../../styles/animations";

interface CardContainerProps {
  animate: boolean;
  isCardSelected: boolean;
  detailsOpen: boolean;
  index: number;
}

interface DetailsOpenProps {
  detailsOpen: boolean;
}

export const CardContainer = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'animate' && prop !== 'isCardSelected' && prop !== 'detailsOpen',
  })<CardContainerProps>`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: end;
  height: 100%;
  width: 90%;
  border-radius: 30px;
  overflow: hidden;
  z-index: 1;

  ${({ animate }) => css`
    animation: 
      ${animate ? fadeIn : 'none'} .5s ease-in-out both;
  `}

  ${({ isCardSelected, detailsOpen, index }) => isCardSelected && detailsOpen && css`
    position: absolute;
    display: flex;

    z-index: 10;
    width: 200%;
    justify-content: ${index !== 0 ? 'flex-end' : 'flex-start'};
    transform: ${index !== 0 ? 'translateX(calc(-55%))' : '0'};
  `}

  @media (max-width: 1025px) {
    width: 100%;
    ${({ isCardSelected, detailsOpen }) => isCardSelected && detailsOpen && css`
    transform: none;
  `}
  }

  @media (max-width: 600px) {
    width: 100%;


  }
  
`;

export const CardContent = styled.div`
  font-family: "Axiforma", sans-serif;
  padding: 20px 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 1;
  height: 50%;
  background: linear-gradient(to bottom, red, rgba(255, 0, 0, 0.4));
  border-radius:  30px;

  h1{
    font-size: 24px;
    text-align: center;
  }

  p {
    margin-top: 5px;
    font-size: 14px;
    font-weight: 100;
    text-align: start;
    height: 70%;
    max-height: 70%;
    overflow: auto;
  }

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #FFF;
    border-radius: 10px;
  }

  @media (max-width: 1025px) {
    padding: 20px 25px;
    
    h1 {
      line-height: 1;
    
    }

  }

  @media (max-width: 600px) {
    padding: 10px 20px;
    h1{
      font-size: 20px;
      padding: 10px 0;
    }

    p {
      font-size: 12px;
    }
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

  @media (max-width: 600px) {
    margin-top: 10px;
    font-size: 20px;
    
  }
`;

export const CardImage = styled.img.withConfig({
  shouldForwardProp: (prop) => prop !== 'detailsOpen',
  })<DetailsOpenProps>`
  height: 100%;
  width: ${({ detailsOpen }) => detailsOpen ? '45%' : '100%'};
  object-fit: cover;
  position: absolute;
  z-index: 1;
  border-radius: 30px;
`;
