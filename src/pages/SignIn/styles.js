import styled from 'styled-components'

import backgroundImage from '../../assets/background_image.png'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`
export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: 0 143px 0 134px;

  gap: 48px;

  .header {
    display: flex;
    flex-direction: column;
    align-items: left;
    h1 {
      font-weight: 700;
      font-size: 48px;
      line-height: 63px;
      color: ${({ theme }) => theme.COLORS.RED};
    }

    span {
      font-size: 14px;
      line-height: 18px;
      color: ${({ theme }) => theme.COLORS.GRAY_500};
    }

    h2 {
      margin-top: 48px;
      font-weight: 500;
      font-size: 24px;
      line-height: 32px;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`

export const Form = styled.form`
  width: 340px;
`

export const Background = styled.form`
  flex: 1;
  background: url(${backgroundImage}) no-repeat center center;
  background-size: cover;
  opacity: 0.4;
`
