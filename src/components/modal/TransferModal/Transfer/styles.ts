import { darken } from 'polished'
import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  flex: 1;
`

export const Amount = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`

export const FlexInputContainer = styled.div`
  ${({ theme }) => css`
    flex: 1;
    display: flex;
    align-items: flex-end;

    span {
      font-size: 4rem;
      margin-bottom: 1.5rem;
      color: ${theme.colors.primary};
    }
  `}
`

export const FlexInput = styled.input`
  ${({ theme }) => css`
    border: none;
    background: none;
    outline: none;
    color: ${theme.colors.lightGray};
    text-wrap: wrap;
    text-align: right;
    max-width: 45%;
    margin-right: 1.5rem;
    font-size: 10rem;
    color: ${theme.colors.primary};

    &::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
  `}
`

type WarningProps = {
  hiddenText?: boolean
}

export const Warning = styled.div<WarningProps>`
  ${({ theme, hiddenText }) => css`
    padding: 2rem 0 2rem 0;
    text-align: center;
    font-size: 1.1rem;
    color: ${hiddenText ? 'black' : theme.colors.gray};

    user-select: none;
  `}
`

export const Divider = styled.hr`
  ${({ theme }) => css`
    width: 100%;
    height: 1px;
    color: ${theme.colors.darkGray};
    opacity: 0.2;
    margin: 1rem 0;
  `}
`

export const TransferForm = styled.form`
  ${({ theme }) => css`
    border: 1px solid ${theme.colors.darkGray};
    border-radius: 1rem;
  `}
`

export const Row = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${theme.colors.lightGray};
    padding: 1rem 0;
    font-size: 1.5rem;
  `}
`
export const FieldName = styled.div`
  flex: 0.5;
  padding-left: 2rem;
`

export const Icon = styled.div`
  margin-right: 1rem;
  height: 1.8rem;
  width: 1.8rem;
  border-radius: 50%;
  overflow: hidden;
  display: grid;
  place-items: center;
  & > img {
    height: 120%;
    width: 120%;
    object-fit: cover;
  }
`

export const Recipient = styled.input`
  flex: 1;
  border: none;
  background: none;
  outline: none;
  color: white;
  font-size: 1.2rem;
  text-wrap: wrap;
  margin-right: 0.5rem;
`

export const CoinSelectList = styled.div`
  display: flex;
  flex: 1.3;
  height: 100%;
  &:hover {
    cursor: pointer;
  }
`

export const CoinName = styled.div`
  flex: 1;
  border: none;
  background: none;
  outline: none;
  color: white;
  font-size: 1.2rem;
  text-wrap: wrap;
  margin-right: 0.5rem;
`

export const Continue = styled.button`
  ${({ theme }) => css`
    color: white;
    margin: 1rem;
    width: 100%;
    background-color: ${darken(0.1, theme.colors.primary)};
    padding: 1rem;
    text-align: center;
    border-radius: 0.4rem;
    font-size: 1.2rem;
    &:hover {
      cursor: pointer;
      background-color: ${theme.colors.primary};
    }
  `}
`

export const BalanceTitle = styled.div``

export const Balance = styled.div``
