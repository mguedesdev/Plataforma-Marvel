import { HeaderContainer, Nav, StyledNavLink, ProfileContainer, ProfileImage, ButtonExit } from './HeaderStyles';
import profilePic from '../../assets/profile-picture.png';
import Logo from '../Logo/Logo';


const Header = () => {
  return (
    <HeaderContainer>
      <Logo fontSize='60px'/>
      <Nav>

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
          <ButtonExit>Sair</ButtonExit>
        </ProfileContainer>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
