import styled from "styled-components";

export const MainContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  z-index: 0;

  @media (max-width: 1025px) {
    justify-content: start;
    align-items: start;
    height: 100%;
  }
`;

export const MainContent = styled.div`
  z-index: 1;
  @media (max-width: 1025px) {
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0px;
    margin-top: 140px;
    z-index:0;
  }
  @media (max-width: 600px) {
    margin-top: 95px;
    gap: 20px;
  }
  
`;