import styled from 'styled-components';

interface LogoContainerProps {
  fontSize?: string;
}

export const LogoContainer = styled.span<LogoContainerProps>`
  background-color: red;
  color: white;
  font-size: ${props => props.fontSize || '60px'};
  font-family: 'Marvel', sans-serif;
  font-weight: 100;

  padding: 10px;
  line-height: 1;
  letter-spacing: 2px;


  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: white;
    color: red;
  }
`; 