import { useWeb3 } from '@3rdweb/hooks'

import * as S from './styles'

const ConnectWallet = () => {
  const { connectWallet } = useWeb3()
  return (
    <S.Wrapper>
      <S.Button onClick={() => connectWallet('injected')}>
        Connect Wallet
      </S.Button>
    </S.Wrapper>
  )
}

export default ConnectWallet
