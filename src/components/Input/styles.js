import styled from 'styled-components'

export const Container = styled.div`
  background: ${({ theme }) => theme.COLORS.BACKGROUND_600};
  border: none;
  border-radius: 10px;

  height: 56px;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 12px;

  padding: 19px 24px;
  margin-bottom: 8px;


  > input {
    width: 100%;
    background: transparent;
    border: none;
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-weight: 400;
    font-size: 16px;
    line-height: 18px;

    &:placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
      font-size: 14px;
    }
  }
  > svg {
    width: 25px;
    height: 18px;
    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }
`
