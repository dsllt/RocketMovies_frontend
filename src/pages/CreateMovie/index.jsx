import { Container, Form, Tags, Main, ArrowBtn } from "./styles";

import { Link } from "react-router-dom";

import { FiArrowLeft } from 'react-icons/fi'

import { Header } from '../../components/Header'
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { Marker } from "../../components/Marker";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";

export function CreateMovie() {
  return (
    <Container>
      <Header/>

      <ArrowBtn to='/'>
        <ButtonText title="Voltar" icon={FiArrowLeft}/>
      </ArrowBtn>
          <Main>
            <Form>
              <h1>Novo filme</h1>
              <div className="inputs">
                <Input placeholder="Título" type="text"/>
                 <Input placeholder="Sua nota (de 0 a 5)" type="number"/>
              </div>
              <Textarea placeholder="Observações" type="text"/>
            </Form>

            <h2>Marcadores</h2>

            <Tags>
              <Marker value="React"  />
              <Marker placeholder="Novo marcador" isNew/>
            </Tags>

            <div className="buttons">
              <Button title="Excluir filme" delMovie/>
              <Button title="Salvar alterações"/>
            </div>

          </Main>


    </Container>
  )
}