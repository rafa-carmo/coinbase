import styled, { css } from 'styled-components'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    width: 100vw;
    height: 100vh;
    display: grid;
    place-items: center;
  `}
`

export const Button = styled.button`
  ${({ theme }) => css`
    padding: 1.5rem 2.5rem;
    font-weight: ${theme.font.bold};
    color: ${theme.colors.lightGray};
    background: ${theme.colors.primary};
    border: 0;
    border-radius: 0.5rem;
    cursor: pointer;
  `}
`
