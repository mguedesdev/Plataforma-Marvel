import styled from "styled-components";

interface ButtonNextProps {
  position: string;
  show: boolean;
}

export const ButtonCard = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== 'show',
  })<ButtonNextProps>`
  position: absolute;
  cursor: pointer;
  z-index: 1;
  background-color: transparent;
  border: none;
  transition: transform 0.2s;

  ${({ position }) => position === 'right' && `
    right: 0;
    margin-right: 100px;
    
    img {
      transform: rotate(180deg);
    }

    &:hover img{
      transform: rotate(180deg);
    }
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