import styled from 'styled-components';

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  padding-left: 10vw;
  height: 100vh;
  font-family: "Axiforma", sans-serif;

  @media (max-width: 600px) {
    align-items: center;
    padding: 0 10%;
  }
  @media (min-width: 600px) and (max-width: 1025px) {
    align-items: center;
    padding: 0 10%;
  }
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 23%;

  h1 {
    margin-top: 180px;
    font-size: 30px;
    font-weight: bold;
    color: #FF0000;
  }

  h2 {
    font-size: 20px;
    font-weight: 100;
    color: #84848D;
  }

  @media (min-width: 600px) and (max-width: 1025px) {
    width: 80%;
    h1 {
      font-size: 32px;
    }

    h2 {
      font-size: 24px;
    }
  }

  @media (max-width: 600px) {
    width: 100%;
    h1 {
      margin-top: 100px;
      font-size: 25px;
    }

    h2 {
      font-size: 18px;
    }
  }
`;