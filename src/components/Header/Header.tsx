import { HeaderContainer, Nav, StyledNavLink, ProfileContainer, ProfileImage, ButtonExit, MenuButton } from './HeaderStyles';
import profilePic from '../../assets/profile-picture.png';
import Logo from '../Logo/Logo';
import menuHeader from '../../assets/menu-header.svg';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('rememberMe');

    navigate('/');
  };

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  }
  
  return (
    <HeaderContainer showMenu={showMenu}>
      <Logo fontSize='60px'/>

      <MenuButton onClick={handleShowMenu}>
        <img src={menuHeader} alt="Menu" />
      </MenuButton>

      <Nav showMenu={showMenu}>
        <StyledNavLink
          to="/personagens"
          className={isActive => isActive ? "active" : ""}>
            Personagens
        </StyledNavLink>

        <StyledNavLink
          to="/filmes"
          className={isActive => isActive ? "active" : ""}>
            Filmes
        </StyledNavLink>

        <StyledNavLink
          to="/hqs"
          className={isActive => isActive ? "active" : ""}>
            HQs
        </StyledNavLink>
        
        <ProfileContainer>
          <ProfileImage src={profilePic} alt="Profile" />
          <ButtonExit onClick={handleLogout}>Sair</ButtonExit>
        </ProfileContainer>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
