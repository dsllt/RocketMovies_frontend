import { Container } from './styles'
import { FiPlus, FiX } from 'react-icons/fi'

export function Marker({value, isNew, onClick, ...rest}) {
  return (
    <Container isNew={isNew}>
      
      <input 
        type="text"
        value={value}
        readOnly={!isNew}
        size='fit-content'
        {...rest}
      />

      <button
        type='button'
        onClick={onClick}
      >
        {isNew ? <FiPlus/> : <FiX/>}
      </button>
    </Container>
  )
}