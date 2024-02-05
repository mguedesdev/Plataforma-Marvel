import styled from 'styled-components';

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); 
  grid-template-rows: 550px; 
  gap: 100px; 
  margin-top: 80px;
  z-index: 1;

  @media (max-width: 600px) {
    width: 100%;
    padding-top: 10%;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(1, 450px);
    margin-top: 0px;
  }
`;

export const CardContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  
  @media (max-width: 600px) {
    display: none;
    &:nth-child(1) {
      display: flex !important;
      justify-content: center;
     }

  }
`;