import styled from "styled-components";

interface AlertContainerProps {
  sucess: boolean;
}

export const AlertContainer = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "sucess"})
  <AlertContainerProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 10px;
  background-color: ${
    (props: AlertContainerProps) => props.sucess ? '#4CAF50' : '#ff4d4d'
  };
  color: white;
  text-align: center;
  font-size: 18px;
  font-weight: 500;
  z-index: 1000;
`;