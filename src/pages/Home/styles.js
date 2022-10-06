import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 116px auto;
  grid-template-areas:
    'header'
    'content';
`

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 50px 123px 40px 123px;

  > h1 {
    font-weight: 400;
    font-size: 32px;
    line-height: 42px;
  }
`

export const NewMovie = styled(Link)`
  > button {
    width: fit-content;
    height: 48px;

    padding: 13px 32px;

    background: ${({ theme }) => theme.COLORS.RED};
    border: none;
    border-radius: 8px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    svg {
      height: 16px;
      width: 16px;
    }
  }
`

export const Main = styled.div`
  margin: 0 123px 50px 123px;

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
`
