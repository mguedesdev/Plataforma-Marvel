import { HeaderContainer, Nav, NavLink, ProfileContainer, ProfileImage, ButtonExit } from './HeaderStyles';
import profilePic from '../../assets/profile-picture.png';
import Logo from '../Logo/Logo';

const Header = () => {
  return (
    <HeaderContainer>
      <Logo fontSize='60px'/>
      <Nav>
        <NavLink to="/personagens">Personagens</NavLink>
        <NavLink to="/filmes">Filmes</NavLink>
        <NavLink to="/hqs">HQs</NavLink>
        <ProfileContainer>
          <ProfileImage src={profilePic} alt="Profile" />
          <ButtonExit>Sair</ButtonExit>
        </ProfileContainer>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
