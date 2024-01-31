import styled, { css } from 'styled-components';
import '../../styles/animations.css';

interface ImageContainerProps {
  animate: boolean;
}

export const ImageContainer = styled.div<ImageContainerProps>`
  opacity: 0;
  height: 100vh;
  position: absolute;
  right: 0px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    ${({animate}) => animate && css`
      animation: moveBackground 3s forwards;
      animation-delay: 1.5s;
    `}
  }

  &:after {
    content: '';
    opacity: 0;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, rgba(0, 0, 0, 1), transparent);
    z-index: 0;

    ${({animate}) => animate && css`
      animation: moveGradient 2s forwards;
      animation-delay: 1.5s;
    `}
  }

  ${({animate}) => animate && css`
    animation: fadeInBackGround 2s forwards;
    animation-delay: 1.5s;

  `}
  
`;
