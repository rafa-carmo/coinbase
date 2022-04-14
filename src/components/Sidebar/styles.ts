import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    height: 100vh;
    border-right: 1px solid ${theme.colors.darkGray};
    width: 22rem;
    padding: 0 1rem;
  `}
`

export const LogoContainer = styled.div`
  margin: 1.5rem 0;
`

export const Logo = styled.div`
  width: 44%;
  object-fit: contain;
  margin-left: 1.5rem;
`

export const NavItemsContainer = styled.div`
  margin-top: 5rem;
  :hover {
    cursor: pointer;
  }
`

export const NavItem = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    font-size: 2rem;
    font-weight: ${theme.font.bold};
    border-radius: 0.5rem;
    margin-bottom: 2.5rem;
    height: 4rem;
    :hover {
      background-color: ${theme.colors.darkGray};
    }
  `}
`

type NavIconProps = {
  active: boolean
}

export const NavIcon = styled.div<NavIconProps>`
  ${({ theme, active }) => css`
    color: ${active ? theme.colors.secondary : theme.colors.lightGray};
    padding: 0.5rem;
    border-radius: 50%;
    margin: 0 1.5rem;
    display: grid;
    place-items: center;
  `}
`

export const NavTitle = styled.h2`
  font-size: 1.5rem;
`
