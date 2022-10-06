import { Container, Main, Form, Background} from "./styles";

import { Link } from "react-router-dom";

import { FiMail, FiLock } from 'react-icons/fi'

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";

export function SignIn(){
  return(
    <Container>
      <Main>
        <div className="header">
          <h1>RocketMovies</h1>
          <span>Aplicação para acompanhar tudo que assistir.</span>
          <h2>Faça seu login</h2>
        </div>
        <Form>
          <Input placeholder="E-mail" icon={FiMail}/>
          <Input placeholder="Senha" icon={FiLock}/>
          <Button title='Entrar'/>
        </Form>
        <Link to='/SignUp'>
          <ButtonText title='Criar conta'/>
        </Link>
        
      </Main>
      <Background/>
    </Container>
  )
}