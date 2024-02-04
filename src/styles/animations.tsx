import { keyframes } from 'styled-components';

export const moveBackground = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(20px); 
  }
`;

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

export const moveGradient = keyframes`
  0%, 30% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const moveLogo = keyframes`
  0%, 15% {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  25% {
    top: 50%;
    left: 53%;
    transform: translate(-54%, -50%);
  }
  70%, 73% {
    top: 50%;
    left: 13.5%;
    transform: translate(0, -50%);
  }
  100% {
    top: 25%;
    left: 13.5%;
    transform: translate(0, -50%);
  }
`;

export const moveLogoMobile = keyframes`
  0%, 25% {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  100% {
    top: 15%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const moveLogoTablet = keyframes`
  0%, 25% {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  100% {
    top: 25%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const fadeIn01 = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 0.1;
  }
`;