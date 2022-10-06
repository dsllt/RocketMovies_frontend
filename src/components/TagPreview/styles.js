import styled from 'styled-components'

export const Container = styled.span`
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: ${({ theme }) => theme.COLORS.GRAY_100};

  background: ${({ theme }) => theme.COLORS.BACKGROUND_500};
  border-radius: 8px;
  width: fit-content;

  padding: 8px 16px;
`
