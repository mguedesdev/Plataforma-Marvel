import styled, { css } from 'styled-components';
import { moveLogo } from "../../styles/animations";

interface LogoContainerProps {
  fontSize?: string;
  animate?: boolean;
}

export const LogoContainer = styled.span<LogoContainerProps>`
  z-index: 1000;
  background-color: red;
  color: white;
  font-size: ${(props) => props.fontSize || '60px'};
  font-family: 'Marvel', sans-serif;
  font-weight: 100;
  
  padding: 0px 15px;
  line-height: 1;
  letter-spacing: 2px;

  cursor: default;
  transition: all 0.3s ease;

  &:hover {
    background-color: white;
    color: red;
  }

  ${({ animate }) => animate && css`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    
    animation: ${moveLogo} 3s forwards;
  `}

`; 