import styled from 'styled-components'

export const Container = styled.span`
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: ${({ theme }) => theme.COLORS.GRAY_100};

  background: ${({ theme }) => theme.COLORS.GRAY_400};
  border-radius: 8px;
  width: fit-content;

  padding: 5px 16px;
`
