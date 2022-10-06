import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  grid-area: header;

  height: 116px;
  width: 100%;

  border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_800};

  padding: 0 123px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 64px;

  > a {
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;

    color: ${({ theme }) => theme.COLORS.RED};
  }
`

export const User = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;
  width: fit-content;

  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    font-size: 14px;
    line-height: 18px;

    strong {
      color: ${({ theme }) => theme.COLORS.WHITE};
      white-space: nowrap;
    }

    span {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }

  > img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_800};
  }
`
export const Avatar = styled(Link)`
  > img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_800};
  }
`
