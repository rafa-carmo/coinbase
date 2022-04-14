import styled from 'styled-components'

export const Wrapper = styled.div`
  height: 100%;
`

export const Content = styled.div`
  border: 1px solid #282b2f;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  height: 100%;
`

export const QRContainer = styled.div`
  flex: 1;
  display: grid;
  place-items: center;
`

export const Image = styled.div``

export const Divider = styled.div`
  border-bottom: 1px solid #282b2f;
`

export const Row = styled.div`
  display: flex;
  width: 100%;
  padding: 1rem;
  align-items: center;
  justify-content: space-between;
  color: #8a919e;
  font-size: 1.5rem;
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
    /* margin: -0.5rem 1rem; */
    height: 120%;
    width: 120%;
    object-fit: cover;
  }
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
  font-size: 1.5rem;
  text-wrap: wrap;
  margin-right: 0.5rem;
`

export const Title = styled.div`
  color: white;
  margin-bottom: 0.5rem;
`

export const Address = styled.div`
  font-size: 1.2rem;
`

export const CopyButton = styled.div`
  cursor: pointer;
`
