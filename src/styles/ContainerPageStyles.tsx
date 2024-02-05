import styled from "styled-components";

export const MainContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 120px);
  z-index: 0;

  @media (max-width: 600px) {
    justify-content: start;
    align-items: start;
    height: 100vh;
  }
`;

export const MainContent = styled.div`
  z-index: 1;
  @media (max-width: 600px) {
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin-top: 95px;
    z-index:0;
    
  }
  
`;