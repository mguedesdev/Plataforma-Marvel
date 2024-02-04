import styled, { css } from 'styled-components';
import { moveLogo, moveLogoMobile, moveLogoTablet } from "../../styles/animations";
import { Link } from 'react-router-dom';

interface LogoContainerProps {
  fontSize?: string;
  animate?: boolean;
}

export const LinkLogo = styled(Link)`
  text-decoration: none;
`;

export const LogoContainer = styled.span.withConfig({
  shouldForwardProp: (prop) => prop !== 'animate',
  })<LogoContainerProps>`
  z-index: 1000;
  background-color: red;
  color: white;
  font-size: ${(props) => props.fontSize || '60px'};
  font-family: 'Marvel', sans-serif;
  font-weight: 100;
  
  padding: 10px 10px;
  line-height: 1;
  letter-spacing: 2px;

  cursor: pointer;
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
    padding: 0px 15px;
    
    animation: ${moveLogo} 3s forwards;
  `}

  @media (max-width: 600px) {
    font-size: 80px;

    ${({ animate }) => animate && css`
      animation: ${moveLogoMobile} 3s forwards;
    `}
  }

  @media (min-width: 600px) and (max-width: 1025px) {
    font-size: 100px;
    ${({ animate }) => animate && css`
      animation: ${moveLogoTablet} 3s forwards;
    `}
  }

`; 