import { Form, SaveLogin, CheckBox, BtnLogin, Register, BtnRegister } from './LoginFormStyles'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import AlertLogin from '../AlertLogin/AlertLogin';

interface LoginFormProps {
  handleRegister: () => void,
  register: boolean,
  animate: boolean
}

function LoginForm({handleRegister, register, animate} : LoginFormProps) {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [textAlert, setTextAlert] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [sucess, setSucess] = useState(false);


  const navigate = useNavigate();

  const activeAlert = (text: string, sucessAlert: boolean ) => {
    setTextAlert(text);
    setShowAlert(true);
    setSucess(sucessAlert);
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  }

  const handleSignup = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      activeAlert('As senhas não coincidem!', false);
      return;
    }
  
    const userData = {
      userName,
      password
    };
  
    localStorage.setItem('user', JSON.stringify(userData));
    activeAlert('Cadastro realizado com sucesso!', true);
    setUserName('');
    setPassword('');
    setConfirmPassword('');
    setLoginPassword('');
    setLoginUsername('');
    handleRegister(); 
  }

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem('user') || 'null');
  
    if (storedUser?.userName === loginUsername && storedUser?.password === loginPassword) {
      activeAlert('Login bem-sucedido!', true);
  
      if (rememberMe) {
        localStorage.setItem('rememberMe', 'true');
        localStorage.setItem('loginUsername', loginUsername);
      } else {
        localStorage.removeItem('rememberMe');
        localStorage.removeItem('loginUsername');
      }
  
      navigate("/personagens");
    } else {
      activeAlert('Usuário ou senha incorretos!', false);
    }
  };


  return (
    <>
    <AlertLogin alert={textAlert} showAlert={showAlert} sucess={sucess}/>
    {!register ? (
    <Form animate={animate} onSubmit={handleLogin}>
      <h1>Bem-vindo(a) de volta!</h1>
      <h2>Acesse sua conta:</h2>

      <input
        type="text"
        placeholder="Usuário"
        value={loginUsername}
        onChange={(e) => setLoginUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Senha"
        value={loginPassword}
        onChange={(e) => setLoginPassword(e.target.value)}
      />
      
      <SaveLogin>
        <CheckBox>
        <input 
          type="checkbox" 
          checked={rememberMe}
          onChange={(e) => setRememberMe(e.target.checked)} 
        />
          <label>Salvar login</label>
        </CheckBox>
        <a href="#">Esqueci a senha?</a>
      </SaveLogin>

      <BtnLogin type="submit">Entrar</BtnLogin>

      <Register>
        <p>Ainda não tem o login?</p>
        <a href="#" onClick={handleRegister}>Cadastre-se</a>
      </Register>
      
    </Form>

    ) : (
      
    <Form animate={animate} onSubmit={handleSignup}>
      <h1>Bem-vindo(a)</h1>
      <h2>Crie sua conta:</h2>

      <input
        type="text"
        placeholder="Usuário"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <input
        type="password"
        placeholder="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="password"
        placeholder="Confirmar Senha"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />

      <BtnRegister type="submit">Cadastrar</BtnRegister>

      <Register>
        <p>Já tem conta ?</p>
        <a href="#" onClick={handleRegister}>Faça login</a>
      </Register>
      
    </Form>
    )}
    </>
  )
}

export default LoginForm