import Modal from 'react-modal'
import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: calc(100% -3rem);
    padding: 1rem 1.5rem;
    border-bottom: 1px solid ${theme.colors.primary};
    display: flex;
    align-items: center;
  `}
`

export const Title = styled.h2`
  ${({ theme }) => css`
    font-size: 2rem;
    font-weight: ${theme.font.bold};
    flex: 1;
  `}
`

export const ButtonContainer = styled.div`
  display: flex;
`

type ButtonProps = {
  background?: 'primary' | 'secondary' | 'transparent'
}

export const Button = styled.div<ButtonProps>`
  ${({ theme, background = 'transparent' }) => css`
    padding: 0.8rem;
    font-size: 1.3rem;
    font-weight: ${theme.font.bold};
    border-radius: 0.4rem;
    margin-right: 1rem;
    cursor: pointer;
    background: ${background === 'transparent'
      ? 'transparent'
      : theme.colors[background]};
    color: ${theme.colors.lightGray};
  `}
`

export const WalletLink = styled.div`
  ${({ theme }) => css`
    border: 1px solid ${theme.colors.darkGray};
    border-radius: 50rem;
    font-size: 0.8rem;
    margin-right: 1rem;
    padding: 0 1rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  `}
`

export const WalletLinkTitle = styled.h2`
  ${({ theme }) => css`
    font-size: 1.1rem;
    margin-bottom: 0.3rem;
    color: ${theme.colors.secondary};
    font-weight: ${theme.font.bold};
  `}
`
export const WalletAddress = styled.h2`
  cursor: pointer;
`

export const MainModal = styled(Modal)`
  .content {
    top: '50%';
    left: '50%';
    right: 'auto';
    bottom: 'auto';
    transform: 'translate(-50%, -50%)';
    background: '#0a0b0d';
    padding: 0;
    border: 'none';
  }
`
