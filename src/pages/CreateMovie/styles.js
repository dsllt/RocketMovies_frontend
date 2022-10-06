import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 116px auto;
  grid-template-areas:
    'header'
    'content';
`

export const ArrowBtn = styled(Link)`
  margin: 40px 130px 0 130px;
`

export const Main = styled.div`
  margin: 40px 130px 85px 130px;
  overflow-y: auto;
  scrollbar-color: ${({ theme }) => theme.COLORS.RED};
  scrollbar-width: thin;

  ::-webkit-scrollbar {
    width: 24px;
    display: block;
  }

  ::-webkit-scrollbar-thumb {
    background-color: transparent;
    border-radius: 8rem;
    box-shadow: inset 0 0 0px 6px ${({ theme }) => theme.COLORS.RED};
    border: solid 8px transparent;
  }

  > h2 {
    font-weight: 400;
    font-size: 20px;
    line-height: 26px;
    color: ${({ theme }) => theme.COLORS.GRAY_200};
    margin: 40px 0 24px 0;
  }

  .buttons {
    display: flex;
    gap: 40px;
    margin-top: 24px;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 40px;

  overflow: auto;

  .inputs {
    display: flex;
    gap: 40px;
  }

  > h1 {
    font-weight: 500;
    font-size: 36px;
    line-height: 47px;
    color: ${({ theme }) => theme.COLORS.WHITE};

    margin-top: 24px;
  }
`

export const Tags = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.COLORS.RED_DARK};
  padding: 16px;
  border-radius: 8px;

  display: flex;
  gap: 24px;
`
