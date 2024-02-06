import styled from 'styled-components';

export const CardsContainer = styled.div`
  display: grid;
  width: 100%;
  justify-content: center;
  grid-template-columns: repeat(3, 20vw); 
  grid-template-rows: repeat(1, 60vh);
  gap: 2vw;
  z-index: 1;
  padding-top: 7%;
  padding-left: 3%;

  @media (max-width: 1450px) {
    grid-template-columns: repeat(2, 30vw);
  }

  @media (max-width: 1025px) {
    grid-template-columns: repeat(2, 35vw);

    
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 70vw);
    padding-top: 10%;
  }
`;

export const CardContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  @media (max-width: 1450px) {
    display: flex;
    &:nth-child(3) {
      display: none;
      justify-content: center;
     }
    
  }
  @media (max-width: 600px) {
    display: none;
    &:nth-child(1) {
      display: flex;
      justify-content: center;
     }
    
  }
  
`;