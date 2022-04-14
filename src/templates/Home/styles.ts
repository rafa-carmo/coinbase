import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    min-width: 100vw;
    min-height: 100vh;
    background: ${theme.colors.mainBg};
    color: ${theme.colors.lightGray};
  `}
`
