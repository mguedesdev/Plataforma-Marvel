import styled, { css } from 'styled-components';
import { moveBackground, fadeIn, moveGradient } from '../styles/animations';

interface ImageContainerProps {
  animate: boolean;
}

export const ImageContainer = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'animate',
})<ImageContainerProps>`
  opacity: 0.5;
  height: calc(100% - 120px);
  position: absolute;
  right: 0px;
  overflow: hidden;
  z-index: -1;


  img {
    width: 100%;
    height: 100%;
    ${({animate}) => animate && css`
      animation: ${moveBackground} 3s forwards;
      animation-delay: 0.8s;
    `}
  }

  &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, rgba(0, 0, 0, 1), transparent);
    z-index: 0;

    ${({animate}) => animate && css`
      animation: ${moveGradient} 3s forwards;
      animation-delay: 0.8s;
    `}
  }

  ${({animate}) => animate && css`
    height: 100vh;
    z-index: 1;
    opacity: 0;
    animation: ${fadeIn} 2s forwards;
    animation-delay: 0.8s;
  `}
  
`;
