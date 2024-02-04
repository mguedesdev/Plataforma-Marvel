import styled from 'styled-components';

export const MainContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 120px);
  font-family: "Axiforma", sans-serif;
`;

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); 
  grid-template-rows: 550px; 
  gap: 100px; 
  justify-content: center;
  align-items: center;
  margin-top: 80px;
`;

export const CardContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;