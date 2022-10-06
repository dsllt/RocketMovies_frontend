import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  width: 100%;
  height: 223px;

  background: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  padding: 32px;
  border-radius: 16px;

  margin-bottom: 24px;

  > h1 {
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
    color: ${({ theme }) => theme.COLORS.WHITE};

    margin-bottom: 8px;
  }

  .rating {
    color: ${({ theme }) => theme.COLORS.RED};
    margin-bottom: 15px;
  }

  .description {
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: ${({ theme }) => theme.COLORS.GRAY_200};

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    word-break: break-word;
    margin-bottom: 15px;
  }

  .tags {
    display: flex;
    gap: 8px;
    margin-top: 30px;
  }
`
