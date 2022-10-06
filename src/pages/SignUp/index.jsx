import { Container, Main, Form, Background} from "./styles";

import { Link } from "react-router-dom";

import { FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi'

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";

export function SignUp(){
  return(
    <Container>
      <Main>
        <div className="header">
          <h1>RocketMovies</h1>
          <span>Aplicação para acompanhar tudo que assistir.</span>
          <h2>Cire sua conta</h2>
        </div>
        <Form>
          <Input placeholder="Nome" icon={FiUser}/>
          <Input placeholder="E-mail" icon={FiMail}/>
          <Input placeholder="Senha" icon={FiLock}/>
          <Button title='Cadastrar'/>
        </Form>
        <Link to='/'>
          <ButtonText title='Voltar para o login' icon={FiArrowLeft}/>
        </Link>
      </Main>
      <Background/>
    </Container>
  )
}