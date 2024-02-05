import styled from "styled-components";

interface AvailableProps {
  needBg: boolean;
}

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  p {
    font-size: 14px;
    font-weight: 100;
  }

  @media (max-width: 1025px) {
    p {
      font-size: 24px;
    }
  }

  @media (max-width: 600px) {
    p {
      font-size: 14px;
    }
  }

`;

export const Available = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;

  h3{
    font-size: 16px;
    font-weight: 500;
    line-height: 1;
  }

  @media (max-width: 1025px) {
    h3{
      font-size: 26px;
    }
  }

  @media (max-width: 600px) {
    h3{
      font-size: 16px;
    }
  }
`;


export const ImageIconContainer = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'needBg',})
  <AvailableProps>`
  margin-top: 10px;
  img {
    width: 50px;
    height: 50px;
    border-radius: 20%;
  }

  ${({ needBg }) => needBg && `
    margin-top: 10px;
    background-color: #fff; 
    width: 50px;
    height: 50px;
    border-radius: 20%;
    
    img {
      width: 100%;
      height: auto;
      object-fit: contain;
    }
  `}

  @media (max-width: 1025px) {
    img {
      width: 70px;
      height: 70px;
    }
    
    ${({ needBg }) => needBg && `
      width: 70px;
      height: 70px;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    `}
  }

  @media (max-width: 600px) {
    img {
      width: 40px;
      height: 40px;
    }
    ${({ needBg }) => needBg && `
      width: 40px;
      height: 40px;

      img {
        width: 100%;
        height: auto;
        object-fit: contain;
      }
    `}
  }

`;

