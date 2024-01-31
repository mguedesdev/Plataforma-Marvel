import { MainContainer, MainContent, Form, BtnLogin, SaveLogin, Cadastrese} from './EntrarStyles';
import Logo from '../../components/Logo/Logo';
import ImageBg from '../../components/Entrar/ImageBg';
import '../../styles/animations.css';


function Entrar() {
  return (
    <MainContainer>
      <ImageBg animate={true} />
      <MainContent>
        <Logo fontSize='100px' animate={true}/>

        <Form animate={true}>
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

          <Cadastrese>
            <p>Ainda não tem o login?</p>
            <a href="#">Cadastre-se</a>
          </Cadastrese>
          
        </Form>
      </MainContent>
    </MainContainer>
  )
}

export default Entrar