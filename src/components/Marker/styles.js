import styled from 'styled-components'

export const Container = styled.div`
  background: ${({ theme, isNew }) =>
    isNew ? 'transparent' : theme.COLORS.BACKGROUND_600};
  border: ${({ theme, isNew }) =>
    isNew ? `2px dashed ${theme.COLORS.GRAY_300}` : 'none'};
  border-radius: 10px;

  padding: 16px;
  color: ${({ theme }) => theme.COLORS.GRAY_300};

  display: flex;
  gap: 16px;
  align-items: center;

  > input {
    background: transparent;
    border: none;
    min-width: 40px;

    color: ${({ theme }) => theme.COLORS.WHITE};

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }

  > button {
    background: transparent;
    border: none;

    display: flex;
    align-items: center;

    svg {
      color: ${({ theme }) => theme.COLORS.RED};
      height: 22px;
      width: 22px;
    }
  }
`
