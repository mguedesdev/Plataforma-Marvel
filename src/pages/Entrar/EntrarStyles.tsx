import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

interface formProps {
  animate: boolean;
}


export const MainContainer = styled.main`
  background-color: #000;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  padding-left: 10vw;
  height: 100vh;
  font-family: "Axiforma", sans-serif;
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  h1 {
    font-size: 30 px;
    font-weight: bold;
    color: #FF0000;
  }

  h3 {
    font-size: 20px;
    font-weight: lighter;
    color: #84848D;
  }
`;


export const Form = styled.form<formProps>`
  opacity: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;

  input {
    padding: 20px;
    border: none;
    border-radius: 50px;
    background-color: #ffffff;
    color: #84848D;
    font-size: 22px;
    font-weight: 100;

    &:focus{
      outline: none;
    }

    &::placeholder {
      color: #D1D1D6;
      font-size: 22px;
      font-family: "Axiforma", sans-serif;
      font-weight: 100;
    }
  }

  ${({ animate }) => animate && css`
    animation: fadeInForm 3s forwards;
    animation-delay: 2s;
  `}

`;

export const BtnLogin = styled(Link)`
    font-family: "Axiforma", sans-serif;
    padding: 10px;
    border-radius: 50px;
    background-color: #FF0000;
    color: #fff;
    font-size: 28px;
    font-weight: 500;
    text-decoration: none;
    text-align: center;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
      background-color: #aa0000;
    }
`;

export const SaveLogin = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  padding: 0px 20px;
  
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;

    label {
      font-size: 15px;
      font-weight: 500;
      color: #84848D;
    }
  }

  input {
    cursor: pointer;
  }

  a {
    color: #84848D;
    font-size: 15px;
    font-weight: 500;
    text-decoration: none;
    transition: all 0.3s ease-in-out;
    border-bottom: #FF0000 1px solid ;

    &:hover {
      color: #FF0000;
    }
  }
`;

export const Cadastrese = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  font-size: 16px;
  font-weight: 500;
  color: #84848D;

  a {
    text-decoration: none;
    color: #FF0000;
  }

`;