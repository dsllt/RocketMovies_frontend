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

export const Body = styled.div`
  margin: 40px 123px 126px 123px;
`

export const Main = styled.div`
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

  .movieId {
    display: flex;
    align-items: center;
    gap: 19px;
    margin-top: 24px;

    svg {
      height: 20px;
      width: 20px;
      color: ${({ theme }) => theme.COLORS.RED};
    }
  }

  .id {
    display: flex;
    gap: 8px;
    margin-top: 24px;

    align-items: center;

    font-family: 'Roboto';
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;

    img {
      width: 16px;
      height: 16px;
      border-radius: 50%;
      border: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_800};
    }

    svg {
      color: ${({ theme }) => theme.COLORS.RED};
    }
  }

  .tags {
    display: flex;
    gap: 8px;
    margin: 40px 0 40px 0;
  }

  > p {
    text-align: justify;
  }
`
