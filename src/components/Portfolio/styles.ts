import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const Content = styled.div`
  width: 100%;
  max-width: 100rem;
  padding: 2rem 1rem;
`

export const Chart = styled.div`
  ${({ theme }) => css`
    border: 1px solid ${theme.colors.darkGray};
    padding: 2rem 3rem;
    margin: 1rem 0;
  `}
`

export const Balance = styled.div``

export const BalanceTitle = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    font-size: 2rem;
    font-weight: ${theme.font.bold};
    margin-bottom: 2rem;
  `}
`

export const BalanceValue = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
  margin: 0.5rem 0;
`

export const Table = styled.table`
  width: 100%;
`

export const PortfolioTable = styled.div`
  ${({ theme }) => css`
    margin-top: 1rem;
    border: 1px solid ${theme.colors.darkGray};
  `}
`

export const TableRow = styled.tr`
  width: 100%;
  display: flex;
  justify-content: space-between;

  & > th {
    text-align: left;
  }
`

type TableRowItemProps = {
  flexSize?: Number
}

export const TableRowItem = styled.div<TableRowItemProps>`
  ${({ flexSize }) => css`
    ${flexSize ? `flex: ${flexSize};` : ''}
  `}
`

export const TableItem = styled.div`
  padding: 1rem 2rem;
`

export const Divider = styled.hr`
  ${({ theme }) => css`
    border-bottom: 1px solid ${theme.colors.lightGray};
  `}
`

export const Title = styled.h2`
  ${({ theme }) => css`
    font-size: 1.5rem;
    font-weight: ${theme.font.bold};
    color: ${theme.colors.lightGray};
  `}
`
