import styled from "styled-components";

interface CardDetailsProps {
  index: number;
}



export const CardDetailsContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, red, rgba(78, 0, 0, 1));

  button {
    z-index: 10;
    position: absolute;
    
    background: transparent;
    border: none;
    cursor: pointer;
    bottom: 25px;
    right: 25px;
    width: 30px;
    height: 30px;

    img {
      width: 100%;
      height: 100%;
    }
  }
`;

export const CardDetailsContent = styled.div<CardDetailsProps>`
  font-family: "Axiforma", sans-serif;
  position: relative;
  display: flex;
  justify-content: center;
  gap: 20px;
  align-items: start;
  flex-direction: column;
  width: calc(100% - 350px);
  height: 100%;
  padding: 60px 60px;

  position: absolute;
  right: ${({ index }) => index === 0 ? '0' : 'auto'};

  h1 {
    font-size: 30px;
  }

  h2{
    font-size: 18px;
    font-weight: bold;
  }
  
  p{ 
    font-size: 18px;
    font-weight: 100;
  }

  h3{
    font-size: 26px;
    font-weight: 500;
    line-height: 1;
    margin-top: 10px

  }

  img{
    width: 30px;
    height: 30px;
    margin-top: 10px;
    margin-right: 5px;
  }

`;