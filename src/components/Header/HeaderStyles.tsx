import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.header`
  background-color: #000;
  color: white;
  padding: 30px 50px;
  box-shadow: red 0px 1px 10px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 70px;
`;

export const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin-left: 20px;
  font-size: 30px;
  font-family: 'Axiforma', sans-serif;
  font-weight: bold;
  transition: all 0.3s ease-in-out;
  cursor: pointer;


  &:hover {
    color: #ff0000;

  }
`;

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding-right: 20px;
`;

export const ProfileImage = styled.img`
  width: 55px;
  height: 55px;
  border-radius: 50%;
  box-shadow: rgba(255, 0, 0, 0.6) 2px 1px 10px 0px;
`;

export const ButtonExit = styled.span`
  color: white;
  font-size: 20px;
  font-family: 'Axiforma', sans-serif;
  font-weight: lighter;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  
  line-height: 1.1;
  

  &:hover {
    color: #ff0000;

  } 

`;