import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

interface HeaderContainerProps {
  showMenu: boolean; 
}

export const HeaderContainer = styled.header.withConfig({
  shouldForwardProp: (prop) => prop !== 'showMenu' })<HeaderContainerProps>`
  padding: 30px 50px;
  box-shadow: red 0px 1px 10px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 10;
  background-color: #000;
  position: fixed;
  top: 0;
  width: 100%;

  @media (max-width: 1025px) {
    /* padding: 20px 20px; */

    &::before {
      content: '';
      position: fixed;
      width: 100%;
      height: 100%;
      background-color: #000;
      bottom: 0;
      left: 0;
      z-index: 1;
      transition: all 0.4s ease-in-out;
      opacity: 0;
      visibility: hidden;
      pointer-events: none;
      
      ${({ showMenu }) => showMenu && `
        opacity: 0.7;
        visibility: visible;
        pointer-events: all;

      `}
    }
  }

  @media (max-width: 600px) {
    padding: 20px 20px;
  }
`;

export const Nav = styled.nav.withConfig({
  shouldForwardProp: (prop) => prop !== 'showMenu',
})<HeaderContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 70px;
  z-index: 10;
  overflow: hidden;

  @media (max-width: 1025px) {
    max-width: ${({ showMenu }) => showMenu ? '40vw' : '0'};
    width: ${({ showMenu }) => showMenu ? '100%' : '0'};

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-end;
    transition: all 0.4s ease-in-out;
    right: 0;

    padding: ${({showMenu }) => showMenu ? '0px 40px' : '0'};
    position: absolute;
    top: 120px;
    height: calc(100vh - 120px);
    background-color: #000;
    z-index: 10;
    gap: 25px;
    
  }

  @media (max-width: 600px) {
    max-width: ${({ showMenu }) => showMenu ? '60vw' : '0'};
    width: ${({ showMenu }) => showMenu ? '100%' : '0'};
    padding: ${({showMenu }) => showMenu ? '0px 20px' : '0'};
    gap: 10px;

    top: 70px;
    height: calc(100vh - 70px);

  }
`;

export const StyledNavLink  = styled(NavLink)`
  color: #FFF;
  opacity: 0.5;
  text-decoration: none;
  font-size: 30px;
  font-family: 'Axiforma', sans-serif;
  font-weight: bold;
  transition: all 0.3s ease-in-out;
  cursor: pointer;


  &:hover {
    color: #FFF;
    opacity: 1;
  }

  &.active {
    opacity: 1;
  }

  @media (max-width: 1025px) {
    font-size: 24px;
  }
  @media (max-width: 600px) {
    font-size: 20px;
  }
`;

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding-right: 20px;

  @media (max-width: 1025px) {
    position: absolute;
    bottom: 60px;
    padding-right: 0px;
  }
  @media (max-width: 600px) {
    bottom: 40px;

  }
`;

export const ProfileImage = styled.img`
  width: 55px;
  height: 55px;
  border-radius: 50%;
  box-shadow: rgba(255, 0, 0, 0.6) 2px 1px 10px 0px;

  @media (max-width: 1025px) {
    width: 40px;
    height: 40px;
  }
  @media (max-width: 600px) {
    width: 35px;
    height: 35px;
  }
`;

export const ButtonExit = styled.span`
  opacity: 0.5;
  color: #FFF;
  font-size: 20px;
  font-family: 'Axiforma', sans-serif;
  font-weight: 100;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: #FFF;
    opacity: 1;
  } 

  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

export const MenuButton = styled.button`
  display: none;
  width: 40px;
  height: 40px;
  cursor: pointer;
  z-index: 2;
  background-color: transparent;
  border: none;

  img {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 1025px) {
    display: block;
  }
`;