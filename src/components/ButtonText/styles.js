import styled from "styled-components";

export const Container = styled.button`
  background: none;
  border: none;

  color: ${ ({ theme }) => theme.COLORS.RED};

  display: flex;
  gap: 8px;
  align-items: center;
`