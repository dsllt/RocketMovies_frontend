import { Container ,Header, Main, Form, Avatar } from './styles'

import { Link } from 'react-router-dom';

import { FiUser, FiMail, FiLock, FiArrowLeft, FiCamera } from 'react-icons/fi'

import { ButtonText } from '../../components/ButtonText'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function Profile(){
  return (
    <Container>
      <Header>
        <Link to='/'>
          <ButtonText title='Voltar' icon={FiArrowLeft}/>
        </Link>
      </Header>
      <Main>
        <Avatar>
          <img src="https://github.com/dsllt.png" alt="Foto do usuário" />
          <label htmlFor='avatar'>
            <FiCamera/>
            <input type="file" id='avatar' />
          </label>
        </Avatar>
        <Form>
          <div className='user'>
            <Input placeholder='Nome' icon={FiUser}/>
            <Input placeholder='E-mail' icon={FiMail}/>
          </div>
          <div className='password'>
            <Input placeholder='Senha atual' icon={FiLock}/>
            <Input placeholder='Nova senha' icon={FiLock}/>
          </div>
        </Form>
        
        <Button title='Salvar'/>
      </Main>

    </Container>
  )
}