import styled from 'styled-components'

export const Container = styled.textarea`
  width: 100%;
  height: 274px;

  background: ${({ theme }) => theme.COLORS.BACKGROUND_600};
  color: ${({ theme }) => theme.COLORS.WHITE};
  border: none;
  border-radius: 10px;

  resize: none;
  padding: 16px;

  font-family: 'Roboto';
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }
`
