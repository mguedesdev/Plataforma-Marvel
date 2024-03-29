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

  @media (max-width: 1025px) {
    z-index: 2;
  }

  @media (max-width: 600px) {
    overflow: auto;
  }
`;

export const CardDetailsContent = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'isMovie',
  }) <CardDetailsProps>`
  display: flex;
  justify-content: start;
  gap: ${({ isMovie }) => isMovie ? '30px' : '60px'};
  flex-direction: column;
  width: calc(55%);
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

  @media (max-width: 1025px) {
    width: 100%;
    padding: 20px 30px;
    gap: 00px;
    justify-content: space-evenly;

    h1 {
      font-size: 28px;
    }

    h2{
      font-size: 20px;
    }

    h3{
      font-size: 20px;
    }

    li{ 
      font-size: 16px;
    }

    img {
      width: 25px;
      height: 25px;
      margin-top: 5px;
      margin-right: 5px;
    }
  }

  @media (max-width: 600px) {
    width: 100%;
    padding: 0;
    justify-content: start;
    h1 {
      font-size: 22px;
    }

    h2{
      font-size: 18px;
    }

    li{ 
      font-size: 14px;
    }

    img {
      width: 20px;
      height: 20px;
      margin-top: 5px;
      margin-right: 5px;
    }
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

  @media (max-width: 600px) {
    width: 25px;
    height: 25px;
    bottom: 20px;
    right: 20px;
  }
`;
