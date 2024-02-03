import styled from "styled-components";

export const CustomSelectContainer = styled.div`
  position: absolute;
  border: 2px solid red;
  border-radius: 0px;
  color: #ff0000;
  cursor: pointer;
  border-radius: 10px;
`;

export const CustomSelectValue = styled.div`
  background-color: black;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  gap: 10px;
`;

export const CustomSelectOptions = styled.div`
  top: 100%;
  background-color: black;
  width: 100%;
  border-radius: 10px;

`;

export const CustomSelectOption = styled.div`
  width: 100%;
  color: #ff0000;
  padding: 10px;
  &:hover {
    background-color: #202020;
  }
`;