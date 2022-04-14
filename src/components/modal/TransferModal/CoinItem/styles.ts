import { lighten } from 'polished'
import styled, { css } from 'styled-components'

type WrapperProps = {
  selected: boolean
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, selected }) => css`
    display: flex;
    align-items: center;
    padding: 1rem 0.5rem;
    border-radius: 0.5rem;
    margin-bottom: 0.3rem;
    cursor: pointer;
    position: relative;
    background: ${selected
      ? lighten(0.1, theme.colors.darkGray)
      : 'transparent'};
    &:hover {
      background-color: ${theme.colors.darkGray};
    }
  `}
`

export const Main = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  max-width: 90%;
  padding: 1rem;
`

export const Icon = styled.div`
  margin-right: 1rem;
  height: 2.5rem;
  width: 2.5rem;
  border-radius: 50%;
  overflow: hidden;
  display: grid;
  place-items: center;
  & > img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`

export const NameDetails = styled.div``

export const Name = styled.div`
  font-size: 1.5rem;
  margin-bottom: 0.2rem;
`

export const Symbol = styled.div`
  color: #888f9b;
  font-size: 1.2rem;
`

export const Balance = styled.div`
  padding-right: 1rem;
`

export const IsSelected = styled.div`
  ${({ theme }) => css`
    position: absolute;
    top: 0.5rem;
    right: 1rem;

    color: ${theme.colors.secondary};
    & > svg {
      width: 1.5rem;
      height: 1.5rem;
    }
  `}
`
