import styled from 'styled-components'

export const Container = styled.button`
  width: 100%;
  height: 56px;

  background: ${({ theme, delMovie }) =>
    delMovie ? theme.COLORS.RED_DARK : theme.COLORS.RED};
  border: none;
  border-radius: 8px;

  margin-top: 16px;
  padding: 16px 0;

  color: ${({ theme, delMovie }) =>
    delMovie ? theme.COLORS.RED : theme.COLORS.GRAY_400};
  font-weight: 500;
  font-size: 16px;
  line-height: 21px;

  &:disabled {
    opacity: 0.5;
  }
`
