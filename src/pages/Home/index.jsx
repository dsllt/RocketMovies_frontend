import { Container, Main, Title, NewMovie } from './styles'

import { Link } from "react-router-dom";

import { FiPlus } from 'react-icons/fi'

import { Header } from '../../components/Header'
import { Review } from '../../components/Review'

export function Home(){
  return (
    <Container>
      <Header/>
      <Title>
        <h1>Meus filmes</h1>
        <NewMovie to='/createmovie'>  
          <button> 
            <FiPlus/> 
            <span> Adicionar filme</span>
          </button>
        </NewMovie>
      </Title>
      <Main>
        <Review/>
        <Review/>
        <Review/>
      
      </Main>
    </Container>
  )
}