import styled from 'styled-components';

export const MainContainer = styled.main`

  display: flex;
  flex-direction: center;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 120px);
  font-family: "Axiforma", sans-serif;
  z-index: -1;
  
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
  gap: 100px;
`;

interface ButtonNextProps {
  position: string;
  show: boolean;
}

export const ButtonNext = styled.button<ButtonNextProps>`
  position: absolute;
  cursor: pointer;
  z-index: 1;
  background-color: transparent;
  border: none;
  transition: transform 0.2s;

  ${({ position }) => position === 'right' && `
    right: 0;
    margin-right: 100px;
  `}

  ${({ position }) => position === 'left' && `
      left: 0;
      margin-left: 100px;
    `}

  ${({ show }) => !show && `
    display: none;
  `}


  img{
    width: 50px;
    height: 50px;
  }

  &:hover{
    transform: scale(1.2);
  }
`;