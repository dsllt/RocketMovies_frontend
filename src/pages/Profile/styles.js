import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  margin-bottom: 203px;
`
export const Header = styled.div`
  width: 100%;
  height: 144px;
  background: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  display: flex;
  padding-left: 144px;
  align-items: center;
`
export const Main = styled.div`
  width: 340px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`
export const Avatar = styled.div`
  position: relative;
  margin: -90px 0 64px 0;

  img {
    width: 186px;
    height: 186px;
    border-radius: 50%;
  }

  label {
    background: ${({ theme }) => theme.COLORS.RED};

    width: 48px;
    height: 48px;
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 7px;
    right: 7px;

    input {
      display: none;
    }

    svg {
      width: 20px;
      height: 20px;
      color: ${({ theme }) => theme.COLORS.GRAY_400};
    }
  }
`

export const Form = styled.form`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 16px;
`
