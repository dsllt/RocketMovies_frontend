import { Container } from './styles'

export function Button({title,loading=false, delMovie, ...rest}){
  return (
    <Container 
      type='button'
      disabled={loading}
      delMovie={delMovie}
      {...rest}
    >
      {loading ? 'Carregando...': title}
    </Container>
  )
}