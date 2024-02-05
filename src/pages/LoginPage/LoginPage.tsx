import { MainContainer, MainContent} from './LoginPageStyles';
import Logo from '../../components/Logo/Logo';
import ImageBg from '../../components/ImageBg/ImageBg';

import { useState, useEffect } from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const [register, setRegister] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(true);

  useEffect(() => {
    setTimeout(() => setHasAnimated(false), 5000);
  }, []);

  const navigate = useNavigate();

  useEffect(() => {
    const rememberMe = localStorage.getItem('rememberMe') === 'true';
    const storedUsername = localStorage.getItem('loginUsername');

    if (rememberMe && storedUsername) {
      navigate('/personagens');
    }
  }, [navigate]);
  
  const handleRegister = () => {
    setRegister(!register);
  }

  return (
    <MainContainer>
      <ImageBg animate={true} />
      <MainContent>
        <Logo fontSize='100px' animate={true}/>

        <LoginForm
          handleRegister={handleRegister}
          register={register}
          animate={hasAnimated} 
        />
        
      </MainContent>
    </MainContainer>
  )
}

export default LoginPage