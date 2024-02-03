import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  p {
    font-size: 14px;
    font-weight: 100;
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
`;

interface AvailableProps {
  needBg: boolean;
}

export const ImageIconContainer = styled.div<AvailableProps>`
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

`;

