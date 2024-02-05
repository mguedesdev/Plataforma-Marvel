import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { fadeIn } from '../../styles/animations';

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

  h1 {
    margin-top: 180px;
    font-size: 30 px;
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

export const Form = styled.form`
  opacity: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  z-index: 100;

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

  animation: ${fadeIn} 3s forwards;
  animation-delay: 2s;

  @media (max-width: 600px) {
    gap: 10px;

    input {
      padding: 12px;
      font-size: 16px;

      &::placeholder {
        font-size: 16px;
      }
    }
  }

  @media (min-width: 600px) and (max-width: 1025px) {
    input {
      padding: 18px;
      font-size: 18px;

      &::placeholder {
        font-size: 18px;
      }
    }
  }
  
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

    @media (min-width: 600px) and (max-width: 1025px) {
      
      margin-top: 50px;
    }

    @media (max-width: 600px) {
      font-size: 24px;
      margin-top: 50px;
    }
`;

export const SaveLogin = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;

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
  
  @media (min-width: 600px) and (max-width: 1025px) {
    padding: 0px 10px;
    gap: 10px;

    a{
      font-size: 18px;
    }
  }

  @media (max-width: 600px) {
    padding: 0px 10px;
    gap: 10px;
  }
`;

export const CheckBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px; 

  input {
    width: 15px;
    height: 15px;
    cursor: pointer;
  }

  label {
    font-size: 15px;
    font-weight: 500;
    color: #84848D;
  }

  @media (min-width: 600px) and (max-width: 1025px) {
    gap: 10px;

    input {
      width: 20px;
      height: 20px;
    }

    label {
      font-size: 18px;
    }
  }
`;

export const Register = styled.div`
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

  @media (min-width: 600px) and (max-width: 1025px) {
    gap: 10px;
    font-size: 18px;
  }

  @media (max-width: 600px) {
    font-size: 14px;
  }

`;