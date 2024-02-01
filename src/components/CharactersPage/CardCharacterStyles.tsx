import styled from "styled-components";

export const CardContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: end;

  height: 550px;
  width: 350px;
  border-radius: 30px;
  background-color: aliceblue;
  font-family: "Axiforma", sans-serif;
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    position: absolute;
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
  max-height: 50%;
  background: linear-gradient(to bottom, red, rgba(255, 0, 0, 0.2));
  border-radius:  30px;

  h1{
    
    font-size: 24px;
    text-align: center;
  }

  p {
    font-size: 16px;
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


