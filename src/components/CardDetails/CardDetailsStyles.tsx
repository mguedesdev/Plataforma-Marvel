import styled from "styled-components";

interface CardDetailsProps {
  index: number;
  isMovie: boolean;
}

export const CardDetailsContainer = styled.div`
  font-family: "Axiforma", sans-serif;
  position: relative;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, red, rgba(78, 0, 0, 1));
`;

export const CardDetailsContent = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'isMovie',
  }) <CardDetailsProps>`
  display: flex;
  justify-content: center;
  gap: ${({ isMovie }) => isMovie ? '30px' : '60px'};
  flex-direction: column;
  width: calc(100% - 350px);
  height: 100%;
  padding: 40px;
  position: absolute;
  right: ${({ index }) => index === 0 ? '0' : 'auto'};

  h1 {
    font-size: 30px;
  }

  h2{
    font-size: 18px;
    font-weight: bold;
  }

  h3{
    font-size: 26px;
    font-weight: 500;
    line-height: 1;
    margin-top: 10px
  }

  li{ 
    font-size: 16px;
    font-weight: 100;
    list-style: none;
  }

  //Imagem da estrela
  img {
    width: 30px;
    height: 30px;
    margin-top: 10px;
    margin-right: 5px;
  }
`;


export const BtnClose = styled.img`
  z-index: 10;
  position: absolute;
  cursor: pointer;
  bottom: 25px;
  right: 25px;
  width: 30px;
  height: 30px;
`;
