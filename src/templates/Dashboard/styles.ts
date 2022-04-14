import styled from 'styled-components'

export const Wrapper = styled.main`
  display: grid;
  grid-template-columns: 22rem calc(100% - 30rem);
  gap: 2rem;

  max-height: 100vh;
  overflow: auto scroll;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }

  & div {
    border-radius: 0.4rem;
  }
`

export const Main = styled.div``

export const MainContent = styled.div`
  display: flex;
`
