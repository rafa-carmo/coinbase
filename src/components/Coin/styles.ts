import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  & > div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1rem;
  }
`
type TableRowItemProps = {
  flexSize?: Number
}

export const Column = styled.div<TableRowItemProps>`
  ${({ flexSize }) => css`
    ${flexSize ? `flex: ${flexSize};` : ''}
  `}
`

export const NameColumn = styled.div`
  display: flex;
  align-items: center;
`

export const CoinIcon = styled.div`
  width: 1.8rem;
  margin-right: 1rem;
`

export const Primary = styled.h2`
  margin-bottom: 0.8rem;
`

type CoinBallanceProps = {
  coinBallance?: Number
}

export const CoinBallance = styled.p<CoinBallanceProps>`
  ${({ coinBallance }) => css`
    font-size: 1.5rem;
    ${coinBallance && coinBallance < 0 ? 'color: #f0616d;' : 'color: #26ad75;'}
  `}
`

export const Secondary = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    font-size: 0.8rem;
  `}
`
