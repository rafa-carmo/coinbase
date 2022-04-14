import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    width: 40rem;
    height: 48rem;
    color: ${theme.colors.lightGray};
    border: 1px solid ${theme.colors.darkGray};
    display: flex;
    flex-direction: column;
    overflow: hidden;
  `}
`

export const Selector = styled.div`
  min-height: 5rem;
  max-height: 5rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

type OptionProps = {
  selected?: boolean
}

export const Option = styled.div<OptionProps>`
  ${({ theme, selected }) => css`
    height: 100%;
    width: 100%;
    display: grid;
    place-items: center;
    font-size: 2.3rem;
    font-weight: ${theme.font.bold};
    transition: background 0.5s;
    cursor: pointer;

    color: ${selected ? theme.colors.secondary : theme.colors.lightGray};
    :hover {
      background: ${theme.colors.mainBg};
    }
  `}
`

export const ModalMain = styled.div`
  padding: 2rem;
  flex: 1;
`
