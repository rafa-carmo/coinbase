import { CircularProgress } from '@mui/material'
import styled, { css } from 'styled-components'

// import { Circular } from 'styled-loaders-react'

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  font-size: 2rem;
  font-weight: bold;
`

export const Transferring = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 50%;
  text-transform: uppercase;
`

export const Complete = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.secondary};
    text-transform: uppercase;
  `}
`
export const LoaderSvg = styled(CircularProgress)`
  ${({ theme }) => css`
    width: 2rem !important;
    height: 2rem !important;
    color: ${theme.colors.primary} !important;
  `}
`

export const Error = styled.div`
  ${({ theme }) => css`
    max-width: 80%;
    text-align: center;
    color: ${theme.colors.error};
  `}
`
