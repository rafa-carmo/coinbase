import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  margin-top: 6rem;
  padding-right: 1rem;
`

export const OfferCard = styled.div`
  ${({ theme }) => css`
    width: 30rem;
    height: 18rem;
    border: 1px solid ${theme.colors.darkGray};
    margin-bottom: 1rem;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
  `}
`

export const Title = styled.h2`
  ${({ theme }) => css`
    font-weight: ${theme.font.bold};
    font-size: 2.5rem;
    margin-bottom: 0.1rem;
  `}
`
export const Description = styled.h3`
  ${({ theme }) => css`
    font-size: 1.8rem;
    color: ${theme.colors.gray};
  `}
`

export const Placeholder = styled.div`
  flex: 1;
`

export const Additional = styled.h3`
  ${({ theme }) => css`
    font-size: 2rem;
    display: flex;
    font-weight: ${theme.font.bold};
    align-items: center;
    justify-content: space-between;

    span {
      color: ${theme.colors.gray};
      font-size: 1.5rem;
    }
  `}
`
