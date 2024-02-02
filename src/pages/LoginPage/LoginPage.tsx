import { MainContainer, MainContent, Form, BtnLogin, SaveLogin, Register} from './LoginPageStyles';
import Logo from '../../components/Logo/Logo';
import ImageBg from '../../components/ImageBg';

function LoginPage() {
  return (
    <MainContainer>
      <ImageBg animate={true} />
      <MainContent>
        <Logo fontSize='100px' animate={true}/>

        <Form>
        <div style={{marginTop: '180px'}}>
          <h1>Bem-vindo(a) de volta!</h1>
          <h3>Acesse sua conta:</h3>
        </div>

          <input type="text" placeholder="Usuário" />
          <input type="password" placeholder="Senha" />

          <SaveLogin>
            <div>
              <input type="checkbox" />
              <label>Salvar login</label>
            </div>
            <a href="#">Esqueci a senha?</a>
          </SaveLogin>

          <BtnLogin to="/personagens">Entrar</BtnLogin>

          <Register>
            <p>Ainda não tem o login?</p>
            <a href="#">Cadastre-se</a>
          </Register>
          
        </Form>
      </MainContent>
    </MainContainer>
  )
}

export default LoginPage